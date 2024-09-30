---
title: Keep-Alive
slug: Web/HTTP/Headers/Keep-Alive
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{HTTPSidebar}}

Der allgemeine Header **`Keep-Alive`** ermöglicht es dem Sender, Hinweise darüber zu geben, wie die Verbindung zur Festlegung eines Timeouts und einer maximalen Anzahl von Anfragen verwendet werden kann.

> [!NOTE]
> Setzen Sie den {{HTTPHeader("Connection")}}-Header auf "keep-alive", damit dieser Header eine Wirkung hat.

> [!WARNING]
> Verbindungsspezifische Header-Felder wie
> {{HTTPHeader("Connection")}} und `Keep-Alive` sind in [HTTP/2](https://httpwg.org/specs/rfc9113.html#ConnectionSpecific) und
> [HTTP/3](https://httpwg.org/specs/rfc9114.html#header-formatting) verboten. Chrome und
> Firefox ignorieren sie in HTTP/2-Antworten, aber Safari hält sich an die Anforderungen der HTTP/2-Spezifikation und lädt keine Antwort, die sie enthält.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        [Request header](/de/docs/Glossary/Request_header),
        [Response header](/de/docs/Glossary/Response_header)
      </td>
    </tr>
    <tr>
      <th scope="row">[Nicht erlaubter Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Keep-Alive: parameters
```

## Direktiven

- `parameters`

  - : Eine durch Kommas getrennte Liste von Parametern, die jeweils aus einem Bezeichner und einem Wert bestehen, die durch das Gleichheitszeichen (`'='`) getrennt sind. Die folgenden Bezeichner sind möglich:

    - `timeout`: Eine Ganzzahl, die die Zeit in Sekunden angibt, während der der Host eine inaktive Verbindung offen halten darf, bevor sie geschlossen wird. Eine Verbindung ist inaktiv, wenn keine Daten gesendet oder empfangen werden. Ein Host kann eine inaktive Verbindung länger als `timeout` Sekunden offen halten, sollte aber versuchen, eine Verbindung mindestens `timeout` Sekunden lang aufrechtzuerhalten.
    - `max`: Eine Ganzzahl, die die maximale Anzahl von Anfragen angibt, die über diese Verbindung gesendet werden können, bevor sie geschlossen wird. Sofern `0` beträgt, wird dieser Wert für nicht-pipelined Verbindungen ignoriert, da eine weitere Anfrage in der nächsten Antwort gesendet wird. Eine HTTP-Pipeline kann ihn verwenden, um das Pipeline-Limit festzulegen.

## Beispiele

Eine Antwort, die einen `Keep-Alive`-Header enthält:

```http
HTTP/1.1 200 OK
Connection: Keep-Alive
Content-Encoding: gzip
Content-Type: text/html; charset=utf-8
Date: Thu, 11 Aug 2016 15:23:13 GMT
Keep-Alive: timeout=5, max=1000
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
- [Verwaltung der Verbindung in HTTP/1.x](/de/docs/Web/HTTP/Connection_management_in_HTTP_1.x)
