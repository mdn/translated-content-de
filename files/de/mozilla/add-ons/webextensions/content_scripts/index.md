---
title: Inhalts-Skripte
slug: Mozilla/Add-ons/WebExtensions/Content_scripts
l10n:
  sourceCommit: a46ee9267e4c49ce85c780b76c0f08fc389a2553
---

Ein Inhalts-Skript ist ein Teil Ihrer Erweiterung, der im Kontext einer Webseite ausgeführt wird. Es kann Seiteninhalte mit den standardmäßigen [Web-APIs](/de/docs/Web/API) lesen und ändern. Das Verhalten von Inhalts-Skripten ähnelt dem von Skripten, die Teil einer Website sind, wie diejenigen, die mithilfe des {{HTMLElement("script")}}-Elements geladen werden. Inhalts-Skripte können jedoch nur auf Seiteninhalte zugreifen, wenn [Host-Berechtigungen für den Ursprung der Webseite gewährt wurden](#berechtigungen).

Inhalts-Skripte können auf [eine kleine Teilmenge der WebExtension-APIs](#webextension-apis) zugreifen, sie können jedoch [mit Hintergrund-Skripten kommunizieren](#kommunikation_mit_hintergrund-skripten) und dadurch indirekt auf die WebExtension-APIs zugreifen. [Hintergrund-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts) können alle [WebExtension-JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) nutzen, haben jedoch keinen direkten Zugriff auf den Inhalt von Webseiten.

> [!NOTE]
> Einige Web-APIs sind auf [sichere Kontexte](/de/docs/Web/Security/Defenses/Secure_Contexts) beschränkt, was auch für Inhalts-Skripte gilt, die in diesen Kontexten laufen. Ausgenommen hiervon ist [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents), das in unsicheren Kontexten in Firefox aus Inhalts-Skripten aufgerufen werden kann.

## Laden von Inhalts-Skripten

Sie können ein Inhalts-Skript in eine Webseite laden:

1. Zur Installationszeit, auf Seiten, die URL-Mustern entsprechen.
   - Mithilfe des [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Schlüssels in Ihrer `manifest.json` können Sie den Browser bitten, ein Inhalts-Skript zu laden, wann immer der Browser eine Seite lädt, deren URL einem [bestimmten Muster entspricht](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns).
2. Zur Laufzeit, auf Seiten, die URL-Mustern entsprechen.
   - Mithilfe von {{WebExtAPIRef("scripting.registerContentScripts()")}} oder (nur in Manifest V2 in Firefox) {{WebExtAPIRef("contentScripts")}} können Sie den Browser bitten, ein Inhalts-Skript zu laden, wann immer der Browser eine Seite lädt, deren URL einem [bestimmten Muster entspricht](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns). (Dies ist ähnlich wie Methode 1, _außer_ dass Sie Inhalts-Skripte zur Laufzeit hinzufügen und entfernen können.)
3. Zur Laufzeit, in bestimmten Tabs.
   - Mithilfe von {{WebExtAPIRef("scripting.executeScript()")}} oder (nur in Manifest V2) {{WebExtAPIRef("tabs.executeScript()")}} können Sie ein Inhalts-Skript in einen bestimmten Tab laden, wann immer Sie möchten. (Zum Beispiel als Reaktion darauf, dass ein Benutzer auf eine [Browser-Aktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) klickt.)

Es gibt nur einen globalen Geltungsbereich _pro Frame, pro Erweiterung_. Das bedeutet, dass Variablen aus einem Inhalts-Skript von allen anderen Inhalts-Skripten, unabhängig davon, wie das Inhalts-Skript geladen wurde, zugegriffen werden kann.

Mit den Methoden (1) und (2) können Sie Skripte nur in Seiten laden, deren URLs mit einem [Übereinstimmungsmuster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) dargestellt werden können.

Mit Methode (3) können Sie auch Skripte in Seiten laden, die mit Ihrer Erweiterung gepackt sind, jedoch nicht in privilegierte Browser-Seiten (wie `about:debugging` oder `about:addons`).

> [!NOTE]
> [Dynamische JS-Modulimporte](/de/docs/Web/JavaScript/Guide/Modules#dynamic_module_loading) funktionieren jetzt in Inhalts-Skripten. Weitere Details finden Sie in [Firefox-Bug 1536094](https://bugzil.la/1536094).
> Es sind nur URLs mit dem _moz-extension_-Schema erlaubt, was Daten-URLs ausschließt ([Firefox-Bug 1587336](https://bugzil.la/1587336)).

### Persistenz

Inhalts-Skripte, die mit {{WebExtAPIRef("scripting.executeScript()")}} oder (nur in Manifest V2) {{WebExtAPIRef("tabs.executeScript()")}} geladen werden, laufen auf Anfrage und sind nicht persistent.

Inhalts-Skripte, die im `content_scripts`-Schlüssel der Manifestdatei oder mit der {{WebExtAPIRef("scripting.registerContentScripts()")}} oder (nur in Manifest V2 in Firefox) {{WebExtAPIRef("contentScripts")}} API definiert sind, sind standardmäßig persistent. Sie bleiben über Browser-Neustarts und Updates sowie Erweiterungs-Neustarts hinweg registriert.

Allerdings bietet die {{WebExtAPIRef("scripting.registerContentScripts()")}} API die Möglichkeit, das Skript als nicht-persistent zu definieren. Dies kann nützlich sein, wenn z. B. Ihre Erweiterung (im Namen eines Benutzers) ein Inhalts-Skript nur in der aktuellen Browser-Sitzung aktivieren möchte.

## Berechtigungen, Einschränkungen und Beschränkungen

### Berechtigungen

Registrierte Inhalts-Skripte werden nur ausgeführt, wenn der Erweiterung [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die Domäne gewährt wurden.

Um Skripte programmgesteuert einzufügen, benötigt die Erweiterung entweder die [`activeTab`-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions). Die `scripting`-Berechtigung wird benötigt, um Methoden aus der {{WebExtAPIRef("scripting")}} API zu verwenden.

Bei der Installation kann eine Erweiterung Host-Berechtigungen für Hosts in ihren `matches`-Listen des `content_scripts`-Manifest-Schlüssels anfordern. Benutzer können sich nach der Installation der Erweiterung für oder gegen Host-Berechtigungen entscheiden.

### Einschränkungen für Domains

Sowohl [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) als auch die [`activeTab`-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) haben Ausnahmen für einige Domains. Inhalts-Skripte sind von der Ausführung auf diesen Domains ausgeschlossen, um den Benutzer beispielsweise davor zu schützen, dass eine Erweiterung ihre Privilegien auf speziellen Seiten erweitert.

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

Andere Browser haben ähnliche Einschränkungen bezüglich der Websites, von denen Erweiterungen installiert werden können. Beispielsweise ist der Zugriff auf chrome.google.com in Chrome eingeschränkt.

> [!NOTE]
> Da diese Einschränkungen addons.mozilla.org umfassen, können Benutzer, die versuchen, Ihre Erweiterung unmittelbar nach der Installation zu verwenden, feststellen, dass sie nicht funktioniert. Um dies zu vermeiden, sollten Sie eine entsprechende Warnung oder eine [Onboarding-Seite](https://extensionworkshop.com/documentation/develop/onboard-upboard-offboard-users/) hinzufügen, um Benutzer von `addons.mozilla.org` wegzubewegen.

Der Satz von Domains kann durch Unternehmensrichtlinien weiter eingeschränkt werden: Firefox erkennt die `restricted_domains`-Richtlinie an, wie in [ExtensionSettings in mozilla/policy-templates](https://github.com/mozilla/policy-templates/blob/master/README.md#extensionsettings) dokumentiert. Chromes `runtime_blocked_hosts`-Richtlinie ist unter [ExtensionSettings-Richtlinie konfigurieren](https://support.google.com/chrome/a/answer/9867568) dokumentiert.

### Beschränkungen

Ganze Tabs oder Frames können unter Verwendung von [`data:`-URI](/de/docs/Web/URI/Reference/Schemes/data), [`Blob`](/de/docs/Web/API/URL/createObjectURL_static)-Objekten und anderen ähnlichen Techniken geladen werden. Die Unterstützung für die Injektion von Inhalts-Skripten in solchen speziellen Dokumenten variiert zwischen Browsern. Details hierzu finden Sie im Firefox [Bug #1411641 Kommentar 41](https://bugzil.la/1411641#c41).

## Inhalts-Skriptumgebung

### DOM-Zugriff

Inhalts-Skripte können auf das DOM der Seite zugreifen und es ändern, genau wie normale Seitenskripte es können. Sie können auch alle Änderungen sehen, die von Seitenskripten am DOM vorgenommen wurden.

Allerdings erhalten Inhalts-Skripte eine "saubere" Ansicht des DOMs. Das bedeutet:

- Inhalts-Skripte können keine JavaScript-Variablen sehen, die von Seitenskripten definiert wurden.
- Wenn ein Seitenskript eine eingebaute DOM-Eigenschaft neu definiert, sieht das Inhalts-Skript die Originalversion der Eigenschaft und nicht die neu definierte Version.

Wie in ["Content script environment" bei Chrome-Inkompatibilitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#content_script_environment) erwähnt, unterscheidet sich das Verhalten zwischen Browsern:

- In Firefox wird dieses Verhalten als [Xray vision](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts#xray_vision_in_firefox) bezeichnet.
  Inhalts-Skripte können auf JavaScript-Objekte aus ihrem eigenen globalen Geltungsbereich oder Xray-verpackte Versionen von der Webseite stoßen.

- In Chrome wird dieses Verhalten durch eine [isolierte Welt](https://chromium.googlesource.com/chromium/src/+/master/third_party/blink/renderer/bindings/core/v8/V8BindingDesign.md#world) erzwungen, die einen fundamentalen anderen Ansatz nutzt.

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

Das Gleiche gilt umgekehrt; Seitenskripte können keine JavaScript-Eigenschaften sehen, die von Inhalts-Skripten hinzugefügt wurden.

Dies bedeutet, dass Inhalts-Skripte sich darauf verlassen können, dass DOM-Eigenschaften vorhersehbar funktionieren, ohne sich Sorgen machen zu müssen, dass ihre Variablen mit Variablen des Seitenskripts in Konflikt geraten.

Eine praktische Konsequenz dieses Verhaltens ist, dass ein Inhalts-Skript keinen Zugriff auf JavaScript-Bibliotheken hat, die von der Seite geladen werden. Wenn die Seite also beispielsweise jQuery enthält, kann das Inhalts-Skript es nicht sehen.

Wenn ein Inhalts-Skript eine JavaScript-Bibliothek verwenden muss, sollte die Bibliothek selbst _neben_ dem Inhalts-Skript als Inhalts-Skript eingefügt werden:

```json
"content_scripts": [
  {
    "matches": ["*://*.mozilla.org/*"],
    "js": ["jquery.js", "content-script.js"]
  }
]
```

> [!NOTE]
> Firefox bietet [cloneInto()](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/cloneInto) und [exportFunction()](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/exportFunction), um es Inhalts-Skripten zu ermöglichen, auf JavaScript-Objekte zuzugreifen, die von Seitenskripten erstellt wurden, und ihre eigenen JavaScript-Objekte an Seitenskripte weiterzugeben.
>
> Weitere Details finden Sie unter [Objekte mit Seitenskripten teilen](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts).

### WebExtension-APIs

Zusätzlich zu den standardmäßigen DOM-APIs können Inhalts-Skripte diese WebExtension-APIs verwenden:

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

Inhalts-Skripte können Anfragen mit den normalen [`window.XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) und [`window.fetch()`](/de/docs/Web/API/Fetch_API) APIs machen.

> [!NOTE]
> In Firefox in Manifest V2 erfolgen Inhalts-Skript-Anfragen (z. B. mit [`fetch()`](/de/docs/Web/API/Fetch_API/Using_Fetch)) im Kontext der Erweiterung, daher muss eine absolute URL angegeben werden, um auf Seiteninhalte zu verweisen.
>
> In Chrome und Firefox in Manifest V3 erfolgen diese Anfragen im Kontext der Seite, sodass sie mit einer relativen URL gemacht werden. Zum Beispiel wird `/api` an `https://«current page URL»/api` gesendet.

Inhalts-Skripte erhalten die gleichen bereichsübergreifenden Berechtigungen wie der Rest der Erweiterung: Wenn die Erweiterung also Zugriff auf einen bestimmten Bereich durch die [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) Schlüssel in `manifest.json` angefordert hat, haben auch ihre Inhalts-Skripte Zugriff auf diesen Bereich.

> [!NOTE]
> Beim Verwenden von Manifest V3 können Inhalts-Skripte bereichsübergreifende Anfragen ausführen, wenn der Zielserver sich mittels [CORS](/de/docs/Web/HTTP/Guides/CORS) dafür entscheidet; jedoch funktionieren Host-Berechtigungen nicht in Inhalts-Skripten, sondern weiterhin auf normalen Erweiterungsseiten.

Dies wird erreicht, indem inhalts-skript-spezifische XHR- und Fetch-Instanzen bereitgestellt werden, die als Nebeneffekt keine [`Origin`](/de/docs/Web/HTTP/Reference/Headers/Origin) und [`Referer`](/de/docs/Web/HTTP/Reference/Headers/Referer) Headers wie eine Anfrage von der Seite selbst setzen würden; dies ist oft vorzuziehen, um zu verhindern, dass die Anfrage ihre bereichsübergreifende Natur offenbart.

> [!NOTE]
> In Firefox in Manifest V2 können Erweiterungen, die Anfragen ausführen, die sich so verhalten sollen, als wären sie vom Inhalt selbst gesendet worden, `content.XMLHttpRequest` und `content.fetch()` verwenden.
>
> Für browserübergreifende Erweiterungen müssen diese Methoden featurebasiert erkannt werden.
>
> Dies ist in Manifest V3 nicht möglich, da `content.XMLHttpRequest` und `content.fetch()` nicht verfügbar sind.

> [!NOTE]
> In Chrome, ab Version 73, und Firefox, ab Version 101 bei Manifest V3, unterliegen Inhalts-Skript-Anfragen der gleichen [CORS](/de/docs/Web/HTTP/Guides/CORS) Politik wie die Seite, in der sie ausgeführt werden. Nur Hintergrundskripte haben erhöhte bereichsübergreifende Berechtigungen. Siehe [Änderungen bei bereichsübergreifenden Anfragen in Chrome Extension Content Scripts](https://www.chromium.org/Home/chromium-security/extension-content-script-fetches/).

## Kommunikation mit Hintergrund-Skripten

Obwohl Inhalts-Skripte nicht direkt die meisten WebExtension-APIs nutzen können, können sie über die Messaging-APIs mit den Hintergrund-Skripten der Erweiterung kommunizieren und somit indirekt auf alle WebExtension-APIs zugreifen, die die Hintergrund-Skripte verwenden können.

Es gibt zwei grundlegende Muster für die Kommunikation zwischen den Hintergrund-Skripten und Inhalts-Skripten:

- Sie können **einmalige Nachrichten** senden (mit einer optionalen Antwort).
- Sie können eine **längerfristige Verbindung zwischen beiden Seiten** einrichten und diese Verbindung nutzen, um Nachrichten auszutauschen.

### Einmalige Nachrichten

Um einmalige Nachrichten zu senden, mit optionaler Antwort, können Sie die folgenden APIs verwenden:

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

Zum Beispiel, hier ist ein Inhalts-Skript, das auf Klick-Ereignisse auf der Webseite hört.

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

Das Hintergrund-Skript hört auf diese Nachrichten und zeigt eine Benachrichtigung mithilfe der [`notifications`](/de/docs/Mozilla/Add-ons/WebExtensions/API/notifications) API an:

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

Das Senden einmaliger Nachrichten kann mühsam werden, wenn viele Nachrichten zwischen einem Hintergrund-Skript und einem Inhalts-Skript ausgetauscht werden. Ein alternatives Muster ist daher, eine längerlebige Verbindung zwischen den beiden Kontexten aufzubauen und diese Verbindung zu nutzen, um Nachrichten auszutauschen.

Beide Seiten haben ein [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port) Objekt, das sie nutzen können, um Nachrichten auszutauschen.

Um die Verbindung zu erstellen:

- Eine Seite hört auf Verbindungen mithilfe von [`runtime.onConnect`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect)
- Die andere Seite ruft auf:
  - [`tabs.connect()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/connect) (wenn sie sich mit einem Inhalts-Skript verbindet)
  - [`runtime.connect()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/connect) (wenn sie sich mit einem Hintergrund-Skript verbindet)

Dies gibt ein [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port) Objekt zurück.

- Der [`runtime.onConnect`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect) Listener erhält sein eigenes [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port) Objekt übergeben.

Sobald jede Seite einen Anschluss hat, können die beiden Seiten:

- Nachrichten mit `runtime.Port.postMessage()` senden
- Nachrichten mit `runtime.Port.onMessage()` empfangen

Zum Beispiel, sobald es geladen wird, macht das folgende Inhalts-Skript:

- Verbindet sich mit dem Hintergrund-Skript
- Speichert den `Port` in einer Variablen `myPort`
- Hört Nachrichten auf `myPort` (und protokolliert sie)
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

- Hört auf Verbindungversuche vom Inhalts-Skript
- Bei Empfang eines Verbindungversuchs:
  - Speichert den Port in einer Variablen namens `portFromCS`
  - Sendet dem Inhalts-Skript eine Nachricht mittels des Ports
  - Beginnt, Nachrichten zu empfangen, die auf dem Port empfangen werden, und protokolliert sie

- Sendet Nachrichten an das Inhalts-Skript, mit `portFromCS`, wenn der Benutzer auf die Browser-Aktion der Erweiterung klickt

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

Wenn Sie mehrere Inhalts-Skripte gleichzeitig kommunizieren haben, möchten Sie möglicherweise Verbindungen zu ihnen in einem Array speichern.

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

Die Auswahl zwischen einmaligen und verbindungsbasierten Nachrichten hängt davon ab, wie Ihre Erweiterung die Nutzung von Nachrichtenübermittlung plant.

Die empfohlenen Best Practices sind:

- **Verwenden Sie einmalige Nachrichten, wenn...**
  - Nur eine Antwort auf eine Nachricht erwartet wird.
  - Eine kleine Anzahl von Skripten hört, um Nachrichten zu empfangen ({{WebExtAPIRef("runtime.onMessage")}} Aufrufe).
- **Verwenden Sie verbindungsbasierte Nachrichtenübermittlung, wenn...**
  - Skripte an Sitzungen teilnehmen, in denen mehrere Nachrichten ausgetauscht werden.
  - Die Erweiterung den Fortschritt einer Aufgabe kennen oder wissen möchte, ob eine Aufgabe unterbrochen wird, oder eine Aufgabe, die mit Nachrichtenübermittlung initiiert wurde, unterbrechen möchte.

## Kommunikation mit der Webseite

Standardmäßig erhalten Inhalts-Skripte keinen Zugriff auf die von Seitenskripten erstellten Objekte. Sie können jedoch mit Seitenskripten über die DOM [`window.postMessage`](/de/docs/Web/API/Window/postMessage) und [`window.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) APIs kommunizieren.

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

Für ein vollständiges Arbeitsbeispiel besuchen Sie bitte die [Demo-Seite auf GitHub](https://mdn.github.io/webextensions-examples/content-script-page-script-messaging.html) und befolgen Sie die Anweisungen.

> [!WARNING]
> Seien Sie sehr vorsichtig, wenn Sie auf unzuverlässige Webinhalte auf diese Weise zugreifen! Erweiterungen sind privilegierter Code, der über leistungsstarke Fähigkeiten verfügen kann, und feindliche Webseiten können sie leicht täuschen, diese Fähigkeiten zu nutzen.
>
> Um ein triviales Beispiel zu geben, nehmen wir an, der Inhalts-Skriptcode, der die Nachricht empfängt, macht so etwas:
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
> Jetzt kann das Seitenskript beliebigen Code mit allen Privilegien des Inhalts-Skripts ausführen lassen.

## Verwendung von `eval()` in Inhalts-Skripten

> [!NOTE]
> `eval()` nicht verfügbar in Manifest V3.

- In Chrome
  - : {{jsxref("Global_Objects/eval", "eval")}} führt immer Code im Kontext des **Inhalts-Skripts** aus, nicht im Kontext der Seite.
- In Firefox
  - : Wenn Sie `eval()` aufrufen, wird Code im Kontext des **Inhalts-Skripts** ausgeführt.

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

Dieser Code erstellt einige Variablen `x` und `y` mit `window.eval()` und `eval()`, protokolliert ihre Werte und sendet dann eine Nachricht an die Seite.

Beim Empfang der Nachricht protokolliert das Seitenskript die gleichen Variablen:

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
> Die Umgebung der Seite wird von potenziell böswilligen Webseiten kontrolliert, die Objekte, mit denen Sie interagieren, neu definieren können, um sich unerwartet zu verhalten:
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
