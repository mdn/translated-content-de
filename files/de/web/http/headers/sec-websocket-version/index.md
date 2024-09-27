---
title: Sec-WebSocket-Version
slug: Web/HTTP/Headers/Sec-WebSocket-Version
l10n:
  sourceCommit: c69e36924e1849fdc9b7fc49a3f4c550efa3468a
---

{{HTTPSidebar}}

Der **Sec-WebSocket-Version** HTTP-[Anforderungs](/de/docs/Glossary/request_header) und [Antwort-Header](/de/docs/Glossary/response_header) wird im [WebSocket](/de/docs/Web/API/WebSockets_API) Eröffnungs-[Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet, um das WebSocket-Protokoll anzugeben, das vom Client unterstützt wird, und die vom Server unterstützten Protokollversionen, falls er _nicht_ die im Antrag spezifizierte Version unterstützt.

Der Header kann nur einmal in einer Anfrage erscheinen und gibt die WebSocket-Version an, die die Webanwendung verwendet. Die aktuelle Version des Protokolls zum Zeitpunkt des Schreibens ist 13. Der Header wird automatisch zu Anfragen hinzugefügt, wenn von Benutzeragenten eine [`WebSocket`](/de/docs/Web/API/WebSocket)-Verbindung hergestellt wird.

Der Server verwendet die Version, um zu bestimmen, ob er das Protokoll verstehen kann. Wenn der Server die Version nicht unterstützt oder ein Header im Handshake nicht verstanden wird oder einen falschen Wert hat, sollte der Server eine Antwort mit dem Status {{httpstatus("400", "400 Bad Request")}} senden und den Socket sofort schließen. Er sollte auch `Sec-WebSocket-Version` in die `400`-Antwort aufnehmen und die Versionen auflisten, die er unterstützt. Die Versionen können in einzelnen Headers oder als kommaseparierte Werte in einem einzigen Header angegeben werden.

Der Header sollte nicht in Antworten gesendet werden, wenn der Server die vom Client spezifizierte Version versteht.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Antwort-Header](/de/docs/Glossary/Response_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>ja</td>
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
    Diese Nummer sollte die aktuellste mögliche Version sein, die im [IANA WebSocket Version Number Registry](https://www.iana.org/assignments/websocket/websocket.xml#version-number) aufgeführt ist.
    Die aktuellste endgültige Version des WebSocket-Protokolls ist Version 13.

- `<server-supported-versions>`
  - : Bei einem Fehler eine durch Kommas getrennte Liste der vom Server unterstützten WebSocket-Protokollversionen.
    Der Header wird in Antworten nicht gesendet, wenn `<version>` unterstützt wird.

## Beispiele

Die vom Client unterstützte Version ist in der ursprünglichen `WebSocket`-[Handshake-Anfrage](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) angegeben. Für das aktuelle Protokoll ist die Version "13", wie unten gezeigt.

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
- [Der WebSocket-Handschlag](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) in _Writing WebSocket servers_
