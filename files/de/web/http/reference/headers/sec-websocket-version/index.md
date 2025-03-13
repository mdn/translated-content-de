---
title: Sec-WebSocket-Version
slug: Web/HTTP/Reference/Headers/Sec-WebSocket-Version
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-Header **Sec-WebSocket-Version** {{Glossary("request_header", "Request")}} und {{Glossary("response_header", "Response Header")}} wird im [WebSocket](/de/docs/Web/API/WebSockets_API)-Eröffnungs-[Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet, um das vom Client unterstützte WebSocket-Protokoll sowie die vom Server unterstützten Protokollversionen anzugeben, falls der Server die im Request angegebene Version _nicht_ unterstützt.

Der Header kann nur einmal in einem Request erscheinen und spezifiziert die WebSocket-Version, die die Webanwendung verwendet. Die aktuelle Version des Protokolls zum Zeitpunkt der Erstellung ist 13. Der Header wird automatisch zu Requests von Benutzeragenten hinzugefügt, wenn eine [`WebSocket`](/de/docs/Web/API/WebSocket)-Verbindung hergestellt wird.

Der Server verwendet die Version, um festzustellen, ob er das Protokoll verstehen kann. Wenn der Server die Version nicht unterstützt oder wenn ein beliebiger Header im Handshake nicht verstanden wird oder einen falschen Wert hat, sollte der Server eine Antwort mit dem Status {{httpstatus("400", "400 Bad Request")}} senden und die Verbindung sofort schließen. Er sollte auch `Sec-WebSocket-Version` in die `400`-Antwort aufnehmen, wobei die unterstützten Versionen aufgelistet werden. Die Versionen können entweder in einzelnen Headerspezifikationen oder als durch Kommas getrennte Werte in einem einzigen Header angegeben werden.

Der Header sollte nicht in Antworten gesendet werden, wenn der Server die vom Client angegebene Version versteht.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Ja (<code>Sec-</code>-Präfix)</td>
    </tr>
  </tbody>
</table>

## Syntax

Request

```http
Sec-WebSocket-Version: <version>
```

Antwort (nur bei Fehler):

```http
Sec-WebSocket-Version: <server-supported-versions>
```

## Direktiven

- `<version>`
  - : Die WebSocket-Protokollversion, die der Client beim Kommunizieren mit dem Server verwenden möchte. Diese Nummer sollte die aktuellste mögliche Version sein, die im [IANA WebSocket Version Number Registry](https://www.iana.org/assignments/websocket/websocket.xml#version-number) angegeben ist. Die aktuellste endgültige Version des WebSocket-Protokolls ist Version 13.
- `<server-supported-versions>`
  - : Im Fehlerfall eine durch Kommas getrennte Liste der vom Server unterstützten WebSocket-Protokollversionen. Der Header wird nicht in Antworten gesendet, wenn `<version>` unterstützt wird.

## Beispiele

### WebSocket-Eröffnungshandshake

Die vom Client unterstützte Version wird im ursprünglichen `WebSocket`-[Handshake-Request](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) spezifiziert. Für das aktuelle Protokoll ist die Version "13", wie unten gezeigt.

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
```

Wenn der Server Version 13 des Protokolls unterstützt, wird `Sec-WebSocket-Version` nicht in der Antwort erscheinen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Sec-WebSocket-Accept")}}
- {{HTTPHeader("Sec-WebSocket-Key")}}
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
- [Der WebSocket-Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) in _Writing WebSocket servers_
