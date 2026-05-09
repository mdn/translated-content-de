---
title: WebSocketStream
slug: Web/API/WebSocketStream
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{APIRef("WebSockets API")}}{{SeeCompatTable}}{{AvailableInWorkers}}{{non-standard_header}}

Das **`WebSocketStream`**-Interface der [WebSockets-API](/de/docs/Web/API/WebSockets_API) ist eine auf Promises basierende API zum Verbinden mit einem WebSocket-Server. Sie verwendet [Streams](/de/docs/Web/API/Streams_API), um Daten über die Verbindung zu senden und zu empfangen, und kann daher automatisch den Stream-[Rückdruck](/de/docs/Web/API/Streams_API/Concepts#backpressure) nutzen, um die Lese- oder Schreibgeschwindigkeit zu regulieren und Engpässe in der Anwendung zu vermeiden.

{{InheritanceDiagram}}

## Konstruktor

- [`WebSocketStream()`](/de/docs/Web/API/WebSocketStream/WebSocketStream) {{experimental_inline}} {{non-standard_inline}}
  - : Erstellt eine neue `WebSocketStream`-Objektinstanz.

## Instanz-Eigenschaften

- [`url`](/de/docs/Web/API/WebSocketStream/url) {{ReadOnlyInline}} {{experimental_inline}} {{non-standard_inline}}
  - : Gibt die URL des WebSocket-Servers zurück, mit dem die `WebSocketStream`-Instanz erstellt wurde.
- [`closed`](/de/docs/Web/API/WebSocketStream/closed) {{ReadOnlyInline}} {{experimental_inline}} {{non-standard_inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn die Socket-Verbindung geschlossen wird. Das Objekt enthält den Schließcode und den Grund, wie vom Server gesendet.
- [`opened`](/de/docs/Web/API/WebSocketStream/opened) {{ReadOnlyInline}} {{experimental_inline}} {{non-standard_inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, sobald die Socket-Verbindung erfolgreich geöffnet ist. Unter anderem enthält dieses Objekt eine Instanz von [`ReadableStream`](/de/docs/Web/API/ReadableStream) und [`WritableStream`](/de/docs/Web/API/WritableStream) zum Empfangen und Senden von Daten über die Verbindung.

## Instanz-Methoden

- [`close()`](/de/docs/Web/API/WebSocketStream/close) {{experimental_inline}} {{non-standard_inline}}
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

Siehe [Verwendung von WebSocketStream zum Schreiben eines Clients](/de/docs/Web/API/WebSockets_API/Using_WebSocketStream) für ein vollständiges Beispiel mit vollständiger Erklärung.

## Spezifikationen

Derzeit nicht Teil einer Spezifikation. Siehe https://github.com/whatwg/websockets/pull/48 für den Standardisierungsfortschritt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebSocketStream: Integration von Streams mit der WebSocket-API](https://developer.chrome.com/docs/capabilities/web-apis/websocketstream), developer.chrome.com (2020)
