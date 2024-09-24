---
title: "WebTransport: Datagrams-Eigenschaft"
short-title: Datagrams
slug: Web/API/WebTransport/datagrams
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`datagrams`** nur-lesbare Eigenschaft der {{domxref("WebTransport")}}-Schnittstelle gibt eine {{domxref("WebTransportDatagramDuplexStream")}}-Instanz zurück, die zum Senden und Empfangen von Datagrammen — unzuverlässiger Datenübertragung — verwendet werden kann.

"Unzuverlässig" bedeutet, dass die Datenübertragung nicht garantiert ist und auch nicht in einer bestimmten Reihenfolge ankommt. Dies ist in einigen Situationen in Ordnung und ermöglicht eine sehr schnelle Lieferung. Zum Beispiel könnte man regelmäßig Spielstatusaktualisierungen übertragen wollen, bei denen jede Nachricht die zuletzt eingetroffene überschreibt und die Reihenfolge unwichtig ist.

## Wert

Ein {{domxref("WebTransportDatagramDuplexStream")}}-Objekt.

## Beispiele

### Schreiben eines ausgehenden Datagramms

Die {{domxref("WebTransportDatagramDuplexStream.writable")}}-Eigenschaft gibt ein {{domxref("WritableStream")}}-Objekt zurück, an das Sie Daten mithilfe eines Writers zur Übertragung an den Server schreiben können:

```js
const writer = transport.datagrams.writable.getWriter();
const data1 = new Uint8Array([65, 66, 67]);
const data2 = new Uint8Array([68, 69, 70]);
writer.write(data1);
writer.write(data2);
```

### Lesen eines eingehenden Datagramms

Die {{domxref("WebTransportDatagramDuplexStream.readable")}}-Eigenschaft gibt ein {{domxref("ReadableStream")}}-Objekt zurück, das Sie zum Empfangen von Daten vom Server verwenden können:

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
- {{domxref("WebSockets API", "WebSockets API", "", "nocode")}}
- {{domxref("Streams API", "Streams API", "", "nocode")}}
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
