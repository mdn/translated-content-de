---
title: Sec-WebSocket-Key
slug: Web/HTTP/Headers/Sec-WebSocket-Key
l10n:
  sourceCommit: 4bd2e8957a40a8f31484f9aea3725bdfe78a921a
---

{{HTTPSidebar}}

Der **Sec-WebSocket-Key** HTTP-{{Glossary("request_header", "Request-Header")}} wird im [WebSocket](/de/docs/Web/API/WebSockets_API)-Eröffnungs-[Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet, um einem Client (Nutzer-Agent) zu ermöglichen, zu bestätigen, dass er „wirklich möchte“, dass ein HTTP-Client zu einem WebSocket hochgestuft wird.

Der Wert des Schlüssels wird mit einem Algorithmus berechnet, der in der WebSocket-Spezifikation definiert ist, sodass dies _keine Sicherheit_ bietet. Stattdessen hilft es, zu verhindern, dass Nicht-WebSocket-Clients versehentlich oder durch Missbrauch eine WebSocket-Verbindung anfordern.

Dieser Header wird automatisch von Nutzer-Agenten hinzugefügt, wenn ein Skript einen WebSocket öffnet; er kann nicht mit den Methoden [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest.setRequestHeader()`](/de/docs/Web/API/XMLHttpRequest/setRequestHeader) hinzugefügt werden.

Der {{HTTPHeader("Sec-WebSocket-Accept")}}-Antwortheader des Servers sollte einen Wert enthalten, der basierend auf dem angegebenen Schlüsselwert berechnet wurde. Der Nutzer-Agent kann diesen dann vor Bestätigung der Verbindung validieren.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-WebSocket-Key: <key>
```

## Direktiven

- \<key>
  - : Der Schlüssel für diese Anforderung zur Aktualisierung.
    Dies ist ein zufällig ausgewählter 16-Byte-Nonce, der base64-kodiert und isomorph kodiert wurde.
    Der Nutzer-Agent fügt diesen hinzu, wenn er die WebSocket-Verbindung initiiert.

## Beispiele

Der Client wird einen WebSocket-Handshake mit einer Anfrage wie der folgenden initiieren. Beachten Sie, dass dies als HTTP-`GET`-Anfrage (HTTP/1.1 oder höher) beginnt. Zusätzlich zu `Sec-WebSocket-Key` enthält die Anfrage den {{httpheader("Upgrade")}}-Header, der die Absicht signalisiert, von HTTP zu einem Websocket aufzurüsten.

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
```

Die Antwort des Servers sollte den `Sec-WebSocket-Accept`-Header mit einem Wert enthalten, der aus dem `Sec-WebSocket-Key`-Header in der Anfrage berechnet wird und die Absicht bestätigt, die Verbindung zu einem Websocket aufzurüsten:

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
- [HTTP-Protokoll-Aktualisierungsmechanismus](/de/docs/Web/HTTP/Protocol_upgrade_mechanism)
