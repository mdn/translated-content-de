---
title: Sec-WebSocket-Protocol
slug: Web/HTTP/Reference/Headers/Sec-WebSocket-Protocol
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-**`Sec-WebSocket-Protocol`**-{{Glossary("request_header", "Anforderungs")}}- und {{Glossary("response_header", "Antwortheader")}} wird im [WebSocket](/de/docs/Web/API/WebSockets_API) Eröffnungs-[Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet, um ein [Subprotokoll](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#subprotocols) für die Kommunikation auszuhandeln. Dies kann ein bekanntes Protokoll wie SOAP oder WAMP sein oder ein benutzerdefiniertes Protokoll, das vom Client und Server verstanden wird.

In einer Anfrage gibt der Header ein oder mehrere WebSocket-Subprotokolle an, die die Webanwendung verwenden möchte, in der Reihenfolge der Priorität. Diese können als Protokollwerte in mehreren Headern hinzugefügt werden oder als kommagetrennte Werte, die zu einem einzelnen Header hinzugefügt werden.

In einer Antwort gibt es das vom Server ausgewählte Subprotokoll an. Dies muss das erste Subprotokoll sein, das der Server aus der im Anforderungsheader angegebenen Liste unterstützt.

Der Anforderungsheader wird automatisch vom Browser hinzugefügt und mit Werten ausgefüllt, die von der Anwendung im [`protocols`](/de/docs/Web/API/WebSocket/WebSocket#protocols)-Argument der `WebSocket()`-Methode angegeben werden. Das vom Server ausgewählte Subprotokoll ist der Webanwendung in [`WebSocket.protocol`](/de/docs/Web/API/WebSocket/protocol) verfügbar.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungsheader")}}, {{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
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
  - : Eine kommagetrennte Liste von Subprotokollnamen in der Reihenfolge der Präferenz. Die Subprotokolle können aus dem [IANA WebSocket Subprotocol Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#subprotocol-name) ausgewählt werden oder es kann sich um einen benutzerdefinierten Namen handeln, der vom Client und Server gemeinsam verstanden wird.

## Beispiele

### WebSocket-Eröffnungshandshake

Das Subprotokoll wird in der ursprünglichen WebSocket-[Handshake-Anforderung](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) spezifiziert. Die untenstehende Anfrage zeigt, dass der Client `soap` bevorzugt, aber auch `wamp` unterstützt.

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
Sec-WebSocket-Protocol: soap, wamp
```

Die Protokolle auf diese Weise anzugeben, hat die gleiche Wirkung:

```http
Sec-WebSocket-Protocol: soap
Sec-WebSocket-Protocol: wamp
```

Die Antwort des Servers wird den Header `Sec-WebSocket-Protocol` enthalten, der das erste Subprotokoll aus den Präferenzen des Clients auswählt, das der Server unterstützt. Unten wird das als `soap` gezeigt:

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
