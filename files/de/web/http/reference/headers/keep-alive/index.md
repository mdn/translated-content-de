---
title: Keep-Alive header
short-title: Keep-Alive
slug: Web/HTTP/Reference/Headers/Keep-Alive
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP **`Keep-Alive`** {{Glossary("request_header", "Anforderungs-")}} und {{Glossary("response_header", "Antwort-Header")}} ermöglicht es dem Absender, Hinweise zu geben, wie eine Verbindung in Bezug auf ein Timeout und eine maximale Anzahl von Anfragen genutzt werden kann.

> [!NOTE]
> Damit `Keep-Alive` eine Wirkung hat, muss die Nachricht auch einen {{HTTPHeader("Connection", "Connection: keep-alive")}} Header enthalten.

HTTP/1.0 schließt die Verbindung standardmäßig nach jeder Anforderungs-/Antwort-Interaktion, daher müssen persistente Verbindungen in HTTP/1.0 explizit ausgehandelt werden. Einige Clients und Server möchten möglicherweise mit früheren Ansätzen für persistente Verbindungen kompatibel sein und können dies mit einem `Connection: keep-alive` Anforderungs-Header tun. Zusätzliche Parameter für die Verbindung können mit dem `Keep-Alive` Header angefordert werden.

> [!WARNING]
> Verbindungsspezifische Kopfzeilenfelder wie {{HTTPHeader("Connection")}} und `Keep-Alive` sind in [HTTP/2](https://httpwg.org/specs/rfc9113.html#ConnectionSpecific) und [HTTP/3](https://httpwg.org/specs/rfc9114.html#header-formatting) verboten.
> Chrome und Firefox ignorieren sie in HTTP/2-Antworten, aber Safari entspricht den Anforderungen der HTTP/2-Spezifikation und lädt keine Antwort, die sie enthält.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
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
  - : Eine durch Kommata getrennte Liste von Parametern, die jeweils aus einem Bezeichner und einem durch das Gleichheitszeichen (`=`) getrennten Wert bestehen.
    Folgende Bezeichner sind möglich:
    - `timeout`
      - : Eine Ganzzahl, die die Zeit in Sekunden angibt, die der Host eine inaktive Verbindung offen lässt, bevor sie geschlossen wird.
        Eine Verbindung ist inaktiv, wenn keine Daten von einem Host gesendet oder empfangen werden. Ein Host kann eine inaktive Verbindung länger als `timeout` Sekunden offen lassen, sollte jedoch versuchen, eine Verbindung mindestens für `timeout` Sekunden aufrechtzuerhalten.
    - `max`
      - : Eine Ganzzahl, die die maximale Anzahl von Anfragen angibt, die über diese Verbindung gesendet werden können, bevor sie geschlossen wird.
        Sofern nicht `0`, wird dieser Wert für nicht-„pipelined“ Verbindungen ignoriert, da eine weitere Anfrage in der nächsten Antwort gesendet wird.
        Eine HTTP-Pipeline kann es verwenden, um das Pipelining zu begrenzen.

## Beispiele

Eine Antwort, die einen `Keep-Alive` Header enthält:

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
- [Verbindungsmanagement in HTTP/1.x](/de/docs/Web/HTTP/Guides/Connection_management_in_HTTP_1.x)
