---
title: Sec-WebSocket-Extensions
slug: Web/HTTP/Headers/Sec-WebSocket-Extensions
l10n:
  sourceCommit: c69e36924e1849fdc9b7fc49a3f4c550efa3468a
---

{{HTTPSidebar}}

Der **Sec-WebSocket-Extensions** HTTP {{glossary("request header", "Anforderungsheader")}} und {{glossary("response header", "Antwortheader")}} wird im [WebSocket](/de/docs/Web/API/WebSockets_API) Eröffnungs-[Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet, um eine Protokollerweiterung auszuhandeln, die vom Client und Server genutzt wird.

In einer Anfrage gibt der Header eine oder mehrere Erweiterungen an, die die Webanwendung in der Reihenfolge der Präferenz verwenden möchte. Diese können als mehrere Header hinzugefügt oder als kommagetrennte Werte in einem einzelnen Header hinzugefügt werden.

In einer Antwort kann der Header nur einmal erscheinen und spezifiziert die vom Server aus den Präferenzen des Clients ausgewählte Erweiterung. Dieser Wert muss die erste Erweiterung sein, die der Server aus der im Anforderungsheader bereitgestellten Liste unterstützt.

Der Anforderungsheader wird automatisch vom Browser basierend auf dessen eigenen Fähigkeiten hinzugefügt und hängt nicht von Parametern ab, die dem Konstruktor übergeben werden, wenn der `WebSocket` erstellt wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Anforderungsheader")}}, {{Glossary("Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Verbotener Header-Name")}}</th>
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
  - : Eine kommagetrennte Liste von Erweiterungen, die angefordert werden (oder die der Server zu unterstützen zusagt).
    Diese sollten aus dem [IANA WebSocket Extension Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#extension-name) ausgewählt werden.
    Erweiterungen, die Parameter erfordern, trennen diese durch Semikolons.

## Beispiele

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

Die folgende Antwort könnte von einem Server gesendet werden, um anzuzeigen, dass die `permessage-deflate` Erweiterung unterstützt wird:

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
