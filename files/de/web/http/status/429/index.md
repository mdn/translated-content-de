---
title: 429 Too Many Requests
slug: Web/HTTP/Status/429
l10n:
  sourceCommit: 332bbd7d5079f418175e68a13db8c38f4636cee9
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`429 Too Many Requests`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Status#client_error_responses) zeigt an, dass der Client zu viele Anfragen in einem bestimmten Zeitraum gesendet hat. Dieser Mechanismus, der den Client auffordert, die Rate der Anfragen zu verlangsamen, wird allgemein als "[Rate Limiting](/de/docs/Glossary/rate_limit)" bezeichnet.

Ein {{HTTPHeader("Retry-After")}}-Header kann in diese Antwort aufgenommen werden, um zu zeigen, wie lange ein Client warten sollte, bevor die Anfrage erneut gestellt wird.

Implementierungen von Rate Limiting variieren; Einschränkungen können serverweit oder pro Ressource sein. Typischerweise basieren Rate-Limiting-Einschränkungen auf der IP des Clients, können jedoch auch spezifisch für Benutzer oder autorisierte Anwendungen sein, wenn Anfragen authentifiziert sind oder ein [Cookie](/de/docs/Glossary/cookie) enthalten.

## Status

```http
429 Too Many Requests
```

## Beispiele

### Antwort mit Retry-After-Header

Die folgende Anfrage wird wiederholt in einer Schleife von einem falsch konfigurierten Client gesendet:

```http
GET /reports/mdn HTTP/1.1
Host: example.com
```

In diesem Beispiel ist ein serverweites Rate Limiting aktiv, wenn ein Client einen festgelegten Schwellenwert von Anfragen pro Minute überschreitet. Eine 429-Antwort wird mit einem {{HTTPHeader("Retry-After")}}-Header zurückgegeben, der anzeigt, dass Anfragen für diesen Client in 60 Minuten wieder erlaubt sind:

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

- [HTTP-Antwortstatus-Codes](/de/docs/Web/HTTP/Status)
- {{HTTPHeader("Retry-After")}}
- Python-Lösung: [How to avoid HTTP error 429 python](https://stackoverflow.com/questions/22786068/how-to-avoid-http-error-429-too-many-requests-python)
