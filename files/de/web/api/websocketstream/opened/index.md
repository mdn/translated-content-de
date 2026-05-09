---
title: "WebSocketStream: opened-Eigenschaft"
short-title: opened
slug: Web/API/WebSocketStream/opened
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{APIRef("WebSockets API")}}{{SeeCompatTable}}{{AvailableInWorkers}}{{non-standard_header}}

Die schreibgeschützte **`opened`**-Eigenschaft der [`WebSocketStream`](/de/docs/Web/API/WebSocketStream)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem Objekt erfüllt wird, sobald die Socket-Verbindung erfolgreich geöffnet ist. Unter anderem enthält dieses Objekt eine Instanz von [`ReadableStream`](/de/docs/Web/API/ReadableStream) und [`WritableStream`](/de/docs/Web/API/WritableStream) zum Empfangen und Senden von Daten über die Verbindung.

## Wert

Ein Promise, das mit einem Objekt erfüllt wird, das die folgenden Eigenschaften enthält:

- `extensions`
  - : Ein String, der alle Erweiterungen repräsentiert, die auf den `WebSocketStream` angewendet werden. Solche Erweiterungen sind derzeit nicht definiert, könnten aber in Zukunft hinzugefügt werden. Derzeit wird ein leerer String zurückgegeben.
- `protocol`
  - : Ein String, der das Subprotokoll repräsentiert, das zur Öffnung der aktuellen WebSocket-Verbindung verwendet wird (ausgewählt aus den Optionen, die in der [`protocols`](/de/docs/Web/API/WebSocketStream/WebSocketStream#protocols)-Option des `WebSocketStream()`-Konstruktors angegeben sind). Gibt einen leeren String zurück, wenn kein Subprotokoll zur Öffnung der Verbindung verwendet wurde (d.h. wenn keine Subprotokoll-Optionen im Konstruktoraufruf enthalten waren).
- `readable`
  - : Eine Instanz von [`ReadableStream`](/de/docs/Web/API/ReadableStream). Rufen Sie [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) auf, um eine Instanz von [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader) zu erhalten, die verwendet werden kann, um eingehende WebSocket-Daten zu lesen.
- `writable`
  - : Eine Instanz von [`WritableStream`](/de/docs/Web/API/WritableStream). Rufen Sie [`WritableStream.getWriter()`](/de/docs/Web/API/WritableStream/getWriter) auf, um eine Instanz von [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter) zu erhalten, die verwendet werden kann, um Daten an die WebSocket-Verbindung zu schreiben.

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

Siehe [Using WebSocketStream to write a client](/de/docs/Web/API/WebSockets_API/Using_WebSocketStream) für ein vollständiges Beispiel mit ausführlicher Erklärung.

## Spezifikationen

Derzeit nicht Teil einer Spezifikation. Siehe https://github.com/whatwg/websockets/pull/48 für den Fortschritt der Standardisierung.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebSocketStream: integration von Streams in die WebSocket-API](https://developer.chrome.com/docs/capabilities/web-apis/websocketstream), developer.chrome.com (2020)
