---
title: "WebSocketStream: WebSocketStream() Konstruktor"
short-title: WebSocketStream()
slug: Web/API/WebSocketStream/WebSocketStream
l10n:
  sourceCommit: 7a418e5d057adb45a0c7c4ec3b03baa8c3be18f4
---

{{APIRef("WebSockets API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Der **`WebSocketStream()`** Konstruktor erstellt eine neue Instanz des [`WebSocketStream`](/de/docs/Web/API/WebSocketStream) Objekts.

## Syntax

```js-nolint
new WebSocketStream(url)
new WebSocketStream(url, options)
```

### Parameter

- `url`
  - : Ein String, der die URL des WebSocket-Servers darstellt, mit dem Sie sich über diese `WebSocketStream`-Instanz verbinden möchten. Erlaubte URL-Schemata sind `"ws"`, `"wss"`, `"http"` und `"https"`.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthalten kann:
    - `protocols` {{optional_inline}}
      - : Ein einzelner String oder ein Array von Strings, die das bzw. die Subprotokoll(e) repräsentieren, das bzw. die der Client verwenden möchte, z.B. `"amqp"` oder `"mqtt"`. Subprotokolle können aus dem [IANA WebSocket Subprotocol Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#subprotocol-name) ausgewählt oder benutzerdefinierte Namen sein, die vom Client und dem Server gemeinsam verstanden werden. Ein einzelner Server kann mehrere WebSocket-Subprotokolle implementieren und verschiedene Arten von Interaktionen je nach angegebenem Wert behandeln. Wenn es weggelassen wird, wird standardmäßig ein leeres Array verwendet. Wenn `protocols` enthalten ist, wird die Verbindung nur hergestellt, wenn der Server meldet, dass er eines dieser Subprotokolle ausgewählt hat.
    - `signal` {{optional_inline}}
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal), das verwendet werden kann, um die Verbindung abzubrechen, bevor der [Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) abgeschlossen ist (das heißt, bevor das [`opened`](/de/docs/Web/API/WebSocketStream/opened)-Versprechen erfüllt wird). Dies ist hauptsächlich dazu gedacht, Verbindungstimeouts zu implementieren. Daher hat es nach der Herstellung der Verbindung keine Wirkung mehr.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das URL-Schema nicht eines von `"ws"`, `"wss"`, `"http"` oder `"https"` ist.

## Beispiele

### Erstellen eines `WebSocketStream`

Das einfachste Beispiel verwendet die URL eines WebSocket-Servers als Argument:

```js
const wss = new WebSocketStream("wss://example.com/wss");
```

### Erstellen eines `WebSocketStream` mit Verbindungstimeout

Das folgende Beispiel verwendet die `signal`-Option, um ein Timeout zu implementieren, falls die Verbindung nicht innerhalb von 5 Sekunden hergestellt wird:

```js
const queueWSS = new WebSocketStream("wss://example.com/queue", {
  signal: AbortSignal.timeout(5000),
});
```

Beachten Sie, dass bei einer Verbindung zu localhost die Verbindung wahrscheinlich sofort erfolgreich ist oder fehlschlägt, bevor der Verbindungsversuch abläuft.

Sobald die Verbindung hergestellt ist, hat `signal` keine Wirkung mehr: Um eine bereits hergestellte Verbindung zu schließen, rufen Sie die Methode [`WebSocketStream.close()`](/de/docs/Web/API/WebSocketStream/close) auf. Das Schließen des darunterliegenden [`WritableStream`](/de/docs/Web/API/WritableStream) oder [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter) schließt ebenfalls den Socket.

Siehe [Verwendung von WebSocketStream zum Schreiben eines Clients](/de/docs/Web/API/WebSockets_API/Using_WebSocketStream) für ein vollständiges Beispiel mit vollständiger Erklärung.

## Spezifikationen

Gegenwärtig nicht Teil einer Spezifikation. Siehe https://github.com/whatwg/websockets/pull/48 für den Stand der Standardisierung.

[WebSocketStream API-Design](https://docs.google.com/document/d/1La1ehXw76HP6n1uUeks-WJGFgAnpX2tCjKts7QFJ57Y/edit?pli=1&tab=t.0).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebSocketStream: Integration von Streams mit der WebSocket-API](https://developer.chrome.com/docs/capabilities/web-apis/websocketstream), developer.chrome.com (2020)
