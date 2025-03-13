---
title: "WebSocket: WebSocket() Konstruktor"
short-title: WebSocket()
slug: Web/API/WebSocket/WebSocket
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
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

  - : Die URL des Ziel-WebSocket-Servers, mit dem eine Verbindung hergestellt werden soll.
    Die URL muss eines der folgenden Schemata verwenden: `ws`, `wss`, `http` oder `https` und darf kein [URL-Fragment](/de/docs/Web/URI/Reference/Fragment) enthalten.
    Wenn eine relative URL angegeben wird, bezieht sie sich auf die Basis-URL des aufrufenden Skripts.

- `protocols` {{optional_inline}}

  - : Ein einzelner String oder ein Array von Strings, die das bzw. die [Unterprotokoll(e)](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#subprotocols) darstellen, die der Client in der Reihenfolge der Präferenz verwenden möchte.
    Wenn es weggelassen wird, wird ein leeres Array standardmäßig verwendet, d.h. `[]`.

    Ein einzelner Server kann mehrere WebSocket-Unterprotokolle implementieren und verschiedene Arten von Interaktionen in Abhängigkeit vom angegebenen Wert behandeln.
    Beachten Sie jedoch, dass nur ein Unterprotokoll pro Verbindung ausgewählt werden kann.

    Die erlaubten Werte sind jene, die im {{httpheader("Sec-WebSocket-Protocol")}} HTTP-Header angegeben werden können.
    Diese sind Werte, die aus dem [IANA WebSocket Subprotocol Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#subprotocol-name) ausgewählt werden, wie `soap`, `wamp`, `ship` und so weiter, oder es kann ein benutzerdefinierter Name sein, der zwischen Client und Server gemeinsames Verständnis hat.

    > [!NOTE]
    > Die Verbindung wird nicht hergestellt, bis das Unterprotokoll mit dem Server verhandelt wurde.
    > Das ausgewählte Protokoll kann dann von [`WebSocket.protocol`](/de/docs/Web/API/WebSocket/protocol) gelesen werden: Es wird der leere String sein, wenn keine Verbindung hergestellt werden kann.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird ausgelöst, wenn:

    - das Parsen von [`url`](#url) fehlschlägt
    - [`url`](#url) ein anderes Schema als `ws`, `wss`, `http` oder `https` hat
    - [`url`](#url) ein [Fragment](/de/docs/Web/URI/Reference/Fragment) enthält
    - irgendeines der Werte in [`protocols`](#protocols) mehr als einmal vorkommt oder ansonsten die Anforderungen für Elemente, die den Wert der Felder des [`Sec-WebSocket-Protocol`](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism#sec-websocket-protocol) gemäß der WebSocket-Protokollspezifikation ausmachen, nicht erfüllt

## Beispiele

Die folgenden Beispiele zeigen, wie Sie eine Verbindung zu einem `WebSocket` herstellen können.

Der unten stehende Code zeigt, wie wir eine Verbindung zu einem Socket unter Verwendung einer URL mit dem `wss`-Schema herstellen können:

```js
const wssWebSocket = new WebSocket('wss://websocket.example.org');
console.log(wssWebSocket.url); // 'wss://websocket.example.org'
... // Do something with socket
wssWebSocket.close();
```

Der Code zur Verbindung mit einer HTTPS-URL ist nahezu der gleiche.
Im Hintergrund löst der Browser dies zu einer "WSS"-Verbindung auf, sodass die [`WebSocket.url`](/de/docs/Web/API/WebSocket/url) das Schema "wss:" haben wird.

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
