---
title: WebTransportError
slug: Web/API/WebTransportError
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`WebTransportError`**-Schnittstelle der [WebTransport-API](/de/docs/Web/API/WebTransport_API) repräsentiert einen Fehler im Zusammenhang mit der API, der durch Serverfehler, Netzwerkverbindungsprobleme oder vom Client initiierte Abbruchoperationen entstehen kann (zum Beispiel durch einen Aufruf von [`WritableStream.abort()`](/de/docs/Web/API/WritableStream/abort)).

{{InheritanceDiagram}}

## Konstruktor

- [`WebTransportError()`](/de/docs/Web/API/WebTransportError/WebTransportError)
  - : Erstellt eine neue Instanz eines `WebTransportError`-Objekts.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`DOMException`](/de/docs/Web/API/DOMException)._

- [`source`](/de/docs/Web/API/WebTransportError/source) {{ReadOnlyInline}}
  - : Gibt einen enumerierten Wert zurück, der die Quelle des Fehlers angibt – kann entweder `stream` oder `session` sein.
- [`streamErrorCode`](/de/docs/Web/API/WebTransportError/streamErrorCode) {{ReadOnlyInline}}
  - : Gibt eine Zahl im Bereich 0-255 zurück, die den Fehlercode des Anwendungsprotokolls für diesen Fehler angibt, oder `null`, wenn keiner verfügbar ist.

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

- [Verwendung von WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [WebSockets API](/de/docs/Web/API/WebSockets_API)
- [Streams API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
