---
title: 201 Erstellt
slug: Web/HTTP/Status/201
l10n:
  sourceCommit: 3f68a9604259dfa862dd741dc88ebc8fb5fa10fe
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`201 Created`** [erfolgreiche Antwort](/de/docs/Web/HTTP/Status#successful_responses) zeigt an, dass die HTTP-Anfrage zur Erstellung einer Ressource geführt hat.
Dieser Statuscode wird häufig als Ergebnis einer {{HTTPMethod("POST")}}-Anfrage gesendet.

Die neue Ressource, oder eine Beschreibung und ein Link zur neuen Ressource, wird erstellt, bevor die Antwort zurückgegeben wird.
Die neu erstellten Elemente werden im Hauptteil der Antwortnachricht zurückgegeben, entweder an der **URL der ursprünglichen Anfrage** oder der URL im Wert des {{HTTPHeader("Location")}}-Headers in der Antwort.

## Status

```http
201 Created
```

## Beispiele

### Empfang einer Antwort, die die Erstellung eines Benutzers anzeigt

Angenommen, es gibt eine REST-API zur Verwaltung von Benutzern mit einem Endpunkt unter `http://example.com/users`. In diesem Beispiel senden wir eine `POST`-Anfrage mit folgendem Inhalt, um einen Benutzer zu erstellen:

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

Nach erfolgreicher Erstellung des Benutzers sieht die `201 Created`-Antwort wie folgt aus:

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

- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)