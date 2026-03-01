---
title: Inhaltsskripte
slug: Mozilla/Add-ons/WebExtensions/Content_scripts
l10n:
  sourceCommit: 286918035156c33cc4ed073304f4c51ab5cfacfe
---

Ein Inhaltsskript ist ein Teil Ihrer Erweiterung, der im Kontext einer Webseite ausgeführt wird. Es kann Seiteninhalt mithilfe der Standard-[Web-APIs](/de/docs/Web/API) lesen und ändern. Das Verhalten von Inhaltsskripten ähnelt dem von Skripten, die Teil einer Website sind, wie beispielsweise jene, die mit dem {{HTMLElement("script")}}-Element geladen werden. Allerdings können Inhaltsskripte nur dann auf Seiteninhalte zugreifen, wenn [Host-Berechtigungen für den Ursprung der Webseite gewährt werden](#berechtigungen).

Inhaltsskripte haben Zugriff auf [einen kleinen Teil der WebExtension-APIs](#webextension_apis), können jedoch über ein Nachrichtensystem [mit Hintergrundskripten kommunizieren](#kommunikation_mit_hintergrundskripten) und dadurch indirekt auf die WebExtension-APIs zugreifen. [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts) können auf alle [WebExtension JavaScript APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) zugreifen, haben jedoch keinen direkten Zugriff auf den Inhalt von Webseiten.

> [!NOTE]
> Einige Web-APIs sind auf [sichere Kontexte](/de/docs/Web/Security/Defenses/Secure_Contexts) beschränkt, was auch für Inhaltsskripte in diesen Kontexten gilt. Eine Ausnahme bildet [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents), die in unsicheren Kontexten in Firefox von Inhaltsskripten aufgerufen werden kann.

## Laden von Inhaltsskripten

Sie können ein Inhaltsskript in eine Webseite laden:

1. Zur Installationszeit, in Seiten, die URL-Mustern entsprechen.
   - Mit dem [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Schlüssel in Ihrer `manifest.json` können Sie den Browser auffordern, ein Inhaltsskript zu laden, wann immer der Browser eine Seite lädt, deren URL [einem bestimmten Muster entspricht](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns).
2. Zur Laufzeit, in Seiten, die URL-Mustern entsprechen.
   - Mit {{WebExtAPIRef("scripting.registerContentScripts()")}} oder (nur in Manifest V2 in Firefox) {{WebExtAPIRef("contentScripts")}} können Sie den Browser auffordern, ein Inhaltsskript zu laden, wann immer der Browser eine Seite lädt, deren URL [einem bestimmten Muster entspricht](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns). (Dies ähnelt Methode 1, _außer_, dass Sie Inhaltsskripte zur Laufzeit hinzufügen und entfernen können.)
3. Zur Laufzeit, in spezifische Tabs.
   - Mit {{WebExtAPIRef("scripting.executeScript()")}} oder (nur in Manifest V2) {{WebExtAPIRef("tabs.executeScript()")}} können Sie ein Inhaltsskript in einen bestimmten Tab laden, wann immer Sie möchten. (Zum Beispiel als Reaktion auf das Klicken eines [Browser-Aktionsknopfes](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button).)

Es gibt nur einen globalen Scope _pro Frame, pro Erweiterung_. Das bedeutet, dass Variablen aus einem Inhaltsskript von jedem anderen Inhaltsskript, unabhängig davon, wie das Inhaltsskript geladen wurde, zugegriffen werden kann.

> [!NOTE]
> [Dynamische JS-Modulimporte](/de/docs/Web/JavaScript/Guide/Modules#dynamic_module_loading) funktionieren jetzt in Inhaltsskripten. Für weitere Details siehe [Firefox Bug 1536094](https://bugzil.la/1536094).
> Nur URLs mit dem _moz-extension_ Schema sind erlaubt, was Daten-URLs ausschließt ([Firefox Bug 1587336](https://bugzil.la/1587336)).

### Persistenz

Inhaltsskripte, die mit {{WebExtAPIRef("scripting.executeScript()")}} oder (nur in Manifest V2) mit {{WebExtAPIRef("tabs.executeScript()")}} geladen wurden, laufen auf Anfrage und bleiben nicht gespeichert.

Inhaltsskripte, die im Manifest-Datei-Schlüssel [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) definiert sind oder mit der {{WebExtAPIRef("scripting.registerContentScripts()")}} API oder (nur in Manifest V2 in Firefox) {{WebExtAPIRef("contentScripts")}} API bleiben standardmäßig gespeichert. Sie bleiben über Browser-Neustarts und -Updates sowie Erweiterungs-Neustarts hinweg registriert.

Die {{WebExtAPIRef("scripting.registerContentScripts()")}} API bietet jedoch die Möglichkeit, das Skript als nicht-persistent zu definieren. Dies kann nützlich sein, wenn beispielsweise Ihre Erweiterung (im Namen eines Benutzers) ein Inhaltsskript nur in der aktuellen Browsersitzung aktivieren möchte.

## Berechtigungen, Einschränkungen und Begrenzungen

### Berechtigungen

Registrierte Inhaltsskripte werden nur ausgeführt, wenn der Erweiterung [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die Domain gewährt wurden.

Um Skripte programmgesteuert injizieren zu können, benötigt die Erweiterung entweder die [`activeTab` Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions). Die `scripting` Berechtigung ist erforderlich, um Methoden aus der {{WebExtAPIRef("scripting")}} API zu verwenden.

Bei der Installation kann eine Erweiterung Host-Berechtigungen für Hosts in ihren `matches`-Listen des `content_scripts` Manifest-Schlüssels anfordern. Benutzer können sich nach der Installation der Erweiterung für oder gegen die Host-Berechtigungen entscheiden.

### Einschränkungen auf Domains

Sowohl [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) als auch die [`activeTab` Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) haben Ausnahmen für einige Domains. Inhaltsskripte sind daran gehindert, auf diesen Domains zu laufen, um beispielsweise den Benutzer vor einer Erweiterung zu schützen, die ihre Privilegien durch spezielle Seiten eskaliert.

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

Andere Browser haben ähnliche Einschränkungen hinsichtlich der Websites, von denen Erweiterungen installiert werden können. Zum Beispiel ist der Zugriff auf chrome.google.com in Chrome eingeschränkt.

> [!NOTE]
> Da diese Einschränkungen addons.mozilla.org einschließen, kann es passieren, dass Benutzer, die Ihre Erweiterung direkt nach der Installation verwenden möchten, feststellen, dass sie nicht funktioniert. Um dies zu vermeiden, sollten Sie eine entsprechende Warnung oder eine [Onboarding-Seite](https://extensionworkshop.com/documentation/develop/onboard-upboard-offboard-users/) hinzufügen, um die Benutzer von `addons.mozilla.org` wegzuleiten.

Die Anzahl der Domains kann durch Unternehmensrichtlinien weiter eingeschränkt werden: Firefox erkennt die `restricted_domains` Richtlinie, wie im [ExtensionSettings in mozilla/policy-templates](https://github.com/mozilla/policy-templates/blob/master/README.md#extensionsettings) dokumentiert. Chromes `runtime_blocked_hosts` Richtlinie ist im [Konfigurieren der ExtensionSettings-Richtlinie](https://support.google.com/chrome/a/answer/9867568) dokumentiert.

### Begrenzungen

Standardmäßig werden Inhaltsskripte nicht auf `about:blank`, `about:srcdoc`, `data:` und `blob:` Seiten ausgeführt. Um deren Ausführung zu ermöglichen, verwenden Sie die Option [`match_origin_as_fallback`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#match_origin_as_fallback) im `content_scripts` Manifest-Schlüssel oder die Option [`matchOriginAsFallback`](/de/docs/Mozilla/Add-ons/WebExtensions/API/scripting/RegisteredContentScript#matchoriginasfallback) in der `scripting` API.

Erweiterungen können keine Inhaltsskripte in privilegierte Browser-Benutzeroberflächen-Seiten (wie `about:debugging`, `about:addons`, Leseansichtsansicht, Quellansicht oder den PDF-Viewer) oder [Erweiterungsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) injizieren.

Wenn eine Erweiterung Code in einer Erweiterungsseite dynamisch ausführen möchte, kann sie ein Skript in die Seite einfügen. Dieses Skript enthält den auszuführenden Code und registriert einen {{WebExtAPIRef("runtime.onMessage")}}-Listener, der eine Möglichkeit implementiert, den Code auszuführen. Die Erweiterung kann dann eine Nachricht an den Listener senden, um die Ausführung des Codes auszulösen.

## Inhaltsskript-Umgebung

### DOM-Zugriff

Inhaltsskripte können auf das DOM der Seite zugreifen und es ändern, genau wie normale Seitenskripte es können. Sie können auch alle Änderungen sehen, die von Seitenskripten am DOM vorgenommen wurden.

Allerdings erhalten Inhaltsskripte einen "sauberen" Blick auf das DOM. Das bedeutet:

- Inhaltsskripte können keine JavaScript-Variablen sehen, die von Seitenskripten definiert wurden.
- Wenn ein Seitenskript eine eingebaute DOM-Eigenschaft neu definiert, sieht das Inhaltsskript die ursprüngliche Version der Eigenschaft, nicht die neu definierte Version.

Wie unter ["Content script environment" bei Chrome-Inkompatibilitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#content_script_environment) erwähnt, unterscheidet sich das Verhalten zwischen den Browsern:

- In Firefox wird dies als [Xray Vision](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts#xray_vision_in_firefox) bezeichnet. Inhaltsskripte können entweder JavaScript-Objekte aus ihrem eigenen globalen Scope oder Xray-umwickelte Versionen aus der Webseite antreffen.

- In Chrome wird dieses Verhalten durch eine [isolated world](https://chromium.googlesource.com/chromium/src/+/master/third_party/blink/renderer/bindings/core/v8/V8BindingDesign.md#world) durchgesetzt, die einen grundlegend anderen Ansatz verwendet.

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

Nun injiziert eine Erweiterung ein Inhaltsskript auf die Seite:

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

Das bedeutet, dass Inhaltsskripte darauf vertrauen können, dass DOM-Eigenschaften vorhersehbar funktionieren, ohne dass Variablen mit denen der Seitenskripte kollidieren.

Eine praktische Konsequenz dieses Verhaltens ist, dass ein Inhaltsskript keinen Zugriff auf JavaScript-Bibliotheken hat, die von der Seite geladen werden. Wenn die Seite zum Beispiel jQuery enthält, kann das Inhaltsskript es nicht sehen.

Wenn ein Inhaltsskript eine JavaScript-Bibliothek verwenden muss, sollte die Bibliothek zusammen mit dem Inhaltsskript, das sie verwenden möchte, als Inhaltsskript injiziert werden:

```json
"content_scripts": [
  {
    "matches": ["*://*.mozilla.org/*"],
    "js": ["jquery.js", "content-script.js"]
  }
]
```

> [!NOTE]
> Firefox bietet [cloneInto()](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/cloneInto) und [exportFunction()](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/exportFunction) an, um Inhaltsskripten zu ermöglichen, Zugriff auf von Seitenskripten erstellte JavaScript-Objekte zu erhalten und deren JavaScript-Objekte in Seitenskripten zugänglich zu machen.
>
> Weitere Details finden Sie unter [Teilen von Objekten mit Seitenskripten](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts).

### WebExtension APIs

Zusätzlich zu den Standard-DOM-APIs können Inhaltsskripte diese WebExtension-APIs verwenden:

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

Inhaltsskripte können Anfragen mithilfe der normalen [`window.XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) und [`window.fetch()`](/de/docs/Web/API/Fetch_API) APIs machen.

> [!NOTE]
> In Firefox in Manifest V2 erfolgen Anfragen von Inhaltsskripten (zum Beispiel bei Verwendung von [`fetch()`](/de/docs/Web/API/Fetch_API/Using_Fetch)) im Kontext einer Erweiterung, daher müssen Sie eine absolute URL angeben, um auf Seiteninhalte zu verweisen.
>
> In Chrome und Firefox in Manifest V3 erfolgen diese Anfragen im Kontext der Seite, daher werden sie an eine relative URL gesendet. Zum Beispiel wird `/api` an `https://«aktuelle Seiten-URL»/api` gesendet.

Inhaltsskripte erhalten die gleichen Domain-übergreifenden Privilegien wie der Rest der Erweiterung: Wenn die Erweiterung Cross-Domain-Zugriff für eine Domain mit dem [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)-Schlüssel in `manifest.json` angefordert hat, erhalten ihre Inhaltsskripte auch Zugriff auf diese Domain.

> [!NOTE]
> Beim Verwenden von Manifest V3 können Inhaltsskripte DOM-übergreifende Anfragen stellen, wenn der Zielserver die [CORS](/de/docs/Web/HTTP/Guides/CORS)-Berechtigungen aktiviert hat; Host-Berechtigungen arbeiten jedoch nicht in Inhaltsskripten, aber sie funktionieren immer noch in regulären Erweiterungsseiten.

Dies wird erreicht, indem in den Inhaltsskripten privilegiertere XHR- und fetch-Instanzen ausgesetzt werden, was zur Folge hat, dass die [`Origin`](/de/docs/Web/HTTP/Reference/Headers/Origin)- und [`Referer`](/de/docs/Web/HTTP/Reference/Headers/Referer)-Header wie eine Anfrage von der Seite selbst es tun würde nicht gesetzt werden; dies ist oft vorzuziehen, um zu verhindern, dass die Anfrage ihre DOM-übergreifende Natur preisgibt.

> [!NOTE]
> In Firefox in Manifest V2 können Erweiterungen, die Anfragen stellen müssen, die sich so verhalten, als wären sie vom eigentlichen Inhalt gesendet worden, `content.XMLHttpRequest` und `content.fetch()` stattdessen verwenden.
>
> Bei browserübergreifenden Erweiterungen muss das Vorhandensein dieser Methoden funktional erkannt werden.
>
> Dies ist in Manifest V3 nicht möglich, da `content.XMLHttpRequest` und `content.fetch()` nicht verfügbar sind.

> [!NOTE]
> In Chrome, ab Version 73, und Firefox, ab Version 101 bei Verwendung von Manifest V3, unterliegen Inhaltsskripte der gleichen [CORS](/de/docs/Web/HTTP/Guides/CORS)-Politik wie die Seite, in der sie laufen. Nur Backend-Skripte haben erhöhte DOM-übergreifende Privilegien. Siehe [Änderungen bei DOM-übergreifenden Anfragen in Chromerweiterungsinhalts-Skripten](https://www.chromium.org/Home/chromium-security/extension-content-script-fetches/).

## Kommunikation mit Hintergrundskripten

Auch wenn Inhaltsskripte die meisten WebExtension-APIs nicht direkt verwenden können, können sie mit den Hintergrundskripten der Erweiterung über die Messaging-APIs kommunizieren und daher indirekt auf alle APIs zugreifen, auf die die Hintergrundskripte zugreifen können.

Es gibt zwei Grundmuster für die Kommunikation zwischen den Hintergrundskripten und Inhaltsskripten:

- Sie können **einmalige Nachrichten** senden (mit einer optionalen Antwort).
- Sie können eine **dauerhafte Verbindung zwischen den beiden Seiten** einrichten und diese Verbindung nutzen, um Nachrichten auszutauschen.

### Einmalige Nachrichten

Um einmalige Nachrichten mit einer optionalen Antwort zu senden, können Sie die folgenden APIs verwenden:

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

Zum Beispiel hört ein Inhaltsskript, das Klickereignisse auf der Webseite abhört.

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
    iconUrl: browser.extension.getURL("link.png"),
    title: "You clicked a link!",
    message: message.url,
  });
}
```

(Dieser Beispielcode ist leicht angepasst vom [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) Beispiel auf GitHub.)

### Verbindungsbasierte Nachrichtenübermittlung

Das Senden einmaliger Nachrichten kann umständlich werden, wenn Sie viele Nachrichten zwischen einem Hintergrundskript und einem Inhaltsskript austauschen. Ein alternatives Muster besteht darin, eine dauerhafte Verbindung zwischen den beiden Kontexten einzurichten und diese Verbindung zu verwenden, um Nachrichten auszutauschen.

Beide Seiten haben ein [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port) Objekt, das sie benutzen können, um Nachrichten auszutauschen.

Um die Verbindung zu erstellen:

- Eine Seite hört auf Verbindungsversuche mit [`runtime.onConnect`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect).
- Die andere Seite ruft an:
  - [`tabs.connect()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/connect) (wenn Verbindung zu einem Inhaltsskript)
  - [`runtime.connect()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/connect) (wenn Verbindung zu einem Hintergrundskript)

Dies gibt ein [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port) Objekt zurück.

- Der [`runtime.onConnect`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect) Listener erhält sein eigenes [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port) Objekt.

Sobald jede Seite einen Port hat, können beide:

- Nachrichten senden mit `runtime.Port.postMessage()`
- Nachrichten empfangen mit `runtime.Port.onMessage()`

Zum Beispiel, sobald es geladen ist, das folgende Inhaltsskript:

- Verbindet sich mit dem Hintergrundskript
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
- Wenn es einen Verbindungsversuch empfängt:
  - Speichert den Port in einer Variablen namens `portFromCS`
  - Sendet dem Inhaltsskript eine Nachricht über den Port
  - Beginnt, auf Nachrichten zu hören, die auf dem Port empfangen werden, und protokolliert sie

- Sendet Nachrichten an das Inhaltsskript, mittels `portFromCS`, wenn der Benutzer die Browser-Aktion der Erweiterung klickt

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

Wenn Sie mehrere Inhaltsskripte gleichzeitig kommunizieren lassen möchten, könnten Sie Verbindungen zu ihnen in einem Array speichern:

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

### Wahl zwischen einmaligen Nachrichten und verbindungsbasiertem Messaging

Die Wahl zwischen einmaligen Nachrichten und verbindungsbasiertem Messaging hängt davon ab, wie Ihre Erweiterung plant, die Nachrichtenübermittlung zu nutzen.

Die empfohlenen Best Practices sind:

- **Einmalige Nachrichten verwenden, wenn…**
  - Nur eine Antwort auf eine Nachricht erwartet wird.
  - Eine geringe Anzahl von Skripten darauf hören, Nachrichten zu empfangen ({{WebExtAPIRef("runtime.onMessage")}} Aufrufe).
- **Verbindungsbasierte Nachrichtenübermittlung verwenden, wenn…**
  - Skripte an Sitzungen teilnehmen, bei denen mehrere Nachrichten ausgetauscht werden.
  - Die Erweiterung über Fortschritte von Aufgaben informiert werden muss oder wenn eine Aufgabe unterbrochen wird, oder eine Aufgabe stoppen möchte, die mittels Nachrichten gestartet wurde.

## Kommunikation mit der Webseite

Standardmäßig erhalten Inhaltsskripte keinen Zugriff auf Objekte, die von Seitenskripten erstellt wurden. Allerdings können sie mit Seitenskripten über die DOM-APIs [`window.postMessage`](/de/docs/Web/API/Window/postMessage) und [`window.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) kommunizieren.

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

Für ein vollständiges Arbeitsbeispiel hiervon [besuchen Sie die Demoseite auf GitHub](https://mdn.github.io/webextensions-examples/content-script-page-script-messaging.html) und befolgen Sie die Anweisungen.

> [!WARNING]
> Seien Sie sehr vorsichtig bei der Interaktion mit untrusted Web-Content auf diese Weise! Erweiterungen sind privilegierter Code, die mächtige Fähigkeiten haben und feindliche Webseiten können sie leicht dazu verleiten, auf diese Fähigkeiten zuzugreifen.
>
> Ein triviales Beispiel: Angenommen, der Inhaltsskript-Code, der die Nachricht empfängt, macht etwas wie dies:
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
> Jetzt kann das Seitenskript jeden Code mit allen Berechtigungen des Inhaltsskripts ausführen.

## Verwendung von `eval()` in Inhaltsskripten

> [!NOTE]
> `eval()` ist nicht verfügbar in Manifest V3.

- In Chrome
  - : {{jsxref("Global_Objects/eval", "eval")}} führt immer Code im Kontext des **Inhaltsskripts** aus, nicht im Kontext der Seite.
- In Firefox
  - : Wenn Sie `eval()` aufrufen, wird Code im Kontext des **Inhaltsskripts** ausgeführt.

    Wenn Sie `window.eval()` aufrufen, wird Code im Kontext der **Seite** ausgeführt.

Zum Beispiel, betrachten Sie ein Inhaltsskript wie dieses:

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

Dieses Code erstellt einfach einige Variablen `x` und `y` mit `window.eval()` und `eval()`, protokolliert deren Werte und sendet dann Nachrichten an die Seite.

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

Das gleiche gilt für [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), [`setInterval()`](/de/docs/Web/API/Window/setInterval) und [`Function()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function).

> [!WARNING]
> Seien Sie sehr vorsichtig, wenn Sie Code im Kontext der Seite ausführen!
>
> Das Umfeld der Seite wird von möglicherweise bösartigen Webseiten kontrolliert, die die von Ihnen verwendeten Objekte neu definieren können, um sich unerwartet zu verhalten:
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
