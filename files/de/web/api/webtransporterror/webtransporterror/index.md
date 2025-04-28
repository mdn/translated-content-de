---
title: "WebTransportError: WebTransportError() Konstruktor"
short-title: WebTransportError()
slug: Web/API/WebTransportError/WebTransportError
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Der **`WebTransportError()`** Konstruktor erstellt eine neue Instanz des [`WebTransportError`](/de/docs/Web/API/WebTransportError) Objekt.

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
      - : Eine Zahl im Bereich 0-255, die den Fehlercode des Anwendungsprotokolls für diesen Fehler angibt.

## Beispiele

Ein Entwickler würde diesen Konstruktor nicht manuell verwenden. Ein neues `WebTransportError`-Objekt wird konstruiert, wenn ein Fehler im Zusammenhang mit WebTransport auftritt, zum Beispiel ein Serverfehler oder ein Netzwerkverbindungsproblem.

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
