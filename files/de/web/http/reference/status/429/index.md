---
title: 429 Too Many Requests
slug: Web/HTTP/Reference/Status/429
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`429 Too Many Requests`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) zeigt an, dass der Client zu viele Anfragen in einem bestimmten Zeitraum gesendet hat.
Dieser Mechanismus, bei dem der Client gebeten wird, die Anfragerate zu verlangsamen, wird üblicherweise als "{{Glossary("rate_limit", "Rate-Limiting")}}" bezeichnet.

Ein {{HTTPHeader("Retry-After")}}-Header kann in diese Antwort aufgenommen werden, um anzugeben, wie lange der Client warten soll, bevor er die Anfrage erneut stellt.

Implementierungen von Rate-Limiting variieren; Beschränkungen können serverweit oder pro Ressource gelten.
Typischerweise basieren Rate-Limiting-Beschränkungen auf der IP des Clients, können jedoch spezifisch für Benutzer oder autorisierte Anwendungen sein, wenn Anfragen authentifiziert oder Cookies enthalten.

## Status

```http
429 Too Many Requests
```

## Beispiele

### Antwort mit Retry-After-Header

Die folgende Anfrage wird von einem falsch konfigurierten Client wiederholt in einer Schleife gesendet:

```http
GET /reports/mdn HTTP/1.1
Host: example.com
```

In diesem Beispiel ist ein serverweites Rate-Limiting aktiv, wenn ein Client einen festgelegten Schwellenwert von Anfragen pro Minute überschreitet.
Eine 429-Antwort wird mit einem {{HTTPHeader("Retry-After")}}-Header zurückgegeben, der anzeigt, dass Anfragen für diesen Client in 60 Minuten wieder erlaubt sein werden:

```http
HTTP/1.1 429 Too Many Requests
Content-Type: text/html
Retry-After: 3600

<html>
  <head>
    <title>Too Many Requests</title>
  </head>
  <body>
    <h1>Too Many Requests</h1>
    <p>You're doing that too often! Try again later.</p>
  </body>
</html>
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- {{HTTPHeader("Retry-After")}}
- Python-Lösung: [Anleitung zur Vermeidung des HTTP-Fehlers 429 in Python](https://stackoverflow.com/questions/22786068/how-to-avoid-http-error-429-too-many-requests-python)
