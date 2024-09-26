---
title: Sec-WebSocket-Key
slug: Web/HTTP/Headers/Sec-WebSocket-Key
l10n:
  sourceCommit: 4bd2e8957a40a8f31484f9aea3725bdfe78a921a
---

{{HTTPSidebar}}

Der **Sec-WebSocket-Key** HTTP-{{glossary("request header")}} wird im [WebSocket](/de/docs/Web/API/WebSockets_API) Öffnungshandshake verwendet, um es einem Client (Benutzeragent) zu ermöglichen zu bestätigen, dass dieser "wirklich möchte", dass ein HTTP-Client auf einen WebSocket aktualisiert wird.

Der Wert des Schlüssels wird mit einem in der WebSocket-Spezifikation definierten Algorithmus berechnet, bietet jedoch _keine Sicherheit_.
Stattdessen hilft er zu verhindern, dass Nicht-WebSocket-Clients versehentlich oder durch Fehlgebrauch eine WebSocket-Verbindung anfordern.

Dieser Header wird automatisch von Benutzeragenten hinzugefügt, wenn ein Skript einen WebSocket öffnet; er kann nicht mit den Methoden {{domxref("Window/fetch", "fetch()")}} oder {{domxref("XMLHttpRequest.setRequestHeader()")}} hinzugefügt werden.

Der {{HTTPHeader("Sec-WebSocket-Accept")}} Antwort-Header des Servers sollte einen Wert enthalten, der basierend auf dem angegebenen Schlüsselwert berechnet wurde.
Der Benutzeragent kann dies dann validieren, bevor er die Verbindung bestätigt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
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
  - : Der Schlüssel für diese Anforderung zum Upgrade.
    Dies ist eine zufällig ausgewählte 16-Byte-Nonce, die base64-kodiert und isomorph kodiert wurde.
    Der Benutzeragent fügt dies beim Initiieren der WebSocket-Verbindung hinzu.

## Beispiele

Der Client wird ein WebSocket-Handshake mit einer Anfrage wie der folgenden initiieren.
Beachten Sie, dass dies als HTTP-`GET`-Anfrage (HTTP/1.1 oder höher) beginnt, zusätzlich zu `Sec-WebSocket-Key` enthält die Anfrage den {{httpheader("Upgrade")}} Header, der die Absicht signalisiert, von HTTP auf einen WebSocket zu aktualisieren.

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
```

Die Antwort des Servers sollte den `Sec-WebSocket-Accept` Header mit einem Wert beinhalten, der aus dem `Sec-WebSocket-Key` Header in der Anfrage berechnet wurde, und die Absicht bestätigt, die Verbindung zu einem WebSocket zu aktualisieren:

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
- [HTTP-Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Protocol_upgrade_mechanism)
