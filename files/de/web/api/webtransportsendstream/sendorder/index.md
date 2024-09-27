---
title: "WebTransportSendStream: sendOrder-Eigenschaft"
short-title: sendOrder
slug: Web/API/WebTransportSendStream/sendOrder
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SeeCompatTable}}{{securecontext_header}} {{AvailableInWorkers}}

Die **`sendOrder`**-Eigenschaft der [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream)-Schnittstelle gibt die Sendepriorität dieses Streams relativ zu anderen Streams an, für die der Wert festgelegt wurde.

Zuerst werden die in der Warteschlange befindlichen Bytes für Streams gesendet, die einen höheren Wert haben. Wenn nicht festgelegt, hängt die Sendereihenfolge von der Implementierung ab.

## Wert

Eine Zahl, die die relative Priorität dieses Streams beim Senden von Bytes angibt.

## Beispiele

Das unten stehende Beispiel zeigt, wie Sie die anfängliche `sendOrder` festlegen können, wenn Sie [`WebTransport.createUnidirectionalStream()`](/de/docs/Web/API/WebTransport/createUnidirectionalStream) aufrufen, um den Sendestream zu erstellen, den Wert vom Stream lesen und dann die Reihenfolge ändern. Nach der Änderung der Reihenfolge würde die Priorität dieses Streams steigen und höher werden als bei jedem Stream mit einer Priorität von weniger als "596996858".

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
