---
title: "WebTransportError: source-Eigenschaft"
short-title: source
slug: Web/API/WebTransportError/source
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die schreibgeschützte **`source`**-Eigenschaft der {{domxref("WebTransportError")}}-Schnittstelle gibt einen enumerierten Wert zurück, der die Quelle des Fehlers angibt.

## Wert

Ein enumerierter Wert; kann entweder `stream` oder `session` sein.

## Beispiele

```js
const url = "notaurl";

async function initTransport(url) {
  try {
    // Verbindungstransport initialisieren
    const transport = new WebTransport(url);

    // Die Verbindung kann genutzt werden, sobald ready erfüllt ist
    await transport.ready;

    // ...
  } catch (error) {
    const msg = `Transportinitialisierung fehlgeschlagen.
                 Grund: ${error.message}.
                 Quelle: ${error.source}.
                 Fehlercode: ${error.streamErrorCode}.`;
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
- {{domxref("WebSockets API", "WebSockets API", "", "nocode")}}
- {{domxref("Streams API", "Streams API", "", "nocode")}}
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
