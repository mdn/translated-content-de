---
title: "WebTransportDatagramDuplexStream: Eigenschaft maxDatagramSize"
short-title: maxDatagramSize
slug: Web/API/WebTransportDatagramDuplexStream/maxDatagramSize
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`maxDatagramSize`** des [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream)-Interfaces gibt die maximal zulässige Größe der ausgehenden Datagramme in Bytes zurück, die in [`writable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/writable) geschrieben werden können.

## Wert

Eine Zahl.

## Beispiele

```js
const url = "https://example.com:4999/wt";

async function initTransport(url) {
  // Initialize transport connection
  const transport = new WebTransport(url);

  // The connection can be used once ready fulfills
  await transport.ready;

  const datagrams = transport.datagrams;

  // get maxDatagramSize
  console.log(datagrams.maxDatagramSize);
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
