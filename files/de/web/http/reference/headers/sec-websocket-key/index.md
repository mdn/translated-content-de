---
title: Sec-WebSocket-Key header
short-title: Sec-WebSocket-Key
slug: Web/HTTP/Reference/Headers/Sec-WebSocket-Key
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP **Sec-WebSocket-Key** {{Glossary("request_header", "Request-Header")}} wird im [WebSocket](/de/docs/Web/API/WebSockets_API) Eröffnungs-[Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet, um es einem Client (Benutzeragenten) zu ermöglichen, zu bestätigen, dass er "wirklich möchte", dass ein HTTP-Client auf einen WebSocket hochgestuft wird.

Der Wert des Schlüssels wird mit einem Algorithmus berechnet, der in der WebSocket-Spezifikation definiert ist, daher bietet dies _keine Sicherheit_.
Stattdessen hilft es, zu verhindern, dass Nicht-WebSocket-Clients versehentlich oder durch Missbrauch eine WebSocket-Verbindung anfordern.

Dieser Header wird automatisch von Benutzeragenten hinzugefügt, wenn ein Skript einen WebSocket öffnet; er kann nicht mit den Methoden [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest.setRequestHeader()`](/de/docs/Web/API/XMLHttpRequest/setRequestHeader) hinzugefügt werden.

Der Server-Antwort-Header {{HTTPHeader("Sec-WebSocket-Accept")}} sollte einen Wert enthalten, der basierend auf dem angegebenen Schlüsselwert berechnet wird.
Der Benutzeragent kann dann diesen validieren, bevor die Verbindung bestätigt wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Unzulässiger Request-Header")}}</th>
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
  - : Der Schlüssel für diese Anforderung zum Hochstufen.
    Dies ist eine zufällig ausgewählte 16-Byte-Nonce, die base64-kodiert und isomorph kodiert wurde.
    Der Benutzeragent fügt diesen hinzu, wenn die WebSocket-Verbindung initiiert wird.

## Beispiele

### WebSocket-Eröffnungs-Handshake

Der Client wird einen WebSocket-Handshake mit einer Anfrage wie der folgenden initiieren.
Beachten Sie, dass dies als HTTP `GET`-Anfrage (HTTP/1.1 oder höher) beginnt; zusätzlich zu `Sec-WebSocket-Key` enthält die Anfrage den Header {{httpheader("Upgrade")}}, der die Absicht angibt, von HTTP auf eine WebSocket-Verbindung hochzustufen.

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
```

Die Antwort vom Server sollte den `Sec-WebSocket-Accept`-Header mit einem Wert enthalten, der aus dem `Sec-WebSocket-Key`-Header in der Anfrage berechnet wurde und die Absicht bestätigt, die Verbindung auf eine WebSocket-Verbindung hochzustufen:

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
