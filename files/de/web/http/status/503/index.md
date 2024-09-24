---
title: 503 Dienst nicht verfügbar
slug: Web/HTTP/Status/503
l10n:
  sourceCommit: f584f1b27f9f3b78c95122c560f5135866a87eb0
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`503 Service Unavailable`** [Serverfehlerantwort](/de/docs/Web/HTTP/Status#server_error_responses) zeigt an, dass der Server nicht bereit ist, die Anfrage zu bearbeiten.

Häufige Ursachen sind, dass ein Server wegen Wartungsarbeiten nicht verfügbar oder überlastet ist. Während Wartungsarbeiten können Serveradministratoren den gesamten Datenverkehr vorübergehend auf eine `503`-Seite umleiten, oder dies passiert automatisch während Softwareaktualisierungen. Bei Überlastung lehnen einige serverseitige Anwendungen Anfragen mit einem `503`-Status ab, wenn Ressourcen-Schwellenwerte wie Speicher, CPU oder Verbindungspool-Grenzen erreicht werden. Das Abweisen eingehender Anfragen erzeugt Gegendruck, der verhindert, dass die Rechenressourcen des Servers erschöpft werden, und schwerwiegendere Fehler vermieden werden. Wenn Anfragen von bestimmten Clients aufgrund von {{Glossary("Rate_limit", "Ratenbegrenzung")}} beschränkt werden, ist die angemessene Antwort {{HTTPStatus("429", "429 Zu viele Anfragen")}}.

Diese Antwort sollte für vorübergehende Bedingungen verwendet werden und der {{HTTPHeader("Retry-After")}} HTTP-Header sollte, wenn möglich, die geschätzte Zeit für die Wiederherstellung des Dienstes enthalten.

Eine benutzerfreundliche Seite, die das Problem erklärt, sollte zusammen mit dieser Antwort gesendet werden.

> [!NOTE]
> Caching-bezogene Header, die mit dieser Antwort gesendet werden, erfordern besondere Aufmerksamkeit; ein `503` weist auf ein vorübergehendes Problem hin und Antworten sollten normalerweise nicht zwischengespeichert werden, da Clients veraltete Fehlerseiten erhalten könnten, nachdem ein Fix bereitgestellt wurde.

## Status

```http
503 Service Unavailable
```

## Beispiele

### 503 Serverfehlerantwort

Die folgende Anfrage versucht, eine Webseite abzurufen, erhält jedoch eine `503`-Antwort. Der Antwortinhalt enthält eine Seite, die den Serverstatus beschreibt, mit einem Link zu einer Supportseite für Besucher. Ein Identifikator ist im Antwortinhalt enthalten, um eine Methode zu veranschaulichen, die den Serveradministratoren helfen kann, die Ursache des Problems einzugrenzen:

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
