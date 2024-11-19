---
title: Sec-WebSocket-Extensions
slug: Web/HTTP/Headers/Sec-WebSocket-Extensions
l10n:
  sourceCommit: 6c32e8b21a39b1b8d3db7a194d2350e0f8218b64
---

{{HTTPSidebar}}

Der HTTP-Header **Sec-WebSocket-Extensions** für {{Glossary("request_header", "Anfragen")}} und {{Glossary("response_header", "Antworten")}} wird im Eröffnungs-[Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) von [WebSocket](/de/docs/Web/API/WebSockets_API) verwendet, um eine Protokollerweiterung auszuhandeln, die vom Client und Server genutzt wird.

In einer Anfrage gibt der Header eine oder mehrere vom Webanwendung gewünschte Erweiterungen in der Reihenfolge der Präferenz an.
Diese können als mehrere Header hinzugefügt oder als kommagetrennte Werte in einem einzelnen Header angegeben werden.

In einer Antwort kann der Header nur einmal erscheinen. Er gibt die vom Server ausgewählte Erweiterung aus den Präferenzen des Clients an.
Dieser Wert muss die erste Erweiterung sein, die der Server aus der im Anforderungsheader angegebenen Liste unterstützt.

Der Anforderungsheader wird automatisch vom Browser basierend auf seinen eigenen Fähigkeiten hinzugefügt und hängt nicht von den beim Erstellen des `WebSocket` an den Konstruktor übergebenen Parametern ab.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anfrage-Header")}}, {{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>Ja (<code>Sec-</code>-Präfix)</td>
    </tr>
  </tbody>
</table>

## Syntax

Anfrage

```http
Sec-WebSocket-Extensions: <extensions>
```

Antwort

```http
Sec-WebSocket-Extensions: <selected-extension>
```

## Direktiven

- `<extensions>`
  - : Eine kommagetrennte Liste von Erweiterungen, die angefordert werden (oder deren Unterstützung der Server zustimmen soll).
    Diese sollten aus dem [IANA WebSocket Extension Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#extension-name) ausgewählt werden.
    Erweiterungen, die Parameter erfordern, trennen diese mit Semikolons.

## Beispiele

### WebSocket-Eröffnungs-Handshake

Die folgende HTTP-Anfrage zeigt den Eröffnungs-Handshake, bei dem ein Client die Erweiterungen `permessage-deflate` und `client_max_window_bits` unterstützt.

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
Sec-WebSocket-Extensions: permessage-deflate; client_max_window_bits
```

Die folgende Anfrage mit separaten Headern für jede Erweiterung ist gleichwertig:

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
Sec-WebSocket-Extensions: permessage-deflate
Sec-WebSocket-Extensions: client_max_window_bits
```

Die folgende Antwort könnte von einem Server gesendet werden, um anzuzeigen, dass er die Erweiterung `permessage-deflate` unterstützt:

```http
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
Sec-WebSocket-Extensions: permessage-deflate
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Sec-WebSocket-Accept")}}
- {{HTTPHeader("Sec-WebSocket-Key")}}
- {{HTTPHeader("Sec-WebSocket-Version")}}
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
- [Der WebSocket-Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) und [Subprotokolle](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#subprotocols) in _Writing WebSocket servers_
