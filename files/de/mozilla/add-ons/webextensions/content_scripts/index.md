---
title: Content-Skripte
slug: Mozilla/Add-ons/WebExtensions/Content_scripts
l10n:
  sourceCommit: 59810b5b4a4cdf1151c088ff5165a85f4a96f518
---

{{AddonSidebar}}

Ein Content-Skript ist ein Teil Ihrer Erweiterung, der im Kontext einer Webseite ausgeführt wird (im Gegensatz zu Hintergrundskripten, die Teil der Erweiterung sind, oder Skripten, die Teil der Webseite selbst sind, wie z.B. diejenigen, die über das `{{HTMLElement("script")}}`-Element geladen werden).

[Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts) können auf alle [WebExtension JavaScript APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) zugreifen, aber sie können nicht direkt auf den Inhalt von Webseiten zugreifen. Wenn Ihre Erweiterung das tun muss, benötigen Sie Content-Skripte.

Ähnlich wie die Skripte, die von normalen Webseiten geladen werden, können Content-Skripte den Inhalt ihrer Seiten mithilfe der standardmäßigen [Web APIs](/de/docs/Web/API) lesen und modifizieren. Sie können dies jedoch nur tun, wenn [Host-Berechtigungen für den Ursprungsort der Webseite erteilt wurden](#berechtigungen).

> [!NOTE] Einige Web-APIs sind auf [sichere Kontexte](/de/docs/Web/Security/Secure_Contexts) beschränkt, was auch für Content-Skripte gilt, die in diesen Kontexten ausgeführt werden. Eine Ausnahme bildet [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents), das von Content-Skripten in unsicheren Kontexten in Firefox aufgerufen werden kann.

Content-Skripte können nur auf [einen kleinen Teil der WebExtension-APIs zugreifen](#webextension_apis), sie können jedoch [mit Hintergrundskripten kommunizieren](#kommunikation_mit_hintergrundskripten) und dadurch indirekt auf die WebExtension-APIs zugreifen.

## Laden von Content-Skripten

Sie können ein Content-Skript in eine Webseite laden:

1. Zur Installationszeit, in Seiten, die mit URL-Mustern übereinstimmen.
   - Mit dem [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) Schlüssel in Ihrer `manifest.json` können Sie den Browser bitten, ein Content-Skript zu laden, wenn der Browser eine Seite lädt, deren URL [mit einem bestimmten Muster übereinstimmt](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns).
2. Zur Laufzeit, in Seiten, die mit URL-Mustern übereinstimmen.
   - Verwenden Sie dazu {{WebExtAPIRef("scripting.registerContentScripts()")}} oder (nur in Manifest V2 in Firefox) {{WebExtAPIRef("contentScripts")}}, um den Browser aufzufordern, ein Content-Skript zu laden, wenn der Browser eine Seite lädt, deren URL [mit einem bestimmten Muster übereinstimmt](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns). (Dies ähnelt Methode 1, _außer_ dass Sie Content-Skripte zur Laufzeit hinzufügen und entfernen können.)
3. Zur Laufzeit, in bestimmte Tabs.
   - Verwenden Sie dazu {{WebExtAPIRef("scripting.executeScript()")}} oder (nur in Manifest V2) {{WebExtAPIRef("tabs.executeScript()")}}, um ein Content-Skript in einen bestimmten Tab zu laden, wann immer Sie möchten. (Zum Beispiel als Reaktion auf das Klicken eines [Browser-Buttons](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button)).

Es gibt nur einen globalen Scope _pro Frame, pro Erweiterung_. Dies bedeutet, dass Variablen aus einem Content-Skript direkt von einem anderen Content-Skript zugegriffen werden können, unabhängig davon, wie das Content-Skript geladen wurde.

Mit den Methoden (1) und (2) können Sie Skripte nur in Seiten laden, deren URLs mit einem [Übereinstimmungsmuster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) dargestellt werden können.

Mit Methode (3) können Sie auch Skripte in Seiten laden, die mit Ihrer Erweiterung gebündelt sind, aber Sie können keine Skripte in privilegierte Browser-Seiten laden (wie "`about:debugging`" oder "`about:addons`").

> **Hinweis:** [Dynamische JS-Modul-Imports](/de/docs/Web/JavaScript/Guide/Modules#dynamic_module_loading) funktionieren jetzt in Content-Skripten. Für weitere Details siehe [Firefox-Bug 1536094](https://bugzil.la/1536094).
> Es sind nur URLs mit dem _moz-extension_ Schema erlaubt, was Daten-URLs ausschließt ([Firefox-Bug 1587336](https://bugzil.la/1587336)).

## Berechtigungen, Beschränkungen und Einschränkungen

### Berechtigungen

Registrierte Content-Skripte werden nur ausgeführt, wenn der Erweiterung [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die Domain gewährt wurden.

Um Skripte programmatisch einzufügen, benötigt die Erweiterung entweder die [`activeTab` Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions). Die `scripting` Berechtigung ist erforderlich, um Methoden aus der {{WebExtAPIRef("scripting")}} API zu verwenden.

Ab Manifest V3 werden Host-Berechtigungen nicht mehr automatisch zur Installationszeit gewährt. Benutzer können sich dafür oder dagegen entscheiden, Host-Berechtigungen zu erteilen, nachdem die Erweiterung installiert wurde.

### Eingeschränkte Domains

Sowohl [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) als auch die [`activeTab` Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) haben Ausnahmen für einige Domains. Content-Skripte sind daran gehindert, auf diesen Domains ausgeführt zu werden, beispielsweise um den Nutzer vor einem Angriff auf Berechtigungen durch spezielle Seiten zu schützen.

In Firefox umfasst dies die folgenden Domains:

- accounts-static.cdn.mozilla.net
- accounts.firefox.com
- addons.cdn.mozilla.net
- addons.mozilla.org
- api.accounts.firefox.com
- content.cdn.mozilla.net
- discovery.addons.mozilla.org
- install.mozilla.org
- oauth.accounts.firefox.com
- profile.accounts.firefox.com
- support.mozilla.org
- sync.services.mozilla.com

Andere Browser haben ähnliche Einschränkungen für die Websites, von denen Erweiterungen installiert werden können. Zum Beispiel ist der Zugriff auf chrome.google.com in Chrome eingeschränkt.

> [!NOTE]
> Da diese Einschränkungen addons.mozilla.org beinhalten, kann es sein, dass Benutzer, die Ihre Erweiterung direkt nach der Installation verwenden, feststellen, dass sie nicht funktioniert. Um dies zu vermeiden, sollten Sie eine entsprechende Warnung oder eine [Einführungsseite](https://extensionworkshop.com/documentation/develop/onboard-upboard-offboard-users/) hinzufügen, um Benutzer von `addons.mozilla.org` wegzuführen.

Der Satz von Domains kann durch Unternehmensrichtlinien weiter eingeschränkt werden: Firefox erkennt die `restricted_domains` Richtlinie, wie in [ExtensionSettings in mozilla/policy-templates](https://github.com/mozilla/policy-templates/blob/master/README.md#extensionsettings) dokumentiert. Chromes `runtime_blocked_hosts` Richtlinie ist in der [Konfiguration der ExtensionSettings-Richtlinie](https://support.google.com/chrome/a/answer/9867568) dokumentiert.

### Einschränkungen

Ganze Tabs oder Frames können mithilfe von [`data:` URI](/de/docs/Web/URI/Schemes/data), [`Blob`](/de/docs/Web/API/URL/createObjectURL_static)-Objekten und anderen ähnlichen Techniken geladen werden. Die Unterstützung des Einspeicherns von Content-Skripten in solchen speziellen Dokumenten variiert zwischen den Browsern, siehe den Firefox [Bug #1411641 Kommentar 41](https://bugzil.la/1411641#c41) für einige Details.

## Content-Skript-Umgebung

### DOM-Zugang

Content-Skripte können auf den DOM der Seite zugreifen und ihn verändern, genau wie es normale Seitenskripte können. Sie können auch alle Änderungen sehen, die von Seitenskripten am DOM vorgenommen wurden.

Content-Skripte erhalten jedoch eine "saubere" Ansicht des DOM. Das bedeutet:

- Content-Skripte können keine in Seitenskripten definierten JavaScript-Variablen sehen.
- Wenn ein Seitenskript eine eingebaute DOM-Eigenschaft neu definiert, sieht das Content-Skript die ursprüngliche Version der Eigenschaft, nicht die neu definierte Version.

Wie im Abschnitt ["Content-Skript-Umgebung" bei Chrome-Inkompatibilitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#content_script_environment) bemerkt, unterscheidet sich das Verhalten je nach Browser:

- In Firefox wird dieses Verhalten als [Xray-Vision](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts#xray_vision_in_firefox) bezeichnet. Content-Skripte können auf JavaScript-Objekte aus ihrem eigenen globalen Scope oder auf Xray-umwickelte Versionen von der Webseite stoßen.

- In Chrome wird dieses Verhalten durch eine [isolierte Welt](https://chromium.googlesource.com/chromium/src/+/master/third_party/blink/renderer/bindings/core/v8/V8BindingDesign.md#world) erzwungen, die einen grundlegend anderen Ansatz verwendet.

Betrachten Sie eine Webseite wie diese:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
  </head>

  <body>
    <script src="page-scripts/page-script.js"></script>
  </body>
</html>
```

Das Skript `page-script.js` macht Folgendes:

```js
// page-script.js

// add a new element to the DOM
let p = document.createElement("p");
p.textContent = "This paragraph was added by a page script.";
p.setAttribute("id", "page-script-para");
document.body.appendChild(p);

// define a new property on the window
window.foo = "This global variable was added by a page script";

// redefine the built-in window.confirm() function
window.confirm = () => {
  alert("The page script has also redefined 'confirm'");
};
```

Jetzt injiziert eine Erweiterung ein Content-Skript auf die Seite:

```js
// content-script.js

// can access and modify the DOM
let pageScriptPara = document.getElementById("page-script-para");
pageScriptPara.style.backgroundColor = "blue";

// can't see properties added by page-script.js
console.log(window.foo); // undefined

// sees the original form of redefined properties
window.confirm("Are you sure?"); // calls the original window.confirm()
```

Dasselbe trifft umgekehrt zu; Seitenskripte können JavaScript-Eigenschaften, die durch Content-Skripte hinzugefügt wurden, nicht sehen.

Dies bedeutet, dass Content-Skripte darauf vertrauen können, dass DOM-Eigenschaften sich vorhersehbar verhalten, ohne sich Sorgen machen zu müssen, dass ihre Variablen mit denen des Seitenskripts kollidieren.

Eine praktische Konsequenz dieses Verhaltens ist, dass ein Content-Skript keinen Zugriff auf JavaScript-Bibliotheken hat, die von der Seite geladen werden. Wenn die Seite also jQuery beinhaltet, kann das Content-Skript es nicht sehen.

Wenn ein Content-Skript eine JavaScript-Bibliothek verwenden muss, sollte die Bibliothek selbst als Content-Skript _zusammen mit_ dem Content-Skript, das sie nutzen möchte, injiziert werden:

```json
"content_scripts": [
  {
    "matches": ["*://*.mozilla.org/*"],
    "js": ["jquery.js", "content-script.js"]
  }
]
```

> [!NOTE]
> Firefox bietet [cloneInto()](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/cloneInto) und [exportFunction()](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/exportFunction), um Content-Skripte in die Lage zu versetzen, auf JavaScript-Objekte zuzugreifen, die durch Seitenskripte erstellt wurden, und ihre JavaScript-Objekte Seitenskripten zugänglich zu machen.
>
> Siehe [Teilen von Objekten mit Seitenskripten](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts) für weitere Details.

### WebExtension APIs

Zusätzlich zu den standardmäßigen DOM-APIs können Content-Skripte die folgenden WebExtension-APIs verwenden:

**Von [`extension`](/de/docs/Mozilla/Add-ons/WebExtensions/API/extension):**

- [`getURL()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/extension/getURL)
- [`inIncognitoContext`](/de/docs/Mozilla/Add-ons/WebExtensions/API/extension/inIncognitoContext)

**Von [`runtime`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime):**

- [`connect()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/connect)
- [`getManifest()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/getManifest)
- [`getURL()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/getURL)
- [`onConnect`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect)
- [`onMessage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)
- [`sendMessage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage)

**Von [`i18n`](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n):**

- [`getMessage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n/getMessage)
- [`getAcceptLanguages()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n/getAcceptLanguages)
- [`getUILanguage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n/getUILanguage)
- [`detectLanguage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n/detectLanguage)

**Von [`menus`](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus):**

- [`getTargetElement`](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/getTargetElement)

**Alles von:**

- [`storage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage)

### XHR und Fetch

Content-Skripte können Anfragen mit den normalen [`window.XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) und [`window.fetch()`](/de/docs/Web/API/Fetch_API) APIs durchführen.

> [!NOTE]
> In Firefox bei Manifest V2 erfolgen Content-Skript-Anfragen (zum Beispiel mit [`fetch()`](/de/docs/Web/API/Fetch_API/Using_Fetch)) im Kontext einer Erweiterung, daher müssen Sie eine absolute URL angeben, um auf Seiteninhalte zu verweisen.
>
> In Chrome und Firefox bei Manifest V3 erfolgen diese Anfragen im Kontext der Seite, sodass sie relativ zur URL erfolgen. Beispielsweise wird `/api` an `https://«current page URL»/api` gesendet.

Content-Skripte erhalten dieselben domänenübergreifenden Privilegien wie der Rest der Erweiterung: Wenn die Erweiterung also domänenübergreifenden Zugriff für eine Domain mit dem [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) Schlüssel in `manifest.json` angefordert hat, dann erhalten auch ihre Content-Skripte Zugriff auf diese Domain.

> [!NOTE]
> Beim Verwenden von Manifest V3 können Content-Skripte domänenübergreifende Anfragen stellen, wenn der Zielserver mit [CORS](/de/docs/Web/HTTP/CORS) zustimmt; allerdings funktionieren Host-Berechtigungen nicht in Content-Skripten, sie funktionieren jedoch weiterhin auf regulären Erweiterungsseiten.

Dies wird erreicht, indem privilegiertere XHR- und Fetch-Instanzen im Content-Skript zur Verfügung gestellt werden, was den Nebeneffekt hat, dass die [`Origin`](/de/docs/Web/HTTP/Headers/Origin) und [`Referer`](/de/docs/Web/HTTP/Headers/Referer) Header nicht gesetzt werden, wie es bei einer Anfrage der Seite selbst der Fall wäre; dies ist oft vorzuziehen, um zu verhindern, dass die Anfrage ihre domänenübergreifende Natur offenbart.

> [!NOTE]
> In Firefox bei Manifest V2 können Erweiterungen, die Anforderungen durchführen müssen, die sich so verhalten, als wären sie von den Inhalten selbst gesendet worden, `content.XMLHttpRequest` und `content.fetch()` verwenden.
>
> Für Cross-Browser-Erweiterungen muss das Vorhandensein dieser Methoden funktionsbedingt erkannt werden.
>
> Dies ist in Manifest V3 nicht möglich, da `content.XMLHttpRequest` und `content.fetch()` nicht verfügbar sind.

> [!NOTE]
> In Chrome, ab Version 73, und Firefox, ab Version 101 bei Verwendung von Manifest V3, unterliegen Content-Skripte der gleichen [CORS](/de/docs/Web/HTTP/CORS)-Richtlinie wie die Seite, in der sie laufen. Nur Backendskripte haben erhöhte domänenübergreifende Privilegien. Weitere Informationen finden Sie unter [Änderungen bei Cross-Origin-Anfragen in Chrome-Extension-Content-Skripten](https://www.chromium.org/Home/chromium-security/extension-content-script-fetches/).

## Kommunikation mit Hintergrundskripten

Obwohl Content-Skripte die meisten WebExtension-APIs nicht direkt nutzen können, können sie mithilfe der Messaging-APIs mit den Hintergrundskripten der Erweiterung kommunizieren und so indirekt auf alle APIs zugreifen, die die Hintergrundskripte nutzen können.

Es gibt zwei grundlegende Muster für die Kommunikation zwischen den Hintergrundskripten und den Content-Skripten:

- Sie können **Einmal-Nachrichten** senden (mit optionaler Antwort).
- Sie können eine **längere Verbindung zwischen den beiden Seiten** herstellen und diese Verbindung verwenden, um Nachrichten auszutauschen.

### Einmal-Nachrichten

Um Einmal-Nachrichten zu senden, mit optionaler Antwort, können Sie die folgenden APIs verwenden:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="row"></th>
      <th scope="col">Im Content-Skript</th>
      <th scope="col">Im Hintergrundskript</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Nachricht senden</th>
      <td>
        <code
          ><a
            href="/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage"
            >browser.runtime.sendMessage()</a
          ></code
        >
      </td>
      <td>
        <code
          ><a
            href="/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage"
            >browser.tabs.sendMessage()</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Nachricht empfangen</th>
      <td>
        <code
          ><a
            href="/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage"
            >browser.runtime.onMessage</a
          ></code
        >
      </td>
      <td>
        <code
          ><a
            href="/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage"
            >browser.runtime.onMessage</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

Zum Beispiel hier ein Content-Skript, das auf Klickereignisse auf der Webseite hört.

Wenn der Klick auf einem Link erfolgte, sendet es eine Nachricht an die Hintergrundseite mit der Ziel-URL:

```js
// content-script.js

window.addEventListener("click", notifyExtension);

function notifyExtension(e) {
  if (e.target.tagName !== "A") {
    return;
  }
  browser.runtime.sendMessage({ url: e.target.href });
}
```

Das Hintergrundskript hört auf diese Nachrichten und zeigt eine Benachrichtigung unter Verwendung der [`notifications`](/de/docs/Mozilla/Add-ons/WebExtensions/API/notifications) API an:

```js
// background-script.js

browser.runtime.onMessage.addListener(notify);

function notify(message) {
  browser.notifications.create({
    type: "basic",
    iconUrl: browser.extension.getURL("link.png"),
    title: "You clicked a link!",
    message: message.url,
  });
}
```

(Dieser Beispielcode ist leicht adaptiert vom [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) Beispiel auf GitHub.)

### Verbindungsbasierte Nachrichtenübermittlung

Das Senden von Einmal-Nachrichten kann umständlich werden, wenn Sie viele Nachrichten zwischen einem Hintergrundskript und einem Content-Skript austauschen. Ein alternatives Muster besteht daher darin, eine länger lebende Verbindung zwischen den beiden Kontexten herzustellen und diese Verbindung zu nutzen, um Nachrichten auszutauschen.

Beide Seiten verfügen über ein [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port)-Objekt, das sie zur Nachrichtenübermittlung verwenden können.

Um die Verbindung herzustellen:

- Eine Seite hört auf Verbindungen mit [`runtime.onConnect`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect)
- Die andere Seite ruft:

  - [`tabs.connect()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/connect) (wenn zum Content-Skript verbunden wird)
  - [`runtime.connect()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/connect) (wenn zum Hintergrundskript verbunden wird)

Dies gibt ein [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port)-Objekt zurück.

- Der [`runtime.onConnect`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect)-Listener erhält sein eigenes [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port)-Objekt übergeben.

Sobald jede Seite einen Port hat, können die beiden Seiten:

- Nachrichten mit `runtime.Port.postMessage()` senden
- Nachrichten mit `runtime.Port.onMessage()` empfangen

Zum Beispiel, sobald dieses Content-Skript geladen ist:

- Verbindet es sich mit dem Hintergrundskript
- Speichert den `Port` in einer Variablen `myPort`
- Lauscht auf Nachrichten auf `myPort` (und protokolliert sie)
- Sendet Nachrichten an das Hintergrundskript, wenn der Benutzer auf das Dokument klickt

```js
// content-script.js

let myPort = browser.runtime.connect({ name: "port-from-cs" });
myPort.postMessage({ greeting: "hello from content script" });

myPort.onMessage.addListener((m) => {
  console.log("In content script, received message from background script: ");
  console.log(m.greeting);
});

document.body.addEventListener("click", () => {
  myPort.postMessage({ greeting: "they clicked the page!" });
});
```

Das entsprechende Hintergrundskript:

- Lauscht auf Verbindungsversuche vom Content-Skript
- Bei Empfang eines Verbindungsversuchs:

  - Speichert den Port in einer Variablen namens `portFromCS`
  - Sendet dem Content-Skript eine Nachricht über den Port
  - Beginnt, auf Nachrichten zu hören, die auf dem Port empfangen werden, und loggt sie

- Sendet Nachrichten an das Content-Skript, verwendet `portFromCS`, wenn der Benutzer auf die Browser-Aktion der Erweiterung klickt

```js
// background-script.js

let portFromCS;

function connected(p) {
  portFromCS = p;
  portFromCS.postMessage({ greeting: "hi there content script!" });
  portFromCS.onMessage.addListener((m) => {
    portFromCS.postMessage({
      greeting: `In background script, received message from content script: ${m.greeting}`,
    });
  });
}

browser.runtime.onConnect.addListener(connected);

browser.browserAction.onClicked.addListener(() => {
  portFromCS.postMessage({ greeting: "they clicked the button!" });
});
```

#### Mehrere Content-Skripte

Wenn Sie mehrere Content-Skripte gleichzeitig kommunizieren lassen, können Sie Verbindungen zu ihnen möglicherweise in einem Array speichern.

```js
// background-script.js

let ports = [];

function connected(p) {
  ports[p.sender.tab.id] = p;
  // …
}

browser.runtime.onConnect.addListener(connected);

browser.browserAction.onClicked.addListener(() => {
  ports.forEach((p) => {
    p.postMessage({ greeting: "they clicked the button!" });
  });
});
```

### Auswählen zwischen Einmal-Nachrichten und verbindungsbasierter Nachrichtenübermittlung

Die Wahl zwischen Einmal- und verbindungsbasierter Nachrichtenübermittlung hängt davon ab, wie Ihre Erweiterung erwartet, Messaging zu nutzen.

Die empfohlenen Best Practices sind:

- **Verwenden Sie Einmal-Nachrichten, wenn…**
  - Nur eine Antwort auf eine Nachricht erwartet wird.
  - Eine kleine Anzahl von Skripten darauf lauscht, Nachrichten zu empfangen ({{WebExtAPIRef("runtime.onMessage")}} Aufrufe).
- **Verwenden Sie verbindungsbasierte Nachrichtenübermittlung, wenn…**
  - Skripte Sitzungen durchführen, bei denen mehrere Nachrichten ausgetauscht werden.
  - Die Erweiterung über den Fortschritt einer Aufgabe informiert werden oder eine Aufgabe unterbrechen möchte, die mit Messaging gestartet wurde.

## Kommunikation mit der Webseite

Standardmäßig erhalten Content-Skripte keinen Zugriff auf die Objekte, die durch Seitenskripte erstellt wurden. Sie können jedoch mit Seitenskripten über die DOM-APIs [`window.postMessage`](/de/docs/Web/API/Window/postMessage) und [`window.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) kommunizieren.

Zum Beispiel:

```js
// page-script.js

let messenger = document.getElementById("from-page-script");

messenger.addEventListener("click", messageContentScript);

function messageContentScript() {
  window.postMessage(
    {
      direction: "from-page-script",
      message: "Message from the page",
    },
    "*",
  );
}
```

```js
// content-script.js

window.addEventListener("message", (event) => {
  if (
    event.source === window &&
    event?.data?.direction === "from-page-script"
  ) {
    alert(`Content script received message: "${event.data.message}"`);
  }
});
```

Für ein vollständiges funktionierendes Beispiel, [besuchen Sie die Demoseite auf GitHub](https://mdn.github.io/webextensions-examples/content-script-page-script-messaging.html) und folgen Sie den Anweisungen.

> [!WARNING]
> Seien Sie sehr vorsichtig im Umgang mit unzuverlässigem Webinhalt auf diese Weise! Erweiterungen sind privilegierter Code, der mächtige Fähigkeiten haben kann, und feindliche Webseiten können sie leicht dazu bringen, auf diese Fähigkeiten zuzugreifen.
>
> Nehmen Sie ein triviales Beispiel an, bei dem der Content-Skript-Code, der die Nachricht empfangen hat, Folgendes tut:
>
> ```js example-bad
> // content-script.js
>
> window.addEventListener("message", (event) => {
>   if (
>     event.source === window &&
>     event?.data?.direction === "from-page-script"
>   ) {
>     eval(event.data.message);
>   }
> });
> ```
>
> Jetzt kann das Seitenskript jeden Code mit allen Privilegien des Content-Skripts ausführen.

## Verwendung von `eval()` in Content-Skripten

> **Hinweis:** `eval()` ist in Manifest V3 nicht verfügbar.

- In Chrome
  - : {{jsxref("Global_Objects/eval", "eval")}} führt Code immer im Kontext des **Content-Skripts** aus, nicht im Kontext der Seite.
- In Firefox

  - : Wenn Sie `eval()` aufrufen, wird der Code im Kontext des **Content-Skripts** ausgeführt.

    Wenn Sie `window.eval()` aufrufen, wird der Code im Kontext der **Seite** ausgeführt.

Betrachten Sie zum Beispiel ein Content-Skript wie dieses:

```js
// content-script.js

window.eval("window.x = 1;");
eval("window.y = 2");

console.log(`In content script, window.x: ${window.x}`);
console.log(`In content script, window.y: ${window.y}`);

window.postMessage(
  {
    message: "check",
  },
  "*",
);
```

Dieser Code erstellt nur einige Variablen `x` und `y` mit `window.eval()` und `eval()`, protokolliert ihre Werte und sendet dann eine Nachricht zur Seite.

Beim Empfang der Nachricht protokolliert das Seitenskript dieselben Variablen:

```js
window.addEventListener("message", (event) => {
  if (event.source === window && event.data && event.data.message === "check") {
    console.log(`In page script, window.x: ${window.x}`);
    console.log(`In page script, window.y: ${window.y}`);
  }
});
```

In Chrome gibt dies eine Ausgabe wie diese:

```plain
In content script, window.x: 1
In content script, window.y: 2
In page script, window.x: undefined
In page script, window.y: undefined
```

In Firefox gibt dies eine Ausgabe wie diese:

```plain
In content script, window.x: undefined
In content script, window.y: 2
In page script, window.x: 1
In page script, window.y: undefined
```

Dasselbe gilt für [`setTimeout()`](/de/docs/Web/API/setTimeout), [`setInterval()`](/de/docs/Web/API/setInterval) und [`Function()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function).

> [!WARNING]
> Seien Sie sehr vorsichtig, wenn Sie Code im Kontext der Seite ausführen!
>
> Die Umgebung der Seite wird möglicherweise von bösartigen Webseiten kontrolliert, die Objekte, mit denen Sie interagieren, neu definieren können, um sich unerwartet zu verhalten:
>
> ```js example-bad
> // page.js definiert console.log neu
>
> let original = console.log;
>
> console.log = () => {
>   original(true);
> };
> ```
>
> ```js example-bad
> // content-script.js ruft die neu definierte Version auf
>
> window.eval("console.log(false)");
> ```
