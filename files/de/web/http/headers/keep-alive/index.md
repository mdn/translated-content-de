---
title: Keep-Alive
slug: Web/HTTP/Headers/Keep-Alive
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{HTTPSidebar}}

Der allgemeine Header **`Keep-Alive`** ermöglicht dem Absender, einen Hinweis darauf zu geben, wie die Verbindung verwendet werden kann, um ein Timeout und eine maximale Anzahl von Anfragen festzulegen.

> [!NOTE]
> Setzen Sie den {{HTTPHeader("Connection")}}-Header auf "keep-alive", damit dieser Header eine Wirkung hat.

> [!WARNING]
> Verbindungsspezifische Header-Felder wie
> {{HTTPHeader("Connection")}} und `Keep-Alive` sind in [HTTP/2](https://httpwg.org/specs/rfc9113.html#ConnectionSpecific) und
> [HTTP/3](https://httpwg.org/specs/rfc9114.html#header-formatting) verboten. Chrome und
> Firefox ignorieren sie in HTTP/2-Antworten, aber Safari entspricht den HTTP/2-Spezifikationsanforderungen und lädt keine Antwort, die sie enthält.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request header")}},
        {{Glossary("Response header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
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

  - : Eine durch Komma getrennte Liste von Parametern, die jeweils aus einem Identifikator und einem durch das Gleichheitszeichen (`'='`) getrennten Wert bestehen. Die folgenden Identifikatoren sind möglich:

    - `timeout`: Eine ganze Zahl, die angibt, wie viele Sekunden der Host eine inaktive Verbindung offen lassen wird, bevor sie geschlossen wird. Eine Verbindung ist inaktiv, wenn von einem Host keine Daten gesendet oder empfangen werden. Ein Host kann eine inaktive Verbindung länger als `timeout` Sekunden offen halten, sollte jedoch versuchen, eine Verbindung mindestens `timeout` Sekunden aufrechtzuerhalten.
    - `max`: Eine ganze Zahl, die die maximale Anzahl von Anfragen angibt, die über diese Verbindung gesendet werden können, bevor sie geschlossen wird. Außer `0` wird dieser Wert bei nicht-pipelined Verbindungen ignoriert, da eine andere Anfrage in der nächsten Antwort gesendet wird. Eine HTTP-Pipeline kann ihn verwenden, um das Pipelining zu begrenzen.

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
