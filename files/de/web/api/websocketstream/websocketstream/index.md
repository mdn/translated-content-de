---
title: "WebSocketStream: WebSocketStream() Konstruktor"
short-title: WebSocketStream()
slug: Web/API/WebSocketStream/WebSocketStream
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{APIRef("WebSockets API")}}{{SeeCompatTable}}{{AvailableInWorkers}}{{non-standard_header}}

Der **`WebSocketStream()`** Konstruktor erstellt eine neue Instanz des [`WebSocketStream`](/de/docs/Web/API/WebSocketStream)-Objekts.

## Syntax

```js-nolint
new WebSocketStream(url)
new WebSocketStream(url, options)
```

### Parameter

- `url`
  - : Ein String, der die URL des WebSocket-Servers darstellt, zu dem Sie mit dieser `WebSocketStream`-Instanz eine Verbindung herstellen möchten. Erlaubte URL-Schemata sind `"ws"`, `"wss"`, `"http"` und `"https"`.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthalten kann:
    - `protocols` {{optional_inline}}
      - : Ein einzelner String oder ein Array von Strings, das die Subprotokolle darstellt, die der Client verwenden möchte, zum Beispiel `"amqp"` oder `"mqtt"`. Subprotokolle können aus dem [IANA WebSocket Subprotocol Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#subprotocol-name) ausgewählt werden oder benutzerdefinierte Namen sein, die sowohl vom Client als auch vom Server verstanden werden. Ein einziger Server kann mehrere WebSocket-Subprotokolle implementieren und unterschiedliche Interaktionen je nach dem angegebenen Wert handhaben. Wenn es weggelassen wird, wird standardmäßig ein leeres Array verwendet. Wenn `protocols` angegeben ist, wird die Verbindung nur hergestellt, wenn der Server meldet, dass er eines dieser Subprotokolle ausgewählt hat.
    - `signal` {{optional_inline}}
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal), das verwendet werden kann, um die Verbindung abzubrechen, bevor der [Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) abgeschlossen ist (das heißt, bevor das [`opened`](/de/docs/Web/API/WebSocketStream/opened)-Versprechen erfüllt wird). Dies ist hauptsächlich dazu gedacht, Verbindungstimeouts zu implementieren. Daher hat es nach der Herstellung der Verbindung keine Wirkung mehr.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das URL-Schema nicht eines von `"ws"`, `"wss"`, `"http"` oder `"https"` ist.

## Beispiele

### Erstellen eines `WebSocketStream`

Das einfachste Beispiel nimmt die URL eines WebSocket-Servers als Argument:

```js
const wss = new WebSocketStream("wss://example.com/wss");
```

### Erstellen eines `WebSocketStream` mit einem Verbindungstimeout

Das folgende Beispiel verwendet die `signal`-Option, um ein Timeout zu implementieren, wenn die Verbindung nicht innerhalb von 5 Sekunden hergestellt wird:

```js
const queueWSS = new WebSocketStream("wss://example.com/queue", {
  signal: AbortSignal.timeout(5000),
});
```

Beachten Sie, dass, wenn Sie sich mit localhost verbinden, dies wahrscheinlich erfolgreich ist oder fehlschlägt, bevor der Verbindungsversuch abläuft.

Sobald die Verbindung hergestellt ist, hat `signal` keine Wirkung: Um eine Verbindung zu schließen, die bereits hergestellt wurde, rufen Sie die Methode [`WebSocketStream.close()`](/de/docs/Web/API/WebSocketStream/close) auf. Das Schließen des zugrunde liegenden [`WritableStream`](/de/docs/Web/API/WritableStream) oder [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter) schließt ebenfalls den Socket.

Siehe [Verwendung von WebSocketStream zum Schreiben eines Clients](/de/docs/Web/API/WebSockets_API/Using_WebSocketStream) für ein vollständiges Beispiel mit ausführlicher Erklärung.

## Spezifikationen

Derzeit nicht Teil einer Spezifikation. Siehe https://github.com/whatwg/websockets/pull/48 für Fortschritte zur Standardisierung.

[WebSocketStream API Design](https://docs.google.com/document/d/1La1ehXw76HP6n1uUeks-WJGFgAnpX2tCjKts7QFJ57Y/edit?pli=1&tab=t.0).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebSocketStream: Integration von Streams mit der WebSocket API](https://developer.chrome.com/docs/capabilities/web-apis/websocketstream), developer.chrome.com (2020)
