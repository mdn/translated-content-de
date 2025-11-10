---
title: "WebTransport: createBidirectionalStream() Methode"
short-title: createBidirectionalStream()
slug: Web/API/WebTransport/createBidirectionalStream
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`createBidirectionalStream()`** Methode des [`WebTransport`](/de/docs/Web/API/WebTransport) Interfaces öffnet asynchron und gibt einen bidirektionalen Stream zurück.

Die Methode gibt ein {{jsxref("Promise")}} zurück, das zu einem [`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream) Objekt aufgelöst wird, welches `readable` und `writable` Eigenschaften hat, die verwendet werden können, um zuverlässig vom und zum Server zu lesen und zu schreiben. "Zuverlässig" bedeutet, dass die Übertragung und Reihenfolge der Daten garantiert wird. Dies bietet eine langsamere Lieferung (wenn auch schneller als mit WebSockets) als [`datagrams`](/de/docs/Web/API/WebTransport/datagrams), ist jedoch erforderlich in Situationen, in denen Zuverlässigkeit und Ordnung wichtig sind, wie z.B. bei Chat-Anwendungen.

Die relative Reihenfolge, in der die anstehenden Bytes aus den erstellten Streams geleert werden, kann mit der `sendOrder` Option spezifiziert werden. Wenn gesetzt, werden anstehende Bytes in Streams mit einer höheren Sendeordnung garantiert vor den anstehenden Bytes für Streams mit einer niedrigeren Sendeordnung gesendet. Wenn die Ordnungsnummer nicht gesetzt ist, hängt die Reihenfolge, in der Bytes gesendet werden, von der Implementierung ab. Beachten Sie jedoch, dass selbst wenn Bytes von Streams mit höherer Sendeordnung zuerst gesendet werden, sie nicht unbedingt zuerst ankommen.

## Syntax

```js-nolint
createBidirectionalStream()
createBidirectionalStream(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften haben kann:
    - `sendOrder` {{optional_inline}}
      - : Ein ganzzahliger Wert, der die Sendepriorität dieses Streams relativ zu anderen Streams angibt, für die der Wert festgelegt wurde. Anstehende Bytes werden zuerst für Streams gesendet, die einen höheren Wert haben. Falls nicht gesetzt, hängt die Sendeordnung von der Implementierung ab.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem [`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream) Objekt aufgelöst wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `createBidirectionalStream()` aufgerufen wird, während der `WebTransport` geschlossen oder fehlgeschlagen ist.

## Beispiele

Eine Anfangsfunktion wird verwendet, um Referenzen zu den [`WebTransportBidirectionalStream.readable`](/de/docs/Web/API/WebTransportBidirectionalStream/readable) und [`WebTransportBidirectionalStream.writable`](/de/docs/Web/API/WebTransportBidirectionalStream/writable) Eigenschaften zu erhalten. Diese sind Referenzen zu `WebTransportReceiveStream` und `WebTransportSendStream` Instanzen, bei denen es sich um lesbare und beschreibbare Ströme handelt, die verwendet werden können, um vom Server zu lesen und zum Server zu schreiben.

```js
async function setUpBidirectional() {
  const stream = await transport.createBidirectionalStream({
    sendOrder: "596996858",
  });
  // stream is a WebTransportBidirectionalStream
  // stream.readable is a ReadableStream
  const readable = stream.readable;
  // stream.writable is a WritableStream
  const writable = stream.writable;

  // …
}
```

Lesen vom `WebTransportReceiveStream` kann dann wie folgt erfolgen:

```js
async function readData(readable) {
  const reader = readable.getReader();
  while (true) {
    const { value, done } = await reader.read();
    if (done) {
      break;
    }
    // value is a Uint8Array.
    console.log(value);
  }
}
```

Und das Schreiben in den `WebTransportSendStream` kann wie folgt erfolgen:

```js
async function writeData(writable) {
  const writer = writable.getWriter();
  const data1 = new Uint8Array([65, 66, 67]);
  const data2 = new Uint8Array([68, 69, 70]);
  writer.write(data1);
  writer.write(data2);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [`WebTransport.createUnidirectionalStream()`](/de/docs/Web/API/WebTransport/createUnidirectionalStream)
- [WebSockets API](/de/docs/Web/API/WebSockets_API)
- [Streams API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
