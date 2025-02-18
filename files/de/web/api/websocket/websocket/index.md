---
title: "WebSocket: WebSocket()-Konstruktor"
short-title: WebSocket()
slug: Web/API/WebSocket/WebSocket
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

Der **`WebSocket()`**-Konstruktor gibt ein neues [`WebSocket`](/de/docs/Web/API/WebSocket)-Objekt zurück und versucht sofort, eine Verbindung zur angegebenen WebSocket-URL herzustellen.

## Syntax

```js-nolint
new WebSocket(url)
new WebSocket(url, protocols)
```

### Parameter

- `url`

  - : Die URL des Ziel-WebSocket-Servers, zu dem eine Verbindung hergestellt werden soll.
    Die URL muss eines der folgenden Schemas verwenden: `ws`, `wss`, `http` oder `https`, und darf kein [URL-Fragment](/de/docs/Web/URI/Reference/Fragment) enthalten.
    Wenn eine relative URL angegeben wird, bezieht sie sich auf die Basis-URL des aufrufenden Skripts.

- `protocols` {{optional_inline}}

  - : Ein einzelner String oder ein Array von Strings, die die [Sub-Protokolle](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#subprotocols) darstellen, die der Client in Präferenzreihenfolge verwenden möchte.
    Wird es weggelassen, wird standardmäßig ein leeres Array verwendet, d. h. `[]`.

    Ein einzelner Server kann mehrere WebSocket-Sub-Protokolle implementieren und je nach spezifiziertem Wert unterschiedliche Arten von Interaktionen durchführen.
    Es ist jedoch zu beachten, dass pro Verbindung nur ein Sub-Protokoll ausgewählt werden kann.

    Die erlaubten Werte können im {{httpheader("Sec-WebSocket-Protocol")}}-HTTP-Header angegeben werden.
    Diese sind Werte aus dem [IANA WebSocket Subprotocol Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#subprotocol-name), wie z. B. `soap`, `wamp`, `ship` usw., oder können ein benutzerdefinierter Name sein, der vom Client und Server gemeinsam verstanden wird.

    > [!NOTE]
    > Die Verbindung wird erst hergestellt, nachdem das Sub-Protokoll mit dem Server ausgehandelt wurde.
    > Das ausgewählte Protokoll kann dann aus [`WebSocket.protocol`](/de/docs/Web/API/WebSocket/protocol) gelesen werden: Es wird der leere String sein, wenn keine Verbindung hergestellt werden kann.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird ausgelöst, wenn:

    - das Parsing von [`url`](#url) fehlschlägt
    - [`url`](#url) ein anderes Schema als `ws`, `wss`, `http` oder `https` hat
    - [`url`](#url) ein [Fragment](/de/docs/Web/URI/Reference/Fragment) enthält
    - irgendein Wert in [`protocols`](#protocols) mehr als einmal vorkommt oder sonstige Anforderungen für Elemente der Werte von [`Sec-WebSocket-Protocol`](/de/docs/Web/HTTP/Protocol_upgrade_mechanism#sec-websocket-protocol)-Felder laut der WebSocket-Protokollspezifikation nicht erfüllt

## Beispiele

Die unten gezeigten Beispiele zeigen, wie man sich mit einem `WebSocket` verbinden könnte.

Der folgende Code zeigt, wie wir eine Verbindung zu einem Socket mit einer URL im Schema `wss` herstellen können:

```js
const wssWebSocket = new WebSocket('wss://websocket.example.org');
console.log(wssWebSocket.url); // 'wss://websocket.example.org'
... // Do something with socket
wssWebSocket.close();
```

Der Code für die Verbindung zu einer HTTPS-URL ist fast identisch.
Im Hintergrund wird dies vom Browser in eine "WSS"-Verbindung aufgelöst, sodass die [`WebSocket.url`](/de/docs/Web/API/WebSocket/url) das Schema "wss:" haben wird.

```js
const httpsWebSocket = new WebSocket('https://websocket.example.org');
console.log(httpsWebSocket.url); // 'wss://websocket.example.org'
... // Do something with socket
httpsWebSocket.close();
```

Wir können auch relative URLs auflösen.
Die absolute URL hängt von der Basis-URL des Kontexts ab, in dem sie aufgerufen wird.

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

- [RFC 6455](https://www.rfc-editor.org/rfc/rfc6455.html) (die WebSocket-Protokoll-Spezifikation)
