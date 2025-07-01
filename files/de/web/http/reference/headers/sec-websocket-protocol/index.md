---
title: Sec-WebSocket-Protocol header
short-title: Sec-WebSocket-Protocol
slug: Web/HTTP/Reference/Headers/Sec-WebSocket-Protocol
l10n:
  sourceCommit: 466ca1db767535c1aa9984b4e6c0db41b3a53475
---

{{HTTPSidebar}}

Der HTTP **`Sec-WebSocket-Protocol`** {{Glossary("request_header", "Anforderungs")}}- und {{Glossary("response_header", "Antwort-Header")}} wird im [WebSocket](/de/docs/Web/API/WebSockets_API)-Eröffnungs-[Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet, um ein zu verwendendes [Subprotokoll](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#subprotocols) in der Kommunikation auszuhandeln.
Dies kann ein gut verstandenes Protokoll wie SOAP oder WAMP sein, oder ein benutzerdefiniertes Protokoll, das vom Client und Server verstanden wird.

In einer Anfrage gibt der Header ein oder mehrere WebSocket-Subprotokolle an, die die Webanwendung in der Reihenfolge der Präferenz verwenden möchte.
Diese können als Protokollwerte in mehreren Headern hinzugefügt oder als durch Kommas getrennte Werte einem einzelnen Header hinzugefügt werden.

In einer Antwort gibt er das vom Server gewählte Subprotokoll an.
Dies muss das erste Subprotokoll sein, das der Server aus der in der Anforderungsheader bereitgestellten Liste unterstützt.

Der Anforderungs-Header wird automatisch vom Browser hinzugefügt und ausgefüllt, wobei die von der Anwendung im [`protocols`](/de/docs/Web/API/WebSocket/WebSocket#protocols)-Argument an `WebSocket()` angegebenen Werte verwendet werden.
Das vom Server ausgewählte Subprotokoll steht der Webanwendung in [`WebSocket.protocol`](/de/docs/Web/API/WebSocket/protocol) zur Verfügung.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungsheader")}}, {{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Ja (<code>Sec-</code>-Präfix)</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-WebSocket-Protocol: <sub-protocols>
```

## Direktiven

- `<sub-protocols>`
  - : Eine durch Kommas getrennte Liste von Subprotokoll-Namen in der Reihenfolge der Präferenz.
    Die Subprotokolle können aus dem [IANA-WebSocket-Subprotokollnamen-Register](https://www.iana.org/assignments/websocket/websocket.xml#subprotocol-name) ausgewählt werden oder ein benutzerdefinierter Name sein, der vom Client und Server gemeinsam verstanden wird.

    Als Antwort-Header ist dies ein einzelnes Subprotokoll, das der Server ausgewählt hat.

## Beispiele

### WebSocket-Eröffnungs-Handshake

Das Subprotokoll wird in der ursprünglichen WebSocket-[Handshake-Anfrage](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) angegeben.
Die untenstehende Anfrage zeigt, dass der Client `soap` bevorzugt, aber auch `wamp` unterstützt.

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
Sec-WebSocket-Protocol: soap, wamp
```

Die Protokolle so anzugeben hat denselben Effekt:

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
