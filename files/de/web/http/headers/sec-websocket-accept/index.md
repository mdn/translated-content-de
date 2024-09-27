---
title: Sec-WebSocket-Accept
slug: Web/HTTP/Headers/Sec-WebSocket-Accept
l10n:
  sourceCommit: 4bd2e8957a40a8f31484f9aea3725bdfe78a921a
---

{{HTTPSidebar}}

Der **Sec-WebSocket-Accept** HTTP-[Antwort-Header](/de/docs/Glossary/response_header) wird im [WebSocket](/de/docs/Web/API/WebSockets_API) Eröffnungs-[Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet, um anzuzeigen, dass der Server bereit ist, auf eine WebSocket-Verbindung aufzurüsten.

Dieser Header darf nicht öfter als einmal in der Antwort erscheinen und hat einen Direktivenwert, der aus dem {{HTTPHeader("Sec-WebSocket-Key")}} Anforderungs-Header berechnet wird, der in der entsprechenden Anfrage gesendet wurde.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>[Antwort-Header](/de/docs/Glossary/Response_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
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
  - : Wenn ein {{HTTPHeader("Sec-WebSocket-Key")}} Header bereitgestellt wurde, wird der Wert dieses Headers berechnet, indem der Wert des Schlüssels genommen, die Zeichenkette `258EAFA5-E914-47DA-95CA-C5AB0DC85B11` angehängt und der [SHA-1](https://en.wikipedia.org/wiki/SHA-1)-Hash dieser zusammengefügten Zeichenkette berechnet wird, was zu einem 20-Byte-Wert führt. Dieser Wert wird dann [base64](/de/docs/Glossary/Base64) kodiert, um den Wert dieser Eigenschaft zu erhalten.

## Beispiele

Der Client wird ein WebSocket-Handshake mit einer Anfrage wie der folgenden initiieren.
Beachten Sie, dass dies als HTTP-`GET`-Anfrage (HTTP/1.1 oder später) beginnt und den {{httpheader("Upgrade")}} Header enthält, der die Absicht angibt, auf einen Websocket aufzurüsten.
Es enthält außerdem `Sec-WebSocket-Key`, der in die Berechnung von `Sec-WebSocket-Accept` einfließt, um die Absicht zu bestätigen, die Verbindung zu einem Websocket aufzurüsten.

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
```

Die Antwort vom Server sollte den `Sec-WebSocket-Accept` Header mit einem Wert enthalten, der aus dem `Sec-WebSocket-Key` Header in der Anfrage berechnet wird und die Absicht bestätigt, die Verbindung zu einem Websocket aufzurüsten:

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
- [HTTP-Protokoll-Upgrademekanismus](/de/docs/Web/HTTP/Protocol_upgrade_mechanism)
