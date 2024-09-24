---
title: 429 Zu Viele Anfragen
slug: Web/HTTP/Status/429
l10n:
  sourceCommit: 332bbd7d5079f418175e68a13db8c38f4636cee9
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`429 Zu Viele Anfragen`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Status#client_error_responses) zeigt an, dass der Client zu viele Anfragen in einem bestimmten Zeitraum gesendet hat.
Dieser Mechanismus, den Client zu bitten, die Rate der Anfragen zu verlangsamen, wird allgemein als "{{glossary("rate limit", "Rate-Limiting")}}" bezeichnet.

Ein {{HTTPHeader("Retry-After")}}-Header kann in diese Antwort aufgenommen werden, um anzugeben, wie lange ein Client warten sollte, bevor er die Anfrage erneut sendet.

Implementierungen von Rate-Limiting variieren; Einschränkungen können serverweit oder pro Ressource sein.
Typischerweise basieren Rate-Limiting-Einschränkungen auf der IP eines Clients, können aber spezifisch für Benutzer oder autorisierte Anwendungen sein, wenn Anfragen authentifiziert sind oder einen {{Glossary("cookie")}} enthalten.

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

In diesem Beispiel ist serverweites Rate-Limiting aktiv, wenn ein Client einen festgelegten Schwellenwert von Anfragen pro Minute überschreitet.
Eine 429-Antwort wird mit einem {{HTTPHeader("Retry-After")}}-Header zurückgegeben, der angibt, dass Anfragen für diesen Client in 60 Minuten wieder erlaubt sind:

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

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- {{HTTPHeader("Retry-After")}}
- Python-Lösung: [Wie man HTTP-Fehler 429 in Python vermeidet](https://stackoverflow.com/questions/22786068/how-to-avoid-http-error-429-too-many-requests-python)
