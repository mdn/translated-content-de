---
title: 201 Created
slug: Web/HTTP/Reference/Status/201
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-Statuscode **`201 Created`** [erfolgreiche Antwort](/de/docs/Web/HTTP/Reference/Status#successful_responses) zeigt an, dass die HTTP-Anfrage zur Erstellung einer Ressource geführt hat.
Dieser Statuscode wird häufig als Ergebnis einer {{HTTPMethod("POST")}}-Anfrage gesendet.

Die neue Ressource oder eine Beschreibung und ein Link zur neuen Ressource wird erstellt, bevor die Antwort zurückgegeben wird.
Die neu erstellten Elemente werden im Nachrichtenkörper zurückgegeben und befinden sich entweder an der **URL der ursprünglichen Anfrage** oder der URL im Wert des {{HTTPHeader("Location")}}-Headers in der Antwort.

## Status

```http
201 Created
```

## Beispiele

### Empfangen einer Antwort, die die Erstellung eines Benutzers anzeigt

Nehmen wir an, es gibt eine REST-API zur Verwaltung von Benutzern mit einem Endpunkt unter `http://example.com/users`. In diesem Beispiel senden wir eine `POST`-Anfrage mit folgendem Körper, um einen Benutzer zu erstellen:

```http
POST /users HTTP/1.1
Host: example.com
Content-Type: application/json

{
  "firstName": "Brian",
  "lastName": "Smith",
  "email": "brian.smith@example.com"
}
```

Nach erfolgreicher Erstellung des Benutzers sieht die `201 Created`-Antwort folgendermaßen aus:

```http
HTTP/1.1 201 Created
Content-Type: application/json
Location: http://example.com/users/123

{
  "message": "New user created",
  "user": {
    "id": 123,
    "firstName": "Brian",
    "lastName": "Smith",
    "email": "brian.smith@example.com"
  }
}
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
