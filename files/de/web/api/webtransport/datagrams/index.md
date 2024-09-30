---
title: "WebTransport: datagrams-Eigenschaft"
short-title: datagrams
slug: Web/API/WebTransport/datagrams
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`datagrams`** des [`WebTransport`](/de/docs/Web/API/WebTransport)-Interfaces gibt eine [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream)-Instanz zurück, die verwendet werden kann, um Datagramme zu senden und zu empfangen — unzuverlässige Datenübertragung.

"Unzuverlässig" bedeutet, dass die Übertragung von Daten nicht garantiert ist und auch die Reihenfolge des Eintreffens nicht festgelegt ist. Dies ist in einigen Situationen unproblematisch und ermöglicht eine sehr schnelle Lieferung. Beispielsweise möchten Sie möglicherweise regelmäßige Spielzustandsaktualisierungen übermitteln, bei denen jede Nachricht die letzte ersetzt, die angekommen ist, und bei denen die Reihenfolge unwichtig ist.

## Wert

Ein [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream)-Objekt.

## Beispiele

### Ein ausgehendes Datagramm schreiben

Die [`WebTransportDatagramDuplexStream.writable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/writable)-Eigenschaft gibt ein [`WritableStream`](/de/docs/Web/API/WritableStream)-Objekt zurück, in das Sie mithilfe eines Writers Daten schreiben können, um sie an den Server zu übertragen:

```js
const writer = transport.datagrams.writable.getWriter();
const data1 = new Uint8Array([65, 66, 67]);
const data2 = new Uint8Array([68, 69, 70]);
writer.write(data1);
writer.write(data2);
```

### Ein eingehendes Datagramm lesen

Die [`WebTransportDatagramDuplexStream.readable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/readable)-Eigenschaft gibt ein [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Objekt zurück, das Sie verwenden können, um Daten vom Server zu empfangen:

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

- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [WebSockets API](/de/docs/Web/API/WebSockets_API)
- [Streams API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
