---
title: Sec-WebSocket-Extensions
slug: Web/HTTP/Headers/Sec-WebSocket-Extensions
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP-Header **Sec-WebSocket-Extensions** wird bei dem [WebSocket](/de/docs/Web/API/WebSockets_API) Eröffnungs-[Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet, um eine Protokollerweiterung auszuhandeln, die sowohl vom Client als auch vom Server genutzt wird.

In einer Anfrage gibt der Header eine oder mehrere Erweiterungen an, die die Webanwendung nutzen möchte, in der Reihenfolge der Präferenz.
Diese können entweder als mehrere Header hinzugefügt oder als durch Kommas getrennte Werte in einem einzigen Header ergänzt werden.

In einer Antwort kann der Header nur einmal erscheinen, wobei er die vom Server aus den Präferenzen des Clients ausgewählte Erweiterung spezifiziert.
Dieser Wert muss die erste Erweiterung sein, die der Server aus der im Anfrage-Header bereitgestellten Liste unterstützt.

Der Anfrage-Header wird automatisch vom Browser basierend auf dessen eigenen Fähigkeiten hinzugefügt und hängt nicht von Parametern ab, die dem Konstruktor übergeben werden, wenn der `WebSocket` erstellt wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anfrage-Header")}}, {{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
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
  - : Eine durch Kommas getrennte Liste von Erweiterungen, um deren Unterstützung gebeten wird (oder für die der Server zustimmt, sie zu unterstützen).
    Diese sollten aus dem [IANA WebSocket Extension Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#extension-name) ausgewählt werden.
    Erweiterungen, die Parameter benötigen, trennen diese durch Semikolons.

## Beispiele

### WebSocket Eröffnungs-Handshake

Die untenstehende HTTP-Anfrage zeigt den Eröffnungs-Handshake, bei dem ein Client die Erweiterungen `permessage-deflate` und `client_max_window_bits` unterstützt.

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
Sec-WebSocket-Extensions: permessage-deflate; client_max_window_bits
```

Die untenstehende Anfrage mit separaten Headern für jede Erweiterung ist gleichwertig:

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

Die unten gezeigte Antwort könnte von einem Server gesendet werden, um anzuzeigen, dass er die `permessage-deflate` Erweiterung unterstützen wird:

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
