---
title: 400 Fehlende Anfrage
slug: Web/HTTP/Status/400
l10n:
  sourceCommit: ae86913908651e6008079242691e06b5e01d1c78
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`400 Bad Request`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Status#client_error_responses) zeigt an, dass der Server die Anfrage aufgrund eines vom Server als Fehler des Clients betrachteten Problems nicht verarbeiten konnte. Der Grund für eine `400` Antwort ist typischerweise fehlerhafte Anfrage-Syntax, ungültige Anfragenachrichtenstruktur oder irreführende Anfragerouting.

Clients, die eine `400` Antwort erhalten, sollten erwarten, dass das Wiederholen der Anfrage ohne Modifikation mit dem gleichen Fehler fehlschlagen wird.

## Status

```http
400 Bad Request
```

## Beispiele

### Fehlerhafte Anfrage-Syntax

Angenommen, es existiert eine {{Glossary("REST")}} API mit einem Endpunkt zur Verwaltung von Benutzern unter `http://example.com/users`, und eine `POST`-Anfrage mit dem folgenden Inhalt versucht einen Benutzer zu erstellen, verwendet jedoch ungültiges JSON mit nicht entwichenen Zeilenumbrüchen:

```http
POST /users HTTP/1.1
Host: example.com
Content-Type: application/json
Content-Length: 38

{
  "email": "b@example.com
",
  "username": "b.smith"
}
```

Wenn der {{Glossary("HTTP Content", "content")}} in einem gültigen Format vorliegt, würden wir eine {{HTTPStatus("201", "201 Created")}} Antwort oder eine andere Erfolgsmeldung erwarten, aber stattdessen antwortet der Server mit einem `400`, und der Antwortkörper enthält ein `message`-Feld mit etwas Kontext, damit der Client die Aktion mit einer korrekt formatierten Anfrage erneut versuchen kann:

```http
HTTP/1.1 400 Bad Request
Content-Type: application/json
Content-Length: 71

{
  "error": "Bad request",
  "message": "Request body could not be read properly.",
}
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- [HTTP Status Code Definitions](https://httpwg.org/specs/rfc9110.html#status.400)
