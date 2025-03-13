---
title: Inhalts-Skripte
slug: Mozilla/Add-ons/WebExtensions/Content_scripts
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{AddonSidebar}}

Ein Inhalts-Skript ist ein Teil Ihrer Erweiterung, das im Kontext einer Webseite ausgeführt wird. Es kann Seiteninhalte lesen und modifizieren, indem es die standardmäßigen [Web-APIs](/de/docs/Web/API) verwendet. Das Verhalten von Inhalts-Skripten ist ähnlich wie das von Skripten, die Teil einer Webseite sind, wie z.B. jene, die mit dem {{HTMLElement("script")}}-Element geladen werden. Allerdings können Inhalts-Skripte nur auf Seiteninhalte zugreifen, wenn [Host-Berechtigungen für den Ursprung der Webseite erteilt wurden](#berechtigungen).

Inhalts-Skripte können auf [eine kleine Teilmenge der WebExtension-APIs zugreifen](#webextension-apis), jedoch können sie [mit Hintergrundskripten kommunizieren](#kommunikation_mit_hintergrundskripten) und so indirekt auf die WebExtension-APIs zugreifen. [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts) können auf alle [WebExtension JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) zugreifen, haben jedoch keinen direkten Zugriff auf den Inhalt von Webseiten.

> [!NOTE]
> Einige Web-APIs sind auf [sichere Kontexte](/de/docs/Web/Security/Secure_Contexts) beschränkt, was auch für Inhalts-Skripte in diesen Kontexten gilt. Ausgenommen ist [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents), das aus Inhalts-Skripten in unsicheren Kontexten in Firefox aufgerufen werden kann.

## Laden von Inhalts-Skripten

Sie können ein Inhalts-Skript in eine Webseite laden:

1. Zur Installationszeit, in Seiten, die zu URL-Mustern passen.
   - Mithilfe des [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Schlüssels in Ihrer `manifest.json` können Sie den Browser bitten, ein Inhalts-Skript zu laden, wann immer der Browser eine Seite lädt, deren URL einem [bestimmten Muster entspricht](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns).
2. Zur Laufzeit, in Seiten, die zu URL-Mustern passen.
   - Mithilfe von {{WebExtAPIRef("scripting.registerContentScripts()")}} oder (nur in Manifest V2 in Firefox) {{WebExtAPIRef("contentScripts")}}, können Sie den Browser bitten, ein Inhalts-Skript zu laden, wann immer der Browser eine Seite lädt, deren URL einem [bestimmten Muster entspricht](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns). (Dies ähnelt Methode 1, _außer_ dass Sie Inhalts-Skripte zur Laufzeit hinzufügen und entfernen können).
3. Zur Laufzeit, in spezifische Tabs.
   - Mithilfe von {{WebExtAPIRef("scripting.executeScript()")}} oder (nur in Manifest V2) {{WebExtAPIRef("tabs.executeScript()")}}, können Sie ein Inhalts-Skript in einen bestimmten Tab laden, wann immer Sie möchten. (Zum Beispiel als Antwort darauf, dass der Benutzer auf eine [Browser-Aktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) klickt).

Es gibt nur einen globalen Gültigkeitsbereich _pro Frame, pro Erweiterung_. Dies bedeutet, dass Variablen aus einem Inhalts-Skript von allen anderen Inhalts-Skripten zugänglich sind, unabhängig davon, wie das Inhalts-Skript geladen wurde.

Mit den Methoden (1) und (2) können Sie Skripte nur in Seiten laden, deren URLs mittels eines [Übereinstimmungsmusters](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) dargestellt werden können.

Mit Methode (3) können Sie auch Skripte in Seiten laden, die mit Ihrer Erweiterung gebündelt sind, aber Sie können keine Skripte in privilegierte Browserseiten laden (wie "`about:debugging`" oder "`about:addons`").

> **Hinweis:** [Dynamische JS-Modul-Importe](/de/docs/Web/JavaScript/Guide/Modules#dynamic_module_loading) funktionieren nun in Inhalts-Skripten. Weitere Details finden Sie in [Firefox-Bug 1536094](https://bugzil.la/1536094).
> Nur URLs mit dem _moz-extension_-Schema sind erlaubt, was Daten-URLs ausschließt ([Firefox-Bug 1587336](https://bugzil.la/1587336)).

### Persistenz

Inhalts-Skripte, die mit {{WebExtAPIRef("scripting.executeScript()")}} oder (nur in Manifest V2) {{WebExtAPIRef("tabs.executeScript()")}} geladen werden, laufen auf Anfrage und bleiben nicht bestehen.

Inhalts-Skripte, die im `content_scripts`-Schlüssel der `manifest.json`-Datei definiert sind oder mit der {{WebExtAPIRef("scripting.registerContentScripts()")}} API (nur in Manifest V2 in Firefox) registriert wurden, bleiben standardmäßig bestehen. Sie bleiben über Browser-Neustarts und -Aktualisierungen sowie Erweiterungs-Neustarts hinaus registriert.

Die {{WebExtAPIRef("scripting.registerContentScripts()")}} API ermöglicht es jedoch, das Skript als nicht persistent zu definieren. Dies kann nützlich sein, wenn zum Beispiel Ihre Erweiterung (im Namen eines Benutzers) ein Inhalts-Skript nur in der aktuellen Browsersitzung aktivieren möchte.

## Berechtigungen, Einschränkungen und Begrenzungen

### Berechtigungen

Registrierte Inhalts-Skripte werden nur ausgeführt, wenn der Erweiterung [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die Domain erteilt wurden.

Um Skripte programmgesteuert zu injizieren, benötigt die Erweiterung entweder die [`activeTab`-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions). Die `scripting`-Berechtigung ist erforderlich, um Methoden der {{WebExtAPIRef("scripting")}} API zu verwenden.

Mit Manifest V3 werden Host-Berechtigungen nicht automatisch bei der Installation erteilt. Benutzer können sich für oder gegen Host-Berechtigungen entscheiden, nachdem sie die Erweiterung installiert haben.

### Eingeschränkte Domains

Sowohl [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) als auch die [`activeTab`-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) haben Ausnahmen für einige Domains. Inhalts-Skripte sind daran gehindert, auf diesen Domains auszuführen, um den Benutzer beispielsweise vor einer Erweiterung zu schützen, die ihre Privilegien durch spezielle Seiten eskaliert.

In Firefox umfassen diese Domains:

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

Andere Browser haben ähnliche Einschränkungen hinsichtlich der Webseiten, von denen Erweiterungen installiert werden können. Beispielsweise ist in Chrome der Zugriff auf chrome.google.com eingeschränkt.

> [!NOTE]
> Da diese Einschränkungen auch addons.mozilla.org einschließen, kann es vorkommen, dass Benutzer, die versuchen, Ihre Erweiterung unmittelbar nach der Installation zu nutzen, feststellen, dass sie nicht funktioniert. Um dies zu vermeiden, sollten Sie eine geeignete Warnung oder eine [Onboarding-Seite](https://extensionworkshop.com/documentation/develop/onboard-upboard-offboard-users/) hinzufügen, um Benutzer von `addons.mozilla.org` wegzuleiten.

Der Satz von Domains kann durch Unternehmensrichtlinien weiter eingeschränkt werden: Firefox erkennt die `restricted_domains`-Richtlinie an, wie in [ExtensionSettings in mozilla/policy-templates](https://github.com/mozilla/policy-templates/blob/master/README.md#extensionsettings) dokumentiert. Chromes `runtime_blocked_hosts`-Richtlinie ist unter [Configure ExtensionSettings policy](https://support.google.com/chrome/a/answer/9867568) dokumentiert.

### Begrenzungen

Ganze Tabs oder Frames können mithilfe von [`data:`-URI](/de/docs/Web/URI/Reference/Schemes/data), [`Blob`](/de/docs/Web/API/URL/createObjectURL_static)-Objekten und anderen ähnlichen Techniken geladen werden. Die Unterstützung der Inhalts-Skript-Injektion in solche speziellen Dokumente variiert je nach Browser, siehe den Firefox [Bug #1411641 Kommentar 41](https://bugzil.la/1411641#c41) für einige Details.

## Inhalts-Skript-Umgebung

### DOM-Zugriff

Inhalts-Skripte können auf das DOM der Seite zugreifen und dieses modifizieren, genauso wie normale Seitenskripte es können. Sie können auch alle Änderungen sehen, die an dem DOM von Seitenskripten vorgenommen wurden.

Allerdings erhalten Inhalts-Skripte eine "saubere" Ansicht des DOMs. Das bedeutet:

- Inhalts-Skripte können keine JavaScript-Variablen sehen, die von Seitenskripten definiert wurden.
- Wenn ein Seitenskript eine eingebaute DOM-Eigenschaft neu definiert, sieht das Inhalts-Skript die ursprüngliche Version der Eigenschaft, nicht die neu definierte Version.

Wie unter ["Content script environment" bei Chrome-Inkompatibilitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#content_script_environment) angemerkt, verhält sich dies je nach Browser unterschiedlich:

- In Firefox wird dieses Verhalten als [Xray vision](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts#xray_vision_in_firefox) bezeichnet.
  Inhalts-Skripte können JavaScript-Objekte aus ihrem eigenen globalen Gültigkeitsbereich oder Xray-umhüllte Versionen von der Webseite antreffen.

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

Nun injiziert eine Erweiterung ein Inhalts-Skript in die Seite:

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

Dasselbe trifft auch im umgekehrten Fall zu; Seitenskripte haben keinen Zugriff auf JavaScript-Eigenschaften, die von Inhalts-Skripten hinzugefügt wurden.

Das bedeutet, dass Inhalts-Skripte sich darauf verlassen können, dass sich DOM-Eigenschaften vorhersehbar verhalten, ohne sich Sorgen machen zu müssen, dass ihre Variablen mit den Variablen des Seitenskripts kollidieren.

Eine praktische Konsequenz dieses Verhaltens ist, dass ein Inhalts-Skript keinen Zugriff auf JavaScript-Bibliotheken hat, die von der Seite geladen werden. Wenn die Seite beispielsweise jQuery enthält, kann das Inhalts-Skript dies nicht sehen.

Wenn ein Inhalts-Skript eine JavaScript-Bibliothek verwenden muss, sollte die Bibliothek selbst als Inhalts-Skript _neben_ dem Inhalts-Skript, das sie verwenden möchte, injiziert werden:

```json
"content_scripts": [
  {
    "matches": ["*://*.mozilla.org/*"],
    "js": ["jquery.js", "content-script.js"]
  }
]
```

> [!NOTE]
> Firefox bietet [cloneInto()](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/cloneInto) und [exportFunction()](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/exportFunction), um Inhalts-Skripten den Zugriff auf JavaScript-Objekte zu ermöglichen, die von Seitenskripten erstellt wurden und ihre JavaScript-Objekte den Seitenskripten bereitzustellen.
>
> Weitere Details finden Sie unter [Sharing objects with page scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts).

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

Inhalts-Skripte können Anfragen mit den normalen [`window.XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) und [`window.fetch()`](/de/docs/Web/API/Fetch_API) APIs machen.

> [!NOTE]
> In Firefox in Manifest V2 erfolgen Inhalts-Skript-Anfragen (zum Beispiel mit [`fetch()`](/de/docs/Web/API/Fetch_API/Using_Fetch)) im Kontext einer Erweiterung, daher müssen Sie eine absolute URL angeben, um auf Seiteninhalte zu referenzieren.
>
> In Chrome und Firefox in Manifest V3 erfolgen diese Anfragen im Kontext der Seite, so dass sie an eine relative URL gesendet werden. Zum Beispiel wird `/api` an `https://«aktueller Seiten-URL»/api` gesendet.

Inhalts-Skripte haben dieselben Cross-Domain-Berechtigungen wie der Rest der Erweiterung: Wenn die Erweiterung also Cross-Domain-Zugriff für eine Domain mithilfe des [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)-Schlüssels in `manifest.json` beantragt hat, dann erhalten ihre Inhalts-Skripte Zugriff auf diese Domain ebenfalls.

> [!NOTE]
> Bei Verwendung von Manifest V3 können Inhalts-Skripte übergreifende Anfragen ausführen, wenn der Zielserver über [CORS](/de/docs/Web/HTTP/Guides/CORS) zustimmt; Host-Berechtigungen funktionieren jedoch nicht in Inhalts-Skripten, aber sie tun es weiterhin in normalen Erweiterungsseiten.

Dies wird erreicht, indem man privilegiertere XHR- und Fetch-Instanzen im Inhalts-Skript bereitstellt, was den Nebeneffekt hat, dass die [`Origin`](/de/docs/Web/HTTP/Reference/Headers/Origin)- und [`Referer`](/de/docs/Web/HTTP/Reference/Headers/Referer)-Header nicht gesetzt werden, wie es eine Anfrage von der Seite selbst tun würde; dies ist oft vorzuziehen, um zu verhindern, dass die Anfrage ihre Überquerung von Ursprüngen offenbart.

> [!NOTE]
> In Firefox in Manifest V2 können Erweiterungen, die Anfragen ausführen müssen, die so verhalten, als ob sie vom eigentlichen Inhalt gesendet wurden, `content.XMLHttpRequest` und `content.fetch()` stattdessen verwenden.
>
> Für browserübergreifende Erweiterungen muss das Vorhandensein dieser Methoden funktional nachgewiesen werden.
>
> Dies ist in Manifest V3 nicht möglich, da `content.XMLHttpRequest` und `content.fetch()` nicht verfügbar sind.

> [!NOTE]
> In Chrome, beginnend mit Version 73, und Firefox, beginnend mit Version 101 bei Verwendung von Manifest V3, unterliegen Inhalts-Skripte der gleichen [CORS](/de/docs/Web/HTTP/Guides/CORS)-Richtlinie wie die Seite, auf der sie laufen. Nur Backend-Skripte haben erhöhte Privilegien über Domains. Siehe [Änderungen bei Cross-Origin-Anfragen in Chrome Extension Content Scripts](https://www.chromium.org/Home/chromium-security/extension-content-script-fetches/).

## Kommunikation mit Hintergrundskripten

Obwohl Inhalts-Skripte nicht direkt die meisten der WebExtension-APIs verwenden können, können sie mit den Hintergrundskripten der Erweiterung über die Messaging-APIs kommunizieren und so indirekt auf alle dieselben APIs zugreifen, die auch die Hintergrundskripte verwenden können.

Es gibt zwei grundlegende Muster für die Kommunikation zwischen den Hintergrund- und Inhalts-Skripten:

- Sie können **einmalige Nachrichten** senden (mit einer optionalen Antwort).
- Sie können eine **längerlebige Verbindung zwischen den beiden Seiten** einrichten und diese Verbindung nutzen, um Nachrichten auszutauschen.

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

Beispielsweise hier ein Inhalts-Skript, das auf Klickereignisse in der Webseite hört.

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

Das Hintergrund-Skript lauscht auf diese Nachrichten und zeigt eine Benachrichtigung mithilfe der [`notifications`](/de/docs/Mozilla/Add-ons/WebExtensions/API/notifications) API an:

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

(Dieses Beispielcode ist leicht adaptiert von dem [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n)-Beispiel auf GitHub.)

### Verbindung-basierte Nachrichtenübermittlung

Das Senden von einmaligen Nachrichten kann mühsam werden, wenn Sie viele Nachrichten zwischen einem Hintergrundskript und einem Inhalts-Skript austauschen. Ein alternatives Muster besteht darin, eine längerlebige Verbindung zwischen den beiden Kontexten zu etablieren und diese Verbindung zum Nachrichtenaustausch zu verwenden.

Beide Seiten haben ein [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port)-Objekt, das sie zum Nachrichtenaustausch verwenden können.

Um die Verbindung herzustellen:

- Eine Seite hört auf Verbindungen mittels [`runtime.onConnect`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect)
- Die andere Seite ruft:

  - [`tabs.connect()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/connect) (wenn sie mit einem Inhalts-Skript verbindet)
  - [`runtime.connect()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/connect) (wenn sie mit einem Hintergrund-Skript verbindet)

Diese Rückkehr ein [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port)-Objekte.

- Der [`runtime.onConnect`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect)-Listener erhält sein eigenes [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port)-Objekt übergeben.

Sobald jede Seite einen Port hat, können die beiden Seiten:

- Nachrichten mit `runtime.Port.postMessage()` senden
- Nachrichten mit `runtime.Port.onMessage()` empfangen

Zum Beispiel, sobald es geladen ist, das folgende Inhalts-Skript:

- Verbindet sich mit dem Hintergrund-Skript
- Speichert den `Port` in einer Variable `myPort`
- Lauscht auf Nachrichten auf `myPort` (und protokolliert sie)
- Verwendet `myPort`, um Nachrichten an das Hintergrund-Skript zu senden, wenn der Benutzer auf das Dokument klickt

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

- Lauscht auf Verbindungsversuche vom Inhalts-Skript
- Wenn es einen Verbindungsversuch erhält:

  - Speichert den Port in einer Variablen namens `portFromCS`
  - Sendet dem Inhalts-Skript eine Nachricht mittels des Ports
  - Beginnt auf Nachrichten zu lauschen, die auf dem Port empfangen werden, und protokolliert sie

- Sendet Nachrichten an das Inhalts-Skript, mithilfe von `portFromCS`, wenn der Benutzer auf die Browser-Aktion der Erweiterung klickt

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

Wenn Sie mehrere Inhalts-Skripte verwenden, die gleichzeitig kommunizieren, könnten Sie Verbindungen zu ihnen in einem Array speichern wollen.

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

### Entscheidung zwischen einmaligen Nachrichten und Verbindung-basierter Nachrichtenübermittlung

Die Wahl zwischen einmaligen und Verbindung-basierter Nachrichtenübermittlung hängt davon ab, wie Ihre Erweiterung erwartet, Messaging zu nutzen.

Die empfohlenen Best Practices sind:

- **Verwenden Sie einmalige Nachrichten, wenn…**
  - Nur eine Antwort auf eine Nachricht erwartet wird.
  - Eine kleine Anzahl von Skripten Nachrichten empfangen ({{WebExtAPIRef("runtime.onMessage")}} Aufrufe).
- **Verwenden Sie Verbindung-basierte Nachrichtenübermittlung, wenn…**
  - Skripte an Sitzungen teilnehmen, in denen mehrere Nachrichten ausgetauscht werden.
  - Die Erweiterung über den Fortschritt einer Aufgabe wissen muss oder wenn eine Aufgabe unterbrochen wird oder eine Aufgabe unterbrechen möchte, die durch Messaging initiiert wurde.

## Kommunikation mit der Webseite

Standardmäßig haben Inhalts-Skripte keinen Zugriff auf die von Seitenskripten erstellten Objekte. Sie können jedoch mit Seitenskripten mithilfe der DOM-APIs [`window.postMessage`](/de/docs/Web/API/Window/postMessage) und [`window.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) kommunizieren.

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

Für ein vollständiges Arbeitsbeispiel, [besuchen Sie die Demo-Seite auf GitHub](https://mdn.github.io/webextensions-examples/content-script-page-script-messaging.html) und folgen Sie den Anweisungen.

> [!WARNING]
> Seien Sie sehr vorsichtig, wenn Sie in dieser Weise mit nicht vertrauenswürdigen Webinhalten interagieren! Erweiterungen sind privilegierter Code, der mächtige Fähigkeiten haben kann, und feindliche Webseiten können sie leicht dazu verleiten, auf diese Fähigkeiten zuzugreifen.
>
> Um ein triviales Beispiel zu geben, nehmen wir an, dass der Inhaltsskriptcode, der die Nachricht empfängt, so etwas wie dieses macht:
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

## Verwendung von `eval()` in Inhalts-Skripten

> **Hinweis:** `eval()` ist nicht verfügbar in Manifest V3.

- In Chrome
  - : {{jsxref("Global_Objects/eval", "eval")}} führt immer Code im Kontext des **Inhalts-Skripts** aus, nicht im Kontext der Seite.
- In Firefox

  - : Wenn Sie `eval()` aufrufen, führt es Code im Kontext des **Inhalts-Skripts** aus.

    Wenn Sie `window.eval()` aufrufen, führt es Code im Kontext der **Seite** aus.

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

Dieser Code erstellt einfach einige Variablen `x` und `y` mit Hilfe von `window.eval()` und `eval()`, protokolliert ihre Werte und sendet dann eine Nachricht an die Seite.

Beim Empfang der Nachricht protokolliert das Seitenskript dieselben Variablen:

```js
window.addEventListener("message", (event) => {
  if (event.source === window && event.data && event.data.message === "check") {
    console.log(`In page script, window.x: ${window.x}`);
    console.log(`In page script, window.y: ${window.y}`);
  }
});
```

In Chrome erzeugt dies eine Ausgabe wie diese:

```plain
In content script, window.x: 1
In content script, window.y: 2
In page script, window.x: undefined
In page script, window.y: undefined
```

In Firefox erzeugt dies eine Ausgabe wie diese:

```plain
In content script, window.x: undefined
In content script, window.y: 2
In page script, window.x: 1
In page script, window.y: undefined
```

Dasselbe gilt für [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), [`setInterval()`](/de/docs/Web/API/Window/setInterval), und [`Function()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function).

> [!WARNING]
> Seien Sie sehr vorsichtig, wenn Sie Code im Kontext der Seite ausführen!
>
> Die Umgebung der Seite wird von potenziell schädlichen Webseiten kontrolliert, die Objekte, mit denen Sie interagieren, neu definieren können, um sich auf unerwartete Weise zu verhalten:
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
