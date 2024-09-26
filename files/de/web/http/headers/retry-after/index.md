---
title: Retry-After
slug: Web/HTTP/Headers/Retry-After
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der **`Retry-After`** HTTP-Antwort-Header gibt an, wie lange der User-Agent warten soll, bevor er eine Folgeanfrage stellt. Es gibt drei Hauptfälle, in denen dieser Header verwendet wird:

- Wird er mit einer {{HTTPStatus(503)}} (Service Unavailable) Antwort gesendet, zeigt dies an, wie lange der Dienst voraussichtlich nicht verfügbar sein wird.
- Wird er mit einer {{HTTPStatus(429)}} (Too Many Requests) Antwort gesendet, zeigt dies an, wie lange gewartet werden muss, bevor eine neue Anfrage gestellt wird.
- Wird er mit einer Umleitungsantwort, wie z.B. {{HTTPStatus(301)}} (Moved Permanently), gesendet, gibt dies die Mindestzeit an, die der User-Agent warten soll, bevor die umgeleitete Anfrage gestellt wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Retry-After: <http-date>
Retry-After: <delay-seconds>
```

## Direktiven

- \<http-date>
  - : Ein Datum, nach dem erneut versucht werden soll. Weitere Details zum HTTP-Datumsformat finden Sie im {{HTTPHeader("Date")}} Header.
- \<delay-seconds>
  - : Eine nicht-negative Dezimalzahl, die die Sekunden angibt, die nach Erhalt der Antwort verzögert werden sollen.

## Beispiele

### Umgang mit geplanter Ausfallzeit

Die Unterstützung für den `Retry-After` Header auf sowohl Client- als auch Serverseite ist noch inkonsistent. Einige Crawler und Spider, wie Googlebot, beachten jedoch den `Retry-After` Header. Es ist nützlich, ihn zusammen mit einer {{HTTPStatus(503)}} (Service Unavailable) Antwort zu senden, damit Suchmaschinen Ihre Website weiterhin indexieren, wenn die Ausfallzeit vorbei ist.

```http
Retry-After: Wed, 21 Oct 2015 07:28:00 GMT
Retry-After: 120
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Google Webmaster Blog: How to deal with planned site downtime](https://webmasters.googleblog.com/2011/01/how-to-deal-with-planned-site-downtime.html)
- {{HTTPStatus(503)}} (Service Unavailable)
- {{HTTPStatus(301)}} (Moved Permanently)
