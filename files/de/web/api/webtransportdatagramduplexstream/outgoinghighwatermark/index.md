---
title: "WebTransportDatagramDuplexStream: outgoingHighWaterMark-Eigenschaft"
short-title: outgoingHighWaterMark
slug: Web/API/WebTransportDatagramDuplexStream/outgoingHighWaterMark
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`outgoingHighWaterMark`**-Eigenschaft der {{domxref("WebTransportDatagramDuplexStream")}}-Schnittstelle erhält oder setzt die High-Water-Marke für ausgehende Datenblöcke. Dies ist die maximale Größe in Blöcken, die die interne Warteschlange des ausgehenden {{domxref("WritableStream")}} erreichen kann, bevor sie als voll gilt. Siehe [Interne Warteschlangen und Warteschlangenstrategien](/de/docs/Web/API/Streams_API/Concepts#internal_queues_and_queuing_strategies) für weitere Informationen.

## Wert

Eine Zahl.

## Beispiele

```js
const url = "https://example.com:4999/wt";

async function initTransport(url) {
  // Transportverbindung initialisieren
  const transport = new WebTransport(url);

  // Die Verbindung kann genutzt werden, sobald ready erfüllt ist
  await transport.ready;

  const datagrams = transport.datagrams;

  // outgoingHighWaterMark setzen
  datagrams.outgoingHighWaterMark = 20000;

  // outgoingHighWaterMark abrufen
  console.log(datagrams.outgoingHighWaterMark);
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
