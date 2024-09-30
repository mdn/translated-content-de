---
title: "WebTransportDatagramDuplexStream: incomingMaxAge-Eigenschaft"
short-title: incomingMaxAge
slug: Web/API/WebTransportDatagramDuplexStream/incomingMaxAge
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`incomingMaxAge`**-Eigenschaft des [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream)-Interfaces erhält oder setzt das maximale Alter für eingehende Datagramme in Millisekunden.

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

  // set incomingMaxAge
  datagrams.incomingMaxAge = 2000;

  // get incomingMaxAge
  console.log(datagrams.incomingMaxAge);
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
