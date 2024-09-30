---
title: "WebSocket: WebSocket() Konstruktor"
short-title: WebSocket()
slug: Web/API/WebSocket/WebSocket
l10n:
  sourceCommit: fb311d7305937497570966f015d8cc0eb1a0c29c
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
    Die URL muss eines der folgenden Schemas verwenden: `ws`, `wss`, `http` oder `https` und darf kein [URL-Fragment](/de/docs/Web/URI/Fragment) enthalten.
    Wenn eine relative URL angegeben wird, ist sie relativ zur Basis-URL des aufrufenden Skripts.

- `protocols` {{optional_inline}}

  - : Ein einzelner String oder ein Array von Strings, das die vom Client gewünschten [Subprotokolle](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#subprotocols) in der Reihenfolge der Präferenz repräsentiert.
    Wenn es weggelassen wird, wird standardmäßig ein leeres Array verwendet, d.h. `[]`.

    Ein einzelner Server kann mehrere WebSocket-Subprotokolle implementieren und verschiedene Arten von Interaktionen basierend auf dem angegebenen Wert abwickeln.
    Beachten Sie jedoch, dass pro Verbindung nur ein Subprotokoll ausgewählt werden kann.

    Die erlaubten Werte sind diejenigen, die im {{httpheader("Sec-WebSocket-Protocol")}} HTTP-Header angegeben werden können.
    Sie sind Werte aus dem [IANA WebSocket Subprotocol Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#subprotocol-name), wie z.B. `soap`, `wamp`, `ship` und so weiter, oder es kann ein benutzerdefinierter Name sein, der vom Client und dem Server gemeinsam verstanden wird.

    > [!NOTE]
    > Die Verbindung wird erst hergestellt, nachdem das Subprotokoll mit dem Server ausgehandelt wurde.
    > Das ausgewählte Protokoll kann dann von [`WebSocket.protocol`](/de/docs/Web/API/WebSocket/protocol) gelesen werden: Es wird der leere String sein, wenn keine Verbindung hergestellt werden kann.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird ausgelöst, wenn:

    - das Parsen von [`url`](#url) fehlschlägt
    - [`url`](#url) ein anderes Schema als `ws`, `wss`, `http` oder `https` hat
    - [`url`](#url) ein [Fragment](/de/docs/Web/URI/Fragment) enthält
    - irgendeiner der Werte in [`protocols`](#protocols) mehr als einmal vorkommt oder anderweitig die Anforderungen an Elemente nicht erfüllt, die den Wert der Felder [`Sec-WebSocket-Protocol`](/de/docs/Web/HTTP/Protocol_upgrade_mechanism#sec-websocket-protocol) gemäß der WebSocket-Protokollspezifikation ausmachen

## Beispiele

Die nachstehenden Beispiele zeigen, wie eine Verbindung zu einem `WebSocket` hergestellt werden kann.

Der unten gezeigte Code zeigt, wie wir eine Verbindung zu einem Socket mit einer URL mit dem Schema `wss` herstellen können:

```js
const httpsWebSocket = new WebSocket('wss://websocket.example.org');
console.log(httpsWebSocket.url); // 'wss://websocket.example.org'
... // Do something with socket
httpsWebSocket.close();
```

Der Code zum Verbinden mit einer HTTPS-URL ist nahezu identisch.
Im Hintergrund wandelt der Browser dies in eine "WSS"-Verbindung um, so dass die [`WebSocket.url`](/de/docs/Web/API/WebSocket/url) das Schema "wss:" haben wird.

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
