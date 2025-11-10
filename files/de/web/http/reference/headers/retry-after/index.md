---
title: Retry-After header
short-title: Retry-After
slug: Web/HTTP/Reference/Headers/Retry-After
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP **`Retry-After`** {{Glossary("response_header", "Antwortheader")}} gibt an, wie lange der Benutzeragent warten soll, bevor eine Folgeanforderung gestellt wird. Es gibt drei Hauptfälle, in denen dieser Header verwendet wird:

- In einer {{HTTPStatus("503", "503 Service Unavailable")}} Antwort gibt dieser an, wie lange der Dienst voraussichtlich nicht verfügbar sein wird.
- In einer {{HTTPStatus("429", "429 Too Many Requests")}} Antwort gibt dieser an, wie lange gewartet werden soll, bevor eine neue Anfrage gestellt wird.
- In einer Redirect-Antwort, wie etwa {{HTTPStatus("301", "301 Moved Permanently")}}, gibt dieser die minimale Zeit an, die der Benutzeragent warten soll, bevor die umgeleitete Anfrage gestellt wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrageheader")}}</th>
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
  - : Ein Datum, nach dem Sie es erneut versuchen sollten. Siehe den {{HTTPHeader("Date")}}-Header für weitere Details zum HTTP-Datumsformat.
- `<delay-seconds>`
  - : Eine nicht-negative Dezimalzahl, die die Sekunden angibt, die nach Erhalt der Antwort gewartet werden sollen.

## Beispiele

### Umgang mit geplanter Ausfallzeit

Der Support für den `Retry-After`-Header bei Clients und Servern ist nach wie vor inkonsistent. Einige Crawler und Spider, wie der Googlebot, beachten jedoch den `Retry-After`-Header. Es ist nützlich, diesen zusammen mit einer `503`-Antwort zu senden, damit Suchmaschinen Ihre Seite weiterhin indexieren, wenn die Ausfallzeit vorbei ist.

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
- [Anleitung für den Umgang mit geplanter Website-Ausfallzeit](https://developers.google.com/search/blog/2011/01/how-to-deal-with-planned-site-downtime) auf developers.google.com (2011)
