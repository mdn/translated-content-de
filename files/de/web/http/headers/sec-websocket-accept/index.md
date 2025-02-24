---
title: Sec-WebSocket-Accept
slug: Web/HTTP/Headers/Sec-WebSocket-Accept
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP-**Sec-WebSocket-Accept**-{{Glossary("response_header", "Antwort-Header")}} wird im [WebSocket](/de/docs/Web/API/WebSockets_API)-Eröffnungshandshake verwendet, um anzugeben, dass der Server bereit ist, auf eine WebSocket-Verbindung zu wechseln.

Dieser Header darf höchstens einmal in der Antwort erscheinen und hat einen Direktivwert, der aus dem {{HTTPHeader("Sec-WebSocket-Key")}}-Anforderungs-Header berechnet wird, der in der entsprechenden Anfrage gesendet wurde.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Ja (<code>Sec-</code>-Präfix)</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-WebSocket-Accept: <hashed key>
```

## Direktiven

- `<hashed key>`
  - : Wenn ein {{HTTPHeader("Sec-WebSocket-Key")}}-Header bereitgestellt wurde, wird der Wert dieses Headers berechnet, indem der Wert des Schlüssels genommen, die Zeichenkette `258EAFA5-E914-47DA-95CA-C5AB0DC85B11` angehängt und der [SHA-1](https://en.wikipedia.org/wiki/SHA-1)-Hash dieser verketteten Zeichenkette genommen wird — was zu einem 20-Byte-Wert führt. Dieser Wert wird dann {{Glossary("Base64", "base64")}} codiert, um den Wert dieser Eigenschaft zu erhalten.

## Beispiele

### WebSocket-Eröffnungshandshake

Der Client wird ein WebSocket-Handshake mit einer Anfrage wie der folgenden initiieren. Beachten Sie, dass dies als HTTP-`GET`-Anforderung (HTTP/1.1 oder später) beginnt und den {{httpheader("Upgrade")}}-Header enthält, der die Absicht signalisiert, auf eine WebSocket-Verbindung zu wechseln. Es enthält auch `Sec-WebSocket-Key`, der in der Berechnung von `Sec-WebSocket-Accept` verwendet wird, um die Absicht zu bestätigen, die Verbindung auf eine WebSocket-Verbindung umzustellen.

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
```

Die Antwort des Servers sollte den `Sec-WebSocket-Accept`-Header mit einem Wert enthalten, der aus dem `Sec-WebSocket-Key`-Header in der Anfrage berechnet wurde und die Absicht bestätigt, die Verbindung auf eine WebSocket-Verbindung umzustellen:

```http
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Sec-WebSocket-Key")}}
- {{HTTPHeader("Sec-WebSocket-Version")}}
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
- [Der WebSocket-Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) in _Writing WebSocket servers_
- [HTTP-Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Protocol_upgrade_mechanism)
