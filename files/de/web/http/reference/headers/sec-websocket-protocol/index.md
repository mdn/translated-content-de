---
title: Sec-WebSocket-Protocol header
short-title: Sec-WebSocket-Protocol
slug: Web/HTTP/Reference/Headers/Sec-WebSocket-Protocol
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP **`Sec-WebSocket-Protocol`** {{Glossary("request_header", "Request-Header")}} und {{Glossary("response_header", "Response-Header")}} wird im [WebSocket](/de/docs/Web/API/WebSockets_API) Eröffnungshandshake verwendet, um ein [Subprotokoll](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#subprotocols) für die Kommunikation zu verhandeln. Dies kann ein allgemein bekanntes Protokoll wie SOAP oder WAMP sein, oder ein benutzerdefiniertes Protokoll, das vom Client und Server verstanden wird.

In einem Request gibt der Header eines oder mehrere WebSocket-Subprotokolle an, die die Webanwendung gerne verwenden möchte, in der Reihenfolge der Präferenz. Diese können als Protokollwerte in mehreren Headern hinzugefügt werden oder als durch Kommas getrennte Werte in einem einzigen Header.

In einer Response gibt er das vom Server ausgewählte Subprotokoll an. Dies muss das erste Subprotokoll sein, das der Server aus der im Request-Header bereitgestellten Liste unterstützt.

Der Request-Header wird automatisch vom Browser hinzugefügt und mit den vom Anwendungsprotokoll angegebenen Werten im [`protocols`](/de/docs/Web/API/WebSocket/WebSocket#protocols) Argument für `WebSocket()` gefüllt. Das vom Server ausgewählte Subprotokoll wird der Webanwendung in [`WebSocket.protocol`](/de/docs/Web/API/WebSocket/protocol) zur Verfügung gestellt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}, {{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Ja (<code>Sec-</code> Präfix)</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-WebSocket-Protocol: <sub-protocols>
```

## Direktiven

- `<sub-protocols>`
  - : Eine Liste von Subprotokollnamen, getrennt durch Kommas, in der Reihenfolge der Präferenz. Die Subprotokolle können aus dem [IANA WebSocket Subprotocol Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#subprotocol-name) ausgewählt werden oder ein benutzerdefinierter Name sein, der vom Client und Server gemeinsam verstanden wird.

    Als Response-Header ist dies ein einzelnes Subprotokoll, das vom Server ausgewählt wurde.

## Beispiele

### WebSocket-Eröffnungshandshake

Das Subprotokoll wird im ursprünglichen WebSocket-[Handshake-Request](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) angegeben. Der untenstehende Request zeigt, dass der Client `soap` bevorzugt, aber auch `wamp` unterstützt.

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
Sec-WebSocket-Protocol: soap, wamp
```

Die Protokolle auf diese Weise anzugeben, hat denselben Effekt:

```http
Sec-WebSocket-Protocol: soap
Sec-WebSocket-Protocol: wamp
```

Die Antwort des Servers wird den `Sec-WebSocket-Protocol`-Header enthalten, der das erste Subprotokoll auswählt, das er aus den Präferenzen des Clients unterstützt. Unten wird dies als `soap` dargestellt:

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
- [Das WebSocket-Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) und [Subprotokolle](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#subprotocols) in _Writing WebSocket servers_
