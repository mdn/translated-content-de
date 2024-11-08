---
title: "WebSocket: WebSocket() Konstruktor"
short-title: WebSocket()
slug: Web/API/WebSocket/WebSocket
l10n:
  sourceCommit: c7c79d1b1b5a537308b59537e27ec20f8c48f22c
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
    Die URL muss eines der folgenden Schemata verwenden: `ws`, `wss`, `http` oder `https` und darf kein [URL-Fragment](/de/docs/Web/URI/Fragment) enthalten.
    Wenn eine relative URL angegeben wird, bezieht sie sich auf die Basis-URL des aufrufenden Skripts.

- `protocols` {{optional_inline}}

  - : Ein einzelner String oder ein Array von Strings, das die vom Client gewünschte(n) [Subprotokoll(e)](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#subprotocols) in der Reihenfolge der Präferenz darstellt.
    Wenn es weggelassen wird, wird standardmäßig ein leeres Array verwendet, d.h. `[]`.

    Ein einzelner Server kann mehrere WebSocket-Subprotokolle implementieren und unterschiedliche Interaktionstypen je nach angegebenem Wert handhaben.
    Beachten Sie jedoch, dass pro Verbindung nur ein Subprotokoll ausgewählt werden kann.

    Die zulässigen Werte sind diejenigen, die im {{httpheader("Sec-WebSocket-Protocol")}} HTTP-Header angegeben werden können.
    Diese sind Werte, die aus dem [IANA WebSocket Subprotocol Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#subprotocol-name) ausgewählt werden, wie `soap`, `wamp`, `ship` und so weiter, oder können ein benutzerdefinierter Name sein, der von Client und Server gemeinsam verstanden wird.

    > [!NOTE]
    > Die Verbindung wird nicht hergestellt, bis das Subprotokoll mit dem Server ausgehandelt ist.
    > Das ausgewählte Protokoll kann dann aus [`WebSocket.protocol`](/de/docs/Web/API/WebSocket/protocol) gelesen werden: Es wird der leere String sein, wenn keine Verbindung hergestellt werden kann.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Ausgelöst, wenn:

    - das Parsen von [`url`](#url) fehlschlägt
    - [`url`](#url) ein anderes Schema als `ws`, `wss`, `http` oder `https` hat
    - [`url`](#url) ein [Fragment](/de/docs/Web/URI/Fragment) hat
    - irgendein Wert in [`protocols`](#protocols) mehr als einmal auftritt oder anderweitig die Anforderungen an Elemente, die den Wert von [`Sec-WebSocket-Protocol`](/de/docs/Web/HTTP/Protocol_upgrade_mechanism#sec-websocket-protocol)-Felder bilden, gemäß der WebSocket-Protokollspezifikation nicht entspricht

## Beispiele

Die untenstehenden Beispiele zeigen, wie man sich mit einem `WebSocket` verbinden könnte.

Der folgende Code zeigt, wie wir uns mit einem Socket unter Verwendung einer URL mit dem Schema `wss` verbinden können:

```js
const wssWebSocket = new WebSocket('wss://websocket.example.org');
console.log(wssWebSocket.url); // 'wss://websocket.example.org'
... // Do something with socket
wssWebSocket.close();
```

Der Code zum Herstellen einer Verbindung mit einer HTTPS-URL ist nahezu identisch.
Im Hintergrund wird dies vom Browser in eine "WSS"-Verbindung umgewandelt, sodass die [`WebSocket.url`](/de/docs/Web/API/WebSocket/url) das Schema "wss:" haben wird.

```js
const httpsWebSocket = new WebSocket('https://websocket.example.org');
console.log(httpsWebSocket.url); // 'wss://websocket.example.org'
... // Do something with socket
httpsWebSocket.close();
```

Wir können auch relative URLs auflösen.
Die absolute URL hängt von der Basis-URL des Kontextes ab, in dem sie aufgerufen wird.

```js
relativeWebSocket = new WebSocket('/local/url');
... // Do something with socket
relativeWebSocket.close();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [RFC 6455](https://www.rfc-editor.org/rfc/rfc6455.html) (die WebSocket-Protokollspezifikation)
