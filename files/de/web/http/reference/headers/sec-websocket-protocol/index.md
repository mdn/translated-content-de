---
title: Sec-WebSocket-Protocol header
short-title: Sec-WebSocket-Protocol
slug: Web/HTTP/Reference/Headers/Sec-WebSocket-Protocol
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP **`Sec-WebSocket-Protocol`** {{Glossary("request_header", "Anforderungs")}}- und {{Glossary("response_header", "Antwort-Header")}} wird im [WebSocket](/de/docs/Web/API/WebSockets_API) Eröffnungs-[Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet, um ein [Sub-Protokoll](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#subprotocols) zu verhandeln, das in der Kommunikation verwendet werden soll.
Dies kann ein wohlbekanntes Protokoll wie SOAP oder WAMP sein oder ein benutzerdefiniertes Protokoll, das von Client und Server verstanden wird.

In einer Anfrage gibt der Header ein oder mehrere WebSocket-Sub-Protokolle an, die die Webanwendung in der Reihenfolge der Präferenz verwenden möchte.
Diese können als Protokollwerte in mehreren Headern hinzugefügt oder als kommagetrennte Werte zu einem einzigen Header hinzugefügt werden.

In einer Antwort gibt er das vom Server ausgewählte Sub-Protokoll an.
Dies muss das erste Sub-Protokoll sein, das der Server aus der in der Anforderung angegebenen Liste unterstützt.

Der Anforderungs-Header wird automatisch vom Browser hinzugefügt und ausgefüllt, indem Werte verwendet werden, die von der Anwendung im [`protocols`](/de/docs/Web/API/WebSocket/WebSocket#protocols)-Argument an die `WebSocket()`-Funktion übergeben werden.
Das vom Server gewählte Sub-Protokoll wird der Webanwendung in [`WebSocket.protocol`](/de/docs/Web/API/WebSocket/protocol) zur Verfügung gestellt.

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
  - : Eine kommagetrennte Liste von Sub-Protokollnamen in der Reihenfolge der Präferenz.
    Die Sub-Protokolle können aus dem [IANA WebSocket Subprotocol Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#subprotocol-name) ausgewählt werden oder ein benutzerdefinierter Name sein, der gemeinsam vom Client und dem Server verstanden wird.

## Beispiele

### WebSocket-Eröffnungs-Handshake

Das Sub-Protokoll wird in der ursprünglichen WebSocket-[Handshake-Anforderung](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) angegeben.
Die untenstehende Anforderung zeigt, dass der Client `soap` bevorzugt, aber auch `wamp` unterstützt.

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
Sec-WebSocket-Protocol: soap, wamp
```

Die Protokolle wie folgt anzugeben, hat den gleichen Effekt:

```http
Sec-WebSocket-Protocol: soap
Sec-WebSocket-Protocol: wamp
```

Die Antwort des Servers wird den `Sec-WebSocket-Protocol`-Header enthalten, der das erste Sub-Protokoll auswählt, das er von den Präferenzen des Clients unterstützt.
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
- [Der WebSocket-Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) und [Subprotokolle](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#subprotocols) im _Writing WebSocket servers_
