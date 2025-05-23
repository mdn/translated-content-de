---
title: Sec-WebSocket-Accept header
short-title: Sec-WebSocket-Accept
slug: Web/HTTP/Reference/Headers/Sec-WebSocket-Accept
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP-**Sec-WebSocket-Accept**-{{Glossary("response_header", "Antwort-Header")}} wird im [WebSocket](/de/docs/Web/API/WebSockets_API)-Eröffnungs-[Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet, um anzugeben, dass der Server bereit ist, auf eine WebSocket-Verbindung aufzurüsten.

Dieser Header darf nicht mehr als einmal in der Antwort erscheinen und hat einen Direktivenwert, der aus dem {{HTTPHeader("Sec-WebSocket-Key")}}-Anforderungs-Header berechnet wird, der in der entsprechenden Anfrage gesendet wurde.

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
  - : Wenn ein {{HTTPHeader("Sec-WebSocket-Key")}}-Header bereitgestellt wurde, wird der Wert dieses Headers berechnet, indem der Wert des Schlüssels genommen, die Zeichenkette `258EAFA5-E914-47DA-95CA-C5AB0DC85B11` angefügt und der [SHA-1](https://en.wikipedia.org/wiki/SHA-1)-Hash dieser verknüpften Zeichenkette gebildet wird — was zu einem 20-Byte-Wert führt.
    Dieser Wert wird dann {{Glossary("Base64", "Base64")}}-codiert, um den Wert dieser Eigenschaft zu erhalten.

## Beispiele

### WebSocket-Eröffnungs-Handshake

Der Client initiiert einen WebSocket-Handshake mit einer Anfrage wie der folgenden. Beachten Sie, dass dies als HTTP-`GET`-Anfrage (HTTP/1.1 oder später) beginnt und den {{httpheader("Upgrade")}}-Header enthält, der die Absicht angibt, auf eine WebSocket-Verbindung aufzurüsten. Er enthält auch `Sec-WebSocket-Key`, welcher in der Berechnung von `Sec-WebSocket-Accept` verwendet wird, um die Absicht zu bestätigen, die Verbindung auf eine WebSocket-Verbindung aufzurüsten.

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
```

Die Antwort vom Server sollte den `Sec-WebSocket-Accept`-Header mit einem Wert enthalten, der aus dem `Sec-WebSocket-Key`-Header in der Anfrage berechnet wird, und die Absicht bestätigt, die Verbindung auf eine WebSocket-Verbindung aufzurüsten:

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
- [HTTP-Protokoll-Aktualisierungsmechanismus](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism)
