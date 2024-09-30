---
title: Content scripts
slug: Mozilla/Add-ons/WebExtensions/Content_scripts
l10n:
  sourceCommit: 59810b5b4a4cdf1151c088ff5165a85f4a96f518
---

{{AddonSidebar}}

Ein Inhalts-Skript ist ein Teil Ihrer Erweiterung, der im Kontext einer Webseite ausgeführt wird (im Gegensatz zu Hintergrund-Skripten, die Teil der Erweiterung sind, oder Skripten, die Teil der Website selbst sind, wie z. B. solche, die mit dem {{HTMLElement("script")}}-Element geladen werden).

[Hintergrund-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts) können auf alle [WebExtension-JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) zugreifen, aber sie können nicht direkt auf den Inhalt von Webseiten zugreifen. Wenn Ihre Erweiterung dies tun muss, benötigen Sie Inhalts-Skripte.

Ähnlich wie die von normalen Webseiten geladenen Skripte können Inhalts-Skripte den Inhalt ihrer Seiten mit den Standard-[Web-APIs](/de/docs/Web/API) lesen und ändern. Allerdings können sie dies nur tun, wenn [Host-Berechtigungen für den Ursprung der Webseite erteilt wurden](#berechtigungen).

> [!NOTE] Einige Web-APIs sind auf [sichere Kontexte](/de/docs/Web/Security/Secure_Contexts) beschränkt, was auch für Inhalts-Skripte in diesen Kontexten gilt. Ausgenommen ist [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents), das von Inhalts-Skripten in unsicheren Kontexten in Firefox aufgerufen werden kann.

Inhalts-Skripte können nur auf [eine kleine Teilmenge der WebExtension-APIs](#webextension-apis) zugreifen, aber sie können [mit Hintergrund-Skripten kommunizieren](#kommunikation_mit_hintergrund-skripten) durch ein Nachrichtensystem und dadurch indirekt auf die WebExtension-APIs zugreifen.

## Laden von Inhalts-Skripten

Sie können ein Inhalts-Skript in eine Webseite laden:

1. Zum Installationszeitpunkt, in Seiten, die URL-Mustern entsprechen.
   - Mit dem [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Schlüssel in Ihrer `manifest.json` können Sie den Browser auffordern, ein Inhalts-Skript zu laden, wann immer der Browser eine Seite lädt, deren URL [einem bestimmten Muster entspricht](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns).
2. Zur Laufzeit, in Seiten, die URL-Mustern entsprechen.
   - Mit {{WebExtAPIRef("scripting.registerContentScripts()")}} oder (nur in Manifest V2 in Firefox) {{WebExtAPIRef("contentScripts")}} können Sie den Browser auffordern, ein Inhalts-Skript zu laden, wann immer der Browser eine Seite lädt, deren URL [einem bestimmten Muster entspricht](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns). (Dies ist ähnlich zu Methode 1, _außer_ dass Sie Inhalts-Skripte zur Laufzeit hinzufügen und entfernen können.)
3. Zur Laufzeit, in spezifischen Tabs.
   - Mit {{WebExtAPIRef("scripting.executeScript()")}} oder (nur in Manifest V2) {{WebExtAPIRef("tabs.executeScript()")}} können Sie ein Inhalts-Skript in einen bestimmten Tab laden, wann immer Sie möchten. (Beispielsweise als Reaktion darauf, dass der Benutzer auf eine [Browser-Aktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) klickt.)

Es gibt nur einen globalen Scope _pro Frame, pro Erweiterung_. Das bedeutet, dass Variablen aus einem Inhalts-Skript direkt von einem anderen Inhalts-Skript zugegriffen werden können, unabhängig davon, wie das Inhalts-Skript geladen wurde.

Mit den Methoden (1) und (2) können Sie nur Skripte in Seiten laden, deren URLs mit einem [Match-Muster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) dargestellt werden können.

Mit Methode (3) können Sie auch Skripte in Seiten laden, die mit Ihrer Erweiterung verpackt sind, aber Sie können keine Skripte in privilegierte Browser-Seiten laden (wie "`about:debugging`" oder "`about:addons`").

> **Hinweis:** [Dynamische JS-Modulimporte](/de/docs/Web/JavaScript/Guide/Modules#dynamic_module_loading) funktionieren jetzt in Inhalts-Skripten. Für weitere Details siehe [Firefox-Bug 1536094](https://bugzil.la/1536094).
> Nur URLs mit dem _moz-extension_-Schema sind zulässig, was Daten-URLs ausschließt ([Firefox-Bug 1587336](https://bugzil.la/1587336)).

## Berechtigungen, Einschränkungen und Begrenzungen

### Berechtigungen

Registrierte Inhalts-Skripte werden nur ausgeführt, wenn der Erweiterung [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die Domain erteilt wurden.

Um Skripte programmatisch zu injizieren, benötigt die Erweiterung entweder die [`activeTab`-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions). Die `scripting`-Berechtigung ist erforderlich, um Methoden der {{WebExtAPIRef("scripting")}}-API zu verwenden.

Ab Manifest V3 werden Host-Berechtigungen nicht automatisch bei der Installation gewährt. Benutzer können sich nach der Installation der Erweiterung für oder gegen Host-Berechtigungen entscheiden.

### Beschränkte Domains

Sowohl [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) als auch die [`activeTab`-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) haben Ausnahmen für einige Domains. Inhalts-Skripte werden daran gehindert, auf diesen Domains ausgeführt zu werden, z.B. um den Benutzer davor zu schützen, dass eine Erweiterung über spezielle Seiten Privilegien eskaliert.

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

Andere Browser haben ähnliche Einschränkungen bezüglich der Websites, von denen Erweiterungen installiert werden können. Zum Beispiel ist der Zugriff auf chrome.google.com in Chrome eingeschränkt.

> [!NOTE]
> Da diese Einschränkungen addons.mozilla.org einschließen, können Benutzer, die versuchen, Ihre Erweiterung sofort nach der Installation zu verwenden, feststellen, dass sie nicht funktioniert. Um dies zu vermeiden, sollten Sie eine entsprechende Warnung oder eine [Onboarding-Seite](https://extensionworkshop.com/documentation/develop/onboard-upboard-offboard-users/) hinzufügen, um die Benutzer von `addons.mozilla.org` wegzubewegen.

Der Satz von Domains kann durch Unternehmensrichtlinien weiter eingeschränkt werden: Firefox erkennt die `restricted_domains`-Richtlinie an, wie unter [ExtensionSettings in mozilla/policy-templates](https://github.com/mozilla/policy-templates/blob/master/README.md#extensionsettings) dokumentiert. Chromes `runtime_blocked_hosts`-Richtlinie wird unter [Configure ExtensionSettings policy](https://support.google.com/chrome/a/answer/9867568) dokumentiert.

### Begrenzungen

Ganze Tabs oder Frames können mit [`data:` URI](/de/docs/Web/URI/Schemes/data), [`Blob`](/de/docs/Web/API/URL/createObjectURL_static)-Objekten und anderen ähnlichen Techniken geladen werden. Die Unterstützung der Injektion von Inhalts-Skripten in solche speziellen Dokumente variiert zwischen Browsern, siehe den Firefox [Bug #1411641 Kommentar 41](https://bugzil.la/1411641#c41) für einige Details.

## Inhalts-Skript-Umgebung

### DOM-Zugriff

Inhalts-Skripte können, ähnlich wie normale Seiten-Skripte, auf den DOM der Seite zugreifen und ihn modifizieren. Sie können auch alle Änderungen sehen, die von Seiten-Skripten am DOM vorgenommen wurden.

Inhalts-Skripte erhalten jedoch eine "saubere" Ansicht des DOMs. Das bedeutet:

- Inhalts-Skripte können JavaScript-Variablen nicht sehen, die von Seiten-Skripten definiert wurden.
- Wenn ein Seiten-Skript eine eingebaute DOM-Eigenschaft neu definiert, sieht das Inhalts-Skript die ursprüngliche Version der Eigenschaft, nicht die neu definierte Version.

Wie unter ["Content script environment" at Chrome incompatibilities](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#content_script_environment) vermerkt, unterscheidet sich das Verhalten zwischen den Browsern:

- In Firefox wird dieses Verhalten [Xray vision](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts#xray_vision_in_firefox) genannt. Inhalts-Skripte können JavaScript-Objekte aus ihrem eigenen globalen Scope oder Xray-umwickelte Versionen von der Webseite finden.

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

Das Gegenteil ist ebenfalls wahr; Seiten-Skripte können JavaScript-Eigenschaften, die von Inhalts-Skripten hinzugefügt wurden, nicht sehen.

Das bedeutet, dass Inhalts-Skripte sich darauf verlassen können, dass DOM-Eigenschaften vorhersagbar verhalten, ohne sich Sorgen machen zu müssen, dass ihre Variablen mit Variablen aus dem Seiten-Skript kollidieren.

Eine praktische Konsequenz dieses Verhaltens ist, dass ein Inhalts-Skript keinen Zugang zu JavaScript-Bibliotheken hat, die von der Seite geladen werden. Wenn die Seite beispielsweise jQuery einbindet, kann das Inhalts-Skript es nicht sehen.

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
> Firefox bietet [cloneInto()](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/cloneInto) und [exportFunction()](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/exportFunction), um es Inhalts-Skripten zu ermöglichen, auf JavaScript-Objekte zuzugreifen, die von Seiten-Skripten erstellt wurden, und ihre JavaScript-Objekte den Seiten-Skripten zur Verfügung zu stellen.
>
> Siehe [Sharing objects with page scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts) für weitere Details.

### WebExtension-APIs

Zusätzlich zu den Standard-DOM-APIs können Inhalts-Skripte die folgenden WebExtension-APIs verwenden:

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

Inhalts-Skripte können Anfragen mit den normalen [`window.XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) und [`window.fetch()`](/de/docs/Web/API/Fetch_API) APIs stellen.

> [!NOTE]
> In Firefox in Manifest V2 erfolgen Anfragen von Inhalts-Skripten (zum Beispiel mit [`fetch()`](/de/docs/Web/API/Fetch_API/Using_Fetch)) im Kontext der Erweiterung, sodass Sie eine absolute URL angeben müssen, um auf Seiteninhalt zu verweisen.
>
> In Chrome und Firefox in Manifest V3 erfolgen diese Anfragen im Kontext der Seite, sodass sie relativ zur URL gesendet werden. Zum Beispiel wird `/api` zu `https://«aktuelle Seiten-URL»/api` gesendet.

Inhalts-Skripte erhalten die gleichen bereichsübergreifenden Privilegien wie der Rest der Erweiterung: Wenn die Erweiterung für eine Domain über den [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)-Schlüssel in `manifest.json` bereichsübergreifenden Zugriff angefordert hat, erhalten ihre Inhalts-Skripte ebenfalls Zugriff auf diese Domain.

> [!NOTE]
> Bei Verwendung von Manifest V3 können Inhalts-Skripte bereichsübergreifende Anfragen ausführen, wenn der Zielserver dies mit [CORS](/de/docs/Web/HTTP/CORS) ermöglicht; allerdings funktionieren Host-Berechtigungen nicht in Inhalts-Skripten, sondern weiterhin auf regulären Erweiterungsseiten.

Dies wird erreicht, indem privilegiertere XHR- und Fetch-Instanzen im Inhalts-Skript bereitgestellt werden, was den Nebeneffekt hat, dass die [`Origin`](/de/docs/Web/HTTP/Headers/Origin)- und [`Referer`](/de/docs/Web/HTTP/Headers/Referer)-Header nicht gesetzt werden, wie es bei einer Anfrage von der Seite selbst der Fall wäre; dies wird häufig bevorzugt, um zu verhindern, dass die Anfrage ihren bereichsübergreifenden Charakter offenbart.

> [!NOTE]
> In Firefox in Manifest V2 können Erweiterungen, die Anfragen durchführen müssen, die sich so verhalten, als ob sie von dem Inhalt selbst gesendet wurden, `content.XMLHttpRequest` und `content.fetch()` verwenden.
>
> Für browserübergreifende Erweiterungen muss die Präsenz dieser Methoden durch Feature-Erkennung überprüft werden.
>
> Dies ist in Manifest V3 nicht möglich, da `content.XMLHttpRequest` und `content.fetch()` nicht verfügbar sind.

> [!NOTE]
> In Chrome, ab Version 73, und in Firefox, ab Version 101, wenn Manifest V3 verwendet wird, unterliegen Inhalts-Skripte denselben [CORS](/de/docs/Web/HTTP/CORS)-Richtlinien wie die Seite, auf der sie ausgeführt werden. Nur Backend-Skripte haben erhöhte bereichsübergreifende Privilegien. Siehe [Changes to Cross-Origin Requests in Chrome Extension Content Scripts](https://www.chromium.org/Home/chromium-security/extension-content-script-fetches/).

## Kommunikation mit Hintergrund-Skripten

Obwohl Inhalts-Skripte die meisten der WebExtension-APIs nicht direkt verwenden können, können sie über die Messaging-APIs mit den Hintergrund-Skripten der Erweiterung kommunizieren und daher indirekt auf alle gleichen APIs zugreifen, die die Hintergrund-Skripte können.

Es gibt zwei grundlegende Muster für die Kommunikation zwischen den Hintergrund-Skripten und Inhalts-Skripten:

- Sie können **Einzelmeldungen** senden (mit einer optionalen Antwort).
- Sie können eine **längerlebige Verbindung zwischen den beiden Seiten** einrichten und diese Verbindung zum Austausch von Nachrichten verwenden.

### Einzelmeldungen

Um Einzelmeldungen zu senden, mit einer optionalen Antwort, können Sie die folgenden APIs verwenden:

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

Zum Beispiel hier ist ein Inhalts-Skript, das auf Klickereignisse auf der Webseite lauscht.

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

Das Hintergrund-Skript lauscht auf diese Nachrichten und zeigt eine Benachrichtigung mit der [`notifications`](/de/docs/Mozilla/Add-ons/WebExtensions/API/notifications)-API an:

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

(Dieser Beispielcode ist leicht adaptiert von dem [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) Beispiel auf GitHub.)

### Verbindungsbasierte Nachrichtenübermittlung

Einzelmeldungen zu senden kann mühsam werden, wenn Sie viele Nachrichten zwischen einem Hintergrund-Skript und einem Inhalts-Skript austauschen. Ein alternatives Muster ist es daher, eine längerlebige Verbindung zwischen den beiden Kontexten herzustellen und diese Verbindung zum Austausch von Nachrichten zu verwenden.

Beide Seiten haben ein [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port)-Objekt, das sie verwenden können, um Nachrichten auszutauschen.

Um die Verbindung herzustellen:

- Eine Seite lauscht auf Verbindungen mit [`runtime.onConnect`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect)
- Die andere Seite ruft auf:

  - [`tabs.connect()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/connect) (wenn sie sich mit einem Inhalts-Skript verbindet)
  - [`runtime.connect()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/connect) (wenn sie sich mit einem Hintergrund-Skript verbindet)

Dies gibt ein [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port)-Objekt zurück.

- Der [`runtime.onConnect`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect)-Listener erhält sein eigenes [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port)-Objekt übergeben.

Sobald jede Seite einen Port hat, können die beiden Seiten:

- Nachrichten mit `runtime.Port.postMessage()` senden
- Nachrichten mit `runtime.Port.onMessage()` empfangen

Beispielsweise verbindet sich das folgende Inhalts-Skript:

- Mit dem Hintergrund-Skript
- Speichert den `Port` in einer Variablen `myPort`
- Lauscht auf Nachrichten auf `myPort` (und protokolliert sie)
- Sendet Nachrichten an das Hintergrund-Skript, wenn der Benutzer auf das Dokument klickt

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
- Bei einem Verbindungsversuch:

  - Speichert den Port in einer Variablen namens `portFromCS`
  - Sendet dem Inhalts-Skript eine Nachricht über den Port
  - Beginnt, auf empfangene Nachrichten über den Port zu lauschen, und protokolliert sie

- Sendet Nachrichten an das Inhalts-Skript, unter Verwendung von `portFromCS`, wenn der Benutzer auf die Browseraktion der Erweiterung klickt

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

Wenn Sie mehrere Inhalts-Skripte gleichzeitig kommunizieren lassen, möchten Sie möglicherweise die Verbindungen zu ihnen in einem Array speichern.

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

### Auswahl zwischen Einzelmeldungen und verbindungsbasierter Nachrichtenübermittlung

Die Wahl zwischen Einzel- und verbindungsbasierter Nachrichtenübermittlung hängt davon ab, wie Ihre Erweiterung Nachrichtenübermittlung nutzen möchte.

Die empfohlenen bewährten Verfahren sind:

- **Verwenden Sie Einzelmeldungen, wenn…**
  - Nur eine Antwort auf eine Nachricht erwartet wird.
  - Eine kleine Anzahl von Skripten Nachrichten empfängt ({{WebExtAPIRef("runtime.onMessage")}} Aufrufe).
- **Verwenden Sie verbindungsbasierte Nachrichtenübermittlung, wenn…**
  - Skripte an Sitzungen teilnehmen, in denen mehrere Nachrichten ausgetauscht werden.
  - Die Erweiterung den Fortschritt einer Aufgabe wissen oder erfahren möchte, wenn eine Aufgabe unterbrochen wird oder eine Aufgabe, die durch Nachrichtenübermittlung initiiert wurde, unterbrechen möchte.

## Kommunikation mit der Webseite

Standardmäßig haben Inhalts-Skripte keinen Zugriff auf die von Seiten-Skripten erstellten Objekte. Sie können jedoch mit Seiten-Skripten unter Verwendung der DOM-APIs [`window.postMessage`](/de/docs/Web/API/Window/postMessage) und [`window.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) kommunizieren.

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

Für ein vollständiges funktionierendes Beispiel, [besuchen Sie die Demo-Seite auf GitHub](https://mdn.github.io/webextensions-examples/content-script-page-script-messaging.html) und folgen Sie den Anweisungen.

> [!WARNING]
> Seien Sie sehr vorsichtig, wenn Sie auf diese Weise mit nicht vertrauenswürdigen Webinhalten interagieren! Erweiterungen sind privilegierter Code, der mächtige Fähigkeiten haben kann, und feindliche Webseiten können sie leicht in diese Fähigkeiten austricksen.
>
> Um ein triviales Beispiel zu geben, nehmen wir an, der Inhalts-Skriptcode, der die Nachricht empfängt, macht etwas wie das Folgende:
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

> **Hinweis:** `eval()` nicht verfügbar in Manifest V3.

- In Chrome
  - : {{jsxref("Global_Objects/eval", "eval")}} führt immer Code im Kontext des **Inhalts-Skripts** aus, nicht im Kontext der Seite.
- In Firefox

  - : Wenn Sie `eval()` aufrufen, führt es Code im Kontext des **Inhalts-Skripts** aus.

    Wenn Sie `window.eval()` aufrufen, führt es Code im Kontext der **Seite** aus.

Zum Beispiel dieses Inhalts-Skript:

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

Beim Empfangen der Nachricht protokolliert das Seiten-Skript dieselben Variablen:

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

Dasselbe gilt für [`setTimeout()`](/de/docs/Web/API/setTimeout), [`setInterval()`](/de/docs/Web/API/setInterval) und [`Function()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function).

> [!WARNING]
> Seien Sie sehr vorsichtig, wenn Sie Code im Kontext der Seite ausführen!
>
> Die Umgebung der Seite wird von potenziell bösartigen Webseiten kontrolliert, die Objekte, mit denen Sie interagieren, neu definieren können, um sich unerwartet zu verhalten:
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
