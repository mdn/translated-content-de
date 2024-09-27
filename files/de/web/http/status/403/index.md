---
title: 403 Forbidden
slug: Web/HTTP/Status/403
l10n:
  sourceCommit: a8038dcd29e001192ba1b2166dfbff5b76f1ce55
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`403 Forbidden`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Status#client_error_responses) zeigt an, dass der Server die Anfrage verstanden hat, sie jedoch ablehnt zu verarbeiten. Dieser Status ist ähnlich wie {{HTTPStatus("401")}}, außer dass bei **`403 Forbidden`**-Antworten Authentifizierung oder erneute Authentifizierung keinen Unterschied macht. Das Fehlschlagen der Anfrage ist mit der Anwendungslogik verknüpft, wie etwa unzureichende Berechtigungen für eine Ressource oder Aktion.

Clients, die eine `403`-Antwort erhalten, sollten erwarten, dass das Wiederholen der Anfrage ohne Änderung mit demselben Fehler scheitern wird. Server-Eigentümer können stattdessen entscheiden, eine {{HTTPStatus("404")}}-Antwort zu senden, wenn nicht gewünscht ist, das Vorhandensein einer Ressource gegenüber Clients mit unzureichenden Rechten anzuerkennen.

## Status

```http
403 Forbidden
```

## Beispiele

### Anfrage aufgrund unzureichender Berechtigungen fehlgeschlagen

Das folgende Beispiel einer Anfrage wird an eine API für das Benutzermanagement gestellt. Die Anfrage enthält einen {{HTTPHeader("Authorization")}}-Header mit dem `Bearer` [Authentifizierungsschema](/de/docs/Web/HTTP/Authentication#authentication_schemes), das ein Zugriffstoken enthält:

```http
DELETE /users/123 HTTP/1.1
Host: example.com
Authorization: Bearer abcd123
```

Der Server hat die Anfrage authentifiziert, aber die Aktion schlägt aufgrund unzureichender Rechte fehl, und der Antwortinhalt enthält einen Grund für das Scheitern:

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

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- {{HTTPStatus("401")}}
- [HTTP-Statuscode-Definitionen](https://httpwg.org/specs/rfc9110.html#status.403)
