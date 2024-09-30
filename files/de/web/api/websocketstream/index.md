---
title: WebSocketStream
slug: Web/API/WebSocketStream
l10n:
  sourceCommit: fb311d7305937497570966f015d8cc0eb1a0c29c
---

{{APIRef("WebSockets API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Das **`WebSocketStream`**-Interface der [WebSockets-API](/de/docs/Web/API/WebSockets_API) ist eine versprechenbasierte API zum Verbinden mit einem WebSocket-Server. Es verwendet [Streams](/de/docs/Web/API/Streams_API), um Daten über die Verbindung zu senden und zu empfangen, und kann daher automatisch von der Stream-[Gegenstromkontrolle](/de/docs/Web/API/Streams_API/Concepts#backpressure) profitieren, die die Geschwindigkeit des Lesens oder Schreibens reguliert, um Engpässe in der Anwendung zu vermeiden.

{{InheritanceDiagram}}

## Konstruktor

- [`WebSocketStream()`](/de/docs/Web/API/WebSocketStream/WebSocketStream) {{experimental_inline}}
  - : Erstellt eine neue Instanz des `WebSocketStream`-Objekts.

## Instanz-Eigenschaften

- [`url`](/de/docs/Web/API/WebSocketStream/url) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt die URL des WebSocket-Servers zurück, mit dem die `WebSocketStream`-Instanz erstellt wurde.
- [`closed`](/de/docs/Web/API/WebSocketStream/closed) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Objekt erfüllt wird, sobald die Socket-Verbindung geschlossen ist. Das Objekt enthält den Schließscode und den Grund, wie er vom Server gesendet wurde.
- [`opened`](/de/docs/Web/API/WebSocketStream/opened) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Objekt erfüllt wird, sobald die Socket-Verbindung erfolgreich geöffnet wurde. Unter anderem enthält dieses Objekt eine Instanz von [`ReadableStream`](/de/docs/Web/API/ReadableStream) und [`WritableStream`](/de/docs/Web/API/WritableStream) zum Empfangen und Senden von Daten über die Verbindung.

## Instanz-Methoden

- [`close()`](/de/docs/Web/API/WebSocketStream/close) {{experimental_inline}}
  - : Schließt die WebSocket-Verbindung.

## Beispiele

```js
const output = document.querySelector("#output");

function writeToScreen(message) {
  const pElem = document.createElement("p");
  pElem.textContent = message;
  output.appendChild(pElem);
}

if (!("WebSocketStream" in self)) {
  writeToScreen("Your browser does not support WebSocketStream");
} else {
  const wsURL = "ws://127.0.0.1/";
  const wss = new WebSocketStream(wsURL);

  console.log(wss.url);

  async function start() {
    const { readable, writable, extensions, protocol } = await wss.opened;
    writeToScreen("CONNECTED");
    closeBtn.disabled = false;
    const reader = readable.getReader();
    const writer = writable.getWriter();

    writer.write("ping");
    writeToScreen("SENT: ping");

    while (true) {
      const { value, done } = await reader.read();
      writeToScreen(`RECEIVED: ${value}`);
      if (done) {
        break;
      }

      setTimeout(() => {
        writer.write("ping");
        writeToScreen("SENT: ping");
      }, 5000);
    }
  }

  start();
}
```

Sehen Sie [Using WebSocketStream to write a client](/de/docs/Web/API/WebSockets_API/Using_WebSocketStream) für ein vollständiges Beispiel mit umfassender Erklärung.

## Spezifikationen

Derzeit nicht Teil irgendeiner Spezifikation. Siehe https://github.com/whatwg/websockets/pull/48 für den Standardisierungsfortschritt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebSocketStream: integrating streams with the WebSocket API](https://developer.chrome.com/docs/capabilities/web-apis/websocketstream), developer.chrome.com (2020)
