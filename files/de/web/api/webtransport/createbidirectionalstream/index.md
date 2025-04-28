---
title: "WebTransport: Methode createBidirectionalStream()"
short-title: createBidirectionalStream()
slug: Web/API/WebTransport/createBidirectionalStream
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`createBidirectionalStream()`** Methode der [`WebTransport`](/de/docs/Web/API/WebTransport)-Schnittstelle öffnet und gibt asynchron einen bidirektionalen Stream zurück.

Die Methode gibt ein {{jsxref("Promise")}} zurück, das zu einem [`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream)-Objekt aufgelöst wird, welches `readable`- und `writable`-Eigenschaften hat, die zum zuverlässigen Lesen vom und Schreiben zum Server verwendet werden können. "Zuverlässig" bedeutet, dass Übertragung und Reihenfolge der Daten garantiert sind. Dies bietet eine langsamere Übertragung (wenn auch schneller als mit WebSockets) als [`datagrams`](/de/docs/Web/API/WebTransport/datagrams), ist aber in Situationen notwendig, in denen Zuverlässigkeit und Reihenfolge wichtig sind, wie z.B. bei Chat-Anwendungen.

Die relative Reihenfolge, in der gepufferte Bytes aus erstellten Streams entleert werden, kann mit der `sendOrder`-Option spezifiziert werden. Wenn gesetzt, werden gepufferte Bytes in Streams mit einer höheren Sendereihenfolge garantiert vor gepufferten Bytes in Streams mit einer niedrigeren Sendereihenfolge gesendet. Wenn die Ordnungszahl nicht festgelegt ist, hängt die Reihenfolge, in der Bytes gesendet werden, von der Implementierung ab. Beachten Sie jedoch, dass selbst wenn Bytes von Streams mit höherer Sendereihenfolge zuerst gesendet werden, sie möglicherweise nicht zuerst ankommen.

## Syntax

```js-nolint
createBidirectionalStream()
createBidirectionalStream(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das die folgenden Eigenschaften haben kann:

    - `sendOrder` {{optional_inline}}
      - : Ein ganzzahliger Wert, der die Sendepriorität dieses Streams relativ zu anderen Streams angibt, für die der Wert festgelegt wurde. Gepufferte Bytes werden zuerst für Streams gesendet, die einen höheren Wert haben. Wenn nicht festgelegt, hängt die Sendereihenfolge von der Implementierung ab.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem [`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream)-Objekt aufgelöst wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `createBidirectionalStream()` aufgerufen wird, während der `WebTransport` geschlossen oder fehlgeschlagen ist.

## Beispiele

Eine anfängliche Funktion wird verwendet, um Referenzen zu den [`WebTransportBidirectionalStream.readable`](/de/docs/Web/API/WebTransportBidirectionalStream/readable)- und [`WebTransportBidirectionalStream.writable`](/de/docs/Web/API/WebTransportBidirectionalStream/writable)-Eigenschaften zu erhalten. Diese sind Referenzen zu `WebTransportReceiveStream` und `WebTransportSendStream` Instanzen, welche lesbare und schreibbare Streams sind, die zum Lesen vom und Schreiben zum Server verwendet werden können.

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

Das Lesen aus dem `WebTransportReceiveStream` kann dann wie folgt durchgeführt werden:

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

Und das Schreiben zum `WebTransportSendStream` kann wie folgt durchgeführt werden:

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
