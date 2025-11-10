---
title: Sec-WebSocket-Key header
short-title: Sec-WebSocket-Key
slug: Web/HTTP/Reference/Headers/Sec-WebSocket-Key
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP **Sec-WebSocket-Key** {{Glossary("request_header", "Request-Header")}} wird im [WebSocket](/de/docs/Web/API/WebSockets_API)-Öffnungshandshake verwendet, um einem Client (Benutzeragenten) zu ermöglichen zu bestätigen, dass er "wirklich möchte", dass ein HTTP-Client auf einen WebSocket aktualisiert wird.

Der Wert des Schlüssels wird mit einem Algorithmus berechnet, der in der WebSocket-Spezifikation definiert ist, daher _bietet er keine Sicherheit_. Stattdessen hilft er zu verhindern, dass Nicht-WebSocket-Clients versehentlich oder durch Missbrauch eine WebSocket-Verbindung anfordern.

Dieser Header wird automatisch von Benutzeragenten hinzugefügt, wenn ein Skript einen WebSocket öffnet; er kann nicht mit den Methoden [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest.setRequestHeader()`](/de/docs/Web/API/XMLHttpRequest/setRequestHeader) hinzugefügt werden.

Der {{HTTPHeader("Sec-WebSocket-Accept")}} Response-Header des Servers sollte einen Wert enthalten, der auf dem angegebenen Schlüsselwert basiert. Der Benutzeragent kann dies dann validieren, bevor er die Verbindung bestätigt.

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
  - : Der Schlüssel für diese Upgrade-Anforderung.
    Dies ist ein zufällig ausgewählter, 16-Byte großer, Base64-kodierter und isomorph kodierter "nonce".
    Der Benutzeragent fügt dies hinzu, wenn die WebSocket-Verbindung initiiert wird.

## Beispiele

### WebSocket-Öffnungshandshake

Der Client wird ein WebSocket-Handshake mit einer Anforderung wie der folgenden initiieren.
Beachten Sie, dass dies als HTTP `GET`-Anforderung (HTTP/1.1 oder höher) beginnt; zusätzlich zu `Sec-WebSocket-Key` enthält die Anforderung den {{httpheader("Upgrade")}}-Header, der die Absicht angibt, von HTTP zu einer WebSocket-Verbindung zu wechseln.

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
```

Die Antwort vom Server sollte den `Sec-WebSocket-Accept`-Header mit einem Wert enthalten, der aus dem `Sec-WebSocket-Key`-Header in der Anfrage berechnet wurde, und die Absicht bestätigen, die Verbindung zu einer WebSocket-Verbindung zu aktualisieren:

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
- [HTTP-Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism)
