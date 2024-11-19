---
title: Sec-WebSocket-Version
slug: Web/HTTP/Headers/Sec-WebSocket-Version
l10n:
  sourceCommit: 6c32e8b21a39b1b8d3db7a194d2350e0f8218b64
---

{{HTTPSidebar}}

Der HTTP-**Sec-WebSocket-Version** {{Glossary("request_header", "Anforderungsheader")}} und {{Glossary("response_header", "Antwortheader")}} wird im [WebSocket](/de/docs/Web/API/WebSockets_API)-Eröffnungshandshake verwendet, um das vom Client unterstützte WebSocket-Protokoll anzugeben, und die vom Server unterstützten Protokollversionen, wenn er die im Request angegebene Version _nicht_ unterstützt.

Der Header kann in einer Anfrage nur einmal erscheinen und spezifiziert die WebSocket-Version, die die Webanwendung verwendet.
Die aktuelle Version des Protokolls zum Zeitpunkt des Schreibens ist 13.
Der Header wird automatisch zu Anfragen von User Agents hinzugefügt, wenn eine [`WebSocket`](/de/docs/Web/API/WebSocket)-Verbindung hergestellt wird.

Der Server verwendet die Version, um zu bestimmen, ob er das Protokoll verstehen kann.
Wenn der Server die Version nicht unterstützt oder irgendein Header im Handshake nicht verstanden wird oder einen falschen Wert hat, sollte der Server eine Antwort mit dem Status {{httpstatus("400", "400 Bad Request")}} senden und den Socket sofort schließen.
Er sollte auch `Sec-WebSocket-Version` in die `400`-Antwort einfügen und die Versionen auflisten, die er unterstützt.
Die Versionen können in einzelnen Headers angegeben oder als kommagetrennte Werte in einem einzelnen Header festgelegt werden.

Der Header sollte nicht in Antworten gesendet werden, wenn der Server die Version versteht, die vom Client angegeben wurde.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Headername")}}</th>
      <td>Ja (<code>Sec-</code>-Präfix)</td>
    </tr>
  </tbody>
</table>

## Syntax

Anfrage

```http
Sec-WebSocket-Version: <version>
```

Antwort (nur bei Fehler):

```http
Sec-WebSocket-Version: <server-supported-versions>
```

## Direktiven

- `<version>`
  - : Die WebSocket-Protokollversion, die der Client bei der Kommunikation mit dem Server verwenden möchte.
    Diese Nummer sollte die neueste mögliche Version sein, die im [IANA WebSocket Version Number Registry](https://www.iana.org/assignments/websocket/websocket.xml#version-number) aufgeführt ist.
    Die neueste finale Version des WebSocket-Protokolls ist Version 13.
- `<server-supported-versions>`
  - : Bei einem Fehler eine kommagetrennte Liste der vom Server unterstützten WebSocket-Protokollversionen.
    Der Header wird in Antworten nicht gesendet, wenn `<version>` unterstützt wird.

## Beispiele

### WebSocket-Eröffnungshandshake

Die vom Client unterstützte Version wird in der ursprünglichen `WebSocket`-[Handshake-Anfrage](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) angegeben.
Für das aktuelle Protokoll ist die Version "13", wie unten gezeigt.

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
- [Das WebSocket-Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) in _Writing WebSocket servers_
