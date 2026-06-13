---
title: WebTransportDatagramDuplexStream
slug: Web/API/WebTransportDatagramDuplexStream
l10n:
  sourceCommit: 50e0237a64ecc8107c0a608b37aae241448a5d80
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Das **`WebTransportDatagramDuplexStream`**-Interface der [WebTransport API](/de/docs/Web/API/WebTransport_API) repräsentiert einen Duplex-Stream, der für den unzuverlässigen Transport von Datagrammen zwischen Client und Server verwendet werden kann. Es bietet Zugriff auf einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zum Lesen eingehender Datagramme, einen [`WritableStream`](/de/docs/Web/API/WritableStream) zum Schreiben ausgehender Datagramme sowie verschiedene Einstellungen und Statistiken im Zusammenhang mit dem Stream.

Dies ist über die [`WebTransport.datagrams`](/de/docs/Web/API/WebTransport/datagrams)-Eigenschaft zugänglich.

"Unzuverlässig" bedeutet, dass die Datenübertragung nicht garantiert wird und auch nicht die Ankunft in einer bestimmten Reihenfolge. Dies ist in einigen Situationen akzeptabel und ermöglicht eine sehr schnelle Zustellung. Beispielsweise möchten Sie möglicherweise regelmäßige Aktualisierungen des Spielzustands übermitteln, bei denen jede Nachricht die vorherige, die ankommt, ersetzt und die Reihenfolge nicht wichtig ist.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`incomingHighWaterMark`](/de/docs/Web/API/WebTransportDatagramDuplexStream/incomingHighWaterMark)
  - : Ruft die Hochwassermarke für eingehende Datenblöcke ab oder legt sie fest – dies ist die maximale Größe in Blöcken, die die interne Warteschlange des eingehenden [`ReadableStream`](/de/docs/Web/API/ReadableStream) erreichen kann, bevor sie als voll betrachtet wird. Weitere Informationen finden Sie unter [Interne Warteschlangen und Warteschlangenstrategien](/de/docs/Web/API/Streams_API/Concepts#internal_queues_and_queuing_strategies).
- [`incomingMaxAge`](/de/docs/Web/API/WebTransportDatagramDuplexStream/incomingMaxAge)
  - : Ruft das maximale Alter für eingehende Datagramme in Millisekunden ab oder legt es fest. Gibt `null` zurück, wenn kein maximales Alter festgelegt wurde.
- [`maxDatagramSize`](/de/docs/Web/API/WebTransportDatagramDuplexStream/maxDatagramSize) {{ReadOnlyInline}}
  - : Gibt die maximal zulässige Größe ausgehender Datagramme in Bytes zurück, die in den [`writable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/writable) geschrieben werden können.
- [`outgoingHighWaterMark`](/de/docs/Web/API/WebTransportDatagramDuplexStream/outgoingHighWaterMark)
  - : Ruft die Hochwassermarke für ausgehende Datenblöcke ab oder legt sie fest – dies ist die maximale Größe in Blöcken, die die interne Warteschlange des ausgehenden [`WritableStream`](/de/docs/Web/API/WritableStream) erreichen kann, bevor sie als voll betrachtet wird. Weitere Informationen finden Sie unter [Interne Warteschlangen und Warteschlangenstrategien](/de/docs/Web/API/Streams_API/Concepts#internal_queues_and_queuing_strategies).
- [`outgoingMaxAge`](/de/docs/Web/API/WebTransportDatagramDuplexStream/outgoingMaxAge)
  - : Ruft das maximale Alter für ausgehende Datagramme in Millisekunden ab oder legt es fest. Gibt `null` zurück, wenn kein maximales Alter festgelegt wurde.
- [`readable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/readable) {{ReadOnlyInline}}
  - : Gibt eine [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Instanz zurück, die verwendet werden kann, um eingehende Datagramme aus dem Stream zu lesen.
- [`writable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/writable) {{ReadOnlyInline}} {{deprecated_inline}} {{non-standard_inline}}
  - : Gibt eine [`WritableStream`](/de/docs/Web/API/WritableStream)-Instanz zurück, die verwendet werden kann, um ausgehende Datagramme in den Stream zu schreiben.

## Beispiele

### Schreiben ausgehender Datagramme

Dieser Code verwendet die [`createWritable()`](/de/docs/Web/API/WebTransportDatagramDuplexStream/createWritable)-Methode, falls sie unterstützt wird, um eine [`WebTransportDatagramsWritable`](/de/docs/Web/API/WebTransportDatagramsWritable)-Instanz zu erhalten, die zum Schreiben von Daten in den Transport verwendet werden kann.
Andernfalls wird auf die [`writable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/writable)-Eigenschaft {{deprecated_inline}} {{non-standard_inline}} zurückgegriffen, die ein [`WritableStream`](/de/docs/Web/API/WritableStream)-Objekt zurückgibt, in das Sie mit einem Writer Daten schreiben können:

```js
const writableStream =
  typeof transport.datagrams.createWritable === "function"
    ? transport.datagrams.createWritable()
    : transport.datagrams.writable; // Deprecated and non-standard.

const writer = writableStream.getWriter();
const data1 = new Uint8Array([65, 66, 67]);
const data2 = new Uint8Array([68, 69, 70]);
await writer.ready;
writer.write(data1);
await writer.ready;
writer.write(data2);
```

### Lesen eingehender Datagramme

Die [`readable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/readable)-Eigenschaft gibt ein [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Objekt zurück, das Sie verwenden können, um Daten vom Server zu empfangen:

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
