---
title: 500 Internal Server Error
slug: Web/HTTP/Reference/Status/500
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-Statuscode **`500 Internal Server Error`** [Serverfehlerantwort](/de/docs/Web/HTTP/Reference/Status#server_error_responses) zeigt an, dass der Server auf eine unerwartete Bedingung gestoßen ist, die es ihm unmöglich machte, die Anfrage zu erfüllen.
Dieser Fehler ist eine allgemeine "Catch-all"-Antwort für Serverprobleme und deutet darauf hin, dass der Server keinen passenderen [5XX-Fehler](/de/docs/Web/HTTP/Reference/Status#server_error_responses) finden kann, mit dem er antworten könnte.

Wenn Sie ein Besucher sind, der `500`-Fehler auf einer Webseite sieht, erfordern diese Probleme eine Untersuchung durch die Serverinhaber oder -administratoren.
Es gibt viele mögliche Ursachen für `500`-Fehler, darunter: unsachgemäße Serverkonfiguration, Speicherplatzprobleme (OOM), unbehandelte Ausnahmen, unsachgemäße Dateiberechtigungen oder andere komplexe Faktoren.
Serveradministratoren können proaktiv das Auftreten von Serverfehlerantworten, wie dem `500`-Statuscode, protokollieren mit Details zu den anfragenden Anfragen, um die Stabilität eines Dienstes in Zukunft zu verbessern.

## Status

```http
500 Internal Server Error
```

## Beispiele

### 500 Serverfehlerantwort

Die folgende Anfrage versucht, eine Webseite abzurufen, erhält jedoch eine 500-Antwort zurück.
Der Antwortkörper enthält eine Seite, die den Serverzustand beschreibt, mit einem Link zu einer Unterstützungsseite für Besucher.
Der Antwortkörper enthält einen Identifikator zur Veranschaulichung einer Methode, die den Serveradministratoren helfen kann, die Ursache des Problems einzugrenzen:

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
