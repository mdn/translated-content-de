---
title: "WebSocketStream: opened-Eigenschaft"
short-title: opened
slug: Web/API/WebSocketStream/opened
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("WebSockets API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`opened`** schreibgeschützte Eigenschaft der [`WebSocketStream`](/de/docs/Web/API/WebSocketStream)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem Objekt erfüllt wird, sobald die Socket-Verbindung erfolgreich geöffnet wurde. Dieses Objekt enthält unter anderem eine [`ReadableStream`](/de/docs/Web/API/ReadableStream)- und eine [`WritableStream`](/de/docs/Web/API/WritableStream)-Instanz, um Daten über die Verbindung zu empfangen und zu senden.

## Wert

Ein Promise, das mit einem Objekt erfüllt wird, das die folgenden Eigenschaften enthält:

- `extensions`
  - : Ein String, der alle auf den `WebSocketStream` angewendeten Erweiterungen darstellt. Solche Erweiterungen sind derzeit nicht definiert, könnten aber in Zukunft existieren. Aktuell wird ein leerer String zurückgegeben.
- `protocol`
  - : Ein String, der das Subprotokoll darstellt, das zum Öffnen der aktuellen WebSocket-Verbindung verwendet wird (aus den in der [`protocols`](/de/docs/Web/API/WebSocketStream/WebSocketStream#protocols)-Option des `WebSocketStream()`-Konstruktors angegebenen Optionen ausgewählt). Gibt einen leeren String zurück, wenn kein Subprotokoll verwendet wurde, um die Verbindung zu öffnen (d.h. keine Subprotokoll-Optionen im Konstruktoraufruf enthalten waren).
- `readable`
  - : Eine [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Instanz. Rufen Sie [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) auf, um eine [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader)-Instanz zu erhalten, die verwendet werden kann, um eingehende WebSocket-Daten zu lesen.
- `writable`
  - : Eine [`WritableStream`](/de/docs/Web/API/WritableStream)-Instanz. Rufen Sie [`WritableStream.getWriter()`](/de/docs/Web/API/WritableStream/getWriter) auf, um eine [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter)-Instanz zu erhalten, die verwendet werden kann, um Daten an die WebSocket-Verbindung zu schreiben.

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

Siehe [Verwendung von WebSocketStream zum Erstellen eines Clients](/de/docs/Web/API/WebSockets_API/Using_WebSocketStream) für ein vollständiges Beispiel mit ausführlicher Erklärung.

## Spezifikationen

Derzeit kein Teil einer Spezifikation. Siehe https://github.com/whatwg/websockets/pull/48 für den Fortschritt der Standardisierung.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebSocketStream: Integration von Streams mit der WebSocket-API](https://developer.chrome.com/docs/capabilities/web-apis/websocketstream), developer.chrome.com (2020)
