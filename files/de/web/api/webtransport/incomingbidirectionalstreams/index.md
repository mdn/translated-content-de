---
title: "WebTransport: incomingBidirectionalStreams-Eigenschaft"
short-title: incomingBidirectionalStreams
slug: Web/API/WebTransport/incomingBidirectionalStreams
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`incomingBidirectionalStreams`** der {{domxref("WebTransport")}}-Schnittstelle repräsentiert einen oder mehrere bidirektionale Streams, die vom Server geöffnet wurden. Sie gibt einen {{domxref("ReadableStream")}} von {{domxref("WebTransportBidirectionalStream")}}-Objekten zurück. Jeder einzelne kann verwendet werden, um Daten zuverlässig vom Server zu lesen und Daten zurückzuschreiben.

"Zuverlässig" bedeutet, dass die Übertragung und Reihenfolge der Daten garantiert sind. Dies bietet eine langsamere Zustellung (wenn auch schneller als mit WebSockets) als {{domxref("WebTransport.datagrams", "Datagramme")}}, wird jedoch in Situationen benötigt, in denen Zuverlässigkeit und Ordnung wichtig sind, wie bei Chat-Anwendungen.

## Wert

Ein {{domxref("ReadableStream")}} von {{domxref("WebTransportBidirectionalStream")}}-Objekten.

## Beispiele

Eine anfängliche Funktion wird verwendet, um die {{domxref("WebTransportBidirectionalStream")}}-Objekte aus dem {{domxref("ReadableStream")}} zu lesen. Für jedes wird die {{domxref("WebTransportBidirectionalStream.readable")}}- und {{domxref("WebTransportBidirectionalStream.writable")}}-Werte an andere Funktionen übergeben, um aus diesen Streams zu lesen und zu schreiben.

```js
async function receiveBidirectional() {
  const bds = transport.incomingBidirectionalStreams;
  const reader = bds.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    // value ist eine Instanz von WebTransportBidirectionalStream
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
    // value ist ein Uint8Array
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

- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- {{domxref("WebSockets API", "WebSockets API", "", "nocode")}}
- {{domxref("Streams API", "Streams API", "", "nocode")}}
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
