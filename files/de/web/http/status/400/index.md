---
title: 400 Bad Request
slug: Web/HTTP/Status/400
l10n:
  sourceCommit: ae86913908651e6008079242691e06b5e01d1c78
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`400 Bad Request`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Status#client_error_responses) zeigt an, dass der Server die Anfrage aufgrund eines Fehlers, den der Server als Clientfehler betrachtet, nicht verarbeiten würde. Der Grund für eine `400`-Antwort liegt typischerweise in einer fehlerhaften Anfragesyntax, ungültigen Rahmenbedingungen der Anfragenachricht oder irreführendem Anforderungsrouting.

Clients, die eine `400`-Antwort erhalten, sollten erwarten, dass das Wiederholen der Anfrage ohne Änderungen mit demselben Fehler fehlschlägt.

## Status

```http
400 Bad Request
```

## Beispiele

### Fehlerhafte Anfragesyntax

Angenommen, es existiert eine [REST](/de/docs/Glossary/REST)-API mit einem Endpunkt zur Verwaltung von Benutzern unter `http://example.com/users` und eine `POST`-Anfrage mit dem folgenden Inhalt versucht, einen Benutzer zu erstellen, verwendet aber ungültiges JSON mit nicht maskierten Zeilenumbrüchen:

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

Wenn der [Inhalt](/de/docs/Glossary/HTTP_Content) in einem gültigen Format vorliegt, würden wir eine {{HTTPStatus("201", "201 Created")}}-Antwort oder eine andere Erfolgsmeldung erwarten, aber stattdessen antwortet der Server mit `400` und der Antwortinhalt enthält ein `message`-Feld mit einigen Kontextinformationen, damit der Client die Aktion mit einer korrekt formatierten Anfrage erneut versuchen kann:

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
- [HTTP Status Code Definitionen](https://httpwg.org/specs/rfc9110.html#status.400)
