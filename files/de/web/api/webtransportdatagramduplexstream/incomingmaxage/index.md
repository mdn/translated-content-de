---
title: "WebTransportDatagramDuplexStream: incomingMaxAge-Eigenschaft"
short-title: incomingMaxAge
slug: Web/API/WebTransportDatagramDuplexStream/incomingMaxAge
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`incomingMaxAge`**-Eigenschaft des {{domxref("WebTransportDatagramDuplexStream")}}-Interfaces gibt das maximale Alter für eingehende Datagramme in Millisekunden an oder legt dieses fest.

## Wert

Eine Zahl oder `null`, wenn kein maximales Alter festgelegt wurde.

## Beispiele

```js
const url = "https://example.com:4999/wt";

async function initTransport(url) {
  // Transportverbindung initialisieren
  const transport = new WebTransport(url);

  // Die Verbindung kann genutzt werden, sobald ready erfüllt ist
  await transport.ready;

  const datagrams = transport.datagrams;

  // incomingMaxAge setzen
  datagrams.incomingMaxAge = 2000;

  // incomingMaxAge abrufen
  console.log(datagrams.incomingMaxAge);
}
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- [Verwendung von WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- {{domxref("WebSockets API", "WebSockets API", "", "nocode")}}
- {{domxref("Streams API", "Streams API", "", "nocode")}}
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
