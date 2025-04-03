---
title: "WebSocket: WebSocket()-Konstruktor"
short-title: WebSocket()
slug: Web/API/WebSocket/WebSocket
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
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
    Die URL muss eines der folgenden Schemata verwenden: `ws`, `wss`, `http` oder `https` und darf kein [URL-Fragment](/de/docs/Web/URI/Reference/Fragment) enthalten.
    Wenn eine relative URL angegeben wird, ist sie relativ zur Basis-URL des aufrufenden Skripts.

- `protocols` {{optional_inline}}

  - : Ein einzelner String oder ein Array von Strings, die das oder die [Subprotokoll(e)](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#subprotocols) repräsentieren, die der Client in der Reihenfolge ihrer Priorität verwenden möchte.
    Wenn es weggelassen wird, wird standardmäßig ein leeres Array verwendet, d.h. `[]`.

    Ein einzelner Server kann mehrere WebSocket-Subprotokolle implementieren und unterschiedliche Arten von Interaktionen je nach angegebenem Wert handhaben.
    Es ist jedoch zu beachten, dass pro Verbindung nur ein Subprotokoll ausgewählt werden kann.

    Die zulässigen Werte sind diejenigen, die im {{httpheader("Sec-WebSocket-Protocol")}} HTTP-Header angegeben werden können.
    Dies sind Werte, die aus dem [IANA WebSocket Subprotocol Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#subprotocol-name) ausgewählt wurden, wie `soap`, `wamp`, `ship` und so weiter, oder es kann ein benutzerdefinierter Name sein, der vom Client und Server gemeinsam verstanden wird.

    > [!NOTE]
    > Die Verbindung wird erst hergestellt, wenn das Subprotokoll mit dem Server ausgehandelt wird.
    > Das ausgewählte Protokoll kann dann von [`WebSocket.protocol`](/de/docs/Web/API/WebSocket/protocol) gelesen werden: Es wird der leere String sein, wenn keine Verbindung hergestellt werden kann.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird ausgelöst, wenn:

    - das Parsen der [`url`](#url) fehlschlägt
    - [`url`](#url) ein anderes Schema als `ws`, `wss`, `http` oder `https` hat
    - [`url`](#url) ein [Fragment](/de/docs/Web/URI/Reference/Fragment) hat
    - irgendeiner der Werte in [`protocols`](#protocols) mehr als einmal vorkommt oder anderweitig nicht den Anforderungen für Elemente entspricht, die den Wert von [`Sec-WebSocket-Protocol`](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism#sec-websocket-protocol) Feldern laut Spezifikation des WebSocket-Protokolls bilden

## Beispiele

Die unten gezeigten Beispiele zeigen, wie Sie möglicherweise eine Verbindung zu einem `WebSocket` herstellen.

Der untenstehende Code zeigt, wie wir eine Verbindung zu einem Socket mit einer URL mit dem `wss`-Schema herstellen können:

```js
const wssWebSocket = new WebSocket('wss://websocket.example.org');
console.log(wssWebSocket.url); // 'wss://websocket.example.org'
... // Do something with socket
wssWebSocket.close();
```

Der Code für die Verbindung zu einer HTTPS-URL ist fast derselbe.
Im Hintergrund wird dies vom Browser als "WSS"-Verbindung aufgelöst, sodass die [`WebSocket.url`](/de/docs/Web/API/WebSocket/url) das Schema "wss:" haben wird.

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

- [RFC 6455](https://www.rfc-editor.org/rfc/rfc6455.html) (die WebSocket-Protokollspezifikation)
