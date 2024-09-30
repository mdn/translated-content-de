---
title: "WebTransportDatagramDuplexStream: outgoingHighWaterMark-Eigenschaft"
short-title: outgoingHighWaterMark
slug: Web/API/WebTransportDatagramDuplexStream/outgoingHighWaterMark
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`outgoingHighWaterMark`**-Eigenschaft der [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream)-Schnittstelle ruft die Obergrenze für ausgehende Datenblöcke ab oder legt sie fest — dies ist die maximale Größe in Blöcken, die die interne Warteschlange des ausgehenden [`WritableStream`](/de/docs/Web/API/WritableStream) erreichen kann, bevor sie als voll betrachtet wird. Weitere Informationen finden Sie unter [Interne Warteschlangen und Warteschlangenstrategien](/de/docs/Web/API/Streams_API/Concepts#internal_queues_and_queuing_strategies).

## Wert

Eine Zahl.

## Beispiele

```js
const url = "https://example.com:4999/wt";

async function initTransport(url) {
  // Initialize transport connection
  const transport = new WebTransport(url);

  // The connection can be used once ready fulfills
  await transport.ready;

  const datagrams = transport.datagrams;

  // set outgoingHighWaterMark
  datagrams.outgoingHighWaterMark = 20000;

  // get outgoingHighWaterMark
  console.log(datagrams.outgoingHighWaterMark);
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
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3)
