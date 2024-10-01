---
title: Sec-WebSocket-Protocol
slug: Web/HTTP/Headers/Sec-WebSocket-Protocol
l10n:
  sourceCommit: c69e36924e1849fdc9b7fc49a3f4c550efa3468a
---

{{HTTPSidebar}}

Der **`Sec-WebSocket-Protocol`** HTTP-{{Glossary("request_header", "Anforderungs-")}} und {{Glossary("response_header", "Antwortheader")}} wird im [WebSocket](/de/docs/Web/API/WebSockets_API)-Eröffnungs-[Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet, um ein in der Kommunikation zu verwendendes [Subprotokoll](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#subprotocols) auszuhandeln. Dies kann ein gut verstandenes Protokoll wie SOAP oder WAMP oder ein benutzerdefiniertes Protokoll sein, das vom Client und Server verstanden wird.

In einer Anfrage gibt der Header ein oder mehrere WebSocket-Subprotokolle an, die die Webanwendung verwenden möchte, in der Reihenfolge der Präferenz. Diese können als Protokollwerte in mehreren Headers hinzugefügt oder als durch Kommas getrennte Werte zu einem einzigen Header hinzugefügt werden.

In einer Antwort wird das vom Server ausgewählte Subprotokoll angegeben. Dies muss das erste Subprotokoll sein, das der Server von der im Anforderungsheader bereitgestellten Liste unterstützt.

Der Anforderungsheader wird automatisch vom Browser hinzugefügt und mit Werten befüllt, die von der Anwendung im [`protocols`](/de/docs/Web/API/WebSocket/WebSocket#protocols)-Argument des `WebSocket()` angegeben wurden. Das vom Server ausgewählte Subprotokoll wird der Webanwendung in [`WebSocket.protocol`](/de/docs/Web/API/WebSocket/protocol) zur Verfügung gestellt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungsheader")}}, {{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>ja</td>
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

## Anweisungen

- `<sub-protocols>`
  - : Eine durch Kommas getrennte Liste von Subprotokollnamen, in der Reihenfolge der Präferenz. Die Subprotokolle können aus dem [IANA WebSocket Subprotocol Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#subprotocol-name) ausgewählt werden oder ein benutzerdefinierter Name sein, der gemeinsam von Client und Server verstanden wird.

## Beispiele

Das Subprotokoll wird in der ursprünglichen WebSocket-[Handshake-Anfrage](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) angegeben. Die untenstehende Anforderung zeigt, dass der Client `soap` bevorzugt, aber auch `wamp` unterstützt.

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
Sec-WebSocket-Protocol: soap, wamp
```

Die Protokolle so anzugeben, hat den gleichen Effekt:

```http
Sec-WebSocket-Protocol: soap
Sec-WebSocket-Protocol: wamp
```

Die Antwort des Servers wird den `Sec-WebSocket-Protocol`-Header enthalten, der das erste Subprotokoll auswählt, das er aus den Präferenzen des Clients unterstützt. Unten wird `soap` gezeigt:

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
- [Der WebSocket-Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) und [Subprotokolle](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#subprotocols) im _Writing WebSocket servers_
