---
title: "WebTransportDatagramDuplexStream: Eigenschaft outgoingHighWaterMark"
short-title: outgoingHighWaterMark
slug: Web/API/WebTransportDatagramDuplexStream/outgoingHighWaterMark
l10n:
  sourceCommit: 6a29751fddf17f53c5fc9724b422545959e5c5bf
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}{{non-standard_header}}

Die Eigenschaft **`outgoingHighWaterMark`** der Schnittstelle [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream) gibt die maximale Anzahl ausgehender Datagramme an, die zum Senden in die Warteschlange gestellt werden können, bevor [Backpressure](/de/docs/Web/API/Streams_API/Concepts#backpressure) angewendet wird.
Datagramme in der Warteschlange werden nicht verworfen, weil die Warteschlange voll ist. Sie können jedoch verfallen, wenn [`outgoingMaxAge`](/de/docs/Web/API/WebTransportDatagramDuplexStream/outgoingMaxAge) festgelegt ist.

Diese Eigenschaft wurde in der Spezifikation durch [`outgoingMaxBufferedDatagrams`](/de/docs/Web/API/WebTransportDatagramDuplexStream/outgoingMaxBufferedDatagrams) ersetzt. Verwenden Sie stattdessen diese Eigenschaft, sofern sie unterstützt wird (siehe die Tabelle zur [Browser-Kompatibilität](/de/docs/Web/API/WebTransportDatagramDuplexStream/outgoingMaxBufferedDatagrams#browser_compatibility)).

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

- [WebTransport verwenden](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [WebSockets API](/de/docs/Web/API/WebSockets_API)
- [Streams API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
