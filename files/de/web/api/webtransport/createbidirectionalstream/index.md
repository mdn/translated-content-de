---
title: "WebTransport: createBidirectionalStream()-Methode"
short-title: createBidirectionalStream()
slug: Web/API/WebTransport/createBidirectionalStream
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`createBidirectionalStream()`**-Methode der [`WebTransport`](/de/docs/Web/API/WebTransport)-Schnittstelle öffnet asynchron einen bidirektionalen Stream und gibt diesen zurück.

Die Methode gibt ein {{jsxref("Promise")}} zurück, das in ein [`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream)-Objekt aufgelöst wird, welches die Eigenschaften `readable` und `writable` enthält, die zum zuverlässigen Lesen vom und Schreiben zum Server genutzt werden können.
"Zuverlässig" bedeutet, dass Übertragung und Reihenfolge der Daten garantiert sind.
Dies bietet langsamere Lieferung (wenn auch schneller als mit WebSockets) als [`datagrams`](/de/docs/Web/API/WebTransport/datagrams), ist jedoch notwendig in Situationen, in denen Zuverlässigkeit und Reihenfolge wichtig sind, wie zum Beispiel bei Chat-Anwendungen.

Die relative Reihenfolge, in der die in Warteschlangen befindlichen Bytes von erstellten Streams geleert werden, kann über die `sendOrder`-Option festgelegt werden.
Wenn gesetzt, wird garantiert, dass Bytes in Streams mit einer höheren Sendepriorität vor Bytes in Streams mit niedrigerer Sendepriorität gesendet werden.
Wenn die Ordnungsnummer nicht gesetzt ist, hängt die Reihenfolge, in der Bytes gesendet werden, von der Implementierung ab.
Beachten Sie jedoch, dass auch wenn Bytes von Streams mit höherer Sendepriorität zuerst gesendet werden, sie nicht unbedingt zuerst ankommen müssen.

## Syntax

```js-nolint
createBidirectionalStream()
createBidirectionalStream(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das folgende Eigenschaften haben kann:
    - `sendOrder` {{optional_inline}}
      - : Ein Ganzzahlwert, der die Sendepriorität dieses Streams relativ zu anderen Streams angibt, für die der Wert gesetzt wurde.
        Bytes in der Warteschlange werden zuerst für Streams mit einem höheren Wert gesendet.
        Wenn nicht gesetzt, hängt die Sendeordnung von der Implementierung ab.

### Rückgabewert

Ein {{jsxref("Promise")}}, das in ein [`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream)-Objekt aufgelöst wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `createBidirectionalStream()` aufgerufen wird, während der `WebTransport` geschlossen oder fehlgeschlagen ist.

## Beispiele

Eine initiale Funktion wird verwendet, um Referenzen zu den Eigenschaften [`WebTransportBidirectionalStream.readable`](/de/docs/Web/API/WebTransportBidirectionalStream/readable) und [`WebTransportBidirectionalStream.writable`](/de/docs/Web/API/WebTransportBidirectionalStream/writable) zu erhalten. Diese sind Referenzen auf die Instanzen von `WebTransportReceiveStream` und `WebTransportSendStream`, welche lesbare und schreibbare Streams sind, die zum Lesen vom und Schreiben zum Server genutzt werden können.

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

Das Lesen vom `WebTransportReceiveStream` kann dann wie folgt durchgeführt werden:

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

Und das Schreiben in den `WebTransportSendStream` kann so erfolgen:

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
- [WebSockets-API](/de/docs/Web/API/WebSockets_API)
- [Streams API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
