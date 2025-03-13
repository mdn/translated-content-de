---
title: Retry-After
slug: Web/HTTP/Reference/Headers/Retry-After
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-**`Retry-After`**-{{Glossary("response_header", "Antwort-Header")}} gibt an, wie lange der Benutzeragent warten sollte, bevor eine nachfolgende Anfrage gestellt wird. Es gibt drei Hauptfälle, in denen dieser Header verwendet wird:

- In einer {{HTTPStatus("503", "503 Service Unavailable")}}-Antwort gibt er an, wie lange der Dienst voraussichtlich nicht verfügbar sein wird.
- In einer {{HTTPStatus("429", "429 Too Many Requests")}}-Antwort gibt er an, wie lange gewartet werden sollte, bevor eine neue Anfrage gestellt wird.
- In einer Umleitungsantwort, wie z.B. {{HTTPStatus("301", "301 Moved Permanently")}}, gibt er die Mindestzeit an, die der Benutzeragent warten soll, bevor die umgeleitete Anfrage ausgeführt wird.

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

## Anweisungen

- `<http-date>`
  - : Ein Datum, nach dem die Wiederholung stattfinden soll. Siehe den {{HTTPHeader("Date")}}-Header für mehr Details
    zum HTTP-Datumsformat.
- `<delay-seconds>`
  - : Eine nichtnegative Dezimalzahl, die die Sekunden angibt, um die nach dem Erhalt der Antwort verzögert werden soll.

## Beispiele

### Umgang mit geplanter Ausfallzeit

Die Unterstützung des `Retry-After`-Headers sowohl auf Clients als auch auf Servern ist nach wie vor inkonsistent. Einige Crawler und Spider, wie der Googlebot, beachten jedoch den `Retry-After`-Header. Es ist nützlich, ihn zusammen mit einer `503`-Antwort zu senden, damit Suchmaschinen Ihre Website weiterhin indexieren, wenn die Ausfallzeit vorbei ist.

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
- [Anleitung zum Umgang mit geplanter Website-Ausfallzeit](https://developers.google.com/search/blog/2011/01/how-to-deal-with-planned-site-downtime) auf developers.google.com (2011)
