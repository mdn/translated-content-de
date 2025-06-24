---
title: Content Scripts
slug: Mozilla/Add-ons/WebExtensions/Content_scripts
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{AddonSidebar}}

Ein Content-Skript ist ein Teil Ihrer Erweiterung, das im Kontext einer Webseite läuft. Es kann Seiteninhalte mithilfe der Standard-[Web-APIs](/de/docs/Web/API) lesen und ändern. Das Verhalten von Content-Skripten ist ähnlich wie das von Skripten, die Teil einer Webseite sind, wie z.B. diejenigen, die über das {{HTMLElement("script")}}-Element geladen werden. Content-Skripte können jedoch nur auf Seiteninhalte zugreifen, wenn [Host-Berechtigungen für den Ursprung der Webseite erteilt wurden](#berechtigungen).

Content-Skripte können auf [einen kleinen Teil der WebExtension-APIs](#webextension-apis) zugreifen, aber sie können [über ein Nachrichtensystem mit Hintergrundskripten kommunizieren](#kommunikation_mit_hintergrundskripten) und dadurch indirekt auf die WebExtension-APIs zugreifen. [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts) können auf alle [WebExtension-JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) zugreifen, aber sie können nicht direkt auf den Inhalt von Webseiten zugreifen.

> [!NOTE]
> Einige Web-APIs sind auf [sichere Kontexte](/de/docs/Web/Security/Secure_Contexts) beschränkt, was auch für Content-Skripte gilt, die in diesen Kontexten laufen. Eine Ausnahme ist [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents), die in Firefox auch aus Content-Skripten in unsicheren Kontexten aufgerufen werden kann.

## Laden von Content-Skripten

Sie können ein Content-Skript in eine Webseite laden:

1. Beim Installieren, in Seiten, die URL-Mustern entsprechen.
   - Mithilfe des Schlüssels [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) in Ihrer `manifest.json` können Sie den Browser bitten, ein Content-Skript zu laden, wann immer der Browser eine Seite lädt, deren URL [einem gegebenen Muster entspricht](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns).
2. Zur Laufzeit, in Seiten, die URL-Mustern entsprechen.
   - Mithilfe von {{WebExtAPIRef("scripting.registerContentScripts()")}} oder (nur in Manifest V2 in Firefox) {{WebExtAPIRef("contentScripts")}} können Sie den Browser bitten, ein Content-Skript zu laden, wann immer der Browser eine Seite lädt, deren URL [einem gegebenen Muster entspricht](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns). (Dies ist ähnlich wie Methode 1, mit der _Ausnahme_, dass Sie Content-Skripte zur Laufzeit hinzufügen und entfernen können.)
3. Zur Laufzeit, in spezifische Tabs.
   - Mithilfe von {{WebExtAPIRef("scripting.executeScript()")}} oder (nur in Manifest V2) {{WebExtAPIRef("tabs.executeScript()")}} können Sie ein Content-Skript jederzeit in einen spezifischen Tab laden. (Zum Beispiel als Antwort auf das Klicken eines Benutzers auf eine [Browser-Aktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button).)

Es gibt nur einen globalen Bereich _pro Frame, pro Erweiterung_. Das bedeutet, dass Variablen aus einem Content-Skript von anderen Content-Skripten unabhängig davon, wie das Content-Skript geladen wurde, zugänglich sind.

Mithilfe der Methoden (1) und (2) können Sie Skripte nur in Seiten laden, deren URLs mit einem [Match-Paket](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) dargestellt werden können.

Mithilfe der Methode (3) können Sie auch Skripte in Seiten laden, die mit Ihrer Erweiterung gepackt sind, aber Sie können keine Skripte in privilegierte Browser-Seiten laden (wie `about:debugging` oder `about:addons`).

> [!NOTE] > [Dynamische JS-Modul-Importe](/de/docs/Web/JavaScript/Guide/Modules#dynamic_module_loading) funktionieren jetzt in Content-Skripten. Für weitere Details siehe [Firefox-Bug 1536094](https://bugzil.la/1536094).
> Es sind nur URLs mit dem _moz-extension_-Schema erlaubt, was Daten-URLs ausschließt ([Firefox-Bug 1587336](https://bugzil.la/1587336)).

### Persistenz

Content-Skripte, die mit {{WebExtAPIRef("scripting.executeScript()")}} oder (nur in Manifest V2) {{WebExtAPIRef("tabs.executeScript()")}} geladen werden, laufen auf Anfrage und sind nicht persistent.

Content-Skripte, die im Manifest über den Schlüssel [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) definiert oder mit der {{WebExtAPIRef("scripting.registerContentScripts()")}}-API oder (nur in Manifest V2 in Firefox) {{WebExtAPIRef("contentScripts")}} API, sind standardmäßig persistent. Sie bleiben über Browser-Neustarts und Updates sowie Erweiterungs-Neustarts hinweg registriert.

Allerdings bietet die {{WebExtAPIRef("scripting.registerContentScripts()")}}-API die Möglichkeit, das Skript als nicht-persistent zu definieren. Dies kann nützlich sein, wenn Ihr Add-on (im Auftrag eines Benutzers) ein Content-Skript nur in der aktuellen Browsersitzung aktivieren möchte.

## Berechtigungen, Einschränkungen und Limitationen

### Berechtigungen

Registrierte Content-Skripte werden nur ausgeführt, wenn der Erweiterung [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die Domain erteilt wurden.

Um Skripte programmgesteuert zu injizieren, benötigt die Erweiterung entweder die [`activeTab`-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions). Die `scripting`-Berechtigung ist erforderlich, um Methoden aus der {{WebExtAPIRef("scripting")}}-API zu verwenden.

Ab Manifest V3 werden Host-Berechtigungen nicht mehr automatisch bei der Installation erteilt. Benutzer können sich nach der Installation der Erweiterung für oder gegen Host-Berechtigungen entscheiden.

### Eingeschränkte Domains

Sowohl [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) als auch die [`activeTab`-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) haben Ausnahmen für einige Domains. Content-Skripte sind daran gehindert, auf diesen Domains ausgeführt zu werden, um z.B. den Nutzer davor zu schützen, dass eine Erweiterung durch spezielle Seiten Privilegien eskaliert.

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

Andere Browser haben ähnliche Einschränkungen hinsichtlich der Websites, von denen Erweiterungen installiert werden können. Zum Beispiel ist in Chrome der Zugriff auf chrome.google.com eingeschränkt.

> [!NOTE]
> Da diese Einschränkungen addons.mozilla.org einschließen, kann es passieren, dass Benutzer, die versuchen, Ihre Erweiterung unmittelbar nach der Installation zu verwenden, feststellen, dass diese nicht funktioniert. Um dies zu vermeiden, sollten Sie eine entsprechende Warnung oder eine [Onboarding-Seite](https://extensionworkshop.com/documentation/develop/onboard-upboard-offboard-users/) hinzufügen, um Benutzer von `addons.mozilla.org` wegzubewegen.

Der Satz von Domains kann durch Unternehmensrichtlinien weiter eingeschränkt werden: Firefox erkennt die `restricted_domains`-Richtlinie an, wie bei [ExtensionSettings in mozilla/policy-templates](https://github.com/mozilla/policy-templates/blob/master/README.md#extensionsettings) dokumentiert. Chromes `runtime_blocked_hosts`-Richtlinie ist unter [Configure ExtensionSettings policy](https://support.google.com/chrome/a/answer/9867568) dokumentiert.

### Limitationen

Ganze Tabs oder Frames können mithilfe von [`data:` URI](/de/docs/Web/URI/Reference/Schemes/data), [`Blob`](/de/docs/Web/API/URL/createObjectURL_static)-Objekten und anderen ähnlichen Techniken geladen werden. Die Unterstützung der Injektion von Content-Skripten in solche speziellen Dokumente variiert zwischen den Browsern, siehe den Firefox [Bug #1411641 Kommentar 41](https://bugzil.la/1411641#c41) für einige Details.

## Umgebung von Content-Skripten

### DOM-Zugriff

Content-Skripte können auf das DOM der Seite zugreifen und es ändern, genau wie normale Seitenskripte. Sie können auch alle Änderungen sehen, die von Seitenskripten am DOM vorgenommen wurden.

Content-Skripte erhalten jedoch eine "saubere" Ansicht des DOMs. Das bedeutet:

- Content-Skripte können keine von Seitenskripten definierten JavaScript-Variablen sehen.
- Wenn ein Seitenskript eine eingebaute DOM-Eigenschaft neu definiert, sieht das Content-Skript die ursprüngliche Version der Eigenschaft, nicht die neu definierte Version.

Wie unter ["Content script environment" bei Chrome-Inkompatibilitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#content_script_environment) erwähnt, unterscheidet sich das Verhalten zwischen den Browsern:

- In Firefox wird dieses Verhalten [Xray-Sicht](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts#xray_vision_in_firefox) genannt.
  Content-Skripte können auf JavaScript-Objekte aus ihrem eigenen globalen Bereich oder Xray-verpackte Versionen aus der Webseite stoßen.

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

Jetzt injiziert eine Erweiterung ein Content-Skript in die Seite:

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

Das Gleiche gilt umgekehrt; Seitenskripte können keine durch Content-Skripte hinzugefügten JavaScript-Eigenschaften sehen.

Das bedeutet, dass Content-Skripte sich darauf verlassen können, dass DOM-Eigenschaften vorhersehbar funktionieren, ohne sich Sorgen machen zu müssen, dass ihre Variablen mit Variablen des Seitenskripts kollidieren.

Eine praktische Konsequenz dieses Verhaltens ist, dass ein Content-Skript keinen Zugriff auf JavaScript-Bibliotheken hat, die von der Seite geladen werden. Wenn die Seite also beispielsweise jQuery enthält, kann das Content-Skript es nicht sehen.

Wenn ein Content-Skript eine JavaScript-Bibliothek verwenden muss, sollte die Bibliothek selbst als Content-Skript _neben_ dem Content-Skript injiziert werden, das sie verwenden möchte:

```json
"content_scripts": [
  {
    "matches": ["*://*.mozilla.org/*"],
    "js": ["jquery.js", "content-script.js"]
  }
]
```

> [!NOTE]
> Firefox stellt [cloneInto()](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/cloneInto) und [exportFunction()](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/exportFunction) zur Verfügung, um Content-Skripten den Zugriff auf von Seitenskripten erstellte JavaScript-Objekte zu ermöglichen und ihre JavaScript-Objekte für Seitenskripte zugänglich zu machen.
>
> Weitere Details finden Sie unter [Teilen von Objekten mit Seitenskripten](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts).

### WebExtension-APIs

Zusätzlich zu den standardmäßigen DOM-APIs können Content-Skripte diese WebExtension-APIs verwenden:

**Aus [`extension`](/de/docs/Mozilla/Add-ons/WebExtensions/API/extension):**

- [`getURL()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/extension/getURL)
- [`inIncognitoContext`](/de/docs/Mozilla/Add-ons/WebExtensions/API/extension/inIncognitoContext)

**Aus [`runtime`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime):**

- [`connect()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/connect)
- [`getManifest()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/getManifest)
- [`getURL()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/getURL)
- [`onConnect`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect)
- [`onMessage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)
- [`sendMessage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage)

**Aus [`i18n`](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n):**

- [`getMessage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n/getMessage)
- [`getAcceptLanguages()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n/getAcceptLanguages)
- [`getUILanguage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n/getUILanguage)
- [`detectLanguage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n/detectLanguage)

**Aus [`menus`](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus):**

- [`getTargetElement`](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/getTargetElement)

**Alles aus:**

- [`storage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage)

### XHR und Fetch

Content-Skripte können Anfragen mit den normalen APIs [`window.XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) und [`window.fetch()`](/de/docs/Web/API/Fetch_API) stellen.

> [!NOTE]
> In Firefox in Manifest V2 erfolgen Anfragen von Content-Skripten (z.B. mit [`fetch()`](/de/docs/Web/API/Fetch_API/Using_Fetch)) im Kontext einer Erweiterung, daher muss eine absolute URL angegeben werden, um auf Seiteninhalte zu verweisen.
>
> In Chrome und Firefox in Manifest V3 erfolgen diese Anfragen im Kontext der Seite, sodass sie zu einer relativen URL gemacht werden. Zum Beispiel wird `/api` an `https://«aktuelle Seiten-URL»/api` gesendet.

Content-Skripte erhalten dieselben Cross-Domain-Berechtigungen wie der Rest der Erweiterung: Wenn die Erweiterung also für eine Domain Cross-Domain-Zugriff unter Verwendung des [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)-Schlüssels in der `manifest.json` angefordert hat, erhalten auch ihre Content-Skripte Zugriff auf diese Domain.

> [!NOTE]
> Bei Verwendung von Manifest V3 können Content-Skripte Cross-Origin-Anfragen durchführen, wenn der Zielserver über [CORS](/de/docs/Web/HTTP/Guides/CORS) optiert; Host-Berechtigungen funktionieren jedoch nicht in Content-Skripten, aber sie funktionieren weiterhin in regulären Erweiterungsseiten.

Dies wird erreicht, indem privilegiertere XHR- und Fetch-Instanzen im Content-Skript verfügbar gemacht werden, was den Nebeneffekt hat, dass die Header [`Origin`](/de/docs/Web/HTTP/Reference/Headers/Origin) und [`Referer`](/de/docs/Web/HTTP/Reference/Headers/Referer) nicht gesetzt werden, wie es eine Anfrage der Seite selbst tun würde; oft ist dies vorzuziehen, um zu verhindern, dass die Anfrage ihre Cross-Origin-Natur offenbart.

> [!NOTE]
> In Firefox in Manifest V2 können Erweiterungen, die Anfragen ausführen müssen, die sich verhalten, als ob sie von dem Inhalt selbst gesendet würden, `content.XMLHttpRequest` und `content.fetch()` verwenden.
>
> Für Browser-übergreifende Erweiterungen müssen diese Methoden Feature-basiert erkannt werden.
>
> Dies ist in Manifest V3 nicht möglich, da `content.XMLHttpRequest` und `content.fetch()` nicht verfügbar sind.

> [!NOTE]
> In Chrome, ab Version 73, und in Firefox, ab Version 101 bei Verwendung von Manifest V3, unterliegen Content-Skripte denselben [CORS](/de/docs/Web/HTTP/Guides/CORS)-Richtlinien wie die Seite, auf der sie ausgeführt werden. Nur Hintergrundskripte haben erhöhte Cross-Domain-Berechtigungen. Siehe [Änderungen bei Cross-Origin-Anfragen in Chrome-Extensions Content-Skripten](https://www.chromium.org/Home/chromium-security/extension-content-script-fetches/).

## Kommunikation mit Hintergrundskripten

Obwohl Content-Skripte nicht direkt die meisten der WebExtension-APIs verwenden können, können sie über die Nachrichten-APIs mit den Hintergrundskripten der Erweiterung kommunizieren und somit indirekt auf alle APIs zugreifen, auf die auch die Hintergrundskripte zugreifen können.

Es gibt zwei grundlegende Muster für die Kommunikation zwischen Hintergrundskripten und Content-Skripten:

- Sie können **einmalige Nachrichten** senden (mit einer optionalen Antwort).
- Sie können eine **dauerhaft bestehende Verbindung zwischen den beiden Seiten** einrichten und diese Verbindung nutzen, um Nachrichten auszutauschen.

### Einmalige Nachrichten

Um einmalige Nachrichten zu senden, mit einer optionalen Antwort, können Sie die folgenden APIs verwenden:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="row"></th>
      <th scope="col">Im Content-Skript</th>
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

Hier ist zum Beispiel ein Content-Skript, das auf Klickevents in der Webseite hört.

Wenn der Klick auf einen Link erfolgt, sendet es eine Nachricht an die Hintergrundseite mit der Ziel-URL:

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

Das Hintergrundskript hört auf diese Nachrichten und zeigt eine Benachrichtigung mithilfe der [`notifications`](/de/docs/Mozilla/Add-ons/WebExtensions/API/notifications)-API an:

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

(Dieser Beispielcode ist leicht aus dem [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n)-Beispiel auf GitHub adaptiert.)

### Verbindungsbasierte Nachrichtenübermittlung

Das Senden einmaliger Nachrichten kann mühsam werden, wenn Sie viele Nachrichten zwischen einem Hintergrundskript und einem Content-Skript austauschen. Ein alternatives Muster besteht darin, eine längerfristige Verbindung zwischen den beiden Kontexten zu etablieren und diese Verbindung zu nutzen, um Nachrichten auszutauschen.

Beide Seiten haben ein [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port)-Objekt, das sie zum Austauschen von Nachrichten verwenden können.

Um die Verbindung herzustellen:

- Eine Seite hört auf Verbindungen mithilfe von [`runtime.onConnect`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect)
- Die andere Seite ruft:
  - [`tabs.connect()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/connect) (wenn Verbindung zu einem Content-Skript) oder
  - [`runtime.connect()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/connect) (wenn Verbindung zu einem Hintergrundskript) auf

Dies gibt ein [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port)-Objekt zurück.

- Der [`runtime.onConnect`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect)-Listener erhält sein eigenes [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port)-Objekt.

Sobald jede Seite einen Port hat, können die beiden Seiten:

- Nachrichten mit `runtime.Port.postMessage()` senden
- Nachrichten mit `runtime.Port.onMessage()` empfangen

Beispielsweise verbindet sich das folgende Content-Skript, sobald es geladen ist:

- Verbindet sich mit dem Hintergrundskript
- Speichert den `Port` in einer Variablen `myPort`
- Wartet auf Nachrichten auf `myPort` (und protokolliert sie)
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

- Hört auf Verbindungsversuche vom Content-Skript
- Wenn es einen Verbindungsversuch erhält:

  - Speichert den Port in einer Variablen namens `portFromCS`
  - Sendet dem Content-Skript eine Nachricht über den Port
  - Beginnt, auf Nachrichten zu hören, die über den Port empfangen werden, und protokolliert sie

- Sendet Nachrichten an das Content-Skript, indem es `portFromCS` verwendet, wenn der Benutzer auf die Browser-Aktion der Erweiterung klickt

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

#### Mehrere Content-Skripte

Wenn Sie mehrere Content-Skripte haben, die gleichzeitig kommunizieren, können Sie Verbindungen zu ihnen in einem Array speichern.

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

### Auswahl zwischen einmaligen Nachrichten und verbindungsbasierter Nachrichtenübermittlung

Die Wahl zwischen einmaligen und verbindungsbasierten Nachrichten hängt davon ab, wie Ihre Erweiterung die Nachrichtenübermittlung nutzen möchte.

Die empfohlenen Best Practices sind:

- **Verwenden Sie einmalige Nachrichten wenn…**
  - Nur eine Antwort auf eine Nachricht erwartet wird.
  - Eine kleine Anzahl von Skripten auf den Empfang von Nachrichten lauscht ({{WebExtAPIRef("runtime.onMessage")}}-Aufrufe).
- **Verwenden Sie verbindungsbasierte Nachrichtenübermittlung wenn…**
  - Skripte in Sitzungen involviert sind, in denen mehrere Nachrichten ausgetauscht werden.
  - Die Erweiterung Informationen über den Fortschritt einer Aufgabe wissen oder wenn eine Aufgabe unterbrochen wird, oder wenn sie eine Aufgabe, die über die Nachrichtenübermittlung initiiert wurde, unterbrechen möchte.

## Kommunikation mit der Webseite

Standardmäßig erhalten Content-Skripte keinen Zugriff auf von Seitenskripten erstellte Objekte. Sie können jedoch mit Seitenskripten mithilfe der DOM-APIs [`window.postMessage`](/de/docs/Web/API/Window/postMessage) und [`window.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) kommunizieren.

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

Für ein vollständiges Arbeitsbeispiel besuchen Sie [die Demo-Seite auf GitHub](https://mdn.github.io/webextensions-examples/content-script-page-script-messaging.html) und folgen Sie den Anweisungen.

> [!WARNING]
> Seien Sie sehr vorsichtig, wenn Sie auf diese Weise mit nicht vertrauenswürdigen Webinhalten interagieren! Erweiterungen sind privilegierter Code mit leistungsstarken Fähigkeiten, und feindliche Webseiten können sie leicht täuschen, diese Fähigkeiten zu nutzen.
>
> Um ein triviales Beispiel zu geben, nehmen wir an, dass der Content-Skript-Code, der die Nachricht empfängt, so etwas tut:
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
> Nun kann das Seitenskript mit allen Privilegien des Content-Skripts beliebigen Code ausführen.

## Verwendung von `eval()` in Content-Skripten

> [!NOTE] > `eval()` ist nicht verfügbar in Manifest V3.

- In Chrome
  - : {{jsxref("Global_Objects/eval", "eval")}} führt immer Code im Kontext des **Content-Skripts** aus, nicht im Kontext der Seite.
- In Firefox

  - : Wenn Sie `eval()` aufrufen, wird Code im Kontext des **Content-Skripts** ausgeführt.

    Wenn Sie `window.eval()` aufrufen, wird Code im Kontext der **Seite** ausgeführt.

Betrachten Sie ein Content-Skript wie dieses:

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

Dieser Code erstellt einfach einige Variablen `x` und `y` mithilfe von `window.eval()` und `eval()`, protokolliert deren Werte und sendet dann Nachrichten an die Seite.

Beim Empfang der Nachricht protokolliert das Seitenskript dieselben Variablen:

```js
window.addEventListener("message", (event) => {
  if (event.source === window && event.data && event.data.message === "check") {
    console.log(`In page script, window.x: ${window.x}`);
    console.log(`In page script, window.y: ${window.y}`);
  }
});
```

In Chrome ergibt das eine Ausgabe wie diese:

```plain
In content script, window.x: 1
In content script, window.y: 2
In page script, window.x: undefined
In page script, window.y: undefined
```

In Firefox ergibt das eine Ausgabe wie diese:

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
> Die Umgebung der Seite wird von potenziell bösartigen Webseiten kontrolliert, die die Objekte, mit denen Sie interagieren, so umdefinieren können, dass sie sich unerwartet verhalten:
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
