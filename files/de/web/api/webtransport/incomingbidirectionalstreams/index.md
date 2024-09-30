---
title: "WebTransport: incomingBidirectionalStreams-Eigenschaft"
short-title: incomingBidirectionalStreams
slug: Web/API/WebTransport/incomingBidirectionalStreams
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`incomingBidirectionalStreams`**-Eigenschaft des [`WebTransport`](/de/docs/Web/API/WebTransport)-Interfaces stellt einen oder mehrere vom Server geöffnete bidirektionale Streams dar. Sie gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) von [`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream)-Objekten zurück. Jeder dieser Streams kann verwendet werden, um zuverlässig Daten vom Server zu lesen und Daten an diesen zurückzuschreiben.

"Zuverlässig" bedeutet, dass Übertragung und Reihenfolge der Daten garantiert sind. Dies bietet eine langsamere Lieferung (wenn auch schneller als mit WebSockets) als [`Datagramme`](/de/docs/Web/API/WebTransport/datagrams), ist jedoch in Situationen erforderlich, in denen Zuverlässigkeit und Reihenfolge wichtig sind, wie bei Chat-Anwendungen.

## Wert

Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) von [`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream)-Objekten.

## Beispiele

Eine anfängliche Funktion wird verwendet, um die [`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream)-Objekte aus dem [`ReadableStream`](/de/docs/Web/API/ReadableStream) zu lesen. Für jedes wird die [`WebTransportBidirectionalStream.readable`](/de/docs/Web/API/WebTransportBidirectionalStream/readable) und [`WebTransportBidirectionalStream.writable`](/de/docs/Web/API/WebTransportBidirectionalStream/writable)-Werte an andere Funktionen übergeben, um von diesen Streams zu lesen bzw. in diese zu schreiben.

```js
async function receiveBidirectional() {
  const bds = transport.incomingBidirectionalStreams;
  const reader = bds.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    // value is an instance of WebTransportBidirectionalStream
    await readData(value.readable);
    await writeData(value.writable);
  }
}

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
- [WebSockets API](/de/docs/Web/API/WebSockets_API)
- [Streams API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
