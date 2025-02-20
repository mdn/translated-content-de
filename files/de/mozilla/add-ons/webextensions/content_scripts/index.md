---
title: Inhalts-Skripte
slug: Mozilla/Add-ons/WebExtensions/Content_scripts
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

{{AddonSidebar}}

Ein Inhalts-Skript ist ein Teil Ihrer Erweiterung, das im Kontext einer Webseite ausgeführt wird. Es kann Seiteninhalte mithilfe der standardmäßigen [Web-APIs](/de/docs/Web/API) lesen und ändern. Das Verhalten von Inhalts-Skripten ähnelt dem von Skripten, die Teil einer Website sind, wie zum Beispiel solche, die mit dem {{HTMLElement("script")}}-Element geladen werden. Inhalts-Skripte können jedoch nur auf Seiteninhalte zugreifen, wenn [Host-Berechtigungen für die Herkunft der Webseite gewährt wurden](#berechtigungen).

Inhalts-Skripte können auf [eine kleine Teilmenge der WebExtension-APIs](#webextension-apis) zugreifen, können jedoch [mit Hintergrund-Skripten kommunizieren](#kommunikation_mit_hintergrund-skripten) mithilfe eines Nachrichtensystems und somit indirekt auf die WebExtension-APIs zugreifen. [Hintergrund-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts) können auf alle [WebExtension JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) zugreifen, jedoch nicht direkt auf die Inhalte von Webseiten.

> [!NOTE] Einige Web-APIs sind auf [sichere Kontexte](/de/docs/Web/Security/Secure_Contexts) beschränkt, was auch für Inhalts-Skripte gilt, die in diesen Kontexten ausgeführt werden. Eine Ausnahme ist [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents), das in Firefox von Inhalts-Skripten in unsicheren Kontexten aufgerufen werden kann.

## Laden von Inhalts-Skripten

Sie können ein Inhalts-Skript in eine Webseite laden:

1. Zum Installationszeitpunkt, in Seiten, die mit URL-Mustern übereinstimmen.
   - Mit dem [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Schlüssel in Ihrer `manifest.json` können Sie den Browser anweisen, ein Inhalts-Skript zu laden, wann immer der Browser eine Seite lädt, deren URL [mit einem bestimmten Muster übereinstimmt](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns).
2. Zur Laufzeit, in Seiten, die mit URL-Mustern übereinstimmen.
   - Mit {{WebExtAPIRef("scripting.registerContentScripts()")}} oder (nur in Manifest V2 in Firefox) {{WebExtAPIRef("contentScripts")}} können Sie den Browser anweisen, ein Inhalts-Skript zu laden, wann immer der Browser eine Seite lädt, deren URL [mit einem bestimmten Muster übereinstimmt](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns). (Dies ähnelt Methode 1, _außer_, dass Sie Inhalts-Skripte zur Laufzeit hinzufügen und entfernen können.)
3. Zur Laufzeit, in spezifische Tabs.
   - Mit {{WebExtAPIRef("scripting.executeScript()")}} oder (nur in Manifest V2) {{WebExtAPIRef("tabs.executeScript()")}} können Sie ein Inhalts-Skript in einen bestimmten Tab laden, wann immer Sie möchten. (Zum Beispiel als Reaktion auf den Klick eines Nutzers auf eine [Browser-Aktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button).)

Es gibt nur einen globalen Gültigkeitsbereich _pro Frame, pro Erweiterung_. Das bedeutet, dass Variablen aus einem Inhalts-Skript von anderen Inhalts-Skripten unabhängig davon zugegriffen werden können, wie das Inhalts-Skript geladen wurde.

Mit den Methoden (1) und (2) können Sie Skripte nur in Seiten laden, deren URLs mit einem [Übereinstimmungsmuster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) dargestellt werden können.

Mit Methode (3) können Sie Skripte auch in Seiten laden, die mit Ihrer Erweiterung gepackt sind, aber Sie können keine Skripte in privilegierte Browser-Seiten laden (wie "`about:debugging`" oder "`about:addons`").

> **Hinweis:** [Dynamische JS-Modulimporte](/de/docs/Web/JavaScript/Guide/Modules#dynamic_module_loading) funktionieren jetzt in Inhalts-Skripten. Weitere Details finden Sie unter [Firefox Bug 1536094](https://bugzil.la/1536094).
> Nur URLs mit dem _moz-extension_-Schema sind erlaubt, was data-URLs ausschließt ([Firefox Bug 1587336](https://bugzil.la/1587336)).

### Persistenz

Inhalts-Skripte, die mit {{WebExtAPIRef("scripting.executeScript()")}} oder (nur in Manifest V2) {{WebExtAPIRef("tabs.executeScript()")}} geladen werden, laufen auf Anfrage und sind nicht persistent.

Inhalts-Skripte, die im Manifest-Datei-Schlüssel [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) definiert sind oder mit der {{WebExtAPIRef("scripting.registerContentScripts()")}} API, oder (nur in Manifest V2 in Firefox) mit der {{WebExtAPIRef("contentScripts")}} API, sind standardmäßig persistent. Sie bleiben über Browser- und Erweiterungsneustarts hinweg registriert.

Die {{WebExtAPIRef("scripting.registerContentScripts()")}} API bietet jedoch die Möglichkeit, das Skript als nicht persistent zu definieren. Dies kann sinnvoll sein, wenn Ihre Erweiterung (im Namen eines Nutzers) ein Inhalts-Skript nur in der aktuellen Browsersitzung aktivieren möchte.

## Berechtigungen, Einschränkungen und Begrenzungen

### Berechtigungen

Registrierte Inhalts-Skripte werden nur ausgeführt, wenn der Erweiterung [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die Domain erteilt sind.

Um Skripte programmatisch zu injizieren, benötigt die Erweiterung entweder die [`activeTab`-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions). Die `scripting`-Berechtigung ist erforderlich, um Methoden der {{WebExtAPIRef("scripting")}} API zu nutzen.

Beginnend mit Manifest V3 werden Host-Berechtigungen nicht automatisch zum Installationszeitpunkt gewährt. Nutzer können nach der Installation der Erweiterung für oder gegen Host-Berechtigungen optieren.

### Eingeschränkte Domains

Sowohl [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) als auch die [`activeTab`-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) haben Ausnahmen für bestimmte Domains. Inhalts-Skripte werden daran gehindert, auf diesen Domains auszuführen, um den Nutzer vor einer Eskalation der Privilegien durch Erweiterungen in speziellen Seiten zu schützen.

In Firefox schließen diese Domains ein:

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

Andere Browser haben ähnliche Einschränkungen für die Websites, aus denen Erweiterungen installiert werden können. Zum Beispiel ist der Zugriff auf chrome.google.com in Chrome eingeschränkt.

> [!NOTE]
> Da diese Einschränkungen addons.mozilla.org einschließen, könnten Nutzer, die versuchen, Ihre Erweiterung direkt nach der Installation zu verwenden, feststellen, dass sie nicht funktioniert. Um dies zu vermeiden, sollten Sie eine entsprechende Warnung oder eine [Onboarding-Seite](https://extensionworkshop.com/documentation/develop/onboard-upboard-offboard-users/) hinzufügen, um Nutzer von `addons.mozilla.org` wegzuführen.

Mit Unternehmensrichtlinien kann der Satz an Domains weiter eingeschränkt werden: Firefox erkennt die `restricted_domains`-Richtlinie an, wie sie unter [ExtensionSettings in mozilla/policy-templates](https://github.com/mozilla/policy-templates/blob/master/README.md#extensionsettings) dokumentiert ist. Chromes `runtime_blocked_hosts`-Richtlinie ist in der [Configure ExtensionSettings policy](https://support.google.com/chrome/a/answer/9867568) dokumentiert.

### Begrenzungen

Ganze Tabs oder Frames können mithilfe von [`data:` URI](/de/docs/Web/URI/Reference/Schemes/data), [`Blob`](/de/docs/Web/API/URL/createObjectURL_static)-Objekten und anderen ähnlichen Techniken geladen werden. Die Unterstützung für die Injektion von Inhalts-Skripten in solche speziellen Dokumente variiert zwischen den Browsern. Weitere Details finden Sie im Firefox [Bug #1411641 Kommentar 41](https://bugzil.la/1411641#c41).

## Inhalts-Skript Umgebung

### DOM-Zugriff

Inhalts-Skripte können auf das DOM der Seite zugreifen und es ändern, wie es normale Seiten-Skripte auch können. Sie können auch alle Änderungen sehen, die von Seiten-Skripten am DOM vorgenommen wurden.

Inhalts-Skripte erhalten jedoch eine "saubere" Ansicht des DOM. Das bedeutet:

- Inhalts-Skripte können keine JavaScript-Variablen sehen, die von Seiten-Skripten definiert wurden.
- Wenn ein Seiten-Skript eine eingebaute DOM-Eigenschaft neu definiert, sieht das Inhalts-Skript die ursprüngliche Version der Eigenschaft, nicht die neu definierte Version.

Wie unter ["Inhalts-Skript Umgebung" bei Chrome-Inkompatibilitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#content_script_environment) erwähnt, unterscheidet sich das Verhalten zwischen den Browsern:

- In Firefox wird dieses Verhalten [Xray vision](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts#xray_vision_in_firefox) genannt.
  Inhalts-Skripte können auf JavaScript-Objekte aus ihrem eigenen globalen Gültigkeitsbereich oder auf Xray-umwickelte Versionen der Webseite stoßen.

- In Chrome wird dieses Verhalten durch eine [isolierte Welt](https://chromium.googlesource.com/chromium/src/+/master/third_party/blink/renderer/bindings/core/v8/V8BindingDesign.md#world) erzwungen, das einen grundlegend anderen Ansatz verwendet.

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

Das Skript `page-script.js` macht dies:

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

Jetzt injiziert eine Erweiterung ein Inhalts-Skript in die Seite:

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

Dasselbe gilt umgekehrt; Seitenskripte können JavaScript-Eigenschaften, die von Inhalts-Skripten hinzugefügt wurden, nicht sehen.

Dies bedeutet, dass sich Inhalts-Skripte darauf verlassen können, dass DOM-Eigenschaften vorhersehbar funktionieren, ohne sich Sorgen machen zu müssen, dass ihre Variablen mit Variablen aus dem Seiten-Skript kollidieren.

Eine praktische Konsequenz dieses Verhaltens ist, dass ein Inhalts-Skript keinen Zugang zu JavaScript-Bibliotheken hat, die von der Seite geladen werden. Wenn die Seite also zum Beispiel jQuery enthält, kann das Inhalts-Skript es nicht sehen.

Wenn ein Inhalts-Skript eine JavaScript-Bibliothek verwenden muss, sollte die Bibliothek selbst als Inhalts-Skript _neben_ dem Inhalts-Skript injiziert werden, das sie verwenden möchte:

```json
"content_scripts": [
  {
    "matches": ["*://*.mozilla.org/*"],
    "js": ["jquery.js", "content-script.js"]
  }
]
```

> [!NOTE]
> Firefox bietet [cloneInto()](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/cloneInto) und [exportFunction()](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/exportFunction), um es Inhalts-Skripten zu ermöglichen, auf JavaScript-Objekte zuzugreifen, die von Seitenskripten erstellt wurden, und deren JavaScript-Objekte an Seitenskripte freizugeben.
>
> Siehe [Gemeinsame Nutzung von Objekten mit Seitenskripten](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts) für weitere Details.

### WebExtension-APIs

Zusätzlich zu den standardmäßigen DOM-APIs können Inhalts-Skripte diese WebExtension-APIs verwenden:

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

Inhalts-Skripte können Anfragen mit den normalen [`window.XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) und [`window.fetch()`](/de/docs/Web/API/Fetch_API) APIs stellen.

> [!NOTE]
> In Firefox in Manifest V2, werden Anfragen von Inhalts-Skripten (zum Beispiel mit [`fetch()`](/de/docs/Web/API/Fetch_API/Using_Fetch)) im Kontext einer Erweiterung gestellt, daher müssen Sie eine absolute URL angeben, um auf Seiteninhalte zu verweisen.
>
> In Chrome und Firefox in Manifest V3, werden diese Anfragen im Kontext der Seite gestellt, sodass sie zu einer relativen URL gemacht werden. Zum Beispiel wird `/api` an `https://«current page URL»/api` geschickt.

Inhalts-Skripte erhalten dieselben domainübergreifenden Privilegien wie der Rest der Erweiterung: Wenn die Erweiterung für eine Domain den domainübergreifenden Zugriff über den [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)-Schlüssel in `manifest.json` angefordert hat, erhalten ihre Inhalts-Skripte ebenfalls Zugriff auf diese Domain.

> [!NOTE]
> Bei der Verwendung von Manifest V3 können Inhalts-Skripte dann plattformübergreifende Anfragen durchführen, wenn der Zielserver mithilfe von [CORS](/de/docs/Web/HTTP/CORS) zustimmt; jedoch funktionieren Host-Berechtigungen nicht in Inhalts-Skripten, aber sie tun es immer noch in regulären Erweiterungsseiten.

Dies wird durch die Bereitstellung privilegierterer XHR- und Fetch-Instanzen im Inhalts-Skript erreicht, welche den Nebeneffekt haben, dass die [`Origin`](/de/docs/Web/HTTP/Headers/Origin)- und [`Referer`](/de/docs/Web/HTTP/Headers/Referer)-Header nicht gesetzt werden, wie eine Anfrage von der Seite selbst es tun würde; dies ist oft bevorzugt, um zu verhindern, dass die Anfrage ihre plattformübergreifende Natur offenbart.

> [!NOTE]
> In Firefox in Manifest V2 können Erweiterungen, die Anfragen ausführen müssen, die sich wie von den Inhalten selbst gesendet verhalten, stattdessen `content.XMLHttpRequest` und `content.fetch()` verwenden.
>
> Für plattformübergreifende Erweiterungen muss das Vorhandensein dieser Methoden durch Funktionserkennung überprüft werden.
>
> Dies ist in Manifest V3 nicht möglich, da `content.XMLHttpRequest` und `content.fetch()` nicht verfügbar sind.

> [!NOTE]
> In Chrome, beginnend mit Version 73, und Firefox, beginnend mit Version 101 bei der Verwendung von Manifest V3, unterliegen Inhalts-Skripte derselben [CORS](/de/docs/Web/HTTP/CORS)-Richtlinie wie die Seite, in der sie ausgeführt werden. Nur Back-End-Skripte haben erhöhte plattformübergreifende Privilegien. Siehe [Änderungen bei plattformübergreifenden Anfragen in Chrome Extension Content Scripts](https://www.chromium.org/Home/chromium-security/extension-content-script-fetches/).

## Kommunikation mit Hintergrund-Skripten

Obwohl Inhalts-Skripte die meisten der WebExtension-APIs nicht direkt verwenden können, können sie über die Messaging-APIs mit den Hintergrund-Skripten der Erweiterung kommunizieren und erhalten somit indirekt Zugriff auf dieselben APIs, auf die auch die Hintergrund-Skripte zugreifen können.

Es gibt zwei grundlegende Muster für die Kommunikation zwischen den Hintergrund-Skripten und Inhalts-Skripten:

- Sie können **einmalige Nachrichten** senden (mit einer optionalen Antwort).
- Sie können eine **längerfristige Verbindung zwischen den beiden Seiten** einrichten und diese Verbindung nutzen, um Nachrichten auszutauschen.

### Einmalige Nachrichten

Um einmalige Nachrichten zu senden, mit einer optionalen Antwort, können Sie die folgenden APIs verwenden:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="row"></th>
      <th scope="col">Im Inhalts-Skript</th>
      <th scope="col">Im Hintergrund-Skript</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Eine Nachricht senden</th>
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
      <th scope="row">Eine Nachricht empfangen</th>
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

Zum Beispiel ein Inhalts-Skript, das auf Klick-Ereignisse auf der Webseite hört.

Wenn der Klick auf einem Link war, sendet es eine Nachricht an die Hintergrundseite mit der Ziel-URL:

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

Das Hintergrund-Skript hört auf diese Nachrichten und zeigt eine Benachrichtigung mit der [`notifications`](/de/docs/Mozilla/Add-ons/WebExtensions/API/notifications) API an:

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

(Dieser Beispielcode ist leicht angepasst aus dem [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) Beispiel auf GitHub.)

### Verbindungsgestützte Nachrichtenübermittlung

Das Senden von einmaligen Nachrichten kann umständlich werden, wenn Sie viele Nachrichten zwischen einem Hintergrund-Skript und einem Inhalts-Skript austauschen. Ein alternatives Muster besteht darin, eine längerfristige Verbindung zwischen den beiden Kontexts herzustellen und diese Verbindung zu nutzen, um Nachrichten auszutauschen.

Beide Seiten haben ein [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port)-Objekt, das sie verwenden können, um Nachrichten auszutauschen.

Um die Verbindung herzustellen:

- Eine Seite hört auf Verbindungen mit [`runtime.onConnect`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect)
- Die andere Seite ruft auf:

  - [`tabs.connect()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/connect) (wenn es sich mit einem Inhalts-Skript verbindet)
  - [`runtime.connect()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/connect) (wenn es sich mit einem Hintergrund-Skript verbindet)

Dies gibt ein [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port)-Objekt zurück.

- Der [`runtime.onConnect`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect)-Listener erhält sein eigenes [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port)-Objekt.

Sobald jede Seite einen Port hat, können die beiden Seiten:

- Nachrichten mit `runtime.Port.postMessage()` senden
- Nachrichten mit `runtime.Port.onMessage()` empfangen

Zum Beispiel, sobald es geladen ist, verbindet sich das folgende Inhalts-Skript:

- Mit dem Hintergrund-Skript
- Speichert den `Port` in einer Variable `myPort`
- Hört auf Nachrichten auf `myPort` (und protokolliert sie)
- Sendet Nachrichten an das Hintergrund-Skript, wenn der Benutzer das Dokument anklickt

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

Das entsprechende Hintergrund-Skript:

- Hört auf Verbindungsversuche vom Inhalts-Skript
- Wenn es einen Verbindungsversuch empfängt:

  - Speichert den Port in einer Variablen namens `portFromCS`
  - Sendet dem Inhalts-Skript eine Nachricht mit dem Port
  - Beginnt, Nachrichten zu hören, die auf dem Port empfangen werden, und protokolliert sie

- Sendet Nachrichten an das Inhalts-Skript, indem es `portFromCS` verwendet, wenn der Benutzer auf die Browser-Aktion der Erweiterung klickt

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

#### Mehrere Inhalts-Skripte

Wenn Sie mehrere Inhalts-Skripte haben, die gleichzeitig kommunizieren, möchten Sie möglicherweise Verbindungen zu ihnen in einem Array speichern.

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

### Auswahl zwischen einmaligen Nachrichten und verbindungsgestützter Nachrichtenübermittlung

Die Wahl zwischen einmaligen und verbindungsgestützter Nachrichtenübermittlung hängt davon ab, wie Ihre Erweiterung die Nachrichtenübermittlung verwenden möchte.

Die empfohlenen Best Practices sind:

- **Verwenden Sie einmalige Nachrichten, wenn…**
  - Nur eine Antwort auf eine Nachricht erwartet wird.
  - Eine geringe Anzahl von Skripten Nachrichten empfängt ({{WebExtAPIRef("runtime.onMessage")}}-Aufrufe).
- **Verwenden Sie die verbindungsgestützte Nachrichtenübermittlung, wenn…**
  - Skripte Kommunikationssitzungen durchführen, in denen mehrere Nachrichten ausgetauscht werden.
  - Die Erweiterung über den Fortschritt einer Aufgabe oder eine Unterbrechung einer Aufgabe informiert werden muss oder eine Aufgabe, die über die Nachrichtenübermittlung initiiert wurde, unterbrechen möchte.

## Kommunikation mit der Webseite

Standardmäßig erhalten Inhalts-Skripte keinen Zugriff auf die Objekte, die von Seitenskripten erstellt wurden. Sie können jedoch mit Seitenskripten über die DOM-APIs [`window.postMessage`](/de/docs/Web/API/Window/postMessage) und [`window.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) kommunizieren.

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

Für ein vollständiges funktionierendes Beispiel dafür, [Besuchen Sie die Demoseite auf GitHub](https://mdn.github.io/webextensions-examples/content-script-page-script-messaging.html) und folgen Sie den Anweisungen.

> [!WARNING]
> Seien Sie äußerst vorsichtig beim Interagieren mit unzuverlässigen Inhalten auf diese Weise! Erweiterungen sind privilegierter Code, der mächtige Fähigkeiten haben kann, und feindliche Webseiten können sie leicht dazu bringen, auf diese Fähigkeiten zuzugreifen.
>
> Um ein triviales Beispiel zu geben, nehmen Sie an, dass der Inhalt-Skript-Code, der die Nachricht empfängt, etwas wie dies tut:
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
> Nun kann das Seitenskript beliebigen Code mit allen Privilegien des Inhalts-Skripts ausführen.

## Die Verwendung von `eval()` in Inhalts-Skripten

> **Hinweis:** `eval()` ist in Manifest V3 nicht verfügbar.

- In Chrome
  - : {{jsxref("Global_Objects/eval", "eval")}} führt immer Code im Kontext des **Inhalts-Skriptes** aus, nicht im Kontext der Seite.
- In Firefox

  - : Wenn Sie `eval()` aufrufen, wird der Code im Kontext des **Inhalts-Skriptes** ausgeführt.

    Wenn Sie `window.eval()` aufrufen, wird der Code im Kontext der **Seite** ausgeführt.

Betrachten Sie zum Beispiel ein Inhalts-Skript wie dieses:

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

Dieser Code erstellt einfach einige Variablen `x` und `y` mit `window.eval()` und `eval()`, protokolliert deren Werte und sendet dann eine Nachricht an die Seite.

Beim Empfang der Nachricht protokolliert das Seitenskript dieselben Variablen:

```js
window.addEventListener("message", (event) => {
  if (event.source === window && event.data && event.data.message === "check") {
    console.log(`In page script, window.x: ${window.x}`);
    console.log(`In page script, window.y: ${window.y}`);
  }
});
```

In Chrome ergibt dies eine Ausgabe wie diese:

```plain
In content script, window.x: 1
In content script, window.y: 2
In page script, window.x: undefined
In page script, window.y: undefined
```

In Firefox ergibt dies eine Ausgabe wie diese:

```plain
In content script, window.x: undefined
In content script, window.y: 2
In page script, window.x: 1
In page script, window.y: undefined
```

Dasselbe gilt für [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), [`setInterval()`](/de/docs/Web/API/Window/setInterval) und [`Function()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function).

> [!WARNING]
> Seien Sie äußerst vorsichtig, wenn Sie Code im Kontext der Seite ausführen!
>
> Die Umgebung der Seite wird von potenziell böswilligen Webseiten kontrolliert, die Objekte, mit denen Sie interagieren, neu definieren können, um sich unerwartet zu verhalten:
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
