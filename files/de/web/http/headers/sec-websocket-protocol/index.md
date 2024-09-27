---
title: Sec-WebSocket-Protocol
slug: Web/HTTP/Headers/Sec-WebSocket-Protocol
l10n:
  sourceCommit: c69e36924e1849fdc9b7fc49a3f4c550efa3468a
---

{{HTTPSidebar}}

Der **`Sec-WebSocket-Protocol`** HTTP-[Anforderungs](/de/docs/Glossary/request_header) und [Antwort-Header](/de/docs/Glossary/response_header) wird beim [WebSocket](/de/docs/Web/API/WebSockets_API) Eröffnungs-[Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet, um ein zu verwendendes [Sub-Protokoll](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#subprotocols) in der Kommunikation auszuhandeln. Dies kann ein gut verstandenes Protokoll wie SOAP oder WAMP sein oder ein benutzerdefiniertes Protokoll, das vom Client und Server verstanden wird.

In einer Anfrage gibt der Header ein oder mehrere WebSocket-Sub-Protokolle an, die die Webanwendung in der Reihenfolge ihrer Präferenz verwenden möchte. Diese können als Protokollwerte in mehreren Headern hinzugefügt oder als kommagetrennte Werte zu einem einzelnen Header hinzugefügt werden.

In einer Antwort gibt er das vom Server ausgewählte Sub-Protokoll an. Dies muss das erste Sub-Protokoll sein, das der Server von der im Anforderungs-Header bereitgestellten Liste unterstützt.

Der Anforderungs-Header wird automatisch vom Browser hinzugefügt und mit Werten gefüllt, die von der Anwendung im [`protocols`](/de/docs/Web/API/WebSocket/WebSocket#protocols)-Argument an die `WebSocket()` angegeben sind. Das vom Server ausgewählte Sub-Protokoll wird der Webanwendung in [`WebSocket.protocol`](/de/docs/Web/API/WebSocket/protocol) bereitgestellt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Anforderungs-Header](/de/docs/Glossary/Request_header), [Antwort-Header](/de/docs/Glossary/Response_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
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
  - : Eine kommagetrennte Liste von Sub-Protokollnamen, in der Reihenfolge der Präferenz. Die Sub-Protokolle können aus dem [IANA WebSocket Subprotocol Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#subprotocol-name) ausgewählt werden oder einen benutzerdefinierten Namen enthalten, der gemeinsam vom Client und Server verstanden wird.

## Beispiele

Das Sub-Protokoll wird in der ursprünglichen WebSocket-[Handshake-Anforderung](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) spezifiziert. Die folgende Anfrage zeigt, dass der Client `soap` bevorzugt, aber auch `wamp` unterstützt.

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
Sec-WebSocket-Protocol: soap, wamp
```

Die Protokolle so zu spezifizieren, hat die gleiche Wirkung:

```http
Sec-WebSocket-Protocol: soap
Sec-WebSocket-Protocol: wamp
```

Die Antwort des Servers wird den `Sec-WebSocket-Protocol`-Header enthalten und das erste Sub-Protokoll auswählen, das es von den Präferenzen des Clients unterstützt. Unten ist dies als `soap` gezeigt:

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
- [Der WebSocket-Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) und [Sub-Protokolle](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#subprotocols) in _Writing WebSocket servers_
