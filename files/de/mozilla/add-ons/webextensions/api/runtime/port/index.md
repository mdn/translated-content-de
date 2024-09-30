---
title: runtime.Port
slug: Mozilla/Add-ons/WebExtensions/API/runtime/Port
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ein `Port`-Objekt repräsentiert ein Ende einer Verbindung zwischen zwei spezifischen Kontexten, die zum Austausch von Nachrichten verwendet werden kann.

Eine Seite initiiert die Verbindung, indem sie eine `connect()`-API verwendet. Dies gibt ein `Port`-Objekt zurück. Die andere Seite hört auf Verbindungsversuche mit einem `onConnect`-Listener. Dieser wird ein entsprechendes `Port`-Objekt übergeben.

Sobald beide Seiten `Port`-Objekte haben, können sie Nachrichten mit `Port.postMessage()` und `Port.onMessage` austauschen. Wenn sie fertig sind, kann entweder das eine oder das andere Ende die Verbindung mit `Port.disconnect()` trennen, was ein `Port.onDisconnect`-Ereignis am anderen Ende auslöst, das es dem anderen Ende ermöglicht, notwendige Aufräumarbeiten durchzuführen.

Ein `Port` kann auch als Reaktion auf verschiedene Ereignisse getrennt werden. Siehe [Lebenszyklus](#lebenszyklus).

Dieses Muster kann verwendet werden, um zu kommunizieren zwischen:

- verschiedenen Teilen Ihrer Erweiterung (zum Beispiel zwischen [Inhaltsskripten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) und [Hintergrundskripten](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts)),
- Ihrer Erweiterung und einer [nativen Anwendung, die auf dem Computer des Benutzers läuft](/de/docs/Mozilla/Add-ons/WebExtensions/Native_messaging),
- Ihrer Erweiterung und einer anderen Erweiterung.

Sie müssen unterschiedliche Verbindungs-APIs für unterschiedliche Arten von Verbindungen verwenden, wie in der folgenden Tabelle beschrieben.

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Verbindungstyp</th>
      <th scope="col">Verbindungsversuch initiieren</th>
      <th scope="col">Verbindungsversuch handhaben</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Hintergrundskript zu Inhaltsskript</td>
      <td>{{WebExtAPIRef("tabs.connect()")}}</td>
      <td>{{WebExtAPIRef("runtime.onConnect")}}</td>
    </tr>
    <tr>
      <td>Inhaltsskript zu Hintergrundskript</td>
      <td>{{WebExtAPIRef("runtime.connect()")}}</td>
      <td>{{WebExtAPIRef("runtime.onConnect")}}</td>
    </tr>
    <tr>
      <td>Erweiterung zu nativer Anwendung</td>
      <td>{{WebExtAPIRef("runtime.connectNative()")}}</td>
      <td>
        Nicht anwendbar (siehe
        <a href="/de/docs/Mozilla/Add-ons/WebExtensions/Native_messaging"
          >Native Messaging</a
        >).
      </td>
    </tr>
    <tr>
      <td>Erweiterung zu Erweiterung</td>
      <td>{{WebExtAPIRef("runtime.connect()")}}</td>
      <td>{{WebExtAPIRef("runtime.onConnectExternal")}}</td>
    </tr>
  </tbody>
</table>

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `name`
  - : `string`. Der Name des Ports, definiert im {{WebExtAPIRef("runtime.connect()")}}- oder {{WebExtAPIRef("tabs.connect()")}}-Aufruf, der ihn erstellt hat. Wenn dieser Port mit einer nativen Anwendung verbunden ist, ist der Name der Name der nativen Anwendung.
- `disconnect`
  - : `function`. Trennt einen Port. Beide Enden können dies aufrufen, wenn sie den Port nicht mehr benötigen. Es wird `onDisconnect` am anderen Ende auslösen. Dies ist nützlich, wenn das andere Ende einen Status im Zusammenhang mit diesem Port verwaltet, der bei der Trennung bereinigt werden kann. Wenn dieser Port mit einer nativen Anwendung verbunden ist, wird diese Funktion die native Anwendung schließen.
- `error`
  - : `object`. Wenn der Port aufgrund eines Fehlers getrennt wurde, wird dies auf ein Objekt mit einer Zeichenketteneigenschaft `message` gesetzt, die Ihnen weitere Informationen über den Fehler gibt. Siehe `onDisconnect`.
- `onDisconnect`

  - : `object`. Dies enthält die `addListener()`- und `removeListener()`-Funktionen, die allen Ereignissen für Erweiterungen gemeinsam sind, die mit WebExtension-APIs erstellt wurden. Listener-Funktionen werden aufgerufen, wenn das andere Ende `Port.disconnect()` aufgerufen hat. Dieses Ereignis wird nur einmal für jeden Port ausgelöst. Der Listener-Funktion wird das `Port`-Objekt übergeben. Wenn der Port aufgrund eines Fehlers getrennt wurde, wird das `Port`-Argument eine `error`-Eigenschaft enthalten, die weitere Informationen über den Fehler gibt:

    ```js
    port.onDisconnect.addListener((p) => {
      if (p.error) {
        console.log(`Disconnected due to an error: ${p.error.message}`);
      }
    });
    ```

    Beachten Sie, dass in Google Chrome `port.error` nicht unterstützt wird: Verwenden Sie stattdessen {{WebExtAPIRef("runtime.lastError")}}, um die Fehlermeldung zu erhalten.

- `onMessage`
  - : `object`. Dies enthält die `addListener()`- und `removeListener()`-Funktionen, die allen Ereignissen für Erweiterungen gemeinsam sind, die mit WebExtension-APIs erstellt wurden. Listener-Funktionen werden aufgerufen, wenn das andere Ende diesem Port eine Nachricht gesendet hat. Dem Listener wird der Wert übergeben, den das andere Ende gesendet hat.
- `postMessage`
  - : `function`. Sendet eine Nachricht an das andere Ende. Dies nimmt ein Argument, das ein serialisierbarer Wert ist (siehe [Datenklonungsalgorithmus](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#data_cloning_algorithm)), der die Nachricht repräsentiert, die gesendet werden soll. Sie wird an jedes Script zugestellt, das auf das `onMessage`-Ereignis des Ports hört, oder an die native Anwendung, wenn dieser Port mit einer nativen Anwendung verbunden ist.
- `sender` {{optional_inline}}
  - : {{WebExtAPIRef('runtime.MessageSender')}}. Enthält Informationen über den Absender der Nachricht. Diese Eigenschaft ist nur bei Ports vorhanden, die an `onConnect`/`onConnectExternal`-Listener übergeben werden.

## Lebenszyklus

Der Lebenszyklus eines `Port` wird [in den Chrome-Dokumenten](https://developer.chrome.com/docs/extensions/develop/concepts/messaging#port-lifetime) beschrieben.

Es gibt jedoch einen wesentlichen Unterschied zwischen Firefox und Chrome, der sich aus der Tatsache ergibt, dass die `runtime.connect`- und `tabs.connect`-APIs Broadcast-Kanäle sind. Das bedeutet, dass möglicherweise mehr als ein Empfänger vorhanden ist, was zu Unklarheiten führt, wenn einer der Kontexte mit einem `runtime.onConnect`-Aufruf geschlossen wird. In Chrome bleibt ein Port so lange aktiv, wie es noch einen anderen Empfänger gibt. In Firefox wird der Port geschlossen, wenn einer der Kontexte entladen wird. Mit anderen Worten, die Trennungsbedingung,

- Alle Frames, die den Port (über `runtime.onConnect`) erhalten haben, sind entladen worden.

die in Chrome gilt, wird in Firefox ersetzt durch

- _Ein_ Frame, der den Port (über `runtime.onConnect`) erhalten hat, ist entladen worden.

siehe [Bug 1465514](https://bugzil.la/1465514).

## Browser-Kompatibilität

{{Compat}}

## Beispiele

### Verbindung von Inhaltsskripten

Dieses Inhaltsskript:

- stellt eine Verbindung zum Hintergrundskript her und speichert den `Port` in einer Variablen namens `myPort`.
- hört auf Nachrichten auf `myPort` und protokolliert sie.
- sendet Nachrichten an das Hintergrundskript, unter Verwendung von `myPort`, wenn der Benutzer auf das Dokument klickt.

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

- hört auf Verbindungsversuche vom Inhaltsskript.
- wenn es einen Verbindungsversuch erhält:

  - speichert den Port in einer Variablen namens `portFromCS`.
  - sendet dem Inhaltsskript eine Nachricht mit dem Port.
  - beginnt, ankommende Nachrichten auf dem Port zu hören und protokolliert diese.

- sendet Nachrichten an das Inhaltsskript, unter Verwendung von `portFromCS`, wenn der Benutzer auf die Browser-Aktion der Erweiterung klickt.

```js
// background-script.js

let portFromCS;

function connected(p) {
  portFromCS = p;
  portFromCS.postMessage({ greeting: "hi there content script!" });
  portFromCS.onMessage.addListener((m) => {
    console.log("In background script, received message from content script");
    console.log(m.greeting);
  });
}

browser.runtime.onConnect.addListener(connected);

browser.browserAction.onClicked.addListener(() => {
  portFromCS.postMessage({ greeting: "they clicked the button!" });
});
```

#### Mehrere Inhaltsskripte

Wenn Sie mehrere Inhaltsskripte haben, die gleichzeitig kommunizieren, möchten Sie möglicherweise jede Verbindung in einem Array speichern.

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

### Verbindung zu nativen Anwendungen

Dieses Beispiel verbindet sich mit der nativen Anwendung "ping_pong" und beginnt, Nachrichten von ihr zu empfangen. Es sendet der nativen Anwendung auch eine Nachricht, wenn der Benutzer auf ein Browser-Aktionssymbol klickt:

```js
/*
On startup, connect to the "ping_pong" app.
*/
let port = browser.runtime.connectNative("ping_pong");

/*
Listen for messages from the app.
*/
port.onMessage.addListener((response) => {
  console.log(`Received: ${response}`);
});

/*
On a click on the browser action, send the app a message.
*/
browser.browserAction.onClicked.addListener(() => {
  console.log("Sending:  ping");
  port.postMessage("ping");
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#type-Port) API. Diese Dokumentation stammt von [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.
