---
title: WebTransportDatagramDuplexStream
slug: Web/API/WebTransportDatagramDuplexStream
l10n:
  sourceCommit: 8ee9efc5f273bd71fb650f555f53c1ba3932390c
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Das **`WebTransportDatagramDuplexStream`**-Interface der [WebTransport API](/de/docs/Web/API/WebTransport_API) repräsentiert einen Duplex-Stream, der für den unzuverlässigen Transport von Datagrammen zwischen Client und Server genutzt werden kann. Es bietet Zugriff auf einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zum Lesen eingehender Datagramme, einen [`WritableStream`](/de/docs/Web/API/WritableStream) zum Schreiben ausgehender Datagramme sowie auf verschiedene Einstellungen und Statistiken im Zusammenhang mit dem Stream.

Dies wird über die [`WebTransport.datagrams`](/de/docs/Web/API/WebTransport/datagrams)-Eigenschaft aufgerufen.

"Unzuverlässig" bedeutet, dass die Übertragung von Daten nicht garantiert ist, ebenso wenig wie die Ankunft in einer bestimmten Reihenfolge. Dies ist in einigen Situationen ausreichend und ermöglicht eine sehr schnelle Lieferung. Beispielsweise könnten Sie regelmäßige Spielzustands-Updates übertragen wollen, bei denen jede Nachricht die vorhergehende ersetzt und die Reihenfolge nicht wichtig ist.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`incomingHighWaterMark`](/de/docs/Web/API/WebTransportDatagramDuplexStream/incomingHighWaterMark) {{deprecated_inline}} {{non-standard_inline}}
  - : Ruft den High-Water-Mark für eingehende Datenstücke ab oder setzt ihn — dies ist die maximale Größe in Datenstücken, die die interne Warteschlange des eingehenden [`ReadableStream`](/de/docs/Web/API/ReadableStream) erreichen kann, bevor sie als voll gilt. Weitere Informationen finden Sie unter [Interne Warteschlangen und Warteschlangenstrategien](/de/docs/Web/API/Streams_API/Concepts#internal_queues_and_queuing_strategies).
- [`incomingMaxAge`](/de/docs/Web/API/WebTransportDatagramDuplexStream/incomingMaxAge)
  - : Ruft das maximale Alter für eingehende Datagramme in Millisekunden ab oder setzt es. Gibt `null` zurück, wenn kein maximales Alter festgelegt wurde.
- [`maxDatagramSize`](/de/docs/Web/API/WebTransportDatagramDuplexStream/maxDatagramSize) {{ReadOnlyInline}}
  - : Gibt die maximal zulässige Größe ausgehender Datagramme in Bytes zurück, die zu einem [`WebTransportDatagramsWritable`](/de/docs/Web/API/WebTransportDatagramsWritable) geschrieben werden können, das über [`createWritable()`](/de/docs/Web/API/WebTransportDatagramDuplexStream/createWritable) oder die veraltete [`writable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/writable)-Eigenschaft erhalten wurde.
- [`outgoingHighWaterMark`](/de/docs/Web/API/WebTransportDatagramDuplexStream/outgoingHighWaterMark) {{deprecated_inline}} {{non-standard_inline}}
  - : Ruft den High-Water-Mark für ausgehende Datenstücke ab oder setzt ihn — dies ist die maximale Größe in Datenstücken, die die interne Warteschlange des ausgehenden [`WritableStream`](/de/docs/Web/API/WritableStream) erreichen kann, bevor sie als voll gilt. Weitere Informationen finden Sie unter [Interne Warteschlangen und Warteschlangenstrategien](/de/docs/Web/API/Streams_API/Concepts#internal_queues_and_queuing_strategies).
- [`outgoingMaxAge`](/de/docs/Web/API/WebTransportDatagramDuplexStream/outgoingMaxAge)
  - : Ruft das maximale Alter für ausgehende Datagramme in Millisekunden ab oder setzt es. Gibt `null` zurück, wenn kein maximales Alter festgelegt wurde.
- [`readable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/readable) {{ReadOnlyInline}}
  - : Gibt eine [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Instanz zurück, die verwendet werden kann, um eingehende Datagramme aus dem Stream zu lesen.
- [`writable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/writable) {{ReadOnlyInline}} {{deprecated_inline}} {{non-standard_inline}}
  - : Gibt eine [`WritableStream`](/de/docs/Web/API/WritableStream)-Instanz zurück, die verwendet werden kann, um ausgehende Datagramme in den Stream zu schreiben.

## Instanz-Methoden

- [`createWritable()`](/de/docs/Web/API/WebTransportDatagramDuplexStream/createWritable) {{experimental_inline}}
  - : Gibt eine [`WebTransportDatagramsWritable`](/de/docs/Web/API/WebTransportDatagramsWritable)-Instanz zurück, die verwendet werden kann, um ausgehende Datagramme in den Stream zu schreiben.

## Beispiele

### Schreiben ausgehender Datagramme

Dieser Code verwendet die [`createWritable()`](/de/docs/Web/API/WebTransportDatagramDuplexStream/createWritable)-Methode, falls sie unterstützt wird, um eine [`WebTransportDatagramsWritable`](/de/docs/Web/API/WebTransportDatagramsWritable)-Instanz zu erhalten, die zum Schreiben von Daten in den Transport verwendet werden kann.
Andernfalls greift er auf die veraltete [`writable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/writable)-Eigenschaft {{deprecated_inline}} {{non-standard_inline}} zurück, die ein [`WritableStream`](/de/docs/Web/API/WritableStream)-Objekt zurückgibt, in das Sie unter Verwendung eines Writers Daten schreiben können:

```js
const writableStream =
  typeof transport.datagrams.createWritable === "function"
    ? transport.datagrams.createWritable()
    : transport.datagrams.writable; // Deprecated and non-standard

const writer = writableStream.getWriter();
const data1 = new Uint8Array([65, 66, 67]);
const data2 = new Uint8Array([68, 69, 70]);
await writer.ready;
writer.write(data1);
await writer.ready;
writer.write(data2);
```

### Lesen eingehender Datagramme

Die [`readable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/readable)-Eigenschaft gibt ein [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Objekt zurück, das verwendet werden kann, um Daten vom Server zu empfangen:

```js
async function readData() {
  const reader = transport.datagrams.readable.getReader();
  while (true) {
    const { value, done } = await reader.read();
    if (done) {
      break;
    }
    // value is a Uint8Array.
    console.log(value);
  }
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
