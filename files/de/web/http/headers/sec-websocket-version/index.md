---
title: Sec-WebSocket-Version
slug: Web/HTTP/Headers/Sec-WebSocket-Version
l10n:
  sourceCommit: c69e36924e1849fdc9b7fc49a3f4c550efa3468a
---

{{HTTPSidebar}}

Der **Sec-WebSocket-Version** HTTP-{{glossary("request header", "Anforderungsheader")}} und {{glossary("response header", "Antwortheader")}} wird im [WebSocket](/de/docs/Web/API/WebSockets_API) Eröffnungs-[Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet, um anzuzeigen, welches WebSocket-Protokoll vom Client unterstützt wird, und die Protokollversionen, die vom Server unterstützt werden, wenn dieser die im Request angegebene Version _nicht_ unterstützt.

Der Header kann nur einmal in einer Anfrage erscheinen und gibt die WebSocket-Version an, die die Webanwendung verwendet.
Die aktuelle Version des Protokolls zum Zeitpunkt des Schreibens ist 13.
Der Header wird automatisch von Benutzeragenten zu Anfragen hinzugefügt, wenn eine {{domxref("WebSocket")}}-Verbindung hergestellt wird.

Der Server verwendet die Version, um festzustellen, ob er das Protokoll verstehen kann.
Wenn der Server die Version nicht unterstützt oder ein Header im Handshake nicht verstanden wird oder einen falschen Wert hat, sollte der Server eine Antwort mit dem Status {{httpstatus("400", "400 Bad Request")}} senden und den Socket sofort schließen.
Er sollte auch `Sec-WebSocket-Version` in die `400`-Antwort aufnehmen und die unterstützten Versionen auflisten.
Die Versionen können in einzelnen Headers oder als kommagetrennte Werte in einem einzigen Header angegeben werden.

Der Header sollte in Antworten nicht gesendet werden, wenn der Server die vom Client angegebene Version versteht.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "Verbotener Headername")}}</th>
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

  - : Die WebSocket-Protokollversion, die der Client bei der Kommunikation mit dem Server verwenden möchte.
    Diese Zahl sollte die aktuellste mögliche Version sein, die im [IANA WebSocket Version Number Registry](https://www.iana.org/assignments/websocket/websocket.xml#version-number) aufgeführt ist.
    Die aktuellste endgültige Version des WebSocket-Protokolls ist Version 13.

- `<server-supported-versions>`
  - : Bei Fehlern eine durch Kommas getrennte Liste der WebSocket-Protokollversionen, die der Server unterstützt.
    Der Header wird in Antworten nicht gesendet, wenn `<version>` unterstützt wird.

## Beispiele

Die vom Client unterstützte Version wird in der ursprünglichen `WebSocket`- [Handshake-Anfrage](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) angegeben.
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
- [Der WebSocket-Handschlag](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) in _Writing WebSocket servers_
