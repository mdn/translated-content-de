---
title: Inhaltsskripte
slug: Mozilla/Add-ons/WebExtensions/Content_scripts
l10n:
  sourceCommit: 38199423810927262c9cb4dec7ea7de4cb0c5e0f
---

Ein Inhaltsskript ist ein Teil Ihrer Erweiterung, der im Kontext einer Webseite läuft. Es kann Seiteninhalte lesen und modifizieren, indem es die standardmäßigen [Web-APIs](/de/docs/Web/API) verwendet. Das Verhalten von Inhaltsskripten ähnelt Skripten, die Teil einer Webseite sind, wie jene, die mit dem {{HTMLElement("script")}}-Element geladen werden. Inhaltsskripte können jedoch nur auf Seiteninhalte zugreifen, wenn [Host-Berechtigungen für den Ursprung der Webseite erteilt wurden](#berechtigungen).

Inhaltsskripte können auf [eine kleine Teilmenge der WebExtension APIs](#webextension_apis) zugreifen, aber sie können [mit Hintergrundskripten kommunizieren](#kommunikation_mit_hintergrundskripten) durch ein Nachrichtensystem und somit indirekt auf die WebExtension APIs zugreifen. [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts) können auf alle [WebExtension JavaScript APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) zugreifen, jedoch nicht direkt auf den Inhalt von Webseiten.

> [!NOTE]
> Einige Web-APIs sind auf [sichere Kontexte](/de/docs/Web/Security/Defenses/Secure_Contexts) beschränkt, was auch für Inhaltsskripte in diesen Kontexten gilt. Eine Ausnahme bildet [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents), das von Inhaltsskripten in unsicheren Kontexten in Firefox aufgerufen werden kann.

## Laden von Inhaltsskripten

Sie können ein Inhaltsskript in eine Webseite laden:

1. Zur Installationszeit, in Seiten, die mit URL-Mustern übereinstimmen.
   - Durch die Verwendung des Schlüssels [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) in Ihrer `manifest.json` können Sie den Browser anweisen, ein Inhaltsskript immer dann zu laden, wenn der Browser eine Seite lädt, deren URL mit einem [bestimmten Muster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) übereinstimmt.
2. Zur Laufzeit, in Seiten, die mit URL-Mustern übereinstimmen.
   - Durch Nutzung von {{WebExtAPIRef("scripting.registerContentScripts()")}} oder (nur in Manifest V2 in Firefox) {{WebExtAPIRef("contentScripts")}} können Sie den Browser anweisen, ein Inhaltsskript immer dann zu laden, wenn der Browser eine Seite lädt, deren URL [mit einem gegebenen Muster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) übereinstimmt. (Dies ist ähnlich zur Methode 1, _mit der Ausnahme_, dass Sie Inhaltsskripte zur Laufzeit hinzufügen und entfernen können.)
3. Zur Laufzeit, in spezifische Tabs.
   - Mittels {{WebExtAPIRef("scripting.executeScript()")}} oder (nur in Manifest V2) {{WebExtAPIRef("tabs.executeScript()")}} können Sie ein Inhaltsskript in einen bestimmten Tab laden, wann immer Sie möchten. (Beispielsweise als Reaktion auf das Klicken des Nutzers auf eine [Browser-Aktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button).)

Es gibt nur einen globalen Gültigkeitsbereich _pro Frame, pro Erweiterung_. Das bedeutet, dass Variablen aus einem Inhaltsskript von jedem anderen Inhaltsskript zugänglich sind, unabhängig davon, wie das Inhaltsskript geladen wurde.

> [!NOTE]
> [Dynamische JS-Modul-Importe](/de/docs/Web/JavaScript/Guide/Modules#dynamic_module_loading) funktionieren nun in Inhaltsskripten. Für weitere Details siehe [Firefox-Bug 1536094](https://bugzil.la/1536094).
> Nur URLs mit dem _moz-extension_-Schema sind erlaubt, was Daten-URLs ausschließt ([Firefox-Bug 1587336](https://bugzil.la/1587336)).

### Persistenz

Inhaltsskripte, die mit {{WebExtAPIRef("scripting.executeScript()")}} oder (nur in Manifest V2) {{WebExtAPIRef("tabs.executeScript()")}} geladen werden, werden auf Anfrage ausgeführt und nicht persistent gespeichert.

Inhaltsskripte, die im Manifestdatei-Schlüssel [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) oder mit der {{WebExtAPIRef("scripting.registerContentScripts()")}} oder (nur in Manifest V2 in Firefox) {{WebExtAPIRef("contentScripts")}} API definiert sind, bleiben standardmäßig persistent. Sie bleiben über Neustarts des Browsers und der Erweiterung hinweg registriert.

Allerdings bietet die {{WebExtAPIRef("scripting.registerContentScripts()")}} API die Möglichkeit, das Skript als nicht persistent zu definieren. Dies kann nützlich sein, wenn z. B. Ihre Erweiterung (im Namen eines Nutzers) ein Inhaltsskript nur in der aktuellen Browsersitzung aktivieren möchte.

## Berechtigungen, Einschränkungen und Grenzen

### Berechtigungen

Registrierte Inhaltsskripte werden nur ausgeführt, wenn der Erweiterung [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die Domain gewährt wurden.

Um Skripte programmgesteuert zu injizieren, benötigt die Erweiterung entweder die [`activeTab` Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions). Die `scripting` Berechtigung ist erforderlich, um Methoden aus der {{WebExtAPIRef("scripting")}} API zu verwenden.

Bei der Installation kann eine Erweiterung Host-Berechtigungen für Hosts in ihren `matches`-Listen im `content_scripts` Manifest-Schlüssel anfordern. Benutzer können nach der Installation der Erweiterung Host-Berechtigungen ein- oder ausschalten.

### Eingeschränkte Domains

Sowohl [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) als auch die [`activeTab` Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) haben Ausnahmen für bestimmte Domains. Inhaltsskripte sind davon blockiert, auf diesen Domains ausgeführt zu werden, um beispielsweise den Benutzer davor zu schützen, dass eine Erweiterung Berechtigungen über spezielle Seiten eskaliert.

In Firefox schließt dies diese Domains ein:

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

Andere Browser haben ähnliche Einschränkungen über die Websites, von denen Erweiterungen installiert werden können. Beispielsweise ist der Zugriff auf chrome.google.com in Chrome eingeschränkt.

> [!NOTE]
> Da diese Einschränkungen addons.mozilla.org einschließen, können Benutzer, die versuchen, Ihre Erweiterung unmittelbar nach der Installation zu nutzen, feststellen, dass sie nicht funktioniert. Um dies zu vermeiden, sollten Sie eine angemessene Warnung oder eine [Onboarding-Seite](https://extensionworkshop.com/documentation/develop/onboard-upboard-offboard-users/) hinzufügen, um Benutzer von `addons.mozilla.org` wegzuleiten.

Das Set von Domains kann weiter durch Unternehmensrichtlinien eingeschränkt werden: Firefox erkennt die `restricted_domains`-Richtlinie, wie im [ExtensionSettings in mozilla/policy-templates](https://github.com/mozilla/policy-templates/blob/master/README.md#extensionsettings) dokumentiert. Chromes `runtime_blocked_hosts`-Richtlinie ist bei [Erweiterte ExtensionSettings-Rechtlinie konfigurieren](https://support.google.com/chrome/a/answer/9867568) dokumentiert.

### Einschränkungen

Standardmäßig werden Inhaltsskripte nicht in `about:blank`, `about:srcdoc`, `data:` und `blob:`-Seiten ausgeführt. Um deren Ausführung zu ermöglichen, verwenden Sie die [`match_origin_as_fallback`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#match_origin_as_fallback) Option im `content_scripts` Manifest-Schlüssel oder die [`matchOriginAsFallback`](/de/docs/Mozilla/Add-ons/WebExtensions/API/scripting/RegisteredContentScript#matchoriginasfallback) Option in der `scripting` API.

Erweiterungen können keine Inhaltsskripte in privilegierte Browser-UI-Seiten (wie `about:debugging`, `about:addons`, Lesemodus, Quelltextansicht oder den PDF-Viewer) oder [Erweiterungsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) injizieren.

Wenn eine Erweiterung Code in einer Erweiterungsseite dynamisch ausführen möchte, kann sie ein Skript in die Seite aufnehmen. Dieses Skript enthält den zu ausführenden Code und registriert einen {{WebExtAPIRef("runtime.onMessage")}}-Listener, der eine Möglichkeit zur Ausführung des Codes implementiert. Die Erweiterung kann dann eine Nachricht an den Listener senden, um die Ausführung des Codes auszulösen.

## Umgebung des Inhaltsskripts

### DOM-Zugriff

Inhaltsskripte können auf das DOM der Seite zugreifen und es ändern, genau wie normale Seitenskripte. Sie können auch alle Änderungen sehen, die von Seitenskripten am DOM vorgenommen wurden.

Jedoch erhalten Inhaltsskripte eine „saubere“ Ansicht des DOMs. Das bedeutet:

- Inhaltsskripte können keine JavaScript-Variablen sehen, die von Seitenskripten definiert wurden.
- Wenn ein Seitenskript eine eingebaute DOM-Eigenschaft neu definiert, sieht das Inhaltsskript die ursprüngliche Version der Eigenschaft, nicht die neu definierte Version.

Wie im Abschnitt ["Umgebung des Inhaltsskripts" bei Chrome-Inkompatibilitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#content_script_environment) erwähnt, variiert das Verhalten zwischen den Browsern:

- In Firefox wird dieses Verhalten als [Xray vision](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts#xray_vision_in_firefox) bezeichnet.
  Ein Inhaltsskript kann auf JavaScript-Objekte aus seinem globalen Gültigkeitsbereich oder Xray-umwickelte Versionen von Objekten der Webseite treffen. In regulären Webseiten ist {{jsxref("globalThis")}} identisch mit `window`, aber in den Inhaltsskripten von Firefox ist `globalThis` ein eigenes Objekt, das von `window` erbt. Dieser Unterschied macht oft keinen praktischen Unterschied für die Verfügbarkeit globaler APIs. Eine Ausnahme bildet der Fall, wenn der globale Gültigkeitsbereich eine Definition einer Standard-API enthält, die die Definition in `window` überschattet, wie etwa beim [`structuredClone` in Inhaltsskripten](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts#structuredclone).

- In Chrome wird dieses Verhalten durch eine [isolierte Welt](https://chromium.googlesource.com/chromium/src/+/master/third_party/blink/renderer/bindings/core/v8/V8BindingDesign.md#world) durchgesetzt, die einen grundsätzlich anderen Ansatz verwendet.

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

Das gleiche gilt umgekehrt; Seitenskripte können keine JavaScript-Eigenschaften sehen, die von Inhaltsskripten hinzugefügt wurden.

Das bedeutet, dass Inhaltsskripte sich darauf verlassen können, dass sich DOM-Eigenschaften vorhersehbar verhalten, ohne sich um eine Überschneidung ihrer Variablen mit Variablen aus dem Seitenskript sorgen zu müssen.

Eine praktische Konsequenz dieses Verhaltens ist, dass ein Inhaltsskript keinen Zugriff auf JavaScript-Bibliotheken hat, die von der Seite geladen wurden. Wenn die Seite zum Beispiel jQuery enthält, kann das Inhaltsskript es nicht sehen.

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
> Firefox stellt [cloneInto()](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/cloneInto) und [exportFunction()](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/exportFunction) bereit, um Inhaltsskripten den Zugriff auf JavaScript-Objekte zu ermöglichen, die von Seitenskripten erstellt wurden, und um ihren JavaScript-Objekte Seitenskripten zugänglich zu machen.
>
> Weitere Details finden Sie unter [Objekte mit Seitenskripten teilen](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts).

### WebExtension APIs

Zusätzlich zu den standardmäßigen DOM-APIs können Inhaltsskripte folgende WebExtension APIs verwenden:

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

Inhaltsskripte können Anfragen mit den normalen [`window.XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) und [`window.fetch()`](/de/docs/Web/API/Fetch_API) APIs machen.

> [!NOTE]
> In Firefox bei Manifest V2 werden Anfragen im Kontext einer Erweiterung ausgeführt, sodass Sie eine absolute URL bereitstellen müssen, um auf Seiteninhalte zuzugreifen.
>
> In Chrome und Firefox bei Manifest V3 erfolgen diese Anfragen im Kontext der Seite und werden daher an eine relative URL gesendet. Zum Beispiel wird `/api` an `https://«aktuelle Seiten-URL»/api` gesendet.

Inhaltsskripte haben dieselben bereichsübergreifenden Rechte wie der Rest der Erweiterung: Wenn die Erweiterung beispielsweise bereichsübergreifenden Zugriff für eine Domain über den [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) Schlüssel in `manifest.json` angefordert hat, erhalten auch ihre Inhaltsskripte Zugriff auf diese Domain.

> [!NOTE]
> Bei der Verwendung von Manifest V3 können Inhaltsskripte bereichsübergreifende Anfragen stellen, wenn der Zielserver sich über [CORS](/de/docs/Web/HTTP/Guides/CORS) dafür entscheidet; Host-Berechtigungen funktionieren jedoch nicht in Inhaltsskripten, aber sie funktionieren weiterhin auf regulären Erweiterungsseiten.

Dies wird durch die Bereitstellung privilegierterer XHR- und Fetch-Instanzen im Inhaltsskript erreicht, was den Nebeneffekt hat, dass die [`Origin`](/de/docs/Web/HTTP/Reference/Headers/Origin) und [`Referer`](/de/docs/Web/HTTP/Reference/Headers/Referer) Header nicht gesetzt werden, wie es bei einer Anfrage direkt von der Seite der Fall wäre; dies ist oft vorzuziehen, um zu verhindern, dass die Anfrage ihre bereichsübergreifende Natur offenbart.

> [!NOTE]
> In Firefox bei Manifest V2 können Erweiterungen, die Anfragen tätigen müssen, die sich so verhalten, als wären sie von dem eigentlichen Inhalt geschickt worden, `content.XMLHttpRequest` und `content.fetch()` verwenden.
>
> Für plattformübergreifende Erweiterungen muss die Existenz dieser Methoden durch Feature-Erkennung überprüft werden.
>
> Dies ist im Manifest V3 nicht möglich, da `content.XMLHttpRequest` und `content.fetch()` nicht verfügbar sind.

> [!NOTE]
> In Chrome, beginnend mit Version 73, und Firefox, beginnend mit Version 101 bei der Verwendung von Manifest V3, unterliegen Inhaltsskripte derselben [CORS](/de/docs/Web/HTTP/Guides/CORS) Richtlinie wie die Seite, auf der sie ausgeführt werden. Nur Back-End-Skripte haben erhöhte bereichsübergreifende Privilegien. Siehe [Änderungen bei bereichsübergreifenden Anfragen in Chrome-Extensions-Inhaltsskripten](https://www.chromium.org/Home/chromium-security/extension-content-script-fetches/).

## Kommunikation mit Hintergrundskripten

Obwohl Inhaltsskripte die meisten WebExtension-APIs nicht direkt verwenden können, können sie über die Nachrichten-APIs mit den Hintergrundskripten der Erweiterung kommunizieren und daher indirekt auf alle die APIs zugreifen, auf die auch die Hintergrundskripte zugreifen können.

Es gibt zwei grundlegende Muster zur Kommunikation zwischen den Hintergrundskripten und den Inhaltsskripten:

- Sie können **Einmal-Nachrichten** senden (mit optionaler Antwort).
- Sie können eine **längerfristige Verbindung zwischen beiden Seiten** einrichten und diese Verbindung nutzen, um Nachrichten auszutauschen.

### Einmal-Nachrichten

Um Einmal-Nachrichten zu senden, mit optionaler Antwort, können Sie die folgenden APIs nutzen:

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

Zum Beispiel hier ein Inhaltsskript, das auf Klickereignisse in der Webseite hört.

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

Das Hintergrundskript hört auf diese Nachrichten und zeigt eine Benachrichtigung mit der [`notifications`](/de/docs/Mozilla/Add-ons/WebExtensions/API/notifications) API an:

```js
// background-script.js

browser.runtime.onMessage.addListener(notify);

function notify(message) {
  browser.notifications.create({
    type: "basic",
    iconUrl: browser.runtime.getURL("link.png"),
    title: "You clicked a link!",
    message: message.url,
  });
}
```

(Dieser Beispielcode wurde leicht aus dem [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) Beispiel auf GitHub adaptiert.)

### Verbindungsbasierte Nachrichtenübermittlung

Das Senden von Einmal-Nachrichten kann umständlich werden, wenn Sie viele Nachrichten zwischen einem Hintergrundskript und einem Inhaltsskript austauschen. Ein alternatives Muster ist daher, eine längerfristige Verbindung zwischen den beiden Kontexten herzustellen und diese Verbindung zu verwenden, um Nachrichten auszutauschen.

Beide Seiten haben ein [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port) Objekt, das sie zum Nachrichtenaustausch verwenden können.

Um die Verbindung zu erstellen:

- Eine Seite wartet auf Verbindungen, indem sie [`runtime.onConnect`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect) verwendet
- Die andere Seite ruft:
  - [`tabs.connect()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/connect) (bei der Verbindung zu einem Inhaltsskript)
  - [`runtime.connect()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/connect) (bei der Verbindung zu einem Hintergrundskript)

Dies gibt ein [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port) Objekt zurück.

- Der [`runtime.onConnect`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect) Listener erhält sein eigenes [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port) Objekt übergeben.

Sobald jede Seite einen Port hat, können die beiden Seiten:

- Nachrichten mit `runtime.Port.postMessage()` senden
- Nachrichten mit `runtime.Port.onMessage()` empfangen

Zum Beispiel verbindet sich das folgende Inhaltsskript, sobald es geladen ist:

- Mit dem Hintergrundskript
- Speichert den `Port` in einer Variable `myPort`
- Hört auf Nachrichten auf `myPort` (und protokolliert sie)
- Verwendet `myPort`, um Nachrichten an das Hintergrundskript zu senden, wenn der Benutzer auf das Dokument klickt

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

- Hört auf Verbindungsversuche vom Inhaltsskript
- Beim Empfang eines Verbindungsversuchs:
  - Speichert den Port in einer Variablen namens `portFromCS`
  - Sendet dem Inhaltsskript eine Nachricht über den Port
  - Beginnt, auf Nachrichten zu hören, die über den Port empfangen werden, und protokolliert sie

- Sendet Nachrichten an das Inhaltsskript, indem `portFromCS` verwendet wird, wenn der Benutzer auf die Browseraktion der Erweiterung klickt

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

Wenn Sie mehrere Inhaltsskripte gleichzeitig kommunizieren lassen möchten, sollten Sie Verbindungen zu ihnen in einem Array speichern.

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

### Auswahl zwischen Einmal-Nachrichten und verbindungsbasierter Nachrichtenübermittlung

Die Wahl zwischen Einmal- und verbindungsbasierter Nachrichtenübermittlung hängt davon ab, wie Ihre Erweiterung voraussichtlich Nachrichtenübermittlung nutzen wird.

Die empfohlenen besten Praktiken sind:

- **Verwenden Sie Einmal-Nachrichten wenn…**
  - Nur eine Antwort auf eine Nachricht erwartet wird.
  - Eine kleine Anzahl von Skripten lauscht, um Nachrichten zu empfangen ({{WebExtAPIRef("runtime.onMessage")}} Aufrufe).
- **Verwenden Sie verbindungsbasierte Nachrichtenübermittlung wenn…**
  - Skripte sich in Sitzungen engagieren, in denen mehrere Nachrichten ausgetauscht werden.
  - Die Erweiterung über den Fortschritt einer Aufgabe informiert werden oder wissen muss, ob eine Aufgabe unterbrochen wird oder eine Aufgabe abbrechen möchte, die über die Nachrichtenübermittlung gestartet wurde.

## Kommunikation mit der Webseite

Standardmäßig erhalten Inhaltsskripte keinen Zugriff auf die von Seitenskripten erstellten Objekte. Sie können jedoch mit Seitenskripten mittels der DOM-APIs [`window.postMessage`](/de/docs/Web/API/Window/postMessage) und [`window.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) kommunizieren.

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

Für ein vollständig funktionierendes Beispiel dafür, [besuchen Sie die Demoseite auf GitHub](https://mdn.github.io/webextensions-examples/content-script-page-script-messaging.html) und folgen Sie den Anweisungen.

> [!WARNING]
> Seien Sie sehr vorsichtig, wenn Sie auf diese Weise mit unzuverlässigem Webinhalt interagieren! Erweiterungen sind privilegierter Code, der mächtige Fähigkeiten haben kann, und feindliche Webseiten können sie leicht dazu verleiten, auf diese Fähigkeiten zuzugreifen.
>
> Um ein triviales Beispiel zu geben, nehmen wir an, der Code des Inhaltsskripts, das die Nachricht empfängt, tut so etwas:
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
> Nun kann das Seitenskript ohne Weiteres jeden beliebigen Code mit allen Privilegien des Inhaltsskripts ausführen.

## Verwenden von `eval()` in Inhaltsskripten

> [!NOTE]
> `eval()` ist nicht verfügbar in Manifest V3.

- In Chrome
  - : {{jsxref("Global_Objects/eval", "eval")}} führt immer Code im Kontext des **Inhaltsskripts** aus und nicht im Kontext der Seite.
- In Firefox
  - : Wenn Sie `eval()` aufrufen, wird Code im Kontext des **Inhaltsskripts** ausgeführt.

    Wenn Sie `window.eval()` aufrufen, wird Code im Kontext der **Seite** ausgeführt.

Betrachten Sie zum Beispiel ein Inhaltsskript wie dieses:

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

Das Gleiche gilt für [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), [`setInterval()`](/de/docs/Web/API/Window/setInterval) und [`Function()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function).

> [!WARNING]
> Seien Sie sehr vorsichtig, wenn Sie Code im Kontext der Seite ausführen!
>
> Die Umgebung der Seite wird von potenziell bösartigen Webseiten kontrolliert, die Objekte, mit denen Sie interagieren, redefinieren können, um sich unerwartet zu verhalten:
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
> // content-script.js ruft die redefinierte Version auf
>
> window.eval("console.log(false)");
> ```
