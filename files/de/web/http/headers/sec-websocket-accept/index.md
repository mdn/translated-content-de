---
title: Sec-WebSocket-Accept
slug: Web/HTTP/Headers/Sec-WebSocket-Accept
l10n:
  sourceCommit: 4bd2e8957a40a8f31484f9aea3725bdfe78a921a
---

{{HTTPSidebar}}

Der HTTP-{{glossary("response header", "Antwortheader")}} **Sec-WebSocket-Accept** wird bei dem [WebSocket](/de/docs/Web/API/WebSockets_API) öffnenden [Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet, um anzuzeigen, dass der Server bereit ist, zu einer WebSocket-Verbindung zu wechseln.

Dieser Header darf nicht mehr als einmal in der Antwort erscheinen und hat einen Direktivenwert, der aus dem {{HTTPHeader("Sec-WebSocket-Key")}}-Request-Header berechnet wird, der in der entsprechenden Anfrage gesendet wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "Verbotener Headername")}}</th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-WebSocket-Accept: <hashed key>
```

## Direktiven

- \<hashed key>
  - : Wenn ein {{HTTPHeader("Sec-WebSocket-Key")}}-Header bereitgestellt wurde, wird der Wert dieses Headers berechnet, indem der Wert des Schlüssels genommen und die Zeichenkette `258EAFA5-E914-47DA-95CA-C5AB0DC85B11` angehängt wird. Anschließend wird der [SHA-1](https://en.wikipedia.org/wiki/SHA-1)-Hash dieser verketteten Zeichenkette erstellt — was zu einem 20-Byte-Wert führt.
    Dieser Wert wird dann [base64](/de/docs/Glossary/Base64)-kodiert, um den Wert dieser Eigenschaft zu erhalten.

## Beispiele

Der Client wird einen WebSocket-Handshake mit einer Anfrage wie der folgenden initiieren.
Beachten Sie, dass dies als HTTP-`GET`-Anfrage beginnt (HTTP/1.1 oder später) und den {{httpheader("Upgrade")}}-Header enthält, der die Absicht angibt, zu einem WebSocket zu wechseln.
Es enthält auch `Sec-WebSocket-Key`, der bei der Berechnung von `Sec-WebSocket-Accept` verwendet wird, um die Absicht zu bestätigen, die Verbindung zu einem WebSocket aufzurüsten.

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
```

Die Antwort des Servers sollte den `Sec-WebSocket-Accept`-Header enthalten, mit einem Wert, der aus dem `Sec-WebSocket-Key`-Header in der Anfrage berechnet wird, und bestätigt die Absicht, die Verbindung zu einem WebSocket aufzurüsten:

```http
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Sec-WebSocket-Key")}}
- {{HTTPHeader("Sec-WebSocket-Version")}}
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
- [Der WebSocket Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) in _Writing WebSocket servers_
- [HTTP-Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Protocol_upgrade_mechanism)
