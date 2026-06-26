---
title: WebTransportDatagramDuplexStream
slug: Web/API/WebTransportDatagramDuplexStream
l10n:
  sourceCommit: 361dd9caf4ac5db8a73cc33e4d8ee43fa2e35fcc
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`WebTransportDatagramDuplexStream`**-Schnittstelle der [WebTransport API](/de/docs/Web/API/WebTransport_API) repräsentiert einen Duplex-Stream, der für den unzuverlässigen Transport von Datagrammen zwischen Client und Server verwendet werden kann. Sie bietet Zugriff auf einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zum Lesen eingehender Datagramme, einen [`WritableStream`](/de/docs/Web/API/WritableStream) zum Schreiben ausgehender Datagramme sowie verschiedene Einstellungen und Statistiken im Zusammenhang mit dem Stream.

Zugriff hierauf erfolgt über die [`WebTransport.datagrams`](/de/docs/Web/API/WebTransport/datagrams)-Eigenschaft.

"Unzuverlässig" bedeutet, dass die Übertragung von Daten nicht garantiert ist, noch die Ankunft in einer bestimmten Reihenfolge. Dies ist in einigen Situationen akzeptabel und ermöglicht eine sehr schnelle Lieferung. Beispielsweise könnten Sie regelmäßige Spielstand-Updates übertragen wollen, bei denen jede Nachricht die zuletzt eingetroffene überschreibt und die Reihenfolge nicht wichtig ist.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`incomingHighWaterMark`](/de/docs/Web/API/WebTransportDatagramDuplexStream/incomingHighWaterMark)
  - : Ruft den Höchststand für eingehende Datenblöcke ab oder legt diesen fest – dies ist die maximale Größe, in Blöcken, die die interne Warteschlange des eingehenden [`ReadableStream`](/de/docs/Web/API/ReadableStream) erreichen kann, bevor sie als voll betrachtet wird. Weitere Informationen finden Sie unter [Interne Warteschlangen und Warteschlangestrategien](/de/docs/Web/API/Streams_API/Concepts#internal_queues_and_queuing_strategies).
- [`incomingMaxAge`](/de/docs/Web/API/WebTransportDatagramDuplexStream/incomingMaxAge)
  - : Ruft das maximale Alter für eingehende Datagramme in Millisekunden ab oder legt dieses fest. Gibt `null` zurück, wenn kein maximales Alter festgelegt wurde.
- [`maxDatagramSize`](/de/docs/Web/API/WebTransportDatagramDuplexStream/maxDatagramSize) {{ReadOnlyInline}}
  - : Gibt die maximal zulässige Größe ausgehender Datagramme in Bytes zurück, die an ein [`WebTransportDatagramsWritable`](/de/docs/Web/API/WebTransportDatagramsWritable), das über [`createWritable()`](/de/docs/Web/API/WebTransportDatagramDuplexStream/createWritable) erhalten wurde, geschrieben werden können, oder über die veraltete [`writable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/writable)-Eigenschaft.
- [`outgoingHighWaterMark`](/de/docs/Web/API/WebTransportDatagramDuplexStream/outgoingHighWaterMark)
  - : Ruft den Höchststand für ausgehende Datenblöcke ab oder legt diesen fest – dies ist die maximale Größe, in Blöcken, die die interne Warteschlange des ausgehenden [`WritableStream`](/de/docs/Web/API/WritableStream) erreichen kann, bevor sie als voll betrachtet wird. Weitere Informationen finden Sie unter [Interne Warteschlangen und Warteschlangestrategien](/de/docs/Web/API/Streams_API/Concepts#internal_queues_and_queuing_strategies).
- [`outgoingMaxAge`](/de/docs/Web/API/WebTransportDatagramDuplexStream/outgoingMaxAge)
  - : Ruft das maximale Alter für ausgehende Datagramme in Millisekunden ab oder legt dieses fest. Gibt `null` zurück, wenn kein maximales Alter festgelegt wurde.
- [`readable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/readable) {{ReadOnlyInline}}
  - : Gibt eine [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Instanz zurück, die zum Lesen eingehender Datagramme aus dem Stream verwendet werden kann.
- [`writable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/writable) {{ReadOnlyInline}} {{deprecated_inline}} {{non-standard_inline}}
  - : Gibt eine [`WritableStream`](/de/docs/Web/API/WritableStream)-Instanz zurück, die zum Schreiben ausgehender Datagramme in den Stream verwendet werden kann.

## Instanz-Methoden

- [`createWritable()`](/de/docs/Web/API/WebTransportDatagramDuplexStream/createWritable) {{experimental_inline}}
  - : Gibt eine [`WebTransportDatagramsWritable`](/de/docs/Web/API/WebTransportDatagramsWritable)-Instanz zurück, die zum Schreiben ausgehender Datagramme in den Stream verwendet werden kann.

## Beispiele

### Schreiben ausgehender Datagramme

Dieser Code verwendet die `createWritable()`-Methode, sofern diese unterstützt wird, um eine [`WebTransportDatagramsWritable`](/de/docs/Web/API/WebTransportDatagramsWritable)-Instanz zu erhalten, die zum Schreiben von Daten in den Transport verwendet werden kann.
Andernfalls fällt er auf die `writable`-Eigenschaft {{deprecated_inline}} {{non-standard_inline}} zurück, die ein [`WritableStream`](/de/docs/Web/API/WritableStream)-Objekt zurückgibt, in das Sie Daten mittels eines Writers schreiben können:

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

Die `readable`-Eigenschaft gibt ein [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Objekt zurück, das Sie verwenden können, um Daten vom Server zu empfangen:

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
