---
title: Sec-WebSocket-Key header
short-title: Sec-WebSocket-Key
slug: Web/HTTP/Reference/Headers/Sec-WebSocket-Key
l10n:
  sourceCommit: dc788bf0ea36cb1ebe809c82aaae2c77cb3e18c0
---

Der HTTP **Sec-WebSocket-Key** {{Glossary("request_header", "Request-Header")}} wird im [WebSocket](/de/docs/Web/API/WebSockets_API)-Eröffnungshandshake verwendet, damit ein Client (User-Agent) bestätigen kann, dass er "wirklich" möchte, dass ein HTTP-Client zu einem WebSocket aufgerüstet wird.

Der Wert des Schlüssels wird mit einem im WebSocket-Spezifikation definierten Algorithmus berechnet, sodass dies _keine Sicherheit_ bietet.
Stattdessen hilft es, zu verhindern, dass Nicht-WebSocket-Clients versehentlich oder durch Missbrauch eine WebSocket-Verbindung anfordern.

Dieser Header wird automatisch von User-Agents hinzugefügt, wenn ein Skript einen WebSocket öffnet; er kann nicht mit den Methoden [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest.setRequestHeader()`](/de/docs/Web/API/XMLHttpRequest/setRequestHeader) hinzugefügt werden.

Der {{HTTPHeader("Sec-WebSocket-Accept")}}-Antwortheader des Servers sollte einen Wert enthalten, der auf der angegebenen Schlüsselwert basierend berechnet wurde.
Der User-Agent kann diesen dann validieren, bevor er die Verbindung bestätigt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Ja (<code>Sec-</code> Präfix)</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-WebSocket-Key: <key>
```

## Direktiven

- `<key>`
  - : Der Schlüssel für diese Anfrage zur Aufrüstung.
    Dies ist ein zufällig ausgewählter 16-Byte-{{Glossary("Nonce", "Nonce")}}, der base64-kodiert und isomorph kodiert wurde.
    Der User-Agent fügt dies hinzu, wenn er die WebSocket-Verbindung initiiert.

## Beispiele

### WebSocket-Eröffnungshandshake

Der Client wird ein WebSocket-Handshake mit einer Anfrage wie der folgenden initiieren.
Beachten Sie, dass dies als HTTP `GET`-Anfrage beginnt (HTTP/1.1 oder höher), zusätzlich zu `Sec-WebSocket-Key` enthält die Anfrage den {{httpheader("Upgrade")}}-Header, der die Absicht anzeigen soll, von HTTP zu einer WebSocket-Verbindung zu wechseln.

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
```

Die Antwort des Servers sollte den `Sec-WebSocket-Accept`-Header mit einem Wert enthalten, der aus dem `Sec-WebSocket-Key`-Header in der Anfrage berechnet wurde, und die Absicht bestätigen, die Verbindung zu einer WebSocket-Verbindung aufzurüsten:

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

- {{HTTPHeader("Sec-WebSocket-Accept")}}
- {{HTTPHeader("Sec-WebSocket-Version")}}
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
- [Der WebSocket-Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) in _Writing WebSocket servers_
- [HTTP-Protokoll-Aufrüstmechanismus](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism)
