---
title: 400 Bad Request
slug: Web/HTTP/Reference/Status/400
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`400 Bad Request`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) zeigt an, dass der Server die Anfrage nicht verarbeiten konnte aufgrund eines Fehlers, den der Server als Client-Fehler ansieht. Der Grund für eine `400`-Antwort liegt typischerweise in fehlerhafter Anfragesyntax, ungültigem Framing der Anfragenachricht oder irreführendem Anfragerouting.

Clients, die eine `400`-Antwort erhalten, sollten erwarten, dass das Wiederholen der Anfrage ohne Änderungen mit demselben Fehler scheitern wird.

## Status

```http
400 Bad Request
```

## Beispiele

### Fehlerhafte Anfragesyntax

Angenommen, es existiert eine {{Glossary("REST", "REST")}} API mit einem Endpunkt zur Verwaltung von Benutzern unter `http://example.com/users` und eine `POST`-Anfrage mit dem folgenden Inhalt versucht, einen Benutzer zu erstellen, verwendet jedoch ungültiges JSON mit nicht maskierten Zeilenumbrüchen:

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

Wenn der {{Glossary("HTTP_Content", "Inhalt")}} im gültigen Format vorliegt, würden wir eine {{HTTPStatus("201", "201 Created")}}-Antwort oder eine andere Erfolgsnachricht erwarten, aber stattdessen antwortet der Server mit einem `400` und der Antworttext enthält ein `message`-Feld mit Kontext, damit der Client die Aktion mit einer korrekt-formatierten Anfrage erneut versuchen kann:

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

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- [HTTP Status Code Definitions](https://httpwg.org/specs/rfc9110.html#status.400)
