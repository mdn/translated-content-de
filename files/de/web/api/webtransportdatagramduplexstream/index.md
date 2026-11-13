---
title: WebTransportDatagramDuplexStream
slug: Web/API/WebTransportDatagramDuplexStream
l10n:
  sourceCommit: 6520bd72ab19f400d537db7a53514f08a589301b
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`WebTransportDatagramDuplexStream`**-Schnittstelle der [WebTransport API](/de/docs/Web/API/WebTransport_API) stellt einen Duplex-Stream dar, der für die unzuverlässige Übertragung von Datagrammen zwischen Client und Server verwendet werden kann. Sie bietet Zugriff auf einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zum Lesen eingehender Datagramme, einen [`WritableStream`](/de/docs/Web/API/WritableStream) zum Schreiben ausgehender Datagramme sowie auf verschiedene Einstellungen und Statistiken zum Stream.

Der Zugriff erfolgt über die Eigenschaft [`WebTransport.datagrams`](/de/docs/Web/API/WebTransport/datagrams).

„Unzuverlässig“ bedeutet, dass weder die Übertragung der Daten noch ihre Ankunft in einer bestimmten Reihenfolge garantiert ist. Das ist in manchen Situationen unproblematisch und ermöglicht eine sehr schnelle Zustellung. Beispielsweise könnten Sie regelmäßig Aktualisierungen des Spielzustands übertragen, bei denen jede Nachricht die zuletzt eingetroffene ersetzt und die Reihenfolge keine Rolle spielt.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`incomingHighWaterMark`](/de/docs/Web/API/WebTransportDatagramDuplexStream/incomingHighWaterMark) {{deprecated_inline}} {{non-standard_inline}}
  - : Gibt die maximale Anzahl eingehender Datagramme an, die in die Warteschlange gestellt werden können, während sie darauf warten, aus dem [`readable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/readable)-Stream gelesen zu werden. Verwenden Sie stattdessen [`incomingMaxBufferedDatagrams`](/de/docs/Web/API/WebTransportDatagramDuplexStream/incomingMaxBufferedDatagrams).
- [`incomingMaxAge`](/de/docs/Web/API/WebTransportDatagramDuplexStream/incomingMaxAge)
  - : Ruft das maximale Alter eingehender Datagramme in Millisekunden ab oder legt es fest. Gibt `null` zurück, wenn kein maximales Alter festgelegt wurde.
- [`incomingMaxBufferedDatagrams`](/de/docs/Web/API/WebTransportDatagramDuplexStream/incomingMaxBufferedDatagrams)
  - : Gibt die maximale Anzahl eingehender Datagramme an, die in die Warteschlange gestellt werden können, während sie darauf warten, aus dem [`readable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/readable)-Stream gelesen zu werden.
- [`maxDatagramSize`](/de/docs/Web/API/WebTransportDatagramDuplexStream/maxDatagramSize) {{ReadOnlyInline}}
  - : Gibt die maximal zulässige Größe ausgehender Datagramme in Bytes zurück, die in ein über [`createWritable()`](/de/docs/Web/API/WebTransportDatagramDuplexStream/createWritable) erhaltenes [`WebTransportDatagramsWritable`](/de/docs/Web/API/WebTransportDatagramsWritable) oder über die veraltete Eigenschaft [`writable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/writable) geschrieben werden können.
- [`outgoingHighWaterMark`](/de/docs/Web/API/WebTransportDatagramDuplexStream/outgoingHighWaterMark) {{deprecated_inline}} {{non-standard_inline}}
  - : Gibt die maximale Anzahl ausgehender Datagramme an, die zum Senden in die Warteschlange gestellt werden können, bevor Gegendruck ausgeübt wird. Verwenden Sie stattdessen [`outgoingMaxBufferedDatagrams`](/de/docs/Web/API/WebTransportDatagramDuplexStream/outgoingMaxBufferedDatagrams).
- [`outgoingMaxAge`](/de/docs/Web/API/WebTransportDatagramDuplexStream/outgoingMaxAge)
  - : Ruft das maximale Alter ausgehender Datagramme in Millisekunden ab oder legt es fest. Gibt `null` zurück, wenn kein maximales Alter festgelegt wurde.
- [`outgoingMaxBufferedDatagrams`](/de/docs/Web/API/WebTransportDatagramDuplexStream/outgoingMaxBufferedDatagrams)
  - : Gibt die maximale Anzahl ausgehender Datagramme an, die für jedes [`WebTransportDatagramsWritable`](/de/docs/Web/API/WebTransportDatagramsWritable) zum Senden in die Warteschlange gestellt werden können, bevor Gegendruck ausgeübt wird.
- [`readable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/readable) {{ReadOnlyInline}}
  - : Gibt eine [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Instanz zurück, mit der eingehende Datagramme aus dem Stream gelesen werden können.
- [`writable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/writable) {{ReadOnlyInline}} {{deprecated_inline}} {{non-standard_inline}}
  - : Gibt eine [`WritableStream`](/de/docs/Web/API/WritableStream)-Instanz zurück, mit der ausgehende Datagramme in den Stream geschrieben werden können.

## Instanzmethoden

- [`createWritable()`](/de/docs/Web/API/WebTransportDatagramDuplexStream/createWritable)
  - : Gibt eine [`WebTransportDatagramsWritable`](/de/docs/Web/API/WebTransportDatagramsWritable)-Instanz zurück, mit der ausgehende Datagramme in den Stream geschrieben werden können.

## Beispiele

### Ausgehende Datagramme schreiben

Dieser Code verwendet, sofern unterstützt, die Methode [`createWritable()`](/de/docs/Web/API/WebTransportDatagramDuplexStream/createWritable), um eine [`WebTransportDatagramsWritable`](/de/docs/Web/API/WebTransportDatagramsWritable)-Instanz zu erhalten, mit der Daten an den Transport geschrieben werden können.
Andernfalls greift er auf die Eigenschaft [`writable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/writable) {{deprecated_inline}} {{non-standard_inline}} zurück. Diese gibt ein [`WritableStream`](/de/docs/Web/API/WritableStream)-Objekt zurück, in das Sie mithilfe eines Writers Daten schreiben können:

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

### Eingehende Datagramme lesen

Die Eigenschaft [`readable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/readable) gibt ein [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Objekt zurück, mit dem Sie Daten vom Server empfangen können:

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

Alternativ können Sie Datagramme in einen von Ihnen bereitgestellten Puffer lesen. Erstellen Sie dazu den Transport mit der Option [`datagramsReadableType`](/de/docs/Web/API/WebTransport/WebTransport#datagramsreadabletype), die auf `bytes` gesetzt ist, und lesen Sie den Stream mit einem [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader).
Ein Beispiel finden Sie unter [Datagramme mit einem BYOB-Reader lesen](/de/docs/Web/API/WebTransport/WebTransport#reading_datagrams_with_a_byob_reader) auf der Seite zum Konstruktor `WebTransport()`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebTransport verwenden](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [WebSockets API](/de/docs/Web/API/WebSockets_API)
- [Streams API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
