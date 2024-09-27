---
title: "WebTransport: datagrams-Eigenschaft"
short-title: datagrams
slug: Web/API/WebTransport/datagrams
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`datagrams`** Schreibgeschützt-Eigenschaft des [`WebTransport`](/de/docs/Web/API/WebTransport)-Interfaces gibt eine Instanz von [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream) zurück, die zum Senden und Empfangen von Datagrammen – unzuverlässiger Datenübertragung – verwendet werden kann.

"Unzuverlässig" bedeutet, dass die Übertragung von Daten nicht garantiert wird und auch nicht in einer bestimmten Reihenfolge erfolgt. Dies ist in einigen Situationen in Ordnung und ermöglicht eine sehr schnelle Zustellung. Beispielsweise möchten Sie vielleicht regelmäßige Spielzustands-Updates übertragen, bei denen jede Nachricht die vorhergehende ersetzt und die Reihenfolge unwichtig ist.

## Wert

Ein [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream)-Objekt.

## Beispiele

### Schreiben eines ausgehenden Datagramms

Die [`WebTransportDatagramDuplexStream.writable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/writable)-Eigenschaft gibt ein [`WritableStream`](/de/docs/Web/API/WritableStream)-Objekt zurück, auf das Sie mit einem Schreiber Daten zur Übertragung an den Server schreiben können:

```js
const writer = transport.datagrams.writable.getWriter();
const data1 = new Uint8Array([65, 66, 67]);
const data2 = new Uint8Array([68, 69, 70]);
writer.write(data1);
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

- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [WebSockets API](/de/docs/Web/API/WebSockets_API)
- [Streams API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
