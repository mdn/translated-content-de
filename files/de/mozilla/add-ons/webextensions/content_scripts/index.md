---
title: Content scripts
slug: Mozilla/Add-ons/WebExtensions/Content_scripts
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{AddonSidebar}}

Ein Inhalts-Skript ist ein Teil Ihrer Erweiterung, der im Kontext einer Webseite ausgeführt wird (im Gegensatz zu Hintergrundskripten, die Teil der Erweiterung sind, oder Skripten, die Teil der Webseite selbst sind, wie zum Beispiel diejenigen, die mit dem `<script>` Element geladen werden).

[Hintergrund-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts) können auf alle [WebExtension JavaScript APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) zugreifen, aber sie können nicht direkt auf den Inhalt von Webseiten zugreifen. Wenn Ihre Erweiterung das tun muss, benötigen Sie Inhalts-Skripte.

Genau wie die Skripte, die von normalen Webseiten geladen werden, können Inhalts-Skripte den Inhalt ihrer Seiten mithilfe der standardmäßigen [Web APIs](/de/docs/Web/API) lesen und verändern. Sie können dies jedoch nur tun, wenn [Host-Berechtigungen für den Ursprung der Webseite gewährt wurden](#berechtigungen).

> [!NOTE] Einige Web-APIs sind auf [sichere Kontexte](/de/docs/Web/Security/Secure_Contexts) beschränkt, was auch auf Inhalts-Skripte zutrifft, die in diesen Kontexten ausgeführt werden. Eine Ausnahme ist [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents), die von Inhalts-Skripten in unsicheren Kontexten in Firefox aufgerufen werden kann.

Inhalts-Skripte können nur auf [eine kleine Teilmenge der WebExtension APIs](#webextension_apis) zugreifen, aber sie können [mit Hintergrund-Skripten kommunizieren](#kommunikation_mit_hintergrund-skripten) unter Verwendung eines Nachrichtensystems und auf diese Weise indirekt auf die WebExtension APIs zugreifen.

## Laden von Inhalts-Skripten

Sie können ein Inhalts-Skript in eine Webseite laden:

1. Beim Installieren, in Seiten, die mit URL-Mustern übereinstimmen.
   - Mit dem [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) Schlüssel in Ihrer `manifest.json` können Sie den Browser bitten, ein Inhalts-Skript zu laden, wann immer der Browser eine Seite lädt, deren URL [mit einem bestimmten Muster übereinstimmt](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns).
2. Laufzeit, in Seiten, die mit URL-Mustern übereinstimmen.
   - Mit {{WebExtAPIRef("scripting.registerContentScripts()")}} oder (nur in Manifest V2 in Firefox) {{WebExtAPIRef("contentScripts")}}, können Sie den Browser bitten, ein Inhalts-Skript zu laden, wann immer der Browser eine Seite lädt, deren URL [mit einem bestimmten Muster übereinstimmt](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns). (Dies ist ähnlich wie Methode 1, _außer_, dass Sie Inhalts-Skripte zur Laufzeit hinzufügen und entfernen können.)
3. Laufzeit, in spezifische Tabs.
   - Mit {{WebExtAPIRef("scripting.executeScript()")}} oder (nur in Manifest V2) {{WebExtAPIRef("tabs.executeScript()")}} können Sie ein Inhalts-Skript in einen bestimmten Tab laden, wann immer Sie wollen. (Zum Beispiel als Reaktion auf das Klicken des Nutzers auf eine [Browser-Aktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button).)

Es gibt nur einen globalen Gültigkeitsbereich _pro Frame, pro Erweiterung_. Das bedeutet, dass Variablen aus einem Inhalts-Skript direkt von einem anderen Inhalts-Skript, unabhängig davon, wie das Inhalts-Skript geladen wurde, zugegriffen werden können.

Mit den Methoden (1) und (2) können Sie nur Skripte in Seiten laden, deren URLs durch ein [Übereinstimmungsmuster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) dargestellt werden können.

Mit der Methode (3) können Sie auch Skripte in Seiten laden, die mit Ihrer Erweiterung gepackt sind, aber Sie können keine Skripte in privilegierte Browser-Seiten laden (wie "`about:debugging`" oder "`about:addons`").

> **Note:** [Dynamische JS-Modulimporte](/de/docs/Web/JavaScript/Guide/Modules#dynamic_module_loading) funktionieren jetzt in Inhalts-Skripten. Für weitere Details siehe [Firefox Bug 1536094](https://bugzil.la/1536094).
> Nur URLs mit dem _moz-extension_ Schema sind erlaubt, was Daten-URLs ausschließt ([Firefox Bug 1587336](https://bugzil.la/1587336)).

## Berechtigungen, Einschränkungen und Begrenzungen

### Berechtigungen

Registrierte Inhalts-Skripte werden nur ausgeführt, wenn der Erweiterung [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die Domain gewährt wurden.

Um Skripte programmgesteuert einzufügen, benötigt die Erweiterung entweder die [`activeTab` Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions). Um Methoden der {{WebExtAPIRef("scripting")}} API zu verwenden, ist die `scripting` Berechtigung erforderlich.

Ab Manifest V3 werden Host-Berechtigungen nicht automatisch bei der Installation gewährt. Benutzer können sich nach der Installation der Erweiterung für oder gegen Host-Berechtigungen entscheiden.

### Eingeschränkte Domains

Sowohl [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) als auch die [`activeTab` Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) haben Ausnahmen für einige Domains. Inhalts-Skripte sind daran gehindert, auf diesen Domains auszuführen, um beispielsweise den Benutzer vor einer Eskalation von Rechten durch eine Erweiterung auf speziellen Seiten zu schützen.

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
> Da diese Einschränkungen `addons.mozilla.org` einschließen, kann es passieren, dass Benutzer, die Ihre Erweiterung unmittelbar nach der Installation verwenden möchten, feststellen, dass sie nicht funktioniert. Um dies zu vermeiden, sollten Sie einen entsprechenden Hinweis oder eine [Einführungsseite](https://extensionworkshop.com/documentation/develop/onboard-upboard-offboard-users/) hinzufügen, um die Benutzer von `addons.mozilla.org` wegzuführen.

Der Satz der Domains kann durch Unternehmensrichtlinien weiter eingeschränkt werden: Firefox erkennt die `restricted_domains` Richtlinie wie in [ExtensionSettings in mozilla/policy-templates](https://github.com/mozilla/policy-templates/blob/master/README.md#extensionsettings) dokumentiert an. Die `runtime_blocked_hosts` Richtlinie von Chrome ist unter [Configure ExtensionSettings policy](https://support.google.com/chrome/a/answer/9867568) dokumentiert.

### Begrenzungen

Ganze Tabs oder Frames können unter Verwendung von [`data:` URI](/de/docs/Web/URI/Schemes/data), [`Blob`](/de/docs/Web/API/URL/createObjectURL_static) Objekten und anderen ähnlichen Techniken geladen werden. Die Unterstützung der Inhalts-Skripte-Injektion in solche speziellen Dokumente variiert zwischen den Browsern. Siehe den Firefox [Bug #1411641 Kommentar 41](https://bugzil.la/1411641#c41) für einige Details.

## Inhalts-Skript-Umgebung

### DOM-Zugriff

Inhalts-Skripte können auf das DOM der Seite zugreifen und es ändern, wie es auch normale Seitenskripte können. Sie können auch alle Änderungen sehen, die von Seitenskripten am DOM vorgenommen wurden.

Allerdings erhalten Inhalts-Skripte eine "saubere" Ansicht des DOMs. Das bedeutet:

- Inhalts-Skripte können keine JavaScript-Variablen sehen, die von Seitenskripten definiert wurden.
- Wenn ein Seitenskript eine eingebaute DOM-Eigenschaft neu definiert, sieht das Inhalts-Skript die ursprüngliche Version der Eigenschaft, nicht die neu definierte Version.

Wie in ["Inhalts-Skript-Umgebung" bei Chrome-Inkompatibilitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#content_script_environment) erwähnt, verhält sich dies in den verschiedenen Browsern unterschiedlich:

- In Firefox wird dieses Verhalten als [Xray vision](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts#xray_vision_in_firefox) bezeichnet. Inhalts-Skripte können entweder JavaScript-Objekte aus ihrem eigenen globalen Gültigkeitsbereich oder Xray-verpackte Versionen von der Webseite antreffen.

- In Chrome wird dieses Verhalten durch eine [isolierte Welt](https://chromium.googlesource.com/chromium/src/+/master/third_party/blink/renderer/bindings/core/v8/V8BindingDesign.md#world) durchgesetzt, die einen grundsätzlich anderen Ansatz verfolgt.

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

Das Skript `page-script.js` macht folgendes:

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

Das Gleiche gilt umgekehrt; Seitenskripte können keine JavaScript-Eigenschaften sehen, die von Inhalts-Skripten hinzugefügt wurden.

Das bedeutet, dass sich Inhalts-Skripte darauf verlassen können, dass sich DOM-Eigenschaften vorhersehbar verhalten, ohne sich Sorgen machen zu müssen, dass ihre Variablen mit denen des Seitenskripts kollidieren.

Eine praktische Konsequenz dieses Verhaltens ist, dass ein Inhalts-Skript keinen Zugriff auf JavaScript-Bibliotheken hat, die von der Seite geladen werden. Wenn die Seite also jQuery enthält, kann das Inhalts-Skript es nicht sehen.

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
> Firefox bietet [cloneInto()](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/cloneInto) und [exportFunction()](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/exportFunction), um Inhalts-Skripten zu ermöglichen, auf JavaScript-Objekte zuzugreifen, die von Seitenskripten erstellt wurden und ihre JavaScript-Objekte den Seitenskripten zugänglich zu machen.
>
> Siehe [Teilen von Objekten mit Seitenskripten](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts) für weitere Details.

### WebExtension APIs

Zusätzlich zu den standardmäßigen DOM-APIs können Inhalts-Skripte die folgenden WebExtension-APIs verwenden:

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

Inhalts-Skripte können Anfragen mit den normalen [`window.XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) und [`window.fetch()`](/de/docs/Web/API/Fetch_API) APIs durchführen.

> [!NOTE]
> In Firefox in Manifest V2 erfolgen Anfragen von Inhalts-Skripten (zum Beispiel unter Verwendung von [`fetch()`](/de/docs/Web/API/Fetch_API/Using_Fetch)) im Kontext einer Erweiterung, daher müssen Sie eine absolute URL angeben, um aufseiten Inhalte zu verweisen.
>
> In Chrome und Firefox in Manifest V3 erfolgen diese Anfragen im Kontext der Seite, sodass sie an eine relative URL gesendet werden. Zum Beispiel wird `/api` an `https://«current page URL»/api` gesendet.

Inhalts-Skripte erhalten die gleichen bereichsübergreifenden Berechtigungen wie der Rest der Erweiterung. Wenn die Erweiterung also für eine Domain den Cross-Domain-Zugriff mittels des [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) Schlüssels in `manifest.json` beantragt hat, erhalten ihre Inhalts-Skripte ebenfalls Zugriff auf diese Domain.

> [!NOTE]
> Beim Verwenden von Manifest V3 können Inhalts-Skripte bereichsübergreifende Anfragen durchführen, wenn der Zielserver dies durch [CORS](/de/docs/Web/HTTP/CORS) sicherstellt; Host-Berechtigungen funktionieren jedoch nicht in Inhalts-Skripten, gelten aber weiterhin in regulären Erweiterungsseiten.

Dies wird erreicht, indem privilegiertere XHR- und Fetch-Instanzen im Inhalts-Skript zur Verfügung gestellt werden, wodurch die Nebenwirkung entsteht, dass die [`Origin`](/de/docs/Web/HTTP/Headers/Origin) und [`Referer`](/de/docs/Web/HTTP/Headers/Referer) Header nicht gesetzt werden, wie es bei einer Anfrage von der Seite selbst der Fall wäre; dies ist oft vorzuziehen, um zu verhindern, dass die Anfrage ihre bereichsübergreifende Natur offenbart.

> [!NOTE]
> In Firefox in Manifest V2 können Erweiterungen, die Anfragen durchführen müssen, die so verhalten, als wären sie von dem Inhalt selbst gesendet, `content.XMLHttpRequest` und `content.fetch()` verwenden.
>
> Für besonders browserübergreifende Erweiterungen muss das Vorhandensein dieser Methoden erkannt werden.
>
> Dies ist in Manifest V3 nicht möglich, da `content.XMLHttpRequest` und `content.fetch()` nicht verfügbar sind.

> [!NOTE]
> In Chrome ab Version 73 und in Firefox ab Version 101 bei Verwendung von Manifest V3 unterliegen Inhalts-Skripte der gleichen [CORS](/de/docs/Web/HTTP/CORS) Richtlinie wie die Seite, in der sie ausgeführt werden. Nur Backend-Skripte haben erhöhte bereichsübergreifende Berechtigungen. Siehe [Änderungen bei bereichsübergreifenden Anfragen in Chrome-Erweiterungsinhalts-Skripten](https://www.chromium.org/Home/chromium-security/extension-content-script-fetches/).

## Kommunikation mit Hintergrund-Skripten

Obwohl Inhalts-Skripte die meisten WebExtension APIs nicht direkt verwenden können, können sie mit den Hintergrund-Skripten der Erweiterung mittels der Nachrichten-APIs kommunizieren und dadurch indirekt auf alle gleiche APIs zugreifen, die auch die Hintergrund-Skripte nutzen können.

Es gibt zwei grundlegende Muster für die Kommunikation zwischen den Hintergrund-Skripten und Inhalts-Skripten:

- Sie können **Einmalnachrichten** senden (mit einer optionalen Antwort).
- Sie können eine **längerfristige Verbindung zwischen den beiden Seiten** einrichten und diese Verbindung benutzen, um Nachrichten auszutauschen.

### Einmalnachrichten

Um Einmalnachrichten zu senden, mit einer optionalen Antwort, können Sie die folgenden APIs verwenden:

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

Zum Beispiel hier ein Inhalts-Skript, das auf Klickereignisse in der Webseite hört.

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

Das Hintergrund-Skript hört auf diese Nachrichten und zeigt eine Benachrichtigung unter Verwendung der [`notifications`](/de/docs/Mozilla/Add-ons/WebExtensions/API/notifications) API an:

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

(Dieses Beispielcode ist leicht adaptiert aus dem [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) Beispiel auf GitHub.)

### Verbindungsbasierte Nachrichtenübermittlung

Das Senden von Einmalnachrichten kann umständlich sein, wenn Sie viele Nachrichten zwischen einem Hintergrund-Skript und einem Inhalts-Skript austauschen. Eine alternative Strategie besteht darin, eine längerfristige Verbindung zwischen den beiden Kontexte zu etablieren und diese Verbindung zu verwenden, um Nachrichten auszutauschen.

Beide Seiten besitzen ein [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port) Objekt, das sie zum Austausch von Nachrichten verwenden können.

Um die Verbindung zu erstellen:

- Eine Seite hört auf Verbindungen mittels [`runtime.onConnect`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect).
- Die andere Seite ruft auf:

  - [`tabs.connect()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/connect) (wenn man mit einem Inhalts-Skript verbindet)
  - [`runtime.connect()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/connect) (wenn man mit einem Hintergrund-Skript verbindet)

Dies gibt ein [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port) Objekt zurück.

- Der [`runtime.onConnect`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect) Listener erhält sein eigenes [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port) Objekt.

Sobald jede Seite einen Port hat, können die beiden Seiten:

- Nachrichten mit `runtime.Port.postMessage()` senden.
- Nachrichten mit `runtime.Port.onMessage()` empfangen.

Zum Beispiel lädt das folgende Inhalts-Skript:

- Verbindet sich mit dem Hintergrund-Skript
- Speichert den `Port` in einer Variable `myPort`
- Hört auf Nachrichten auf `myPort` (und protokolliert diese)
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

- Hört auf Verbindungsversuche vom Inhalts-Skript
- Wenn ein Verbindungsversuch entgegen genommen wird:

  - Speichert den Port in einer Variable `portFromCS`
  - Sendet dem Inhalts-Skript eine Nachricht mittels des Ports
  - Beginnt, auf empfangene Nachrichten auf dem Port zu hören, und protokolliert diese

- Sendet Nachrichten an das Inhalts-Skript, verwendet `portFromCS`, wenn der Benutzer auf die Browser-Aktion der Erweiterung klickt

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

Wenn Sie mehrere Inhalts-Skripte gleichzeitig kommunizieren, möchten Sie möglicherweise Verbindungen zu ihnen in einem Array speichern.

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

### Wahl zwischen Einmalnachrichten und verbindungsbasierter Nachrichtenübermittlung

Die Wahl zwischen Einmal und verbindungsbasierter Nachrichtenübermittlung hängt davon ab, wie Ihre Erweiterung plant, die Nachrichtenübermittlung zu nutzen.

Die empfohlenen bewährten Verfahren sind:

- **Verwenden Sie Einmalnachrichten, wenn…**
  - Nur eine Antwort auf eine Nachricht erwartet wird.
  - Eine kleine Anzahl von Skripten hört auf den Empfang von Nachrichten ({{WebExtAPIRef("runtime.onMessage")}} Aufrufe).
- **Verwenden Sie verbindungsbasierte Nachrichtenübermittlung, wenn…**
  - Skripte engagieren sich in Sitzungen, bei denen mehrere Nachrichten ausgetauscht werden.
  - Die Erweiterung über Fortschritte bei Aufgaben informiert werden muss oder ob eine Aufgabe unterbrochen wird oder eine Aufgabe, die mittels Nachrichtenübermittlung initiiert wurde, unterbrochen werden soll.

## Kommunikation mit der Webseite

Standardmäßig erhalten Inhalts-Skripte keinen Zugriff auf die Objekte, die durch Seitenskripte erstellt wurden. Sie können jedoch mithilfe der DOM-APIs [`window.postMessage`](/de/docs/Web/API/Window/postMessage) und [`window.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) mit Seitenskripten kommunizieren.

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

Für ein vollständiges funktionierendes Beispiel besuchen Sie bitte [die Demoseite auf GitHub](https://mdn.github.io/webextensions-examples/content-script-page-script-messaging.html) und folgen Sie den Anweisungen.

> [!WARNING]
> Seien Sie sehr vorsichtig beim Interagieren mit nicht vertrauenswürdigem Webinhalt auf diese Weise! Erweiterungen sind privilegierte Codes, die mächtige Fähigkeiten haben können, und feindliche Webseiten können sie leicht täuschen, um auf diese Fähigkeiten zuzugreifen.
>
> Um ein triviales Beispiel zu geben, nehmen wir an, dass der Code des Inhalts-Skripts, der die Nachricht empfängt, so etwas tut:
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
> Jetzt kann das Seitenskript beliebigen Code mit allen Rechten des Inhalts-Skripts ausführen.

## Verwendung von `eval()` in Inhalts-Skripten

> **Note:** `eval()` ist nicht in Manifest V3 verfügbar.

- In Chrome
  - : {{jsxref("Global_Objects/eval", "eval")}} führt immer Code im Kontext des **Inhalts-Skripts** aus, nicht im Kontext der Seite.
- In Firefox

  - : Wenn Sie `eval()` aufrufen, wird der Code im Kontext des **Inhalts-Skripts** ausgeführt.

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

Dieser Code erstellt einfach einige Variablen `x` und `y` unter Verwendung von `window.eval()` und `eval()`, protokolliert deren Werte und sendet dann eine Nachricht an die Seite.

Beim Empfang der Nachricht protokolliert das Seitenskript die gleichen Variablen:

```js
window.addEventListener("message", (event) => {
  if (event.source === window && event.data && event.data.message === "check") {
    console.log(`In page script, window.x: ${window.x}`);
    console.log(`In page script, window.y: ${window.y}`);
  }
});
```

In Chrome produziert dies ein Ergebnis wie dieses:

```plain
In content script, window.x: 1
In content script, window.y: 2
In page script, window.x: undefined
In page script, window.y: undefined
```

In Firefox ergibt dies ein Ergebnis wie dieses:

```plain
In content script, window.x: undefined
In content script, window.y: 2
In page script, window.x: 1
In page script, window.y: undefined
```

Das Gleiche gilt für [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), [`setInterval()`](/de/docs/Web/API/Window/setInterval), und [`Function()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function).

> [!WARNING]
> Seien Sie sehr vorsichtig, wenn Sie Code im Kontext der Seite ausführen!
>
> Die Umgebung der Seite wird durch potenziell bösartige Webseiten kontrolliert, die Objekte, mit denen Sie interagieren, unerwartet umdefinieren können:
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
