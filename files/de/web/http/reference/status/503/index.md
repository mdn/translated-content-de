---
title: 503 Service Unavailable
slug: Web/HTTP/Reference/Status/503
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-Statuscode **`503 Dienst nicht verfügbar`** [Serverfehlerantwort](/de/docs/Web/HTTP/Reference/Status#server_error_responses) zeigt an, dass der Server nicht bereit ist, die Anfrage zu bearbeiten.

Häufige Ursachen sind, dass ein Server wegen Wartungsarbeiten nicht verfügbar oder überlastet ist. Während der Wartung können Serveradministratoren vorübergehend den gesamten Datenverkehr auf eine `503`-Seite umleiten, oder dies kann während Software-Updates automatisch geschehen. Bei Überlastung lehnen einige serverseitige Anwendungen Anfragen mit einem `503`-Status ab, wenn Ressourcenschwellenwerte wie Speicher, CPU oder Verbindungspoollimits erreicht sind. Durch das Ablehnen eingehender Anfragen wird ein Druckaufbau vermieden, der verhindert, dass die Rechenressourcen des Servers erschöpft werden, um schwerwiegendere Ausfälle zu vermeiden. Wenn Anfragen von bestimmten Clients aufgrund eines {{Glossary("Rate_limit", "Rate Limitings")}} eingeschränkt werden, ist die passende Antwort {{HTTPStatus("429", "429 Too Many Requests")}}.

Diese Antwort sollte für vorübergehende Bedingungen verwendet werden, und der HTTP-Header {{HTTPHeader("Retry-After")}} sollte, falls möglich, die geschätzte Zeit für die Wiederherstellung des Dienstes enthalten.

Eine benutzerfreundliche Seite, die das Problem erklärt, sollte zusammen mit dieser Antwort gesendet werden.

> [!NOTE]
> Die mit dieser Antwort gesendeten, cachingbezogenen Header erfordern besondere Aufmerksamkeit; ein `503` zeigt ein vorübergehendes Problem an und die Antworten sollten in der Regel nicht zwischengespeichert werden, da Clients nach einer Behebung veraltete Fehlerseiten erhalten könnten.

## Status

```http
503 Service Unavailable
```

## Beispiele

### 503 Serverfehlerantwort

Die folgende Anfrage versucht, eine Webseite abzurufen, erhält jedoch eine `503`-Antwort. Der Antworttext enthält eine Seite, die den Serverzustand beschreibt und einen Link zu einer Supportseite für Besucher bietet. Ein Bezeichner ist im Antworttext enthalten, um eine Methode zu veranschaulichen, die Serveradministratoren helfen könnte, die Ursache des Problems einzugrenzen:

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

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- {{HTTPHeader("Retry-After")}}
