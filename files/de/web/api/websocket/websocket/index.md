---
title: "WebSocket: WebSocket() Konstruktor"
short-title: WebSocket()
slug: Web/API/WebSocket/WebSocket
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
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
  - : Die URL des Ziel-WebSocket-Servers, zu dem die Verbindung hergestellt werden soll.
    Die URL muss eines der folgenden Schemas verwenden: `ws`, `wss`, `http` oder `https`, und darf kein [URL-Fragment](/de/docs/Web/URI/Reference/Fragment) enthalten.
    Wenn eine relative URL angegeben wird, bezieht sie sich auf die Basis-URL des aufrufenden Skripts.

- `protocols` {{optional_inline}}
  - : Ein einzelner String oder ein Array von Strings, die das (die) [Subprotokoll(e)](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#subprotocols) repräsentieren, das der Client in Präferenzreihenfolge verwenden möchte.
    Wenn es weggelassen wird, wird standardmäßig ein leeres Array verwendet, d.h. `[]`.

    Ein einzelner Server kann mehrere WebSocket-Subprotokolle implementieren und verschiedene Arten von Interaktionen je nach angegebenem Wert behandeln.
    Beachten Sie jedoch, dass pro Verbindung nur ein Subprotokoll ausgewählt werden kann.

    Die erlaubten Werte sind diejenigen, die im {{httpheader("Sec-WebSocket-Protocol")}} HTTP-Header angegeben werden können.
    Dies sind Werte, die aus dem [IANA WebSocket Subprotocol Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#subprotocol-name) ausgewählt werden, wie `soap`, `wamp`, `ship` und so weiter, oder es kann ein benutzerdefinierter Name sein, der sowohl dem Client als auch dem Server bekannt ist.

    > [!NOTE]
    > Die Verbindung wird nicht hergestellt, bis das Subprotokoll mit dem Server ausgehandelt ist.
    > Das ausgewählte Protokoll kann dann von [`WebSocket.protocol`](/de/docs/Web/API/WebSocket/protocol) ausgelesen werden: Es wird der leere String sein, wenn keine Verbindung hergestellt werden kann.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - das Parsen von [`url`](#url) fehlschlägt
    - [`url`](#url) ein anderes Schema als `ws`, `wss`, `http` oder `https` hat
    - [`url`](#url) ein [Fragment](/de/docs/Web/URI/Reference/Fragment) enthält
    - irgendwelche der Werte in [`protocols`](#protocols) mehr als einmal vorkommen oder sonst wie die Anforderungen an Elemente nicht erfüllen, die den Wert der [`Sec-WebSocket-Protocol`](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism#sec-websocket-protocol)-Felder gemäß der WebSocket-Protokollspezifikation ausmachen

## Beispiele

Die folgenden Beispiele zeigen, wie Sie sich mit einem `WebSocket` verbinden können.

Der untenstehende Code zeigt, wie Sie sich mit einer URL mit dem `wss`-Schema zu einem Socket verbinden können:

```js
const wssWebSocket = new WebSocket("wss://websocket.example.org");
console.log(wssWebSocket.url); // 'wss://websocket.example.org'

// Do something with socket

wssWebSocket.close();
```

Der Code zum Verbinden mit einer HTTPS-URL ist nahezu identisch.
Im Hintergrund löst der Browser dies auf eine "WSS"-Verbindung auf, sodass die [`WebSocket.url`](/de/docs/Web/API/WebSocket/url) das Schema "wss:" haben wird.

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

- [RFC 6455](https://www.rfc-editor.org/rfc/rfc6455.html) (die WebSocket-Protokollspezifikation)
