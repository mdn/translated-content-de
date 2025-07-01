---
title: 429 Too Many Requests
slug: Web/HTTP/Reference/Status/429
l10n:
  sourceCommit: 693106d7bc9aa28f22a3f234455f5496efd728c4
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`429 Too Many Requests`** [Clientfehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) zeigt an, dass der Client zu viele Anfragen in einer bestimmten Zeit gesendet hat.
Dieser Mechanismus, bei dem der Client gebeten wird, die Anzahl der Anfragen zu verringern, wird allgemein als "{{Glossary("rate_limit", "rate limiting")}}" bezeichnet.

Ein {{HTTPHeader("Retry-After")}}-Header kann in dieser Antwort enthalten sein, um anzugeben, wie lange ein Client warten soll, bevor er die Anfrage erneut stellt.

Die Implementierungen der Ratenbegrenzung variieren; Einschränkungen können serverweit oder pro Ressource gelten.
Typischerweise basieren die Einschränkungen der Ratenbegrenzung auf der IP des Clients, können jedoch auch spezifisch für Benutzer oder autorisierte Anwendungen sein, wenn Anfragen authentifiziert sind oder ein {{Glossary("cookie", "cookie")}} enthalten.

## Status

```http
429 Too Many Requests
```

## Beispiele

### Antwort mit Retry-After-Header

Die folgende Anfrage wird von einem fehlkonfigurierten Client wiederholt in einer Schleife gesendet:

```http
GET /reports/mdn HTTP/1.1
Host: example.com
```

In diesem Beispiel ist eine serverweite Ratenbegrenzung aktiv, wenn ein Client einen festgelegten Schwellenwert von Anfragen pro Minute überschreitet.
Eine 429-Antwort wird zurückgegeben, mit einem {{HTTPHeader("Retry-After")}}-Header, der anzeigt, dass Anfragen für diesen Client in 60 Minuten wieder erlaubt sind:

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
- Python-Lösung: [Anleitung zur Vermeidung des HTTP-Fehlers 429 in Python](https://stackoverflow.com/questions/22786068/how-to-avoid-http-error-429-too-many-requests-python)
