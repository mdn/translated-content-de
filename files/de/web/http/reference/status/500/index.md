---
title: 500 Internal Server Error
slug: Web/HTTP/Reference/Status/500
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

Der HTTP-Statuscode **`500 Internal Server Error`** [Serverfehlerantwort](/de/docs/Web/HTTP/Reference/Status#server_error_responses) zeigt an, dass der Server auf ein unerwartetes Problem gestoßen ist, das ihn daran hindert, die Anfrage zu erfüllen. Dieser Fehler ist eine generische "Catch-All"-Reaktion auf Serverprobleme, was darauf hinweist, dass der Server keinen spezifischeren [5XX-Fehler](/de/docs/Web/HTTP/Reference/Status#server_error_responses) finden kann, um darauf zu antworten.

Wenn Sie als Besucher `500`-Fehler auf einer Webseite sehen, erfordern diese Probleme eine Untersuchung durch Serverbesitzer oder Administratoren. Es gibt viele mögliche Ursachen für `500`-Fehler, einschließlich: falsche Serverkonfiguration, Speicherplatzprobleme (OOM), nicht behandelte Ausnahmen, falsche Dateiberechtigungen oder andere komplexe Faktoren. Serveradministratoren können proaktiv das Auftreten von Serverfehlerantworten wie dem `500`-Statuscode protokollieren, mit Details zu den auslösenden Anfragen, um die Stabilität eines Dienstes in der Zukunft zu verbessern.

## Status

```http
500 Internal Server Error
```

## Beispiele

### 500 Serverfehlerantwort

Die folgende Anfrage versucht, eine Webseite abzurufen, erhält aber eine 500-Antwort zurück. Der Antworttext enthält eine Seite, die den Serverzustand beschreibt, mit einem Link zu einer Unterstützungsseite für Besucher. Ein Identifikator ist im Antworttext enthalten, um eine Methode zu veranschaulichen, die Serveradministratoren helfen kann, die Ursache des Problems einzugrenzen:

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

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
