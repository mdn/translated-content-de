---
title: Sec-WebSocket-Protocol
slug: Web/HTTP/Headers/Sec-WebSocket-Protocol
l10n:
  sourceCommit: c69e36924e1849fdc9b7fc49a3f4c550efa3468a
---

{{HTTPSidebar}}

Der **`Sec-WebSocket-Protocol`** HTTP-{{glossary("request header", "Anforderungsheader")}} und {{glossary("response header", "Antwortheader")}} wird im [WebSocket](/de/docs/Web/API/WebSockets_API)-Eröffnungshandshake verwendet, um ein [Subprotokoll](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#subprotocols) für die Kommunikation auszuhandeln. Dies kann ein allgemein bekanntes Protokoll wie SOAP oder WAMP sein oder ein benutzerdefiniertes Protokoll, das vom Client und Server verstanden wird.

In einer Anforderung gibt der Header ein oder mehrere WebSocket-Subprotokolle an, die die Webanwendung in der Reihenfolge der Priorität verwenden möchte. Diese können als Protokollwerte in mehreren Headern hinzugefügt werden oder als kommagetrennte Werte in einem einzigen Header.

In einer Antwort gibt es das vom Server ausgewählte Subprotokoll an. Dies muss das erste Subprotokoll sein, das der Server von der im Anforderungsheader bereitgestellten Liste unterstützt.

Der Anforderungsheader wird automatisch vom Browser hinzugefügt und gefüllt, wobei die in dem [`protocols`](/de/docs/Web/API/WebSocket/WebSocket#protocols)-Argument der `WebSocket()`-Funktion angegebenen Werte verwendet werden. Das vom Server ausgewählte Subprotokoll wird in der Webanwendung in {{domxref("WebSocket.protocol")}} verfügbar gemacht.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Request header", "Anforderungsheader")}}, {{Glossary("Response header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "Verbotener Headername")}}</th>
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

## Direktiven

- `<sub-protocols>`
  - : Eine durch Kommata getrennte Liste von Subprotokollnamen, in der Reihenfolge der Priorität. Die Subprotokolle können aus dem [IANA WebSocket Subprotocol Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#subprotocol-name) ausgewählt werden oder ein benutzerdefinierter Name sein, der sowohl vom Client als auch vom Server verstanden wird.

## Beispiele

Das Subprotokoll wird in der ursprünglichen WebSocket-[Handshake-Anforderung](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) angegeben. Die folgende Anforderung zeigt, dass der Client `soap` bevorzugt, aber auch `wamp` unterstützt.

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
Sec-WebSocket-Protocol: soap, wamp
```

Die Angabe der Protokolle auf diese Weise hat denselben Effekt:

```http
Sec-WebSocket-Protocol: soap
Sec-WebSocket-Protocol: wamp
```

Die Antwort des Servers wird den `Sec-WebSocket-Protocol`-Header enthalten, welcher das erste vom Server unterstützte Subprotokoll basierend auf den Präferenzen des Clients auswählt. Unten ist dies als `soap` dargestellt:

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
