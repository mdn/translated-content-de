---
title: Sec-WebSocket-Extensions header
short-title: Sec-WebSocket-Extensions
slug: Web/HTTP/Reference/Headers/Sec-WebSocket-Extensions
l10n:
  sourceCommit: 466ca1db767535c1aa9984b4e6c0db41b3a53475
---

{{HTTPSidebar}}

Der HTTP **Sec-WebSocket-Extensions** {{Glossary("request_header", "Anforderungs-")}} und {{Glossary("response_header", "Antwortheader")}} wird im [WebSocket](/de/docs/Web/API/WebSockets_API) Eröffnungs-[Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet, um eine Protokollerweiterung auszuhandeln, die vom Client und Server genutzt wird.

In einer Anforderung gibt der Header eine oder mehrere Erweiterungen an, die die Webanwendung in absteigender Präferenz nutzen möchte. Diese können in mehreren Headern hinzugefügt werden oder als kommagetrennte Werte einem einzigen Header hinzugefügt werden. Jede Erweiterung kann auch einen oder mehrere Parameter haben — diese sind mit Semikolons getrennte Werte, die nach der Erweiterung aufgelistet werden.

In einer Antwort kann der Header nur einmal erscheinen, wobei er die vom Server aus den Vorlieben des Clients ausgewählte Erweiterung angibt. Dieser Wert muss die erste Erweiterung sein, die der Server aus der im Anforderungsheader bereitgestellten Liste unterstützt.

Der Anforderungsheader wird automatisch vom Browser basierend auf seinen eigenen Fähigkeiten hinzugefügt und hängt nicht von den Parametern ab, die dem Konstruktor übergeben werden, wenn der `WebSocket` erstellt wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungs-")}}, {{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
      <td>Ja (<code>Sec-</code> Präfix)</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-WebSocket-Extensions: <extensions>
```

## Direktiven

- `<extensions>`
  - : Eine kommagetrennte Liste von Erweiterungen, die angefordert werden sollen (oder denen der Server zustimmen soll, diese zu unterstützen).
    Diese werden häufig aus dem [IANA WebSocket Extension Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#extension-name) ausgewählt (benutzerdefinierte Erweiterungen können ebenfalls verwendet werden).
    Erweiterungen, die Parameter verwenden, trennen diese mit Semikolons.

## Beispiele

### WebSocket Eröffnungs-Handshake

Die nachstehende HTTP-Anforderung zeigt den Eröffnungs-Handshake, bei dem ein Client die `permessage-deflate`-Erweiterung (mit `client_max_window_bits`-Parameter) und die `bbf-usp-protocol`-Erweiterung unterstützt.

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
Sec-WebSocket-Extensions: permessage-deflate; client_max_window_bits, bbf-usp-protocol
```

Die folgende Anforderung mit separaten Headern für jede Erweiterung ist gleichwertig:

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

Die nachstehende Antwort könnte von einem Server gesendet werden, um anzuzeigen, dass er die `permessage-deflate`-Erweiterung unterstützen wird:

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
- [Der WebSocket Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) und [Subprotokolle](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#subprotocols) in _Writing WebSocket servers_
