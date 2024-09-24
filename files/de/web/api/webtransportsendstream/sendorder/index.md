---
title: "WebTransportSendStream: Eigenschaft sendOrder"
short-title: sendOrder
slug: Web/API/WebTransportSendStream/sendOrder
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SeeCompatTable}}{{securecontext_header}} {{AvailableInWorkers}}

Die **`sendOrder`**-Eigenschaft der {{domxref("WebTransportSendStream")}}-Schnittstelle gibt die Sendepriorität dieses Streams relativ zu anderen Streams an, für die der Wert gesetzt wurde.

Warteschlangenbytes werden zuerst für Streams mit einem höheren Wert gesendet.
Wenn nicht gesetzt, hängt die Sendepriorität von der Implementierung ab.

## Wert

Eine Zahl, die die relative Priorität dieses Streams beim Senden von Bytes angibt.

## Beispiele

Das folgende Beispiel zeigt, wie Sie die anfängliche `sendOrder` beim Aufruf von {{domxref("WebTransport.createUnidirectionalStream()")}} zum Erstellen des Sendestreams einstellen, den Wert aus dem Stream lesen und dann die Reihenfolge ändern können.
Nach der Änderung der Reihenfolge würde die Priorität dieses Streams steigen und höher werden als jeder Stream mit einer Priorität von weniger als "596996858".

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

- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- {{domxref("WebSockets API", "WebSockets API", "", "nocode")}}
- {{domxref("Streams API", "Streams API", "", "nocode")}}
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
