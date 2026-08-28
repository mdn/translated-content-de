---
title: 400 Bad Request
slug: Web/HTTP/Reference/Status/400
l10n:
  sourceCommit: 88d5d5230dc9f67cbfa37cea178f0eccd6632a8b
---

Der HTTP-Statuscode **`400 Bad Request`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) zeigt an, dass der Server die Anfrage aufgrund eines Fehlers, den der Server als vom Client verursacht betrachtet, nicht verarbeiten kann. Der Grund für eine `400`-Antwort liegt typischerweise in einer fehlerhaften Anfrage-Syntax, ungültigem Rahmen der Anfragenachricht oder irreführender Anfragen-Weiterleitung.

Clients, die eine `400`-Antwort erhalten, sollten davon ausgehen, dass das Wiederholen der Anfrage ohne Änderung mit demselben Fehler fehlschlagen wird.

## Status

```http
400 Bad Request
```

## Beispiele

### Fehlerhafte Anfrage-Syntax

Angenommen, es gibt eine {{Glossary("REST", "REST")}}-API mit einem Endpoint zur Verwaltung von Nutzern unter `http://example.com/users` und eine `POST`-Anfrage mit folgendem Body versucht, einen Nutzer zu erstellen, aber verwendet ungültiges JSON mit nicht-escaped Zeilenumbrüchen:

```http
POST /users HTTP/1.1
Host: example.com
Content-Type: application/json
Content-Length: 38

{
  "email": "b@example.com",
  "username": "b.smith"
}
```

Wenn der {{Glossary("HTTP_Content", "Inhalt")}} in einem gültigen Format vorliegt, würden wir eine {{HTTPStatus("201", "201 Created")}}-Antwort oder eine andere Erfolgsmeldung erwarten. Stattdessen antwortet der Server mit einem `400` und der Antwort-Body enthält ein `message`-Feld mit Kontext, sodass der Client die Aktion mit einer korrekt formatierten Anfrage erneut versuchen kann:

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
- [Definitionen der HTTP-Statuscodes](https://httpwg.org/specs/rfc9110.html#status.400)
