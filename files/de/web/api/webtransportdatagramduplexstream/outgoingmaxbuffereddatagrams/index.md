---
title: "WebTransportDatagramDuplexStream: Eigenschaft outgoingMaxBufferedDatagrams"
short-title: outgoingMaxBufferedDatagrams
slug: Web/API/WebTransportDatagramDuplexStream/outgoingMaxBufferedDatagrams
l10n:
  sourceCommit: 6a29751fddf17f53c5fc9724b422545959e5c5bf
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die Eigenschaft **`outgoingMaxBufferedDatagrams`** der Schnittstelle [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream) gibt die maximale Anzahl ausgehender Datagramme an, die bei jedem [`WebTransportDatagramsWritable`](/de/docs/Web/API/WebTransportDatagramsWritable) zum Senden in die Warteschlange gestellt werden können, bevor Gegendruck angewendet wird.

## Wert

Eine Ganzzahl.

Der Anfangswert wird vom Browser festgelegt.
Wenn die Eigenschaft auf `0` gesetzt wird, erhält sie den Wert `1`.

## Beschreibung

Jedes von [`createWritable()`](/de/docs/Web/API/WebTransportDatagramDuplexStream/createWritable) zurückgegebene [`WebTransportDatagramsWritable`](/de/docs/Web/API/WebTransportDatagramsWritable) hat eine eigene Warteschlange mit Datagrammen, die auf das Senden warten.
Wenn die Anzahl der Datagramme in einer Warteschlange diesen Wert erreicht, wendet das Writable [Gegendruck](/de/docs/Web/API/Streams_API/Concepts#backpressure) an: Das von der Methode [`write()`](/de/docs/Web/API/WritableStreamDefaultWriter/write) des Writers zurückgegebene Promise und dessen [`ready`](/de/docs/Web/API/WritableStreamDefaultWriter/ready)-Promise werden erst erfüllt, wenn in der Warteschlange Platz für ein weiteres Datagramm ist.
Datagramme in der Warteschlange werden nicht verworfen, weil die Warteschlange voll ist. Sie können jedoch trotzdem verfallen, wenn [`outgoingMaxAge`](/de/docs/Web/API/WebTransportDatagramDuplexStream/outgoingMaxAge) gesetzt ist.

Wird dieser Wert erhöht, wird der Gegendruck für jedes Writable aufgehoben, dessen Warteschlange nun kürzer als der neue Wert ist.

Diese Eigenschaft ersetzt die veraltete Eigenschaft [`outgoingHighWaterMark`](/de/docs/Web/API/WebTransportDatagramDuplexStream/outgoingHighWaterMark).

## Beispiele

### Maximale Anzahl gepufferter ausgehender Datagramme festlegen

In diesem Beispiel wird die ausgehende Warteschlange jedes Writables so eingestellt, dass sie bis zu 100 Datagramme aufnehmen kann. Anschließend wird der Wert protokolliert.

```js
const url = "https://example.com:4999/wt";

async function initTransport(url) {
  // Initialize transport connection
  const transport = new WebTransport(url);

  // The connection can be used once ready fulfills
  await transport.ready;

  const datagrams = transport.datagrams;

  // set outgoingMaxBufferedDatagrams
  datagrams.outgoingMaxBufferedDatagrams = 100;

  // get outgoingMaxBufferedDatagrams
  console.log(datagrams.outgoingMaxBufferedDatagrams);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebTransportDatagramDuplexStream.createWritable()`](/de/docs/Web/API/WebTransportDatagramDuplexStream/createWritable)
- [`WebTransportDatagramDuplexStream.outgoingMaxAge`](/de/docs/Web/API/WebTransportDatagramDuplexStream/outgoingMaxAge)
- [`WebTransportDatagramDuplexStream.incomingMaxBufferedDatagrams`](/de/docs/Web/API/WebTransportDatagramDuplexStream/incomingMaxBufferedDatagrams)
- [WebTransport verwenden](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [Streams API](/de/docs/Web/API/Streams_API)
