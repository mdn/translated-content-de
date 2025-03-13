---
title: 503 Service Unavailable
slug: Web/HTTP/Reference/Status/503
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`503 Service Unavailable`** für [Serverfehlerantworten](/de/docs/Web/HTTP/Reference/Status#server_error_responses) zeigt an, dass der Server nicht bereit ist, die Anfrage zu bearbeiten.

Häufige Ursachen sind, dass ein Server wegen Wartungsarbeiten nicht erreichbar ist oder überlastet ist. Während der Wartung können Serveradministratoren temporär den gesamten Datenverkehr auf eine `503`-Seite umleiten, oder dies kann automatisch während Software-Updates geschehen. In Überlastungssituationen werden einige serverseitige Anwendungen Anfragen mit einem `503`-Status ablehnen, wenn Ressourcengrenzen wie Arbeitsspeicher, CPU oder Verbindungs-Pool-Limits erreicht werden. Das Verwerfen eingehender Anfragen erzeugt einen Rückstau, der verhindert, dass die Rechenressourcen des Servers erschöpft werden, und so schwerwiegendere Ausfälle vermieden werden. Wenn Anfragen von bestimmten Clients aufgrund von {{Glossary("Rate_limit", "Rate Limiting")}} eingeschränkt werden, sollte die entsprechende Antwort {{HTTPStatus("429", "429 Too Many Requests")}} sein.

Diese Antwort sollte für vorübergehende Bedingungen verwendet werden und der HTTP-Header {{HTTPHeader("Retry-After")}} sollte, wenn möglich, die geschätzte Zeit für die Wiederherstellung des Dienstes enthalten.

Eine benutzerfreundliche Seite, die das Problem erklärt, sollte zusammen mit dieser Antwort gesendet werden.

> [!NOTE]
> Caching-bezogene Header, die mit dieser Antwort gesendet werden, erfordern besondere Aufmerksamkeit; ein `503` zeigt ein vorübergehendes Problem an und Antworten sollten normalerweise nicht zwischengespeichert werden, da Clients veraltete Fehlerseiten erhalten könnten, nachdem eine Behebung implementiert wurde.

## Status

```http
503 Service Unavailable
```

## Beispiele

### 503 Serverfehlerantwort

Die folgende Anfrage versucht, eine Webseite abzurufen, erhält jedoch eine `503`-Antwort. Der Antworttext enthält eine Seite, die den Serverstatus beschreibt, mit einem Link zu einer Support-Seite für Besucher. Ein Identifikator ist im Antworttext enthalten, um eine Methode zu veranschaulichen, die Serveradministratoren helfen kann, die Ursache des Problems einzugrenzen:

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

- [HTTP-Statuscodes für Antworten](/de/docs/Web/HTTP/Reference/Status)
- {{HTTPHeader("Retry-After")}}
