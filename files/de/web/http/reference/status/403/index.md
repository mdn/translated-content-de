---
title: 403 Forbidden
slug: Web/HTTP/Reference/Status/403
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`403 Forbidden`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) gibt an, dass der Server die Anfrage verstanden hat, sie jedoch ablehnt zu verarbeiten. Dieser Status ist ähnlich wie {{HTTPStatus("401")}}, außer dass bei **`403 Forbidden`**-Antworten Authentifizierung oder erneute Authentifizierung keinen Unterschied macht. Das Scheitern der Anfrage ist an die Anwendungslogik gebunden, wie beispielsweise unzureichende Berechtigungen für eine Ressource oder Aktion.

Klienten, die eine `403`-Antwort erhalten, sollten erwarten, dass das Wiederholen der Anfrage ohne Änderungen mit demselben Fehler scheitern wird. Serverbetreiber können sich entscheiden, eine {{HTTPStatus("404")}}-Antwort anstelle einer 403 zu senden, wenn das Anerkennen der Existenz einer Ressource gegenüber Klienten mit unzureichenden Berechtigungen nicht gewünscht ist.

## Status

```http
403 Forbidden
```

## Beispiele

### Anfrage scheitert aufgrund unzureichender Berechtigungen

Das folgende Anforderungsbeispiel wird an eine API für Benutzerverwaltung gesendet. Die Anfrage enthält einen {{HTTPHeader("Authorization")}}-Header, der ein Access-Token im `Bearer` [Authentifizierungsschema](/de/docs/Web/HTTP/Guides/Authentication#authentication_schemes) verwendet:

```http
DELETE /users/123 HTTP/1.1
Host: example.com
Authorization: Bearer abcd123
```

Der Server hat die Anfrage authentifiziert, aber die Aktion schlägt aufgrund unzureichender Rechte fehl und der Antworttext enthält einen Grund für das Scheitern:

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
- [HTTP-Statuscodedefinitionen](https://httpwg.org/specs/rfc9110.html#status.403)
