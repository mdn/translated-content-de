---
title: 429 Too Many Requests
slug: Web/HTTP/Reference/Status/429
l10n:
  sourceCommit: d45b7a7d45dac4a0012c138aba7afedc0f9e570c
---

Der HTTP-Statuscode **`429 Too Many Requests`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) zeigt an, dass der Client zu viele Anfragen innerhalb einer bestimmten Zeit gesendet hat.
Dieser Mechanismus, der den Client auffordert, die Anzahl der Anfragen zu reduzieren, wird allgemein als "{{Glossary("rate_limit", "Rate Limiting")}}" bezeichnet.

Ein {{HTTPHeader("Retry-After")}}-Header kann in dieser Antwort enthalten sein, um anzugeben, wie lange ein Client warten sollte, bevor er die Anfrage erneut stellt.

Implementierungen von Rate Limiting variieren; Einschränkungen können serverweit oder pro Ressource sein.
Typischerweise basieren Einschränkungen durch Rate Limiting auf der IP eines Clients, können jedoch spezifisch für Benutzer oder autorisierte Anwendungen sein, wenn Anfragen authentifiziert sind oder ein {{Glossary("cookie", "Cookie")}} enthalten.

## Status

```http
429 Too Many Requests
```

## Beispiele

### Antwort mit Retry-After-Header

Die folgende Anfrage wird von einem falsch konfigurierten Client in einer Schleife wiederholt gesendet:

```http
GET /reports/mdn HTTP/1.1
Host: example.com
```

In diesem Beispiel ist serverweites Rate Limiting aktiv, wenn ein Client einen festgelegten Schwellenwert von Anfragen pro Minute überschreitet.
Eine 429-Antwort wird mit einem {{HTTPHeader("Retry-After")}}-Header zurückgegeben, der angibt, dass Anfragen von diesem Client nach 3600 Sekunden (60 Minuten) wieder erlaubt werden:

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
- Python-Lösung: [How to avoid HTTP error 429 python](https://stackoverflow.com/questions/22786068/how-to-avoid-http-error-429-too-many-requests-python)
