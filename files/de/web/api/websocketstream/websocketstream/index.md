---
title: "WebSocketStream: WebSocketStream() Konstruktor"
short-title: WebSocketStream()
slug: Web/API/WebSocketStream/WebSocketStream
l10n:
  sourceCommit: fb311d7305937497570966f015d8cc0eb1a0c29c
---

{{APIRef("WebSockets API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Der **`WebSocketStream()`**-Konstruktor erstellt eine neue Instanz des [`WebSocketStream`](/de/docs/Web/API/WebSocketStream)-Objekts.

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
      - : Ein einzelner String oder ein Array von Strings, die das/die Subprotokoll(e) repräsentieren, die der Client verwenden möchte, z. B. `"amqp"` oder `"mqtt"`. Subprotokolle können aus dem [IANA-WebSocket-Subprotokollnamen-Register](https://www.iana.org/assignments/websocket/websocket.xml#subprotocol-name) ausgewählt oder individuell zwischen Client und Server vereinbart werden. Ein einzelner Server kann mehrere WebSocket-Subprotokolle implementieren und verschiedene Arten von Interaktionen abhängig vom angegebenen Wert verarbeiten. Wenn es weggelassen wird, wird standardmäßig ein leeres Array verwendet. Wenn `protocols` eingeschlossen ist, wird die Verbindung nur hergestellt, wenn der Server berichtet, dass er eines dieser Subprotokolle ausgewählt hat.
    - `signal` {{optional_inline}}
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal), das zu einem [`AbortController`](/de/docs/Web/API/AbortController) gehört, den Sie verwenden möchten, um die WebSocket-Verbindung zu schließen.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das URL-Schema nicht eines der folgenden ist: `"ws"`, `"wss"`, `"http"` oder `"https"`.

## Beispiele

Das einfachste Beispiel nimmt die URL eines WebSocket-Servers als Argument:

```js
const wss = new WebSocketStream("wss://example.com/wss");
```

Ein fortgeschritteneres Beispiel kann auch ein Optionsobjekt enthalten, das benutzerdefinierte Protokolle und/oder ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) enthält:

```js
const controller = new AbortController();
const queueWSS = new WebSocketStream("wss://example.com/queue", {
  protocols: ["amqp", "mqtt"],
  signal: controller.signal,
});
```

Zu einem späteren Zeitpunkt kann [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort) aufgerufen werden, wenn erforderlich, um die Verbindung zu schließen:

```js
controller.abort();
```

Alternativ können Sie die Methode [`WebSocketStream.close()`](/de/docs/Web/API/WebSocketStream/close) verwenden, um eine Verbindung zu schließen, dies ist jedoch hauptsächlich erforderlich, wenn Sie einen benutzerdefinierten Code und/oder einen Grund für die Berichterstattung durch den Server angeben möchten.

siehe [Using WebSocketStream to write a client](/de/docs/Web/API/WebSockets_API/Using_WebSocketStream) für ein vollständiges Beispiel mit kompletter Erklärung.

## Spezifikationen

Derzeit nicht Teil einer Spezifikation. Siehe https://github.com/whatwg/websockets/pull/48 für den Stand der Standardisierung.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebSocketStream: Integrating streams with the WebSocket API](https://developer.chrome.com/docs/capabilities/web-apis/websocketstream), developer.chrome.com (2020)
