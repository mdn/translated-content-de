---
title: Inhaltsskripte
slug: Mozilla/Add-ons/WebExtensions/Content_scripts
l10n:
  sourceCommit: e13b6ffe7c9cb05c6a89fcb3c8fcbc987eb05211
---

{{AddonSidebar}}

Ein Inhaltsskript ist ein Teil Ihrer Erweiterung, der im Kontext einer Webseite ausgeführt wird. Es kann Seiteninhalte mithilfe der standardmäßigen [Web-APIs](/de/docs/Web/API) lesen und ändern. Das Verhalten eines Inhaltsskripts ähnelt dem von Skripten, die Teil einer Website sind, wie z.B. solche, die mit dem {{HTMLElement("script")}}-Element geladen werden. Allerdings können Inhaltsskripte nur auf Seiteninhalte zugreifen, wenn [Host-Berechtigungen für den Ursprung der Webseite gewährt wurden](#berechtigungen).

Inhaltsskripte können auf [einen kleinen Teil der WebExtension-APIs zugreifen](#webextension-apis), jedoch können sie [mit Hintergrundskripten kommunizieren](#kommunikation_mit_hintergrundskripten) und dadurch indirekt auf die WebExtension-APIs zugreifen. [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts) können auf alle [WebExtension-JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) zugreifen, aber nicht direkt auf die Inhalte von Webseiten.

> [!NOTE]
> Einige Web-APIs sind auf [sichere Kontexte](/de/docs/Web/Security/Secure_Contexts) beschränkt, was auch für Inhaltsskripte gilt, die in diesen Kontexten laufen. Mit Ausnahme von [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents), das in Inhaltsskripten in unsicheren Kontexten in Firefox aufgerufen werden kann.

## Laden von Inhaltsskripten

Sie können ein Inhaltsskript in eine Webseite laden:

1. Zur Installationszeit, in Seiten, die mit URL-Mustern übereinstimmen.
   - Mithilfe des Schlüssels [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) in Ihrem `manifest.json` können Sie den Browser anweisen, ein Inhaltsskript zu laden, wenn der Browser eine Seite lädt, deren URL [mit einem bestimmten Muster übereinstimmt](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns).
2. Zur Laufzeit, in Seiten, die mit URL-Mustern übereinstimmen.
   - Mithilfe von {{WebExtAPIRef("scripting.registerContentScripts()")}} oder (nur in Manifest V2 in Firefox) {{WebExtAPIRef("contentScripts")}} können Sie den Browser anweisen, ein Inhaltsskript zu laden, wenn der Browser eine Seite lädt, deren URL [mit einem bestimmten Muster übereinstimmt](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns). (Dies ähnelt Methode 1, _außer_ dass Sie Inhaltsskripte zur Laufzeit hinzufügen und entfernen können.)
3. Zur Laufzeit, in spezifische Tabs.
   - Mithilfe von {{WebExtAPIRef("scripting.executeScript()")}} oder (nur in Manifest V2) {{WebExtAPIRef("tabs.executeScript()")}} können Sie ein Inhaltsskript in einen bestimmten Tab laden, wann immer Sie möchten. (Zum Beispiel als Reaktion auf das Klicken auf eine [Browser-Aktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button).)

Es gibt nur einen globalen Gültigkeitsbereich _pro Frame, pro Erweiterung_. Das bedeutet, dass Variablen eines Inhaltsskripts von allen anderen Inhaltsskripten, unabhängig davon, wie das Inhaltsskript geladen wurde, zugänglich sind.

Mit den Methoden (1) und (2) können Sie Skripte nur in Seiten laden, deren URLs mit einem [Match-Muster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) dargestellt werden können.

Mit Methode (3) können Sie auch Skripte in Seiten laden, die mit Ihrer Erweiterung gebündelt sind, aber Sie können keine Skripte in privilegierten Browserseiten (wie `about:debugging` oder `about:addons`) laden.

> **Hinweis:** [Dynamische JS-Modulimporte](/de/docs/Web/JavaScript/Guide/Modules#dynamic_module_loading) funktionieren jetzt in Inhaltsskripten. Weitere Details finden Sie im [Firefox Bug 1536094](https://bugzil.la/1536094).
> Nur URLs mit dem _moz-extension_-Schema sind erlaubt, was Daten-URLs ausschließt ([Firefox Bug 1587336](https://bugzil.la/1587336)).

### Persistenz

Inhaltsskripte, die mit {{WebExtAPIRef("scripting.executeScript()")}} oder (nur in Manifest V2) {{WebExtAPIRef("tabs.executeScript()")}} geladen werden, laufen auf Anforderung und sind nicht persistent.

Inhaltsskripte, die im Manifest-Dokument über den Schlüssel [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) definiert sind oder mit der {{WebExtAPIRef("scripting.registerContentScripts()")}} oder (nur in Manifest V2 in Firefox) {{WebExtAPIRef("contentScripts")}} API registriert sind, bleiben standardmäßig persistent. Sie bleiben über Browser-Neustarts, Updates und Erweiterungs-Neustarts hinweg registriert.

Die {{WebExtAPIRef("scripting.registerContentScripts()")}} API ermöglicht jedoch die Definition des Skripts als nicht persistent. Dies kann nützlich sein, wenn Ihre Erweiterung beispielsweise im Namen eines Benutzers ein Inhaltsskript nur in der aktuellen Browsersitzung aktivieren möchte.

## Berechtigungen, Einschränkungen und Begrenzungen

### Berechtigungen

Registrierte Inhaltsskripte werden nur dann ausgeführt, wenn der Erweiterung [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die Domain gewährt wurden.

Um Skripte programmgesteuert zu injizieren, benötigt die Erweiterung entweder die Berechtigung [`activeTab`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions). Die Berechtigung `scripting` ist erforderlich, um Methoden von der {{WebExtAPIRef("scripting")}} API zu verwenden.

Ab Manifest V3 werden Host-Berechtigungen nicht automatisch zur Installationszeit gewährt. Benutzer können sich nach der Installation der Erweiterung für oder gegen Host-Berechtigungen entscheiden.

### Eingeschränkte Domains

Sowohl [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) als auch die Berechtigung [`activeTab`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) haben Ausnahmen für einige Domains. Inhaltsskripte werden auf diesen Domains blockiert, um beispielsweise den Benutzer davor zu schützen, dass eine Erweiterung Privilegien durch spezielle Seiten eskaliert.

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

Andere Browser haben ähnliche Einschränkungen hinsichtlich der Websites, von denen Erweiterungen installiert werden können. Zum Beispiel ist der Zugriff auf chrome.google.com in Chrome eingeschränkt.

> [!NOTE]
> Da diese Einschränkungen addons.mozilla.org einschließen, kann es sein, dass Benutzer, die versuchen, Ihre Erweiterung sofort nach der Installation zu verwenden, feststellen, dass sie nicht funktioniert. Um dies zu vermeiden, sollten Sie eine entsprechende Warnung oder eine [Willkommensseite](https://extensionworkshop.com/documentation/develop/onboard-upboard-offboard-users/) hinzufügen, um Benutzer von `addons.mozilla.org` wegzubewegen.

Das Set der Domains kann durch Unternehmensrichtlinien weiter eingeschränkt werden: Firefox erkennt die `restricted_domains` Richtlinie an, wie bei [ExtensionSettings in mozilla/policy-templates](https://github.com/mozilla/policy-templates/blob/master/README.md#extensionsettings) dokumentiert. Chromes `runtime_blocked_hosts` Richtlinie ist bei [Configure ExtensionSettings policy](https://support.google.com/chrome/a/answer/9867568) dokumentiert.

### Begrenzungen

Ganze Tabs oder Frames können mit [`data:` URI](/de/docs/Web/URI/Reference/Schemes/data), [`Blob`](/de/docs/Web/API/URL/createObjectURL_static) Objekten und anderen ähnlichen Techniken geladen werden. Die Unterstützung für die Injektion von Inhaltsskripten in solche speziellen Dokumente variiert je nach Browser. Einzelheiten finden Sie in [Firefox-Bug #1411641 Kommentar 41](https://bugzil.la/1411641#c41).

## Inhaltsskript-Umgebung

### DOM-Zugriff

Inhaltsskripte können auf das DOM der Seite zugreifen und es ändern, genauso wie normale Seitenskripte dies können. Sie können auch alle Änderungen sehen, die an dem DOM durch Seitenskripte vorgenommen wurden.

Allerdings erhalten Inhaltsskripte eine "saubere" Sicht auf das DOM. Das bedeutet:

- Inhaltsskripte können keine JavaScript-Variablen sehen, die durch Seitenskripte definiert wurden.
- Wenn ein Seitenskript eine eingebaute DOM-Eigenschaft neu definiert, sieht das Inhaltsskript die ursprüngliche Version der Eigenschaft, nicht die neu definierte Version.

Wie im Abschnitt ["Inhaltsskript-Umgebung" bei Inkompatibilitäten in Chrome](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#content_script_environment) erwähnt, unterscheidet sich das Verhalten je nach Browser:

- In Firefox wird dieses Verhalten als [Xray-Sicht](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts#xray_vision_in_firefox) bezeichnet.
  Inhaltsskripte können JavaScript-Objekte aus ihrem eigenen globalen Gültigkeitsbereich oder Xray-umwickelte Versionen von den Webseiten sehen.

- In Chrome wird dieses Verhalten durch eine [isolierte Welt](https://chromium.googlesource.com/chromium/src/+/master/third_party/blink/renderer/bindings/core/v8/V8BindingDesign.md#world) erzwungen, die einen grundsätzlich anderen Ansatz verwendet.

Stellen Sie sich eine Webseite wie diese vor:

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

Nun injiziert eine Erweiterung ein Inhaltsskript in die Seite:

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

Das Gleiche gilt umgekehrt; Seitenskripte können JavaScript-Eigenschaften, die von Inhaltsskripten hinzugefügt wurden, nicht sehen.

Das bedeutet, dass Inhaltsskripte sich darauf verlassen können, dass DOM-Eigenschaften vorhersehbar funktionieren, ohne sich Sorgen machen zu müssen, dass ihre Variablen mit Variablen aus dem Seitenskript kollidieren.

Eine praktische Konsequenz dieses Verhaltens ist, dass ein Inhaltsskript auf keine JavaScript-Bibliotheken zugreifen kann, die von der Seite geladen werden. Wenn die Seite beispielsweise jQuery enthält, kann das Inhaltsskript es nicht sehen.

Wenn ein Inhaltsskript eine JavaScript-Bibliothek verwenden muss, sollte die Bibliothek selbst als Inhaltsskript _neben_ dem Inhaltsskript injiziert werden, das sie verwenden möchte:

```json
"content_scripts": [
  {
    "matches": ["*://*.mozilla.org/*"],
    "js": ["jquery.js", "content-script.js"]
  }
]
```

> [!NOTE]
> Firefox bietet [cloneInto()](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/cloneInto) und [exportFunction()](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/exportFunction) an, um Inhaltsskripten den Zugriff auf JavaScript-Objekte zu ermöglichen, die von Seitenskripten erstellt wurden, und um ihre JavaScript-Objekte Seitenskripten zugänglich zu machen.
>
> Weitere Informationen finden Sie unter [Teilen von Objekten mit Seitenskripten](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts).

### WebExtension-APIs

Zusätzlich zu den standardmäßigen DOM-APIs können Inhaltsskripte folgende WebExtension-APIs verwenden:

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

Inhaltsskripte können Anfragen mit den normalen [`window.XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) und [`window.fetch()`](/de/docs/Web/API/Fetch_API) APIs ausführen.

> [!NOTE]
> In Firefox in Manifest V2 erfolgen Inhaltsskriptanfragen (zum Beispiel mit [`fetch()`](/de/docs/Web/API/Fetch_API/Using_Fetch)) im Kontext einer Erweiterung, daher müssen Sie eine absolute URL angeben, um auf Seiteninhalte zu verweisen.
>
> In Chrome und Firefox in Manifest V3 erfolgen diese Anfragen im Kontext der Seite, daher werden sie mit einer relativen URL durchgeführt. Zum Beispiel wird `/api` an `https://«current page URL»/api` gesendet.

Inhaltsskripte erhalten dieselben bereichsübergreifenden Privilegien wie der Rest der Erweiterung: Wenn die Erweiterung also für eine Domain den bereichsübergreifenden Zugriff über den Schlüssel [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in `manifest.json` angefordert hat, erhalten auch deren Inhaltsskripte Zugang zu dieser Domain.

> [!NOTE]
> Bei Verwendung von Manifest V3 können Inhaltsskripte bereichsübergreifende Anfragen ausführen, wenn der Zielserver über [CORS](/de/docs/Web/HTTP/Guides/CORS) zustimmt; Host-Berechtigungen funktionieren jedoch nicht in Inhaltsskripten, jedoch weiterhin in regulären Erweiterungsseiten.

Dies wird erreicht, indem inhaltsskripten privilegiertere XHR- und fetch-Instanzen bereitgestellt werden, was zur Folge hat, dass die Header [`Origin`](/de/docs/Web/HTTP/Reference/Headers/Origin) und [`Referer`](/de/docs/Web/HTTP/Reference/Headers/Referer) nicht gesetzt werden, wie es bei einer Anfrage von der Seite selbst der Fall wäre; dies ist oft vorzuziehen, um zu verhindern, dass die Anfrage ihre bereichsübergreifende Natur offenbart.

> [!NOTE]
> In Firefox in Manifest V2 können Erweiterungen, die Anfragen ausführen müssen, die sich so verhalten, als ob sie vom Inhalt selbst gesendet worden wären, `content.XMLHttpRequest` und `content.fetch()` verwenden.
>
> Für browserübergreifende Erweiterungen muss die Anwesenheit dieser Methoden durch Funktionsprüfung ermittelt werden.
>
> Dies ist in Manifest V3 nicht möglich, da `content.XMLHttpRequest` und `content.fetch()` nicht verfügbar sind.

> [!NOTE]
> In Chrome, ab Version 73, und Firefox, ab Version 101 bei Verwendung von Manifest V3, unterliegen Inhaltsskripte derselben [CORS](/de/docs/Web/HTTP/Guides/CORS) Richtlinie wie die Seite, in der sie ausgeführt werden. Nur Hintergrundskripte haben erhöhte bereichsübergreifende Privilegien. Siehe [Änderungen bei bereichsübergreifenden Anfragen in Chrome-Erweiterungs-Inhaltsskripten](https://www.chromium.org/Home/chromium-security/extension-content-script-fetches/).

## Kommunikation mit Hintergrundskripten

Obwohl Inhaltsskripte nicht direkt die meisten WebExtension-APIs verwenden können, können sie mit den Hintergrundskripten der Erweiterung über die Messaging-APIs kommunizieren und dadurch indirekt auf dieselben APIs zugreifen, die auch die Hintergrundskripte verwenden können.

Es gibt zwei grundlegende Muster zur Kommunikation zwischen Hintergrundskripten und Inhaltsskripten:

- Sie können **Einweg-Nachrichten** senden (mit einer optionalen Antwort).
- Sie können eine **länger lebende Verbindung zwischen den beiden Seiten** aufbauen und diese Verbindung zum Austausch von Nachrichten nutzen.

### Einweg-Nachrichten

Um Einweg-Nachrichten zu senden, mit einer optionalen Antwort, können Sie die folgenden APIs verwenden:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="row"></th>
      <th scope="col">In Inhaltsskript</th>
      <th scope="col">In Hintergrundskript</th>
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

Zum Beispiel ist hier ein Inhaltsskript, das auf Klickereignisse auf der Webseite lauscht.

Wenn der Klick auf einen Link war, sendet es eine Nachricht an die Hintergrundseite mit der Ziel-URL:

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

Das Hintergrundskript lauscht auf diese Nachrichten und zeigt eine Benachrichtigung mit der [`notifications`](/de/docs/Mozilla/Add-ons/WebExtensions/API/notifications) API an:

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

### Verbindungsbasiertes Messaging

Das Senden von Einweg-Nachrichten kann mühsam werden, wenn Sie viele Nachrichten zwischen einem Hintergrundskript und einem Inhaltsskript austauschen. Ein alternatives Muster ist, eine längerfristige Verbindung zwischen den beiden Kontexten herzustellen und diese Verbindung zum Austauschen von Nachrichten zu nutzen.

Beide Seiten haben ein [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port) Objekt, das sie verwenden können, um Nachrichten auszutauschen.

Um die Verbindung herzustellen:

- Eine Seite lauscht Verbindungen mit [`runtime.onConnect`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect)
- Die andere Seite ruft auf:

  - [`tabs.connect()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/connect) (wenn eine Verbindung zu einem Inhaltsskript hergestellt wird)
  - [`runtime.connect()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/connect) (wenn eine Verbindung zu einem Hintergrundskript hergestellt wird)

Dies gibt ein [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port) Objekt zurück.

- Der [`runtime.onConnect`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect) Listener erhält sein eigenes [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port) Objekt übergeben.

Sobald jede Seite einen Port hat, können die beiden Seiten:

- Nachrichten mit `runtime.Port.postMessage()` senden
- Nachrichten mit `runtime.Port.onMessage()` empfangen

Zum Beispiel verbindet sich folgendes Inhaltsskript sofort nach dem Laden mit dem Hintergrundskript, speichert den `Port` in einer Variable `myPort`, lauscht auf Nachrichten über `myPort` (und protokolliert sie) und verwendet `myPort`, um Nachrichten an das Hintergrundskript zu senden, wenn der Benutzer auf das Dokument klickt:

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

Das entsprechende Hintergrundskript lauscht auf Verbindungsversuche vom Inhaltsskript, und wenn es eine Verbindung erhält, speichert es den Port in einer Variablen namens `portFromCS`, sendet dem Inhaltsskript eine Nachricht über den Port und lauscht auf Nachrichten, die über den Port empfangen werden und protokolliert diese:

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

#### Mehrere Inhaltsskripte

Wenn Sie mehrere Inhaltsskripte haben, die gleichzeitig kommunizieren, möchten Sie vielleicht die Verbindungen zu ihnen in einem Array speichern.

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

### Auswahl zwischen Einweg-Nachrichten und verbindungsbasiertem Messaging

Die Wahl zwischen Einweg- und verbindungsbasiertem Messaging hängt davon ab, wie Ihre Erweiterung Messaging nutzen möchte.

Die empfohlenen Best Practices sind:

- **Verwenden Sie Einweg-Nachrichten, wenn…**
  - Nur eine Antwort auf eine Nachricht erwartet wird.
  - Eine kleine Anzahl von Skripten Nachrichten empfängt ({{WebExtAPIRef("runtime.onMessage")}} Aufrufe).
- **Verwenden Sie verbindungsbasiertes Messaging, wenn…**
  - Skripte an Sitzungen teilnehmen, in denen mehrere Nachrichten ausgetauscht werden.
  - Die Erweiterung den Fortschritt einer Aufgabe kennen muss oder wissen muss, ob eine Aufgabe unterbrochen wird, oder eine mittels Messaging begonnene Aufgabe unterbrechen möchte.

## Kommunikation mit der Webseite

Standardmäßig erhalten Inhaltsskripte keinen Zugriff auf Objekte, die von Seitenskripten erstellt wurden. Sie können jedoch mit Seitenskripten über die DOM-APIs [`window.postMessage`](/de/docs/Web/API/Window/postMessage) und [`window.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) kommunizieren.

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

Für ein komplett arbeitsfähiges Beispiel, [besuchen Sie die Demoseite auf GitHub](https://mdn.github.io/webextensions-examples/content-script-page-script-messaging.html) und folgen Sie den Anweisungen.

> [!WARNING]
> Seien Sie sehr vorsichtig, wenn Sie in dieser Weise mit untrusted Web-Inhalten interagieren! Erweiterungen sind privilegierter Code, der mächtige Möglichkeiten hat, und feindliche Webseiten können sie leicht täuschen, um auf diese Möglichkeiten zuzugreifen.
>
> Um ein triviales Beispiel zu geben, nehmen Sie an, dass das Inhaltskript, welches die Nachricht empfängt, etwas in der Art wie das Folgende ausführt:
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
> Jetzt kann das Seitenskript beliebigen Code mit allen Privilegien des Inhaltsskriptes ausführen.

## Verwendung von `eval()` in Inhaltsskripten

> **Hinweis:** `eval()` ist in Manifest V3 nicht verfügbar.

- In Chrome
  - : {{jsxref("Global_Objects/eval", "eval")}} führt immer Code im Kontext des **Inhaltsskriptes** aus, nicht im Kontext der Seite.
- In Firefox

  - : Wenn Sie `eval()` aufrufen, führt es den Code im Kontext des **Inhaltsskriptes** aus.

    Wenn Sie `window.eval()` aufrufen, führt es den Code im Kontext der **Seite** aus.

Zum Beispiel betrachten Sie ein Inhaltsskript wie folgt:

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

Dieser Code erstellt einfach einige Variablen `x` und `y` mit `window.eval()` und `eval()`, loggt deren Werte und sendet dann Nachrichten an die Seite.

Beim Empfang der Nachricht loggt das Seitenskript dieselben Variablen:

```js
window.addEventListener("message", (event) => {
  if (event.source === window && event.data && event.data.message === "check") {
    console.log(`In page script, window.x: ${window.x}`);
    console.log(`In page script, window.y: ${window.y}`);
  }
});
```

In Chrome erzeugt dies eine Ausgabe wie folgt:

```plain
In content script, window.x: 1
In content script, window.y: 2
In page script, window.x: undefined
In page script, window.y: undefined
```

In Firefox erzeugt dies eine Ausgabe wie folgt:

```plain
In content script, window.x: undefined
In content script, window.y: 2
In page script, window.x: 1
In page script, window.y: undefined
```

Das Gleiche gilt für [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), [`setInterval()`](/de/docs/Web/API/Window/setInterval) und [`Function()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function).

> [!WARNING]
> Seien Sie sehr vorsichtig, wenn Sie Code im Kontext der Seite ausführen!
>
> Die Umgebung der Seite wird von potenziell bösartigen Webseiten kontrolliert, die Objekte, mit denen Sie interagieren, neu definieren können, um sich unerwartet zu verhalten:
>
> ```js example-bad
> // page.js redefiniert console.log
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
