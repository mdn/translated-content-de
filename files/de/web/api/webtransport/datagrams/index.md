---
title: "WebTransport: datagrams-Eigenschaft"
short-title: datagrams
slug: Web/API/WebTransport/datagrams
l10n:
  sourceCommit: 50e0237a64ecc8107c0a608b37aae241448a5d80
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`datagrams`** der [`WebTransport`](/de/docs/Web/API/WebTransport)-Schnittstelle gibt eine [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream)-Instanz zurück, die zum Senden und Empfangen von Datagrammen verwendet werden kann – unverlässliche Datenübertragung.

"Unverlässlich" bedeutet, dass die Übertragung von Daten nicht garantiert ist, noch das Eintreffen in einer bestimmten Reihenfolge. Dies ist in einigen Situationen akzeptabel und ermöglicht eine sehr schnelle Übermittlung. Zum Beispiel könnten Sie regelmäßige Spielstatus-Updates übertragen wollen, bei denen jede Nachricht die zuvor angekommene überschreibt und die Reihenfolge nicht wichtig ist.

## Wert

Ein [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream)-Objekt.

## Beispiele

### Schreiben eines ausgehenden Datagramms

Dieser Code verwendet die Methode [`createWritable()`](/de/docs/Web/API/WebTransportDatagramDuplexStream/createWritable), falls diese unterstützt wird, um eine [`WebTransportDatagramsWritable`](/de/docs/Web/API/WebTransportDatagramsWritable)-Instanz zu erhalten, die zum Schreiben von Daten in den Transport verwendet werden kann.
Andernfalls wird auf die Eigenschaft [`writable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/writable) {{deprecated_inline}} {{non-standard_inline}} zurückgegriffen, die ein [`WritableStream`](/de/docs/Web/API/WritableStream)-Objekt zurückgibt, in das Sie Daten zur Übertragung an den Server mit einem Writer schreiben können:

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

### Lesen eines eingehenden Datagramms

Die [`WebTransportDatagramDuplexStream.readable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/readable)-Eigenschaft gibt ein [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Objekt zurück, mit dem Sie Daten vom Server empfangen können:

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
