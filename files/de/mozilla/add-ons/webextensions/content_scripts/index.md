---
title: Inhaltsskripte
slug: Mozilla/Add-ons/WebExtensions/Content_scripts
l10n:
  sourceCommit: 9c9be5239fe7fb2907784e8cace339d4910eb103
---

{{AddonSidebar}}

Ein Inhaltsskript ist ein Teil Ihrer Erweiterung, der im Kontext einer Webseite ausgeführt wird. Es kann Seiteninhalte lesen und ändern, indem es die standardmäßigen [Web-APIs](/de/docs/Web/API) verwendet. Das Verhalten von Inhaltsskripten ähnelt dem von Skripten, die Teil einer Website sind, wie solche, die mit dem {{HTMLElement("script")}} Element geladen werden. Inhaltsskripte können jedoch nur dann auf Seiteninhalte zugreifen, wenn [Host-Berechtigungen für die Herkunft der Webseite gewährt wurden](#berechtigungen).

Inhaltsskripte können auf [einen kleinen Teil der WebExtension-APIs](#webextension-apis) zugreifen, sie können jedoch [mit Hintergrundskripten kommunizieren](#kommunikation_mit_hintergrundskripten), um über ein Nachrichtensystem indirekt auf die WebExtension-APIs zuzugreifen. [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts) können auf alle [WebExtension JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) zugreifen, jedoch nicht direkt auf die Inhalte von Webseiten.

> [!NOTE]
> Einige Web-APIs sind auf [sichere Kontexte](/de/docs/Web/Security/Secure_Contexts) beschränkt, was auch auf Inhaltsskripte zutrifft, die in diesen Kontexten ausgeführt werden. Ausgenommen ist [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents), die in Firefox aus Inhaltsskripten in unsicheren Kontexten aufgerufen werden kann.

## Laden von Inhaltsskripten

Sie können ein Inhaltsskript in eine Webseite laden:

1. Zum Installationszeitpunkt, auf Seiten, die URL-Mustern entsprechen.
   - Mit dem Schlüssel [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) in Ihrer `manifest.json` können Sie den Browser veranlassen, ein Inhaltsskript zu laden, wenn der Browser eine Seite lädt, deren URL [einem bestimmten Muster entspricht](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns).
2. Zur Laufzeit, auf Seiten, die URL-Mustern entsprechen.
   - Mit {{WebExtAPIRef("scripting.registerContentScripts()")}} oder (nur in Manifest V2 in Firefox) {{WebExtAPIRef("contentScripts")}} können Sie den Browser veranlassen, ein Inhaltsskript zu laden, wenn der Browser eine Seite lädt, deren URL [einem bestimmten Muster entspricht](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns). (Dies ähnelt Methode 1, _mit dem Unterschied_, dass Sie Inhaltsskripte zur Laufzeit hinzufügen und entfernen können.)
3. Zur Laufzeit, in spezifischen Tabs.
   - Mit {{WebExtAPIRef("scripting.executeScript()")}} oder (nur in Manifest V2) {{WebExtAPIRef("tabs.executeScript()")}} können Sie ein Inhaltsskript in einen spezifischen Tab laden, wann immer Sie möchten. (Beispielsweise in Reaktion auf das Klicken des Nutzers auf eine [Browser-Aktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button).)

Es gibt nur einen globalen Bereich _pro Frame, pro Erweiterung_. Das bedeutet, dass Variablen aus einem Inhaltsskript von allen anderen Inhaltsskripten unabhängig davon, wie das Inhaltsskript geladen wurde, zugreifbar sind.

Mit den Methoden (1) und (2) können Sie nur Skripte in Seiten laden, deren URLs mit einem [Match-Muster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) dargestellt werden können.

Mit Methode (3) können Sie auch Skripte in Seiten laden, die mit Ihrer Erweiterung gepackt sind, jedoch keine Skripte in privilegierte Browserseiten (wie „`about:debugging`“ oder „`about:addons`“) laden.

> **Hinweis:** [Dynamische JS-Modulimporte](/de/docs/Web/JavaScript/Guide/Modules#dynamic_module_loading) funktionieren jetzt in Inhaltsskripten. Für weitere Details siehe [Firefox-Bug 1536094](https://bugzil.la/1536094).
> Nur URLs mit dem _moz-extension_-Schema sind erlaubt, was Daten-URLs ausschließt ([Firefox-Bug 1587336](https://bugzil.la/1587336)).

### Persistenz

Inhaltsskripte, die mit {{WebExtAPIRef("scripting.executeScript()")}} oder (nur in Manifest V2) {{WebExtAPIRef("tabs.executeScript()")}} geladen werden, laufen auf Anfrage und bleiben nicht bestehen.

Inhaltsskripte, die im Manifest-File mit dem Schlüssel [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) definiert sind oder mit der API {{WebExtAPIRef("scripting.registerContentScripts()")}} oder (nur in Manifest V2 in Firefox) {{WebExtAPIRef("contentScripts")}}, bestehen standardmäßig fort. Sie bleiben über Neustarts und Aktualisierungen des Browsers sowie Neustarts der Erweiterung hinweg registriert.

Die {{WebExtAPIRef("scripting.registerContentScripts()")}}-API erlaubt jedoch, das Skript als nicht-persistent zu definieren. Dies kann nützlich sein, wenn Ihre Erweiterung (im Auftrag eines Nutzers) ein Inhaltsskript nur in der aktuellen Browsersitzung aktivieren möchte.

## Berechtigungen, Einschränkungen und Begrenzungen

### Berechtigungen

Registrierte Inhaltsskripte werden nur ausgeführt, wenn der Erweiterung [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die Domain erteilt wurden.

Um Skripte programmgesteuert zu injizieren, benötigt die Erweiterung entweder die [`activeTab`-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions). Um Methoden der {{WebExtAPIRef("scripting")}}-API zu verwenden, ist die `scripting`-Berechtigung erforderlich.

Ab Manifest V3 werden Host-Berechtigungen nicht automatisch zum Installationszeitpunkt gewährt. Nutzer können sich nach der Installation der Erweiterung für oder gegen Host-Berechtigungen entscheiden.

### Eingeschränkte Domains

Sowohl [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) als auch die [`activeTab`-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) haben Ausnahmen für einige Domains. Inhaltsskripte werden daran gehindert, auf diesen Domains ausgeführt zu werden, um beispielsweise den Benutzer davor zu schützen, dass eine Erweiterung über spezielle Seiten die Privilegien eskaliert.

In Firefox umfasst dies diese Domains:

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

Andere Browser haben ähnliche Einschränkungen bezüglich der Webseiten, von denen Erweiterungen installiert werden können. Zum Beispiel ist der Zugriff auf chrome.google.com in Chrome eingeschränkt.

> [!NOTE]
> Da diese Einschränkungen addons.mozilla.org umfassen, kann es passieren, dass Benutzer, die Ihre Erweiterung sofort nach der Installation nutzen möchten, feststellen, dass sie nicht funktioniert. Um dies zu vermeiden, sollten Sie eine entsprechende Warnung oder eine [Onboarding-Seite](https://extensionworkshop.com/documentation/develop/onboard-upboard-offboard-users/) hinzufügen, um Benutzer von `addons.mozilla.org` wegzuführen.

Das Set von Domains kann durch Unternehmensrichtlinien weiter eingeschränkt werden: Firefox erkennt die `restricted_domains`-Richtlinie, wie bei [ExtensionSettings in mozilla/policy-templates](https://github.com/mozilla/policy-templates/blob/master/README.md#extensionsettings) dokumentiert. Chromes `runtime_blocked_hosts`-Richtlinie ist bei [Configure ExtensionSettings policy](https://support.google.com/chrome/a/answer/9867568) dokumentiert.

### Begrenzungen

Ganze Tabs oder Frames können mithilfe des [`data:` URI](/de/docs/Web/URI/Reference/Schemes/data), [`Blob`](/de/docs/Web/API/URL/createObjectURL_static)-Objekte und anderen ähnlichen Techniken geladen werden. Die Unterstützung der Injektion von Inhaltsskripten in solche speziellen Dokumente variiert zwischen den Browsern. Details hierzu finden Sie in dem Firefox [Bug #1411641 Kommentar 41](https://bugzil.la/1411641#c41).

## Umgebung für Inhaltsskripte

### DOM-Zugriff

Inhaltsskripte können auf das DOM der Seite zugreifen und es ändern, genau wie normale Seitenskripte. Sie können auch alle Änderungen sehen, die von Seitenskripten am DOM vorgenommen wurden.

Inhaltsskripte erhalten jedoch eine "saubere" Ansicht des DOM. Das bedeutet:

- Inhaltsskripte können JavaScript-Variablen, die von Seitenskripten definiert wurden, nicht sehen.
- Wenn ein Seitenskript eine eingebaute DOM-Eigenschaft neu definiert, sieht das Inhaltsskript die ursprüngliche Version der Eigenschaft, nicht die neu definierte Version.

Wie bei ["Content script environment" bei Chrome-Inkompatibilitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#content_script_environment) erwähnt, unterscheidet sich das Verhalten zwischen den Browsern:

- In Firefox wird dieses Verhalten [Xray vision](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts#xray_vision_in_firefox) genannt. Inhaltsskripte können entweder JavaScript-Objekte aus ihrem eigenen globalen Bereich oder Xray-umwickelte Versionen von der Webseite begegnen.

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

Das Skript `page-script.js` macht dies:

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

Das Gleiche gilt im Umkehrschluss; Seitenskripte können JavaScript-Eigenschaften, die von Inhaltsskripten hinzugefügt wurden, nicht sehen.

Das bedeutet, dass Inhaltsskripte sich darauf verlassen können, dass DOM-Eigenschaften vorhersehbar funktionieren, ohne sich Sorgen darüber machen zu müssen, dass ihre Variablen mit denen des Seitenskripts kollidieren.

Eine praktische Konsequenz dieses Verhaltens ist, dass ein Inhaltsskript keinen Zugriff auf JavaScript-Bibliotheken hat, die von der Seite geladen wurden. Beispielsweise kann das Inhaltsskript es nicht sehen, wenn die Seite jQuery enthält.

Wenn ein Inhaltsskript eine JavaScript-Bibliothek verwenden muss, sollte die Bibliothek selbst als Inhaltsskript _zusammen mit_ dem Inhaltsskript injiziert werden, das sie verwenden möchte:

```json
"content_scripts": [
  {
    "matches": ["*://*.mozilla.org/*"],
    "js": ["jquery.js", "content-script.js"]
  }
]
```

> [!NOTE]
> Firefox bietet [cloneInto()](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/cloneInto) und [exportFunction()](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/exportFunction), um Inhaltsskripten den Zugriff auf JavaScript-Objekte zu erlauben, die von Seitenskripten erstellt wurden, und ihre JavaScript-Objekte Seitenskripten zugänglich zu machen.
>
> Weitere Informationen finden Sie unter [Teilen von Objekten mit Seitenskripten](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts).

### WebExtension-APIs

Neben den Standard-DOM-APIs können Inhaltsskripte diese WebExtension-APIs verwenden:

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

Inhaltsskripte können Anfragen mithilfe der normalen [`window.XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) und [`window.fetch()`](/de/docs/Web/API/Fetch_API) APIs stellen.

> [!NOTE]
> In Firefox in Manifest V2 erfolgen Anfragen von Inhaltsskripten (zum Beispiel unter Verwendung von [`fetch()`](/de/docs/Web/API/Fetch_API/Using_Fetch)) im Kontext einer Erweiterung, sodass Sie einen absoluten URL angeben müssen, um Seiteninhalte zu referenzieren.
>
> In Chrome und Firefox in Manifest V3 erfolgen diese Anfragen im Kontext der Seite, sodass sie an eine relative URL gesendet werden. Zum Beispiel wird `/api` an `https://«current page URL»/api` gesendet.

Inhaltsskripte erhalten die gleichen bereichsübergreifenden Privilegien wie der Rest der Erweiterung: Wenn die Erweiterung daher den Cross-Domain-Zugriff für eine Domain über den [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) Schlüssel in `manifest.json` angefordert hat, erhalten ihre Inhaltsskripte ebenfalls Zugriff auf diese Domain.

> [!NOTE]
> Bei Verwendung von Manifest V3 können Inhaltsskripte bereichsübergreifende Anfragen stellen, wenn der Zielserver dies über [CORS](/de/docs/Web/HTTP/CORS) zulässt. Host-Berechtigungen funktionieren jedoch nicht in Inhaltsskripten, aber sie funktionieren weiterhin in regulären Erweiterungsseiten.

Dies wird erreicht, indem in den Inhaltsskripten privilegiertere XHR- und Fetch-Instanzen bereitgestellt werden, was zur Folge hat, dass die [`Origin`](/de/docs/Web/HTTP/Headers/Origin) und [`Referer`](/de/docs/Web/HTTP/Headers/Referer) Header nicht so gesetzt werden, wie es bei einer Anforderung von der Seite selbst der Fall wäre; dies ist oft vorzuziehen, um zu verhindern, dass die Anfrage ihre bereichsübergreifende Natur preisgibt.

> [!NOTE]
> In Firefox in Manifest V2 können Erweiterungen, die Anfragen durchführen müssen, die sich so verhalten, als wären sie vom Inhalt selbst gesendet worden, `content.XMLHttpRequest` und `content.fetch()` verwenden.
>
> Für bereichsübergreifende Erweiterungen muss die Anwesenheit dieser Methoden merkmalsbasiert erkannt werden.
>
> Dies ist in Manifest V3 nicht möglich, da `content.XMLHttpRequest` und `content.fetch()` nicht verfügbar sind.

> [!NOTE]
> In Chrome, ab Version 73, und Firefox, ab Version 101 bei Verwendung von Manifest V3, unterliegen Inhaltsskripte der gleichen [CORS](/de/docs/Web/HTTP/CORS) Richtlinie wie die Seite, in der sie ausgeführt werden. Nur Hintergrundskripte haben erweiterte bereichsübergreifende Privilegien. Siehe [Änderungen bei bereichsübergreifenden Anfragen in Chrome Erweiterungs-Inhaltsskripten](https://www.chromium.org/Home/chromium-security/extension-content-script-fetches/).

## Kommunikation mit Hintergrundskripten

Obwohl Inhaltsskripte die meisten der WebExtension-APIs nicht direkt verwenden können, können sie mit den Hintergrundskripten der Erweiterung die Nachrichtenschnittstellen kommunizieren und so indirekt auf dieselben APIs zugreifen, die auch die Hintergrundskripte verwenden können.

Es gibt zwei grundlegende Muster für die Kommunikation zwischen Hintergrundskripten und Inhaltsskripten:

- Sie können **Einzel-Nachrichten** senden (mit einer optionalen Antwort).
- Sie können eine **längere Verbindung zwischen den beiden Seiten** einrichten und diese Verbindung nutzen, um Nachrichten auszutauschen.

### Einzel-Nachrichten

Um Einzel-Nachrichten mit einer optionalen Antwort zu senden, können Sie die folgenden APIs verwenden:

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

Hier ist beispielsweise ein Inhaltsskript, das auf Klick-Ereignisse in der Webseite lauscht.

Wenn der Klick auf einen Link gerichtet war, sendet es eine Nachricht an die Hintergrundseite mit der Ziel-URL:

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

Das Hintergrundskript lauscht auf diese Nachrichten und zeigt eine Benachrichtigung mithilfe der [`notifications`](/de/docs/Mozilla/Add-ons/WebExtensions/API/notifications) API an:

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

(Dieses Beispielskript ist leicht angepasst von dem [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) Beispiel auf GitHub.)

### Verbindungsgestützte Nachrichtenübermittlung

Einzel-Nachrichten können lästig sein, wenn viele Nachrichten zwischen einem Hintergrundskript und einem Inhaltsskript ausgetauscht werden. Ein alternatives Muster besteht darin, eine längerlebige Verbindung zwischen den beiden Kontexten herzustellen und diese Verbindung zu nutzen, um Nachrichten auszutauschen.

Beide Seiten haben ein [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port)-Objekt, mit dem sie Nachrichten austauschen können.

Um die Verbindung herzustellen:

- Eine Seite lauscht auf Verbindungen mithilfe von [`runtime.onConnect`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect)
- Die andere Seite ruft auf:

  - [`tabs.connect()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/connect) (wenn eine Verbindung zu einem Inhaltsskript hergestellt wird)
  - [`runtime.connect()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/connect) (wenn eine Verbindung zu einem Hintergrundskript hergestellt wird)

Dies gibt ein [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port)-Objekt zurück.

- Der [`runtime.onConnect`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect) Listener erhält sein eigenes [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port)-Objekt.

Sobald jede Seite einen Port hat, können die beiden Seiten:

- Nachrichten mit `runtime.Port.postMessage()` senden
- Nachrichten mit `runtime.Port.onMessage()` empfangen

Zum Beispiel, sobald es geladen wird, dieses Inhaltsskript:

- Verbindet sich mit dem Hintergrundskript
- Speichert den `Port` in einer Variablen `myPort`
- Lauscht auf Nachrichten auf `myPort` (und protokolliert diese)
- Sendet Nachrichten an das Hintergrundskript, wenn der Benutzer auf das Dokument klickt

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

- Lauscht auf Verbindungsversuche vom Inhaltsskript
- Bei einem Verbindungsversuch:

  - Speichert den Port in einer Variablen namens `portFromCS`
  - Sendet dem Inhaltsskript eine Nachricht über den Port
  - Beginnt, auf Nachrichten zu lauschen, die über den Port empfangen werden, und protokolliert diese

- Sendet Nachrichten an das Inhaltsskript, unter Verwendung von `portFromCS`, wenn der Benutzer auf die Browser-Schaltfläche der Erweiterung klickt

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

Wenn Sie mehrere Inhaltsskripte gleichzeitig kommunizieren lassen, möchten Sie möglicherweise die Verbindungen zu ihnen in einem Array speichern.

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

### Auswahl zwischen Einzel-Nachrichten und verbindungsbasierter Nachrichtenübermittlung

Die Wahl zwischen Einzel-Nachrichten und verbindungsbasierter Nachrichtenübermittlung hängt davon ab, wie Ihre Erweiterung die Nachrichtenübermittlung nutzen möchte.

Die empfohlenen besten Praktiken sind:

- **Verwenden Sie Einzel-Nachrichten, wenn...**
  - Nur eine Antwort auf eine Nachricht erwartet wird.
  - Eine kleine Anzahl von Skripten lauscht, um Nachrichten zu empfangen ({{WebExtAPIRef("runtime.onMessage")}} Aufrufe).
- **Verwenden Sie verbindungsbasierte Nachrichtenübermittlung, wenn...**
  - Skripte in Sitzungen engagiert sind, in denen mehrere Nachrichten ausgetauscht werden.
  - Die Erweiterung über den Fortschritt einer Aufgabe informiert sein muss oder wissen möchte, ob eine Aufgabe unterbrochen wird oder eine Aufgabe, die mit Nachrichtenübermittlung gestartet wurde, unterbrechen möchte.

## Kommunikation mit der Webseite

Standardmäßig haben Inhaltsskripte keinen Zugriff auf die von Seitenskripten erstellten Objekte. Sie können jedoch mit Seitenskripten über die DOM-APIs [`window.postMessage`](/de/docs/Web/API/Window/postMessage) und [`window.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) kommunizieren.

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

Für ein vollständiges Arbeitsbeispiel besuchen Sie die [Demo-Seite auf GitHub](https://mdn.github.io/webextensions-examples/content-script-page-script-messaging.html) und folgen Sie den Anweisungen.

> [!WARNING]
> Seien Sie sehr vorsichtig, wenn Sie in dieser Weise mit unkontrollierten Webinhalten interagieren! Erweiterungen sind privilegierter Code, der über leistungsstarke Funktionen verfügen kann, und feindselige Webseiten können sie leicht dazu bringen, auf diese Fähigkeiten zuzugreifen.
>
> Um ein triviales Beispiel zu geben, nehmen wir an, der Inhaltsskriptcode, der die Nachricht empfängt, macht so etwas:
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
> Jetzt kann das Seitenskript mit allen Privilegien des Inhaltsskripts beliebigen Code ausführen.

## Verwendung von `eval()` in Inhaltsskripten

> **Hinweis:** `eval()` nicht verfügbar in Manifest V3.

- In Chrome
  - : {{jsxref("Global_Objects/eval", "eval")}} führt Code immer im Kontext des **Inhaltsskripts** aus, nicht im Kontext der Seite.
- In Firefox

  - : Wenn Sie `eval()` aufrufen, wird der Code im Kontext des **Inhaltsskripts** ausgeführt.

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

Dieser Code erstellt nur einige Variablen `x` und `y` mit `window.eval()` und `eval()`, protokolliert ihre Werte und sendet dann eine Nachricht an die Seite.

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

Das Gleiche gilt für [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), [`setInterval()`](/de/docs/Web/API/Window/setInterval) und [`Function()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function).

> [!WARNING]
> Seien Sie sehr vorsichtig, wenn Sie Code im Kontext der Seite ausführen!
>
> Die Umgebung der Seite wird von potenziell böswilligen Webseiten kontrolliert, die die Objekte, mit denen Sie interagieren, unerwartet umdefinieren können:
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
