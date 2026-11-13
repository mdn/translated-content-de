---
title: "WebTransport: datagrams-Eigenschaft"
short-title: datagrams
slug: Web/API/WebTransport/datagrams
l10n:
  sourceCommit: 6520bd72ab19f400d537db7a53514f08a589301b
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`datagrams`** der Schnittstelle [`WebTransport`](/de/docs/Web/API/WebTransport) gibt eine Instanz von [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream) zurück, mit der Datagramme gesendet und empfangen werden können – eine unzuverlässige Form der Datenübertragung.

„Unzuverlässig“ bedeutet, dass weder die Übertragung der Daten noch ihre Ankunft in einer bestimmten Reihenfolge garantiert ist. In manchen Situationen ist das unproblematisch und ermöglicht eine sehr schnelle Übertragung. Beispielsweise können Sie regelmäßige Aktualisierungen des Spielzustands übertragen, bei denen jede Nachricht die zuletzt angekommene ersetzt und die Reihenfolge keine Rolle spielt.

## Wert

Ein [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream)-Objekt.

## Beispiele

### Ein ausgehendes Datagramm schreiben

Dieser Code verwendet, falls unterstützt, die Methode [`createWritable()`](/de/docs/Web/API/WebTransportDatagramDuplexStream/createWritable), um eine Instanz von [`WebTransportDatagramsWritable`](/de/docs/Web/API/WebTransportDatagramsWritable) zu erhalten, mit der Daten zur Übertragung geschrieben werden können.
Andernfalls greift er auf die Eigenschaft [`writable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/writable) {{deprecated_inline}} {{non-standard_inline}} zurück. Diese gibt ein [`WritableStream`](/de/docs/Web/API/WritableStream)-Objekt zurück, in das Sie mithilfe eines Writers Daten für die Übertragung an den Server schreiben können:

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

### Ein eingehendes Datagramm lesen

Die Eigenschaft [`WebTransportDatagramDuplexStream.readable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/readable) gibt ein [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Objekt zurück, mit dem Sie Daten vom Server empfangen können:

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

Wenn Sie Datagramme stattdessen in einen von Ihnen bereitgestellten Puffer einlesen möchten, erstellen Sie den Transport mit der Option [`datagramsReadableType`](/de/docs/Web/API/WebTransport/WebTransport#datagramsreadabletype) auf `bytes` gesetzt und lesen Sie den Stream mit einem [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader).
Siehe das Beispiel [Datagramme mit einem BYOB-Reader lesen](/de/docs/Web/API/WebTransport/WebTransport#reading_datagrams_with_a_byob_reader) auf der Seite zum Konstruktor `WebTransport()`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebTransport verwenden](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [WebSockets API](/de/docs/Web/API/WebSockets_API)
- [Streams API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
