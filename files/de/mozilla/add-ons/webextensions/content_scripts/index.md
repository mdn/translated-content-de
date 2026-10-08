---
title: Content-Skripte
slug: Mozilla/Add-ons/WebExtensions/Content_scripts
l10n:
  sourceCommit: c61fd478259d34aa4fd6ac4cbf9b7d64a78aff43
---

Ein Content-Skript ist ein Teil Ihrer Erweiterung, der im Kontext einer Webseite ausgeführt wird. Es kann Seiteninhalte mithilfe der standardmäßigen [Web-APIs](/de/docs/Web/API) lesen und ändern. Content-Skripte verhalten sich ähnlich wie Skripte, die Teil einer Website sind, etwa solche, die über das Element {{HTMLElement("script")}} geladen werden. Allerdings können Content-Skripte nur dann auf Seiteninhalte zugreifen, wenn [Host-Berechtigungen für den Origin der Webseite erteilt wurden](#berechtigungen).

Content-Skripte können auf [einen kleinen Teil der WebExtension-APIs](#webextension-apis) zugreifen. Über ein Nachrichtensystem können sie jedoch [mit Hintergrundskripten kommunizieren](#mit_hintergrundskripten_kommunizieren) und so indirekt auf die WebExtension-APIs zugreifen. [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts) können auf alle [WebExtension-JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) zugreifen, aber nicht direkt auf die Inhalte von Webseiten.

## Content-Skripte laden

Sie können ein Content-Skript auf folgende Weise in eine Webseite laden:

1. Bei der Installation in Seiten, die URL-Mustern entsprechen.
   - Mit dem Schlüssel [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) in Ihrer `manifest.json` können Sie den Browser anweisen, ein Content-Skript zu laden, wenn er eine Seite lädt, deren URL [einem bestimmten Muster entspricht](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns).
2. Zur Laufzeit in Seiten, die URL-Mustern entsprechen.
   - Mit {{WebExtAPIRef("scripting.registerContentScripts()")}} oder (nur in Manifest V2 unter Firefox) {{WebExtAPIRef("contentScripts")}} können Sie den Browser anweisen, ein Content-Skript zu laden, wenn er eine Seite lädt, deren URL [einem bestimmten Muster entspricht](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns). (Dies ähnelt Methode 1, mit dem _Unterschied_, dass Sie Content-Skripte zur Laufzeit hinzufügen und entfernen können.)
3. Zur Laufzeit in bestimmte Tabs.
   - Mit {{WebExtAPIRef("scripting.executeScript()")}} oder (nur in Manifest V2) {{WebExtAPIRef("tabs.executeScript()")}} können Sie jederzeit ein Content-Skript in einen bestimmten Tab laden. (Zum Beispiel als Reaktion darauf, dass der Benutzer auf eine [Browser-Aktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) klickt.)

Es gibt nur einen globalen Gültigkeitsbereich _pro Frame und Erweiterung_. Das bedeutet, dass andere Content-Skripte auf die Variablen eines Content-Skripts zugreifen können, unabhängig davon, wie das Content-Skript geladen wurde.

> [!NOTE]
> [Dynamische JS-Modulimporte](/de/docs/Web/JavaScript/Guide/Modules#dynamic_module_loading) funktionieren inzwischen in Content-Skripten. Weitere Informationen finden Sie unter [Firefox-Bug 1536094](https://bugzil.la/1536094).
> Zulässig sind nur URLs mit dem Schema _moz-extension_; Daten-URLs sind ausgeschlossen ([Firefox-Bug 1587336](https://bugzil.la/1587336)).

### Persistenz

Content-Skripte, die mit {{WebExtAPIRef("scripting.executeScript()")}} oder (nur in Manifest V2) {{WebExtAPIRef("tabs.executeScript()")}} geladen werden, werden auf Anforderung ausgeführt und bleiben nicht registriert.

Content-Skripte, die im Schlüssel [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) der Manifestdatei oder über die API {{WebExtAPIRef("scripting.registerContentScripts()")}} beziehungsweise (nur in Manifest V2 unter Firefox) {{WebExtAPIRef("contentScripts")}} definiert werden, bleiben standardmäßig registriert. Ihre Registrierung bleibt über Browser-Neustarts, Updates und Neustarts der Erweiterung hinweg bestehen.

Mit der API {{WebExtAPIRef("scripting.registerContentScripts()")}} können Sie ein Skript jedoch als nicht persistent definieren. Das kann beispielsweise nützlich sein, wenn Ihre Erweiterung im Auftrag eines Benutzers ein Content-Skript nur für die aktuelle Browsersitzung aktivieren soll.

## Berechtigungen, Einschränkungen und Beschränkungen

### Berechtigungen

Registrierte Content-Skripte werden nur ausgeführt, wenn der Erweiterung [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die Domain erteilt wurden.

Um Skripte programmatisch einzufügen, benötigt die Erweiterung entweder die [Berechtigung `activeTab`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions). Für die Verwendung von Methoden der API {{WebExtAPIRef("scripting")}} ist die Berechtigung `scripting` erforderlich.

Bei der Installation kann eine Erweiterung Host-Berechtigungen für die Hosts in den `matches`-Listen des Manifest-Schlüssels `content_scripts` anfordern. Benutzer können Host-Berechtigungen nach der Installation der Erweiterung erteilen oder verweigern.

### Eingeschränkte Domains

Sowohl für [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) als auch für die [Berechtigung `activeTab`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) gelten Ausnahmen für einige Domains. Auf diesen Domains wird die Ausführung von Content-Skripten blockiert, beispielsweise um zu verhindern, dass eine Erweiterung über spezielle Seiten ihre Berechtigungen ausweitet.

In Firefox gehören dazu folgende Domains:

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

Andere Browser schränken den Zugriff auf Websites, von denen Erweiterungen installiert werden können, auf ähnliche Weise ein. In Chrome ist beispielsweise der Zugriff auf chrome.google.com eingeschränkt.

> [!NOTE]
> Da diese Einschränkungen auch addons.mozilla.org betreffen, stellen Benutzer, die Ihre Erweiterung unmittelbar nach der Installation verwenden möchten, möglicherweise fest, dass sie nicht funktioniert. Um dies zu vermeiden, sollten Sie einen geeigneten Hinweis oder eine [Einführungsseite](https://extensionworkshop.com/documentation/develop/onboard-upboard-offboard-users/) hinzufügen, die Benutzer von `addons.mozilla.org` wegführt.

Die Menge der Domains kann durch Unternehmensrichtlinien weiter eingeschränkt werden: Firefox erkennt die Richtlinie `restricted_domains`, die unter [ExtensionSettings in mozilla/policy-templates](https://github.com/mozilla/policy-templates/blob/master/README.md#extensionsettings) dokumentiert ist. Die Chrome-Richtlinie `runtime_blocked_hosts` ist unter [ExtensionSettings-Richtlinie konfigurieren](https://support.google.com/chrome/a/answer/9867568) dokumentiert.

### Beschränkungen

Standardmäßig werden Content-Skripte nicht auf Seiten mit `about:blank`, `about:srcdoc`, `data:` oder `blob:` ausgeführt. Um ihre Ausführung dort zu ermöglichen, verwenden Sie die Option [`match_origin_as_fallback`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#match_origin_as_fallback) im Manifest-Schlüssel `content_scripts` oder die Option [`matchOriginAsFallback`](/de/docs/Mozilla/Add-ons/WebExtensions/API/scripting/RegisteredContentScript#matchoriginasfallback) in der API `scripting`.

Erweiterungen können keine Content-Skripte in privilegierte Seiten der Browser-Benutzeroberfläche (etwa `about:debugging`, `about:addons`, die Leseansicht, die Quelltextansicht oder den PDF-Betrachter) oder in [Erweiterungsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) einfügen.

Wenn eine Erweiterung Code dynamisch auf einer Erweiterungsseite ausführen möchte, kann sie ein Skript in die Seite einbinden. Dieses Skript enthält den auszuführenden Code und registriert einen Listener für {{WebExtAPIRef("runtime.onMessage")}}, der eine Möglichkeit zur Ausführung des Codes bereitstellt. Die Erweiterung kann dann eine Nachricht an den Listener senden, um die Ausführung auszulösen.

## Umgebung von Content-Skripten

### DOM-Zugriff

Content-Skripte können wie normale Seitenskripte auf das DOM der Seite zugreifen und es ändern. Sie können auch Änderungen sehen, die Seitenskripte am DOM vorgenommen haben.

Content-Skripte erhalten jedoch eine „unveränderte“ Sicht auf das DOM. Das bedeutet:

- Content-Skripte können keine JavaScript-Variablen sehen, die von Seitenskripten definiert wurden.
- Wenn ein Seitenskript eine integrierte DOM-Eigenschaft neu definiert, sieht das Content-Skript die ursprüngliche Version der Eigenschaft und nicht die neu definierte Version.

Wie unter [„Umgebung von Content-Skripten“ bei den Chrome-Inkompatibilitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#content_script_environment) beschrieben, unterscheidet sich dieses Verhalten zwischen Browsern:

- In Firefox wird dieses Verhalten [Xray Vision](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts#xray_vision_in_firefox) genannt.
  Ein Content-Skript kann auf JavaScript-Objekte aus seinem globalen Gültigkeitsbereich oder auf Xray-umhüllte Versionen von der Webseite treffen. Auf gewöhnlichen Webseiten ist {{jsxref("globalThis")}} mit `window` identisch. In Content-Skripten von Firefox ist `globalThis` hingegen ein eigenes Objekt, das von `window` erbt. Für die Verfügbarkeit globaler APIs hat dieser Unterschied oft keine praktischen Auswirkungen. Eine Ausnahme besteht, wenn der globale Gültigkeitsbereich eine Standard-API definiert, deren Definition die in `window` verdeckt, wie etwa [`structuredClone` in Content-Skripten](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts#structuredclone).

- In Chrome wird dieses Verhalten durch eine [isolierte Umgebung](https://chromium.googlesource.com/chromium/src/+/master/third_party/blink/renderer/bindings/core/v8/V8BindingDesign.md#world) durchgesetzt, die einen grundlegend anderen Ansatz verwendet.

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

Das Skript `page-script.js` tut Folgendes:

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

Nun fügt eine Erweiterung ein Content-Skript in die Seite ein:

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

Umgekehrt gilt dasselbe: Seitenskripte können von Content-Skripten hinzugefügte JavaScript-Eigenschaften nicht sehen.

Das bedeutet, dass Content-Skripte sich darauf verlassen können, dass sich DOM-Eigenschaften vorhersehbar verhalten, ohne Konflikte zwischen ihren Variablen und denen des Seitenskripts befürchten zu müssen.

Eine praktische Folge dieses Verhaltens ist, dass ein Content-Skript keinen Zugriff auf JavaScript-Bibliotheken hat, die von der Seite geladen wurden. Wenn die Seite beispielsweise jQuery einbindet, kann das Content-Skript nicht darauf zugreifen.

Wenn ein Content-Skript eine JavaScript-Bibliothek verwenden muss, sollte die Bibliothek selbst als Content-Skript _zusammen mit_ dem Content-Skript eingefügt werden, das sie verwenden möchte:

```json
"content_scripts": [
  {
    "matches": ["*://*.mozilla.org/*"],
    "js": ["jquery.js", "content-script.js"]
  }
]
```

> [!NOTE]
> Firefox stellt [cloneInto()](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/cloneInto) und [exportFunction()](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/exportFunction) bereit. Damit können Content-Skripte auf JavaScript-Objekte zugreifen, die von Seitenskripten erstellt wurden, und ihre eigenen JavaScript-Objekte für Seitenskripte verfügbar machen.
>
> Weitere Informationen finden Sie unter [Objekte mit Seitenskripten teilen](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts).

### WebExtension-APIs

Zusätzlich zu den standardmäßigen DOM-APIs können Content-Skripte folgende WebExtension-APIs verwenden:

**Aus [`extension`](/de/docs/Mozilla/Add-ons/WebExtensions/API/extension):**

- [`getURL()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/extension/getURL)
- [`inIncognitoContext`](/de/docs/Mozilla/Add-ons/WebExtensions/API/extension/inIncognitoContext)

**Aus [`runtime`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime):**

- [`connect()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/connect)
- {{WebExtAPIRef("runtime.getDocumentId()","getDocumentId()")}}
- {{WebExtAPIRef("runtime.getFrameId()","getFrameId()")}}
- [`getManifest()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/getManifest)
- {{WebExtAPIRef("runtime.getVersion()","getVersion()")}}
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

Content-Skripte können Anfragen mit den üblichen APIs [`window.XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) und [`window.fetch()`](/de/docs/Web/API/Fetch_API) stellen.

> [!NOTE]
> In Firefox mit Manifest V2 erfolgen Anfragen von Content-Skripten (beispielsweise mit [`fetch()`](/de/docs/Web/API/Fetch_API/Using_Fetch)) im Kontext einer Erweiterung. Deshalb müssen Sie eine absolute URL angeben, um auf Seiteninhalte zu verweisen.
>
> In Chrome und Firefox mit Manifest V3 erfolgen diese Anfragen im Kontext der Seite, sodass sie an eine relative URL gestellt werden. Beispielsweise wird `/api` an `https://«current page URL»/api` gesendet.

Content-Skripte erhalten dieselben domainübergreifenden Zugriffsrechte wie die übrige Erweiterung: Wenn die Erweiterung über den Schlüssel [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in `manifest.json` domainübergreifenden Zugriff auf eine Domain angefordert hat, können auch ihre Content-Skripte auf diese Domain zugreifen.

> [!NOTE]
> Bei Verwendung von Manifest V3 können Content-Skripte Cross-Origin-Anfragen stellen, wenn der Zielserver dies über [CORS](/de/docs/Web/HTTP/Guides/CORS) erlaubt. Host-Berechtigungen gelten jedoch nicht für Content-Skripte, wohl aber für reguläre Erweiterungsseiten.

Dies wird erreicht, indem dem Content-Skript privilegiertere XHR- und Fetch-Instanzen bereitgestellt werden. Ein Nebeneffekt ist, dass die Header [`Origin`](/de/docs/Web/HTTP/Reference/Headers/Origin) und [`Referer`](/de/docs/Web/HTTP/Reference/Headers/Referer) nicht so gesetzt werden, wie es bei einer Anfrage von der Seite selbst der Fall wäre. Das ist oft erwünscht, damit aus der Anfrage nicht hervorgeht, dass sie über Origins hinweg erfolgt.

> [!NOTE]
> In Firefox mit Manifest V2 können Erweiterungen, die Anfragen stellen müssen, die sich wie Anfragen des Seiteninhalts selbst verhalten, stattdessen `content.XMLHttpRequest` und `content.fetch()` verwenden.
>
> Bei browserübergreifenden Erweiterungen muss die Verfügbarkeit dieser Methoden durch eine Funktionsprüfung ermittelt werden.
>
> In Manifest V3 ist dies nicht möglich, da `content.XMLHttpRequest` und `content.fetch()` nicht verfügbar sind.

> [!NOTE]
> In Chrome ab Version 73 und in Firefox ab Version 101 bei Verwendung von Manifest V3 unterliegen Content-Skripte derselben [CORS](/de/docs/Web/HTTP/Guides/CORS)-Richtlinie wie die Seite, auf der sie ausgeführt werden. Nur Hintergrundskripte verfügen über erweiterte domainübergreifende Zugriffsrechte. Siehe [Änderungen an Cross-Origin-Anfragen in Content-Skripten von Chrome-Erweiterungen](https://www.chromium.org/Home/chromium-security/extension-content-script-fetches/).

### Sichere Kontexte

Seiten, die über HTTPS oder aus einer anderen vertrauenswürdigen Quelle wie `localhost` geladen werden, stellen einen [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) bereit. Einige Web-APIs, etwa [`crypto.subtle`](/de/docs/Web/API/Crypto/subtle) und [`navigator.geolocation`](/de/docs/Web/API/Navigator/geolocation), sind nur in sicheren Kontexten verfügbar. Die eingeschränkten APIs stellen Informationen oder Funktionen bereit, deren Verwendung auf einer Seite riskant wäre, die ein Angreifer manipulieren könnte.

Content-Skripte werden im Kontext der Seite ausgeführt, in die sie eingefügt werden. Daher gilt die Einschränkung dieser APIs auch für Content-Skripte: Ein Content-Skript, das in einem unsicheren Kontext ausgeführt wird, kann keine Web-API verwenden, die einen sicheren Kontext erfordert, auch wenn der Rest der Erweiterung möglicherweise weiterhin darauf zugreifen kann.

> [!NOTE]
> In Firefox kann die auf sichere Kontexte beschränkte API [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents) von Content-Skripten in unsicheren Kontexten aufgerufen werden.

## Mit Hintergrundskripten kommunizieren

Obwohl Content-Skripte die meisten WebExtension-APIs nicht direkt verwenden können, können sie über die Nachrichten-APIs mit den Hintergrundskripten der Erweiterung kommunizieren. So können sie indirekt auf dieselben APIs zugreifen wie die Hintergrundskripte.

Für die Kommunikation zwischen Hintergrundskripten und Content-Skripten gibt es zwei grundlegende Muster:

- Sie können **einmalige Nachrichten** senden (optional mit einer Antwort).
- Sie können eine **länger bestehende Verbindung zwischen beiden Seiten** herstellen und darüber Nachrichten austauschen.

### Einmalige Nachrichten

Zum Senden einmaliger Nachrichten, optional mit einer Antwort, können Sie die folgenden APIs verwenden:

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

Das folgende Content-Skript überwacht beispielsweise Klickereignisse auf der Webseite.

Wenn auf einen Link geklickt wird, sendet es eine Nachricht mit der Ziel-URL an die Hintergrundseite:

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

Das Hintergrundskript wartet auf diese Nachrichten und zeigt mithilfe der API [`notifications`](/de/docs/Mozilla/Add-ons/WebExtensions/API/notifications) eine Benachrichtigung an:

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

(Dieser Beispielcode wurde leicht vom GitHub-Beispiel [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) angepasst.)

### Verbindungsbasierte Nachrichtenübermittlung

Das Senden einzelner Nachrichten kann umständlich werden, wenn Sie viele Nachrichten zwischen einem Hintergrundskript und einem Content-Skript austauschen. Als Alternative können Sie eine länger bestehende Verbindung zwischen den beiden Kontexten herstellen und darüber Nachrichten austauschen.

Beide Seiten verfügen über ein Objekt vom Typ [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port), mit dem sie Nachrichten austauschen können.

So stellen Sie die Verbindung her:

- Eine Seite wartet mit [`runtime.onConnect`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect) auf Verbindungen.
- Die andere Seite ruft eine der folgenden Methoden auf:
  - [`tabs.connect()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/connect) (wenn die Verbindung zu einem Content-Skript hergestellt wird)
  - [`runtime.connect()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/connect) (wenn die Verbindung zu einem Hintergrundskript hergestellt wird)

Der Aufruf gibt ein Objekt vom Typ [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port) zurück.

- Dem Listener für [`runtime.onConnect`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect) wird ein eigenes Objekt vom Typ [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port) übergeben.

Sobald beide Seiten über einen Port verfügen, können sie:

- mit `runtime.Port.postMessage()` Nachrichten senden;
- mit `runtime.Port.onMessage()` Nachrichten empfangen.

Das folgende Content-Skript führt beispielsweise unmittelbar nach dem Laden diese Schritte aus:

- Es stellt eine Verbindung zum Hintergrundskript her.
- Es speichert den `Port` in einer Variablen namens `myPort`.
- Es wartet auf Nachrichten an `myPort` (und protokolliert sie).
- Es verwendet `myPort`, um Nachrichten an das Hintergrundskript zu senden, wenn der Benutzer auf das Dokument klickt.

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

Das zugehörige Hintergrundskript:

- Wartet auf Verbindungsversuche des Content-Skripts.
- Wenn ein Verbindungsversuch eingeht:
  - speichert es den Port in einer Variablen namens `portFromCS`;
  - sendet es über den Port eine Nachricht an das Content-Skript;
  - beginnt es, auf über den Port eingehende Nachrichten zu warten und sie zu protokollieren.

- Es sendet über `portFromCS` Nachrichten an das Content-Skript, wenn der Benutzer auf die Browser-Aktion der Erweiterung klickt.

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

Wenn mehrere Content-Skripte gleichzeitig kommunizieren, empfiehlt es sich möglicherweise, die Verbindungen zu ihnen in einem Array zu speichern.

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

### Zwischen einmaligen Nachrichten und verbindungsbasierter Nachrichtenübermittlung wählen

Ob Sie einmalige Nachrichten oder verbindungsbasierte Nachrichtenübermittlung verwenden sollten, hängt davon ab, wie Ihre Erweiterung Nachrichten nutzt.

Empfohlen werden folgende Vorgehensweisen:

- **Verwenden Sie einmalige Nachrichten, wenn …**
  - auf eine Nachricht nur eine Antwort erwartet wird;
  - nur wenige Skripte auf eingehende Nachrichten warten (Aufrufe von {{WebExtAPIRef("runtime.onMessage")}}).
- **Verwenden Sie verbindungsbasierte Nachrichtenübermittlung, wenn …**
  - Skripte während einer Sitzung mehrere Nachrichten austauschen;
  - die Erweiterung über den Fortschritt einer Aufgabe oder ihre Unterbrechung informiert sein muss oder eine über Nachrichten gestartete Aufgabe selbst unterbrechen möchte.

## Mit der Webseite kommunizieren

Standardmäßig haben Content-Skripte keinen Zugriff auf Objekte, die von Seitenskripten erstellt wurden. Sie können jedoch über die DOM-APIs [`window.postMessage`](/de/docs/Web/API/Window/postMessage) und [`window.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) mit Seitenskripten kommunizieren.

Beispiel:

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

Ein vollständiges, funktionsfähiges Beispiel finden Sie auf der [Demoseite auf GitHub](https://mdn.github.io/webextensions-examples/content-script-page-script-messaging.html). Folgen Sie dort den Anweisungen.

> [!WARNING]
> Seien Sie sehr vorsichtig, wenn Sie auf diese Weise mit nicht vertrauenswürdigen Webinhalten interagieren! Erweiterungen sind privilegierter Code mit potenziell weitreichenden Möglichkeiten. Bösartige Webseiten können sie leicht dazu verleiten, diese Möglichkeiten zu nutzen.
>
> Ein einfaches Beispiel: Angenommen, der Content-Skript-Code, der die Nachricht empfängt, führt Folgendes aus:
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
> Nun kann das Seitenskript beliebigen Code mit allen Berechtigungen des Content-Skripts ausführen.

## `eval()` in Content-Skripten verwenden

> [!NOTE]
> `eval()` ist in Manifest V3 nicht verfügbar.

- In Chrome
  - : {{jsxref("Global_Objects/eval", "eval")}} führt Code immer im Kontext des **Content-Skripts** aus, nicht im Kontext der Seite.
- In Firefox
  - : Wenn Sie `eval()` aufrufen, wird Code im Kontext des **Content-Skripts** ausgeführt.

    Wenn Sie `window.eval()` aufrufen, wird Code im Kontext der **Seite** ausgeführt.

Betrachten Sie beispielsweise dieses Content-Skript:

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

Dieser Code erstellt mit `window.eval()` und `eval()` die Variablen `x` und `y`, protokolliert ihre Werte und sendet anschließend eine Nachricht an die Seite.

Beim Empfang der Nachricht protokolliert das Seitenskript dieselben Variablen:

```js
window.addEventListener("message", (event) => {
  if (event.source === window && event.data && event.data.message === "check") {
    console.log(`In page script, window.x: ${window.x}`);
    console.log(`In page script, window.y: ${window.y}`);
  }
});
```

In Chrome entsteht eine Ausgabe wie diese:

```plain
In content script, window.x: 1
In content script, window.y: 2
In page script, window.x: undefined
In page script, window.y: undefined
```

In Firefox entsteht eine Ausgabe wie diese:

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
> Die Umgebung der Seite wird von potenziell bösartigen Webseiten kontrolliert. Diese können Objekte, mit denen Sie interagieren, so neu definieren, dass sie sich unerwartet verhalten:
>
> ```js example-bad
> // page.js redefines console.log
>
> let original = console.log;
>
> console.log = () => {
>   original(true);
> };
> ```
>
> ```js example-bad
> // content-script.js calls the redefined version
>
> window.eval("console.log(false)");
> ```
