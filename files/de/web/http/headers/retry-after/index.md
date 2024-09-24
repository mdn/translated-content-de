---
title: Retry-After
slug: Web/HTTP/Headers/Retry-After
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der HTTP-Header **`Retry-After`** in der Antwort gibt an, wie lange der User-Agent warten sollte, bevor er eine Folgeanfrage stellt. Es gibt drei Hauptfälle, in denen dieser Header verwendet wird:

- Wenn er mit einer {{HTTPStatus(503)}} (Dienst nicht verfügbar) Antwort gesendet wird, gibt dies an, wie lange der Dienst voraussichtlich nicht verfügbar sein wird.
- Wenn er mit einer {{HTTPStatus(429)}} (Zu viele Anfragen) Antwort gesendet wird, gibt dies an, wie lange gewartet werden soll, bevor eine neue Anfrage gestellt wird.
- Wenn er mit einer Weiterleitungsantwort gesendet wird, wie z.B. {{HTTPStatus(301)}} (Dauerhaft verschoben), gibt dies die minimale Zeit an, die der User-Agent warten sollte, bevor er die weitergeleitete Anfrage stellt.

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
  - : Ein Datum, nach dem erneut versucht werden soll. Siehe den Header {{HTTPHeader("Date")}} für weitere Details zum HTTP-Datumsformat.
- \<delay-seconds>
  - : Eine nicht-negative Dezimalzahl, die die Sekunden angibt, die nach Erhalt der Antwort verzögert werden sollen.

## Beispiele

### Umgang mit geplanter Ausfallzeit

Die Unterstützung für den `Retry-After` Header ist sowohl bei Clients als auch bei Servern noch uneinheitlich. Einige Crawler und Spider, wie der Googlebot, respektieren jedoch den `Retry-After` Header. Es ist nützlich, ihn zusammen mit einer {{HTTPStatus(503)}} (Dienst nicht verfügbar) Antwort zu senden, damit Suchmaschinen Ihre Seite weiterhin indexieren, wenn die Ausfallzeit vorbei ist.

```http
Retry-After: Wed, 21 Oct 2015 07:28:00 GMT
Retry-After: 120
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Google Webmaster-Blog: How to deal with planned site downtime](https://webmasters.googleblog.com/2011/01/how-to-deal-with-planned-site-downtime.html)
- {{HTTPStatus(503)}} (Dienst nicht verfügbar)
- {{HTTPStatus(301)}} (Dauerhaft verschoben)
