---
title: Sec-WebSocket-Extensions header
short-title: Sec-WebSocket-Extensions
slug: Web/HTTP/Reference/Headers/Sec-WebSocket-Extensions
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP **Sec-WebSocket-Extensions** {{Glossary("request_header", "Request-Header")}} und {{Glossary("response_header", "Response-Header")}} wird im [WebSocket](/de/docs/Web/API/WebSockets_API)-Eröffnungshandshake verwendet, um eine Protokollerweiterung auszuhandeln, die vom Client und Server benutzt wird.

In einem Request gibt der Header eine oder mehrere Erweiterungen an, die die Webanwendung nutzen möchte, in der Reihenfolge der Präferenz. Diese können als mehrere Header hinzugefügt werden oder als kommagetrennte Werte zu einem einzelnen Header hinzugefügt werden. Jede Erweiterung kann auch ein oder mehrere Parameter haben — diese sind semikolongetrennte Werte, die nach der Erweiterung aufgeführt werden.

In einer Response kann der Header nur einmal erscheinen, wobei er die vom Server aus den Präferenzen des Clients ausgewählte Erweiterung angibt. Dieser Wert muss die erste Erweiterung sein, die der Server aus der im Request-Header bereitgestellten Liste unterstützt.

Der Request-Header wird vom Browser automatisch basierend auf seinen eigenen Fähigkeiten hinzugefügt und hängt nicht von Parametern ab, die an den Konstruktor übergeben werden, wenn der `WebSocket` erstellt wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}, {{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Ja (<code>Sec-</code>-Präfix)</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-WebSocket-Extensions: <extensions>
```

## Direktiven

- `<extensions>`
  - : Eine kommagetrennte Liste von Erweiterungen, die angefordert werden sollen (oder denen der Server zustimmen soll, sie zu unterstützen). Diese werden häufig aus dem [IANA WebSocket-Erweiterungsnamen-Register](https://www.iana.org/assignments/websocket/websocket.xml#extension-name) ausgewählt (benutzerdefinierte Erweiterungen können ebenfalls verwendet werden). Erweiterungen, die Parameter haben, trennen diese mit Semikolons.

## Beispiele

### WebSocket-Eröffnungshandshake

Der folgende HTTP-Request zeigt das Eröffnungshandshake, bei dem ein Client die `permessage-deflate`-Erweiterung (mit `client_max_window_bits`-Parameter) und die `bbf-usp-protocol`-Erweiterung unterstützt.

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
Sec-WebSocket-Extensions: permessage-deflate; client_max_window_bits, bbf-usp-protocol
```

Der folgende Request mit separaten Headers für jede Erweiterung ist gleichwertig:

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
Sec-WebSocket-Extensions: permessage-deflate; client_max_window_bits
Sec-WebSocket-Extensions: bbf-usp-protocol
```

Die folgende Response könnte von einem Server gesendet werden, um anzuzeigen, dass er die `permessage-deflate`-Erweiterung unterstützen wird:

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
- [Das WebSocket-Handschlag](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) und [Subprotokolle](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#subprotocols) in _Writing WebSocket servers_
