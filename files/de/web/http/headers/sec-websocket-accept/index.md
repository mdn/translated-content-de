---
title: Sec-WebSocket-Accept
slug: Web/HTTP/Headers/Sec-WebSocket-Accept
l10n:
  sourceCommit: 4bd2e8957a40a8f31484f9aea3725bdfe78a921a
---

{{HTTPSidebar}}

Der HTTP-Antwortheader **Sec-WebSocket-Accept** wird im Eröffnungs-Handshake von [WebSocket](/de/docs/Web/API/WebSockets_API) verwendet, um anzuzeigen, dass der Server bereit ist, zu einer WebSocket-Verbindung aufzurüsten.

Dieser Header darf höchstens einmal in der Antwort erscheinen und hat einen Direktivenwert, der aus dem im entsprechenden Antrag gesendeten {{HTTPHeader("Sec-WebSocket-Key")}} Anfrageheader berechnet wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
  - : Falls ein {{HTTPHeader("Sec-WebSocket-Key")}} Header bereitgestellt wurde, wird der Wert dieses Headers berechnet, indem der Wert des Schlüssels genommen, die Zeichenkette `258EAFA5-E914-47DA-95CA-C5AB0DC85B11` angefügt und der [SHA-1](https://en.wikipedia.org/wiki/SHA-1) Hash dieser zusammengefügten Zeichenkette genommen wird — was zu einem 20-Byte-Wert führt. Dieser Wert wird dann {{Glossary("Base64", "base64")}}-kodiert, um den Wert dieser Eigenschaft zu erhalten.

## Beispiele

Der Client startet einen WebSocket-Handshake mit einer Anfrage wie der folgenden. Beachten Sie, dass dies als HTTP `GET`-Anfrage (HTTP/1.1 oder später) beginnt und den Upgrade-Header {{httpheader("Upgrade")}} enthält, der die Absicht signalisiert, auf einen WebSocket aufzurüsten. Er enthält auch `Sec-WebSocket-Key`, welcher in die Berechnung von `Sec-WebSocket-Accept` einbezogen wird, um die Absicht zu bestätigen, die Verbindung auf einen WebSocket aufzurüsten.

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
```

Die Antwort vom Server sollte den `Sec-WebSocket-Accept` Header enthalten, dessen Wert aus dem `Sec-WebSocket-Key` Header in der Anfrage berechnet wird, und die Absicht bestätigt, die Verbindung auf einen WebSocket aufzurüsten:

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
- [HTTP Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Protocol_upgrade_mechanism)
