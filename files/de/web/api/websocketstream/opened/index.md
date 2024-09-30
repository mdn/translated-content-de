---
title: "WebSocketStream: Eigenschaft opened"
short-title: opened
slug: Web/API/WebSocketStream/opened
l10n:
  sourceCommit: fb311d7305937497570966f015d8cc0eb1a0c29c
---

{{APIRef("WebSockets API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`opened`** schreibgeschützte Eigenschaft der [`WebSocketStream`](/de/docs/Web/API/WebSocketStream)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, sobald die Socket-Verbindung erfolgreich geöffnet wurde. Dieses Objekt enthält unter anderem eine Instanz von [`ReadableStream`](/de/docs/Web/API/ReadableStream) und [`WritableStream`](/de/docs/Web/API/WritableStream) zum Empfangen und Senden von Daten über die Verbindung.

## Wert

Ein `Promise`, das mit einem Objekt erfüllt wird, welches die folgenden Eigenschaften enthält:

- `extensions`
  - : Ein Zeichenfolgenwert, der Erweiterungen darstellt, die auf den `WebSocketStream` angewendet wurden. Solche Erweiterungen sind derzeit nicht definiert, könnten aber in Zukunft existieren. Aktuell wird ein leerer String zurückgegeben.
- `protocol`
  - : Ein Zeichenfolgenwert, der das Subprotokoll darstellt, das verwendet wurde, um die aktuelle WebSocket-Verbindung zu öffnen (aus den im [`protocols`](/de/docs/Web/API/WebSocketStream/WebSocketStream#protocols)-Parameter des `WebSocketStream()`-Konstruktors festgelegten Optionen ausgewählt). Gibt einen leeren String zurück, wenn kein Subprotokoll verwendet wurde, um die Verbindung zu öffnen (d. h., wenn keine Subprotokoll-Optionen im Konstruktoraufruf enthalten waren).
- `readable`
  - : Eine [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Instanz. Rufen Sie [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) auf, um eine [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader)-Instanz zu erhalten, die verwendet werden kann, um eingehende WebSocket-Daten zu lesen.
- `writable`
  - : Eine [`WritableStream`](/de/docs/Web/API/WritableStream)-Instanz. Rufen Sie [`WritableStream.getWriter()`](/de/docs/Web/API/WritableStream/getWriter) auf, um eine [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter)-Instanz zu erhalten, die verwendet werden kann, um Daten an die WebSocket-Verbindung zu schreiben.

Das `Promise` wird abgelehnt, wenn die WebSocket-Verbindung fehlschlägt.

## Beispiele

```js
const wsURL = "wss://127.0.0.1/";
const wss = new WebSocketStream(wsURL);

async function start() {
  const { readable, writable, extensions, protocol } = await wss.opened;

  const reader = readable.getReader();
  const writer = writable.getWriter();

  writer.write("ping");

  while (true) {
    const { value, done } = await reader.read();
    if (done) {
      break;
    }

    setTimeout(() => {
      writer.write("ping");
    }, 5000);
  }
}
```

Für ein vollständiges Beispiel mit ausführlicher Erklärung siehe [Using WebSocketStream to write a client](/de/docs/Web/API/WebSockets_API/Using_WebSocketStream).

## Spezifikationen

Derzeit nicht Teil einer Spezifikation. Siehe https://github.com/whatwg/websockets/pull/48 für den Stand der Standardisierung.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebSocketStream: Integrating streams with the WebSocket API](https://developer.chrome.com/docs/capabilities/web-apis/websocketstream), developer.chrome.com (2020)
