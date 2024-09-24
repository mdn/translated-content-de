---
title: "WebTransportError: WebTransportError()-Konstruktor"
short-title: WebTransportError()
slug: Web/API/WebTransportError/WebTransportError
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Der **`WebTransportError()`**-Konstruktor erstellt eine neue Instanz des {{domxref("WebTransportError")}}-Objekts.

## Syntax

```js-nolint
new WebTransportError(init)
```

### Parameter

- `init` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `message`
      - : Ein String, der den aufgetretenen Fehler beschreibt.
    - `streamErrorCode`
      - : Eine Zahl im Bereich von 0-255, die den Anwendungsprotokoll-Fehlercode für diesen Fehler angibt.

## Beispiele

Ein Entwickler würde diesen Konstruktor nicht manuell nutzen. Ein neues `WebTransportError`-Objekt wird erstellt, wenn ein Fehler im Zusammenhang mit WebTransport auftritt, zum Beispiel ein Serverfehler oder ein Netzwerkverbindungsproblem.

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
- [WebTransport over HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
