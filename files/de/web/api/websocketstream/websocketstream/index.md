---
title: "WebSocketStream: WebSocketStream() Konstruktor"
short-title: WebSocketStream()
slug: Web/API/WebSocketStream/WebSocketStream
l10n:
  sourceCommit: b33543906a476c23d8b0c79b5f4fcea82c6526fb
---

{{APIRef("WebSockets API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Der **`WebSocketStream()`** Konstruktor erstellt eine neue Instanz des [`WebSocketStream`](/de/docs/Web/API/WebSocketStream)-Objekts.

## Syntax

```js-nolint
new WebSocketStream(url)
new WebSocketStream(url, options)
```

### Parameter

- `url`
  - : Ein String, der die URL des WebSocket-Servers darstellt, mit dem Sie sich mit dieser `WebSocketStream`-Instanz verbinden möchten. Erlaubte URL-Schemata sind `"ws"`, `"wss"`, `"http"` und `"https"`.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthalten kann:
    - `protocols` {{optional_inline}}
      - : Ein einzelner String oder ein Array von Strings, die das/die Subprotokoll(e) darstellen, das/die der Client verwenden möchte, zum Beispiel `"amqp"` oder `"mqtt"`. Subprotokolle können aus dem [IANA-WebSocket-Subprotocol-Name-Register](https://www.iana.org/assignments/websocket/websocket.xml#subprotocol-name) ausgewählt oder benutzerdefinierte Namen sein, die vom Client und Server gemeinsam verstanden werden. Ein einzelner Server kann mehrere WebSocket-Subprotokolle implementieren und verschiedene Interaktionstypen je nach dem angegebenen Wert handhaben. Wenn es weggelassen wird, wird standardmäßig ein leeres Array verwendet. Wenn `protocols` enthalten ist, wird die Verbindung nur hergestellt, wenn der Server meldet, dass er eines dieser Subprotokolle ausgewählt hat.
    - `signal` {{optional_inline}}
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal), das verwendet werden kann, um die Verbindung abzubrechen, bevor der [Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) abgeschlossen ist (das heißt, bevor das [`opened`](/de/docs/Web/API/WebSocketStream/opened) Versprechen erfüllt wird). Dies ist hauptsächlich dafür gedacht, Verbindungstimeouts zu implementieren. Daher hat es keine Auswirkung, nachdem die Verbindung hergestellt wurde.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das URL-Schema nicht eines von `"ws"`, `"wss"`, `"http"` oder `"https"` ist.

## Beispiele

Das einfachste Beispiel nimmt die URL eines WebSocket-Servers als Argument:

```js
const wss = new WebSocketStream("wss://example.com/wss");
```

Ein fortgeschritteneres Beispiel könnte auch ein Optionsobjekt mit benutzerdefinierten Protokollen und/oder einem [`AbortSignal`](/de/docs/Web/API/AbortSignal) enthalten. Das folgende Beispiel wird die Verbindung zeitlich begrenzen, wenn sie nicht innerhalb von 5 Sekunden hergestellt wird:

```js
const queueWSS = new WebSocketStream("wss://example.com/queue", {
  protocols: ["amqp", "mqtt"],
  signal: AbortSignal.timeout(5000),
});
```

Wenn Sie sich mit localhost verbinden, wird es wahrscheinlich fast sofort erfolgreich sein oder fehlschlagen, daher hat dies keine Auswirkung.

Sie können die Methode [`WebSocketStream.close()`](/de/docs/Web/API/WebSocketStream/close) verwenden, um eine Verbindung zu schließen.

`WritableStream.close()` und `WritableStreamDefaultWriter.close()` von der `writable` des erfüllten `opened` `Promise` schließen ebenfalls die Verbindung.

Schauen Sie sich [Verwendung von WebSocketStream zur Erstellung eines Clients](/de/docs/Web/API/WebSockets_API/Using_WebSocketStream) für ein vollständiges Beispiel mit vollständiger Erklärung an.

## Spezifikationen

Derzeit nicht Teil einer Spezifikation. Siehe https://github.com/whatwg/websockets/pull/48 für den Standardisierungsfortschritt.

[WebSocketStream API-Design](https://docs.google.com/document/d/1La1ehXw76HP6n1uUeks-WJGFgAnpX2tCjKts7QFJ57Y/edit?pli=1&tab=t.0).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebSocketStream: Integration von Streams mit der WebSocket-API](https://developer.chrome.com/docs/capabilities/web-apis/websocketstream), developer.chrome.com (2020)
