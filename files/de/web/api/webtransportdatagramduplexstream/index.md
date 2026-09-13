---
title: WebTransportDatagramDuplexStream
slug: Web/API/WebTransportDatagramDuplexStream
l10n:
  sourceCommit: f8759faac983abbcd8276fd45ae881bb39efdf7a
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Das **`WebTransportDatagramDuplexStream`**-Interface der [WebTransport API](/de/docs/Web/API/WebTransport_API) stellt einen Duplex-Stream dar, der für den unzuverlässigen Transport von Datenpaketen zwischen Client und Server verwendet werden kann. Es bietet Zugriff auf einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zum Lesen eingehender Datenpakete, einen [`WritableStream`](/de/docs/Web/API/WritableStream) zum Schreiben ausgehender Datenpakete sowie verschiedene Einstellungen und Statistiken im Zusammenhang mit dem Stream.

Dies wird über die [`WebTransport.datagrams`](/de/docs/Web/API/WebTransport/datagrams)-Eigenschaft abgerufen.

"Unzuverlässig" bedeutet, dass die Übertragung von Daten nicht garantiert ist, noch die Ankunft in einer bestimmten Reihenfolge. Dies ist in manchen Situationen in Ordnung und ermöglicht eine sehr schnelle Lieferung. Zum Beispiel könnten regelmäßige Aktualisierungen des Spielstatus übertragen werden, wobei jede Nachricht die letzte übertrifft, die ankommt, und die Reihenfolge nicht wichtig ist.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`incomingHighWaterMark`](/de/docs/Web/API/WebTransportDatagramDuplexStream/incomingHighWaterMark) {{deprecated_inline}} {{non-standard_inline}}
  - : Ruft die maximale Größe in Chunks ab oder legt sie fest, die die interne Warteschlange des eingehenden [`ReadableStream`](/de/docs/Web/API/ReadableStream) erreichen kann, bevor sie als voll betrachtet wird. Weitere Informationen finden Sie unter [Interne Warteschlangen und Warteschlangstrategien](/de/docs/Web/API/Streams_API/Concepts#internal_queues_and_queuing_strategies).
- [`incomingMaxAge`](/de/docs/Web/API/WebTransportDatagramDuplexStream/incomingMaxAge)
  - : Ruft das maximale Alter für eingehende Datenpakete in Millisekunden ab oder legt es fest. Gibt `null` zurück, wenn kein maximales Alter festgelegt wurde.
- [`maxDatagramSize`](/de/docs/Web/API/WebTransportDatagramDuplexStream/maxDatagramSize) {{ReadOnlyInline}}
  - : Gibt die maximal zulässige Größe ausgehender Datenpakete in Bytes zurück, die zu einem [`WebTransportDatagramsWritable`](/de/docs/Web/API/WebTransportDatagramsWritable) geschrieben werden können, das über [`createWritable()`](/de/docs/Web/API/WebTransportDatagramDuplexStream/createWritable) oder die veraltete [`writable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/writable)-Eigenschaft erhalten wird.
- [`outgoingHighWaterMark`](/de/docs/Web/API/WebTransportDatagramDuplexStream/outgoingHighWaterMark) {{deprecated_inline}} {{non-standard_inline}}
  - : Ruft die maximale Größe in Chunks ab oder legt sie fest, die die interne Warteschlange des ausgehenden [`WritableStream`](/de/docs/Web/API/WritableStream) erreichen kann, bevor sie als voll betrachtet wird. Weitere Informationen finden Sie unter [Interne Warteschlangen und Warteschlangstrategien](/de/docs/Web/API/Streams_API/Concepts#internal_queues_and_queuing_strategies).
- [`outgoingMaxAge`](/de/docs/Web/API/WebTransportDatagramDuplexStream/outgoingMaxAge)
  - : Ruft das maximale Alter für ausgehende Datenpakete in Millisekunden ab oder legt es fest. Gibt `null` zurück, wenn kein maximales Alter festgelegt wurde.
- [`readable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/readable) {{ReadOnlyInline}}
  - : Gibt eine [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Instanz zurück, die zum Lesen eingehender Datenpakete aus dem Stream verwendet werden kann.
- [`writable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/writable) {{ReadOnlyInline}} {{deprecated_inline}} {{non-standard_inline}}
  - : Gibt eine [`WritableStream`](/de/docs/Web/API/WritableStream)-Instanz zurück, die zum Schreiben ausgehender Datenpakete in den Stream verwendet werden kann.

## Instanz-Methoden

- [`createWritable()`](/de/docs/Web/API/WebTransportDatagramDuplexStream/createWritable)
  - : Gibt eine [`WebTransportDatagramsWritable`](/de/docs/Web/API/WebTransportDatagramsWritable)-Instanz zurück, die zum Schreiben ausgehender Datenpakete in den Stream verwendet werden kann.

## Beispiele

### Schreiben ausgehender Datenpakete

Dieser Code verwendet die [`createWritable()`](/de/docs/Web/API/WebTransportDatagramDuplexStream/createWritable)-Methode, wenn sie unterstützt wird, um eine [`WebTransportDatagramsWritable`](/de/docs/Web/API/WebTransportDatagramsWritable)-Instanz zu erhalten, die zum Schreiben von Daten in den Transport verwendet werden kann. Andernfalls wird auf die [`writable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/writable)-Eigenschaft {{deprecated_inline}} {{non-standard_inline}} zurückgegriffen, die ein [`WritableStream`](/de/docs/Web/API/WritableStream)-Objekt zurückgibt, mit dem Daten mithilfe eines Schreibers geschrieben werden können:

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

### Lesen eingehender Datenpakete

Die [`readable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/readable)-Eigenschaft gibt ein [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Objekt zurück, das zum Empfangen von Daten vom Server verwendet werden kann:

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
