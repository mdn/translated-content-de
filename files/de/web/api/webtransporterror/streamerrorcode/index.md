---
title: "WebTransportError: streamErrorCode-Eigenschaft"
short-title: streamErrorCode
slug: Web/API/WebTransportError/streamErrorCode
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die schreibgeschützte **`streamErrorCode`**-Eigenschaft des {{domxref("WebTransportError")}}-Interfaces gibt eine Zahl im Bereich von 0-255 zurück, welche den Anwendungsprotokoll-Fehlercode für diesen Fehler angibt, oder `null`, falls keiner verfügbar ist.

## Wert

Eine Zahl oder `null`.

## Beispiele

```js
const url = "notaurl";

async function initTransport(url) {
  try {
    // Initialize transport connection
    const transport = new WebTransport(url);

    // The connection can be used once ready fulfills
    await transport.ready;

    // ...
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

- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- {{domxref("WebSockets API", "WebSockets API", "", "nocode")}}
- {{domxref("Streams API", "Streams API", "", "nocode")}}
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
