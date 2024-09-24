---
title: "WebTransport: createUnidirectionalStream() Methode"
short-title: createUnidirectionalStream()
slug: Web/API/WebTransport/createUnidirectionalStream
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`createUnidirectionalStream()`** Methode des {{domxref("WebTransport")}} Interfaces öffnet asynchron einen unidirektionalen Stream.

Die Methode gibt ein {{jsxref("Promise")}} zurück, das sich zu einem {{domxref("WritableStream")}} Objekt auflöst, das verwendet werden kann, um zuverlässig Daten zum Server zu schreiben.

<!-- Note, returns a `WebTransportSendStream` according to spec, but not yet implemented -->

"Zuverlässig" bedeutet, dass Übertragung und Reihenfolge der Daten garantiert sind. Dies ermöglicht eine langsamere Zustellung (wenn auch schneller als mit WebSockets) als {{domxref("WebTransport.datagrams", "Datagrams")}}, ist aber in Situationen erforderlich, in denen Zuverlässigkeit und Reihenfolge wichtig sind, wie beispielsweise in Chat-Anwendungen.

Die relative Reihenfolge, in der die in Warteschlange stehenden Bytes aus den erstellten Streams geleert werden, kann mit der `sendOrder`-Option festgelegt werden. Wenn gesetzt, werden die Bytes in der Warteschlange in Streams mit einer höheren Sendepriorität garantiert vor denen für Streams mit einer niedrigeren Sendepriorität gesendet. Wenn die Ordnungsnummer nicht festgelegt ist, hängt die Reihenfolge, in der Bytes gesendet werden, von der Implementierung ab. Beachten Sie jedoch, dass selbst wenn Bytes aus Streams mit höherer Sendeordnung zuerst gesendet werden, sie möglicherweise nicht zuerst ankommen.

## Syntax

```js-nolint
createUnidirectionalStream()
createUnidirectionalStream(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das die folgenden Eigenschaften haben kann:

    - `sendOrder` {{optional_inline}}
      - : Ein ganzzahliger Wert, der die Sendepriorität dieses Streams relativ zu anderen Streams festlegt, für die der Wert gesetzt wurde. Bytes in der Warteschlange werden zuerst für Streams gesendet, die einen höheren Wert haben. Wenn nicht gesetzt, hängt die Sendeordnung von der Implementierung ab.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich zu einem `WebTransportSendStream` Objekt auflöst (dies ist ein {{domxref("WritableStream")}}).

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn `createUnidirectionalStream()` aufgerufen wird, während der WebTransport geschlossen oder fehlgeschlagen ist.

## Beispiele

Verwenden Sie die `createUnidirectionalStream()` Methode, um eine Referenz zu einem {{domxref("WritableStream")}} zu erhalten. Aus diesem können Sie {{domxref("WritableStream.getWriter", "einen Writer erhalten", "", "nocode")}}, um zu ermöglichen, dass Daten in den Stream geschrieben und an den Server gesendet werden.

Verwenden Sie die {{domxref("WritableStreamDefaultWriter.close", "close()")}} Methode des resultierenden {{domxref("WritableStreamDefaultWriter")}}, um die zugehörige HTTP/3-Verbindung zu schließen. Der Browser versucht, alle ausstehenden Daten zu senden, bevor die zugehörige Verbindung tatsächlich geschlossen wird.

```js
async function writeData() {
  const stream = await transport.createUnidirectionalStream({
    sendOrder: "596996858",
  });
  const writer = stream.writable.getWriter();
  const data1 = new Uint8Array([65, 66, 67]);
  const data2 = new Uint8Array([68, 69, 70]);
  writer.write(data1);
  writer.write(data2);

  try {
    await writer.close();
    console.log("Alle Daten wurden gesendet.");
  } catch (error) {
    console.error(`Ein Fehler ist aufgetreten: ${error}`);
  }
}
```

Sie können auch {{domxref("WritableStreamDefaultWriter.abort()")}} verwenden, um den Stream abrupt zu beenden. Bei der Verwendung von `abort()` kann der Browser alle ausstehenden Daten verwerfen, die noch nicht gesendet wurden.

```js
// ...

const stream = await transport.createUnidirectionalStream();
const writer = ws.getWriter();

// ...

writer.write(...);
writer.write(...);
await writer.abort();
// Möglicherweise wurden nicht alle Daten geschrieben.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- {{domxref("WebTransport.createBidirectionalStream()")}}
- {{domxref("WebSockets API", "WebSockets API", "", "nocode")}}
- {{domxref("Streams API", "Streams API", "", "nocode")}}
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
