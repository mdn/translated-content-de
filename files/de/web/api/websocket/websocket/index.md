---
title: "WebSocket: WebSocket() Konstruktor"
short-title: WebSocket()
slug: Web/API/WebSocket/WebSocket
l10n:
  sourceCommit: cc41ecd796870c2b6c77ad0b04fcb8d8c7d877d2
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

Der **`WebSocket()`** Konstruktor gibt ein neues [`WebSocket`](/de/docs/Web/API/WebSocket)-Objekt zurück und versucht sofort, eine Verbindung zu der angegebenen WebSocket-URL herzustellen.

## Syntax

```js-nolint
new WebSocket(url)
new WebSocket(url, protocols)
```

### Parameter

- `url`

  - : Die URL des Ziel-WebSocket-Servers, zu dem eine Verbindung hergestellt werden soll.
    Die URL muss eines der folgenden Schemata verwenden: `ws`, `wss`, `http` oder `https` und darf kein [URL-Fragment](/de/docs/Web/URI/Reference/Fragment) enthalten.
    Wenn eine relative URL angegeben wird, ist sie relativ zur Basis-URL des aufrufenden Skripts.

- `protocols` {{optional_inline}}

  - : Ein einzelner String oder ein Array von Strings, die das/die [Sub-Protokoll(e)](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#subprotocols) repräsentieren, das/ die der Client in der Reihenfolge der Präferenz verwenden möchte.
    Wird es weggelassen, wird standardmäßig ein leeres Array verwendet, d.h. `[]`.

    Ein einzelner Server kann mehrere WebSocket-Sub-Protokolle implementieren und verschiedene Arten von Interaktionen basierend auf dem angegebenen Wert verarbeiten.
    Beachten Sie jedoch, dass pro Verbindung nur ein Sub-Protokoll ausgewählt werden kann.

    Die erlaubten Werte sind diejenigen, die im {{httpheader("Sec-WebSocket-Protocol")}} HTTP-Header angegeben werden können.
    Diese sind Werte, die aus dem [IANA WebSocket Subprotocol Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#subprotocol-name) wie `soap`, `wamp`, `ship` usw. ausgewählt wurden, oder es kann ein benutzerdefinierter Name sein, der vom Client und vom Server gemeinsam verstanden wird.

    > [!NOTE]
    > Die Verbindung wird erst hergestellt, wenn das Sub-Protokoll mit dem Server ausgehandelt wurde.
    > Das ausgewählte Protokoll kann dann von [`WebSocket.protocol`](/de/docs/Web/API/WebSocket/protocol) gelesen werden: Es wird der leere String sein, wenn keine Verbindung hergestellt werden kann.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird geworfen, wenn:

    - das Parsen von [`url`](#url) fehlschlägt
    - [`url`](#url) ein anderes Schema als `ws`, `wss`, `http` oder `https` hat
    - [`url`](#url) ein [Fragment](/de/docs/Web/URI/Reference/Fragment) enthält
    - einer der Werte in [`protocols`](#protocols) mehr als einmal vorkommt oder anderweitig die Anforderungen für Elemente, die den Wert der [`Sec-WebSocket-Protocol`](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism#sec-websocket-protocol) Felder gemäß der WebSocket Protokollspezifikation nicht erfüllt

## Beispiele

Die folgenden Beispiele zeigen, wie Sie möglicherweise eine Verbindung zu einem `WebSocket` herstellen können.

Der folgende Code zeigt, wie wir eine Verbindung zu einem Socket herstellen können, indem wir eine URL mit dem `wss` Schema verwenden:

```js
const wssWebSocket = new WebSocket("wss://websocket.example.org");
console.log(wssWebSocket.url); // 'wss://websocket.example.org'

// Do something with socket

wssWebSocket.close();
```

Der Code für die Verbindung zu einem HTTPS-URL ist fast derselbe.
Im Hintergrund wird dies vom Browser auf eine "WSS"-Verbindung aufgelöst, sodass die [`WebSocket.url`](/de/docs/Web/API/WebSocket/url) das Schema "wss:" aufweisen wird.

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [RFC 6455](https://www.rfc-editor.org/rfc/rfc6455.html) (die WebSocket Protokollspezifikation)
