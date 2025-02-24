---
title: Retry-After
slug: Web/HTTP/Headers/Retry-After
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP-**`Retry-After`**-{{Glossary("response_header", "Antwort-Header")}} gibt an, wie lange der Benutzeragent warten soll, bevor eine nachfolgende Anfrage gestellt wird.
Es gibt drei Hauptfälle, in denen dieser Header verwendet wird:

- In einer {{HTTPStatus("503", "503 Service Unavailable")}}-Antwort wird angegeben, wie lange der Dienst voraussichtlich nicht verfügbar sein wird.
- In einer {{HTTPStatus("429", "429 Too Many Requests")}}-Antwort wird angegeben, wie lange gewartet werden muss, bevor eine neue Anfrage gestellt werden kann.
- In einer Weiterleitungsantwort, wie z.B. {{HTTPStatus("301", "301 Moved Permanently")}}, wird angegeben, wie lange der Benutzeragent mindestens warten soll, bevor die weitergeleitete Anfrage ausgeführt wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Retry-After: <http-date>
Retry-After: <delay-seconds>
```

## Direktiven

- `<http-date>`
  - : Ein Datum, nach dem erneut versucht werden soll. Weitere Informationen zum HTTP-Datumsformat finden Sie im {{HTTPHeader("Date")}}-Header.
- `<delay-seconds>`
  - : Eine nicht negative Dezimalzahl, die die Sekunden angibt, die nach Empfang der Antwort verzögert werden sollen.

## Beispiele

### Umgang mit geplanter Ausfallzeit

Die Unterstützung des `Retry-After`-Headers auf sowohl Client- als auch Serverseite ist noch uneinheitlich. Einige Crawler und Spider, wie der Googlebot, beachten jedoch den `Retry-After`-Header. Es ist nützlich, diesen zusammen mit einer `503`-Antwort zu senden, damit Suchmaschinen Ihre Seite weiterhin indexieren, wenn die Ausfallzeit vorüber ist.

```http
Retry-After: Wed, 21 Oct 2015 07:28:00 GMT
Retry-After: 120
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPStatus("503", "503 Service Unavailable")}}
- {{HTTPStatus("301", "301 Moved Permanently")}}
- [Anleitung zum Umgang mit geplanter Ausfallzeit von Websites](https://developers.google.com/search/blog/2011/01/how-to-deal-with-planned-site-downtime) auf developers.google.com (2011)
