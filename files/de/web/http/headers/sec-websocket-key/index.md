---
title: Sec-WebSocket-Key
slug: Web/HTTP/Headers/Sec-WebSocket-Key
l10n:
  sourceCommit: 6c32e8b21a39b1b8d3db7a194d2350e0f8218b64
---

{{HTTPSidebar}}

Der HTTP **Sec-WebSocket-Key** {{Glossary("request_header", "Request Header")}} wird im [WebSocket](/de/docs/Web/API/WebSockets_API) Eröffnungs-[Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet, um einem Client (Benutzeragenten) zu ermöglichen zu bestätigen, dass er "wirklich wünscht", dass ein HTTP-Client zu einem WebSocket aufgerüstet wird.

Der Wert des Schlüssels wird mit einem in der WebSocket-Spezifikation definierten Algorithmus berechnet, sodass dies _keine Sicherheit bietet_.
Stattdessen hilft es, zu verhindern, dass Nicht-WebSocket-Clients versehentlich oder durch Missbrauch eine WebSocket-Verbindung anfordern.

Dieser Header wird von Benutzeragenten automatisch hinzugefügt, wenn ein Skript einen WebSocket öffnet; er kann nicht mit den Methoden [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest.setRequestHeader()`](/de/docs/Web/API/XMLHttpRequest/setRequestHeader) hinzugefügt werden.

Der {{HTTPHeader("Sec-WebSocket-Accept")}} Antwortheader des Servers sollte einen Wert enthalten, der auf Basis des angegebenen Schlüsselwerts berechnet wurde.
Der Benutzeragent kann dies dann validieren, bevor er die Verbindung bestätigt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>Ja (<code>Sec-</code> Präfix)</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-WebSocket-Key: <key>
```

## Anweisungen

- `<key>`
  - : Der Schlüssel für diese Anforderung zur Aufrüstung.
    Dies ist ein zufällig ausgewählter 16-Byte-Nonce, der base64-kodiert und isomorph kodiert ist.
    Der Benutzeragent fügt dies hinzu, wenn die WebSocket-Verbindung initiiert wird.

## Beispiele

### WebSocket Eröffnungshandshake

Der Client wird ein WebSocket-Handshake mit einer Anforderung wie der folgenden einleiten.
Beachten Sie, dass dies als HTTP `GET`-Anforderung (HTTP/1.1 oder später) beginnt. Zusätzlich zu `Sec-WebSocket-Key` enthält die Anforderung den {{httpheader("Upgrade")}} Header, der die Absicht anzeigt, von HTTP zu einer WebSocket-Verbindung aufzurüsten.

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
```

Die Antwort vom Server sollte den `Sec-WebSocket-Accept` Header mit einem Wert enthalten, der aus dem `Sec-WebSocket-Key` Header in der Anforderung berechnet wurde, und bestätigt die Absicht, die Verbindung zu einer WebSocket-Verbindung aufzurüsten:

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
- [Der WebSocket Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) in _Writing WebSocket servers_
- [HTTP Protokollaufrüstungsmechanismus](/de/docs/Web/HTTP/Protocol_upgrade_mechanism)
