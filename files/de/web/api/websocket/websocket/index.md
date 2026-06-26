---
title: "WebSocket: WebSocket() Konstruktor"
short-title: WebSocket()
slug: Web/API/WebSocket/WebSocket
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

Der **`WebSocket()`** Konstruktor gibt ein neues [`WebSocket`](/de/docs/Web/API/WebSocket)-Objekt zurück und versucht sofort, eine Verbindung zur angegebenen WebSocket-URL herzustellen.

## Syntax

```js-nolint
new WebSocket(url)
new WebSocket(url, protocols)
```

### Parameter

- `url`
  - : Die URL des Ziel-WebSocket-Servers, zu dem eine Verbindung aufgebaut werden soll.
    Die URL muss eines der folgenden Schemas verwenden: `ws`, `wss`, `http` oder `https` und darf kein [URL-Fragment](/de/docs/Web/URI/Reference/Fragment) enthalten.
    Wenn eine relative URL angegeben wird, ist sie relativ zur Basis-URL des aufrufenden Skripts.

- `protocols` {{optional_inline}}
  - : Ein einzelner String oder ein Array von Strings, das die [Subprotokoll(e)](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#subprotocols) darstellt, die der Client in der Reihenfolge der Präferenz verwenden möchte.
    Wenn es weggelassen wird, wird standardmäßig ein leeres Array verwendet, d.h. `[]`.

    Ein einzelner Server kann mehrere WebSocket-Subprotokolle implementieren und je nach dem angegebenen Wert unterschiedliche Arten von Interaktionen verarbeiten.
    Es kann jedoch nur ein Subprotokoll pro Verbindung ausgewählt werden.

    Die zulässigen Werte sind diejenigen, die im {{httpheader("Sec-WebSocket-Protocol")}} HTTP-Header angegeben werden können.
    Dies sind Werte aus dem [IANA WebSocket Subprotocol Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#subprotocol-name), wie `soap`, `wamp`, `ship` und so weiter, oder es kann ein benutzerdefinierter Name sein, der vom Client und Server gemeinsam verstanden wird.

    > [!NOTE]
    > Die Verbindung wird erst hergestellt, wenn das Subprotokoll mit dem Server ausgehandelt ist.
    > Das ausgewählte Protokoll kann dann von [`WebSocket.protocol`](/de/docs/Web/API/WebSocket/protocol) gelesen werden: es wird der leere String sein, wenn eine Verbindung nicht hergestellt werden kann.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - das Parsen von [`url`](#url) fehlschlägt
    - [`url`](#url) ein anderes Schema als `ws`, `wss`, `http` oder `https` hat
    - [`url`](#url) ein [Fragment](/de/docs/Web/URI/Reference/Fragment) enthält
    - irgendwo in [`protocols`](#protocols) vorkommende Werte mehr als einmal auftreten oder die Anforderungen für Elemente, die den Wert der Felder [`Sec-WebSocket-Protocol`](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism#sec-websocket-protocol) gemäß der WebSocket-Protokollspezifikation nicht erfüllen

## Beispiele

Die folgenden Beispiele zeigen, wie Sie sich mit einem `WebSocket` verbinden könnten.

Der untenstehende Code zeigt, wie wir uns über eine URL mit dem `wss`-Schema mit einem Socket verbinden können:

```js
const wssWebSocket = new WebSocket("wss://websocket.example.org");
console.log(wssWebSocket.url); // 'wss://websocket.example.org'

// Do something with socket

wssWebSocket.close();
```

Der Code für die Verbindung mit einer HTTPS-URL ist nahezu identisch.
Im Hintergrund wird dies vom Browser in eine "WSS"-Verbindung aufgelöst, sodass die [`WebSocket.url`](/de/docs/Web/API/WebSocket/url) das Schema "wss:" haben wird.

```js
const httpsWebSocket = new WebSocket("https://websocket.example.org");
console.log(httpsWebSocket.url); // 'wss://websocket.example.org'

// Do something with socket

httpsWebSocket.close();
```

Wir können auch relative URLs auflösen.
Die absolute URL hängt von der Basis-URL des Kontextes ab, in dem sie aufgerufen wird.

```js
relativeWebSocket = new WebSocket("/local/url");

// Do something with socket

relativeWebSocket.close();
```

Die vorherigen Beispiele zeigen, wie man einen `WebSocket` _konstruiert_, aber die Verbindung wird asynchron hergestellt. Das Aufrufen von [`send()`](/de/docs/Web/API/WebSocket/send), bevor das [`open`](/de/docs/Web/API/WebSocket/open_event) Ereignis eintritt, wirft eine `InvalidStateError`-Ausnahme, weil [`readyState`](/de/docs/Web/API/WebSocket/readyState) noch `CONNECTING` ist. Wenn die Verbindung nicht hergestellt werden kann (zum Beispiel, weil der Server nicht erreichbar ist oder das Handshake fehlschlägt), wird ein [`error`](/de/docs/Web/API/WebSocket/error_event)-Ereignis ausgelöst, dem ein [`close`](/de/docs/Web/API/WebSocket/close_event)-Ereignis folgt, wobei die `wasClean`-Eigenschaft `false` ist — also endet jeder Verbindungsversuch letztlich entweder mit einem `open`-Ereignis oder einem `close`-Ereignis. Das untenstehende Beispiel zeigt, wie man auf die Verbindung wartet, bevor man sendet, und wie man die `error`- und `close`-Ereignisse behandelt:

```js
// Create WebSocket connection.
const socket = new WebSocket("wss://websocket.example.org");

// Connection opened
socket.addEventListener("open", (event) => {
  socket.send("Hello Server!");
});

// Listen for messages
socket.addEventListener("message", (event) => {
  console.log("Message from server:", event.data);
});

// Handle errors
socket.addEventListener("error", (event) => {
  console.error("WebSocket error:", event);
});

// Handle disconnection
socket.addEventListener("close", (event) => {
  if (event.wasClean) {
    console.log(`Closed cleanly, code=${event.code}, reason=${event.reason}`);
  } else {
    console.log("Connection died");
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [RFC 6455](https://www.rfc-editor.org/info/rfc6455/) (die WebSocket-Protokollspezifikation)
