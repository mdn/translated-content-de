---
title: 500 Interner Serverfehler
slug: Web/HTTP/Status/500
l10n:
  sourceCommit: f584f1b27f9f3b78c95122c560f5135866a87eb0
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`500 Internal Server Error`** [Serverfehlerantwort](/de/docs/Web/HTTP/Status#server_error_responses) zeigt an, dass der Server auf eine unerwartete Bedingung gestoßen ist, die ihn daran hinderte, die Anfrage auszuführen. Dieser Fehler ist eine generische "Allgemeinlösung" für Serverprobleme, die darauf hinweist, dass der Server keinen passenderen [5XX Fehler](/de/docs/Web/HTTP/Status#server_error_responses) finden kann, um darauf zu antworten.

Wenn Sie als Besucher auf einer Webseite `500`-Fehler sehen, erfordern diese Probleme eine Untersuchung durch Serverbesitzer oder Administratoren. Es gibt viele mögliche Ursachen für `500`-Fehler, einschließlich: unsachgemäßer Serverkonfiguration, Speicherplatzmangel (OOM-Probleme), nicht behandelte Ausnahmen, unzureichende Dateiberechtigungen oder andere komplexe Faktoren. Serveradministratoren können proaktiv Vorkommen von Serverfehlerantworten wie dem `500`-Statuscode protokollieren, einschließlich Details über die auslösenden Anfragen, um die Stabilität eines Dienstes in Zukunft zu verbessern.

## Status

```http
500 Internal Server Error
```

## Beispiele

### 500 Serverfehlerantwort

Die folgende Anfrage versucht, eine Webseite abzurufen, erhält jedoch eine 500-Antwort. Der Antworttext enthält eine Seite, die den Serverzustand beschreibt, mit einem Link zu einer Support-Seite für Besucher. Ein Identifikator ist im Antworttext enthalten, um eine Methode zu veranschaulichen, die Serveradministratoren dabei helfen kann, die Ursache des Problems einzugrenzen:

```http
GET /highlights HTTP/1.1
Host: example.com
User-Agent: curl/8.6.0
Accept: */*
```

```http
HTTP/1.1 500 Internal Server Error
Content-Type: text/html;
Content-Length: 123

<!doctype html>
<html lang="en">
<head>
  <title>500 Internal Server Error</title>
</head>
<body>
  <h1>Internal Server Error</h1>
  <p>The server was unable to complete your request. Please try again later.</p>
  <p>If this problem persists, please <a href="https://example.com/support">contact support</a>.</p>
  <p>Server logs contain details of this error with request ID: ABC-123.</p>
</body>
</html>
```

## Specifications

{{Specifications}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)