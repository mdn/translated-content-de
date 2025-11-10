---
title: 410 Gone
slug: Web/HTTP/Reference/Status/410
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-Statuscode **`410 Gone`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) zeigt an, dass die Zielressource auf dem Ursprungsserver nicht mehr verfügbar ist und dass dieser Zustand wahrscheinlich dauerhaft ist. Eine 410-Antwort ist standardmäßig zwischenspeicherbar.

Clients sollten Anfragen für Ressourcen, die eine 410-Antwort zurückgeben, nicht wiederholen, und Website-Besitzer sollten Links, die diesen Code zurückgeben, entfernen oder ersetzen. Wenn Serverbetreiber nicht wissen, ob dieser Zustand vorübergehend oder dauerhaft ist, sollte stattdessen ein {{HTTPStatus(404)}}-Statuscode verwendet werden.

## Status

```http
410 Gone
```

## Beispiele

### Abrufen einer veralteten Ressource

Die folgende `GET`-Anfrage gilt für eine Seite mit Werbeinhalten, die nicht mehr gültig sind:

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
