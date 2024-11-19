---
title: Sec-WebSocket-Protocol
slug: Web/HTTP/Headers/Sec-WebSocket-Protocol
l10n:
  sourceCommit: 6c32e8b21a39b1b8d3db7a194d2350e0f8218b64
---

{{HTTPSidebar}}

Der HTTP **`Sec-WebSocket-Protocol`** {{Glossary("request_header", "Anforderungs-")}} und {{Glossary("response_header", "Antwortheader")}} wird im [WebSocket](/de/docs/Web/API/WebSockets_API) Eröffnungs-[Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet, um ein [Subprotokoll](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#subprotocols) auszuhandeln, das in der Kommunikation verwendet wird.
Dies kann ein wohlbekanntes Protokoll wie SOAP oder WAMP sein oder auch ein benutzerdefiniertes Protokoll, das vom Client und Server verstanden wird.

In einer Anfrage spezifiziert der Header ein oder mehrere WebSocket-Subprotokolle, die die Webanwendung verwenden möchte, in der Reihenfolge ihrer Präferenz.
Diese können als Protokollwerte in mehreren Headers hinzugefügt werden, oder als durch Kommata getrennte Werte in einem einzelnen Header hinzugefügt werden.

In einer Antwort spezifiziert er das vom Server ausgewählte Subprotokoll.
Dies muss das erste Subprotokoll sein, das der Server aus der Liste unterstützt, die im Anforderungsheader bereitgestellt wurde.

Der Anforderungsheader wird automatisch vom Browser hinzugefügt und ausgefüllt, indem die Werte verwendet werden, die von der Anwendung im [`protocols`](/de/docs/Web/API/WebSocket/WebSocket#protocols)-Argument des `WebSocket()` angegeben werden.
Das vom Server ausgewählte Subprotokoll steht der Webanwendung in [`WebSocket.protocol`](/de/docs/Web/API/WebSocket/protocol) zur Verfügung.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungsheader")}}, {{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>Ja (<code>Sec-</code>-Präfix)</td>
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
  - : Eine durch Kommata getrennte Liste von Subprotokollnamen in der Reihenfolge der Präferenz.
    Die Subprotokolle können aus dem [IANA WebSocket Subprotocol Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#subprotocol-name) ausgewählt werden oder können ein benutzerdefinierter Name sein, der vom Client und dem Server gemeinsam verstanden wird.

## Beispiele

### WebSocket-Eröffnungs-Handshake

Das Subprotokoll wird in der originalen WebSocket-[Handshake-Anfrage](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) spezifiziert.
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

Die Protokolle auf diese Weise zu spezifizieren hat den gleichen Effekt:

```http
Sec-WebSocket-Protocol: soap
Sec-WebSocket-Protocol: wamp
```

Die Antwort vom Server wird den `Sec-WebSocket-Protocol`-Header enthalten und das erste Subprotokoll auswählen, das es aus den Präferenzen des Clients unterstützt.
Unten wird dies als `soap` gezeigt:

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
