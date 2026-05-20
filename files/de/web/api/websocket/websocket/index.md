---
title: "WebSocket: WebSocket() Konstruktor"
short-title: WebSocket()
slug: Web/API/WebSocket/WebSocket
l10n:
  sourceCommit: 30cfb5ce0b07b93ef8fb32c73e0f421fd53d2ca3
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
  - : Die URL des Ziel-WebSocket-Servers, zu dem eine Verbindung hergestellt werden soll.
    Die URL muss eines der folgenden Schemen verwenden: `ws`, `wss`, `http` oder `https`, und darf kein [URL-Fragment](/de/docs/Web/URI/Reference/Fragment) enthalten.
    Wenn eine relative URL angegeben wird, ist sie relativ zur Basis-URL des aufrufenden Skripts.

- `protocols` {{optional_inline}}
  - : Ein einzelner String oder ein Array von Strings, die das/die [Subprotokoll(e)](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#subprotocols) darstellen, das/die der Client in der Reihenfolge der Präferenz verwenden möchte.
    Wenn es weggelassen wird, wird standardmäßig ein leeres Array verwendet, d.h. `[]`.

    Ein einzelner Server kann mehrere WebSocket-Subprotokolle implementieren und verschiedene Arten von Interaktionen je nach dem angegebenen Wert handhaben.
    Beachten Sie jedoch, dass pro Verbindung nur ein Subprotokoll ausgewählt werden kann.

    Die erlaubten Werte sind diejenigen, die im {{httpheader("Sec-WebSocket-Protocol")}} HTTP-Header angegeben werden können.
    Diese sind Werte, die aus dem [IANA WebSocket Subprotocol Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#subprotocol-name) ausgewählt wurden, wie `soap`, `wamp`, `ship` und so weiter, oder können ein benutzerdefinierter Name sein, der zwischen dem Client und dem Server ausdrücklich verstanden wird.

    > [!NOTE]
    > Die Verbindung wird nicht hergestellt, bis das Subprotokoll mit dem Server ausgehandelt ist.
    > Das ausgewählte Protokoll kann dann von [`WebSocket.protocol`](/de/docs/Web/API/WebSocket/protocol) abgelesen werden: Es wird der leere String sein, wenn keine Verbindung hergestellt werden kann.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn:
    - das Parsen der [`url`](#url) fehlschlägt
    - [`url`](#url) ein anderes Schema als `ws`, `wss`, `http` oder `https` hat
    - [`url`](#url) ein [Fragment](/de/docs/Web/URI/Reference/Fragment) hat
    - einer der Werte in [`protocols`](#protocols) mehr als einmal vorkommt oder anderweitig die Anforderungen für Elemente nicht erfüllt, die den Wert der Felder [`Sec-WebSocket-Protocol`](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism#sec-websocket-protocol) gemäß der WebSocket-Protokollspezifikation ausmachen

## Beispiele

Die folgenden Beispiele zeigen, wie Sie eine Verbindung zu einem `WebSocket` herstellen könnten.

Der untenstehende Code zeigt, wie wir mithilfe einer URL mit dem Schema `wss` eine Verbindung zu einem Socket herstellen können:

```js
const wssWebSocket = new WebSocket("wss://websocket.example.org");
console.log(wssWebSocket.url); // 'wss://websocket.example.org'

// Do something with socket

wssWebSocket.close();
```

Der Code für die Verbindung zu einer HTTPS-URL ist nahezu identisch.
Im Hintergrund wird dies durch den Browser zu einer „WSS“-Verbindung aufgelöst, sodass die [`WebSocket.url`](/de/docs/Web/API/WebSocket/url) das Schema „wss:“ haben wird.

```js
const httpsWebSocket = new WebSocket("https://websocket.example.org");
console.log(httpsWebSocket.url); // 'wss://websocket.example.org'

// Do something with socket

httpsWebSocket.close();
```

Wir können auch relative URLs auflösen.
Die absolute URL hängt von der Basis-URL des Kontexts ab, in dem sie aufgerufen wird.

```js
relativeWebSocket = new WebSocket("/local/url");

// Do something with socket

relativeWebSocket.close();
```

Die vorherigen Beispiele zeigen, wie ein `WebSocket` _konstruiert_ wird, aber die Verbindung wird asynchron hergestellt. Der Aufruf von [`send()`](/de/docs/Web/API/WebSocket/send) vor dem Auslösen des [`open`](/de/docs/Web/API/WebSocket/open_event)-Ereignisses führt zu einer `InvalidStateError`-Ausnahme, weil [`readyState`](/de/docs/Web/API/WebSocket/readyState) noch `CONNECTING` ist. Wenn die Verbindung nicht hergestellt werden kann (zum Beispiel, wenn der Server nicht erreichbar ist oder das Handshake fehlschlägt), wird ein [`error`](/de/docs/Web/API/WebSocket/error_event)-Ereignis ausgelöst, gefolgt von einem [`close`](/de/docs/Web/API/WebSocket/close_event)-Ereignis, dessen `wasClean`-Eigenschaft `false` ist — daher endet jeder Verbindungsversuch letztendlich entweder mit einem `open`-Ereignis oder einem `close`-Ereignis. Das folgende Beispiel zeigt, wie man auf die Verbindung wartet, bevor man sendet, und wie man die `error`- und `close`-Ereignisse behandelt:

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

- [RFC 6455](https://www.rfc-editor.org/rfc/rfc6455.html) (die WebSocket-Protokollspezifikation)
