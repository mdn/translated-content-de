---
title: Sec-WebSocket-Extensions
slug: Web/HTTP/Headers/Sec-WebSocket-Extensions
l10n:
  sourceCommit: c69e36924e1849fdc9b7fc49a3f4c550efa3468a
---

{{HTTPSidebar}}

Der **Sec-WebSocket-Extensions** HTTP-{{Glossary("request_header", "Anforderungs")}} und {{Glossary("response_header", "Antwort-Header")}} wird im [WebSocket](/de/docs/Web/API/WebSockets_API)-Eröffnungs-[Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet, um eine Protokollerweiterung zwischen Client und Server auszuhandeln.

In einer Anforderung gibt der Header eine oder mehrere Erweiterungen an, die die Webanwendung verwenden möchte, in der Reihenfolge der Präferenzen.
Diese können als mehrere Header hinzugefügt werden, oder als kommagetrennte Werte in einem einzelnen Header.

In einer Antwort kann der Header nur einmal erscheinen, wo er die vom Server aus den Präferenzen des Clients ausgewählte Erweiterung angibt.
Dieser Wert muss die erste Erweiterung sein, die der Server aus der im Anforderungs-Header bereitgestellten Liste unterstützt.

Der Anforderungs-Header wird automatisch vom Browser basierend auf seinen eigenen Fähigkeiten hinzugefügt und hängt nicht von Parametern ab, die an den Konstruktor übergeben werden, wenn der `WebSocket` erstellt wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Request_header", "Anforderungs-Header")}}, {{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

## Syntax

Anforderung

```http
Sec-WebSocket-Extensions: <extensions>
```

Antwort

```http
Sec-WebSocket-Extensions: <selected-extension>
```

## Direktiven

- `<extensions>`
  - : Eine kommagetrennte Liste von Erweiterungen, die angefordert werden sollen (oder zu denen der Server zustimmen muss, diese zu unterstützen).
    Diese sollten aus dem [IANA-WebSocket-Erweiterungsnamen-Register](https://www.iana.org/assignments/websocket/websocket.xml#extension-name) ausgewählt werden.
    Erweiterungen, die Parameter verwenden, trennen diese mit Semikolons.

## Beispiele

Die folgende HTTP-Anforderung zeigt den Eröffnungshandshake, bei dem ein Client die `permessage-deflate` und `client_max_window_bits`-Erweiterungen unterstützt.

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
Sec-WebSocket-Extensions: permessage-deflate; client_max_window_bits
```

Die folgende Anforderung mit separaten Headern für jede Erweiterung ist gleichwertig:

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

Die folgende Antwort könnte von einem Server gesendet werden, um anzuzeigen, dass er die `permessage-deflate`-Erweiterung unterstützen wird:

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
