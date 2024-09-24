---
title: Keep-Alive
slug: Web/HTTP/Headers/Keep-Alive
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{HTTPSidebar}}

Der **`Keep-Alive`** Allgemein-Header ermöglicht es dem Sender, Hinweise darüber zu geben, wie die Verbindung verwendet werden kann, um ein Timeout und eine maximale Anzahl von Anfragen festzulegen.

> [!NOTE]
> Setzen Sie den {{HTTPHeader("Connection")}} Header auf "keep-alive", damit dieser Header eine Wirkung hat.

> [!WARNING]
> Verbindungsspezifische Header-Felder wie
> {{HTTPHeader("Connection")}} und `Keep-Alive` sind in
> [HTTP/2](https://httpwg.org/specs/rfc9113.html#ConnectionSpecific) und
> [HTTP/3](https://httpwg.org/specs/rfc9114.html#header-formatting) verboten.
> Chrome und Firefox ignorieren sie in HTTP/2-Antworten, aber Safari hält sich an die Anforderungen der HTTP/2-Spezifikation und lädt keine Antwort, die sie enthält.

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

  - : Eine durch Kommas getrennte Liste von Parametern, wobei jeder aus einem Bezeichner und einem Wert besteht, die durch das Gleichheitszeichen (`'='`) getrennt sind. Die folgenden Bezeichner sind möglich:

    - `timeout`: Eine Ganzzahl, die die Zeit in Sekunden angibt, die der Host eine ruhende Verbindung offen lassen darf, bevor sie geschlossen wird. Eine Verbindung ist ruhend, wenn von einem Host keine Daten gesendet oder empfangen werden. Ein Host kann eine ruhende Verbindung länger offenhalten als die `timeout` Sekunden, sollte jedoch versuchen, die Verbindung zumindest für `timeout` Sekunden zu behalten.
    - `max`: Eine Ganzzahl, die die maximale Anzahl von Anfragen darstellt, die über diese Verbindung gesendet werden können, bevor sie geschlossen wird. Sofern nicht `0`, wird dieser Wert für nicht gepipeline Verbindungen ignoriert, da eine andere Anfrage in der nächsten Antwort gesendet wird. Eine HTTP-Pipeline kann ihn verwenden, um die Pipelinierung zu begrenzen.

## Beispiele

Eine Antwort, die einen `Keep-Alive` Header enthält:

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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{HTTPHeader("Connection")}}
- [Verbindungsmanagement in HTTP/1.x](/de/docs/Web/HTTP/Connection_management_in_HTTP_1.x)
