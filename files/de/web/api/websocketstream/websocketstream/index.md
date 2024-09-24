---
title: "WebSocketStream: WebSocketStream() Konstruktor"
short-title: WebSocketStream()
slug: Web/API/WebSocketStream/WebSocketStream
l10n:
  sourceCommit: bd8dbe863a306cf7114752bd936d012524b13517
---

{{APIRef("WebSockets API")}}{{SeeCompatTable}}

Der **`WebSocketStream()`** Konstruktor erstellt eine neue Instanz des {{domxref("WebSocketStream")}} Objekts.

## Syntax

```js-nolint
new WebSocketStream(url)
new WebSocketStream(url, options)
```

### Parameter

- `url`
  - : Ein String, der die URL des WebSocket-Servers darstellt, zu dem Sie mit dieser `WebSocketStream` Instanz eine Verbindung herstellen möchten. Zulässige URL-Schemata sind `"ws"`, `"wss"`, `"http"` und `"https"`.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthalten kann:
    - `protocols` {{optional_inline}}
      - : Ein einzelner String oder ein Array von Strings, die das/die Subprotokoll(e) darstellen, das/die der Client verwenden möchte, zum Beispiel `"amqp"` oder `"mqtt"`. Subprotokolle können aus dem [IANA WebSocket Subprotocol Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#subprotocol-name) ausgewählt werden oder es können benutzerdefinierte Namen sein, die vom Client und dem Server gemeinsam verstanden werden. Ein einzelner Server kann mehrere WebSocket-Subprotokolle implementieren und je nach angegebenem Wert unterschiedliche Arten von Interaktionen behandeln. Wenn es weggelassen wird, wird standardmäßig ein leeres Array verwendet. Wenn `protocols` enthalten ist, wird die Verbindung nur hergestellt, wenn der Server meldet, dass er eines dieser Subprotokolle ausgewählt hat.
    - `signal` {{optional_inline}}
      - : Ein {{domxref("AbortSignal")}}, das zu einem {{domxref("AbortController")}} gehört, den Sie verwenden möchten, um die WebSocket-Verbindung zu schließen.

### Ausnahmen

- `SyntaxError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das URL-Schema nicht eines von `"ws"`, `"wss"`, `"http"` oder `"https"` ist.

## Beispiele

Das einfachste Beispiel verwendet die URL eines WebSocket-Servers als Argument:

```js
const wss = new WebSocketStream("wss://example.com/wss");
```

Ein fortgeschritteneres Beispiel könnte auch ein Optionsobjekt enthalten, das benutzerdefinierte Protokolle und/oder ein {{domxref("AbortSignal")}} beinhaltet:

```js
const controller = new AbortController();
const queueWSS = new WebSocketStream("wss://example.com/queue", {
  protocols: ["amqp", "mqtt"],
  signal: controller.signal,
});
```

Zu einem späteren Zeitpunkt kann {{domxref("AbortController.abort()")}} aufgerufen werden, um die Verbindung bei Bedarf zu schließen:

```js
controller.abort();
```

Alternativ können Sie die {{domxref("WebSocketStream.close()")}} Methode verwenden, um eine Verbindung zu schließen. Dies ist jedoch hauptsächlich erforderlich, wenn Sie einen benutzerdefinierten Code und/oder einen Grund angeben möchten, den der Server melden soll.

Siehe [Verwendung von WebSocketStream zur Erstellung eines Clients](/de/docs/Web/API/WebSockets_API/Using_WebSocketStream) für ein vollständiges Beispiel mit ausführlicher Erklärung.

## Spezifikationen

Zurzeit nicht Teil einer Spezifikation. Siehe https://github.com/whatwg/websockets/pull/48 für den Fortschritt der Standardisierung.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebSocketStream: Integration von Streams mit der WebSocket API](https://developer.chrome.com/docs/capabilities/web-apis/websocketstream), developer.chrome.com (2020)
