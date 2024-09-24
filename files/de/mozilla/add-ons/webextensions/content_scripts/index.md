---
title: Inhaltsskripte
slug: Mozilla/Add-ons/WebExtensions/Content_scripts
l10n:
  sourceCommit: 9a748379272199c67fd7837553b04d76d7e2305a
---

{{AddonSidebar}}

Ein Inhaltsskript ist ein Teil Ihrer Erweiterung, der im Kontext einer Webseite ausgeführt wird (im Gegensatz zu Hintergrundskripten, die Teil der Erweiterung sind, oder Skripten, die Teil der Website selbst sind, wie z.B. solche, die mit dem {{HTMLElement("script")}}-Element geladen werden).

[Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts) können auf alle [WebExtension JavaScript APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) zugreifen, sie können jedoch nicht direkt auf den Inhalt von Webseiten zugreifen. Wenn Ihre Erweiterung das tun muss, benötigen Sie Inhaltsskripte.

Genau wie die Skripte, die von normalen Webseiten geladen werden, können Inhaltsskripte den Inhalt ihrer Seiten mit den standardmäßigen [Web APIs](/de/docs/Web/API) lesen und ändern. Sie können dies jedoch nur tun, wenn [Host-Berechtigungen für den Ursprung der Webseite gewährt wurden](#berechtigungen).

> [!NOTE] Einige Web APIs sind auf [sichere Kontexte](/de/docs/Web/Security/Secure_Contexts) beschränkt, was auch für Inhaltsskripte gilt, die in diesen Kontexten ausgeführt werden. Mit Ausnahme von {{domxref("PointerEvent.getCoalescedEvents()")}}, das von Inhaltsskripten in unsicheren Kontexten in Firefox aufgerufen werden kann.

Inhaltsskripte können nur auf [eine kleine Teilmenge der WebExtension APIs zugreifen](#webextension_apis), sie können jedoch [mit Hintergrundskripten kommunizieren](#kommunikation_mit_hintergrundskripten) über ein Nachrichtensystem und somit indirekt auf die WebExtension APIs zugreifen.

## Inhaltsskripte laden

Sie können ein Inhaltsskript in eine Webseite laden:

1. Zur Installationszeit, in Seiten, die URL-Mustern entsprechen.
   - Mit dem Schlüssel [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) in Ihrem `manifest.json` können Sie den Browser bitten, ein Inhaltsskript zu laden, wann immer der Browser eine Seite lädt, deren URL [einem bestimmten Muster entspricht](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns).
2. Zur Laufzeit, in Seiten, die URL-Mustern entsprechen.
   - Mit {{WebExtAPIRef("scripting.registerContentScripts()")}} oder (nur in Manifest V2 in Firefox) {{WebExtAPIRef("contentScripts")}} können Sie den Browser bitten, ein Inhaltsskript zu laden, wann immer der Browser eine Seite lädt, deren URL [einem bestimmten Muster entspricht](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns). (Dies ist ähnlich wie Methode 1, _außer_ dass Sie Inhaltsskripte zur Laufzeit hinzufügen und entfernen können.)
3. Zur Laufzeit, in spezifische Tabs.
   - Mit {{WebExtAPIRef("scripting.executeScript()")}} oder (nur in Manifest V2) {{WebExtAPIRef("tabs.executeScript()")}} können Sie ein Inhaltsskript in einen bestimmten Tab laden, wann immer Sie möchten. (Zum Beispiel als Antwort auf das Klicken des Nutzers auf eine [Browser-Aktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button).)

Es gibt nur einen globalen Geltungsbereich _pro Frame, pro Erweiterung_. Dies bedeutet, dass Variablen aus einem Inhaltsskript direkt von einem anderen Inhaltsskript zugänglich sind, unabhängig davon, wie das Inhaltsskript geladen wurde.

Mit den Methoden (1) und (2) können Sie Skripte nur in Seiten laden, deren URLs mit einem [Match-Muster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) dargestellt werden können.

Mit Methode (3) können Sie auch Skripte in Seiten laden, die mit Ihrer Erweiterung verpackt sind, jedoch können Sie keine Skripte in privilegierte Browserseiten (wie "`about:debugging`" oder "`about:addons`") laden.

> **Note:** [Dynamische JS-Modulimporte](/de/docs/Web/JavaScript/Guide/Modules#dynamic_module_loading) funktionieren jetzt in Inhaltsskripten. Weitere Details finden Sie unter [Firefox Fehler 1536094](https://bugzil.la/1536094).
> Nur URLs mit dem _moz-extension_-Schema sind zugelassen, was Daten-URLs ausschließt ([Firefox Fehler 1587336](https://bugzil.la/1587336)).

## Berechtigungen, Beschränkungen und Einschränkungen

### Berechtigungen

Registrierte Inhaltsskripte werden nur ausgeführt, wenn der Erweiterung [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die Domain gewährt wurden.

Um Skripte programmgesteuert zu injizieren, benötigt die Erweiterung entweder die [`activeTab` Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions). Die `scripting` Berechtigung ist erforderlich, um Methoden aus der {{WebExtAPIRef("scripting")}} API zu verwenden.

Ab Manifest V3 werden Host-Berechtigungen nicht automatisch zur Installationszeit gewährt. Benutzer können sich dafür oder dagegen entscheiden, Host-Berechtigungen nach der Installation der Erweiterung zu gewähren.

### Eingeschränkte Domains

Sowohl [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) als auch die [`activeTab` Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) haben Ausnahmen für einige Domains. Inhaltsskripte werden daran gehindert, auf diesen Domains ausgeführt zu werden, zum Beispiel, um den Nutzer davor zu schützen, dass eine Erweiterung durch spezielle Seiten Berechtigungen eskalieren könnte.

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

Andere Browser haben ähnliche Beschränkungen bezüglich der Webseiten, von denen Erweiterungen installiert werden können. Zum Beispiel ist der Zugriff auf chrome.google.com in Chrome eingeschränkt.

> [!NOTE]
> Da diese Beschränkungen addons.mozilla.org umfassen, können Nutzer, die versuchen, Ihre Erweiterung direkt nach der Installation zu verwenden, feststellen, dass sie nicht funktioniert. Um dies zu vermeiden, sollten Sie eine entsprechende Warnung oder eine [Einstiegsseite](https://extensionworkshop.com/documentation/develop/onboard-upboard-offboard-users/) hinzufügen, um Nutzer von `addons.mozilla.org` wegzuleiten.

Die Menge der Domains kann durch Unternehmensrichtlinien weiter eingeschränkt werden: Firefox erkennt die `restricted_domains` Richtlinie, wie in [ExtensionSettings in mozilla/policy-templates](https://github.com/mozilla/policy-templates/blob/master/README.md#extensionsettings) dokumentiert. Die `runtime_blocked_hosts` Richtlinie von Chrome ist bei [Configure ExtensionSettings policy](https://support.google.com/chrome/a/answer/9867568) dokumentiert.

### Einschränkungen

Ganze Tabs oder Frames können mit [`data:` URI](/de/docs/Web/URI/Schemes/data), {{DOMxRef("URL.createObjectURL_static", "Blob")}} Objekten und anderen ähnlichen Techniken geladen werden. Die Unterstützung der Injektion von Inhaltsskripten in solche speziellen Dokumente variiert je nach Browser, siehe den [Fehler #1411641 Kommentar 41](https://bugzil.la/1411641#c41) von Firefox für einige Details.

## Umgebung der Inhaltsskripte

### DOM-Zugriff

Inhaltsskripte können auf das DOM der Seite zugreifen und es ändern, genau wie normale Seitenskripte. Sie können auch alle Änderungen sehen, die von Seitenskripten am DOM vorgenommen wurden.

Allerdings erhalten Inhaltsskripte eine "saubere" Sicht auf das DOM. Dies bedeutet:

- Inhaltsskripte können keine JavaScript-Variablen sehen, die durch Seitenskripte definiert wurden.
- Wenn ein Seitenskript eine eingebaute DOM-Eigenschaft neu definiert, sieht das Inhaltsskript die ursprüngliche Version der Eigenschaft, nicht die neu definierte Version.

Wie unter ["Umgebung von Inhaltsskripten" bei Chrome-Inkompatibilitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#content_script_environment) festgestellt, unterscheidet sich das Verhalten je nach Browser:

- In Firefox wird dieses Verhalten [Xray vision](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts#xray_vision_in_firefox) genannt. Inhaltsskripte können JavaScript-Objekte aus ihrem eigenen globalen Geltungsbereich oder Xray-umwickelte Versionen von der Webseite begegnen.

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

Das Skript `page-script.js` tut Folgendes:

```js
// page-script.js

// fügt ein neues Element zum DOM hinzu
let p = document.createElement("p");
p.textContent = "This paragraph was added by a page script.";
p.setAttribute("id", "page-script-para");
document.body.appendChild(p);

// definiert eine neue Eigenschaft im Fenster
window.foo = "This global variable was added by a page script";

// definiert die eingebaute Funktion window.confirm() neu
window.confirm = () => {
  alert("The page script has also redefined 'confirm'");
};
```

Nun injiziert eine Erweiterung ein Inhaltsskript in die Seite:

```js
// content-script.js

// kann auf das DOM zugreifen und es ändern
let pageScriptPara = document.getElementById("page-script-para");
pageScriptPara.style.backgroundColor = "blue";

// kann die von page-script.js hinzugefügten Eigenschaften nicht sehen
console.log(window.foo); // undefined

// sieht die ursprüngliche Form von umdefinierten Eigenschaften
window.confirm("Are you sure?"); // ruft die ursprüngliche window.confirm() auf
```

Das Gleiche gilt umgekehrt; Seitenskripte können keine JavaScript-Eigenschaften sehen, die von Inhaltsskripten hinzugefügt wurden.

Dies bedeutet, dass Inhaltsskripte sich darauf verlassen können, dass DOM-Eigenschaften sich vorhersehbar verhalten, ohne dass sie befürchten müssen, dass ihre Variablen mit denen des Seitenskripts in Konflikt geraten.

Eine praktische Konsequenz dieses Verhaltens ist, dass ein Inhaltsskript keinen Zugriff auf JavaScript-Bibliotheken hat, die von der Seite geladen werden. Wenn die Seite also jQuery enthält, kann das Inhaltsskript es nicht sehen.

Wenn ein Inhaltsskript eine JavaScript-Bibliothek verwenden muss, sollte die Bibliothek selbst als Inhaltsskript _neben_ dem Inhaltsskript injiziert werden, das sie verwenden möchte:

```json
"content_scripts": [
  {
    "matches": ["*://*.mozilla.org/*"],
    "js": ["jquery.js", "content-script.js"]
  }
]
```

> [!NOTE]
> Firefox _bietet_ einige APIs, die es Inhaltsskripten ermöglichen, auf von Seitenskripten erstellte JavaScript-Objekte zuzugreifen und ihre eigenen JavaScript-Objekte an Seitenskripte zu übergeben.
>
> Siehe [Teilen von Objekten mit Seitenskripten](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts) für weitere Details.

### WebExtension APIs

Zusätzlich zu den standardmäßigen DOM-APIs können Inhaltsskripte die folgenden WebExtension APIs verwenden:

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

Inhaltsskripte können Anfragen mit den normalen [`window.XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) und [`window.fetch()`](/de/docs/Web/API/Fetch_API) APIs machen.

> [!NOTE]
> In Firefox in Manifest V2 erfolgen Anfragen von Inhaltsskripten (zum Beispiel, unter Verwendung von [`fetch()`](/de/docs/Web/API/Fetch_API/Using_Fetch)) im Kontext einer Erweiterung, daher müssen Sie eine absolute URL angeben, um auf Inhalte der Seite zu verweisen.
>
> In Chrome und Firefox in Manifest V3 erfolgen diese Anfragen im Kontext der Seite, daher werden sie an eine relative URL gerichtet. Zum Beispiel wird `/api` an `https://«aktuelle Seiten-URL»/api` gesendet.

Inhaltsskripte erhalten die gleichen bereichsübergreifenden Rechte wie der Rest der Erweiterung: Wenn die Erweiterung für eine Domain einen bereichsübergreifenden Zugriff über den [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) Schlüssel in `manifest.json` beantragt hat, erhalten ihre Inhaltsskripte Zugang zu dieser Domain.

> [!NOTE]
> Bei Verwendung von Manifest V3 können Inhaltsskripte bereichsübergreifende Anfragen durchführen, wenn der Zielserver über [CORS](/de/docs/Web/HTTP/CORS) optiert; Host-Berechtigungen funktionieren jedoch nicht in Inhaltsskripten, aber sie sind weiterhin in regulären Erweiterungsseiten vorhanden.

Dies wird erreicht, indem dem Inhaltsskript privilegiertere XHR- und Fetch-Instanzen zur Verfügung gestellt werden, was den Nebeneffekt hat, dass die [`Origin`](/de/docs/Web/HTTP/Headers/Origin) und [`Referer`](/de/docs/Web/HTTP/Headers/Referer) Header nicht gesetzt werden, wie es eine Anfrage von der Seite selbst tun würde; dies ist oft vorzuziehen, um zu verhindern, dass die Anfrage ihre bereichsübergreifende Natur zeigt.

> [!NOTE]
> In Firefox in Manifest V2 können Erweiterungen, die Anfragen durchführen müssen, die sich so verhalten, als ob sie vom eigentlichen Inhalt gesendet worden wären, `content.XMLHttpRequest` und `content.fetch()` stattdessen verwenden.
>
> Für browserübergreifende Erweiterungen muss das Vorhandensein dieser Methoden erkannt werden.
>
> Dies ist in Manifest V3 nicht möglich, da `content.XMLHttpRequest` und `content.fetch()` nicht verfügbar sind.

> [!NOTE]
> In Chrome, beginnend mit Version 73, und Firefox, beginnend mit Version 101 bei Verwendung von Manifest V3, unterliegen Inhaltsskripte denselben [CORS](/de/docs/Web/HTTP/CORS) Richtlinien wie die Seite, in der sie ausgeführt werden. Nur Hintergrundskripte haben erhöhte bereichsübergreifende Privilegien. Siehe [Änderungen an bereichsübergreifenden Anfragen in Inhaltsskripten von Chrome-Erweiterungen](https://www.chromium.org/Home/chromium-security/extension-content-script-fetches/).

## Kommunikation mit Hintergrundskripten

Auch wenn Inhaltsskripte die meisten WebExtension APIs nicht direkt verwenden können, können sie mit den Hintergrundskripten der Erweiterung über die Messaging-APIs kommunizieren und somit indirekt auf alle gleichen APIs zugreifen, auf die die Hintergrundskripte zugreifen können.

Es gibt zwei grundlegende Muster für die Kommunikation zwischen den Hintergrundskripten und Inhaltsskripten:

- Sie können **Einzelmeldungen** senden (mit einer optionalen Antwort).
- Sie können eine **längerlebige Verbindung zwischen beiden Seiten** einrichten und diese Verbindung zum Austausch von Nachrichten nutzen.

### Einzelmeldungen

Um Einzelmeldungen zu senden, mit einer optionalen Antwort, können Sie die folgenden APIs verwenden:

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
      <th scope="row">Sendet eine Nachricht</th>
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
      <th scope="row">Empfängt eine Nachricht</th>
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

Zum Beispiel, hier ist ein Inhaltsskript, das auf Klickereignisse in der Webseite hört.

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
    title: "Sie haben auf einen Link geklickt!",
    message: message.url,
  });
}
```

(Diese Beispielcode ist leicht angepasst von dem [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) Beispiel auf GitHub.)

### Verbindungsgestütztes Messaging

Das Senden von Einzelmeldungen kann umständlich werden, wenn Sie viele Nachrichten zwischen einem Hintergrundskript und einem Inhaltsskript austauschen. Ein alternatives Muster ist daher, eine längerlebige Verbindung zwischen den beiden Kontexten zu etablieren und diese Verbindung für den Nachrichtenaustausch zu nutzen.

Beide Seiten haben ein [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port) Objekt, das sie verwenden können, um Nachrichten auszutauschen.

Um die Verbindung herzustellen:

- Eine Seite hört auf Verbindungen mit [`runtime.onConnect`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect)
- Die andere Seite ruft eine der folgenden Methoden auf:

  - [`tabs.connect()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/connect) (wenn eine Verbindung zu einem Inhaltsskript hergestellt wird)
  - [`runtime.connect()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/connect) (wenn eine Verbindung zu einem Hintergrundskript hergestellt wird)

Dies gibt ein [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port) Objekt zurück.

- Der [`runtime.onConnect`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect) Listener erhält sein eigenes [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port) Objekt übergeben.

Sobald jede Seite einen Port hat, können die beiden Seiten:

- Nachrichten senden, indem sie `runtime.Port.postMessage()` verwenden
- Nachrichten empfangen, indem sie `runtime.Port.onMessage()` verwenden

Zum Beispiel, sobald es geladen wird, führt das folgende Inhaltsskript:

- Eine Verbindung zum Hintergrundskript herstellen
- Den `Port` in einer Variable `myPort` speichern
- Auf Nachrichten auf `myPort` hören (und diese protokollieren)
- `myPort` verwenden, um Nachrichten an das Hintergrundskript zu senden, wenn der Benutzer auf das Dokument klickt

```js
// content-script.js

let myPort = browser.runtime.connect({ name: "port-from-cs" });
myPort.postMessage({ greeting: "hello from content script" });

myPort.onMessage.addListener((m) => {
  console.log("Im Inhaltsskript, Nachricht vom Hintergrundskript empfangen: ");
  console.log(m.greeting);
});

document.body.addEventListener("click", () => {
  myPort.postMessage({ greeting: "sie haben auf die Seite geklickt!" });
});
```

Das entsprechende Hintergrundskript:

- Hört auf Verbindungsversuche von dem Inhaltsskript
- Beim Empfang eines Verbindungsversuchs:

  - Speichert den Port in einer Variablen namens `portFromCS`
  - Sendet dem Inhaltsskript eine Nachricht mithilfe des Ports
  - Beginnt, auf Nachrichten zu hören, die über den Port empfangen werden und protokolliert diese

- Sendet Nachrichten an das Inhaltsskript, indem `portFromCS` verwendet wird, wenn der Benutzer auf die Browseraktion der Erweiterung klickt

```js
// background-script.js

let portFromCS;

function connected(p) {
  portFromCS = p;
  portFromCS.postMessage({ greeting: "hallo Inhaltsskript!" });
  portFromCS.onMessage.addListener((m) => {
    portFromCS.postMessage({
      greeting: `Im Hintergrundskript, Nachricht vom Inhaltsskript empfangen: ${m.greeting}`,
    });
  });
}

browser.runtime.onConnect.addListener(connected);

browser.browserAction.onClicked.addListener(() => {
  portFromCS.postMessage({ greeting: "sie haben auf den Knopf geklickt!" });
});
```

#### Mehrere Inhaltsskripte

Wenn Sie mehrere Inhaltsskripte gleichzeitig kommunizieren lassen, möchten Sie vielleicht Verbindungen zu diesen in einem Array speichern.

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
    p.postMessage({ greeting: "sie haben auf den Knopf geklickt!" });
  });
});
```

### Auswahl zwischen Einzelmeldungen und verbindungsgestütztem Messaging

Die Wahl zwischen Einzelmeldungen und verbindungsgestütztem Messaging hängt davon ab, wie Ihre Erweiterung plant, das Messaging zu nutzen.

Die empfohlenen Best Practices sind:

- **Einzelmeldungen verwenden, wenn…**
  - Nur eine Antwort auf eine Nachricht erwartet wird.
  - Eine kleine Anzahl von Skripten auf das Empfangen von Nachrichten hört ({{WebExtAPIRef("runtime.onMessage")}} Aufrufe).
- **Verbindungsgestütztes Messaging verwenden, wenn…**
  - Skripte an Sitzungen beteiligt sind, bei denen mehrere Nachrichten ausgetauscht werden.
  - Die Erweiterung den Fortschritt von Aufgaben kennen muss oder wenn eine Aufgabe unterbrochen wird oder unterbrochen werden soll, die über Messaging initiiert wurde.

## Kommunikation mit der Webseite

Standardmäßig haben Inhaltsskripte keinen Zugriff auf die Objekte, die von Seitenskripten erstellt werden. Sie können jedoch mit Seitenskripten über die [`window.postMessage`](/de/docs/Web/API/Window/postMessage) und [`window.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) DOM-APIs kommunizieren.

Zum Beispiel:

```js
// page-script.js

let messenger = document.getElementById("from-page-script");

messenger.addEventListener("click", messageContentScript);

function messageContentScript() {
  window.postMessage(
    {
      direction: "from-page-script",
      message: "Nachricht von der Seite",
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
    alert(`Inhaltsskript hat Nachricht erhalten: "${event.data.message}"`);
  }
});
```

Für ein vollständiges Arbeitsbeispiel davon, [besuchen Sie die Demoseite auf GitHub](https://mdn.github.io/webextensions-examples/content-script-page-script-messaging.html) und folgen Sie den Anweisungen.

> [!WARNING]
> Seien Sie sehr vorsichtig, wenn Sie auf diese Weise mit unvertrauenswürdigen Webinhalten interagieren! Erweiterungen sind privilegierter Code, der mächtige Fähigkeiten haben kann, und feindliche Webseiten können sie leicht dazu verleiten, diese Fähigkeiten zu nutzen.
>
> Um ein triviales Beispiel zu geben, nehmen wir an, dass der Inhaltsskriptcode, der die Nachricht empfängt, so etwas tut:
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
> Nun kann das Seitenskript jeden Code mit allen Privilegien des Inhaltsskripts ausführen.

## Verwendung von `eval()` in Inhaltsskripten

> **Note:** `eval()` nicht verfügbar in Manifest V3.

- In Chrome
  - : {{jsxref("Global_Objects/eval", "eval")}} führt immer Code im Kontext des **Inhaltsskripts** aus, nicht im Kontext der Seite.
- In Firefox

  - : Wenn Sie `eval()` aufrufen, führt es Code im Kontext des **Inhaltsskripts** aus.

    Wenn Sie `window.eval()` aufrufen, führt es Code im Kontext der **Seite** aus.

Betrachten Sie zum Beispiel ein Inhaltsskript wie dieses:

```js
// content-script.js

window.eval("window.x = 1;");
eval("window.y = 2");

console.log(`Inhaltsskript, window.x: ${window.x}`);
console.log(`Inhaltsskript, window.y: ${window.y}`);

window.postMessage(
  {
    message: "check",
  },
  "*",
);
```

Dieser Code erstellt einfach einige Variablen `x` und `y` mit `window.eval()` und `eval()`, protokolliert ihre Werte und sendet dann eine Nachricht an die Seite.

Beim Empfang der Nachricht protokolliert das Seitenskript die gleichen Variablen:

```js
window.addEventListener("message", (event) => {
  if (event.source === window && event.data && event.data.message === "check") {
    console.log(`In Seitenskript, window.x: ${window.x}`);
    console.log(`In Seitenskript, window.y: ${window.y}`);
  }
});
```

In Chrome erzeugt das folgenden Ausgaben:

```plain
Inhaltsskript, window.x: 1
Inhaltsskript, window.y: 2
In Seitenskript, window.x: undefined
In Seitenskript, window.y: undefined
```

In Firefox erzeugt das folgenden Ausgaben:

```plain
Inhaltsskript, window.x: undefined
Inhaltsskript, window.y: 2
In Seitenskript, window.x: 1
In Seitenskript, window.y: undefined
```

Das Gleiche gilt für [`setTimeout()`](/de/docs/Web/API/setTimeout), [`setInterval()`](/de/docs/Web/API/setInterval), und [`Function()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function).

> [!WARNING]
> Seien Sie sehr vorsichtig, wenn Sie Code im Kontext der Seite ausführen!
>
> Die Umgebung der Seite wird von potenziell bösartigen Webseiten kontrolliert, die Objekte, mit denen Sie interagieren, neu definieren können, um sich auf unerwartete Weise zu verhalten:
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
