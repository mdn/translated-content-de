---
title: Sec-WebSocket-Extensions header
short-title: Sec-WebSocket-Extensions
slug: Web/HTTP/Reference/Headers/Sec-WebSocket-Extensions
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP **Sec-WebSocket-Extensions** {{Glossary("request_header", "Anforderungsheader")}} und {{Glossary("response_header", "Antwortheader")}} wird im [WebSocket](/de/docs/Web/API/WebSockets_API) Eröffnungshandshake verwendet, um eine Protokollerweiterung auszuhandeln, die vom Client und Server verwendet wird.

In einer Anforderung gibt der Header eine oder mehrere Erweiterungen an, die die Webanwendung verwenden möchte, in der Reihenfolge der Präferenz.
Diese können als mehrere Header hinzugefügt werden oder als kommaseparierte Werte zu einem einzigen Header hinzugefügt werden.

In einer Antwort darf der Header nur einmal erscheinen, wobei er die vom Server aus den Präferenzen des Clients ausgewählte Erweiterung angibt.
Dieser Wert muss die erste Erweiterung sein, die der Server aus der im Anforderungsheader bereitgestellten Liste unterstützt.

Der Anforderungsheader wird automatisch vom Browser basierend auf seinen eigenen Fähigkeiten hinzugefügt und hängt nicht von Parametern ab, die an den Konstruktor übergeben werden, wenn das `WebSocket` erstellt wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungsheader")}}, {{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbots-Header für Anfragen")}}</th>
      <td>Ja (<code>Sec-</code> Präfix)</td>
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
  - : Eine kommagetrennte Liste von Erweiterungen, die angefordert werden sollen (oder denen der Server zustimmen soll, sie zu unterstützen).
    Diese sollten aus dem [IANA WebSocket Extension Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#extension-name) ausgewählt werden.
    Erweiterungen, die Parameter haben, trennen diese mit Semikolons.

## Beispiele

### WebSocket-Eröffnungshandshake

Die folgende HTTP-Anforderung zeigt das Eröffnungshandshake, bei dem ein Client die Erweiterungen `permessage-deflate` und `client_max_window_bits` unterstützt.

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
Sec-WebSocket-Extensions: permessage-deflate; client_max_window_bits
```

Die nachstehende Anforderung mit separaten Headern für jede Erweiterung ist gleichwertig:

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

Die untenstehende Antwort könnte von einem Server gesendet werden, um anzuzeigen, dass er die `permessage-deflate`-Erweiterung unterstützen wird:

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
- [Der WebSocket-Handschlag](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) und [Subprotokolle](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#subprotocols) in _Writing WebSocket servers_
