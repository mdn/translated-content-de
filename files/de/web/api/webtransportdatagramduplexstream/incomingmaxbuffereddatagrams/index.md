---
title: "WebTransportDatagramDuplexStream: Eigenschaft incomingMaxBufferedDatagrams"
short-title: incomingMaxBufferedDatagrams
slug: Web/API/WebTransportDatagramDuplexStream/incomingMaxBufferedDatagrams
l10n:
  sourceCommit: 6a29751fddf17f53c5fc9724b422545959e5c5bf
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die Eigenschaft **`incomingMaxBufferedDatagrams`** des Interfaces [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream) gibt die maximale Anzahl eingehender Datagramme an, die in einer Warteschlange auf das Lesen aus dem Stream [`readable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/readable) warten können.

## Wert

Eine Ganzzahl.

Der Anfangswert wird vom Browser festgelegt. Wenn die Eigenschaft auf `0` gesetzt wird, erhält sie den Wert `1`.

## Beschreibung

Vom Server empfangene Datagramme werden in einer Warteschlange gehalten, bis sie aus dem Stream [`readable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/readable) gelesen werden. Treffen mehr Datagramme ein, als die Warteschlange aufnehmen kann, werden die ältesten Datagramme verworfen, um Platz für die neuen zu schaffen. Der Browser benachrichtigt Ihre Anwendung nicht, wenn Datagramme verworfen werden.

Die Anzahl der eingehenden Datagramme, die wegen einer vollen Warteschlange verworfen wurden, wird in der Eigenschaft [`droppedIncoming`](/de/docs/Web/API/WebTransport/getStats#droppedincoming) der von [`WebTransport.getStats()`](/de/docs/Web/API/WebTransport/getStats) zurückgegebenen Datagrammstatistik angegeben. Wenn diese Zahl weiter steigt, erhöhen Sie den Wert dieser Eigenschaft oder lesen Sie häufiger Datagramme aus dem Stream.

Diese Eigenschaft ersetzt die veraltete Eigenschaft [`incomingHighWaterMark`](/de/docs/Web/API/WebTransportDatagramDuplexStream/incomingHighWaterMark).

## Beispiele

### Maximale Anzahl gepufferter eingehender Datagramme festlegen

Dieses Beispiel legt fest, dass die Warteschlange für eingehende Datagramme bis zu 100 Datagramme aufnehmen kann, und gibt anschließend den Wert in der Konsole aus.

```js
const url = "https://example.com:4999/wt";

async function initTransport(url) {
  // Initialize transport connection
  const transport = new WebTransport(url);

  // The connection can be used once ready fulfills
  await transport.ready;

  const datagrams = transport.datagrams;

  // set incomingMaxBufferedDatagrams
  datagrams.incomingMaxBufferedDatagrams = 100;

  // get incomingMaxBufferedDatagrams
  console.log(datagrams.incomingMaxBufferedDatagrams);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebTransportDatagramDuplexStream.readable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/readable)
- [`WebTransport.getStats()`](/de/docs/Web/API/WebTransport/getStats)
- [`WebTransportDatagramDuplexStream.incomingMaxAge`](/de/docs/Web/API/WebTransportDatagramDuplexStream/incomingMaxAge)
- [`WebTransportDatagramDuplexStream.outgoingMaxBufferedDatagrams`](/de/docs/Web/API/WebTransportDatagramDuplexStream/outgoingMaxBufferedDatagrams)
- [WebTransport verwenden](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [Streams API](/de/docs/Web/API/Streams_API)
