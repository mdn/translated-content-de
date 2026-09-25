---
title: Content Scripts
slug: Mozilla/Add-ons/WebExtensions/Content_scripts
l10n:
  sourceCommit: 3dad2299b9d045afbcefc2fd5500ed7257ceedda
---

Ein Content Script ist ein Teil Ihrer Erweiterung, der im Kontext einer Webseite ausgeführt wird. Es kann Seiteninhalte mithilfe der standardmäßigen [Web-APIs](/de/docs/Web/API) lesen und verändern. Content Scripts verhalten sich ähnlich wie Scripts, die Teil einer Website sind, etwa solche, die über das Element {{HTMLElement("script")}} geladen werden. Content Scripts können jedoch nur dann auf Seiteninhalte zugreifen, wenn [Host-Berechtigungen für die Herkunft der Webseite erteilt wurden](#berechtigungen).

Content Scripts können auf [einen kleinen Teil der WebExtension-APIs](#webextension-apis) zugreifen. Über ein Nachrichtensystem können sie jedoch [mit Background Scripts kommunizieren](#mit_background_scripts_kommunizieren) und so indirekt auf die WebExtension-APIs zugreifen. [Background Scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts) können auf alle [WebExtension-JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) zugreifen, aber nicht direkt auf den Inhalt von Webseiten.

## Content Scripts laden

Sie können ein Content Script auf folgende Weise in eine Webseite laden:

1. Bei der Installation in Seiten, die bestimmten URL-Mustern entsprechen.
   - Mit dem Schlüssel [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) in Ihrer `manifest.json` können Sie den Browser anweisen, ein Content Script zu laden, sobald er eine Seite lädt, deren URL [einem bestimmten Muster entspricht](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns).
2. Zur Laufzeit in Seiten, die bestimmten URL-Mustern entsprechen.
   - Mit {{WebExtAPIRef("scripting.registerContentScripts()")}} oder (nur mit Manifest V2 in Firefox) {{WebExtAPIRef("contentScripts")}} können Sie den Browser anweisen, ein Content Script zu laden, sobald er eine Seite lädt, deren URL [einem bestimmten Muster entspricht](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns). (Dies ähnelt Methode 1, _allerdings_ können Sie Content Scripts zur Laufzeit hinzufügen und entfernen.)
3. Zur Laufzeit in bestimmte Tabs.
   - Mit {{WebExtAPIRef("scripting.executeScript()")}} oder (nur mit Manifest V2) {{WebExtAPIRef("tabs.executeScript()")}} können Sie jederzeit ein Content Script in einen bestimmten Tab laden. (Beispielsweise, wenn der Benutzer auf eine [Browser-Aktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) klickt.)

Es gibt nur einen globalen Gültigkeitsbereich _pro Frame und pro Erweiterung_. Das bedeutet, dass jedes andere Content Script auf die Variablen eines Content Scripts zugreifen kann, unabhängig davon, wie dieses geladen wurde.

> [!NOTE]
> [Dynamische Importe von JS-Modulen](/de/docs/Web/JavaScript/Guide/Modules#dynamic_module_loading) funktionieren jetzt in Content Scripts. Weitere Informationen finden Sie unter [Firefox-Bug 1536094](https://bugzil.la/1536094).
> Es sind nur URLs mit dem Schema _moz-extension_ zulässig; Daten-URLs sind ausgeschlossen ([Firefox-Bug 1587336](https://bugzil.la/1587336)).

### Persistenz

Content Scripts, die mit {{WebExtAPIRef("scripting.executeScript()")}} oder (nur mit Manifest V2) {{WebExtAPIRef("tabs.executeScript()")}} geladen werden, werden auf Anforderung ausgeführt und bleiben nicht registriert.

Content Scripts, die über den Schlüssel [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) in der Manifestdatei oder mit der API {{WebExtAPIRef("scripting.registerContentScripts()")}} oder (nur mit Manifest V2 in Firefox) {{WebExtAPIRef("contentScripts")}} definiert werden, sind standardmäßig persistent. Sie bleiben über Browser-Neustarts, Updates und Neustarts der Erweiterung hinweg registriert.

Mit der API {{WebExtAPIRef("scripting.registerContentScripts()")}} können Sie ein Script jedoch als nicht persistent definieren. Das kann beispielsweise nützlich sein, wenn Ihre Erweiterung im Auftrag eines Benutzers ein Content Script nur für die aktuelle Browsersitzung aktivieren soll.

## Berechtigungen, Einschränkungen und Grenzen

### Berechtigungen

Registrierte Content Scripts werden nur ausgeführt, wenn der Erweiterung [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die Domain erteilt wurden.

Um Scripts programmgesteuert einzufügen, benötigt die Erweiterung entweder die [Berechtigung `activeTab`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions). Für die Verwendung von Methoden der API {{WebExtAPIRef("scripting")}} ist die Berechtigung `scripting` erforderlich.

Bei der Installation kann eine Erweiterung Host-Berechtigungen für Hosts anfordern, die in den `matches`-Listen des Manifest-Schlüssels `content_scripts` stehen. Benutzer können Host-Berechtigungen nach der Installation der Erweiterung erteilen oder entziehen.

### Eingeschränkte Domains

Sowohl für [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) als auch für die [Berechtigung `activeTab`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) gelten Ausnahmen für einige Domains. Die Ausführung von Content Scripts auf diesen Domains wird blockiert, beispielsweise um Benutzer davor zu schützen, dass eine Erweiterung über spezielle Seiten zusätzliche Berechtigungen erlangt.

In Firefox betrifft dies folgende Domains:

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

Andere Browser schränken den Zugriff auf Websites, über die Erweiterungen installiert werden können, ähnlich ein. In Chrome ist beispielsweise der Zugriff auf chrome.google.com eingeschränkt.

> [!NOTE]
> Da diese Einschränkungen `addons.mozilla.org` umfassen, stellen Benutzer möglicherweise fest, dass Ihre Erweiterung unmittelbar nach der Installation nicht funktioniert. Um dies zu vermeiden, sollten Sie einen geeigneten Hinweis oder eine [Einführungsseite](https://extensionworkshop.com/documentation/develop/onboard-upboard-offboard-users/) hinzufügen, die Benutzer von `addons.mozilla.org` wegführt.

Die Liste der Domains kann durch Unternehmensrichtlinien weiter eingeschränkt werden: Firefox unterstützt die Richtlinie `restricted_domains`, die unter [ExtensionSettings in mozilla/policy-templates](https://github.com/mozilla/policy-templates/blob/master/README.md#extensionsettings) dokumentiert ist. Die Chrome-Richtlinie `runtime_blocked_hosts` ist unter [ExtensionSettings-Richtlinie konfigurieren](https://support.google.com/chrome/a/answer/9867568) dokumentiert.

### Grenzen

Standardmäßig werden Content Scripts nicht auf Seiten mit `about:blank`, `about:srcdoc`, `data:` oder `blob:` ausgeführt. Um ihre Ausführung dort zu ermöglichen, verwenden Sie die Option [`match_origin_as_fallback`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#match_origin_as_fallback) im Manifest-Schlüssel `content_scripts` oder die Option [`matchOriginAsFallback`](/de/docs/Mozilla/Add-ons/WebExtensions/API/scripting/RegisteredContentScript#matchoriginasfallback) in der API `scripting`.

Erweiterungen können keine Content Scripts in privilegierte Seiten der Browseroberfläche (etwa `about:debugging`, `about:addons`, die Leseansicht, die Quelltextansicht oder den PDF-Viewer) oder in [Erweiterungsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) einfügen.

Wenn eine Erweiterung Code dynamisch auf einer Erweiterungsseite ausführen möchte, kann sie ein Script in die Seite einbinden. Dieses Script enthält den auszuführenden Code und registriert einen Listener für {{WebExtAPIRef("runtime.onMessage")}}, der eine Möglichkeit zur Ausführung des Codes bereitstellt. Anschließend kann die Erweiterung eine Nachricht an den Listener senden, um die Ausführung auszulösen.

## Umgebung von Content Scripts

### DOM-Zugriff

Content Scripts können wie gewöhnliche Seiten-Scripts auf das DOM der Seite zugreifen und es verändern. Sie können auch Änderungen sehen, die Seiten-Scripts am DOM vorgenommen haben.

Content Scripts erhalten jedoch eine „saubere“ Sicht auf das DOM. Das bedeutet:

- Content Scripts können JavaScript-Variablen, die von Seiten-Scripts definiert wurden, nicht sehen.
- Wenn ein Seiten-Script eine integrierte DOM-Eigenschaft neu definiert, sieht das Content Script die ursprüngliche Version der Eigenschaft und nicht die neu definierte Version.

Wie unter [„Content-Script-Umgebung“ bei den Chrome-Inkompatibilitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#content_script_environment) beschrieben, unterscheidet sich das Verhalten je nach Browser:

- In Firefox wird dieses Verhalten als [Xray Vision](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts#xray_vision_in_firefox) bezeichnet.
  Ein Content Script kann auf JavaScript-Objekte aus seinem globalen Gültigkeitsbereich oder auf Xray-umhüllte Versionen von der Webseite treffen. Auf gewöhnlichen Webseiten ist {{jsxref("globalThis")}} mit `window` identisch. In Content Scripts von Firefox ist `globalThis` dagegen ein eigenständiges Objekt, das von `window` erbt. Dieser Unterschied wirkt sich auf die Verfügbarkeit globaler APIs häufig nicht praktisch aus. Eine Ausnahme besteht, wenn der globale Gültigkeitsbereich eine Definition einer Standard-API enthält, die die Definition in `window` verdeckt, etwa [`structuredClone` in Content Scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts#structuredclone).

- In Chrome wird dieses Verhalten durch eine [isolierte Umgebung](https://chromium.googlesource.com/chromium/src/+/master/third_party/blink/renderer/bindings/core/v8/V8BindingDesign.md#world) umgesetzt, die einen grundlegend anderen Ansatz verwendet.

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

Das Script `page-script.js` führt Folgendes aus:

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

Nun fügt eine Erweiterung ein Content Script in die Seite ein:

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

Umgekehrt gilt dasselbe: Seiten-Scripts können JavaScript-Eigenschaften, die von Content Scripts hinzugefügt wurden, nicht sehen.

Content Scripts können sich daher darauf verlassen, dass sich DOM-Eigenschaften vorhersehbar verhalten, ohne befürchten zu müssen, dass ihre Variablen mit Variablen des Seiten-Scripts in Konflikt geraten.

Eine praktische Folge dieses Verhaltens ist, dass ein Content Script keinen Zugriff auf JavaScript-Bibliotheken hat, die von der Seite geladen wurden. Wenn die Seite beispielsweise jQuery einbindet, kann das Content Script nicht darauf zugreifen.

Wenn ein Content Script eine JavaScript-Bibliothek benötigt, sollte die Bibliothek selbst _zusammen mit_ dem Content Script, das sie verwenden soll, als Content Script eingefügt werden:

```json
"content_scripts": [
  {
    "matches": ["*://*.mozilla.org/*"],
    "js": ["jquery.js", "content-script.js"]
  }
]
```

> [!NOTE]
> Firefox stellt [cloneInto()](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/cloneInto) und [exportFunction()](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/exportFunction) bereit. Damit können Content Scripts auf JavaScript-Objekte zugreifen, die von Seiten-Scripts erstellt wurden, und ihre eigenen JavaScript-Objekte für Seiten-Scripts verfügbar machen.
>
> Weitere Informationen finden Sie unter [Objekte mit Seiten-Scripts teilen](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts).

### WebExtension-APIs

Zusätzlich zu den standardmäßigen DOM-APIs können Content Scripts diese WebExtension-APIs verwenden:

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

Content Scripts können Anfragen über die gewöhnlichen APIs [`window.XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) und [`window.fetch()`](/de/docs/Web/API/Fetch_API) senden.

> [!NOTE]
> In Firefox mit Manifest V2 erfolgen Anfragen von Content Scripts (beispielsweise über [`fetch()`](/de/docs/Web/API/Fetch_API/Using_Fetch)) im Kontext einer Erweiterung. Deshalb müssen Sie eine absolute URL angeben, um auf Seiteninhalte zu verweisen.
>
> In Chrome und Firefox mit Manifest V3 erfolgen diese Anfragen im Kontext der Seite. Sie werden daher an eine relative URL gesendet. Beispielsweise wird `/api` an `https://«current page URL»/api` gesendet.

Content Scripts erhalten dieselben domainübergreifenden Zugriffsrechte wie der Rest der Erweiterung: Wenn die Erweiterung über den Schlüssel [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in `manifest.json` domainübergreifenden Zugriff für eine Domain angefordert hat, können auch ihre Content Scripts auf diese Domain zugreifen.

> [!NOTE]
> Bei Verwendung von Manifest V3 können Content Scripts Cross-Origin-Anfragen ausführen, wenn der Zielserver dies über [CORS](/de/docs/Web/HTTP/Guides/CORS) zulässt. Host-Berechtigungen gelten jedoch nicht für Content Scripts, wohl aber weiterhin für gewöhnliche Erweiterungsseiten.

Dies wird dadurch erreicht, dass dem Content Script privilegiertere XHR- und Fetch-Instanzen zur Verfügung gestellt werden. Eine Nebenwirkung ist, dass die Header [`Origin`](/de/docs/Web/HTTP/Reference/Headers/Origin) und [`Referer`](/de/docs/Web/HTTP/Reference/Headers/Referer) nicht so gesetzt werden wie bei einer Anfrage von der Seite selbst. Das ist oft erwünscht, damit die Anfrage nicht als Cross-Origin-Anfrage erkennbar ist.

> [!NOTE]
> In Firefox mit Manifest V2 können Erweiterungen, die Anfragen senden müssen, die sich wie Anfragen des Seiteninhalts selbst verhalten, stattdessen `content.XMLHttpRequest` und `content.fetch()` verwenden.
>
> Bei browserübergreifenden Erweiterungen muss die Verfügbarkeit dieser Methoden geprüft werden.
>
> Mit Manifest V3 ist dies nicht möglich, da `content.XMLHttpRequest` und `content.fetch()` nicht verfügbar sind.

> [!NOTE]
> In Chrome ab Version 73 und in Firefox ab Version 101 mit Manifest V3 unterliegen Content Scripts derselben [CORS](/de/docs/Web/HTTP/Guides/CORS)-Richtlinie wie die Seite, auf der sie ausgeführt werden. Nur Backend-Scripts verfügen über erweiterte domainübergreifende Zugriffsrechte. Weitere Informationen finden Sie unter [Änderungen an Cross-Origin-Anfragen in Content Scripts von Chrome-Erweiterungen](https://www.chromium.org/Home/chromium-security/extension-content-script-fetches/).

### Sichere Kontexte

Seiten, die über HTTPS oder aus einer anderen vertrauenswürdigen Quelle wie `localhost` geladen werden, stellen einen [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) bereit. Einige Web-APIs, beispielsweise [`crypto.subtle`](/de/docs/Web/API/Crypto/subtle) und [`navigator.geolocation`](/de/docs/Web/API/Navigator/geolocation), sind nur in sicheren Kontexten verfügbar. Diese eingeschränkten APIs stellen Informationen oder Funktionen bereit, deren Verwendung auf einer Seite riskant wäre, die ein Angreifer manipulieren könnte.

Content Scripts werden im Kontext der Seite ausgeführt, in die sie eingefügt werden. Deshalb gilt die Einschränkung für diese APIs auch für Content Scripts: Ein Content Script, das in einem unsicheren Kontext ausgeführt wird, kann keine Web-API verwenden, die einen sicheren Kontext erfordert, selbst wenn der Rest der Erweiterung weiterhin darauf zugreifen kann.

> [!NOTE]
> In Firefox kann die auf sichere Kontexte beschränkte API [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents) aus Content Scripts in unsicheren Kontexten aufgerufen werden.

## Mit Background Scripts kommunizieren

Obwohl Content Scripts die meisten WebExtension-APIs nicht direkt verwenden können, können sie über die Messaging-APIs mit den Background Scripts der Erweiterung kommunizieren. Dadurch können sie indirekt auf dieselben APIs wie die Background Scripts zugreifen.

Für die Kommunikation zwischen Background Scripts und Content Scripts gibt es zwei grundlegende Muster:

- Sie können **einzelne Nachrichten** senden (optional mit einer Antwort).
- Sie können eine **länger bestehende Verbindung zwischen beiden Seiten** herstellen und darüber Nachrichten austauschen.

### Einzelne Nachrichten

Um einzelne Nachrichten zu senden und optional eine Antwort zu erhalten, können Sie die folgenden APIs verwenden:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="row"></th>
      <th scope="col">Im Content Script</th>
      <th scope="col">Im Background Script</th>
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

Das folgende Content Script beispielsweise überwacht Klickereignisse auf der Webseite.

Wenn auf einen Link geklickt wurde, sendet es eine Nachricht mit der Ziel-URL an das Background Script:

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

Das Background Script überwacht diese Nachrichten und zeigt über die API [`notifications`](/de/docs/Mozilla/Add-ons/WebExtensions/API/notifications) eine Benachrichtigung an:

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

(Dieser Beispielcode wurde leicht an das Beispiel [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) auf GitHub angelehnt.)

### Verbindungsbasierter Nachrichtenaustausch

Das Senden einzelner Nachrichten kann umständlich werden, wenn ein Background Script und ein Content Script viele Nachrichten austauschen. Als Alternative können Sie eine länger bestehende Verbindung zwischen den beiden Kontexten herstellen und darüber Nachrichten austauschen.

Beide Seiten verfügen über ein [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port)-Objekt, mit dem sie Nachrichten austauschen können.

So stellen Sie die Verbindung her:

- Eine Seite überwacht Verbindungsversuche mit [`runtime.onConnect`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect).
- Die andere Seite ruft eine der folgenden Methoden auf:
  - [`tabs.connect()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/connect) (für eine Verbindung mit einem Content Script)
  - [`runtime.connect()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/connect) (für eine Verbindung mit einem Background Script)

Der Aufruf gibt ein [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port)-Objekt zurück.

- Der Listener für [`runtime.onConnect`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect) erhält ein eigenes [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port)-Objekt.

Sobald beide Seiten über einen Port verfügen, können sie:

- Nachrichten mit `runtime.Port.postMessage()` senden.
- Nachrichten mit `runtime.Port.onMessage()` empfangen.

Das folgende Content Script führt beispielsweise unmittelbar nach dem Laden diese Schritte aus:

- Es stellt eine Verbindung zum Background Script her.
- Es speichert den `Port` in der Variablen `myPort`.
- Es überwacht Nachrichten auf `myPort` (und protokolliert sie).
- Es verwendet `myPort`, um Nachrichten an das Background Script zu senden, wenn der Benutzer auf das Dokument klickt.

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

Das zugehörige Background Script:

- Überwacht Verbindungsversuche des Content Scripts.
- Wenn es einen Verbindungsversuch empfängt:
  - Speichert es den Port in einer Variablen namens `portFromCS`.
  - Sendet es über den Port eine Nachricht an das Content Script.
  - Beginnt es, über den Port empfangene Nachrichten zu überwachen, und protokolliert sie.

- Sendet über `portFromCS` Nachrichten an das Content Script, wenn der Benutzer auf die Browser-Aktion der Erweiterung klickt.

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

#### Mehrere Content Scripts

Wenn mehrere Content Scripts gleichzeitig kommunizieren, können Sie die Verbindungen zu ihnen in einem Array speichern.

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

### Zwischen einzelnen Nachrichten und verbindungsbasiertem Nachrichtenaustausch wählen

Ob Sie einzelne Nachrichten oder verbindungsbasierten Nachrichtenaustausch verwenden, hängt davon ab, wie Ihre Erweiterung Nachrichten austauschen soll.

Folgende Vorgehensweisen werden empfohlen:

- **Verwenden Sie einzelne Nachrichten, wenn …**
  - auf eine Nachricht nur eine Antwort erwartet wird.
  - nur wenige Scripts Nachrichten empfangen (Aufrufe von {{WebExtAPIRef("runtime.onMessage")}}).
- **Verwenden Sie verbindungsbasierten Nachrichtenaustausch, wenn …**
  - Scripts über eine Sitzung hinweg mehrere Nachrichten austauschen.
  - die Erweiterung über den Fortschritt oder die Unterbrechung einer Aufgabe informiert werden muss oder eine über Nachrichten gestartete Aufgabe unterbrechen möchte.

## Mit der Webseite kommunizieren

Standardmäßig haben Content Scripts keinen Zugriff auf Objekte, die von Seiten-Scripts erstellt wurden. Sie können jedoch über die DOM-APIs [`window.postMessage`](/de/docs/Web/API/Window/postMessage) und [`window.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) mit Seiten-Scripts kommunizieren.

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
> Seien Sie sehr vorsichtig, wenn Sie auf diese Weise mit nicht vertrauenswürdigen Webinhalten interagieren! Erweiterungen sind privilegierter Code und können über weitreichende Möglichkeiten verfügen. Bösartige Webseiten können sie leicht dazu verleiten, diese Möglichkeiten zu nutzen.
>
> Ein einfaches Beispiel: Angenommen, der Code des Content Scripts, der die Nachricht empfängt, führt Folgendes aus:
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
> Das Seiten-Script kann nun beliebigen Code mit sämtlichen Berechtigungen des Content Scripts ausführen.

## `eval()` in Content Scripts verwenden

> [!NOTE]
> `eval()` ist in Manifest V3 nicht verfügbar.

- In Chrome
  - : {{jsxref("Global_Objects/eval", "eval")}} führt Code immer im Kontext des **Content Scripts** aus, nicht im Kontext der Seite.
- In Firefox
  - : Wenn Sie `eval()` aufrufen, wird Code im Kontext des **Content Scripts** ausgeführt.

    Wenn Sie `window.eval()` aufrufen, wird Code im Kontext der **Seite** ausgeführt.

Betrachten Sie beispielsweise dieses Content Script:

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

Beim Empfang der Nachricht protokolliert das Seiten-Script dieselben Variablen:

```js
window.addEventListener("message", (event) => {
  if (event.source === window && event.data && event.data.message === "check") {
    console.log(`In page script, window.x: ${window.x}`);
    console.log(`In page script, window.y: ${window.y}`);
  }
});
```

In Chrome führt dies zu einer Ausgabe wie dieser:

```plain
In content script, window.x: 1
In content script, window.y: 2
In page script, window.x: undefined
In page script, window.y: undefined
```

In Firefox führt dies zu einer Ausgabe wie dieser:

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
