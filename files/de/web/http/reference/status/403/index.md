---
title: 403 Forbidden
slug: Web/HTTP/Reference/Status/403
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

Der HTTP-Statuscode **`403 Forbidden`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) zeigt an, dass der Server die Anfrage verstanden hat, aber ablehnt, sie zu bearbeiten.
Dieser Status ähnelt {{HTTPStatus("401")}}, außer dass bei **`403 Forbidden`**-Antworten eine Authentifizierung oder erneute Authentifizierung keinen Unterschied macht.
Der Fehler bei der Anfrage ist an die Anwendungslogik gebunden, wie z.B. unzureichende Berechtigungen für eine Ressource oder Aktion.

Clients, die eine `403`-Antwort erhalten, sollten damit rechnen, dass das Wiederholen der Anfrage ohne Änderungen mit demselben Fehler scheitern wird.
Serverbesitzer können sich entscheiden, eine {{HTTPStatus("404")}}-Antwort statt einer 403 zu senden, wenn das Anerkennen der Existenz einer Ressource gegenüber Clients mit unzureichenden Rechten nicht gewünscht ist.

## Status

```http
403 Forbidden
```

## Beispiele

### Anfrage scheiterte aufgrund unzureichender Berechtigungen

Die folgende Beispielanfrage wird an eine API für das Benutzermanagement gestellt.
Die Anfrage enthält einen {{HTTPHeader("Authorization")}}-Header, der das `Bearer`-[Authentifizierungsschema](/de/docs/Web/HTTP/Guides/Authentication#authentication_schemes) mit einem Zugriffstoken verwendet:

```http
DELETE /users/123 HTTP/1.1
Host: example.com
Authorization: Bearer abcd123
```

Der Server hat die Anfrage authentifiziert, aber die Aktion scheitert aufgrund unzureichender Rechte, und der Antworttext enthält einen Grund für das Scheitern:

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
- [Definitionen der HTTP-Statuscodes](https://httpwg.org/specs/rfc9110.html#status.403)
