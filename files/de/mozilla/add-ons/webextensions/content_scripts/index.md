---
title: Inhaltsskripte
slug: Mozilla/Add-ons/WebExtensions/Content_scripts
l10n:
  sourceCommit: 4b47ad2cbd128226665d439d722828f20781ef73
---

{{AddonSidebar}}

Ein Inhaltsskript ist ein Teil Ihrer Erweiterung, das im Kontext einer Webseite ausgeführt wird. Es kann Seiteninhalte mit den Standard-[Web-APIs](/de/docs/Web/API) lesen und ändern. Das Verhalten von Inhaltsskripten ähnelt den Skripten, die Teil einer Website sind, wie beispielsweise jene, die mit dem {{HTMLElement("script")}}-Element geladen werden. Inhaltsskripte können jedoch nur auf Seiteninhalte zugreifen, wenn [Host-Berechtigungen für die Herkunft der Webseite gewährt wurden](#berechtigungen).

Inhaltsskripte haben Zugriff auf [einen kleinen Teil der WebExtension-APIs](#webextension-apis), können jedoch [mit Hintergrundskripten kommunizieren](#kommunikation_mit_hintergrundskripten), indem sie ein Nachrichtensystem verwenden und damit indirekt auf die WebExtension-APIs zugreifen. [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts) haben Zugriff auf alle [WebExtension-JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API), können jedoch nicht direkt auf Inhalte von Webseiten zugreifen.

> [!NOTE] Einige Web-APIs sind auf [sichere Kontexte](/de/docs/Web/Security/Secure_Contexts) beschränkt, was auch für Inhaltsskripte gilt, die in diesen Kontexten ausgeführt werden. Eine Ausnahme bildet [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents), das in unsicheren Kontexten in Firefox von Inhaltsskripten aufgerufen werden kann.

## Laden von Inhaltsskripten

Sie können ein Inhaltsskript in eine Webseite laden:

1. Zur Installationszeit in Seiten, die mit URL-Mustern übereinstimmen.
   - Mithilfe des Schlüssels [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) in Ihrer `manifest.json` können Sie den Browser anweisen, ein Inhaltsskript zu laden, wenn eine Seite geladen wird, deren URL [einem bestimmten Muster entspricht](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns).
2. Zur Laufzeit in Seiten, die mit URL-Mustern übereinstimmen.
   - Mithilfe von {{WebExtAPIRef("scripting.registerContentScripts()")}} oder (nur in Manifest V2 in Firefox) {{WebExtAPIRef("contentScripts")}} können Sie den Browser anweisen, ein Inhaltsskript zu laden, wenn eine Seite geladen wird, deren URL [einem bestimmten Muster entspricht](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) (ähnlich wie Methode 1, _außer_, dass Sie Inhaltsskripte zur Laufzeit hinzufügen und entfernen können).
3. Zur Laufzeit in spezifische Tabs.
   - Mithilfe von {{WebExtAPIRef("scripting.executeScript()")}} oder (nur in Manifest V2) {{WebExtAPIRef("tabs.executeScript()")}} können Sie ein Inhaltsskript zu einem bestimmten Tab laden, wann immer Sie möchten. (Beispielsweise als Reaktion auf einen Klick des Benutzers auf eine [Browseraktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button).)

Es gibt nur einen globalen Gültigkeitsbereich _pro Frame, pro Erweiterung_. Das bedeutet, dass Variablen eines Inhaltsskripts von allen anderen Inhaltsskripten unabhängig davon, wie das Inhaltsskript geladen wurde, zugänglich sind.

Mit den Methoden (1) und (2) können Sie Skripte nur in Seiten laden, deren URLs mit einem [Match-Muster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) dargestellt werden können.

Mit Methode (3) können Sie auch Skripte in Seiten laden, die in Ihre Erweiterung gepackt sind, aber keine Skripte in privilegierten Browser-Seiten (wie "`about:debugging`" oder "`about:addons`").

> **Hinweis:** [Dynamische JS-Modulimporte](/de/docs/Web/JavaScript/Guide/Modules#dynamic_module_loading) funktionieren jetzt in Inhaltsskripten. Weitere Details finden Sie in [Firefox-Bug 1536094](https://bugzil.la/1536094).
> Es sind nur URLs mit dem Scheme _moz-extension_ erlaubt, was beispielsweise Daten-URLs ausschließt ([Firefox-Bug 1587336](https://bugzil.la/1587336)).

### Persistenz

Inhaltsskripte, die mit {{WebExtAPIRef("scripting.executeScript()")}} oder (nur in Manifest V2) {{WebExtAPIRef("tabs.executeScript()")}} geladen werden, werden auf Anforderung ausgeführt und bleiben nicht bestehen.

Inhaltsskripte, die im Manifest unter dem Schlüssel [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) oder mit der API {{WebExtAPIRef("scripting.registerContentScripts()")}} (oder nur in Manifest V2 in Firefox {{WebExtAPIRef("contentScripts")}}) definiert sind, bleiben standardmäßig persistent. Sie bleiben über Neustarts und Aktualisierungen des Browsers und der Erweiterung hinweg registriert.

Die API {{WebExtAPIRef("scripting.registerContentScripts()")}} ermöglicht jedoch, ein Skript als nicht persistent zu definieren. Dies kann nützlich sein, wenn Ihre Erweiterung (im Namen eines Benutzers) ein Inhaltsskript nur in der aktuellen Browsersitzung aktivieren möchte.

## Berechtigungen, Beschränkungen und Einschränkungen

### Berechtigungen

Registrierte Inhaltsskripte werden nur ausgeführt, wenn der Erweiterung [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die Domain erteilt wurden.

Um Skripte programmatisch einzufügen, benötigt die Erweiterung entweder die [`activeTab`-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions). Die `scripting`-Berechtigung ist erforderlich, um Methoden der API {{WebExtAPIRef("scripting")}} zu verwenden.

Ab Manifest V3 werden Host-Berechtigungen nicht automatisch bei der Installation vergeben. Benutzer können nach der Installation der Erweiterung zustimmen oder sich dagegen entscheiden.

### Eingeschränkte Domains

Sowohl [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) als auch die [`activeTab`-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) haben Ausnahmen für einige Domains. Inhaltsskripte werden auf diesen Domains blockiert, um beispielsweise den Benutzer vor einer Privileg-Eskalation durch spezielle Seiten zu schützen.

In Firefox umfasst dies folgende Domains:

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

Andere Browser haben ähnliche Einschränkungen hinsichtlich der Webseiten, auf denen Erweiterungen installiert werden können. Beispielsweise ist in Chrome der Zugriff auf chrome.google.com eingeschränkt.

> [!NOTE]
> Da diese Einschränkungen addons.mozilla.org umfassen, kann es sein, dass Benutzer unmittelbar nach der Installation Ihrer Erweiterung feststellen, dass diese nicht funktioniert. Um dies zu vermeiden, sollten Sie eine entsprechende Warnung oder eine [Onboarding-Seite](https://extensionworkshop.com/documentation/develop/onboard-upboard-offboard-users/) hinzufügen, um Benutzer von `addons.mozilla.org` wegzuleiten.

Die Liste der Domains kann durch Unternehmensrichtlinien weiter eingeschränkt werden: Firefox erkennt die `restricted_domains`-Richtlinie wie in [ExtensionSettings in mozilla/policy-templates](https://github.com/mozilla/policy-templates/blob/master/README.md#extensionsettings) dokumentiert. Die `runtime_blocked_hosts`-Richtlinie von Chrome ist bei [Configure ExtensionSettings policy](https://support.google.com/chrome/a/answer/9867568) dokumentiert.

### Einschränkungen

Ganze Tabs oder Frames können mit [`data:`-URI](/de/docs/Web/URI/Schemes/data), [`Blob`](/de/docs/Web/API/URL/createObjectURL_static)-Objekten und anderen ähnlichen Techniken geladen werden. Die Unterstützung der Injektion von Inhaltsskripten in solche speziellen Dokumente variiert zwischen den Browsern. Weitere Informationen finden Sie in [Firefox-Bug #1411641 Kommentar 41](https://bugzil.la/1411641#c41).

## Umgebung von Inhaltsskripten

### DOM-Zugriff

Inhaltsskripte können wie reguläre Seitenskripte auf das DOM der Seite zugreifen und es ändern. Sie können ebenso alle Änderungen sehen, die Seitenskripte am DOM vorgenommen haben.

Allerdings erhalten Inhaltsskripte eine "saubere" Ansicht des DOM. Das bedeutet:

- Inhaltsskripte können keine JavaScript-Variablen sehen, die von Seitenskripten definiert wurden.
- Wenn ein Seitenskript eine eingebaute DOM-Eigenschaft neu definiert, sieht das Inhaltsskript die ursprüngliche Version der Eigenschaft und nicht die neu definierte Version.

Wie bei ["Umgebung von Inhaltsskripten" bei Chrome-Inkompatibilitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#content_script_environment) beschrieben, variiert dieses Verhalten zwischen den Browsern:

- In Firefox wird dieses Verhalten [Xray-Vision](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts#xray_vision_in_firefox) genannt.
  Inhaltsskripte können JavaScript-Objekte aus ihrem eigenen globalen Gültigkeitsbereich oder Xray-umwickelte Versionen von der Webseite erhalten.

- In Chrome wird dieses Verhalten durch eine [isolierte Welt](https://chromium.googlesource.com/chromium/src/+/master/third_party/blink/renderer/bindings/core/v8/V8BindingDesign.md#world) durchgesetzt, die einen grundlegend anderen Ansatz verfolgt.

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

Das Gleiche gilt umgekehrt; Seitenskripte können keine JavaScript-Eigenschaften sehen, die von Inhaltsskripten hinzugefügt wurden.

Dies bedeutet, dass Inhaltsskripte sich darauf verlassen können, dass sich DOM-Eigenschaften vorhersehbar verhalten, ohne sich darüber Gedanken machen zu müssen, ob sich Variablen mit denen des Seitenskripts überschneiden.

Eine praktische Konsequenz dieses Verhaltens ist, dass ein Inhaltsskript keinen Zugriff auf JavaScript-Bibliotheken hat, die von der Seite geladen werden. So kann beispielsweise ein Inhaltsskript nicht auf jQuery zugreifen, wenn die Seite jQuery enthält.

Falls ein Inhaltsskript eine JavaScript-Bibliothek benötigt, sollte die Bibliothek selbst als Inhaltsskript _zusätzlich_ zu dem Inhaltsskript injiziert werden, das sie verwenden möchte:

```json
"content_scripts": [
  {
    "matches": ["*://*.mozilla.org/*"],
    "js": ["jquery.js", "content-script.js"]
  }
]
```

> [!NOTE]
> Firefox bietet [cloneInto()](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/cloneInto) und [exportFunction()](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/exportFunction), um Inhaltsskripten den Zugriff auf JavaScript-Objekte zu ermöglichen, die von Seitenskripten erstellt wurden, und umgekehrt ihre eigenen JavaScript-Objekte den Seitenskripten zur Verfügung zu stellen.
>
> Weitere Details finden Sie unter [Objekte mit Seitenskripten teilen](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts).

### WebExtension-APIs

Zusätzlich zu den Standard-DOM-APIs können Inhaltsskripte folgende WebExtension-APIs verwenden:

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

Inhaltsskripte können Anfragen mit den normalen [`window.XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)- und [`window.fetch()`](/de/docs/Web/API/Fetch_API)-APIs machen.

> [!NOTE]
> In Firefox mit Manifest V2 werden Anfragen von Inhaltsskripten (z. B. mit [`fetch()`](/de/docs/Web/API/Fetch_API/Using_Fetch)) im Kontext einer Erweiterung ausgeführt, daher müssen Sie eine absolute URL angeben, um auf Seiteninhalte zu verweisen.
>
> In Chrome und Firefox mit Manifest V3 werden diese Anfragen im Kontext der Seite ausgeführt, sodass sie an eine relative URL gesendet werden. Beispielsweise wird `/api` an `https://«aktuelle Seiten-URL»/api` geschickt.

Inhaltsskripte erhalten die gleichen bereichsübergreifenden Privilegien wie der Rest der Erweiterung: Wenn die Erweiterung bereichsübergreifenden Zugriff für eine Domain mit dem Schlüssel [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in `manifest.json` angefordert hat, erhalten ihre Inhaltsskripte Zugang zu dieser Domain.

> [!NOTE]
> Bei Verwendung von Manifest V3 können Inhaltsskripte bereichsübergreifende Anfragen ausführen, wenn der Zielserver mit [CORS](/de/docs/Web/HTTP/CORS) zustimmt; jedoch funktionieren Host-Berechtigungen in Inhaltsskripten nicht, bleiben aber auf regulären Erweiterungsseiten erhalten.

Dies wird durch die Bereitstellung privilegierterer XHR- und Fetch-Instanzen im Inhaltsskript erreicht. Dies hat zur Folge, dass die Header [`Origin`](/de/docs/Web/HTTP/Headers/Origin) und [`Referer`](/de/docs/Web/HTTP/Headers/Referer) nicht gesetzt werden, wie es eine Anfrage der Seite tun würde. Dies ist oft bevorzugt, um die bereichsübergreifende Natur der Anfrage nicht zu offenbaren.

> [!NOTE]
> In Firefox mit Manifest V2 können Erweiterungen, die Anfragen ausführen müssen, die sich wie von der Seite selbst gesendet verhalten, `content.XMLHttpRequest` und `content.fetch()` verwenden.
>
> Für bereichsübergreifende Erweiterungen müssen diese Methoden funktionserkennt werden.
>
> In Manifest V3 ist dies nicht möglich, da `content.XMLHttpRequest` und `content.fetch()` nicht verfügbar sind.

> [!NOTE]
> In Chrome, ab Version 73, und Firefox, ab Version 101 mit Manifest V3, unterliegen Inhaltsskripte denselben [CORS](/de/docs/Web/HTTP/CORS)-Richtlinien wie die Seite, in der sie ausgeführt werden. Nur Hintergrundausschnitte haben erhöhte bereichsübergreifende Privilegien. Siehe [Changes to Cross-Origin Requests in Chrome Extension Content Scripts](https://www.chromium.org/Home/chromium-security/extension-content-script-fetches/).

## Kommunikation mit Hintergrundskripten

Obwohl Inhaltsskripte die meisten WebExtension-APIs nicht direkt nutzen können, können sie mit den Hintergrundskripten der Erweiterung über die Nachrichten-APIs kommunizieren und so indirekt auf dieselben APIs zugreifen wie die Hintergrundskripte.

Es gibt zwei grundlegende Muster für die Kommunikation zwischen Hintergrundskripten und Inhaltsskripten:

- Es können **eineindeutige Nachrichten** (mit einer optionalen Antwort) gesendet werden.
- Eine **längerfristige Verbindung zwischen den beiden Seiten** kann eingerichtet werden, um Nachrichten auszutauschen.

### Eineindeutige Nachrichten

Um eineindeutige Nachrichten mit einer optionalen Antwort zu senden, können Sie die folgenden APIs verwenden:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="row"></th>
      <th scope="col">Im Inhaltsskript</th>
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

Zum Beispiel hört ein Inhaltsskript in diesem Beispiel auf Klick-Ereignisse auf der Webseite.

Falls der Klick auf einen Link erfolgte, sendet es eine Nachricht mit der Ziel-URL an die Hintergrundseite:

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

Das Hintergrundskript empfängt diese Nachrichten und zeigt eine Benachrichtigung mithilfe der [`notifications`](/de/docs/Mozilla/Add-ons/WebExtensions/API/notifications)-API an:

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

(Dieser Beispielcode wurde leicht aus dem [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n)-Beispiel auf GitHub angepasst.)

### Verbindungsbasierte Nachrichtenübertragung

Das Senden von eineindeutigen Nachrichten kann mühsam sein, wenn viele Nachrichten zwischen Hintergrundskripten und Inhaltsskripten ausgetauscht werden. Ein alternatives Muster besteht darin, eine längerfristige Verbindung zwischen den beiden Kontexten einzurichten und diese Verbindung zum Austausch von Nachrichten zu verwenden.

Beide Seiten besitzen ein [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port)-Objekt, das sie zum Nachrichtenaustausch verwenden können.

Um die Verbindung herzustellen:

- Eine Seite hört mit [`runtime.onConnect`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect) auf Verbindungsversuche.
- Auf der anderen Seite wird entweder:

  - [`tabs.connect()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/connect) (wenn eine Verbindung zu einem Inhaltsskript hergestellt wird)
  - [`runtime.connect()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/connect) (bei einer Verbindung zu einem Hintergrundskript) aufgerufen.

Dies gibt ein [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port)-Objekt zurück.

- Der [`runtime.onConnect`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect)-Listener erhält sein eigenes [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port)-Objekt.

Sobald jede Seite einen Port hat, können die beiden Seiten:

- Nachrichten mit `runtime.Port.postMessage()` senden
- Nachrichten mit `runtime.Port.onMessage()` empfangen

Zum Beispiel macht das folgende Inhaltsskript, sobald es geladen wird:

- Stellt eine Verbindung zum Hintergrundskript her
- Speichert den `Port` in einer Variable `myPort`
- Lauscht auf Nachrichten auf `myPort` (und protokolliert diese)
- Sendet Nachrichten mit `myPort` an das Hintergrundskript, wenn der Benutzer auf das Dokument klickt

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

- Lauscht auf Verbindungsversuche des Inhaltsskripts
- Bei einem Verbindungsversuch:

  - Speichert den Port in einer Variablen mit dem Namen `portFromCS`
  - Sendet dem Inhaltsskript eine Nachricht über den Port
  - Lauscht auf Nachrichten, die über den Port empfangen werden, und loggt diese

- Sendet Nachrichten an das Inhaltsskript unter Verwendung von `portFromCS`, wenn der Benutzer auf die Browseraktion der Erweiterung klickt

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

Falls mehrere Inhaltsskripte gleichzeitig kommunizieren, können Sie deren Verbindungen in einem Array speichern.

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

### Entscheidung zwischen eineindeutigen Nachrichten und verbindungsbasierter Kommunikation

Die Wahl zwischen eineindeutigen Nachrichten und verbindungsbasiertem Messaging hängt davon ab, wie Ihre Erweiterung Messaging verwenden möchte.

Empfohlene Best Practices sind:

- **Verwenden Sie eineindeutige Nachrichten, wenn…**
  - Nur eine Antwort auf eine Nachricht erwartet wird.
  - Eine kleine Anzahl von Skripten darauf hört, Nachrichten zu empfangen ({{WebExtAPIRef("runtime.onMessage")}}-Aufrufe).
- **Verwenden Sie verbindungsbasierte Nachrichtenübertragung, wenn…**
  - Skripte Sitzungen haben, in denen viele Nachrichten ausgetauscht werden.
  - Die Erweiterung den Fortschritt einer Aufgabe kennen oder wissen muss, wenn eine Aufgabe unterbrochen wird, oder eine Aufgabe, die per Nachrichtenübertragung gestartet wurde, unterbrechen möchte.

## Kommunikation mit der Webseite

Inhaltsskripte haben standardmäßig keinen Zugriff auf die von Seitenskripten erstellten Objekte. Sie können jedoch mit Seitenskripten über die DOM-APIs [`window.postMessage`](/de/docs/Web/API/Window/postMessage) und [`window.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) kommunizieren.

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

Für ein vollständiges funktionierendes Beispiel [besuchen Sie die Demoseite auf GitHub](https://mdn.github.io/webextensions-examples/content-script-page-script-messaging.html) und folgen Sie den Anweisungen.

> [!WARNING]
> Seien Sie sehr vorsichtig, wenn Sie auf diese Weise mit nicht vertrauenswürdigen Webinhalten interagieren! Erweiterungen sind privilegierter Code mit mächtigen Fähigkeiten, und bösartige Webseiten können sie leicht dazu bringen, diese Fähigkeiten auszunutzen.
>
> Ein triviales Beispiel: Angenommen, der Inhaltsskript-Code, der die Nachricht empfängt, sieht folgendermaßen aus:
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
> Nun kann das Seitenskript jeden beliebigen Code mit allen Rechten des Inhaltsskripts ausführen.

## Verwendung von `eval()` in Inhaltsskripten

> **Hinweis:** `eval()` ist nicht verfügbar in Manifest V3.

- In Chrome
  - : {{jsxref("Global_Objects/eval", "eval")}} führt Code immer im Kontext des **Inhaltsskripts** aus, nicht im Kontext der Seite.
- In Firefox

  - : Wenn Sie `eval()` aufrufen, wird Code im Kontext des **Inhaltsskripts** ausgeführt.

    Wenn Sie `window.eval()` aufrufen, wird Code im Kontext der **Seite** ausgeführt.

Zum Beispiel sieht ein solches Inhaltsskript so aus:

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

Dieser Code erzeugt einige Variablen `x` und `y` mithilfe von `window.eval()` und `eval()`, gibt ihre Werte aus und sendet dann eine Nachricht an die Seite.

Nach Empfang der Nachricht loggt das Seitenskript die gleichen Variablen:

```js
window.addEventListener("message", (event) => {
  if (event.source === window && event.data && event.data.message === "check") {
    console.log(`In page script, window.x: ${window.x}`);
    console.log(`In page script, window.y: ${window.y}`);
  }
});
```

In Chrome erzeugt dies folgende Ausgabe:

```plain
In content script, window.x: 1
In content script, window.y: 2
In page script, window.x: undefined
In page script, window.y: undefined
```

In Firefox erzeugt dies folgende Ausgabe:

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
> // content-script.js ruft die neudefinierte Version auf
>
> window.eval("console.log(false)");
> ```
