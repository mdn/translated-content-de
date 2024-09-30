---
title: "WebTransportSendStream: Eigenschaft sendOrder"
short-title: sendOrder
slug: Web/API/WebTransportSendStream/sendOrder
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SeeCompatTable}}{{securecontext_header}} {{AvailableInWorkers}}

Die **`sendOrder`**-Eigenschaft der [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream)-Schnittstelle gibt die Sendpriorität dieses Streams im Verhältnis zu anderen Streams an, für die der Wert festgelegt wurde.

In den Warteschlangen befindliche Bytes werden zuerst für Streams mit einem höheren Wert gesendet. Wenn der Wert nicht festgelegt ist, hängt die Sendereihenfolge von der Implementierung ab.

## Wert

Eine Zahl, die die relative Priorität dieses Streams beim Senden von Bytes angibt.

## Beispiele

Das folgende Beispiel zeigt, wie Sie den anfänglichen `sendOrder` festlegen können, wenn Sie [`WebTransport.createUnidirectionalStream()`](/de/docs/Web/API/WebTransport/createUnidirectionalStream) aufrufen, um den Sendstream zu erstellen, den Wert aus dem Stream lesen und dann die Reihenfolge ändern. Nach der Änderung der Reihenfolge würde die Priorität dieses Streams höher als jeder Stream mit einer Priorität von weniger als "596996858" werden.

```js
async function writeData() {
  const stream = await transport.createUnidirectionalStream({
    sendOrder: "400", // Set initial stream order
  });

  console.log(`Stream order: ${stream.sendOrder}`); // Stream order: 400

  // write data ...

  // Change the stream order
  stream.sendOrder = 596996858;
  console.log(`Stream order: ${stream.sendOrder}`); // Stream order: 596996858

  // write more data ...
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
