---
title: Sec-WebSocket-Key
slug: Web/HTTP/Headers/Sec-WebSocket-Key
l10n:
  sourceCommit: 4bd2e8957a40a8f31484f9aea3725bdfe78a921a
---

{{HTTPSidebar}}

Der **Sec-WebSocket-Key** HTTP-[Anforderungsheader](/de/docs/Glossary/request_header) wird im [WebSocket](/de/docs/Web/API/WebSockets_API) Eröffnungs-[Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet, um einem Client (Benutzeragenten) zu ermöglichen, zu bestätigen, dass er "wirklich" beantragen möchte, dass ein HTTP-Client zu einem WebSocket aufgerüstet wird.

Der Wert des Schlüssels wird anhand eines im WebSocket-Protokoll definierten Algorithmus berechnet, sodass dies _keine Sicherheit bietet_.
Vielmehr hilft es, zu verhindern, dass Nicht-WebSocket-Clients versehentlich oder durch Fehlgebrauch eine WebSocket-Verbindung anfordern.

Dieser Header wird automatisch von Benutzeragenten hinzugefügt, wenn ein Skript einen WebSocket öffnet; er kann nicht mit den Methoden [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest.setRequestHeader()`](/de/docs/Web/API/XMLHttpRequest/setRequestHeader) hinzugefügt werden.

Der {{HTTPHeader("Sec-WebSocket-Accept")}} Antwort-Header des Servers sollte einen Wert enthalten, der auf dem angegebenen Schlüsselwert basiert.
Der Benutzeragent kann dies dann validieren, bevor er die Verbindung bestätigt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Anforderungsheader](/de/docs/Glossary/Request_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
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
  - : Der Schlüssel für diese Anforderung zur Aufrüstung.
    Dies ist eine zufällig ausgewählte 16-Byte-Nonce, die base64- und isomorph-kodiert ist.
    Der Benutzeragent fügt dies hinzu, wenn die WebSocket-Verbindung initiiert wird.

## Beispiele

Der Client wird einen WebSocket-Handshake mit einer Anforderung wie der folgenden initiieren.
Beachten Sie, dass dies als HTTP-`GET`-Anforderung (HTTP/1.1 oder später) beginnt. Zusätzlich zu `Sec-WebSocket-Key` enthält die Anforderung den {{httpheader("Upgrade")}}-Header, der die Absicht signalisiert, von HTTP zu einem WebSocket aufzurüsten.

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
```

Die Antwort des Servers sollte den `Sec-WebSocket-Accept`-Header mit einem Wert enthalten, der aus dem `Sec-WebSocket-Key`-Header in der Anforderung berechnet wurde und die Absicht bestätigt, die Verbindung zu einem WebSocket aufzurüsten:

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
- [Der WebSocket-Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) im _Writing WebSocket servers_
- [HTTP-Protokoll-Aufrüstmechanismus](/de/docs/Web/HTTP/Protocol_upgrade_mechanism)
