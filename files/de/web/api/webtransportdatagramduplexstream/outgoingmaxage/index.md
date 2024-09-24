---
title: "WebTransportDatagramDuplexStream: outgoingMaxAge-Eigenschaft"
short-title: outgoingMaxAge
slug: Web/API/WebTransportDatagramDuplexStream/outgoingMaxAge
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`outgoingMaxAge`**-Eigenschaft der {{domxref("WebTransportDatagramDuplexStream")}}-Schnittstelle ruft das maximale Alter für ausgehende Datagramme in Millisekunden ab oder legt es fest.

## Wert

Eine Zahl oder `null`, wenn kein maximales Alter festgelegt wurde.

## Beispiele

```js
const url = "https://example.com:4999/wt";

async function initTransport(url) {
  // Transportverbindung initialisieren
  const transport = new WebTransport(url);

  // Die Verbindung kann verwendet werden, sobald ready erfüllt ist
  await transport.ready;

  const datagrams = transport.datagrams;

  // outgoingMaxAge festlegen
  datagrams.outgoingMaxAge = 2000;

  // outgoingMaxAge abrufen
  console.log(datagrams.outgoingMaxAge);
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
