---
title: Retry-After
slug: Web/HTTP/Headers/Retry-After
l10n:
  sourceCommit: 6c32e8b21a39b1b8d3db7a194d2350e0f8218b64
---

{{HTTPSidebar}}

Der HTTP **`Retry-After`** {{Glossary("response_header", "Antwort-Header")}} gibt an, wie lange der Benutzeragent warten soll, bevor er eine Folgeanfrage stellt.
Es gibt drei Hauptfälle, in denen dieser Header verwendet wird:

- In einer {{HTTPStatus("503", "503 Service Unavailable")}}-Antwort zeigt dieser an, wie lange der Dienst voraussichtlich nicht verfügbar sein wird.
- In einer {{HTTPStatus("429", "429 Too Many Requests")}}-Antwort gibt dieser an, wie lange gewartet werden soll, bevor eine neue Anfrage gestellt wird.
- In einer Weiterleitungsantwort, wie z.B. {{HTTPStatus("301", "301 Moved Permanently")}}, zeigt dieser die minimale Wartezeit an, die der Benutzeragent einhalten soll, bevor die umgeleitete Anfrage gesendet wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
  - : Ein Datum, nach dem ein erneuter Versuch erfolgen soll. Weitere Details zum HTTP-Datumsformat finden Sie im {{HTTPHeader("Date")}}-Header.
- `<delay-seconds>`
  - : Eine nicht-negative dezimale Ganzzahl, die die Sekunden angibt, die nach Erhalt der Antwort verzögert werden sollen.

## Beispiele

### Umgang mit geplanter Ausfallzeit

Die Unterstützung für den `Retry-After`-Header bei sowohl Clients als auch Servern ist noch inkonsistent. Einige Crawler und Spider, wie der Googlebot, beachten jedoch den `Retry-After`-Header. Es ist nützlich, ihn mit einer `503`-Antwort zu senden, damit Suchmaschinen Ihre Seite weiterhin indexieren, wenn die Ausfallzeit vorbei ist.

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
