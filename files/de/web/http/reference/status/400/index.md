---
title: 400 Bad Request
slug: Web/HTTP/Reference/Status/400
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-Statuscode **`400 Bad Request`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) zeigt an, dass der Server die Anfrage nicht verarbeiten kann, da sie als Client-Fehler angesehen wird. Der Grund für eine `400`-Antwort ist typischerweise eine fehlerhafte Anfragesyntax, ein ungültiges Anforderungsnachrichten-Format oder irreführende Anforderungsleitung.

Clients, die eine `400`-Antwort erhalten, sollten erwarten, dass das Wiederholen der Anfrage ohne Änderungen mit dem gleichen Fehler scheitern wird.

## Status

```http
400 Bad Request
```

## Beispiele

### Fehlhafte Anfragesyntax

Angenommen, es gibt eine {{Glossary("REST", "REST")}} API mit einem Endpunkt zur Verwaltung von Benutzern unter `http://example.com/users` und eine `POST`-Anfrage mit folgendem Inhalt versucht, einen Benutzer zu erstellen, verwendet aber ungültiges JSON mit nicht maskierten Zeilenumbrüchen:

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

Wenn der {{Glossary("HTTP_Content", "Inhalt")}} in einem gültigen Format vorliegt, würden wir eine {{HTTPStatus("201", "201 Created")}}-Antwort oder eine andere Erfolgsmeldung erwarten. Stattdessen antwortet der Server jedoch mit einem `400` und der Antwortinhalt enthält ein `message`-Feld mit einigen Kontextinformationen, sodass der Client die Aktion mit einer korrekt formatierten Anfrage erneut versuchen kann:

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
- [HTTP Status Code Definitionen](https://httpwg.org/specs/rfc9110.html#status.400)
