---
title: "WebTransportDatagramDuplexStream: incomingHighWaterMark-Eigenschaft"
short-title: incomingHighWaterMark
slug: Web/API/WebTransportDatagramDuplexStream/incomingHighWaterMark
l10n:
  sourceCommit: 6a29751fddf17f53c5fc9724b422545959e5c5bf
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}{{non-standard_header}}

Die Eigenschaft **`incomingHighWaterMark`** der Schnittstelle [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream) gibt die maximale Anzahl eingehender Datagramme an, die in die Warteschlange gestellt werden können, während sie darauf warten, aus dem Stream [`readable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/readable) gelesen zu werden.
Wenn mehr Datagramme eintreffen, als die Warteschlange aufnehmen kann, werden die ältesten Datagramme in der Warteschlange verworfen.
Die Anzahl der auf diese Weise verworfenen Datagramme wird in der Eigenschaft [`droppedIncoming`](/de/docs/Web/API/WebTransport/getStats#droppedincoming) der von [`WebTransport.getStats()`](/de/docs/Web/API/WebTransport/getStats) zurückgegebenen Datagrammstatistik angegeben.

Diese Eigenschaft wurde in der Spezifikation durch [`incomingMaxBufferedDatagrams`](/de/docs/Web/API/WebTransportDatagramDuplexStream/incomingMaxBufferedDatagrams) ersetzt. Verwenden Sie stattdessen diese Eigenschaft, sofern sie unterstützt wird (siehe die Tabelle zur [Browser-Kompatibilität](/de/docs/Web/API/WebTransportDatagramDuplexStream/incomingMaxBufferedDatagrams#browser_compatibility)).

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

- [`WebTransport.getStats()`](/de/docs/Web/API/WebTransport/getStats)
- [WebTransport verwenden](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [WebSockets API](/de/docs/Web/API/WebSockets_API)
- [Streams API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
