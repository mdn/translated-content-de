---
title: 429 Too Many Requests
slug: Web/HTTP/Status/429
l10n:
  sourceCommit: 332bbd7d5079f418175e68a13db8c38f4636cee9
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`429 Too Many Requests`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Status#client_error_responses) zeigt an, dass der Client zu viele Anfragen in einem bestimmten Zeitraum gesendet hat. Dieser Mechanismus, der den Client auffordert, die Anzahl der Anfragen zu reduzieren, wird allgemein als "{{Glossary("rate_limit", "Rate Limiting")}}" bezeichnet.

Ein {{HTTPHeader("Retry-After")}}-Header kann in dieser Antwort enthalten sein, um anzugeben, wie lange der Client warten soll, bevor er die Anfrage erneut stellt.

Implementierungen von Rate Limiting variieren; Beschränkungen können serverweit oder pro Ressource wirksam sein. Typischerweise basieren Rate-Limiting-Beschränkungen auf der IP-Adresse des Clients, können aber auch spezifisch für Benutzer oder autorisierte Anwendungen sein, wenn Anfragen authentifiziert sind oder ein {{Glossary("cookie", "Cookie")}} enthalten.

## Status

```http
429 Too Many Requests
```

## Beispiele

### Antwort mit Retry-After-Header

Die folgende Anfrage wird fälschlicherweise in einer Schleife von einem falsch konfigurierten Client gesendet:

```http
GET /reports/mdn HTTP/1.1
Host: example.com
```

In diesem Beispiel ist serverweites Rate Limiting aktiv, wenn ein Client einen festgelegten Schwellenwert von Anfragen pro Minute überschreitet. Eine 429-Antwort wird mit einem {{HTTPHeader("Retry-After")}}-Header zurückgegeben, der anzeigt, dass Anfragen für diesen Client in 60 Minuten wieder erlaubt sind:

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
- Python-Lösung: [Anleitung zur Vermeidung des HTTP-Fehlers 429 in Python](https://stackoverflow.com/questions/22786068/how-to-avoid-http-error-429-too-many-requests-python)
