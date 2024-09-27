---
title: "WebTransportDatagramDuplexStream: outgoingMaxAge-Eigenschaft"
short-title: outgoingMaxAge
slug: Web/API/WebTransportDatagramDuplexStream/outgoingMaxAge
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`outgoingMaxAge`**-Eigenschaft der Schnittstelle [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream) ruft das maximal zulässige Alter für ausgehende Datagramme in Millisekunden ab oder setzt es.

## Wert

Eine Zahl oder `null`, wenn kein maximales Alter festgelegt wurde.

## Beispiele

```js
const url = "https://example.com:4999/wt";

async function initTransport(url) {
  // Initialize transport connection
  const transport = new WebTransport(url);

  // The connection can be used once ready fulfills
  await transport.ready;

  const datagrams = transport.datagrams;

  // set outgoingMaxAge
  datagrams.outgoingMaxAge = 2000;

  // get outgoingMaxAge
  console.log(datagrams.outgoingMaxAge);
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
