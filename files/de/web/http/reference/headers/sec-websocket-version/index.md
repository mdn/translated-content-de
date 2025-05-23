---
title: Sec-WebSocket-Version header
short-title: Sec-WebSocket-Version
slug: Web/HTTP/Reference/Headers/Sec-WebSocket-Version
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP **Sec-WebSocket-Version** {{Glossary("request_header", "Anforderungs-")}} und {{Glossary("response_header", "Antwortheader")}} wird im [WebSocket](/de/docs/Web/API/WebSockets_API) Eröffnungs-[Handschlag](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet, um das WebSocket-Protokoll anzugeben, das vom Client unterstützt wird, sowie die vom Server unterstützten Protokollversionen, wenn er die im Request angegebene Version _nicht_ unterstützt.

Der Header kann nur einmal in einer Anfrage erscheinen und gibt die WebSocket-Version an, die von der Webanwendung verwendet wird.
Die aktuelle Version des Protokolls zum Zeitpunkt der Erstellung dieses Dokuments ist 13.
Der Header wird automatisch von Benutzeragenten zu Anfragen hinzugefügt, wenn eine [`WebSocket`](/de/docs/Web/API/WebSocket)-Verbindung hergestellt wird.

Der Server verwendet die Version, um zu bestimmen, ob er das Protokoll verstehen kann.
Unterstützt der Server die Version nicht oder wird ein Header im Handschlag nicht verstanden oder weist einen falschen Wert auf, sollte der Server eine Antwort mit dem Status {{httpstatus("400", "400 Bad Request")}} senden und die Verbindung sofort schließen.
Er sollte auch `Sec-WebSocket-Version` in die `400`-Antwort einfügen und die Versionen auflisten, die er unterstützt.
Die Versionen können in einzelnen Headern oder als kommagetrennte Werte in einem einzigen Header angegeben werden.

Der Header sollte nicht in Antworten gesendet werden, wenn der Server die vom Client angegebene Version versteht.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotene Anforderungsheader")}}</th>
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
  - : Die WebSocket-Protokollversion, die der Client beim Kommunizieren mit dem Server verwenden möchte.
    Diese Zahl sollte die aktuellste mögliche Version sein, die im [IANA WebSocket Version Number Registry](https://www.iana.org/assignments/websocket/websocket.xml#version-number) aufgeführt ist.
    Die aktuellste finale Version des WebSocket-Protokolls ist Version 13.
- `<server-supported-versions>`
  - : Bei einem Fehler eine durch Kommas getrennte Liste der vom Server unterstützten WebSocket-Protokollversionen.
    Der Header wird in Antworten nicht gesendet, wenn `<version>` unterstützt wird.

## Beispiele

### WebSocket-Eröffnungs-Handschlag

Die vom Client unterstützte Version wird in der ursprünglichen `WebSocket` [Handshake-Anfrage](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) angegeben.
Für das aktuelle Protokoll ist die Version "13", wie unten gezeigt.

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
```

Unterstützt der Server die Version 13 des Protokolls, erscheint `Sec-WebSocket-Version` nicht in der Antwort.

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
