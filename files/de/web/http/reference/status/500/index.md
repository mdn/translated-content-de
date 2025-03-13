---
title: 500 Internal Server Error
slug: Web/HTTP/Reference/Status/500
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`500 Internal Server Error`** [Serverfehler-Antwort](/de/docs/Web/HTTP/Reference/Status#server_error_responses) zeigt an, dass der Server auf ein unerwartetes Problem gestoßen ist, das ihn daran hindert, die Anfrage zu erfüllen.
Dieser Fehler ist eine generische "Catch-All"-Antwort auf Serverprobleme und zeigt an, dass der Server keine passendere [5XX-Fehler](/de/docs/Web/HTTP/Reference/Status#server_error_responses) finden kann, um darauf zu antworten.

Wenn Sie als Besucher `500`-Fehler auf einer Webseite sehen, erfordern diese Probleme eine Untersuchung durch die Serverbesitzer oder Administratoren.
Es gibt viele mögliche Ursachen für `500`-Fehler, einschließlich: falsche Serverkonfiguration, Speichererschöpfung (OOM-Probleme), unbehandelte Ausnahmen, falsche Dateiberechtigungen oder andere komplexe Faktoren.
Serveradministratoren können das Auftreten von Serverfehlerantworten wie dem `500`-Statuscode proaktiv protokollieren, mit Details zu den auslösenden Anfragen, um die Stabilität eines Dienstes in Zukunft zu verbessern.

## Status

```http
500 Internal Server Error
```

## Beispiele

### 500 Serverfehler-Antwort

Die folgende Anfrage versucht, eine Webseite abzurufen, erhält jedoch eine 500-Antwort zurück.
Der Antwortinhalt enthält eine Seite, die den Serverstatus beschreibt, mit einem Link zu einer Support-Seite für Besucher.
Der Antwortinhalt enthält eine Kennung zur Veranschaulichung einer Methode, die den Serveradministratoren helfen kann, die Ursache des Problems einzugrenzen:

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
