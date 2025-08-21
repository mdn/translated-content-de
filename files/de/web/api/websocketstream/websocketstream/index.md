---
title: "WebSocketStream: WebSocketStream() Konstruktor"
short-title: WebSocketStream()
slug: Web/API/WebSocketStream/WebSocketStream
l10n:
  sourceCommit: 3a9a6f9dd92859dca2f928c59b34d9177adb9ae5
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
  - : Ein String, der die URL des WebSocket-Servers repräsentiert, zu dem Sie mit dieser `WebSocketStream`-Instanz eine Verbindung herstellen möchten. Erlaubte URL-Schemata sind `"ws"`, `"wss"`, `"http"` und `"https"`.
- `options` {{optional_inline}}
  - : Ein Objekt, das folgende Eigenschaften enthalten kann:
    - `protocols` {{optional_inline}}
      - : Ein einzelner String oder ein Array von Strings, die das/die Subprotokoll(e) repräsentieren, das/die der Client verwenden möchte, beispielsweise `"amqp"` oder `"mqtt"`. Subprotokolle können aus dem [IANA WebSocket Subprotocol Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#subprotocol-name) ausgewählt werden oder benutzerdefinierte Namen sein, die gemeinsam vom Client und dem Server verstanden werden. Ein einzelner Server kann mehrere WebSocket-Subprotokolle implementieren und verschiedene Arten von Interaktionen abhängig vom angegebenen Wert behandeln. Wenn es weggelassen wird, wird standardmäßig ein leeres Array verwendet. Wenn `protocols` enthalten ist, wird die Verbindung nur hergestellt, wenn der Server meldet, dass er eines dieser Subprotokolle ausgewählt hat.
    - `signal` {{optional_inline}}
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal), das verwendet werden kann, um die Verbindung abzubrechen, bevor das [Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) abgeschlossen ist (also bevor das [`opened`](/de/docs/Web/API/WebSocketStream/opened) Promise erfüllt wird). Dies ist in erster Linie dazu gedacht, Verbindungs-Timeouts zu implementieren. Daher hat es keine Wirkung, nachdem die Verbindung hergestellt wurde.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das URL-Schema nicht eines von `"ws"`, `"wss"`, `"http"` oder `"https"` ist.

## Beispiele

Das grundlegendste Beispiel verwendet die URL eines WebSocket-Servers als Argument:

```js
const wss = new WebSocketStream("wss://example.com/wss");
```

Ein fortgeschritteneres Beispiel könnte auch ein Optionsobjekt enthalten, das benutzerdefinierte Protokolle und/oder ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) enthält. Das folgende Beispiel wird abbrechen, wenn die Verbindung nicht innerhalb von 5 Sekunden hergestellt wird:

```js
const queueWSS = new WebSocketStream("wss://example.com/queue", {
  protocols: ["amqp", "mqtt"],
  signal: AbortSignal.timeout(5000),
});
```

Wenn Sie eine Verbindung zu localhost herstellen, ist es wahrscheinlich, dass sie fast sofort erfolgreich ist oder fehlschlägt, sodass dies keine Wirkung hat.

Sie können die Methode [`WebSocketStream.close()`](/de/docs/Web/API/WebSocketStream/close) verwenden, um eine Verbindung zu schließen.

`WritableStream.close()` und `WritableStreamDefaultWriter.close()` vom `writable` des erfüllten `opened` `Promise` schließt ebenfalls die Verbindung.

Siehe [Using WebSocketStream to write a client](/de/docs/Web/API/WebSockets_API/Using_WebSocketStream) für ein vollständiges Beispiel mit ausführlicher Erklärung.

## Spezifikationen

Derzeit nicht Teil einer Spezifikation. Siehe https://github.com/whatwg/websockets/pull/48 für den Fortschritt der Standardisierung.

[WebSocketStream API Design](https://docs.google.com/document/d/1La1ehXw76HP6n1uUeks-WJGFgAnpX2tCjKts7QFJ57Y/edit?pli=1&tab=t.0).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebSocketStream: integrating streams with the WebSocket API](https://developer.chrome.com/docs/capabilities/web-apis/websocketstream), developer.chrome.com (2020)
