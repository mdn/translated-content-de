---
title: WebTransportError
slug: Web/API/WebTransportError
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Das **`WebTransportError`**-Interface der [WebTransport API](/de/docs/Web/API/WebTransport_API) stellt einen Fehler im Zusammenhang mit der API dar, der durch Serverfehler, Netzwerkverbindungsprobleme oder vom Client initiierte Abbruchvorgänge (zum Beispiel durch einen Aufruf von [`WritableStream.abort()`](/de/docs/Web/API/WritableStream/abort)) entstehen kann.

{{InheritanceDiagram}}

## Konstruktor

- [`WebTransportError()`](/de/docs/Web/API/WebTransportError/WebTransportError)
  - : Erstellt eine neue `WebTransportError`-Objektinstanz.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem übergeordneten Element, [`DOMException`](/de/docs/Web/API/DOMException)._

- [`source`](/de/docs/Web/API/WebTransportError/source) {{ReadOnlyInline}}
  - : Gibt einen enumerierten Wert zurück, der die Quelle des Fehlers angibt. Kann entweder `stream` oder `session` sein.
- [`streamErrorCode`](/de/docs/Web/API/WebTransportError/streamErrorCode) {{ReadOnlyInline}}
  - : Gibt eine Zahl im Bereich von 0-255 zurück, die den Anwendungsprotokoll-Fehlercode für diesen Fehler angibt, oder `null`, wenn keiner verfügbar ist.

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
