---
title: 403 Forbidden
slug: Web/HTTP/Reference/Status/403
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-Statuscode **`403 Forbidden`** [Clientfehler-Antwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) zeigt an, dass der Server die Anfrage verstanden hat, aber sich weigert, sie zu verarbeiten.
Dieser Status ist dem {{HTTPStatus("401")}} ähnlich, außer dass bei **`403 Forbidden`**-Antworten eine Authentifizierung oder erneute Authentifizierung keinen Unterschied macht.
Das Scheitern der Anfrage ist mit der Anwendungslogik verknüpft, wie beispielsweise unzureichende Berechtigungen für eine Ressource oder Aktion.

Clients, die eine `403`-Antwort erhalten, sollten erwarten, dass das Wiederholen der Anfrage ohne Änderungen mit dem gleichen Fehler scheitern wird.
Serverbetreiber können entscheiden, eine {{HTTPStatus("404")}}-Antwort anstelle einer 403 zu senden, wenn sie das Vorhandensein einer Ressource gegenüber Clients mit unzureichenden Berechtigungen nicht bestätigen möchten.

## Status

```http
403 Forbidden
```

## Beispiele

### Anfrage aufgrund unzureichender Berechtigungen fehlgeschlagen

Das folgende Beispiel einer Anfrage wird an eine API zur Benutzerverwaltung gesendet.
Die Anfrage enthält einen {{HTTPHeader("Authorization")}}-Header, der das `Bearer`-[Authentifizierungsschema](/de/docs/Web/HTTP/Guides/Authentication#authentication_schemes) mit einem Zugriffstoken verwendet:

```http
DELETE /users/123 HTTP/1.1
Host: example.com
Authorization: Bearer abcd123
```

Der Server hat die Anfrage authentifiziert, aber die Aktion scheitert aufgrund unzureichender Rechte und der Antwortkörper enthält einen Grund für das Scheitern:

```http
HTTP/1.1 403 Forbidden
Date: Tue, 02 Jul 2024 12:56:49 GMT
Content-Type: application/json
Content-Length: 88

{
  "error": "InsufficientPermissions",
  "message": "Deleting users requires the 'admin' role."
}
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("401")}}
- [HTTP-Statuscode-Definitionen](https://httpwg.org/specs/rfc9110.html#status.403)
