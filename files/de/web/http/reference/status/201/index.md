---
title: 201 Created
slug: Web/HTTP/Reference/Status/201
l10n:
  sourceCommit: 52d840333a70d06e6f667faaeb160f3ad4b03eca
---

Der HTTP-Statuscode **`201 Created`** [erfolgreiche Antwort](/de/docs/Web/HTTP/Reference/Status#successful_responses) zeigt an, dass die HTTP-Anfrage zur Erstellung einer Ressource geführt hat. Dieser Statuscode wird häufig als Ergebnis einer {{HTTPMethod("POST")}}-Anfrage gesendet.

Die neue Ressource oder eine Beschreibung und ein Link zur neuen Ressource wird erstellt, bevor die Antwort zurückgegeben wird. Die neu erstellten Elemente können im Body der Antwortnachricht zurückgegeben werden, müssen jedoch durch die **URL der auslösenden Anfrage** oder durch die URL im Wert des mit der Antwort bereitgestellten {{HTTPHeader("Location")}}-Headers auffindbar sein.

## Status

```http
201 Created
```

## Beispiele

### Empfang einer Antwort, die die Benutzererstellung angibt

Nehmen wir an, es gibt eine REST-API zur Verwaltung von Benutzern mit einem Endpunkt unter `http://example.com/users`. In diesem Beispiel senden wir eine `POST`-Anfrage mit folgendem Body, um einen Benutzer zu erstellen:

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

Nach erfolgreicher Benutzererstellung sieht die `201 Created`-Antwort wie folgt aus:

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
