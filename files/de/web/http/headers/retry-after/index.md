---
title: Retry-After
slug: Web/HTTP/Headers/Retry-After
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der **`Retry-After`** Antwort-HTTP-Header gibt an, wie lange der User-Agent warten soll, bevor er eine Anschlussanfrage stellt. Es gibt drei Hauptfälle, in denen dieser Header verwendet wird:

- Wenn er mit einer {{HTTPStatus(503)}} (Service Unavailable) Antwort gesendet wird, gibt er an, wie lange der Dienst voraussichtlich nicht verfügbar sein wird.
- Wenn er mit einer {{HTTPStatus(429)}} (Too Many Requests) Antwort gesendet wird, gibt er an, wie lange gewartet werden soll, bevor eine neue Anfrage gestellt wird.
- Wenn er mit einer Umleitungsantwort wie {{HTTPStatus(301)}} (Moved Permanently) gesendet wird, gibt er die minimale Zeit an, die der User-Agent gebeten wird zu warten, bevor er die umgeleitete Anfrage stellt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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

- `<http-date>`
  - : Ein Datum, nach dem erneut versucht werden soll. Siehe den {{HTTPHeader("Date")}} Header für weitere Details zum HTTP-Datumsformat.
- `<delay-seconds>`
  - : Eine nicht-negative Dezimalzahl, die die Sekunden angibt, die nach Erhalt der Antwort zu warten sind.

## Beispiele

### Umgang mit geplanten Ausfallzeiten

Die Unterstützung für den `Retry-After` Header sowohl auf Clients als auch auf Servern ist immer noch inkonsistent. Einige Crawler und Spinnen, wie der Googlebot, beachten jedoch den `Retry-After` Header. Es ist nützlich, ihn zusammen mit einer {{HTTPStatus(503)}} (Service Unavailable) Antwort zu senden, damit Suchmaschinen Ihre Website weiter indexieren, wenn die Ausfallzeit vorüber ist.

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
