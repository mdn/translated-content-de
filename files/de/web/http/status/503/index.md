---
title: 503 Service Unavailable
slug: Web/HTTP/Status/503
l10n:
  sourceCommit: f584f1b27f9f3b78c95122c560f5135866a87eb0
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`503 Service Unavailable`** [Serverfehlerantwort](/de/docs/Web/HTTP/Status#server_error_responses) zeigt an, dass der Server nicht bereit ist, die Anfrage zu bearbeiten.

Häufige Ursachen sind, dass ein Server wegen Wartungsarbeiten nicht verfügbar ist oder überlastet ist. Während Wartungsarbeiten können Serveradministratoren den gesamten Verkehr vorübergehend auf eine `503`-Seite umleiten, oder dies kann automatisch während Software-Updates geschehen. Bei Überlastung lehnen einige serverseitige Anwendungen Anfragen mit dem Status `503` ab, wenn Ressourcenschwellen wie Speicher, CPU oder Verbindungs-Pool-Grenzen erreicht sind. Das Ablehnen eingehender Anfragen erzeugt einen Rückstau, der verhindert, dass die Rechenressourcen des Servers erschöpft werden, um schwerwiegendere Ausfälle zu vermeiden. Wenn Anfragen von bestimmten Clients aufgrund von [Ratenbegrenzung](/de/docs/Glossary/Rate_limit) eingeschränkt werden, ist die geeignete Antwort {{HTTPStatus("429", "429 Too Many Requests")}}.

Diese Antwort sollte für temporäre Bedingungen verwendet werden und der {{HTTPHeader("Retry-After")}} HTTP-Header sollte nach Möglichkeit die geschätzte Zeit für die Wiederherstellung des Dienstes enthalten.

Eine benutzerfreundliche Seite, die das Problem erklärt, sollte zusammen mit dieser Antwort gesendet werden.

> [!NOTE]
> Caching-bezogene Header, die mit dieser Antwort gesendet werden, erfordern besondere Aufmerksamkeit; ein `503` zeigt ein temporäres Problem an und Antworten sollten in der Regel nicht zwischengespeichert werden, da Clients veraltete Fehlerseiten erhalten könnten, nachdem eine Korrektur erfolgt ist.

## Status

```http
503 Service Unavailable
```

## Beispiele

### 503 Serverfehlerantwort

Die folgende Anfrage versucht, eine Webseite abzurufen, erhält jedoch eine `503`-Antwort. Der Antworttext enthält eine Seite, die den Serverstatus beschreibt, mit einem Link zu einer Supportseite für Besucher. Ein Bezeichner ist im Antworttext enthalten, um eine Methode zu veranschaulichen, die den Serveradministratoren helfen kann, die Ursache des Problems einzugrenzen:

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
