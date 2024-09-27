---
title: Keep-Alive
slug: Web/HTTP/Headers/Keep-Alive
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{HTTPSidebar}}

Der **`Keep-Alive`** allgemeine Header erlaubt es dem Absender, Hinweise darüber zu geben, wie die Verbindung genutzt werden kann, um ein Timeout und eine maximale Anzahl von Anfragen festzulegen.

> [!NOTE]
> Setzen Sie den {{HTTPHeader("Connection")}} Header auf "keep-alive", damit dieser Header irgendeine Wirkung hat.

> [!WARNING]
> Verbindungsspezifische Header-Felder wie
> {{HTTPHeader("Connection")}} und `Keep-Alive` sind in
> [HTTP/2](https://httpwg.org/specs/rfc9113.html#ConnectionSpecific) und
> [HTTP/3](https://httpwg.org/specs/rfc9114.html#header-formatting) verboten. Chrome und
> Firefox ignorieren sie in HTTP/2-Antworten, aber Safari entspricht den Anforderungen der HTTP/2-Spezifikation und lädt keine Antwort, die sie enthält.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        [Anfrage-Header](/de/docs/Glossary/Request_header),
        [Antwort-Header](/de/docs/Glossary/Response_header)
      </td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
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

  - : Eine durch Kommata getrennte Liste von Parametern, die jeweils aus einem Bezeichner und einem durch das Gleichheitszeichen (`'='`) getrennten Wert bestehen. Die folgenden Bezeichner sind möglich:

    - `timeout`: Eine ganze Zahl, die die Zeit in Sekunden angibt, die der Host einer inaktiven Verbindung erlaubt, offen zu bleiben, bevor sie geschlossen wird. Eine Verbindung ist inaktiv, wenn kein Datenversand oder -empfang durch einen Host erfolgt. Ein Host kann eine inaktive Verbindung länger als die angegebenen `timeout`-Sekunden offen halten, sollte jedoch versuchen, eine Verbindung für mindestens `timeout`-Sekunden aufrechtzuerhalten.
    - `max`: Eine ganze Zahl, die die maximale Anzahl von Anfragen angibt, die auf dieser Verbindung gesendet werden können, bevor sie geschlossen wird. Es sei denn, `0`, dieser Wert wird für nicht-pipelined Verbindungen ignoriert, da eine weitere Anfrage in der nächsten Antwort gesendet wird. Ein HTTP-Pipeline kann es verwenden, um das Pipelining zu begrenzen.

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
- [Verbindungsmanagement in HTTP/1.x](/de/docs/Web/HTTP/Connection_management_in_HTTP_1.x)
