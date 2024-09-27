---
title: 500 Internal Server Error
slug: Web/HTTP/Status/500
l10n:
  sourceCommit: f584f1b27f9f3b78c95122c560f5135866a87eb0
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`500 Internal Server Error`** [Server-Fehlerantwort](/de/docs/Web/HTTP/Status#server_error_responses) zeigt an, dass der Server auf ein unerwartetes Problem gestoßen ist, das ihn daran gehindert hat, die Anfrage zu erfüllen.
Dieser Fehler ist eine allgemeine "Auffang"-Antwort auf Serverprobleme und zeigt an, dass der Server keinen passenderen [5XX-Fehler](/de/docs/Web/HTTP/Status#server_error_responses) finden kann, um darauf zu antworten.

Wenn Sie als Besucher `500`-Fehler auf einer Webseite sehen, erfordern diese Probleme eine Untersuchung durch die Serverbesitzer oder -administratoren.
Es gibt viele mögliche Ursachen für `500`-Fehler, einschließlich: unsachgemäßer Serverkonfiguration, Speichererschöpfungsprobleme (OOM), unbehandelte Ausnahmen, unsachgemäße Dateiberechtigungen oder andere komplexe Faktoren.
Serveradministratoren können vorausschauend das Auftreten von Fehlerantworten des Servers, wie den `500`-Statuscode, mit Details zu den auslösenden Anfragen protokollieren, um die Stabilität eines Dienstes in der Zukunft zu verbessern.

## Status

```http
500 Internal Server Error
```

## Beispiele

### 500 Server-Fehlerantwort

Die folgende Anfrage versucht, eine Webseite abzurufen, erhält aber stattdessen eine 500-Antwort.
Der Antwortinhalt enthält eine Seite, die den Serverstatus beschreibt, mit einem Link zu einer Support-Seite für Besucher.
Ein Bezeichner ist im Antwortinhalt enthalten, um eine Methode zu veranschaulichen, die Serveradministratoren helfen kann, die Grundursache des Problems einzugrenzen:

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

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
