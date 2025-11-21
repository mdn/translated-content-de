---
title: Retry-After header
short-title: Retry-After
slug: Web/HTTP/Reference/Headers/Retry-After
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

Der HTTP-**`Retry-After`**-{{Glossary("response_header", "Antwortheader")}} gibt an, wie lange der Benutzeragent warten sollte, bevor er eine Folgeanfrage stellt. Es gibt drei Hauptfälle, in denen dieser Header verwendet wird:

- In einer {{HTTPStatus("503", "503 Service Unavailable")}}-Antwort gibt dies an, wie lange der Dienst voraussichtlich nicht verfügbar sein wird.
- In einer {{HTTPStatus("429", "429 Too Many Requests")}}-Antwort gibt dies an, wie lange man warten sollte, bevor man eine neue Anfrage stellt.
- In einer Umleitungsantwort, wie {{HTTPStatus("301", "301 Moved Permanently")}}, gibt dies die Mindestzeit an, die der Benutzeragent warten soll, bevor er die umgeleitete Anfrage stellt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Retry-After: <http-date>
Retry-After: <delay-seconds>
```

## Anweisungen

- `<http-date>`
  - : Ein Datum, nach dem erneut versucht werden soll. Siehe den {{HTTPHeader("Date")}}-Header für weitere Details zum HTTP-Datumsformat.
- `<delay-seconds>`
  - : Eine nicht-negative Dezimalzahl, die die Sekunden angibt, die nach Erhalt der Antwort zu warten sind.

## Beispiele

### Umgang mit geplanter Ausfallzeit

Die Unterstützung des `Retry-After`-Headers auf beiden Seiten, Clients und Servern, ist noch inkonsistent. Einige Crawler und Spider, wie der Googlebot, respektieren jedoch den `Retry-After`-Header. Es ist nützlich, ihn zusammen mit einer `503`-Antwort zu senden, damit Suchmaschinen Ihre Website weiterhin indexieren, wenn die Ausfallzeit vorbei ist.

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
- [Anleitung zum Umgang mit geplanter Site-Ausfallzeit](https://developers.google.com/search/blog/2011/01/how-to-deal-with-planned-site-downtime) auf developers.google.com (2011)
