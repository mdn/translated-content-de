---
title: Inhalts-Skripte
slug: Mozilla/Add-ons/WebExtensions/Content_scripts
l10n:
  sourceCommit: f7b2fd667af5f310356b46ed4920acac1da82dbe
---

Ein Inhalts-Skript ist ein Teil Ihrer Erweiterung, der im Kontext einer Webseite läuft. Es kann Seiteninhalte mithilfe der standardmäßigen [Web-APIs](/de/docs/Web/API) lesen und modifizieren. Das Verhalten eines Inhalts-Skripts ähnelt dem von Skripten, die Teil einer Webseite sind, wie z.B. solchen, die mit dem {{HTMLElement("script")}}-Element geladen werden. Inhalts-Skripte können jedoch nur auf Seiteninhalte zugreifen, wenn [Host-Berechtigungen für den Ursprung der Webseite erteilt wurden](#berechtigungen).

Inhalts-Skripte können auf [einen kleinen Teil der WebExtension-APIs](#webextension-apis) zugreifen, sie können jedoch [mit Hintergrundskripten kommunizieren](#kommunikation_mit_hintergrund-skripten) und dadurch indirekt auf die WebExtension-APIs zugreifen. [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts) können auf alle [WebExtension JavaScript APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) zugreifen, aber nicht direkt auf die Inhalte von Webseiten.

## Laden von Inhalts-Skripten

Sie können ein Inhalts-Skript in eine Webseite laden:

1. Zur Installationszeit, in Seiten, die den URL-Mustern entsprechen.
   - Mit dem Schlüssel [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) in Ihrer `manifest.json` können Sie den Browser bitten, ein Inhalts-Skript zu laden, wann immer der Browser eine Seite lädt, deren URL [einem bestimmten Muster entspricht](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns).
2. Zur Laufzeit, in Seiten, die den URL-Mustern entsprechen.
   - Mit {{WebExtAPIRef("scripting.registerContentScripts()")}} oder (nur in Manifest V2 in Firefox) {{WebExtAPIRef("contentScripts")}}, können Sie den Browser bitten, ein Inhalts-Skript zu laden, wann immer der Browser eine Seite lädt, deren URL [einem bestimmten Muster entspricht](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns). (Dies ähnelt der Methode 1, _außer_ dass Sie Inhalts-Skripte zur Laufzeit hinzufügen und entfernen können.)
3. Zur Laufzeit, in bestimmte Tabs.
   - Mit {{WebExtAPIRef("scripting.executeScript()")}} oder (nur in Manifest V2) {{WebExtAPIRef("tabs.executeScript()")}} können Sie ein Inhalts-Skript in einen bestimmten Tab laden, wann immer Sie möchten. (Zum Beispiel in Reaktion darauf, dass der Benutzer auf eine [Browseraktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) klickt.)

Es gibt nur einen globalen Scope _pro Frame, pro Erweiterung_. Dies bedeutet, dass Variablen aus einem Inhalts-Skript von jedem anderen Inhalts-Skript aus zugänglich sind, unabhängig davon, wie das Inhalts-Skript geladen wurde.

> [!NOTE]
> [Dynamische JS-Modulimporte](/de/docs/Web/JavaScript/Guide/Modules#dynamic_module_loading) funktionieren jetzt in Inhalts-Skripten. Für weitere Details siehe [Firefox-Fehler 1536094](https://bugzil.la/1536094).
> Nur URLs mit dem _moz-extension_-Schema sind erlaubt, was Daten-URLs ausschließt ([Firefox-Fehler 1587336](https://bugzil.la/1587336)).

### Persistenz

Inhalts-Skripte, die mit {{WebExtAPIRef("scripting.executeScript()")}} oder (nur in Manifest V2) mit {{WebExtAPIRef("tabs.executeScript()")}} geladen werden, laufen auf Anfrage und bestehen nicht fort.

Inhalts-Skripte, die im `content_scripts`-Schlüssel der Manifestdatei definiert sind oder mit der {{WebExtAPIRef("scripting.registerContentScripts()")}} oder (nur in Manifest V2 in Firefox) {{WebExtAPIRef("contentScripts")}} API persistieren standardmäßig. Sie bleiben über Neustarts und Updates des Browsers sowie Neustarts der Erweiterung hinaus registriert.

Die {{WebExtAPIRef("scripting.registerContentScripts()")}} API erlaubt jedoch, das Skript als nicht persistent zu definieren. Dies kann nützlich sein, wenn Ihre Erweiterung (im Namen eines Benutzers) ein Inhalts-Skript nur in der aktuellen Browsersitzung aktivieren möchte.

## Berechtigungen, Einschränkungen und Begrenzungen

### Berechtigungen

Registrierte Inhalts-Skripte werden nur ausgeführt, wenn der Erweiterung [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die Domain erteilt wurden.

Um Skripte programmatisch zu injizieren, benötigt die Erweiterung entweder die Berechtigung [`activeTab`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions). Die Berechtigung `scripting` ist erforderlich, um Methoden der {{WebExtAPIRef("scripting")}} API zu verwenden.

Bei der Installation kann eine Erweiterung Host-Berechtigungen für Hosts in ihren `matches`-Listen des `content_scripts` Manifest-Schlüssels anfordern. Benutzer können sich nach der Installation der Erweiterung für oder gegen Host-Berechtigungen entscheiden.

### Eingeschränkte Domains

Sowohl [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) als auch die Berechtigung [`activeTab`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) haben Ausnahmen für einige Domains. Inhalts-Skripte sind daran gehindert, auf diesen Domains ausgeführt zu werden, um z.B. den Benutzer vor einer Eskalation der Privilegien durch eine Erweiterung auf speziellen Seiten zu schützen.

In Firefox schließt dies folgende Domains ein:

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

Andere Browser haben ähnliche Einschränkungen für die Websites, von denen Erweiterungen installiert werden können. Beispielsweise ist der Zugriff auf chrome.google.com in Chrome eingeschränkt.

> [!NOTE]
> Da diese Einschränkungen addons.mozilla.org einschließen, könnten Benutzer, die versuchen, Ihre Erweiterung unmittelbar nach der Installation zu verwenden, feststellen, dass sie nicht funktioniert. Um dies zu vermeiden, sollten Sie eine geeignete Warnung oder eine [Onboarding-Seite](https://extensionworkshop.com/documentation/develop/onboard-upboard-offboard-users/) hinzufügen, um Benutzer von `addons.mozilla.org` wegzuführen.

Der Satz der Domains kann weiter durch Unternehmensrichtlinien eingeschränkt werden: Firefox erkennt die `restricted_domains`-Richtlinie, wie bei [ExtensionSettings in mozilla/policy-templates](https://github.com/mozilla/policy-templates/blob/master/README.md#extensionsettings) dokumentiert, an. Chromes `runtime_blocked_hosts`-Richtlinie ist bei [Configure ExtensionSettings policy](https://support.google.com/chrome/a/answer/9867568) dokumentiert.

### Begrenzungen

Standardmäßig laufen Inhalts-Skripte nicht in `about:blank`, `about:srcdoc`, `data:` und `blob:` Seiten. Um ihre Ausführung zu ermöglichen, verwenden Sie die Option [`match_origin_as_fallback`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#match_origin_as_fallback) im `content_scripts` Manifest-Schlüssel oder die Option [`matchOriginAsFallback`](/de/docs/Mozilla/Add-ons/WebExtensions/API/scripting/RegisteredContentScript#matchoriginasfallback) in der `scripting` API.

Erweiterungen können keine Inhalts-Skripte in privilegierte Browser-UI-Seiten (wie `about:debugging`, `about:addons`, Lesemodus, Quelltextanzeige, oder PDF-Viewer) oder [Erweiterungsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) injizieren.

Wenn eine Erweiterung Code in einer Erweiterungsseite dynamisch ausführen möchte, kann sie ein Skript auf der Seite einfügen. Dieses Skript enthält den auszuführenden Code und registriert einen {{WebExtAPIRef("runtime.onMessage")}}-Listener, der eine Möglichkeit zur Ausführung des Codes implementiert. Die Erweiterung kann dann eine Nachricht an den Listener senden, um die Ausführung des Codes zu starten.

## Inhalts-Skript-Umgebung

### DOM-Zugriff

Inhalts-Skripte können auf das DOM der Seite zugreifen und es modifizieren, genau wie normale Seiten-Skripte. Sie können auch alle Änderungen sehen, die von Seiten-Skripten am DOM vorgenommen wurden.

Inhalts-Skripte erhalten jedoch eine "saubere" Sicht auf das DOM. Dies bedeutet:

- Inhalts-Skripte können keine JavaScript-Variablen sehen, die von Seiten-Skripten definiert wurden.
- Wenn ein Seiten-Skript eine eingebaute DOM-Eigenschaft neu definiert, sieht das Inhalts-Skript die ursprüngliche Version der Eigenschaft, nicht die neu definierte Version.

Wie unter ["Inhalts-Skript-Umgebung" bei Chrome-Inkompatibilitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#content_script_environment) erwähnt, verhält sich dies in verschiedenen Browsern unterschiedlich:

- In Firefox wird dieses Verhalten [Xray Vision](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts#xray_vision_in_firefox) genannt. Ein Inhalts-Skript kann auf JavaScript-Objekte aus seinem globalen Scope oder Xray-umwickelte Versionen von der Webseite stoßen. In regulären Webseiten ist {{jsxref("globalThis")}} identisch mit `window`, aber in Firefox-Inhalts-Skripten ist `globalThis` ein separates Objekt, das von `window` erbt. Dieser Unterschied macht in der Regel keinen praktischen Unterschied für die Verfügbarkeit globaler APIs. Die Ausnahme ist, wenn der globale Scope eine Definition einer Standard-API enthält, die die Definition in `window` verdeckt, wie etwa [`structuredClone` in Inhalts-Skripten](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts#structuredclone).

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

Das Gleiche gilt umgekehrt; Seiten-Skripte können JavaScript-Eigenschaften, die von Inhalts-Skripten hinzugefügt wurden, nicht sehen.

Dies bedeutet, dass Inhalts-Skripte darauf vertrauen können, dass sich DOM-Eigenschaften vorhersagbar verhalten, ohne sich darum sorgen zu müssen, dass ihre Variablen mit Variablen aus dem Seiten-Skript kollidieren.

Eine praktische Konsequenz dieses Verhaltens ist, dass ein Inhalts-Skript keinen Zugang zu JavaScript-Bibliotheken hat, die von der Seite geladen wurden. Wenn die Seite zum Beispiel jQuery umfasst, kann das Inhalts-Skript es nicht sehen.

Wenn ein Inhalts-Skript eine JavaScript-Bibliothek verwenden muss, sollte die Bibliothek selbst als Inhalts-Skript _zusammen mit_ dem Inhalts-Skript, das sie verwenden möchte, injiziert werden:

```json
"content_scripts": [
  {
    "matches": ["*://*.mozilla.org/*"],
    "js": ["jquery.js", "content-script.js"]
  }
]
```

> [!NOTE]
> Firefox bietet [cloneInto()](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/cloneInto) und [exportFunction()](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/exportFunction), um Inhalts-Skripten den Zugriff auf von Seiten-Skripten erstellte JavaScript-Objekte zu ermöglichen und ihre JavaScript-Objekte an Seiten-Skripte offenzulegen.
>
> Siehe [Objekte mit Seiten-Skripten teilen](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts) für weitere Details.

### WebExtension-APIs

Zusätzlich zu den standardmäßigen DOM-APIs können Inhalts-Skripte folgende WebExtension-APIs verwenden:

**Von [`extension`](/de/docs/Mozilla/Add-ons/WebExtensions/API/extension):**

- [`getURL()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/extension/getURL)
- [`inIncognitoContext`](/de/docs/Mozilla/Add-ons/WebExtensions/API/extension/inIncognitoContext)

**Von [`runtime`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime):**

- [`connect()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/connect)
- {{WebExtAPIRef("runtime.getDocumentId()","getDocumentId()")}}
- {{WebExtAPIRef("runtime.getFrameId()","getFrameId()")}}
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

Inhalts-Skripte können Anfragen mithilfe der normalen APIs [`window.XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) und [`window.fetch()`](/de/docs/Web/API/Fetch_API) machen.

> [!NOTE]
> In Firefox im Manifest V2 erfolgen Inhalts-Skript-Anfragen (zum Beispiel mithilfe von [`fetch()`](/de/docs/Web/API/Fetch_API/Using_Fetch)) im Kontext einer Erweiterung, sodass Sie eine absolute URL angeben müssen, um auf Seiteninhalte zu verweisen.
>
> In Chrome und Firefox im Manifest V3 erfolgen diese Anfragen im Seitenkontext, sodass sie auf eine relative URL gerichtet sind. Zum Beispiel wird `/api` an `https://«current page URL»/api` gesendet.

Inhalts-Skripte erhalten dieselben domänenübergreifenden Privilegien wie der Rest der Erweiterung: Wenn die Erweiterung also für eine Domäne den domänenübergreifenden Zugriff mithilfe des Schlüssels [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in `manifest.json` angefordert hat, erhalten ihre Inhalts-Skripte ebenfalls Zugriff auf diese Domäne.

> [!NOTE]
> Bei Verwendung des Manifest V3 können Inhalts-Skripte domänenübergreifende Anfragen ausführen, wenn der Zielserver mithilfe von [CORS](/de/docs/Web/HTTP/Guides/CORS) zustimmt; jedoch funktionieren Host-Berechtigungen in Inhalts-Skripten nicht, aber immer noch auf regulären Erweiterungsseiten.

Dies wird erreicht, indem man privilegiertere XHR- und Fetch-Instanzen im Inhalts-Skript bereitstellt, was den Nebeneffekt hat, dass die Header [`Origin`](/de/docs/Web/HTTP/Reference/Headers/Origin) und [`Referer`](/de/docs/Web/HTTP/Reference/Headers/Referer) nicht gesetzt werden, wie es bei einer Anfrage von der Seite selbst der Fall wäre; dies ist oft vorzuziehen, um zu verhindern, dass die Anfrage ihre domänenübergreifende Natur offenbart.

> [!NOTE]
> In Firefox im Manifest V2 können Erweiterungen, die Anfragen ausführen müssen, die sich so verhalten, als wären sie vom Inhalt selbst gesendet worden, `content.XMLHttpRequest` und `content.fetch()` stattdessen verwenden.
>
> Für browserübergreifende Erweiterungen muss die Präsenz dieser Methoden durch Funktionen erkannt werden.
>
> Dies ist im Manifest V3 nicht möglich, da `content.XMLHttpRequest` und `content.fetch()` nicht verfügbar sind.

> [!NOTE]
> In Chrome, beginnend mit Version 73, und in Firefox, beginnend mit Version 101 bei der Verwendung von Manifest V3, unterliegen Inhalts-Skript-Anfragen denselben [CORS](/de/docs/Web/HTTP/Guides/CORS)-Richtlinien wie die Seite, auf der sie ausgeführt werden. Nur Hintergrundskripte haben erweiterte domänenübergreifende Privilegien. Siehe [Änderungen bei domänenübergreifenden Anfragen in Chrome-Erweiterungs-Inhalts-Skripten](https://www.chromium.org/Home/chromium-security/extension-content-script-fetches/).

### Sichere Kontexte

Seiten, die über HTTPS oder aus einer anderen vertrauenswürdigen Quelle, wie `localhost`, geladen werden, bieten einen [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts). Einige Web-APIs wie [`crypto.subtle`](/de/docs/Web/API/Crypto/subtle) und [`navigator.geolocation`](/de/docs/Web/API/Navigator/geolocation) sind nur in sicheren Kontexten verfügbar. Die eingeschränkten APIs legen Informationen oder Fähigkeiten offen, die auf einer Seite riskant wären, die ein Angreifer manipulieren könnte.

Inhalts-Skripte laufen im Kontext der Seite, in die sie injiziert werden. Daher gelten die Einschränkungen dieser APIs auch für Inhalts-Skripte: Ein Inhalts-Skript, das in einem unsicheren Kontext läuft, kann eine Web-API, die einen sicheren Kontext erfordert, nicht verwenden, auch wenn der Rest der Erweiterung möglicherweise noch Zugriff darauf hat.

> [!NOTE]
> In Firefox kann die API [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents), die an einen sicheren Kontext eingeschränkt ist, auch von Inhalts-Skripten in unsicheren Kontexten aufgerufen werden.

## Kommunikation mit Hintergrund-Skripten

Obwohl Inhalts-Skripte die meisten der WebExtension-APIs nicht direkt verwenden können, können sie über die Messaging-APIs mit den Hintergrund-Skripten der Erweiterung kommunizieren und damit indirekt auf dieselben APIs zugreifen, die die Hintergrund-Skripte verwenden können.

Es gibt zwei grundlegende Muster für die Kommunikation zwischen den Hintergrund-Skripten und den Inhalts-Skripten:

- Sie können **einmalige Nachrichten** senden (mit einer optionalen Antwort).
- Sie können eine **langfristige Verbindung zwischen den beiden Seiten** einrichten und diese Verbindung verwenden, um Nachrichten auszutauschen.

### Einmalige Nachrichten

Um einmalige Nachrichten mit einer optionalen Antwort zu senden, können Sie die folgenden APIs verwenden:

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

Zum Beispiel hier ein Inhalts-Skript, das auf Klick-Ereignisse in der Webseite hört.

Wenn der Klick auf einen Link erfolgte, sendet es eine Nachricht an die Hintergrund-Seite mit der Ziel-URL:

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
    iconUrl: browser.runtime.getURL("link.png"),
    title: "You clicked a link!",
    message: message.url,
  });
}
```

(Dieser Beispielcode wurde leicht aus dem [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) Beispiel auf GitHub angepasst.)

### Verbindungsbasierte Nachrichtenübermittlung

Das Senden von einmaligen Nachrichten kann umständlich werden, wenn Sie viele Nachrichten zwischen einem Hintergrund-Skript und einem Inhalts-Skript austauschen. Ein alternatives Muster besteht darin, eine langfristige Verbindung zwischen den beiden Kontexten zu etablieren und diese Verbindung zu verwenden, um Nachrichten auszutauschen.

Beide Seiten haben ein [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port)-Objekt, das sie verwenden können, um Nachrichten auszutauschen.

Um die Verbindung zu erstellen:

- Eine Seite hört auf Verbindungsversuche mit [`runtime.onConnect`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect).
- Die andere Seite ruft auf:
  - [`tabs.connect()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/connect) (wenn Sie zu einem Inhalts-Skript verbinden)
  - [`runtime.connect()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/connect) (wenn Sie zu einem Hintergrund-Skript verbinden)

Dies gibt ein [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port)-Objekt zurück.

- Der [`runtime.onConnect`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect)-Listener erhält sein eigenes [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port)-Objekt übergeben.

Sobald jede Seite einen Port hat, können die beiden Seiten:

- Nachrichten mit `runtime.Port.postMessage()` senden.
- Nachrichten mit `runtime.Port.onMessage()` empfangen.

Zum Beispiel lädt das folgende Inhalts-Skript:

- Verbindet sich mit dem Hintergrund-Skript.
- Speichert den `Port` in einer Variablen `myPort`.
- Hört auf Nachrichten auf `myPort` (und protokolliert sie).
- Verwendet `myPort`, um Nachrichten an das Hintergrund-Skript zu senden, wenn der Benutzer das Dokument anklickt.

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

- Hört auf Verbindungsversuche vom Inhalts-Skript.
- Beim Empfang eines Verbindungsversuchs:
  - Speichert den Port in einer Variablen namens `portFromCS`.
  - Sendet dem Inhalts-Skript eine Nachricht über den Port.
  - Beginnt, Nachrichten zu hören, die auf dem Port empfangen werden, und protokolliert sie.

- Sendet Nachrichten an das Inhalts-Skript, indem `portFromCS` verwendet wird, wenn der Benutzer auf die Browseraktion der Erweiterung klickt.

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

Wenn Sie mehrere Inhalts-Skripte haben, die gleichzeitig kommunizieren, möchten Sie möglicherweise die Verbindungen zu ihnen in einem Array speichern.

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

### Wahl zwischen einmaligen Nachrichten und verbindungsbasierter Nachrichtenübermittlung

Die Wahl zwischen einmaligen und verbindungsbasierten Nachrichten hängt davon ab, wie Ihre Erweiterung erwartet, Messaging zu verwenden.

Die empfohlenen Best Practices sind:

- **Verwenden Sie einmalige Nachrichten, wenn…**
  - Nur eine Antwort auf eine Nachricht erwartet wird.
  - Eine kleine Anzahl von Skripten zuhört, um Nachrichten zu empfangen ({{WebExtAPIRef("runtime.onMessage")}} Aufrufe).
- **Verwenden Sie verbindungsbasierte Nachrichtenübermittlung, wenn…**
  - Skripte an Sitzungen teilnehmen, in denen mehrere Nachrichten ausgetauscht werden.
  - Die Erweiterung über den Fortschritt von Aufgaben Bescheid wissen muss oder ob eine Aufgabe unterbrochen wird oder eine Aufgabe unterbrechen möchte, die mit Messaging initiiert wurde.

## Kommunikation mit der Webseite

Standardmäßig haben Inhalts-Skripte keinen Zugriff auf die von Seiten-Skripten erstellten Objekte. Sie können jedoch über die DOM-APIs [`window.postMessage`](/de/docs/Web/API/Window/postMessage) und [`window.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) mit Seiten-Skripten kommunizieren.

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

Für ein vollständiges funktionierendes Beispiel besuchen Sie die [Demo-Seite auf GitHub](https://mdn.github.io/webextensions-examples/content-script-page-script-messaging.html) und folgen Sie den Anweisungen.

> [!WARNING]
> Seien Sie sehr vorsichtig, wenn Sie auf diese Weise mit nicht vertrauenswürdigen Webinhalten interagieren! Erweiterungen sind privilegierter Code, der mächtige Fähigkeiten haben kann, und feindliche Webseiten können sie leicht dazu verleiten, diese Fähigkeiten auszunutzen.
>
> Um ein triviales Beispiel zu geben, nehmen wir an, dass der Code des Inhalts-Skripts, das die Nachricht empfängt, Folgendes ausführt:
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
> Nun kann das Seiten-Skript mit allen Privilegien des Inhalts-Skripts beliebigen Code ausführen.

## Verwendung von `eval()` in Inhalts-Skripten

> [!NOTE]
> `eval()` nicht verfügbar in Manifest V3.

- In Chrome
  - : {{jsxref("Global_Objects/eval", "eval")}} führt immer Code im Kontext des **Inhalts-Skripts** aus, nicht im Kontext der Seite.
- In Firefox
  - : Wenn Sie `eval()` aufrufen, wird Code im Kontext des **Inhalts-Skripts** ausgeführt.

    Wenn Sie `window.eval()` aufrufen, wird Code im Kontext der **Seite** ausgeführt.

Beispielsweise betrachten Sie ein Inhalts-Skript wie dieses:

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

Dieser Code erstellt einfach einige Variablen `x` und `y` mithilfe von `window.eval()` und `eval()`, protokolliert deren Werte und sendet dann eine Nachricht an die Seite.

Beim Empfang der Nachricht protokolliert das Seiten-Skript dieselben Variablen:

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

Das Gleiche gilt für [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), [`setInterval()`](/de/docs/Web/API/Window/setInterval), und [`Function()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function).

> [!WARNING]
> Seien Sie sehr vorsichtig, wenn Sie Code im Kontext der Seite ausführen!
>
> Die Umgebung der Seite wird von potenziell bösartigen Webseiten kontrolliert, die Objekte, mit denen Sie interagieren, so redefinieren können, dass sie sich in unerwarteter Weise verhalten:
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
