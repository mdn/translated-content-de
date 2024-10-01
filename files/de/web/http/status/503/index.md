---
title: 503 Service Unavailable
slug: Web/HTTP/Status/503
l10n:
  sourceCommit: f584f1b27f9f3b78c95122c560f5135866a87eb0
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`503 Service Unavailable`** [Serverfehlerantwort](/de/docs/Web/HTTP/Status#server_error_responses) zeigt an, dass der Server nicht bereit ist, die Anfrage zu bearbeiten.

Häufige Ursachen sind, dass ein Server wegen Wartungsarbeiten nicht erreichbar ist oder überlastet ist.
Während der Wartung können Serveradministratoren den gesamten Verkehr vorübergehend auf eine `503`-Seite umleiten, oder dies kann automatisch während Software-Updates geschehen.
In Fällen von Überlastung werden einige serverseitige Anwendungen Anfragen mit einem `503`-Status ablehnen, wenn Ressourcen-Schwellenwerte wie Speicher, CPU oder Verbindungspool-Grenzen erreicht sind.
Das Ablehnen eingehender Anfragen erzeugt Rückstau, der verhindert, dass die Rechenressourcen des Servers erschöpft werden, wodurch schwerwiegendere Ausfälle vermieden werden.
Wenn Anfragen von bestimmten Clients aufgrund von {{Glossary("Rate_limit", "Rate Limiting")}} eingeschränkt werden, ist die passende Antwort {{HTTPStatus("429", "429 Too Many Requests")}}.

Diese Antwort sollte für temporäre Bedingungen verwendet werden, und der HTTP-Header {{HTTPHeader("Retry-After")}} sollte, falls möglich, die geschätzte Zeit für die Wiederherstellung des Dienstes enthalten.

Eine benutzerfreundliche Seite, die das Problem erklärt, sollte zusammen mit dieser Antwort gesendet werden.

> [!NOTE]
> Bei dieser Antwort gesendete caching-bezogene Header erfordern besondere Aufmerksamkeit; ein `503` weist auf ein temporäres Problem hin und Antworten sollten in der Regel nicht zwischengespeichert werden, da Clients möglicherweise veraltete Fehlerseiten erhalten, nachdem ein Problem behoben wurde.

## Status

```http
503 Service Unavailable
```

## Beispiele

### 503 Serverfehlerantwort

Die folgende Anfrage versucht, eine Webseite abzurufen, erhält jedoch eine `503`-Antwort.
Der Antwortkörper enthält eine Seite, die den Serverzustand beschreibt und einen Link zu einer Supportseite für Besucher bereitstellt.
Der Antwortkörper enthält einen Bezeichner zur Veranschaulichung einer Methode, die Serveradministratoren helfen kann, die Grundursache des Problems einzugrenzen:

```http
GET /highlights HTTP/1.1
Host: example.com
User-Agent: curl/8.6.0
Accept: */*
```

```http
HTTP/1.1 503 Service Unavailable
Content-Type: text/html;
Content-Length: 123

<!doctype html>
<html lang="en">
<head>
  <title>503 Service Unavailable</title>
</head>
<body>
  <h1>503 Service Unavailable</h1>
  <p>The server was unable to complete your request. Please try again later.</p>
  <p>If this problem persists, please <a href="https://example.com/support">contact support</a>.</p>
  <p>Server logs contain details of this error with request ID: ABC-123.</p>
</body>
</html>
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- {{HTTPHeader("Retry-After")}}
