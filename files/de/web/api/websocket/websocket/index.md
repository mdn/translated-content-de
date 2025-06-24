---
title: "WebSocket: WebSocket() Konstruktor"
short-title: WebSocket()
slug: Web/API/WebSocket/WebSocket
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
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

  - : Die URL des Ziel-WebSocket-Servers, zu dem verbunden werden soll.
    Die URL muss eines der folgenden Schemen verwenden: `ws`, `wss`, `http`, oder `https`, und darf kein [URL-Fragment](/de/docs/Web/URI/Reference/Fragment) enthalten.
    Wenn eine relative URL angegeben wird, ist sie relativ zur Basis-URL des aufrufenden Skripts.

- `protocols` {{optional_inline}}

  - : Ein einzelner String oder ein Array von Strings, die die [Subprotokolle](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#subprotocols) darstellen, die der Client in der Reihenfolge der Präferenz verwenden möchte.
    Wenn es weggelassen wird, wird standardmäßig ein leeres Array verwendet, d.h. `[]`.

    Ein einzelner Server kann mehrere WebSocket-Subprotokolle implementieren und verschiedene Arten von Interaktionen basierend auf dem angegebenen Wert handhaben.
    Beachten Sie jedoch, dass pro Verbindung nur ein Subprotokoll ausgewählt werden kann.

    Die zulässigen Werte sind jene, die im {{httpheader("Sec-WebSocket-Protocol")}} HTTP-Header angegeben werden können.
    Diese sind Werte, die aus dem [IANA WebSocket Subprotocol Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#subprotocol-name) ausgewählt wurden, wie `soap`, `wamp`, `ship` und so weiter, oder können einen benutzerdefinierten Namen haben, der von Client und Server gemeinsam verstanden wird.

    > [!NOTE]
    > Die Verbindung wird nicht hergestellt, bis das Subprotokoll mit dem Server ausgehandelt ist.
    > Das ausgewählte Protokoll kann dann von [`WebSocket.protocol`](/de/docs/Web/API/WebSocket/protocol) abgelesen werden: Es wird der leere String sein, wenn eine Verbindung nicht hergestellt werden kann.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - das Parsen von [`url`](#url) fehlschlägt
    - [`url`](#url) ein anderes Schema als `ws`, `wss`, `http`, oder `https` hat
    - [`url`](#url) ein [Fragment](/de/docs/Web/URI/Reference/Fragment) enthält
    - irgendwelche der Werte in [`protocols`](#protocols) mehr als einmal vorkommen oder anderweitig die Anforderungen an die Elemente, die den Wert der [`Sec-WebSocket-Protocol`](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism#sec-websocket-protocol)-Felder bilden, gemäß der WebSocket-Protokollspezifikation nicht erfüllen

## Beispiele

Die folgenden Beispiele zeigen, wie Sie eine Verbindung zu einem `WebSocket` herstellen könnten.

Der folgende Code zeigt, wie wir eine Verbindung zu einem Socket unter Verwendung einer URL mit dem Schema `wss` herstellen können:

```js
const wssWebSocket = new WebSocket("wss://websocket.example.org");
console.log(wssWebSocket.url); // 'wss://websocket.example.org'

// Do something with socket

wssWebSocket.close();
```

Der Code zum Verbinden mit einer HTTPS-URL ist nahezu gleich.
Intern löst der Browser dies zu einer „WSS“-Verbindung auf, sodass die [`WebSocket.url`](/de/docs/Web/API/WebSocket/url) das Schema „wss:“ haben wird.

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
