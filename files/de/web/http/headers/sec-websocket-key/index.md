---
title: Sec-WebSocket-Key
slug: Web/HTTP/Headers/Sec-WebSocket-Key
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP-**Sec-WebSocket-Key**-{{Glossary("request_header", "Request-Header")}} wird im [WebSocket](/de/docs/Web/API/WebSockets_API)-Eröffnungshandshake verwendet, damit ein Client (Benutzeragent) bestätigen kann, dass er "wirklich möchte", dass ein HTTP-Client zu einem WebSocket aufgerüstet wird.

Der Wert des Schlüssels wird mithilfe eines im WebSocket-Spezifikations angegebenen Algorithmus berechnet, bietet jedoch _keine Sicherheit_.
Stattdessen hilft er dabei, zu verhindern, dass Nicht-WebSocket-Clients unbeabsichtigt oder durch Missbrauch eine WebSocket-Verbindung anfordern.

Dieser Header wird automatisch von Benutzeragenten hinzugefügt, wenn ein Skript einen WebSocket öffnet; er kann nicht mit den Methoden [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest.setRequestHeader()`](/de/docs/Web/API/XMLHttpRequest/setRequestHeader) hinzugefügt werden.

Der {{HTTPHeader("Sec-WebSocket-Accept")}}-Antwort-Header des Servers sollte einen Wert enthalten, der basierend auf dem angegebenen Schlüsselwert berechnet wurde.
Der Benutzeragent kann dies dann validieren, bevor er die Verbindung bestätigt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Ja (<code>Sec-</code>-Präfix)</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-WebSocket-Key: <key>
```

## Direktiven

- `<key>`
  - : Der Schlüssel für diese Anforderung zur Aufrüstung.
    Dies ist eine zufällig ausgewählte 16-Byte-Nonce, die base64-kodiert und isomorph kodiert wurde.
    Der Benutzeragent fügt dies hinzu, wenn die WebSocket-Verbindung gestartet wird.

## Beispiele

### WebSocket-Eröffnungshandshake

Der Client initiiert einen WebSocket-Handshake mit einer Anfrage wie der folgenden.
Beachten Sie, dass dies als HTTP-`GET`-Anfrage (HTTP/1.1 oder später) beginnt. Zusätzlich zu `Sec-WebSocket-Key` enthält die Anfrage den {{httpheader("Upgrade")}}-Header, der die Absicht angibt, von HTTP zu einer WebSocket-Verbindung aufzurüsten.

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
```

Die Antwort des Servers sollte den `Sec-WebSocket-Accept`-Header mit einem Wert enthalten, der aus dem `Sec-WebSocket-Key`-Header in der Anfrage berechnet wurde und die Absicht bestätigt, die Verbindung zu einer WebSocket-Verbindung aufzurüsten:

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
