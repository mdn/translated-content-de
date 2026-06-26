---
title: 503 Service Unavailable
slug: Web/HTTP/Reference/Status/503
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

Der HTTP-Statuscode **`503 Service Unavailable`** [Serverfehlerantwort](/de/docs/Web/HTTP/Reference/Status#server_error_responses) zeigt an, dass der Server nicht bereit ist, die Anfrage zu bearbeiten.

Häufige Ursachen sind, dass ein Server wegen Wartung nicht erreichbar ist oder überlastet ist. Während der Wartung können Serveradministratoren vorübergehend den gesamten Datenverkehr auf eine `503`-Seite umleiten, oder dies kann automatisch während Software-Updates geschehen. Bei Überlastung werden einige serverseitige Anwendungen Anfragen mit einem `503`-Status ablehnen, wenn Ressourcen-Schwellenwerte wie Speicher, CPU oder Verbindungs-Pool-Limits erreicht sind. Das Ablehnen eingehender Anfragen erzeugt Druck, der verhindert, dass die Rechenressourcen des Servers erschöpft werden, und vermeidet schwerwiegendere Ausfälle. Wenn Anfragen bestimmter Clients aufgrund von {{Glossary("Rate_limit", "Rate Limiting")}} eingeschränkt werden, ist die passende Antwort {{HTTPStatus("429", "429 Too Many Requests")}}.

Diese Antwort sollte für temporäre Bedingungen verwendet werden, und der HTTP-Header {{HTTPHeader("Retry-After")}} sollte, sofern möglich, die geschätzte Zeit für die Wiederherstellung des Dienstes enthalten.

Eine benutzerfreundliche Seite, die das Problem erklärt, sollte zusammen mit dieser Antwort gesendet werden.

> [!NOTE]
> Caching-bezogene Header, die zusammen mit dieser Antwort gesendet werden, erfordern besondere Beachtung; ein `503` zeigt ein temporäres Problem an und Antworten sollten normalerweise nicht zwischengespeichert werden, da Clients nach einem Fix veraltete Fehlerseiten erhalten könnten.

## Status

```http
503 Service Unavailable
```

## Beispiele

### 503 Serverfehlerantwort

Die folgende Anfrage versucht, eine Webseite abzurufen, erhält jedoch eine `503`-Antwort. Der Antwortinhalt enthält eine Seite, die den Serverzustand beschreibt, mit einem Link zu einer Support-Seite für Besucher. Ein Bezeichner ist in der Antwort enthalten, um ein Verfahren zu veranschaulichen, das Serveradministratoren dabei helfen kann, die Ursache des Problems einzugrenzen:

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
