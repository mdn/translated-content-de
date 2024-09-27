---
title: "WebSocketStream: opened-Eigenschaft"
short-title: opened
slug: Web/API/WebSocketStream/opened
l10n:
  sourceCommit: fb311d7305937497570966f015d8cc0eb1a0c29c
---

{{APIRef("WebSockets API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die schreibgeschützte **`opened`**-Eigenschaft des [`WebSocketStream`](/de/docs/Web/API/WebSocketStream)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das mit einem Objekt erfüllt wird, sobald die Socket-Verbindung erfolgreich geöffnet wurde. Dieses Objekt enthält unter anderem eine [`ReadableStream`](/de/docs/Web/API/ReadableStream)- und eine [`WritableStream`](/de/docs/Web/API/WritableStream)-Instanz zur Übertragung und zum Empfang von Daten über die Verbindung.

## Wert

Ein Promise, das mit einem Objekt erfüllt wird, welches die folgenden Eigenschaften enthält:

- `extensions`
  - : Ein String, der alle auf den `WebSocketStream` angewandten Erweiterungen darstellt. Solche Erweiterungen sind derzeit nicht definiert, könnten es jedoch in Zukunft sein. Aktuell wird ein leerer String zurückgegeben.
- `protocol`
  - : Ein String, der das Subprotokoll darstellt, das verwendet wird, um die aktuelle WebSocket-Verbindung zu öffnen (aus den Optionen gewählt, die in der [`protocols`](/de/docs/Web/API/WebSocketStream/WebSocketStream#protocols)-Option des `WebSocketStream()`-Konstruktors angegeben sind). Gibt einen leeren String zurück, wenn kein Subprotokoll zur Öffnung der Verbindung verwendet wurde (d.h. wenn keine Subprotokoll-Optionen im Konstruktoraufruf enthalten waren).
- `readable`
  - : Eine [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Instanz. Rufen Sie [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) auf, um eine [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader)-Instanz zu erhalten, die zum Lesen eingehender WebSocket-Daten verwendet werden kann.
- `writable`
  - : Eine [`WritableStream`](/de/docs/Web/API/WritableStream)-Instanz. Rufen Sie [`WritableStream.getWriter()`](/de/docs/Web/API/WritableStream/getWriter) auf, um eine [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter)-Instanz zu erhalten, die zum Schreiben von Daten in die WebSocket-Verbindung verwendet werden kann.

Das Promise wird abgelehnt, wenn die WebSocket-Verbindung fehlschlägt.

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

Siehe [Verwendung von WebSocketStream zum Schreiben eines Clients](/de/docs/Web/API/WebSockets_API/Using_WebSocketStream) für ein vollständiges Beispiel mit ausführlicher Erklärung.

## Spezifikationen

Derzeit Teil keiner Spezifikation. Siehe https://github.com/whatwg/websockets/pull/48 für den Standardisierungsfortschritt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebSocketStream: Integration von Streams mit der WebSocket API](https://developer.chrome.com/docs/capabilities/web-apis/websocketstream), developer.chrome.com (2020)
