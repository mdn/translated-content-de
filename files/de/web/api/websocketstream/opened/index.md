---
title: "WebSocketStream: opened-Eigenschaft"
short-title: opened
slug: Web/API/WebSocketStream/opened
l10n:
  sourceCommit: bd8dbe863a306cf7114752bd936d012524b13517
---

{{APIRef("WebSockets API")}}{{SeeCompatTable}}

Die **`opened`** schreibgeschützte Eigenschaft der {{domxref("WebSocketStream")}}-Schnittstelle liefert ein {{jsxref("Promise")}}, das mit einem Objekt erfüllt wird, sobald die Socket-Verbindung erfolgreich geöffnet ist. Dieses Objekt enthält unter anderem eine {{domxref("ReadableStream")}}- und eine {{domxref("WritableStream")}}-Instanz zum Empfangen und Senden von Daten über die Verbindung.

## Wert

Ein Promise, das mit einem Objekt erfüllt wird, das die folgenden Eigenschaften enthält:

- `extensions`
  - : Ein String, der alle auf den `WebSocketStream` angewendeten Erweiterungen darstellt. Solche Erweiterungen sind derzeit nicht definiert, könnten aber in Zukunft verfügbar sein. Zurzeit wird ein leerer String zurückgegeben.
- `protocol`
  - : Ein String, der das Subprotokoll darstellt, das für die Eröffnung der aktuellen WebSocket-Verbindung verwendet wird (aus den Optionen ausgewählt, die in der [`protocols`](/de/docs/Web/API/WebSocketStream/WebSocketStream#protocols)-Option des `WebSocketStream()`-Konstruktors angegeben wurden). Gibt einen leeren String zurück, wenn kein Subprotokoll für die Eröffnung der Verbindung verwendet wurde (d.h. keine Subprotokolloptionen im Konstruktoraufruf enthalten waren).
- `readable`
  - : Eine {{domxref("ReadableStream")}}-Instanz. Rufen Sie {{domxref("ReadableStream.getReader()")}} darauf auf, um eine {{domxref("ReadableStreamDefaultReader")}}-Instanz zu erhalten, mit der eingehende WebSocket-Daten gelesen werden können.
- `writable`
  - : Eine {{domxref("WritableStream")}}-Instanz. Rufen Sie {{domxref("WritableStream.getWriter()")}} darauf auf, um eine {{domxref("WritableStreamDefaultWriter")}}-Instanz zu erhalten, mit der Daten in die WebSocket-Verbindung geschrieben werden können.

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

Gehört derzeit zu keiner Spezifikation. Siehe https://github.com/whatwg/websockets/pull/48 für den Stand der Standardisierung.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebSocketStream: Integration von Streams mit der WebSocket-API](https://developer.chrome.com/docs/capabilities/web-apis/websocketstream), developer.chrome.com (2020)
