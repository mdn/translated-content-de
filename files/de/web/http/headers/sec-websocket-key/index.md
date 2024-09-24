---
title: Sec-WebSocket-Key
slug: Web/HTTP/Headers/Sec-WebSocket-Key
l10n:
  sourceCommit: 4bd2e8957a40a8f31484f9aea3725bdfe78a921a
---

{{HTTPSidebar}}

Der HTTP-{{glossary("request header")}} **Sec-WebSocket-Key** wird im [WebSocket](/de/docs/Web/API/WebSockets_API)-Eröffnungshandshake verwendet, um einem Client (Benutzeragenten) zu ermöglichen zu bestätigen, dass er "wirklich will", dass ein HTTP-Client zu einem WebSocket aufgerüstet wird.

Der Wert des Schlüssels wird mithilfe eines im WebSocket-Protokoll spezifizierten Algorithmus berechnet, daher bietet er _keine Sicherheit_.
Stattdessen hilft er zu verhindern, dass Nicht-WebSocket-Clients versehentlich oder durch Missbrauch eine WebSocket-Verbindung anfordern.

Dieser Header wird automatisch von Benutzeragenten hinzugefügt, wenn ein Skript einen WebSocket öffnet; er kann nicht mithilfe der Methoden {{domxref("Window/fetch", "fetch()")}} oder {{domxref("XMLHttpRequest.setRequestHeader()")}} hinzugefügt werden.

Der {{HTTPHeader("Sec-WebSocket-Accept")}}-Antwortheader des Servers sollte einen Wert enthalten, der basierend auf dem angegebenen Schlüsselwert berechnet wird.
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
  - : Der Schlüssel für diese Anfrage zur Aufrüstung.
    Dies ist ein zufällig ausgewählter 16-Byte-Nonce, der base64-codiert und isomorph codiert wurde.
    Der Benutzeragent fügt dies hinzu, wenn die WebSocket-Verbindung initiiert wird.

## Beispiele

Der Client wird ein WebSocket-Handshake mit einer Anfrage wie der folgenden initiieren.
Beachten Sie, dass dies als HTTP-`GET`-Anfrage (HTTP/1.1 oder später) beginnt und zusätzlich zu `Sec-WebSocket-Key` den {{httpheader("Upgrade")}}-Header enthält, was die Absicht signalisiert, von HTTP zu einem WebSocket aufzurüsten.

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
```

Die Antwort vom Server sollte den `Sec-WebSocket-Accept`-Header mit einem Wert enthalten, der aus dem `Sec-WebSocket-Key`-Header in der Anfrage berechnet wird, und die Absicht zur Aufrüstung der Verbindung zu einem WebSocket bestätigen:

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
- [HTTP-Protokoll-Aufrüstungsmechanismus](/de/docs/Web/HTTP/Protocol_upgrade_mechanism)
