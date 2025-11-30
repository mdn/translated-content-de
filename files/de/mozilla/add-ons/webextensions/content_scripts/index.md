---
title: Inhaltsskripte
slug: Mozilla/Add-ons/WebExtensions/Content_scripts
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

Ein Inhaltsskript ist ein Teil Ihrer Erweiterung, der im Kontext einer Webseite läuft. Es kann Seiteninhalte lesen und ändern, indem es die Standard-[Web-APIs](/de/docs/Web/API) verwendet. Das Verhalten von Inhaltsskripten ist ähnlich wie das von Skripten, die Teil einer Website sind, wie z. B. solche, die mit dem {{HTMLElement("script")}}-Element geladen werden. Inhaltsskripte können jedoch nur auf Seiteninhalte zugreifen, wenn [Berechtigungen für den Ursprung der Webseite erteilt wurden](#berechtigungen).

Inhaltsskripte können auf [einen kleinen Teil der WebExtension-APIs](#webextension-apis) zugreifen, aber sie können [mit Hintergrundskripten kommunizieren](#kommunikation_mit_hintergrundskripten) und dadurch indirekt auf die WebExtension-APIs zugreifen. [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts) können alle [WebExtension-JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) verwenden, haben aber keinen direkten Zugriff auf die Inhalte von Webseiten.

> [!NOTE]
> Einige Web-APIs sind auf [sichere Kontexte](/de/docs/Web/Security/Defenses/Secure_Contexts) beschränkt, was auch für Inhaltsskripte gilt, die in diesen Kontexten ausgeführt werden. Eine Ausnahme ist [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents), die von Inhaltsskripten in unsicheren Kontexten in Firefox aufgerufen werden kann.

## Laden von Inhaltsskripten

Sie können ein Inhaltsskript in eine Webseite laden:

1. Zum Installationszeitpunkt, in Seiten, die URL-Mustern entsprechen.
   - Mit dem [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Schlüssel in Ihrer `manifest.json` können Sie den Browser anweisen, ein Inhaltsskript zu laden, wenn der Browser eine Seite lädt, deren URL [einem bestimmten Muster entspricht](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns).
2. Zur Laufzeit, in Seiten, die URL-Mustern entsprechen.
   - Mit {{WebExtAPIRef("scripting.registerContentScripts()")}} oder (nur in Manifest V2 in Firefox) {{WebExtAPIRef("contentScripts")}} können Sie den Browser anweisen, ein Inhaltsskript zu laden, wenn der Browser eine Seite lädt, deren URL [einem bestimmten Muster entspricht](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns). (Dies ist ähnlich wie Methode 1, _mit der Ausnahme_, dass Sie Inhaltsskripte zur Laufzeit hinzufügen und entfernen können.)
3. Zur Laufzeit, in spezifische Tabs.
   - Mit {{WebExtAPIRef("scripting.executeScript()")}} oder (nur in Manifest V2) {{WebExtAPIRef("tabs.executeScript()")}} können Sie ein Inhaltsskript in einen bestimmten Tab laden, wann immer Sie möchten. (Zum Beispiel als Reaktion auf das Anklicken einer [Browseraktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) durch den Benutzer.)

Es gibt nur einen globalen Gültigkeitsbereich _pro Frame, pro Erweiterung_. Das bedeutet, dass Variablen aus einem Inhaltsskript von allen anderen Inhaltsskripten, unabhängig davon, wie das Inhaltsskript geladen wurde, zugänglich sind.

Mit den Methoden (1) und (2) können Sie Skripte nur in Seiten laden, deren URLs mit einem [Muster übereinstimmen](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns).

Mit Methode (3) können Sie auch Skripte in Seiten laden, die mit Ihrer Erweiterung geliefert werden, aber Sie können keine Skripte in privilegierte Browserseiten (wie `about:debugging` oder `about:addons`) laden.

> [!NOTE]
> [Dynamische JS-Modulimporte](/de/docs/Web/JavaScript/Guide/Modules#dynamic_module_loading) funktionieren jetzt in Inhaltsskripten. Für weitere Details siehe [Firefox Bug 1536094](https://bugzil.la/1536094).
> Nur URLs mit dem _moz-extension_-Schema sind erlaubt, was Daten-URLs ausschließt ([Firefox Bug 1587336](https://bugzil.la/1587336)).

### Persistenz

Inhaltsskripte, die mit {{WebExtAPIRef("scripting.executeScript()")}} oder (nur in Manifest V2) {{WebExtAPIRef("tabs.executeScript()")}} geladen werden, werden auf Anfrage ausgeführt und bleiben nicht bestehen.

Inhaltsskripte, die im `manifest.json`-Schlüssel [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) definiert sind oder über die {{WebExtAPIRef("scripting.registerContentScripts()")}} oder (nur in Manifest V2 in Firefox) {{WebExtAPIRef("contentScripts")}} API, bleiben standardmäßig bestehen. Sie bleiben über Browserneustarts und Updates sowie Erweiterungsneustarts hinweg registriert.

Die API {{WebExtAPIRef("scripting.registerContentScripts()")}} ermöglicht es jedoch, das Skript als nicht-persistent zu definieren. Dies kann nützlich sein, wenn Ihre Erweiterung (im Auftrag eines Benutzers) ein Inhaltsskript nur in der aktuellen Browsersitzung aktivieren möchte.

## Berechtigungen, Beschränkungen und Einschränkungen

### Berechtigungen

Registrierte Inhaltsskripte werden nur ausgeführt, wenn der Erweiterung [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die Domain erteilt wurden.

Um Skripte programmgesteuert zu injizieren, benötigt die Erweiterung entweder die [`activeTab`-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions). Die `scripting`-Berechtigung ist erforderlich, um Methoden der {{WebExtAPIRef("scripting")}} API zu verwenden.

Ab Manifest V3 werden Host-Berechtigungen nicht automatisch zur Installationszeit erteilt. Benutzer können sich nach der Installation der Erweiterung ein- oder aus diesen Berechtigungen entscheiden.

### Einschränkungen auf bestimmten Domains

Sowohl [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) als auch die [`activeTab`-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) haben Ausnahmen für einige Domains. Inhaltsskripte werden daran gehindert, auf diesen Domains ausgeführt zu werden, um beispielsweise den Benutzer vor einer Erweiterung zu schützen, die Privilegien über spezielle Seiten eskaliert.

In Firefox schließen diese Domains Folgendes ein:

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

Andere Browser haben ähnliche Beschränkungen für die Websites, auf denen Erweiterungen installiert werden können. Zum Beispiel ist der Zugriff auf chrome.google.com in Chrome eingeschränkt.

> [!NOTE]
> Da diese Einschränkungen addons.mozilla.org umfassen, könnten Benutzer, die versuchen, Ihre Erweiterung direkt nach der Installation zu nutzen, feststellen, dass sie nicht funktioniert. Um dies zu vermeiden, sollten Sie eine geeignete Warnung oder eine [Onboarding-Seite](https://extensionworkshop.com/documentation/develop/onboard-upboard-offboard-users/) hinzufügen, um Benutzer von `addons.mozilla.org` wegzuführen.

Der Satz von Domains kann durch Unternehmensrichtlinien weiter eingeschränkt werden: Firefox erkennt die `restricted_domains`-Richtlinie an, wie im [ExtensionSettings in mozilla/policy-templates](https://github.com/mozilla/policy-templates/blob/master/README.md#extensionsettings) dokumentiert. Chromes `runtime_blocked_hosts`-Richtlinie ist dokumentiert bei [Configure ExtensionSettings policy](https://support.google.com/chrome/a/answer/9867568).

### Einschränkungen

Ganze Tabs oder Frames können unter Verwendung von [`data:`-URI](/de/docs/Web/URI/Reference/Schemes/data), [`Blob`](/de/docs/Web/API/URL/createObjectURL_static)-Objekten und ähnlichen Techniken geladen werden. Die Unterstützung der Injektion von Inhaltsskripten in solche speziellen Dokumente variiert zwischen den Browsern; siehe den Firefox [Bug #1411641 Kommentar 41](https://bugzil.la/1411641#c41) für einige Details.

## Inhaltsskriptumgebung

### DOM-Zugriff

Inhaltsskripte können auf das DOM der Seite zugreifen und dieses ändern, genau wie normale Seiten-Skripte das können. Sie können auch alle Änderungen sehen, die von Seitenskripten am DOM vorgenommen wurden.

Inhaltsskripte erhalten jedoch eine "saubere" Ansicht des DOMs. Das bedeutet:

- Inhaltsskripte können keine JavaScript-Variablen sehen, die von Seitenskripten definiert wurden.
- Wenn ein Seitenskript eine eingebaute DOM-Eigenschaft neu definiert, sieht das Inhaltsskript die ursprüngliche Version der Eigenschaft, nicht die neu definierte Version.

Wie unter ["Inhaltsskriptumgebung" bei Chrome-Inkompatibilitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#content_script_environment) beschrieben, unterscheidet sich das Verhalten zwischen den Browsern:

- In Firefox wird dieses Verhalten als [Xray Vision](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts#xray_vision_in_firefox) bezeichnet. Inhaltsskripte können JavaScript-Objekte aus ihrem eigenen globalen Gültigkeitsbereich oder Xray-umwickelte Versionen von der Webseite erhalten.

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

Das Skript `page-script.js` tut dies:

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

Dasselbe gilt umgekehrt; Seitenskripte können keine JavaScript-Eigenschaften sehen, die von Inhaltsskripten hinzugefügt wurden.

Das bedeutet, dass Inhaltsskripte sich darauf verlassen können, dass DOM-Eigenschaften vorhersagbar funktionieren, ohne sich Sorgen machen zu müssen, dass ihre Variablen mit Variablen aus dem Seitenskript kollidieren.

Eine praktische Konsequenz dieses Verhaltens ist, dass ein Inhaltsskript nicht auf JavaScript-Bibliotheken zugreifen kann, die von der Seite geladen wurden. Wenn die Seite zum Beispiel jQuery einbindet, kann das Inhaltsskript es nicht sehen.

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
> Firefox stellt [cloneInto()](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/cloneInto) und [exportFunction()](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/exportFunction) bereit, um Inhaltsskripten den Zugriff auf JavaScript-Objekte zu ermöglichen, die von Seitenskripten erstellt wurden, und um ihre JavaScript-Objekte Seitenskripten zur Verfügung zu stellen.
>
> Weitere Informationen finden Sie unter [Teilen von Objekten mit Seitenskripten](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts).

### WebExtension-APIs

Zusätzlich zu den Standard-DOM-APIs können Inhaltsskripte die folgenden WebExtension-APIs verwenden:

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

Inhaltsskripte können Anfragen mit den normalen [`window.XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) und [`window.fetch()`](/de/docs/Web/API/Fetch_API) APIs stellen.

> [!NOTE]
> In Firefox in Manifest V2 erfolgen die Anfragen von Inhaltsskripten (zum Beispiel unter Verwendung von [`fetch()`](/de/docs/Web/API/Fetch_API/Using_Fetch)) im Kontext einer Erweiterung, daher muss eine absolute URL angegeben werden, um auf Seiteninhalte zu verweisen.
>
> In Chrome und Firefox in Manifest V3 erfolgen diese Anfragen im Kontext der Seite, daher werden sie mit einer relativen URL gestellt. Zum Beispiel wird `/api` an `https://«aktuelle Seiten-URL»/api` gesendet.

Inhaltsskripte erhalten dieselben bereichsübergreifenden Rechte wie der Rest der Erweiterung: Wenn die Erweiterung eine bereichsübergreifende Zugriffsanforderung für eine Domain über den [`permissions`-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in `manifest.json` gestellt hat, dann erhalten ihre Inhaltsskripte ebenfalls Zugang zu dieser Domain.

> [!NOTE]
> Bei Verwendung von Manifest V3 können Inhaltsskripte bereichsübergreifende Anfragen stellen, wenn der Zielserver dies mit [CORS](/de/docs/Web/HTTP/Guides/CORS) autorisiert; Host-Berechtigungen funktionieren jedoch nicht in Inhaltsskripten, sind aber weiterhin auf regulären Erweiterungsseiten wirksam.

Dies wird ermöglicht, indem privilegiertere XHR- und Fetch-Instanzen im Inhaltsskript bereitgestellt werden, was zur Folge hat, dass die Header [`Origin`](/de/docs/Web/HTTP/Reference/Headers/Origin) und [`Referer`](/de/docs/Web/HTTP/Reference/Headers/Referer) nicht gesetzt werden, wie es bei einer Anfrage von der Seite selbst der Fall wäre; dies ist oft wünschenswert, um zu verhindern, dass die Anfrage ihre bereichsübergreifende Natur offenbart.

> [!NOTE]
> In Firefox in Manifest V2 können Erweiterungen, die Anfragen stellen müssen, die so behandelt werden sollen, als ob sie vom Inhalt selbst gesendet wurden, stattdessen `content.XMLHttpRequest` und `content.fetch()` verwenden.
>
> Für browserübergreifende Erweiterungen muss das Vorhandensein dieser Methoden durch eine Feature-Erkennung ermittelt werden.
>
> In Manifest V3 ist dies nicht möglich, da `content.XMLHttpRequest` und `content.fetch()` nicht verfügbar sind.

> [!NOTE]
> In Chrome ab Version 73 und Firefox ab Version 101 bei Verwendung von Manifest V3 unterliegen Inhaltsskripte denselben [CORS](/de/docs/Web/HTTP/Guides/CORS)-Richtlinien wie die Seite, in der sie ausgeführt werden. Nur Backend-Skripte haben erhöhte bereichsübergreifende Privilegien. Siehe [Änderungen bei bereichsübergreifenden Anfragen in Chrome-Extension-Inhaltsskripten](https://www.chromium.org/Home/chromium-security/extension-content-script-fetches/).

## Kommunikation mit Hintergrundskripten

Obwohl Inhaltsskripte die meisten WebExtension-APIs nicht direkt verwenden können, können sie mit den Hintergrundskripten der Erweiterung über die Messaging-APIs kommunizieren und somit indirekt auf alle APIs zugreifen, die auch den Hintergrundskripten zur Verfügung stehen.

Es gibt zwei grundlegende Muster zur Kommunikation zwischen Hintergrundskripten und Inhaltsskripten:

- Sie können **Einzelnachrichten** senden (mit optionaler Antwort).
- Sie können eine **längerlebige Verbindung zwischen den beiden Seiten** einrichten und diese Verbindung zum Austausch von Nachrichten nutzen.

### Einzelnachrichten

Um Einzelnachrichten zu senden, mit einer optionalen Antwort, können Sie die folgenden APIs verwenden:

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

Zum Beispiel ein Inhaltsskript, das auf Klick-Ereignisse in der Webseite lauscht.

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

Das Hintergrundskript lauscht auf diese Nachrichten und zeigt eine Benachrichtigung unter Verwendung der [`notifications`](/de/docs/Mozilla/Add-ons/WebExtensions/API/notifications)-API an:

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

(Dieser Beispielcode ist leicht angepasst von dem [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) Beispiel auf GitHub.)

### Verbindungsbasierte Nachrichtenübermittlung

Das Senden von Einzelnachrichten kann mühsam werden, wenn viele Nachrichten zwischen einem Hintergrundskript und einem Inhaltsskript ausgetauscht werden. Ein alternatives Muster ist es daher, eine längerlebige Verbindung zwischen den beiden Kontexten herzustellen und diese Verbindung für den Nachrichtenaustausch zu nutzen.

Beide Seiten haben ein [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port)-Objekt, das sie zum Austausch von Nachrichten verwenden können.

Um die Verbindung herzustellen:

- Eine Seite lauscht nach Verbindungen mit [`runtime.onConnect`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect)
- Die andere Seite ruft auf:
  - [`tabs.connect()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/connect) (wenn eine Verbindung zu einem Inhaltsskript hergestellt wird)
  - [`runtime.connect()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/connect) (wenn eine Verbindung zu einem Hintergrundskript hergestellt wird)

Dies gibt ein [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port)-Objekt zurück.

- Der [`runtime.onConnect`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect)-Listener erhält sein eigenes [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port)-Objekt übergeben.

Sobald jede Seite einen Port hat, können die beiden Seiten:

- Nachrichten mit `runtime.Port.postMessage()` senden
- Nachrichten mit `runtime.Port.onMessage()` empfangen

Zum Beispiel verbindet sich das folgende Inhaltsskript, sobald es geladen ist, mit dem Hintergrundskript:

- Verbindet sich zum Hintergrundskript
- Speichert den `Port` in einer Variablen `myPort`
- Lauscht auf Nachrichten auf `myPort` (und protokolliert sie)
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

- Lauscht auf Verbindungsversuche des Inhaltsskriptes
- Beim Empfang eines Verbindungsversuchs:
  - Speichert den Port in einer Variablen namens `portFromCS`
  - Sendet dem Inhaltsskript eine Nachricht mit dem Port
  - Beginnt Nachrichten, die auf dem Port empfangen werden, zu lauschen und sie zu protokollieren

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

Wenn Sie mehrere Inhaltsskripte haben, die gleichzeitig kommunizieren, möchten Sie möglicherweise Verbindungen zu ihnen in einem Array speichern.

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

### Wahl zwischen Einzel- und verbindungsbasierter Nachrichtenübermittlung

Die Wahl zwischen Einzel- und verbindungsbasierter Nachrichtenübermittlung hängt davon ab, wie Ihre Erweiterung die Nachrichtenübermittlung nutzen möchte.

Die empfohlenen Best Practices sind:

- **Verwenden Sie Einzelnachrichten, wenn…**
  - Nur eine Antwort auf eine Nachricht erwartet wird.
  - Eine kleine Anzahl von Skripten hören soll, um Nachrichten zu empfangen ({{WebExtAPIRef("runtime.onMessage")}}-Aufrufe).
- **Verwenden Sie verbindungsbasierte Nachrichtenübermittlung, wenn…**
  - Skripte in Sitzungen verwickelt sind, bei denen mehrere Nachrichten ausgetauscht werden.
  - Die Erweiterung Informationen über den Fortschritt einer Aufgabe oder über eine unterbrochene Aufgabe benötigt oder eine Aufgabe unterbrechen möchte, die durch Nachrichtenübermittlung gestartet wurde.

## Kommunikation mit der Webseite

Standardmäßig erhalten Inhaltsskripte keinen Zugriff auf die von Seitenskripten erstellten Objekte. Sie können jedoch mit Seitenskripten über die DOM-APIs [`window.postMessage`](/de/docs/Web/API/Window/postMessage) und [`window.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) kommunizieren.

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

Um ein vollständiges Arbeitsbeispiel zu sehen, [besuchen Sie die Demo-Seite auf GitHub](https://mdn.github.io/webextensions-examples/content-script-page-script-messaging.html) und befolgen Sie die Anweisungen.

> [!WARNING]
> Seien Sie sehr vorsichtig, wenn Sie auf diese Weise mit untrusted Webinhalten interagieren! Erweiterungen sind privilegierter Code, der mächtige Fähigkeiten haben kann und bösartige Webseiten können sie leicht dazu verleiten, diese Fähigkeiten zu nutzen.
>
> Um ein triviales Beispiel zu geben, nehmen Sie an, dass der Inhaltsskript-Code, der die Nachricht empfängt, etwas wie folgt tut:
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
> Nun kann das Seitenskript jeden Code mit allen Privilegien des Inhaltsskripts ausführen.

## Verwendung von `eval()` in Inhaltsskripten

> [!NOTE]
> `eval()` ist in Manifest V3 nicht verfügbar.

- In Chrome
  - : {{jsxref("Global_Objects/eval", "eval")}} führt Code immer im Kontext des **Inhaltsskriptes** aus, nicht im Kontext der Seite.
- In Firefox
  - : Wenn Sie `eval()` aufrufen, wird der Code im Kontext des **Inhaltsskriptes** ausgeführt.

    Wenn Sie `window.eval()` aufrufen, wird der Code im Kontext der **Seite** ausgeführt.

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

Dieser Code erstellt einfach einige Variablen `x` und `y` mit `window.eval()` und `eval()`, protokolliert ihre Werte und sendet dann Nachrichten an die Seite.

Beim Empfang der Nachricht protokolliert das Seitenskript dieselben Variablen:

```js
window.addEventListener("message", (event) => {
  if (event.source === window && event.data && event.data.message === "check") {
    console.log(`In page script, window.x: ${window.x}`);
    console.log(`In page script, window.y: ${window.y}`);
  }
});
```

In Chrome ergibt dies folgende Ausgabe:

```plain
In content script, window.x: 1
In content script, window.y: 2
In page script, window.x: undefined
In page script, window.y: undefined
```

In Firefox ergibt dies folgende Ausgabe:

```plain
In content script, window.x: undefined
In content script, window.y: 2
In page script, window.x: 1
In page script, window.y: undefined
```

Dasselbe gilt für [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), [`setInterval()`](/de/docs/Web/API/Window/setInterval) und [`Function()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function).

> [!WARNING]
> Seien Sie sehr vorsichtig, wenn Sie Code im Kontext der Seite ausführen!
>
> Die Umgebung der Seite wird von potenziell bösartigen Webseiten kontrolliert, die Objekte, mit denen Sie interagieren, redefinieren können, um sich unvorhersehbar zu verhalten:
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
