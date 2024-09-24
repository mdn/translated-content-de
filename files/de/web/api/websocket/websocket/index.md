---
title: "WebSocket: WebSocket()-Konstruktor"
short-title: WebSocket()
slug: Web/API/WebSocket/WebSocket
l10n:
  sourceCommit: c69e36924e1849fdc9b7fc49a3f4c550efa3468a
---

{{APIRef("WebSockets API")}}

Der **`WebSocket()`**-Konstruktor gibt ein neues {{domxref("WebSocket")}}-Objekt zurück und versucht sofort, eine Verbindung zur angegebenen WebSocket-URL herzustellen.

## Syntax

```js-nolint
new WebSocket(url)
new WebSocket(url, protocols)
```

### Parameter

- `url`

  - : Die URL des Ziel-WebSocket-Servers, zu dem eine Verbindung hergestellt werden soll.
    Die URL muss eines der folgenden Schemes verwenden: `ws`, `wss`, `http` oder `https` und darf kein [URL-Fragment](/de/docs/Web/URI/Fragment) enthalten.
    Wenn eine relative URL angegeben wird, ist sie relativ zur Basis-URL des aufrufenden Skripts.

- `protocols` {{optional_inline}}

  - : Ein einzelner String oder ein Array von Strings, die das/die [Subprotokoll(e)](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#subprotocols) darstellen, das/die der Client in der Reihenfolge der Präferenzen verwenden möchte.
    Wird es weggelassen, wird standardmäßig ein leeres Array verwendet, d.h. `[]`.

    Ein einzelner Server kann mehrere WebSocket-Subprotokolle implementieren und unterschiedliche Arten von Interaktionen je nach angegebenem Wert handhaben.
    Beachten Sie jedoch, dass pro Verbindung nur ein Subprotokoll ausgewählt werden kann.

    Die zulässigen Werte sind diejenigen, die im {{httpheader("Sec-WebSocket-Protocol")}} HTTP-Header angegeben werden können.
    Dies sind Werte, die aus dem [IANA WebSocket Subprotocol Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#subprotocol-name) ausgewählt wurden, wie `soap`, `wamp`, `ship` usw., oder ein benutzerdefinierter Name, der vom Client und Server gemeinsam verstanden wird.

    > [!NOTE]
    > Die Verbindung wird erst hergestellt, wenn das Subprotokoll mit dem Server ausgehandelt wurde.
    > Das ausgewählte Protokoll kann dann aus {{domxref("WebSocket.protocol")}} gelesen werden: Es wird der leere String sein, wenn keine Verbindung hergestellt werden kann.

### Ausnahmen

- `SyntaxError` {{domxref("DOMException")}}

  - : Wird ausgelöst, wenn:

    - das Parsen von [`url`](#url) fehlschlägt
    - [`url`](#url) ein anderes Schema als `ws`, `wss`, `http` oder `https` hat
    - [`url`](#url) ein [Fragment](/de/docs/Web/URI/Fragment) enthält
    - irgendein Wert in [`protocols`](#protocols) mehr als einmal vorkommt oder anderweitig die Anforderungen an Elemente, die den Wert von [`Sec-WebSocket-Protocol`](/de/docs/Web/HTTP/Protocol_upgrade_mechanism#sec-websocket-protocol) Felder gemäß der WebSocket-Protokoll-Spezifikation nicht erfüllt

## Beispiele

Die folgenden Beispiele zeigen, wie Sie sich mit einem `WebSocket` verbinden könnten.

Der folgende Code zeigt, wie wir uns mit einem Socket unter Verwendung einer URL mit dem `wss`-Schema verbinden können:

```js
const httpsWebSocket = new WebSocket('wss://websocket.example.org');
console.log(httpsWebSocket.url); // 'wss://websocket.example.org'
... // Do something with socket
httpsWebSocket.close();
```

Der Code für die Verbindung zu einer HTTPS-URL ist nahezu identisch.
Im Hintergrund wird der Browser dies in eine "WSS"-Verbindung auflösen, sodass die {{domxref("WebSocket.url")}} das Schema "wss:" haben wird.

```js
let wssWebSocket = new WebSocket('https://websocket.example.org');
console.log(wssWebSocket.url); // 'wss://websocket.example.org'
... // Do something with socket
wssWebSocket.close();
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
