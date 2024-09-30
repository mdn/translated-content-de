---
title: "WebSocketStream: WebSocketStream()-Konstruktor"
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
  - : Ein String, der die URL des WebSocket-Servers darstellt, mit dem Sie sich über diese `WebSocketStream`-Instanz verbinden möchten. Zulässige URL-Schemata sind `"ws"`, `"wss"`, `"http"` und `"https"`.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthalten kann:
    - `protocols` {{optional_inline}}
      - : Ein einzelner String oder ein Array von Strings, das/die die Subprotokoll(e) darstellt, die der Client verwenden möchte, z.B. `"amqp"` oder `"mqtt"`. Subprotokolle können aus dem [IANA WebSocket Subprotocol Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#subprotocol-name) ausgewählt oder benutzerdefinierte Namen sein, die von Client und Server gemeinsam verstanden werden. Ein einzelner Server kann mehrere WebSocket-Subprotokolle implementieren und je nach angegebenem Wert unterschiedliche Interaktionstypen behandeln. Wenn es weggelassen wird, wird standardmäßig ein leeres Array verwendet. Wenn `protocols` enthalten ist, wird die Verbindung nur hergestellt, wenn der Server meldet, dass er eines dieser Subprotokolle ausgewählt hat.
    - `signal` {{optional_inline}}
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal), das zu einem [`AbortController`](/de/docs/Web/API/AbortController) gehört, den Sie verwenden möchten, um die WebSocket-Verbindung zu schließen.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das URL-Schema nicht eines von `"ws"`, `"wss"`, `"http"` oder `"https"` ist.

## Beispiele

Das einfachste Beispiel nimmt die URL eines WebSocket-Servers als Argument:

```js
const wss = new WebSocketStream("wss://example.com/wss");
```

Ein fortgeschritteneres Beispiel könnte auch ein Optionsobjekt mit benutzerdefinierten Protokollen und/oder einem [`AbortSignal`](/de/docs/Web/API/AbortSignal) enthalten:

```js
const controller = new AbortController();
const queueWSS = new WebSocketStream("wss://example.com/queue", {
  protocols: ["amqp", "mqtt"],
  signal: controller.signal,
});
```

Zu einem späteren Zeitpunkt kann [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort) aufgerufen werden, wenn es erforderlich ist, die Verbindung zu schließen:

```js
controller.abort();
```

Alternativ können Sie die Methode [`WebSocketStream.close()`](/de/docs/Web/API/WebSocketStream/close) verwenden, um eine Verbindung zu schließen. Dies ist jedoch hauptsächlich erforderlich, wenn Sie einen benutzerdefinierten Code und/oder Grund angeben möchten, den der Server melden soll.

Siehe [Verwendung von WebSocketStream zur Erstellung eines Clients](/de/docs/Web/API/WebSockets_API/Using_WebSocketStream) für ein vollständiges Beispiel mit vollständiger Erklärung.

## Spezifikationen

Derzeit Teil keiner Spezifikation. Siehe https://github.com/whatwg/websockets/pull/48 für den Fortschritt der Standardisierung.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebSocketStream: Integration von Streams mit der WebSocket-API](https://developer.chrome.com/docs/capabilities/web-apis/websocketstream), developer.chrome.com (2020)
