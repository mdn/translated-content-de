---
title: Sec-WebSocket-Version header
short-title: Sec-WebSocket-Version
slug: Web/HTTP/Reference/Headers/Sec-WebSocket-Version
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP **Sec-WebSocket-Version** {{Glossary("request_header", "Anforderungs-")}} und {{Glossary("response_header", "Antwort-Header")}} wird im [WebSocket](/de/docs/Web/API/WebSockets_API) Eröffnungs-[Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet, um das vom Client unterstützte WebSocket-Protokoll sowie die vom Server unterstützten Protokollversionen zu kennzeichnen, falls er die im Request angegebene Version _nicht_ unterstützt.

Der Header kann in einer Anfrage nur einmal erscheinen und spezifiziert die WebSocket-Version, die die Webanwendung verwendet.
Die aktuelle Version des Protokolls zum Zeitpunkt der Erstellung dieses Dokuments ist 13.
Der Header wird automatisch durch Benutzeragenten zu Anfragen hinzugefügt, wenn eine [`WebSocket`](/de/docs/Web/API/WebSocket)-Verbindung hergestellt wird.

Der Server verwendet die Version, um festzustellen, ob er das Protokoll verstehen kann.
Wenn der Server die Version nicht unterstützt oder ein Header im Handshake nicht verstanden wird oder einen falschen Wert hat, sollte der Server eine Antwort mit dem Status {{httpstatus("400", "400 Bad Request")}} senden und den Socket sofort schließen.
Er sollte auch `Sec-WebSocket-Version` in der `400`-Antwort einfügen und die Versionen auflisten, die er unterstützt.
Die Versionen können in einzelnen Headern oder als kommagetrennte Werte in einem einzigen Header angegeben werden.

Der Header sollte in Antworten nicht gesendet werden, wenn der Server die vom Client angegebene Version versteht.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>Ja (<code>Sec-</code>-Präfix)</td>
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
  - : Die WebSocket-Protokollversion, die der Client beim Kommunizieren mit dem Server verwenden möchte.
    Diese Zahl sollte die aktuellste mögliche Version sein, die im [IANA WebSocket Version Number Registry](https://www.iana.org/assignments/websocket/websocket.xml#version-number) aufgeführt ist.
    Die neueste endgültige Version des WebSocket-Protokolls ist Version 13.
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

Wenn der Server Version 13 des Protokolls unterstützt, dann wird `Sec-WebSocket-Version` nicht in der Antwort erscheinen.

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
