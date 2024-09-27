---
title: "WebTransport: createBidirectionalStream()-Methode"
short-title: createBidirectionalStream()
slug: Web/API/WebTransport/createBidirectionalStream
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`createBidirectionalStream()`**-Methode des [`WebTransport`](/de/docs/Web/API/WebTransport)-Interfaces öffnet und gibt asynchron einen bidirektionalen Stream zurück.

Die Methode gibt ein {{jsxref("Promise")}} zurück, das zu einem [`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream)-Objekt aufgelöst wird, das über `readable`- und `writable`-Eigenschaften verfügt, die verwendet werden können, um zuverlässig Daten vom Server zu lesen und zu schreiben.
"Zuverlässig" bedeutet, dass die Übertragung und Reihenfolge der Daten garantiert sind.
Dies bietet eine langsamere Lieferung (wenn auch schneller als mit WebSockets) als [`datagrams`](/de/docs/Web/API/WebTransport/datagrams), ist aber in Situationen erforderlich, in denen Zuverlässigkeit und Reihenfolge wichtig sind, wie bei Chat-Anwendungen.

Die relative Reihenfolge, in der aufgestaute Bytes aus erstellten Streams geleert werden, kann mit der `sendOrder`-Option angegeben werden.
Falls festgelegt, werden in Streams mit einer höheren Sendereihenfolge aufgestaute Bytes garantiert vor aufgestauten Bytes von Streams mit einer niedrigeren Sendereihenfolge gesendet.
Wenn die Ordnungsnummer nicht gesetzt ist, hängt die Reihenfolge, in der Bytes gesendet werden, von der Implementierung ab.
Beachten Sie jedoch, dass Bytes aus Streams mit höherer Sendereihenfolge zwar zuerst gesendet, aber möglicherweise nicht zuerst empfangen werden.

## Syntax

```js-nolint
createBidirectionalStream()
createBidirectionalStream(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das die folgenden Eigenschaften haben kann:

    - `sendOrder` {{optional_inline}}
      - : Ein ganzzahliger Wert, der die Sendepriorität dieses Streams im Verhältnis zu anderen Streams angibt, für die der Wert festgelegt wurde.
        Aufgestaute Bytes werden zuerst für Streams gesendet, die einen höheren Wert haben.
        Wenn nicht festgelegt, hängt die Sendereihenfolge von der Implementierung ab.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem [`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream)-Objekt aufgelöst wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `createBidirectionalStream()` aufgerufen wird, während der `WebTransport` geschlossen oder fehlgeschlagen ist.

## Beispiele

Eine anfängliche Funktion wird verwendet, um Referenzen auf die [`WebTransportBidirectionalStream.readable`](/de/docs/Web/API/WebTransportBidirectionalStream/readable)- und [`WebTransportBidirectionalStream.writable`](/de/docs/Web/API/WebTransportBidirectionalStream/writable)-Eigenschaften zu erhalten. Diese sind Verweise auf `WebTransportReceiveStream`- und `WebTransportSendStream`-Instanzen, die lesbare und beschreibbare Streams sind, die verwendet werden können, um Daten vom Server zu lesen und zu schreiben.

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

  // ...
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

Und Schreiben in den `WebTransportSendStream` kann so erfolgen:

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

- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [`WebTransport.createUnidirectionalStream()`](/de/docs/Web/API/WebTransport/createUnidirectionalStream)
- [WebSockets API](/de/docs/Web/API/WebSockets_API)
- [Streams API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
