---
title: Sec-WebSocket-Key
slug: Web/HTTP/Reference/Headers/Sec-WebSocket-Key
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP **Sec-WebSocket-Key** {{Glossary("request_header", "Anforderungsheader")}} wird im [WebSocket](/de/docs/Web/API/WebSockets_API) Eröffnungs-[Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet, um es einem Client (User-Agent) zu ermöglichen, zu bestätigen, dass er "wirklich" möchte, dass ein HTTP-Client zu einem WebSocket aufgewertet wird.

Der Wert des Schlüssels wird unter Verwendung eines Algorithmus berechnet, der in der WebSocket-Spezifikation definiert ist, wodurch _keine Sicherheit_ geboten wird.
Stattdessen hilft es, zu verhindern, dass Nicht-WebSocket-Clients versehentlich oder durch Fehlgebrauch eine WebSocket-Verbindung anfordern.

Dieser Header wird automatisch von User-Agents hinzugefügt, wenn ein Skript einen WebSocket öffnet; er kann nicht durch die Methoden [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest.setRequestHeader()`](/de/docs/Web/API/XMLHttpRequest/setRequestHeader) hinzugefügt werden.

Der {{HTTPHeader("Sec-WebSocket-Accept")}} Antwort-Header des Servers sollte einen Wert enthalten, der basierend auf dem angegebenen Schlüsselwert berechnet wurde. Der User-Agent kann dies dann validieren, bevor die Verbindung bestätigt wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
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
    Dies ist ein zufällig ausgewählter 16-Byte-Nonce, der base64-kodiert und isomorph kodiert ist.
    Der User-Agent fügt dies hinzu, wenn die WebSocket-Verbindung initiiert wird.

## Beispiele

### WebSocket-Eröffnungs-Handshake

Der Client initiiert einen WebSocket-Handshake mit einer Anfrage wie der folgenden.
Beachten Sie, dass dies als HTTP `GET`-Anfrage (HTTP/1.1 oder später) beginnt; zusätzlich zu `Sec-WebSocket-Key` enthält die Anfrage den {{httpheader("Upgrade")}} Header, der die Absicht signalisiert, von HTTP zu einer WebSocket-Verbindung aufzurüsten.

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
```

Die Antwort des Servers sollte den `Sec-WebSocket-Accept` Header mit einem Wert enthalten, der aus dem `Sec-WebSocket-Key` Header der Anfrage berechnet wurde und die Absicht bestätigt, die Verbindung zu einer WebSocket-Verbindung aufzurüsten:

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
