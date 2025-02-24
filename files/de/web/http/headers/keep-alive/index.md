---
title: Keep-Alive
slug: Web/HTTP/Headers/Keep-Alive
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP-**`Keep-Alive`**-{{Glossary("request_header", "Anforderungs")}} und {{Glossary("response_header", "Antwort-Header")}} erlaubt es dem Sender, anzugeben, wie eine Verbindung in Bezug auf ein Timeout und eine maximale Anzahl von Anfragen genutzt werden kann.

> [!NOTE]
> Damit `Keep-Alive` Wirkung zeigen kann, muss die Nachricht auch einen {{HTTPHeader("Connection", "Connection: keep-alive")}}-Header enthalten.

HTTP/1.0 beendet die Verbindung nach jedem Anforderungs-/Antwortvorgang standardmäßig, daher müssen persistente Verbindungen in HTTP/1.0 explizit ausgehandelt werden.
Einige Clients und Server möchten möglicherweise mit früheren Ansätzen für persistente Verbindungen kompatibel sein und können dies mit einem `Connection: keep-alive`-Anforderungs-Header tun.
Zusätzliche Parameter für die Verbindung können mit dem `Keep-Alive`-Header angefragt werden.

> [!WARNING]
> Verbindungsbezogene Header-Felder wie {{HTTPHeader("Connection")}} und `Keep-Alive` sind in [HTTP/2](https://httpwg.org/specs/rfc9113.html#ConnectionSpecific) und [HTTP/3](https://httpwg.org/specs/rfc9114.html#header-formatting) verboten.
> Chrome und Firefox ignorieren sie in HTTP/2-Antworten, aber Safari entspricht den Anforderungen der HTTP/2-Spezifikation und lädt keine Antwort, die sie enthält.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>
        {{Glossary("Request_header", "Anforderungs-Header")}},
        {{Glossary("Response_header", "Antwort-Header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Keep-Alive: <parameters>
```

## Direktiven

- `<parameters>`
  - : Eine durch Kommata getrennte Liste von Parametern, die jeweils aus einem Bezeichner und einem Wert bestehen, die durch das Gleichheitszeichen (`=`) getrennt sind.
    Folgende Bezeichner sind möglich:
    - `timeout`
      - : Eine Ganzzahl, die die Zeit in Sekunden angibt, die der Host eine inaktive Verbindung offen lässt, bevor sie geschlossen wird.
        Eine Verbindung ist inaktiv, wenn kein Datenverkehr vom Host gesendet oder empfangen wird. Ein Host kann eine inaktive Verbindung länger als `timeout` Sekunden offen halten, sollte jedoch versuchen, die Verbindung mindestens `timeout` Sekunden lang zu halten.
    - `max`
      - : Eine Ganzzahl, die die maximale Anzahl von Anfragen angibt, die über diese Verbindung gesendet werden können, bevor sie geschlossen wird.
        Wenn nicht `0`, wird dieser Wert für nicht gepipelinte Verbindungen ignoriert, da eine weitere Anfrage in der nächsten Antwort gesendet wird.
        Eine HTTP-Pipeline kann ihn verwenden, um das Pipelining zu beschränken.

## Beispiele

Eine Antwort, die einen `Keep-Alive`-Header enthält:

```http
HTTP/1.1 200 OK
Connection: Keep-Alive
Content-Encoding: gzip
Content-Type: text/html; charset=utf-8
Date: Thu, 11 Aug 2016 15:23:13 GMT
Keep-Alive: timeout=5, max=200
Last-Modified: Mon, 25 Jul 2016 04:32:39 GMT
Server: Apache

(body)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Connection")}}
- [Verbindungsmanagement in HTTP/1.x](/de/docs/Web/HTTP/Connection_management_in_HTTP_1.x)
