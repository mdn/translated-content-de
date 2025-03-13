---
title: Sec-WebSocket-Extensions
slug: Web/HTTP/Reference/Headers/Sec-WebSocket-Extensions
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP **Sec-WebSocket-Extensions** {{Glossary("request_header", "Anforderungs-")}} und {{Glossary("response_header", "Antwortheader")}} wird im [WebSocket](/de/docs/Web/API/WebSockets_API) Eröffnungs-[Handschlag](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet, um eine Protokollerweiterung auszuhandeln, die vom Client und Server genutzt wird.

In einer Anfrage gibt der Header eine oder mehrere Erweiterungen an, die die Webanwendung verwenden möchte, in der Reihenfolge der Präferenz.
Diese können als mehrere Header hinzugefügt werden oder als durch Kommas getrennte Werte zu einem einzelnen Header hinzugefügt werden.

In einer Antwort kann der Header nur einmal erscheinen, wobei er die Erweiterung spezifiziert, die der Server aus den Präferenzen des Clients ausgewählt hat.
Dieser Wert muss die erste Erweiterung sein, die der Server aus der in der Anforderungs-Header bereitgestellten Liste unterstützt.

Der Anforderungs-Header wird vom Browser automatisch basierend auf dessen eigenen Fähigkeiten hinzugefügt und hängt nicht von den Parametern ab, die beim Erstellen des `WebSocket` an den Konstruktor übergeben werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungs-Header")}}, {{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Ja (<code>Sec-</code> Präfix)</td>
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
  - : Eine durch Kommas getrennte Liste von Erweiterungen, die angefragt werden sollen (oder denen der Server zustimmen soll, sie zu unterstützen).
    Diese sollten aus dem [IANA WebSocket Extension Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#extension-name) ausgewählt werden.
    Erweiterungen, die Parameter übernehmen, trennen diese mit Semikolons.

## Beispiele

### WebSocket Eröffnungs-Handschlag

Die untenstehende HTTP-Anfrage zeigt den Eröffnungs-Handschlag, bei dem ein Client die Erweiterungen `permessage-deflate` und `client_max_window_bits` unterstützt.

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

Die folgende Antwort könnte von einem Server gesendet werden, um anzuzeigen, dass er die Erweiterung `permessage-deflate` unterstützen wird:

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
- [Der WebSocket-Handschlag](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) und [Unterprotokolle](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#subprotocols) in _Writing WebSocket servers_
