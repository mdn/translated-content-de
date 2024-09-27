---
title: "WebTransport: incomingUnidirectionalStreams-Eigenschaft"
short-title: incomingUnidirectionalStreams
slug: Web/API/WebTransport/incomingUnidirectionalStreams
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`incomingUnidirectionalStreams`** schreibgeschützte Eigenschaft des [`WebTransport`](/de/docs/Web/API/WebTransport)-Interfaces repräsentiert einen oder mehrere unidirektionale Streams, die vom Server geöffnet werden. Sie gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) von [`WebTransportReceiveStream`](/de/docs/Web/API/WebTransportReceiveStream)-Objekten zurück. Jedes dieser Objekte kann verwendet werden, um zuverlässig Daten vom Server zu lesen.

„Zuverlässig“ bedeutet, dass die Übertragung und Reihenfolge der Daten garantiert sind. Dies bietet eine langsamere Übermittlung (wenn auch schneller als mit WebSockets) als [`datagrams`](/de/docs/Web/API/WebTransport/datagrams), ist jedoch in Situationen erforderlich, in denen Zuverlässigkeit und Reihenfolge wichtig sind, wie z.B. bei Chat-Anwendungen.

## Wert

Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) von [`WebTransportReceiveStream`](/de/docs/Web/API/WebTransportReceiveStream)-Objekten.

## Beispiele

Eine anfängliche Funktion wird verwendet, um die [`WebTransportReceiveStream`](/de/docs/Web/API/WebTransportReceiveStream)-Objekte aus dem [`ReadableStream`](/de/docs/Web/API/ReadableStream) zu lesen. Jedes Objekt wird dann an eine andere Funktion weitergegeben, um aus diesen Streams zu lesen.

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

- [Verwendung von WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [WebSockets API](/de/docs/Web/API/WebSockets_API)
- [Streams API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
