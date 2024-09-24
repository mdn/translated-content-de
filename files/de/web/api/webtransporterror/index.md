---
title: WebTransportError
slug: Web/API/WebTransportError
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`WebTransportError`**-Schnittstelle der {{domxref("WebTransport API", "WebTransport API", "", "nocode")}} repräsentiert einen mit der API verbundenen Fehler, der durch Serverfehler, Netzwerkverbindungsprobleme oder durch den Client initiierte Abbruchvorgänge (zum Beispiel durch einen Aufruf von {{domxref("WritableStream.abort()")}}) entstehen kann.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("WebTransportError.WebTransportError", "WebTransportError()")}}
  - : Erstellt eine neue Instanz des `WebTransportError`-Objekts.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem übergeordneten Element, {{DOMxRef("DOMException")}}._

- {{domxref("WebTransportError.source", "source")}} {{ReadOnlyInline}}
  - : Gibt einen enumerierten Wert zurück, der die Quelle des Fehlers angibt – kann entweder `stream` oder `session` sein.
- {{domxref("WebTransportError.streamErrorCode", "streamErrorCode")}} {{ReadOnlyInline}}
  - : Gibt eine Zahl im Bereich 0-255 zurück, die den Anwendungsprotokoll-Fehlercode für diesen Fehler angibt, oder `null`, wenn keiner verfügbar ist.

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
    const msg = `Transport initialisierung fehlgeschlagen.
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

- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- {{domxref("WebSockets API", "WebSockets API", "", "nocode")}}
- {{domxref("Streams API", "Streams API", "", "nocode")}}
- [WebTransport over HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
