---
title: Sec-WebSocket-Version
slug: Web/HTTP/Headers/Sec-WebSocket-Version
l10n:
  sourceCommit: c69e36924e1849fdc9b7fc49a3f4c550efa3468a
---

{{HTTPSidebar}}

Der HTTP-{{Glossary("request_header", "Anforderungs")}}- und {{Glossary("response_header", "Antwortheader")}} **Sec-WebSocket-Version** wird im [WebSocket](/de/docs/Web/API/WebSockets_API)-Eröffnungs-[Handschlag](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet, um das vom Client unterstützte WebSocket-Protokoll und die vom Server unterstützten Protokollversionen anzuzeigen, falls es die in der Anfrage angegebene Version _nicht_ unterstützt.

Der Header kann nur einmal in einer Anfrage erscheinen und gibt die WebSocket-Version an, die die Webanwendung verwendet. Die aktuelle Version des Protokolls zum Zeitpunkt des Schreibens ist 13. Der Header wird von Benutzeragenten automatisch zu Anfragen hinzugefügt, wenn eine [`WebSocket`](/de/docs/Web/API/WebSocket)-Verbindung hergestellt wird.

Der Server nutzt die Version, um festzustellen, ob er das Protokoll verstehen kann. Wenn der Server die Version nicht unterstützt oder irgendein Header im Handschlag nicht verstanden wird oder einen falschen Wert hat, sollte der Server eine Antwort mit dem Status {{httpstatus("400", "400 Bad Request")}} senden und die Verbindung sofort schließen. Er sollte auch `Sec-WebSocket-Version` in der `400`-Antwort einfügen, wobei die Versionen aufgelistet werden, die er unterstützt. Die Versionen können in einzelnen Headern oder als durch Komma getrennte Werte in einem einzigen Header angegeben werden.

Der Header sollte nicht in Antworten gesendet werden, wenn der Server die vom Client angegebenen Versionen versteht.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Headername")}}</th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

## Syntax

Anforderung

```http
Sec-WebSocket-Version: <version>
```

Antwort (nur bei Fehler):

```http
Sec-WebSocket-Version: <server-supported-versions>
```

## Direktiven

- `<version>`

  - : Die WebSocket-Protokollversion, die der Client bei der Kommunikation mit dem Server verwenden möchte. Diese Zahl sollte die aktuellste in der [IANA WebSocket Version Number Registry](https://www.iana.org/assignments/websocket/websocket.xml#version-number) gelistete Version sein. Die aktuellste endgültige Version des WebSocket-Protokolls ist Version 13.

- `<server-supported-versions>`
  - : Bei einem Fehler eine durch Komma getrennte Liste der vom Server unterstützen WebSocket-Protokollversionen. Der Header wird nicht in Antworten gesendet, wenn `<version>` unterstützt wird.

## Beispiele

Die vom Client unterstützte Version wird in der ursprünglichen `WebSocket`-[Handschlagsanfrage](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) angegeben. Für das aktuelle Protokoll ist die Version "13", wie unten gezeigt.

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
```

Wenn der Server Version 13 des Protokolls unterstützt, erscheint `Sec-WebSocket-Version` nicht in der Antwort.

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
