---
title: "WebTransportDatagramDuplexStream: maxDatagramSize-Eigenschaft"
short-title: maxDatagramSize
slug: Web/API/WebTransportDatagramDuplexStream/maxDatagramSize
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die schreibgeschützte **`maxDatagramSize`**-Eigenschaft der {{domxref("WebTransportDatagramDuplexStream")}}-Schnittstelle gibt die maximal zulässige Größe von ausgehenden Datagrammen in Bytes zurück, die an {{domxref("WebTransportDatagramDuplexStream.writable", "writable")}} geschrieben werden können.

## Wert

Eine Zahl.

## Beispiele

```js
const url = "https://example.com:4999/wt";

async function initTransport(url) {
  // Transportverbindung initialisieren
  const transport = new WebTransport(url);

  // Die Verbindung kann verwendet werden, sobald ready erfüllt ist
  await transport.ready;

  const datagrams = transport.datagrams;

  // maxDatagramSize abrufen
  console.log(datagrams.maxDatagramSize);
}
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- {{domxref("WebSockets API", "WebSockets API", "", "nocode")}}
- {{domxref("Streams API", "Streams API", "", "nocode")}}
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
