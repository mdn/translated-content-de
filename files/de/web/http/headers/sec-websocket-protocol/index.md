---
title: Sec-WebSocket-Protocol
slug: Web/HTTP/Headers/Sec-WebSocket-Protocol
l10n:
  sourceCommit: c69e36924e1849fdc9b7fc49a3f4c550efa3468a
---

{{HTTPSidebar}}

Der **`Sec-WebSocket-Protocol`** HTTP {{glossary("request header", "Request-Header")}} und {{glossary("response header", "Antwort-Header")}} wird im [WebSocket](/de/docs/Web/API/WebSockets_API) Eröffnungs-[Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet, um ein [Subprotokoll](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#subprotocols) für die Kommunikation zu verhandeln.
Dies kann ein weit verbreitetes Protokoll wie SOAP oder WAMP sein oder ein benutzerdefiniertes Protokoll, das vom Client und Server verstanden wird.

In einer Anfrage spezifiziert der Header ein oder mehrere WebSocket-Subprotokolle, die die Webanwendung verwenden möchte, in der Reihenfolge der Präferenz.
Diese können als Protokollwerte in mehreren Headern hinzugefügt werden oder als kommagetrennte Werte zu einem einzelnen Header hinzugefügt werden.

In einer Antwort spezifiziert es das vom Server ausgewählte Subprotokoll.
Dies muss das erste Subprotokoll sein, das der Server aus der in der Anforderung angegebenen Liste unterstützt.

Der Anfrage-Header wird automatisch vom Browser hinzugefügt und mit Werten gefüllt, die von der Anwendung im [`protocols`](/de/docs/Web/API/WebSocket/WebSocket#protocols) Argument an das `WebSocket()` angegeben werden.
Das vom Server ausgewählte Subprotokoll wird in der Webanwendung in {{domxref("WebSocket.protocol")}} verfügbar gemacht.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request-Header")}}, {{Glossary("Response-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "Verbotener Header-Name")}}</th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

## Syntax

Anfrage:

```http
Sec-WebSocket-Protocol: <sub-protocols>
```

Antwort:

```http
Sec-WebSocket-Protocol: <selected-sub-protocol>
```

## Direktiven

- `<sub-protocols>`
  - : Eine kommaseparierte Liste von Subprotokollnamen, in der Reihenfolge der Präferenz.
    Die Subprotokolle können aus dem [IANA WebSocket Subprotocol Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#subprotocol-name) ausgewählt oder benutzerdefiniert sein, wobei sie vom Client und Server gemeinsam verstanden werden.

## Beispiele

Das Subprotokoll wird in der ursprünglichen WebSocket-[Handshake-Anfrage](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) spezifiziert.
Die folgende Anfrage zeigt, dass der Client `soap` bevorzugt, aber auch `wamp` unterstützt.

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
Sec-WebSocket-Protocol: soap, wamp
```

Das Spezifizieren der Protokolle auf diese Weise hat denselben Effekt:

```http
Sec-WebSocket-Protocol: soap
Sec-WebSocket-Protocol: wamp
```

Die Antwort des Servers wird den `Sec-WebSocket-Protocol` Header enthalten, der das erste Subprotokoll auswählt, das es aus den Präferenzen des Clients unterstützt.
Unten ist dies als `soap` dargestellt:

```http
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
Sec-WebSocket-Protocol: soap
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Sec-WebSocket-Accept")}}
- {{HTTPHeader("Sec-WebSocket-Key")}}
- {{HTTPHeader("Sec-WebSocket-Version")}}
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
- [Der WebSocket-Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) und [Subprotokolle](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#subprotocols) in _Writing WebSocket servers_
