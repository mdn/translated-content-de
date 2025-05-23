---
title: Retry-After header
short-title: Retry-After
slug: Web/HTTP/Reference/Headers/Retry-After
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP-**`Retry-After`**-{{Glossary("response_header", "Antwort-Header")}} gibt an, wie lange der Benutzer-Agent warten sollte, bevor er eine nachfolgende Anfrage stellt. Es gibt drei Hauptfälle, in denen dieser Header verwendet wird:

- In einer {{HTTPStatus("503", "503 Service Unavailable")}}-Antwort zeigt er an, wie lange der Dienst voraussichtlich nicht verfügbar sein wird.
- In einer {{HTTPStatus("429", "429 Too Many Requests")}}-Antwort gibt er an, wie lange gewartet werden soll, bevor eine neue Anfrage gestellt wird.
- In einer Weiterleitungsantwort, wie etwa {{HTTPStatus("301", "301 Moved Permanently")}}, zeigt er die Mindestzeit an, die der Benutzer-Agent abwarten soll, bevor die umgeleitete Anfrage gestellt wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Typ des Headers</th>
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
  - : Ein Datum, nach dem erneut versucht werden soll. Siehe den {{HTTPHeader("Date")}}-Header für
    mehr Details zum HTTP-Datumsformat.
- `<delay-seconds>`
  - : Eine nicht-negative Dezimalzahl, die die Sekunden angibt, die nach Erhalt der Antwort verzögert werden sollen.

## Beispiele

### Umgang mit geplanter Ausfallzeit

Die Unterstützung für den `Retry-After`-Header ist bei Clients und Servern noch uneinheitlich. Einige Crawler und Spider, wie der Googlebot, beachten jedoch den `Retry-After`-Header. Es ist nützlich, ihn zusammen mit einer `503`-Antwort zu senden, damit Suchmaschinen Ihre Website weiter indexieren, wenn die Ausfallzeit vorbei ist.

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
- [Anleitung, wie mit geplanter Ausfallzeit umzugehen ist](https://developers.google.com/search/blog/2011/01/how-to-deal-with-planned-site-downtime) auf developers.google.com (2011)
