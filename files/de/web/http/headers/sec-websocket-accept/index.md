---
title: Sec-WebSocket-Accept
slug: Web/HTTP/Headers/Sec-WebSocket-Accept
l10n:
  sourceCommit: 6c32e8b21a39b1b8d3db7a194d2350e0f8218b64
---

{{HTTPSidebar}}

Der HTTP **Sec-WebSocket-Accept** {{Glossary("response_header", "Response-Header")}} wird beim [WebSocket](/de/docs/Web/API/WebSockets_API) Eröffnungshandshake verwendet, um anzuzeigen, dass der Server bereit ist, zu einer WebSocket-Verbindung aufzurüsten.

Dieser Header darf höchstens einmal in der Antwort erscheinen und hat einen Direktivenwert, der aus dem {{HTTPHeader("Sec-WebSocket-Key")}} Anfrage-Header berechnet wird, der in der entsprechenden Anfrage gesendet wurde.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>Ja (<code>Sec-</code> Präfix)</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-WebSocket-Accept: <hashed key>
```

## Direktiven

- `<hashed key>`
  - : Wenn ein {{HTTPHeader("Sec-WebSocket-Key")}} Header angegeben wurde, wird der Wert dieses Headers berechnet, indem der Wert des Schlüssels genommen, die Zeichenkette `258EAFA5-E914-47DA-95CA-C5AB0DC85B11` daran angehängt und der [SHA-1](https://en.wikipedia.org/wiki/SHA-1) Hash dieser zusammengefügten Zeichenkette ermittelt wird — was einen 20-Byte Wert ergibt. Dieser Wert wird dann {{Glossary("Base64", "base64")}} kodiert, um den Wert dieser Eigenschaft zu erhalten.

## Beispiele

### WebSocket Eröffnungshandshake

Der Client wird ein WebSocket-Handshake mit einer Anfrage wie der folgenden initiieren. Beachten Sie, dass dies als HTTP `GET`-Anfrage (HTTP/1.1 oder höher) beginnt und den {{httpheader("Upgrade")}} Header enthält, der die Absicht signalisiert, zu einer WebSocket-Verbindung aufzurüsten. Er enthält auch `Sec-WebSocket-Key`, der in die Berechnung von `Sec-WebSocket-Accept` einfließt, um die Absicht, die Verbindung zu einer WebSocket-Verbindung aufzurüsten, zu bestätigen.

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
```

Die Antwort des Servers sollte den `Sec-WebSocket-Accept` Header mit einem Wert enthalten, der aus dem `Sec-WebSocket-Key` Header in der Anfrage berechnet wurde und die Absicht, die Verbindung zu einer WebSocket-Verbindung aufzurüsten, bestätigt:

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
- [Das WebSocket-Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) in _Writing WebSocket servers_
- [HTTP Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Protocol_upgrade_mechanism)
