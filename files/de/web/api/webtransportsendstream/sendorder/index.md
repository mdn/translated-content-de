---
title: "WebTransportSendStream: sendOrder-Eigenschaft"
short-title: sendOrder
slug: Web/API/WebTransportSendStream/sendOrder
l10n:
  sourceCommit: 581fd2ecfa9a6a5fb6d2b9d0085a089213e168fa
---

{{APIRef("WebTransport API")}}{{securecontext_header}} {{AvailableInWorkers}}

Die **`sendOrder`**-Eigenschaft des [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream)-Interfaces gibt die Send-Priorität dieses Streams im Verhältnis zu anderen Streams an, für die der Wert festgelegt wurde.

Zuerst werden die Warteschlangen-Bytes für Streams gesendet, die einen höheren Wert haben. Wenn nichts festgelegt ist, hängt die Sendereihenfolge von der Implementierung ab.

## Wert

Eine Zahl, die die relative Priorität dieses Streams beim Senden von Bytes angibt.

## Beispiele

Das folgende Beispiel zeigt, wie Sie die anfängliche `sendOrder` festlegen können, wenn Sie [`WebTransport.createUnidirectionalStream()`](/de/docs/Web/API/WebTransport/createUnidirectionalStream) aufrufen, um den Sendestream zu erstellen, den Wert aus dem Stream lesen und dann die Reihenfolge ändern. Nach der Änderung der Reihenfolge würde die Priorität dieses Streams erhöht werden, sodass sie höher ist als bei jedem Stream mit einer Priorität von weniger als „596996858“.

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
