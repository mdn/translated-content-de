---
title: "WebTransportError: streamErrorCode-Eigenschaft"
short-title: streamErrorCode
slug: Web/API/WebTransportError/streamErrorCode
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die schreibgeschützte **`streamErrorCode`**-Eigenschaft des [`WebTransportError`](/de/docs/Web/API/WebTransportError)-Interfaces gibt eine Zahl im Bereich von 0-255 zurück, die den Protokoll-Fehlercode der Anwendung für diesen Fehler angibt, oder `null`, wenn keiner verfügbar ist.

## Wert

Eine Zahl oder `null`.

## Beispiele

```js
const url = "not-a-url";

async function initTransport(url) {
  try {
    // Initialize transport connection
    const transport = new WebTransport(url);

    // The connection can be used once ready fulfills
    await transport.ready;

    // …
  } catch (error) {
    const msg = `Transport initialization failed.
                 Reason: ${error.message}.
                 Source: ${error.source}.
                 Error code: ${error.streamErrorCode}.`;
    console.log(msg);
  }
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
