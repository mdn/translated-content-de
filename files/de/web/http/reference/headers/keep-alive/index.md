---
title: Keep-Alive header
short-title: Keep-Alive
slug: Web/HTTP/Reference/Headers/Keep-Alive
l10n:
  sourceCommit: f542ed344953b3312fc92150bba11536667e288a
---

Der HTTP-**`Keep-Alive`**-{{Glossary("request_header", "Anforderungsheader")}} und {{Glossary("response_header", "Antwortheader")}} ermöglicht es dem Absender, Hinweise darauf zu geben, wie eine Verbindung im Hinblick auf eine zeitliche Begrenzung und eine maximale Anzahl von Anfragen genutzt werden kann.

> [!NOTE]
> Damit `Keep-Alive` einen Effekt hat, muss die Nachricht auch einen {{HTTPHeader("Connection", "Connection: keep-alive")}}-Header enthalten.

HTTP/1.0 schließt die Verbindung standardmäßig nach jeder Anfrage/Antwort-Interaktion, daher müssen in HTTP/1.0 persistente Verbindungen explizit ausgehandelt werden. Einige Clients und Server möchten möglicherweise mit früheren Ansätzen für persistente Verbindungen kompatibel sein und können dies mit einem `Connection: keep-alive` Anforderungsheader tun. Zusätzliche Parameter für die Verbindung können mit dem `Keep-Alive`-Header angefordert werden.

> [!WARNING]
> Verbindungs-spezifische Header-Felder wie {{HTTPHeader("Connection")}} und `Keep-Alive` sind in [HTTP/2](https://httpwg.org/specs/rfc9113.html#ConnectionSpecific) und [HTTP/3](https://httpwg.org/specs/rfc9114.html#header-formatting) verboten.
> Chrome und Firefox ignorieren sie in HTTP/2-Antworten, aber Safari hält sich an die Anforderungen der HTTP/2-Spezifikation und lädt keine Antwort, die sie enthält.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungsheader")}},
        {{Glossary("Response_header", "Antwortheader")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
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
  - : Eine durch Kommas getrennte Liste von Parametern, wobei jeder Parameter aus einem Bezeichner und einem Wert besteht, die durch das Gleichheitszeichen (`=`) getrennt sind.
    Die folgenden Bezeichner sind möglich:
    - `timeout`
      - : Eine Ganzzahl, die die Zeit in Sekunden angibt, die der Host eine inaktive Verbindung geöffnet lässt, bevor sie geschlossen wird.
        Eine Verbindung ist inaktiv, wenn keine Daten von einem Host gesendet oder empfangen werden. Ein Host kann eine inaktive Verbindung länger als `timeout` Sekunden geöffnet lassen, aber der Host sollte versuchen, die Verbindung mindestens `timeout` Sekunden aufrechtzuerhalten.
    - `max`
      - : Eine Ganzzahl, die die maximale Anzahl von Anfragen angibt, die auf dieser Verbindung gesendet werden können, bevor sie geschlossen wird.
        Es sei denn, der Wert ist `0`, wird dieser Wert für nicht-gepipelinede Verbindungen ignoriert, da eine weitere Anfrage in der nächsten Antwort gesendet wird.
        Eine HTTP-Pipeline kann es verwenden, um das Pipeline-Verfahren zu begrenzen.

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
- [Verwaltung der Verbindung in HTTP/1.x](/de/docs/Web/HTTP/Guides/Connection_management_in_HTTP_1.x)
