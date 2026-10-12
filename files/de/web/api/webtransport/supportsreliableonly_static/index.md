---
title: "WebTransport: Statische Eigenschaft supportsReliableOnly"
short-title: supportsReliableOnly
slug: Web/API/WebTransport/supportsReliableOnly_static
l10n:
  sourceCommit: f91fc65d574ad719b1a23e975c4b8e904e1fc4da
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die statische, schreibgeschützte Eigenschaft **`supportsReliableOnly`** der Schnittstelle [`WebTransport`](/de/docs/Web/API/WebTransport) gibt einen booleschen Wert zurück. Dieser gibt an, ob der Browser [`WebTransport`](/de/docs/Web/API/WebTransport)-Sitzungen ausschließlich über zuverlässige Transportprotokolle wie HTTP/2 unterstützt. Solche Sitzungen können keine unzuverlässigen Datagramme senden, da diese HTTP/3 über QUIC benötigen.

## Wert

Ein boolescher Wert: `true`, wenn der Browser `WebTransport`-Sitzungen ausschließlich über zuverlässige Transportprotokolle unterstützt, andernfalls `false`.

## Beispiele

### Grundlegende Verwendung

```js
const url = "https://example.com:4999/webtransport";

async function connect() {
  // WebTransport itself may be unavailable, so check before reading the static property
  if (typeof WebTransport === "undefined") {
    console.log("WebTransport is not supported in this browser.");
    return;
  }

  // Without reliable-only support, the session needs HTTP/3,
  // so it fails on networks that block UDP
  if (!WebTransport.supportsReliableOnly) {
    console.log("This browser can't fall back to a reliable-only session.");
  }

  const transport = new WebTransport(url);

  try {
    await transport.ready;
    console.log("Connected");
  } catch (error) {
    console.error("Connection failed:", error);
  }
}

connect();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebTransport verwenden](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [WebSockets API](/de/docs/Web/API/WebSockets_API)
- [Streams API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
