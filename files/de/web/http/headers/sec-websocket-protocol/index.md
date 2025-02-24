---
title: Sec-WebSocket-Protocol
slug: Web/HTTP/Headers/Sec-WebSocket-Protocol
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP-**`Sec-WebSocket-Protocol`**-{{Glossary("request_header", "Anforderungs")}} und {{Glossary("response_header", "Antwort-Header")}} wird im [WebSocket](/de/docs/Web/API/WebSockets_API)-Öffnungs-[Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet, um ein [Subprotokoll](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#subprotocols) für die Kommunikation auszuhandeln.
Dies kann ein weit verbreitetes Protokoll wie SOAP oder WAMP sein, oder ein benutzerdefiniertes Protokoll, das vom Client und Server verstanden wird.

In einer Anforderung gibt der Header ein oder mehrere WebSocket-Subprotokolle an, die die Webanwendung in der Reihenfolge der Präferenz verwenden möchte.
Diese können als Protokollwerte in mehreren Headern hinzugefügt werden oder als kommagetrennte Werte in einem einzigen Header hinzugefügt werden.

In einer Antwort gibt er das vom Server ausgewählte Subprotokoll an.
Dies muss das erste Subprotokoll sein, das der Server von der im Anforderungsheader bereitgestellten Liste unterstützt.

Der Anforderungsheader wird vom Browser automatisch hinzugefügt und mit Werten aus dem von der Anwendung im [`protocols`](/de/docs/Web/API/WebSocket/WebSocket#protocols)-Argument an den `WebSocket()` bereitgestellten Werten gefüllt.
Das vom Server ausgewählte Subprotokoll wird der Webanwendung in [`WebSocket.protocol`](/de/docs/Web/API/WebSocket/protocol) zur Verfügung gestellt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungs-Header")}}, {{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Ja (<code>Sec-</code>-Präfix)</td>
    </tr>
  </tbody>
</table>

## Syntax

Anforderung:

```http
Sec-WebSocket-Protocol: <sub-protocols>
```

Antwort:

```http
Sec-WebSocket-Protocol: <selected-sub-protocol>
```

## Direktiven

- `<sub-protocols>`
  - : Eine kommagetrennte Liste von Subprotokollnamen in der Reihenfolge der Präferenz.
    Die Subprotokolle können aus dem [IANA WebSocket Subprotocol Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#subprotocol-name) ausgewählt werden oder ein benutzerdefinierter Name sein, der vom Client und dem Server gemeinsam verstanden wird.

## Beispiele

### WebSocket-Öffnungshandshake

Das Subprotokoll wird in der ursprünglichen WebSocket-[Handshake-Anforderung](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) angegeben.
Die folgende Anforderung zeigt, dass der Client `soap` bevorzugt, aber auch `wamp` unterstützt.

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
Sec-WebSocket-Protocol: soap, wamp
```

Die Protokolle auf diese Weise anzugeben hat denselben Effekt:

```http
Sec-WebSocket-Protocol: soap
Sec-WebSocket-Protocol: wamp
```

Die Antwort des Servers wird den `Sec-WebSocket-Protocol`-Header enthalten, der das erste Subprotokoll auswählt, das er aus den Präferenzen des Clients unterstützt.
Unten wird das als `soap` gezeigt:

```http
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
Sec-WebSocket-Protocol: soap
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Sec-WebSocket-Accept")}}
- {{HTTPHeader("Sec-WebSocket-Key")}}
- {{HTTPHeader("Sec-WebSocket-Version")}}
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
- [Der WebSocket-Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) und [Subprotokolle](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#subprotocols) in _Writing WebSocket servers_
