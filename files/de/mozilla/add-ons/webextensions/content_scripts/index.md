---
title: Inhalts-Skripte
slug: Mozilla/Add-ons/WebExtensions/Content_scripts
l10n:
  sourceCommit: d1d2fb19fa649240ce6e25c4d79e21d9a5f6de37
---

Ein Inhalts-Skript ist ein Bestandteil Ihrer Erweiterung, das im Kontext einer Webseite ausgeführt wird. Es kann Seiteninhalte lesen und ändern, indem es die standardmäßigen [Web-APIs](/de/docs/Web/API) verwendet. Das Verhalten von Inhalts-Skripten ähnelt dem von Skripten, die Teil einer Website sind, wie solche, die mit dem {{HTMLElement("script")}} Element geladen werden. Inhalts-Skripte können jedoch nur dann auf Seiteninhalte zugreifen, wenn [Host-Berechtigungen für den Ursprung der Webseite erteilt wurden](#berechtigungen).

Inhalts-Skripte haben Zugriff auf [einen kleinen Teil der WebExtension-APIs](#webextension-apis), können jedoch [mit Hintergrund-Skripten kommunizieren](#kommunikation_mit_hintergrund-skripten), indem sie ein Nachrichtensystem benutzen und so indirekt Zugriff auf die WebExtension-APIs erhalten. [Hintergrund-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts) können auf alle [WebExtension JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) zugreifen, jedoch nicht direkt auf den Inhalt von Webseiten zugreifen.

> [!NOTE]
> Einige Web-APIs sind auf [sichere Kontexte](/de/docs/Web/Security/Defenses/Secure_Contexts) beschränkt, was auch für Inhalts-Skripte in diesen Kontexten zutrifft. Eine Ausnahme bildet [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents), die von Inhalts-Skripten in unsicheren Kontexten in Firefox aufgerufen werden kann.

## Laden von Inhalts-Skripten

Sie können ein Inhalts-Skript in eine Webseite laden:

1. Zur Installationszeit, in Seiten, die URL-Mustern entsprechen.
   - Mit dem [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) Schlüssel in Ihrer `manifest.json` können Sie den Browser bitten, ein Inhalts-Skript zu laden, wann immer der Browser eine Seite lädt, deren URL [einem bestimmten Muster entspricht](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns).
2. Zur Laufzeit, in Seiten, die URL-Mustern entsprechen.
   - Mittels {{WebExtAPIRef("scripting.registerContentScripts()")}} oder (nur in Manifest V2 in Firefox) {{WebExtAPIRef("contentScripts")}} können Sie den Browser bitten, ein Inhalts-Skript zu laden, wann immer der Browser eine Seite lädt, deren URL [einem bestimmten Muster entspricht](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns). (Das ist ähnlich wie Methode 1, _außer_ dass Sie Inhalts-Skripte zur Laufzeit hinzufügen und entfernen können.)
3. Zur Laufzeit, in spezifische Tabs.
   - Mit {{WebExtAPIRef("scripting.executeScript()")}} oder (nur in Manifest V2) {{WebExtAPIRef("tabs.executeScript()")}} können Sie ein Inhalts-Skript in einen spezifischen Tab laden, wann immer Sie möchten. (Zum Beispiel, als Reaktion auf das Klicken des Benutzers auf eine [Browser-Aktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button).)

Es gibt nur einen globalen Geltungsbereich _pro Frame, pro Erweiterung_. Dies bedeutet, dass Variablen aus einem Inhalts-Skript von jedem anderen Inhalts-Skript darauf zugegriffen werden können, unabhängig davon, wie das Inhalts-Skript geladen wurde.

> [!NOTE]
> [Dynamische JS-Modulimporte](/de/docs/Web/JavaScript/Guide/Modules#dynamic_module_loading) funktionieren jetzt in Inhalts-Skripten. Für weitere Details siehe [Firefox-Bug 1536094](https://bugzil.la/1536094).
> Nur URLs mit dem _moz-extension_ Schema sind erlaubt, was Daten-URLs ([Firefox-Bug 1587336](https://bugzil.la/1587336)) ausschließt.

### Persistenz

Inhalts-Skripte, die mit {{WebExtAPIRef("scripting.executeScript()")}} oder (nur in Manifest V2) {{WebExtAPIRef("tabs.executeScript()")}} geladen werden, laufen auf Anfrage und bleiben nicht bestehen.

In Inhalts-Skripten, die im Schlüssel [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) der Manifestdatei definiert sind oder mit der {{WebExtAPIRef("scripting.registerContentScripts()")}} oder (nur in Manifest V2 in Firefox) {{WebExtAPIRef("contentScripts")}} API sind standardmäßig persistent. Sie bleiben über Browserneustarts und -updates sowie Erweiterungsneustarts hinweg registriert.

Die {{WebExtAPIRef("scripting.registerContentScripts()")}} API bietet jedoch die Möglichkeit, das Skript als nicht persistent zu definieren. Dies kann nützlich sein, wenn Ihre Erweiterung (im Namen eines Benutzers) ein Inhalts-Skript nur in der aktuellen Browsersitzung aktivieren möchte.

## Berechtigungen, Einschränkungen und Beschränkungen

### Berechtigungen

Registrierte Inhalts-Skripte werden nur ausgeführt, wenn der Erweiterung [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die Domain erteilt wurden.

Um Skripte programmatisch einzufügen, benötigt die Erweiterung entweder die [`activeTab` Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions). Die `scripting` Berechtigung ist erforderlich, um Methoden aus der {{WebExtAPIRef("scripting")}} API zu verwenden.

Bei der Installation kann eine Erweiterung Host-Berechtigungen für Hosts in ihren `matches` Listen des `content_scripts` Manifests anfordern. Benutzer können nach der Installation der Erweiterung die Host-Berechtigungen ein- oder ausschalten.

### Eingeschränkte Domains

Sowohl [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) als auch die [`activeTab` Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) haben Ausnahmen für bestimmte Domains. Inhalts-Skripte werden daran gehindert, auf diesen Domains ausgeführt zu werden, um beispielsweise den Benutzer vor einer Erweiterung zu schützen, die durch spezielle Seiten Privilegien eskaliert.

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

Andere Browser haben ähnliche Beschränkungen für Websites, von denen Erweiterungen installiert werden können. Zum Beispiel ist der Zugriff auf chrome.google.com in Chrome eingeschränkt.

> [!NOTE]
> Da diese Einschränkungen addons.mozilla.org umfassen, kann es sein, dass Benutzer, die versuchen, Ihre Erweiterung direkt nach der Installation zu verwenden, feststellen, dass sie nicht funktioniert. Um dies zu vermeiden, sollten Sie eine angemessene Warnung oder eine [Onboarding-Seite](https://extensionworkshop.com/documentation/develop/onboard-upboard-offboard-users/) hinzufügen, um Benutzer von `addons.mozilla.org` wegzuführen.

Der Satz von Domains kann durch Unternehmensrichtlinien weiter eingeschränkt werden: Firefox erkennt die `restricted_domains` Richtlinie, wie bei [ExtensionSettings in mozilla/policy-templates](https://github.com/mozilla/policy-templates/blob/master/README.md#extensionsettings) dokumentiert. Chromes `runtime_blocked_hosts` Richtlinie ist bei [Configure ExtensionSettings policy](https://support.google.com/chrome/a/answer/9867568) dokumentiert.

### Einschränkungen

Standardmäßig laufen Inhalts-Skripte nicht in `about:blank`, `about:srcdoc`, `data:` und `blob:` Seiten. Um deren Ausführung zu aktivieren, verwenden Sie die [`match_origin_as_fallback`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#match_origin_as_fallback) Option im `content_scripts` Manifest-Schlüssel oder die [`matchOriginAsFallback`](/de/docs/Mozilla/Add-ons/WebExtensions/API/scripting/RegisteredContentScript#matchoriginasfallback) Option in der `scripting` API.

Erweiterungen können keine Inhalts-Skripte in privilegierte Browser-Benutzeroberflächen-Seiten einfügen (wie `about:debugging`, `about:addons`, Lesemodus, Quelltextansicht oder den PDF-Viewer) oder [Erweiterungs-Seiten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages).

Wenn eine Erweiterung zur Laufzeit Code in einer Erweiterungsseite ausführen möchte, kann sie ein Skript in die Seite einfügen. Dieses Skript enthält den auszuführenden Code und registriert einen {{WebExtAPIRef("runtime.onMessage")}} Listener, der eine Möglichkeit zur Ausführung des Codes implementiert. Die Erweiterung kann dann eine Nachricht an den Listener senden, um die Codeausführung auszulösen.

## Inhalts-Skript-Umgebung

### DOM-Zugriff

Inhalts-Skripte können auf das DOM der Seite zugreifen und es manipulieren, genau wie es normale Seiten-Skripte können. Sie können auch alle Änderungen sehen, die von Seiten-Skripten am DOM vorgenommen wurden.

Inhalts-Skripte erhalten jedoch einen "sauberen" Blick auf das DOM. Das bedeutet:

- Inhalts-Skripte können JavaScript-Variablen nicht sehen, die von Seiten-Skripten definiert wurden.
- Wenn ein Seiten-Skript eine eingebaute DOM-Eigenschaft neu definiert, sieht das Inhalts-Skript die ursprüngliche Version der Eigenschaft, nicht die neu definierte Version.

Wie im Abschnitt ["Inhalts-Skript-Umgebung" bei Browser-Inkompatibilitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#content_script_environment) notiert, unterscheidet sich das Verhalten je nach Browser:

- In Firefox wird dieses Verhalten als [Xray vision](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts#xray_vision_in_firefox) bezeichnet.
  Ein Inhalts-Skript kann auf JavaScript-Objekte aus seinem globalen Geltungsbereich oder auf Xray-umwickelte Versionen aus der Webseite stoßen. In regulären Webseiten ist {{jsxref("globalThis")}} identisch mit `window`, aber in Firefox-Inhalts-Skripten ist `globalThis` ein eigenständiges Objekt, das von `window` erbt. Dieser Unterschied hat oft keine praktischen Auswirkungen auf die Verfügbarkeit globaler APIs. Eine Ausnahme besteht, wenn der globale Geltungsbereich eine Definition einer Standard-API enthält, die die Definition in `window` überschattet, wie [`structuredClone` in Inhalts-Skripten](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts#structuredclone).

- In Chrome wird dieses Verhalten durch eine [isolated world](https://chromium.googlesource.com/chromium/src/+/master/third_party/blink/renderer/bindings/core/v8/V8BindingDesign.md#world) durchgesetzt, die einen grundsätzlich anderen Ansatz verwendet.

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

Das Gleiche gilt umgekehrt; Seiten-Skripte können JavaScript-Eigenschaften, die von Inhalts-Skripten hinzugefügt wurden, nicht sehen.

Das bedeutet, dass Inhalts-Skripte sich darauf verlassen können, dass DOM-Eigenschaften vorhersehbar verhalten, ohne sich Sorgen machen zu müssen, dass ihre Variablen mit denen des Seiten-Skripts kollidieren.

Eine praktische Konsequenz dieses Verhaltens ist, dass ein Inhalts-Skript keinen Zugriff auf JavaScript-Bibliotheken hat, die von der Seite geladen wurden. Wenn die Seite zum Beispiel jQuery enthält, kann das Inhalts-Skript es nicht sehen.

Wenn ein Inhalts-Skript eine JavaScript-Bibliothek verwenden muss, sollte die Bibliothek selbst als Inhalts-Skript _zusammen mit_ dem Inhalts-Skript injiziert werden, das sie verwenden möchte:

```json
"content_scripts": [
  {
    "matches": ["*://*.mozilla.org/*"],
    "js": ["jquery.js", "content-script.js"]
  }
]
```

> [!NOTE]
> Firefox bietet [cloneInto()](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/cloneInto) und [exportFunction()](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/exportFunction) an, um Inhalts-Skripten den Zugriff auf von Seiten-Skripten erstellte JavaScript-Objekte zu ermöglichen und ihre JavaScript-Objekte den Seiten-Skripten zugänglich zu machen.
>
> Weitere Details finden Sie unter [Teilen von Objekten mit Seiten-Skripten](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts).

### WebExtension-APIs

Neben den standardmäßigen DOM-APIs können Inhalts-Skripte diese WebExtension-APIs verwenden:

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

Inhalts-Skripte können Anfragen mit den üblichen [`window.XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) und [`window.fetch()`](/de/docs/Web/API/Fetch_API) APIs durchführen.

> [!NOTE]
> In Firefox in Manifest V2 werden Anfragen von Inhalts-Skripten (zum Beispiel mit [`fetch()`](/de/docs/Web/API/Fetch_API/Using_Fetch)) im Kontext einer Erweiterung durchgeführt, daher müssen Sie eine absolute URL angeben, um auf Seiteninhalt zu verweisen.
>
> In Chrome und Firefox in Manifest V3 finden diese Anfragen im Kontext der Seite statt, sodass sie an eine relative URL gestellt werden. Zum Beispiel wird `/api` an `https://«current page URL»/api` gesendet.

Inhalts-Skripte haben die gleichen bereichsübergreifenden Privilegien wie der Rest der Erweiterung: Wenn die Erweiterung über den [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) Schlüssel in `manifest.json` bereichsübergreifenden Zugriff für eine Domain angefordert hat, erhalten ihre Inhalts-Skripte ebenfalls Zugriff auf diese Domain.

> [!NOTE]
> Wenn Sie Manifest V3 verwenden, können Inhalts-Skripte bereichsübergreifende Anfragen stellen, wenn der Zielserver über [CORS](/de/docs/Web/HTTP/Guides/CORS) optiert; jedoch funktionieren Host-Berechtigungen in Inhalts-Skripten nicht, aber sie funktionieren weiterhin in regulären Erweiterungsseiten.

Dies wird erreicht, indem inhalts-skript-exponierte, privilegierte XHR- und Fetch-Instanzen bereitgestellt werden, was den Nebeneffekt hat, dass die [`Origin`](/de/docs/Web/HTTP/Reference/Headers/Origin) und [`Referer`](/de/docs/Web/HTTP/Reference/Headers/Referer) Header nicht gesetzt werden, wie es eine Anfrage von der Seite selbst tun würde; dies ist häufig vorzuziehen, um zu verhindern, dass die Anfrage ihre bereichsübergreifende Natur offenlegt.

> [!NOTE]
> In Firefox in Manifest V2 können Erweiterungen, die Anfragen durchführen müssen, die so verhalten, als ob sie vom Inhalt selbst gesendet wurden, `content.XMLHttpRequest` und `content.fetch()` verwenden.
>
> Für Cross-Browser-Erweiterungen muss die Existenz dieser Methoden funktionsbasiert erkannt werden.
>
> Dies ist in Manifest V3 nicht möglich, da `content.XMLHttpRequest` und `content.fetch()` nicht verfügbar sind.

> [!NOTE]
> In Chrome, beginnend mit Version 73, und Firefox, beginnend mit Version 101, wenn Manifest V3 verwendet wird, unterliegen Inhalts-Skripte derselben [CORS](/de/docs/Web/HTTP/Guides/CORS) Politik wie die Seite, in der sie ausgeführt werden. Nur Hintergrund-Skripte haben erhöhte bereichsübergreifende Privilegien. Siehe [Changes to Cross-Origin Requests in Chrome Extension Content Scripts](https://www.chromium.org/Home/chromium-security/extension-content-script-fetches/).

## Kommunikation mit Hintergrund-Skripten

Obwohl Inhalts-Skripte nicht direkt die meisten WebExtension-APIs nutzen können, können sie mit den Hintergrund-Skripten der Erweiterung über die Messaging-APIs kommunizieren und somit indirekt auf alle dieselben APIs zugreifen, die die Hintergrund-Skripte nutzen können.

Es gibt zwei grundlegende Muster für die Kommunikation zwischen Hintergrund-Skripten und Inhalts-Skripten:

- Sie können **Einmalnachrichten** senden (mit einer optionalen Antwort).
- Sie können eine **längerfristige Verbindung zwischen den beiden Seiten** einrichten und diese Verbindung zum Nachrichtenaustausch verwenden.

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

Zum Beispiel, hier ist ein Inhalts-Skript, das auf Klickereignisse in der Webseite lauscht.

Wenn der Klick auf einen Link erfolgte, sendet es eine Nachricht an die Hintergrundseite mit der Ziel-URL:

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

Das Hintergrund-Skript lauscht auf diese Nachrichten und zeigt eine Benachrichtigung mit der [`notifications`](/de/docs/Mozilla/Add-ons/WebExtensions/API/notifications) API an:

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

Das Senden von Einmalnachrichten kann umständlich werden, wenn viele Nachrichten zwischen einem Hintergrund-Skript und einem Inhalts-Skript ausgetauscht werden. Ein alternatives Muster besteht darin, eine längerfristige Verbindung zwischen den beiden Kontexten aufzubauen und diese Verbindung für den Nachrichtenaustausch zu nutzen.

Beide Seiten haben ein [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port) Objekt, das sie zum Austausch von Nachrichten nutzen können.

Um die Verbindung herzustellen:

- Eine Seite lauscht auf Verbindungen mit [`runtime.onConnect`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect)
- Die andere Seite ruft auf:
  - [`tabs.connect()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/connect) (wenn mit einem Inhalts-Skript verbunden wird)
  - [`runtime.connect()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/connect) (wenn mit einem Hintergrund-Skript verbunden wird)

Dies gibt ein [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port) Objekt zurück.

- Der [`runtime.onConnect`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect) Listener erhält sein eigenes [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port) Objekt übergeben.

Sobald jede Seite einen Port hat, können die beiden Seiten:

- Nachrichten mit `runtime.Port.postMessage()` senden
- Nachrichten mit `runtime.Port.onMessage()` empfangen

Zum Beispiel, sobald es geladen ist, macht das folgende Inhalts-Skript Folgendes:

- Verbindet sich mit dem Hintergrund-Skript
- Speichert den `Port` in der Variable `myPort`
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

- Lauscht auf Verbindungsanfragen vom Inhalts-Skript
- Wenn es eine Verbindungsanfrage erhält:
  - Speichert den Port in einer Variablen namens `portFromCS`
  - Sendet dem Inhalts-Skript eine Nachricht mit dem Port
  - Beginnt, auf empfangene Nachrichten auf dem Port zu lauschen, und protokolliert sie

- Sendet Nachrichten an das Inhalts-Skript, mit `portFromCS`, wenn der Benutzer auf die Browseraktion der Erweiterung klickt

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

### Auswahl zwischen Einmalnachrichten und verbindungsbasierter Nachrichtenübermittlung

Die Wahl zwischen Einmalnachrichten und verbindungsbasierter Nachrichtenübermittlung hängt davon ab, wie Ihre Erweiterung Messaging verwenden möchte.

Die empfohlenen Best Practices sind:

- **Verwenden Sie Einmalnachrichten, wenn…**
  - Nur eine Antwort auf eine Nachricht erwartet wird.
  - Eine kleine Anzahl von Skripten auf den Empfang von Nachrichten lauscht ({{WebExtAPIRef("runtime.onMessage")}} Aufrufe).
- **Verwenden Sie verbindungsbasierte Nachrichtenübermittlung, wenn…**
  - Skripte in Sitzungen eingesetzt werden, bei denen mehrere Nachrichten ausgetauscht werden.
  - Die Erweiterung über den Fortschritt einer Aufgabe informiert werden muss oder ob eine Aufgabe unterbrochen wurde, oder eine über Messaging initiierte Aufgabe unterbrechen möchte.

## Kommunikation mit der Webseite

Standardmäßig haben Inhalts-Skripte keinen Zugriff auf die von Seiten-Skripten erstellten Objekte. Sie können jedoch mit Seiten-Skripten über die DOM APIs [`window.postMessage`](/de/docs/Web/API/Window/postMessage) und [`window.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) kommunizieren.

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

Für ein vollständiges funktionierendes Beispiel besuchen Sie [die Demoseite auf GitHub](https://mdn.github.io/webextensions-examples/content-script-page-script-messaging.html) und folgen Sie den Anweisungen.

> [!WARNING]
> Seien Sie sehr vorsichtig, wenn Sie in dieser Weise mit nicht vertrauenswürdigen Web-Inhalten interagieren! Erweiterungen sind privilegierter Code, der mächtige Fähigkeiten haben kann, und feindliche Webseiten können sie leicht dazu bringen, diese Fähigkeiten auszunutzen.
>
> Um ein triviales Beispiel zu geben, nehmen wir an, dass der Inhalts-Skript-Code, der die Nachricht empfängt, etwa so aussieht:
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
> Nun kann das Seiten-Skript beliebigen Code mit allen Privilegien des Inhalts-Skripts ausführen.

## Verwendung von `eval()` in Inhalts-Skripten

> [!NOTE]
> `eval()` ist nicht in Manifest V3 verfügbar.

- In Chrome
  - : {{jsxref("Global_Objects/eval", "eval")}} führt immer Code im Kontext des **Inhalts-Skripts** aus und nicht im Kontext der Seite.
- In Firefox
  - : Wenn Sie `eval()` aufrufen, wird Code im Kontext des **Inhalts-Skripts** ausgeführt.

    Wenn Sie `window.eval()` aufrufen, wird Code im Kontext der **Seite** ausgeführt.

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

Dieser Code erstellt nur einige Variablen `x` und `y` mit `window.eval()` und `eval()`, protokolliert ihre Werte und sendet dann eine Nachricht an die Seite.

Beim Empfang der Nachricht protokolliert das Seiten-Skript dieselben Variablen:

```js
window.addEventListener("message", (event) => {
  if (event.source === window && event.data && event.data.message === "check") {
    console.log(`In page script, window.x: ${window.x}`);
    console.log(`In page script, window.y: ${window.y}`);
  }
});
```

In Chrome wird eine Ausgabe wie diese erzeugt:

```plain
In content script, window.x: 1
In content script, window.y: 2
In page script, window.x: undefined
In page script, window.y: undefined
```

In Firefox wird eine Ausgabe wie diese erzeugt:

```plain
In content script, window.x: undefined
In content script, window.y: 2
In page script, window.x: 1
In page script, window.y: undefined
```

Das Gleiche gilt für [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), [`setInterval()`](/de/docs/Web/API/Window/setInterval), und [`Function()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function).

> [!WARNING]
> Seien Sie sehr vorsichtig, wenn Sie Code im Kontext der Seite ausführen lassen!
>
> Die Umgebung der Seite wird von potenziell bösartigen Webseiten kontrolliert, die Objekte umdefinieren können, mit denen Sie interagieren, um sich unerwartet zu verhalten:
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
