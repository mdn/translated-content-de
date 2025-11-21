---
title: Sec-WebSocket-Accept header
short-title: Sec-WebSocket-Accept
slug: Web/HTTP/Reference/Headers/Sec-WebSocket-Accept
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

Der HTTP **Sec-WebSocket-Accept** {{Glossary("response_header", "Antwort-Header")}} wird im [WebSocket](/de/docs/Web/API/WebSockets_API) Eröffnungs-[Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet, um anzuzeigen, dass der Server bereit ist, auf eine WebSocket-Verbindung aufzurüsten.

Dieser Header darf nicht mehr als einmal in der Antwort erscheinen und hat einen Richtwert, der aus dem {{HTTPHeader("Sec-WebSocket-Key")}} Request-Header berechnet wird, der in der entsprechenden Anfrage gesendet wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-WebSocket-Accept: <hashed key>
```

## Direktiven

- `<hashed key>`
  - : Wenn ein {{HTTPHeader("Sec-WebSocket-Key")}} Header bereitgestellt wurde, wird der Wert dieses Headers berechnet, indem der Wert des Schlüssels genommen, die Zeichenkette `258EAFA5-E914-47DA-95CA-C5AB0DC85B11` angehängt und der [SHA-1](https://en.wikipedia.org/wiki/SHA-1) Hash dieser zusammengefügten Zeichenkette erstellt wird — was zu einem Wert von 20 Byte führt.
    Dieser Wert wird dann {{Glossary("Base64", "base64")}} codiert, um den Wert dieser Eigenschaft zu erhalten.

## Beispiele

### WebSocket-Eröffnungs-Handshake

Der Client initiiert einen WebSocket-Handshake mit einer Anfrage wie der folgenden.
Beachten Sie, dass dies als HTTP-`GET`-Anfrage (HTTP/1.1 oder später) beginnt und den {{httpheader("Upgrade")}} Header enthält, der die Absicht anzeigt, zu einer WebSocket-Verbindung aufzurüsten.
Es enthält auch `Sec-WebSocket-Key`, das in die Berechnung von `Sec-WebSocket-Accept` einbezogen wird, um die Absicht, die Verbindung zu einer WebSocket-Verbindung aufzurüsten, zu bestätigen.

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
```

Die Antwort des Servers sollte den `Sec-WebSocket-Accept` Header mit einem Wert enthalten, der aus dem `Sec-WebSocket-Key` Header in der Anfrage berechnet wurde und die Absicht bestätigt, die Verbindung auf eine WebSocket-Verbindung aufzurüsten:

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
- [Der HTTP-Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism)
