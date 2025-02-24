---
title: Sec-WebSocket-Version
slug: Web/HTTP/Headers/Sec-WebSocket-Version
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP-Header **Sec-WebSocket-Version** {{Glossary("request_header", "request")}} und {{Glossary("response_header", "response header")}} wird im [WebSocket](/de/docs/Web/API/WebSockets_API) Eröffnungs-[Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet, um das WebSocket-Protokoll anzugeben, das vom Client unterstützt wird, sowie die Protokollversionen, die vom Server unterstützt werden, falls dieser die im Request angegebene Version _nicht_ unterstützt.

Der Header kann nur einmal in einem Request erscheinen und gibt die WebSocket-Version an, die die Webanwendung verwendet. Die aktuelle Version des Protokolls zum Zeitpunkt des Schreibens ist 13. Der Header wird automatisch zu Anfragen hinzugefügt, wenn eine [`WebSocket`](/de/docs/Web/API/WebSocket)-Verbindung vom Benutzeragenten hergestellt wird.

Der Server verwendet die Version, um festzustellen, ob er das Protokoll verstehen kann. Wenn der Server die Version nicht unterstützt oder ein beliebiger Header im Handshake nicht verstanden wird oder einen falschen Wert hat, sollte der Server eine Antwort mit dem Status {{httpstatus("400", "400 Bad Request")}} senden und sofort die Verbindung schließen. Er sollte auch `Sec-WebSocket-Version` in die `400`-Antwort aufnehmen, um die Versionen aufzulisten, die er unterstützt. Die Versionen können in einzelnen Headern oder als durch Komma getrennte Werte in einem einzelnen Header angegeben werden.

Der Header sollte nicht in Antworten gesendet werden, wenn der Server die vom Client angegebene Version versteht.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header Typ</th>
      <td>{{Glossary("Response_header", "Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Ja (<code>Sec-</code> Präfix)</td>
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
  - : Die WebSocket-Protokollversion, die der Client beim Kommunizieren mit dem Server verwenden möchte. Diese Nummer sollte die aktuellste mögliche Version aus dem [IANA WebSocket Version Number Registry](https://www.iana.org/assignments/websocket/websocket.xml#version-number) sein. Die neueste endgültige Version des WebSocket-Protokolls ist Version 13.
- `<server-supported-versions>`
  - : Bei einem Fehler, eine durch Kommas getrennte Liste der vom Server unterstützten WebSocket-Protokollversionen. Der Header wird nicht in Antworten gesendet, wenn `<version>` unterstützt wird.

## Beispiele

### WebSocket Eröffnungs-Handshake

Die vom Client unterstützte Version wird im ursprünglichen `WebSocket` [Handshake-Anfrage](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) angegeben. Für das aktuelle Protokoll ist die Version "13", wie unten gezeigt.

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
```

Wenn der Server Version 13 des Protokolls unterstützt, wird `Sec-WebSocket-Version` in der Antwort nicht erscheinen.

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
