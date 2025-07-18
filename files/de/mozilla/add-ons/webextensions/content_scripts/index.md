---
title: Inhaltsskripte
slug: Mozilla/Add-ons/WebExtensions/Content_scripts
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ein Inhaltsskript ist ein Teil Ihrer Erweiterung, der im Kontext einer Webseite ausgeführt wird. Es kann Seiteninhalte mithilfe der standardisierten [Web-APIs](/de/docs/Web/API) lesen und ändern. Das Verhalten eines Inhaltsskripts ist ähnlich wie das von Skripten, die Teil einer Webseite sind, wie z. B. solche, die mit dem {{HTMLElement("script")}} Element geladen werden. Allerdings können Inhaltsskripte nur auf Seiteninhalte zugreifen, wenn [Host-Berechtigungen für den Ursprung der Webseite gewährt wurden](#berechtigungen).

Inhaltsskripte können auf [einen kleinen Teil der WebExtension-APIs zugreifen](#webextension-apis), aber sie können [über ein Nachrichtensystem mit Hintergrundskripten kommunizieren](#kommunikation_mit_hintergrundskripten) und damit indirekt auf die WebExtension-APIs zugreifen. [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts) können auf alle [WebExtension-JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) zugreifen, jedoch nicht direkt auf den Inhalt von Webseiten.

> [!NOTE]
> Einige Web-APIs sind auf [sichere Kontexte](/de/docs/Web/Security/Secure_Contexts) beschränkt, was auch für Inhaltsskripte gilt, die in diesen Kontexten ausgeführt werden. Eine Ausnahme ist [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents), die in Inhaltsskripten in unsicheren Kontexten in Firefox aufgerufen werden kann.

## Laden von Inhaltsskripten

Sie können ein Inhaltsskript in eine Webseite laden:

1. Zur Installationszeit, in Seiten, die URL-Mustern entsprechen.
   - Mit dem Schlüssel [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) in Ihrer `manifest.json` können Sie den Browser anweisen, ein Inhaltsskript zu laden, wann immer der Browser eine Seite lädt, deren URL [einem gegebenen Muster entspricht](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns).
2. Zur Laufzeit, in Seiten, die URL-Mustern entsprechen.
   - Mit {{WebExtAPIRef("scripting.registerContentScripts()")}} oder (nur in Manifest V2 in Firefox) {{WebExtAPIRef("contentScripts")}} können Sie den Browser anweisen, ein Inhaltsskript zu laden, wann immer der Browser eine Seite lädt, deren URL [einem gegebenen Muster entspricht](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns). (Dies ist ähnlich zu Methode 1, _außer_ dass Sie Inhaltsskripte zur Laufzeit hinzufügen und entfernen können.)
3. Zur Laufzeit, in spezifische Tabs.
   - Mit {{WebExtAPIRef("scripting.executeScript()")}} oder (nur in Manifest V2) {{WebExtAPIRef("tabs.executeScript()")}} können Sie ein Inhaltsskript in einen bestimmten Tab laden, wann immer Sie möchten. (Zum Beispiel als Reaktion auf das Klicken des Nutzers auf eine [Browser-Aktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button).)

Es gibt nur einen globalen Bereich _pro Frame, pro Erweiterung_. Das bedeutet, dass Variablen aus einem Inhaltsskript von anderen Inhaltsskripten zugänglich sind, unabhängig davon, wie das Inhaltsskript geladen wurde.

Mit den Methoden (1) und (2) können Sie Skripte nur in Seiten laden, deren URLs mit einem [Match-Muster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) darstellbar sind.

Mit Methode (3) können Sie Skripte auch in Seiten laden, die mit Ihrer Erweiterung gepackt sind, aber Sie können keine Skripte in privilegierte Browser-Seiten laden (wie z. B. `about:debugging` oder `about:addons`).

> [!NOTE]
> [Dynamische JS-Modulimporte](/de/docs/Web/JavaScript/Guide/Modules#dynamic_module_loading) funktionieren nun in Inhaltsskripten. Für weitere Details siehe [Firefox Bug 1536094](https://bugzil.la/1536094).
> Nur URLs mit dem _moz-extension_ Schema sind erlaubt, was Daten-URLs ausschließt ([Firefox Bug 1587336](https://bugzil.la/1587336)).

### Persistenz

Inhaltsskripte, die mit {{WebExtAPIRef("scripting.executeScript()")}} oder (nur in Manifest V2) {{WebExtAPIRef("tabs.executeScript()")}} geladen werden, laufen auf Anfrage und bleiben nicht erhalten.

Inhaltsskripte, die im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) Schlüssel der Manifestdatei definiert oder mit der {{WebExtAPIRef("scripting.registerContentScripts()")}} oder (nur in Manifest V2 in Firefox) {{WebExtAPIRef("contentScripts")}} API definiert sind, bleiben standardmäßig erhalten. Sie bleiben über Browser-Neustarts und Updates sowie Erweiterungs-Neustarts hinweg registriert.

Die {{WebExtAPIRef("scripting.registerContentScripts()")}} API bietet jedoch die Möglichkeit, das Skript als nicht persistent zu definieren. Dies kann nützlich sein, wenn Ihre Erweiterung beispielsweise (im Auftrag eines Benutzers) ein Inhaltsskript nur in der aktuellen Browsersitzung aktivieren möchte.

## Berechtigungen, Einschränkungen und Beschränkungen

### Berechtigungen

Registrierte Inhaltsskripte werden nur ausgeführt, wenn der Erweiterung [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die Domain gewährt wurden.

Um Skripte programmatisch zu injizieren, benötigt die Erweiterung entweder die [Berechtigung `activeTab`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions). Die `scripting`-Berechtigung ist erforderlich, um Methoden der {{WebExtAPIRef("scripting")}} API zu verwenden.

Ab Manifest V3 werden Host-Berechtigungen nicht automatisch zur Installationszeit gewährt. Benutzer können sich nach der Installation der Erweiterung für oder gegen die Host-Berechtigungen entscheiden.

### Eingeschränkte Domains

Sowohl die [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) als auch die [`activeTab`-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) haben Ausnahmen für einige Domains. Inhaltsskripte sind daran gehindert, auf diesen Domains auszuführen, um beispielsweise den Nutzer vor einer Erweiterung zu schützen, die über spezielle Seiten Privilegien eskalieren könnte.

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

Andere Browser haben ähnliche Beschränkungen für die Websites, von denen Erweiterungen installiert werden können. Zum Beispiel ist der Zugriff auf chrome.google.com in Chrome eingeschränkt.

> [!NOTE]
> Da diese Einschränkungen addons.mozilla.org einschließen, könnte es sein, dass Benutzer, die versuchen, Ihre Erweiterung unmittelbar nach der Installation zu verwenden, feststellen, dass sie nicht funktioniert. Um dies zu vermeiden, sollten Sie einen angemessenen Hinweis oder eine [Onboarding-Seite](https://extensionworkshop.com/documentation/develop/onboard-upboard-offboard-users/) hinzufügen, um Nutzer von `addons.mozilla.org` wegzuleiten.

Der Satz von Domains kann durch Unternehmensrichtlinien weiter eingeschränkt werden: Firefox erkennt die `restricted_domains`-Richtlinie an, wie in [ExtensionSettings in mozilla/policy-templates](https://github.com/mozilla/policy-templates/blob/master/README.md#extensionsettings) dokumentiert. Chromes `runtime_blocked_hosts`-Richtlinie ist unter [Configure ExtensionSettings policy](https://support.google.com/chrome/a/answer/9867568) dokumentiert.

### Beschränkungen

Ganze Tabs oder Frames können mit [`data:` URI](/de/docs/Web/URI/Reference/Schemes/data), [`Blob`](/de/docs/Web/API/URL/createObjectURL_static)-Objekten und anderen ähnlichen Techniken geladen werden. Die Unterstützung von Inhaltsskripten-Injektionen in solche speziellen Dokumente variiert zwischen den Browsern. Siehe den Firefox [Bug #1411641 Kommentar 41](https://bugzil.la/1411641#c41) für einige Details.

## Inhaltsskript-Umgebung

### DOM-Zugriff

Inhaltsskripte können auf das DOM der Seite zugreifen und es ändern, genau wie normale Seitenskripte. Sie können auch alle Änderungen sehen, die durch Seitenskripte am DOM vorgenommen wurden.

Allerdings erhalten Inhaltsskripte eine "saubere" Ansicht des DOMs. Dies bedeutet:

- Inhaltsskripte können keine von Seitenskripten definierten JavaScript-Variablen sehen.
- Wenn ein Seitenskript eine eingebautes DOM-Eigenschaft neu definiert, sieht das Inhaltsskript die ursprüngliche Version der Eigenschaft, nicht die neu definierte.

Wie unter ["Inhaltsskript-Umgebung" bei Chrome-Inkompatibilitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#content_script_environment) erwähnt, unterscheidet sich das Verhalten zwischen den Browsern:

- In Firefox wird dieses Verhalten als [Xray Vision](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts#xray_vision_in_firefox) bezeichnet.
  Inhaltsskripte können auf JavaScript-Objekte aus ihrem eigenen globalen Bereich oder auf Xray-umwickelte Versionen von der Webseite stoßen.

- In Chrome wird dieses Verhalten durch eine [isolierte Welt](https://chromium.googlesource.com/chromium/src/+/master/third_party/blink/renderer/bindings/core/v8/V8BindingDesign.md#world) durchgesetzt, die einen grundlegend anderen Ansatz verwendet.

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

Jetzt injiziert eine Erweiterung ein Inhaltsskript auf die Seite:

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

Umgekehrt gilt das Gleiche; Seitenskripte können keine von Inhaltsskripten hinzugefügten JavaScript-Eigenschaften sehen.

Das bedeutet, dass Inhaltsskripte sich darauf verlassen können, dass DOM-Eigenschaften sich vorhersehbar verhalten, ohne sich Sorgen machen zu müssen, dass ihre Variablen mit Variablen aus dem Seitenskript in Konflikt geraten.

Eine praktische Konsequenz dieses Verhaltens ist, dass ein Inhaltsskript keinen Zugriff auf JavaScript-Bibliotheken hat, die von der Seite geladen werden. Wenn die Seite zum Beispiel jQuery einschließt, kann das Inhaltsskript es nicht sehen.

Wenn ein Inhaltsskript eine JavaScript-Bibliothek nutzen muss, dann sollte die Bibliothek selbst als Inhaltsskript _neben_ dem Inhaltsskript, das es nutzen möchte, injiziert werden:

```json
"content_scripts": [
  {
    "matches": ["*://*.mozilla.org/*"],
    "js": ["jquery.js", "content-script.js"]
  }
]
```

> [!NOTE]
> Firefox stellt [cloneInto()](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/cloneInto) und [exportFunction()](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/exportFunction) bereit, um Inhaltsskripten den Zugriff auf JavaScript-Objekte zu ermöglichen, die von Seitenskripten erstellt wurden, und um ihre JavaScript-Objekte in Seitenskripten verfügbar zu machen.
>
> Weitere Informationen finden Sie unter [Teilen von Objekten mit Seitenskripten](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts).

### WebExtension-APIs

Zusätzlich zu den standardmäßigen DOM-APIs können Inhaltsskripte diese WebExtension-APIs verwenden:

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
> In Firefox in Manifest V2 erfolgen Anfragen von Inhaltsskripten (z. B. mit [`fetch()`](/de/docs/Web/API/Fetch_API/Using_Fetch)) im Kontext einer Erweiterung, daher müssen Sie eine absolute URL angeben, um Seiteninhalte zu referenzieren.
>
> In Chrome und Firefox in Manifest V3 erfolgen diese Anfragen im Kontext der Seite, daher werden sie an eine relative URL gestellt. Zum Beispiel wird `/api` an `https://«current page URL»/api` gesendet.

Inhaltsskripte erhalten dieselben bereichsübergreifenden Privilegien wie der Rest der Erweiterung. Wenn die Erweiterung also um bereichsübergreifenden Zugriff für eine Domain mit dem [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)-Schlüssel in `manifest.json` gebeten hat, dann erhalten ihre Inhaltsskripte ebenfalls Zugriff auf diese Domain.

> [!NOTE]
> Bei Verwendung von Manifest V3 können Inhaltsskripte bereichsübergreifende Anfragen durchführen, wenn der Zielserver dies mithilfe von [CORS](/de/docs/Web/HTTP/Guides/CORS) zulässt; Host-Berechtigungen funktionieren jedoch nicht in Inhaltsskripten, sind aber weiterhin in regulären Erweiterungsseiten wirksam.

Dies wird erreicht, indem privilegiertere XHR- und Fetch-Instanzen im Inhaltsskript bereitgestellt werden, was den Nebeneffekt hat, dass die [`Origin`](/de/docs/Web/HTTP/Reference/Headers/Origin)- und [`Referer`](/de/docs/Web/HTTP/Reference/Headers/Referer)-Header wie dies bei einer Anfrage von der Seite selbst der Fall wäre, nicht gesetzt werden. Dies ist oft vorzuziehen, um zu verhindern, dass die Anfrage ihre bereichsübergreifende Natur offenbart.

> [!NOTE]
> In Firefox in Manifest V2 können Erweiterungen, die Anfragen durchführen müssen, die wie von den Inhalten selbst gesendete Anfragen behandelt werden, `content.XMLHttpRequest` und `content.fetch()` verwenden.
>
> Bei Cross-Browser-Erweiterungen muss das Vorhandensein dieser Methoden durch Funktionsdetektion festgestellt werden.
>
> Dies ist in Manifest V3 nicht möglich, da `content.XMLHttpRequest` und `content.fetch()` nicht verfügbar sind.

> [!NOTE]
> In Chrome, ab Version 73, und Firefox, ab Version 101 in Manifest V3, unterliegen Inhaltsskripte der gleichen [CORS](/de/docs/Web/HTTP/Guides/CORS)-Politik wie die Seite, in der sie laufen. Nur Backendskripts haben erhöhte bereichsübergreifende Privilegien. Siehe [Änderungen bei bereichsübergreifenden Anfragen in Chrome Extension Content Scripts](https://www.chromium.org/Home/chromium-security/extension-content-script-fetches/).

## Kommunikation mit Hintergrundskripten

Obwohl Inhaltsskripte die meisten WebExtension-APIs nicht direkt verwenden können, können sie über die Nachrichten-APIs mit den Hintergrundskripten der Erweiterung kommunizieren und damit indirekt auf alle APIs zugreifen, die auch den Hintergrundskripten zur Verfügung stehen.

Es gibt zwei grundlegende Muster für die Kommunikation zwischen den Hintergrundskripten und Inhaltsskripten:

- Sie können **einmalige Nachrichten** senden (mit einer optionalen Antwort).
- Sie können eine **längerlebige Verbindung zwischen den beiden Seiten** einrichten und diese Verbindung verwenden, um Nachrichten auszutauschen.

### Einmalige Nachrichten

Um einmalige Nachrichten zu senden, mit einer optionalen Antwort, können Sie die folgenden APIs verwenden:

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

Beispielsweise hier ein Inhaltsskript, das auf Klick-Ereignisse in der Webseite hört.

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

Das Hintergrundskript hört auf diese Nachrichten und zeigt eine Benachrichtigung unter Verwendung der [`notifications`](/de/docs/Mozilla/Add-ons/WebExtensions/API/notifications)-API an:

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

(Dieses Beispielcode ist leicht modifiziert aus dem [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) Beispiel auf GitHub.)

### Verbindungsbasierte Nachrichtenübermittlung

Das Senden einmaliger Nachrichten kann umständlich werden, wenn Sie eine große Anzahl von Nachrichten zwischen einem Hintergrundskript und einem Inhaltsskript austauschen. Ein alternativer Ansatz ist daher, eine längerlebige Verbindung zwischen den beiden Kontexten herzustellen und diese Verbindung zu verwenden, um Nachrichten auszutauschen.

Beide Seiten haben ein [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port)-Objekt, das sie zum Austausch von Nachrichten verwenden können.

Um die Verbindung herzustellen:

- Eine Seite hört auf Verbindungsversuche über [`runtime.onConnect`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect)
- Die andere Seite ruft auf:
  - [`tabs.connect()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/connect) (wenn sie sich mit einem Inhaltsskript verbindet)
  - [`runtime.connect()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/connect) (wenn sie sich mit einem Hintergrundskript verbindet)

Dies gibt ein [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port)-Objekt zurück.

- Der [`runtime.onConnect`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect)-Listener erhält sein eigenes [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port)-Objekt.

Sobald jede Seite einen Port hat, können die beiden Seiten:

- Nachrichten mit `runtime.Port.postMessage()` senden
- Nachrichten mit `runtime.Port.onMessage()` empfangen

Zum Beispiel verbindet sich das folgende Inhaltsskript, sobald es geladen ist, mit dem Hintergrundskript:

- Verbindet sich mit dem Hintergrundskript
- Speichert den `Port` in einer Variablen `myPort`
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
- Bei Erhalt eines Verbindungsversuchs:
  - Speichert den Port in einer Variable namens `portFromCS`
  - Sendet dem Inhaltsskript eine Nachricht über den Port
  - Beginnt Nachrichten, die über den Port empfangen werden, zu hören, und protokolliert sie

- Sendet Nachrichten an das Inhaltsskript, über `portFromCS`, wenn der Benutzer auf die Browseraktion der Erweiterung klickt

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

Wenn Sie mehrere Inhaltsskripte gleichzeitig kommunizieren lassen, möchten Sie möglicherweise Verbindungen zu ihnen in einem Array speichern.

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

### Entscheidung zwischen einmaligen Nachrichten und verbindungsbasierter Nachrichtenübermittlung

Die Entscheidung zwischen einmaligen und verbindungsbasierten Nachrichten hängt davon ab, wie Ihre Erweiterung die Nachrichtenübermittlung voraussichtlich nutzt.

Die empfohlenen Best Practices sind:

- **Verwenden Sie einmalige Nachrichten, wenn…**
  - Nur eine Antwort auf eine Nachricht erwartet wird.
  - Eine geringe Anzahl von Skripten darauf hört, Nachrichten zu empfangen ({{WebExtAPIRef("runtime.onMessage")}} Aufrufe).
- **Verwenden Sie verbindungsbasierte Nachrichten, wenn…**
  - Skripte sich in Sitzungen engagieren, in denen mehrere Nachrichten ausgetauscht werden.
  - Die Erweiterung Informationen über den Fortschritt einer Aufgabe benötigt oder ob eine Aufgabe unterbrochen wird, oder eine Aufgabe, die durch Nachrichtenübermittlung initiiert wurde, unterbrechen möchte.

## Kommunikation mit der Webseite

Standardmäßig erhalten Inhaltsskripte keinen Zugriff auf die von Seitenskripten erstellten Objekte. Sie können jedoch mithilfe der DOM-APIs [`window.postMessage`](/de/docs/Web/API/Window/postMessage) und [`window.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) mit Seitenskripten kommunizieren.

Beispielsweise:

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

Für ein vollständiges Arbeitsbeispiel besuchen Sie [die Demoseite auf GitHub](https://mdn.github.io/webextensions-examples/content-script-page-script-messaging.html) und folgen Sie den Anweisungen.

> [!WARNING]
> Seien Sie sehr vorsichtig, wenn Sie in dieser Art und Weise mit nicht vertrauenswürdigen Webinhalten interagieren! Erweiterungen sind privilegierter Code, der mächtige Fähigkeiten haben kann, und feindliche Webseiten können sie leicht dazu bringen, diese Fähigkeiten zu nutzen.
>
> Um ein triviales Beispiel zu geben, nehmen wir an, der Inhaltsskriptcode, der die Nachricht empfängt, macht etwa Folgendes:
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
> Nun könnte das Seitenskript jeglichen Code mit allen Privilegien des Inhaltsskripts ausführen.

## Verwendung von `eval()` in Inhaltsskripten

> [!NOTE]
> `eval()` nicht verfügbar in Manifest V3.

- In Chrome
  - : {{jsxref("Global_Objects/eval", "eval")}} führt immer Code im Kontext des **Inhaltsskripts** aus, nicht im Kontext der Seite.
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

Dieses Skript erstellt einfach einige Variablen `x` und `y` mit `window.eval()` und `eval()`, protokolliert deren Werte und sendet dann Nachrichten an die Seite.

Nach Erhalt der Nachricht protokolliert das Seitenskript dieselben Variablen:

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
> Die Umgebung der Seite wird von potenziell bösartigen Webseiten kontrolliert, die Objekte, mit denen Sie interagieren, neu definieren können, um sich unerwartet zu verhalten:
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
