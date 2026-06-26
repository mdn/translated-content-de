---
title: Inhalts-Skripte
slug: Mozilla/Add-ons/WebExtensions/Content_scripts
l10n:
  sourceCommit: 9791add3508e087982097f25fbd367c21bcb8305
---

Ein Inhalts-Skript ist ein Teil Ihrer Erweiterung, der im Kontext einer Webseite ausgeführt wird. Es kann Seiteninhalte lesen und ändern, indem es die standardmäßigen [Web-APIs](/de/docs/Web/API) verwendet. Das Verhalten von Inhalts-Skripten ähnelt dem von Skripten, die Teil einer Website sind, wie beispielsweise solche, die mit dem {{HTMLElement("script")}}-Element geladen werden. Inhalts-Skripte können jedoch nur dann auf Seiteninhalte zugreifen, wenn [Host-Berechtigungen für die Herkunft der Webseite erteilt wurden](#berechtigungen).

Inhalts-Skripte können auf [eine kleine Untermenge der WebExtension-APIs](#webextension-apis) zugreifen, aber sie können [mit Hintergrund-Skripten kommunizieren](#kommunikation_mit_hintergrund-skripten) und dadurch indirekt auf die WebExtension-APIs zugreifen. [Hintergrund-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts) können auf alle [WebExtension JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) zugreifen, jedoch nicht direkt auf den Inhalt von Webseiten.

> [!NOTE]
> Einige Web-APIs sind auf [sichere Kontexte](/de/docs/Web/Security/Defenses/Secure_Contexts) beschränkt, was auch für Inhalts-Skripte gilt, die in diesen Kontexten ausgeführt werden. Ausgenommen ist [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents), das in Firefox aus Inhalts-Skripten in unsicheren Kontexten aufgerufen werden kann.

## Laden von Inhalts-Skripten

Sie können ein Inhalts-Skript in eine Webseite laden:

1. Zur Installationszeit, in Seiten, die mit URL-Mustern übereinstimmen.
   - Mithilfe des Schlüssels [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) in Ihrer `manifest.json` können Sie den Browser bitten, ein Inhalts-Skript zu laden, wann immer der Browser eine Seite lädt, deren URL [mit einem bestimmten Muster übereinstimmt](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns).
2. Zur Laufzeit, in Seiten, die mit URL-Mustern übereinstimmen.
   - Mit {{WebExtAPIRef("scripting.registerContentScripts()")}} oder (nur in Manifest V2 in Firefox) {{WebExtAPIRef("contentScripts")}}, können Sie den Browser bitten, ein Inhalts-Skript zu laden, wann immer der Browser eine Seite lädt, deren URL [mit einem bestimmten Muster übereinstimmt](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns). (Dies ist ähnlich wie Methode 1, _außer dass_ Sie Inhalts-Skripte zur Laufzeit hinzufügen und entfernen können.)
3. Zur Laufzeit, in bestimmte Tabs.
   - Mit {{WebExtAPIRef("scripting.executeScript()")}} oder (nur in Manifest V2) {{WebExtAPIRef("tabs.executeScript()")}}, können Sie ein Inhalts-Skript in einem bestimmten Tab laden, wann immer Sie wollen. (Zum Beispiel als Reaktion auf das Klicken eines Benutzers auf eine [Browser-Aktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button).)

Es gibt nur einen globalen Umfang _pro Frame, pro Erweiterung_. Das bedeutet, dass Variablen aus einem Inhalts-Skript von allen anderen Inhalts-Skripten zugänglich sind, unabhängig davon, wie das Inhalts-Skript geladen wurde.

> [!NOTE]
> [Dynamische JS-Modulimporte](/de/docs/Web/JavaScript/Guide/Modules#dynamic_module_loading) funktionieren jetzt in Inhalts-Skripten. Für weitere Details siehe [Firefox-Bug 1536094](https://bugzil.la/1536094).
> Nur URLs mit dem _moz-extension_-Schema sind erlaubt, was Daten-URLs ausschließt ([Firefox-Bug 1587336](https://bugzil.la/1587336)).

### Persistenz

Inhalts-Skripte, die mit {{WebExtAPIRef("scripting.executeScript()")}} oder (nur in Manifest V2) {{WebExtAPIRef("tabs.executeScript()")}} geladen werden, werden auf Anfrage ausgeführt und bestehen nicht dauerhaft.

Inhalts-Skripte, die im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Schlüssel der Manifestdatei definiert sind oder mit der {{WebExtAPIRef("scripting.registerContentScripts()")}}-API oder (nur in Manifest V2 in Firefox) der {{WebExtAPIRef("contentScripts")}}-API geladen werden, bestehen standardmäßig dauerhaft. Sie bleiben über Browser-Neustarts und Updates hinweg, sowie bei Erweiterungs-Neustarts registriert.

Die {{WebExtAPIRef("scripting.registerContentScripts()")}}-API bietet jedoch die Möglichkeit, das Skript als nicht persistent zu definieren. Dies kann nützlich sein, wenn Ihre Erweiterung (im Auftrag eines Benutzers) beispielsweise ein Inhalts-Skript nur in der aktuellen Browser-Sitzung aktivieren möchte.

## Berechtigungen, Einschränkungen und Limitierungen

### Berechtigungen

Registrierte Inhalts-Skripte werden nur ausgeführt, wenn der Erweiterung [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die Domain erteilt wurden.

Um Skripte programmgesteuert zu injizieren, benötigt die Erweiterung entweder die [`activeTab`-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions). Die `scripting`-Berechtigung ist erforderlich, um Methoden aus der {{WebExtAPIRef("scripting")}}-API zu verwenden.

Bei der Installation kann eine Erweiterung Host-Berechtigungen für Hosts in ihrer `matches`-Liste des `content_scripts`-Manifest-Schlüssels anfordern. Benutzer können nach der Installation der Erweiterung Host-Berechtigungen ein- oder ausschalten.

### Eingeschränkte Domains

Sowohl [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) als auch die [`activeTab`-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) haben Ausnahmen für einige Domains. Inhalts-Skripte sind daran gehindert, auf diesen Domains ausgeführt zu werden, um beispielsweise den Benutzer vor einer Erweiterung zu schützen, die Privilegien über spezielle Seiten eskaliert.

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

Andere Browser haben ähnliche Beschränkungen für die Websites, von denen Erweiterungen installiert werden können. Zum Beispiel ist der Zugriff auf chrome.google.com in Chrome eingeschränkt.

> [!NOTE]
> Da diese Beschränkungen auch addons.mozilla.org umfassen, könnte es sein, dass Benutzer, die Ihre Erweiterung direkt nach der Installation verwenden möchten, feststellen, dass diese nicht funktioniert. Um dem vorzubeugen, sollten Sie eine entsprechende Warnung oder eine [Onboarding-Seite](https://extensionworkshop.com/documentation/develop/onboard-upboard-offboard-users/) hinzufügen, um die Benutzer von `addons.mozilla.org` wegzuführen.

Der Satz von Domains kann durch Unternehmensrichtlinien weiter eingeschränkt werden: Firefox erkennt die `restricted_domains`-Richtlinie wie in [ExtensionSettings in mozilla/policy-templates](https://github.com/mozilla/policy-templates/blob/master/README.md#extensionsettings) dokumentiert. Die `runtime_blocked_hosts`-Richtlinie von Chrome ist in [Configure ExtensionSettings policy](https://support.google.com/chrome/a/answer/9867568) dokumentiert.

### Limitierungen

Standardmäßig werden Inhalts-Skripte nicht auf `about:blank`, `about:srcdoc`, `data:` und `blob:` Seiten ausgeführt. Um ihre Ausführung zu ermöglichen, verwenden Sie die [`match_origin_as_fallback`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#match_origin_as_fallback)-Option im `content_scripts`-Manifest-Schlüssel oder die [`matchOriginAsFallback`](/de/docs/Mozilla/Add-ons/WebExtensions/API/scripting/RegisteredContentScript#matchoriginasfallback)-Option in der `scripting`-API.

Erweiterungen können keine Inhalts-Skripte in privilegierte Browser-UI-Seiten (wie `about:debugging`, `about:addons`, Leseansicht, Quellansicht oder den PDF-Viewer) oder [Erweiterungsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) injizieren.

Wenn eine Erweiterung Code in einer Erweiterungsseite dynamisch ausführen möchte, kann sie ein Skript in die Seite einfügen. Dieses Skript enthält den auszuführenden Code und registriert einen {{WebExtAPIRef("runtime.onMessage")}}-Listener, der einen Weg zur Ausführung des Codes implementiert. Die Erweiterung kann dann eine Nachricht an den Listener senden, um die Ausführung des Codes auszulösen.

## Inhalts-Skript-Umgebung

### DOM-Zugriff

Inhalts-Skripte können auf das DOM der Seite zugreifen und es ändern, genau wie normale Seiten-Skripte dies können. Sie können auch alle Änderungen sehen, die von Seiten-Skripten am DOM vorgenommen wurden.

Inhalts-Skripte erhalten jedoch eine "saubere" Ansicht des DOMs. Das bedeutet:

- Inhalts-Skripte können keine JavaScript-Variablen sehen, die von Seiten-Skripten definiert wurden.
- Wenn ein Seiten-Skript eine integrierte DOM-Eigenschaft neu definiert, sieht das Inhalts-Skript die ursprüngliche Version der Eigenschaft, nicht die neu definierte Version.

Wie bei ["Content script environment" bei Chrome-Inkompatibilitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#content_script_environment) angegeben, unterscheidet sich das Verhalten zwischen Browsern:

- In Firefox wird dieses Verhalten als [Xray vision](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts#xray_vision_in_firefox) bezeichnet.
  Ein Inhalts-Skript kann auf JavaScript-Objekte aus seinem globalen Umfang oder Xray-umwickelte Versionen von der Webseite stoßen. In regulären Webseiten ist {{jsxref("globalThis")}} identisch mit `window`, aber in Firefox-Inhalts-Skripten ist `globalThis` ein eigenes Objekt, das von `window` erbt. Dieser Unterschied macht oft keinen praktischen Unterschied in Bezug auf die Verfügbarkeit globaler APIs. Eine Ausnahme ist, wenn der globale Umfang eine Definition einer Standard-API enthält, die die Definition in `window` überschattet, wie zum Beispiel [`structuredClone` in Inhalts-Skripten](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts#structuredclone).

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

Das Gleiche gilt umgekehrt; Seiten-Skripte können keine JavaScript-Eigenschaften sehen, die von Inhalts-Skripten hinzugefügt wurden.

Das bedeutet, dass Inhalts-Skripte darauf vertrauen können, dass sich DOM-Eigenschaften vorhersehbar verhalten, ohne sich Sorgen machen zu müssen, dass ihre Variablen mit denen des Seiten-Skripts kollidieren.

Eine praktische Konsequenz dieses Verhaltens ist, dass ein Inhalts-Skript keinen Zugriff auf JavaScript-Bibliotheken hat, die von der Seite geladen wurden. Wenn die Seite beispielsweise jQuery enthält, kann das Inhalts-Skript es nicht sehen.

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
> Firefox bietet [cloneInto()](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/cloneInto) und [exportFunction()](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/exportFunction), um es Inhalts-Skripten zu ermöglichen, auf JavaScript-Objekte zuzugreifen, die von Seiten-Skripten erstellt wurden, und ihre JavaScript-Objekte Seiten-Skripten zugänglich zu machen.
>
> Siehe [Teilen von Objekten mit Seiten-Skripten](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts) für weitere Details.

### WebExtension-APIs

Zusätzlich zu den standardmäßigen DOM-APIs können Inhalts-Skripte diese WebExtension-APIs verwenden:

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

Inhalts-Skripte können Anfragen mit den normalen [`window.XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) und [`window.fetch()`](/de/docs/Web/API/Fetch_API) APIs durchführen.

> [!NOTE]
> In Firefox in Manifest V2 erfolgen Anfragen von Inhalts-Skripten (zum Beispiel mit [`fetch()`](/de/docs/Web/API/Fetch_API/Using_Fetch)) im Kontext einer Erweiterung, sodass Sie einen absoluten URL angeben müssen, um auf Seiteninhalte zu verweisen.
>
> In Chrome und Firefox in Manifest V3 erfolgen diese Anfragen im Kontext der Seite, sodass sie an eine relative URL gesendet werden. Zum Beispiel wird `/api` an `https://«current page URL»/api` gesendet.

Inhalts-Skripte erhalten die gleichen bereichsübergreifenden Privilegien wie der Rest der Erweiterung: Wenn die Erweiterung für eine Domain bereichsübergreifenden Zugriff mit dem [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)-Schlüssel in `manifest.json` angefordert hat, dann erhalten auch ihre Inhalts-Skripte Zugriff auf diese Domain.

> [!NOTE]
> Bei Verwendung von Manifest V3 können Inhalts-Skripte bereichsübergreifende Anfragen stellen, wenn der Zielserver sich mithilfe von [CORS](/de/docs/Web/HTTP/Guides/CORS) dazu bereit erklärt; Host-Berechtigungen funktionieren jedoch nicht in Inhalts-Skripten, aber weiterhin auf regulären Erweiterungsseiten.

Dies wird erreicht, indem inhaltsmäßig mächtigere XHR- und Fetch-Instanzen im Inhalts-Skript bereitgestellt werden, was zur Folge hat, dass die [`Origin`](/de/docs/Web/HTTP/Reference/Headers/Origin)- und [`Referer`](/de/docs/Web/HTTP/Reference/Headers/Referer)-Header nicht so gesetzt werden, wie es bei einer Anfrage von der Seite selbst der Fall wäre; dies ist oft vorzuziehen, um zu verhindern, dass die Anfrage ihren bereichsübergreifenden Charakter offenbart.

> [!NOTE]
> In Firefox in Manifest V2 können Erweiterungen, die Anfragen durchführen müssen, die sich verhalten, als wären sie vom Inhalt selbst gesendet worden, `content.XMLHttpRequest` und `content.fetch()` stattdessen verwenden.
>
> Bei bereichsübergreifenden Erweiterungen muss die Anwesenheit dieser Methoden als Feature erkannt werden.
>
> Dies ist in Manifest V3 nicht möglich, da `content.XMLHttpRequest` und `content.fetch()` nicht verfügbar sind.

> [!NOTE]
> In Chrome ab Version 73 und Firefox ab Version 101 bei Verwendung von Manifest V3 unterliegen Inhalts-Skripte denselben [CORS](/de/docs/Web/HTTP/Guides/CORS)-Richtlinien wie die Seite, auf der sie sich befinden. Nur Backend-Skripte haben erhöhte bereichsübergreifende Privilegien. Siehe [Changes to Cross-Origin Requests in Chrome Extension Content Scripts](https://www.chromium.org/Home/chromium-security/extension-content-script-fetches/).

## Kommunikation mit Hintergrund-Skripten

Obwohl Inhalts-Skripte nicht direkt die meisten WebExtension-APIs nutzen können, können sie mit den Hintergrund-Skripten der Erweiterung über die Messaging-APIs kommunizieren und damit indirekt auf alle APIs zugreifen, auf die auch die Hintergrund-Skripte zugreifen können.

Es gibt zwei grundlegende Muster für die Kommunikation zwischen den Hintergrund-Skripten und Inhalts-Skripten:

- Sie können **einmalige Nachrichten** senden (mit einer optionalen Antwort).
- Sie können eine **längerfristige Verbindung zwischen den beiden Seiten einrichten** und diese Verbindung nutzen, um Nachrichten auszutauschen.

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

Zum Beispiel hört hier ein Inhalts-Skript auf Klickereignisse auf der Webseite.

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

Das Hintergrund-Skript hört auf diese Nachrichten und zeigt eine Benachrichtigung mit der [`notifications`](/de/docs/Mozilla/Add-ons/WebExtensions/API/notifications)-API an:

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

(Dieser Beispielcode ist leicht angepasst vom [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n)-Beispiel auf GitHub.)

### Verbindungsgestützte Nachrichtenübertragung

Das Senden einmaliger Nachrichten kann umständlich werden, wenn Sie viele Nachrichten zwischen einem Hintergrund-Skript und einem Inhalts-Skript austauschen. Ein alternatives Muster ist daher, eine längerfristige Verbindung zwischen den beiden Kontexten herzustellen und diese Verbindung zu nutzen, um Nachrichten auszutauschen.

Beide Seiten haben ein [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port)-Objekt, das sie verwenden können, um Nachrichten auszutauschen.

Um die Verbindung zu erstellen:

- Eine Seite hört auf Verbindungen mithilfe von [`runtime.onConnect`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect)
- Die andere Seite ruft auf:
  - [`tabs.connect()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/connect) (wenn sie sich mit einem Inhalts-Skript verbindet)
  - [`runtime.connect()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/connect) (wenn sie sich mit einem Hintergrund-Skript verbindet)

Dies gibt ein [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port)-Objekt zurück.

- Der [`runtime.onConnect`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect)-Listener erhält sein eigenes [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port)-Objekt.

Sobald jede Seite einen Port hat, können beide Seiten:

- Nachrichten mit `runtime.Port.postMessage()` senden
- Nachrichten mit `runtime.Port.onMessage()` empfangen

Zum Beispiel, sofort nachdem es geladen wird, macht das folgende Inhalts-Skript Folgendes:

- Verbindet sich mit dem Hintergrund-Skript
- Speichert den `Port` in einer Variablen `myPort`
- Hört auf Nachrichten auf `myPort` (und protokolliert sie)
- Sendet Nachrichten an das Hintergrund-Skript über `myPort`, wenn der Benutzer auf das Dokument klickt

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

Das dazugehörige Hintergrund-Skript:

- Hört auf Verbindungsversuche vom Inhalts-Skript
- Beim Erhalt eines Verbindungsversuchs:
  - Speichert den Port in einer Variablen namens `portFromCS`
  - Sendet dem Inhalts-Skript eine Nachricht über den Port
  - Beginnt mit dem Hören auf Nachrichten, die über den Port empfangen werden, und protokolliert sie

- Sendet Nachrichten an das Inhalts-Skript, über `portFromCS`, wenn der Benutzer auf die Browser-Aktion der Erweiterung klickt

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

### Auswahl zwischen einmaligen Nachrichten und verbindungsbasierten Nachrichtenübertragungen

Die Wahl zwischen einmaligen Nachrichten und verbindungsbasierter Nachrichtenübertragung hängt davon ab, wie Ihre Erweiterung die Nutzung von Nachrichtenübertragungen nutzt.

Die empfohlenen Best-Practices sind:

- **Verwenden Sie einmalige Nachrichten, wenn…**
  - Nur eine Antwort auf eine Nachricht erwartet wird.
  - Eine kleine Anzahl von Skripten beim Empfang von Nachrichten zuhört ({{WebExtAPIRef("runtime.onMessage")}}-Aufrufe).
- **Verwenden Sie verbindungsbasierte Nachrichtenübertragung, wenn…**
  - Skripte in Sitzungen tätig sind, in denen mehrere Nachrichten ausgetauscht werden.
  - Die Erweiterung über den Fortschritt einer Aufgabe oder bei Unterbrechung einer Aufgabe informiert werden muss oder eine Aufgabe, die mithilfe der Nachrichtenübertragung initiiert wurde, unterbrechen möchte.

## Kommunikation mit der Webseite

Standardmäßig erhalten Inhalts-Skripte keinen Zugriff auf die von Seiten-Skripten erstellten Objekte. Sie können jedoch mit Seiten-Skripten über die DOM-APIs [`window.postMessage`](/de/docs/Web/API/Window/postMessage) und [`window.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) kommunizieren.

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

Für ein vollständiges funktionierendes Beispiel [besuchen Sie die Demo-Seite auf GitHub](https://mdn.github.io/webextensions-examples/content-script-page-script-messaging.html) und folgen Sie den Anweisungen.

> [!WARNING]
> Seien Sie sehr vorsichtig, wenn Sie auf diese Weise mit nicht vertrauenswürdigem Web-Inhalt interagieren! Erweiterungen sind privilegierter Code, der über mächtige Fähigkeiten verfügen kann, und feindliche Webseiten können sie leicht dazu verleiten, sicherheitskritische Funktionen auszuführen.
>
> Um ein triviales Beispiel zu geben, nehmen wir an, der Content-Skript-Code, der die Nachricht empfängt, tut etwas wie das Folgende:
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
> Jetzt kann das Seiten-Skript beliebigen Code mit allen Privilegien des Content-Skripts ausführen.

## Verwendung von `eval()` in Inhalts-Skripten

> [!NOTE]
> `eval()` ist in Manifest V3 nicht verfügbar.

- In Chrome
  - : {{jsxref("Global_Objects/eval", "eval")}} führt immer Code im Kontext des **Inhalts-Skripts** aus, nicht im Kontext der Seite.
- In Firefox
  - : Wenn Sie `eval()` aufrufen, wird der Code im Kontext des **Inhalts-Skripts** ausgeführt.

    Wenn Sie `window.eval()` aufrufen, wird der Code im Kontext der **Seite** ausgeführt.

Zum Beispiel, betrachten Sie ein Inhalts-Skript wie dieses:

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

Dieser Code erstellt lediglich einige Variablen `x` und `y` mithilfe von `window.eval()` und `eval()`, protokolliert ihre Werte und sendet dann eine Nachricht an die Seite.

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

Das Gleiche gilt für [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), [`setInterval()`](/de/docs/Web/API/Window/setInterval) und [`Function()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function).

> [!WARNING]
> Seien Sie sehr vorsichtig, wenn Sie Code im Kontext der Seite ausführen!
>
> Die Umgebung der Seite wird von potenziell bösartigen Webseiten kontrolliert, die Objekte, mit denen Sie interagieren, so umdefinieren können, dass sie sich unerwartet verhalten:
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
> // content-script.js ruft die umdefinierte Version auf
>
> window.eval("console.log(false)");
> ```
