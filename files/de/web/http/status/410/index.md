---
title: 410 Verschwunden
slug: Web/HTTP/Status/410
l10n:
  sourceCommit: ba53fe04589c36a2210d7549c003f3016093ef8e
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`410 Gone`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Status#client_error_responses) zeigt an, dass die Zielressource auf dem Ursprungsserver nicht mehr verfügbar ist und dass dieser Zustand wahrscheinlich dauerhaft ist. Eine 410-Antwort kann standardmäßig zwischengespeichert werden.

Clients sollten keine Anfragen für Ressourcen wiederholen, die eine 410-Antwort zurückgeben, und Website-Besitzer sollten Links entfernen oder ersetzen, die diesen Code zurückgeben. Wenn Serverbesitzer nicht wissen, ob dieser Zustand vorübergehend oder dauerhaft ist, sollte stattdessen ein {{HTTPStatus(404)}}-Statuscode verwendet werden.

## Status

```http
410 Gone
```

## Beispiele

### Anfordern einer veralteten Ressource

Die folgende `GET`-Anfrage bezieht sich auf eine Seite mit Werbeinhalten, die nicht mehr gültig ist:

```http
GET /promotions/summer-2023 HTTP/1.1
Host: example.com
```

```http
HTTP/1.1 410 Gone
Content-Type: text/html
Content-Length: 212

<html>
  <head>
    <title>Promotion expired</title>
  </head>
  <body>
    <h1>Promotion expired</h1>
    <p>Promotion no longer active! See <a href="/offers">current offers</a>.</p>
  </body>
</html>
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- {{HTTPStatus(404)}}
- [410 gone](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#410)