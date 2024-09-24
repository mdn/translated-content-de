---
title: "WebTransport: Eigenschaft incomingUnidirectionalStreams"
short-title: incomingUnidirectionalStreams
slug: Web/API/WebTransport/incomingUnidirectionalStreams
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`incomingUnidirectionalStreams`** Schreibgeschützte Eigenschaft des {{domxref("WebTransport")}}-Interfaces repräsentiert einen oder mehrere unidirektionale Streams, die vom Server geöffnet wurden. Sie gibt einen {{domxref("ReadableStream")}} von {{domxref("WebTransportReceiveStream")}}-Objekten zurück. Jedes davon kann verwendet werden, um zuverlässig Daten vom Server zu lesen.

"Zuverlässig" bedeutet, dass die Übertragung und die Reihenfolge der Daten garantiert sind. Dies sorgt für eine langsamere Übermittlung (wenn auch schneller als mit WebSockets) als {{domxref("WebTransport.datagrams", "Datagramme")}}, wird jedoch in Situationen benötigt, in denen Zuverlässigkeit und Reihenfolge wichtig sind, wie z.B. in Chat-Anwendungen.

## Wert

Ein {{domxref("ReadableStream")}} von {{domxref("WebTransportReceiveStream")}}-Objekten.

## Beispiele

Eine anfängliche Funktion wird verwendet, um die {{domxref("WebTransportReceiveStream")}}-Objekte aus dem {{domxref("ReadableStream")}} zu lesen. Jedes Objekt wird dann an eine andere Funktion übergeben, um von diesen Streams zu lesen.

```js
async function receiveUnidirectional() {
  const uds = transport.incomingUnidirectionalStreams;
  const reader = uds.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    // value is an instance of WebTransportReceiveStream
    await readData(value);
  }
}

async function readData(receiveStream) {
  const reader = receiveStream.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    // value is a Uint8Array
    console.log(value);
  }
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
