---
title: "WebTransportDatagramDuplexStream: incomingHighWaterMark-Eigenschaft"
short-title: incomingHighWaterMark
slug: Web/API/WebTransportDatagramDuplexStream/incomingHighWaterMark
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}{{non-standard_header}}

Die **`incomingHighWaterMark`**-Eigenschaft der Schnittstelle [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream) holt oder setzt die High Water Mark für eingehende Datenpakete — dies ist die maximale Größe, in Paketen, die die interne Warteschlange des eingehenden [`ReadableStream`](/de/docs/Web/API/ReadableStream) erreichen kann, bevor sie als voll angesehen wird. Weitere Informationen finden Sie unter [Interne Warteschlangen und Warteschlangenstrategien](/de/docs/Web/API/Streams_API/Concepts#internal_queues_and_queuing_strategies).

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

  // set incomingHighWaterMark
  datagrams.incomingHighWaterMark = 20000;

  // get incomingHighWaterMark
  console.log(datagrams.incomingHighWaterMark);
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
