---
title: 410 Gone
slug: Web/HTTP/Reference/Status/410
l10n:
  sourceCommit: 693106d7bc9aa28f22a3f234455f5496efd728c4
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`410 Gone`** der [Client-Fehlerantworten](/de/docs/Web/HTTP/Reference/Status#client_error_responses) zeigt an, dass die Zielressource auf dem Ursprungsserver nicht mehr verfügbar ist und dass dieser Zustand wahrscheinlich dauerhaft ist.
Eine 410-Antwort ist standardmäßig zwischenzuspeichern.

Clients sollten Anfragen für Ressourcen, die eine 410-Antwort zurückgeben, nicht wiederholen, und Website-Betreiber sollten Links entfernen oder ersetzen, die diesen Code zurückgeben.
Wenn Server-Besitzer nicht wissen, ob dieser Zustand vorübergehend oder dauerhaft ist, sollte stattdessen ein {{HTTPStatus(404)}} Statuscode verwendet werden.

## Status

```http
410 Gone
```

## Beispiele

### Anfordern einer veralteten Ressource

Die folgende `GET`-Anfrage bezieht sich auf eine Seite mit nicht mehr gültigen Werbeinhalten:

```http
GET /promotions/summer-2023 HTTP/1.1
Host: example.com
```

```http
HTTP/1.1 410 Gone
Content-Type: text/html
Content-Length: 212

<html lang="en-US">
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

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus(404)}}
- [410 gone](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#410)
