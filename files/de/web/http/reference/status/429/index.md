---
title: 429 Too Many Requests
slug: Web/HTTP/Reference/Status/429
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP **`429 Too Many Requests`** [Client-Fehlerantwortstatus](/de/docs/Web/HTTP/Reference/Status#client_error_responses)-Code zeigt an, dass der Client zu viele Anfragen in einem bestimmten Zeitraum gesendet hat. Dieser Mechanismus, der den Client auffordert, die Rate der Anfragen zu verlangsamen, wird allgemein als "{{Glossary("rate_limit", "Rate Limiting")}}" bezeichnet.

Ein {{HTTPHeader("Retry-After")}}-Header kann in diese Antwort aufgenommen werden, um anzugeben, wie lange ein Client warten sollte, bevor er die Anfrage erneut stellt.

Die Implementierungen von Rate Limiting variieren; Einschränkungen können serverweit oder pro Ressource sein. Typischerweise basieren Rate-Limiting-Einschränkungen auf der IP-Adresse eines Clients, können jedoch spezifisch für Benutzer oder autorisierte Anwendungen sein, wenn Anfragen authentifiziert sind oder ein {{Glossary("cookie", "Cookie")}} enthalten.

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

In diesem Beispiel ist ein serverweites Rate Limiting aktiv, wenn ein Client einen festgelegten Schwellenwert von Anfragen pro Minute überschreitet. Eine 429-Antwort wird mit einem {{HTTPHeader("Retry-After")}}-Header zurückgegeben, der anzeigt, dass Anfragen für diesen Client nach 60 Minuten wieder erlaubt sind:

```http
HTTP/1.1 429 Too Many Requests
Content-Type: text/html
Retry-After: 3600

<html lang="en-US">
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
- Python-Lösung: [Anleitung zur Vermeidung von HTTP-Fehler 429 in Python](https://stackoverflow.com/questions/22786068/how-to-avoid-http-error-429-too-many-requests-python)
