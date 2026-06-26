---
title: 429 Too Many Requests
slug: Web/HTTP/Reference/Status/429
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

Der HTTP-Statuscode **`429 Too Many Requests`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) zeigt an, dass der Client zu viele Anfragen innerhalb eines bestimmten Zeitraums gesendet hat. Dieser Mechanismus, bei dem der Client gebeten wird, die Anfragerate zu verlangsamen, wird allgemein als "{{Glossary("rate_limit", "Rate-Limiting")}}" bezeichnet.

Ein {{HTTPHeader("Retry-After")}}-Header kann in dieser Antwort enthalten sein, um anzugeben, wie lange ein Client warten sollte, bevor die Anfrage erneut gesendet wird.

Die Implementierungen des Rate-Limitings variieren; Einschränkungen können serverweit oder je nach Ressource gelten. Typischerweise basieren Rate-Limiting-Beschränkungen auf der IP-Adresse des Clients, können jedoch spezifisch für Benutzer oder autorisierte Anwendungen sein, wenn Anfragen authentifiziert werden oder ein {{Glossary("cookie", "Cookie")}} enthalten.

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

In diesem Beispiel ist serverweites Rate-Limiting aktiv, wenn ein Client ein festgelegtes Schwellenwert von Anfragen pro Minute überschreitet. Eine 429-Antwort wird mit einem {{HTTPHeader("Retry-After")}}-Header zurückgegeben, der angibt, dass Anfragen für diesen Client nach 3600 Sekunden (60 Minuten) wieder erlaubt sein werden:

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
- Python-Lösung: [Wie man HTTP-Fehler 429 in Python vermeidet](https://stackoverflow.com/questions/22786068/how-to-avoid-http-error-429-too-many-requests-python)
