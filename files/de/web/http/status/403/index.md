---
title: 403 Forbidden
slug: Web/HTTP/Status/403
l10n:
  sourceCommit: a8038dcd29e001192ba1b2166dfbff5b76f1ce55
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`403 Verboten`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Status#client_error_responses) zeigt an, dass der Server die Anfrage verstanden hat, diese jedoch ablehnt zu verarbeiten. Dieser Status ähnelt {{HTTPStatus("401")}}, außer dass bei **`403 Verboten`**-Antworten eine Authentifizierung oder erneute Authentifizierung keinen Unterschied macht. Das Scheitern der Anfrage ist mit der Anwendungslogik verbunden, wie z. B. unzureichende Berechtigungen für eine Ressource oder Aktion.

Clients, die eine `403`-Antwort erhalten, sollten erwarten, dass das Wiederholen der Anfrage ohne Änderungen mit demselben Fehler fehlschlägt. Server-Betreiber können sich entscheiden, anstelle einer 403 eine {{HTTPStatus("404")}}-Antwort zu senden, wenn es nicht gewünscht ist, die Existenz einer Ressource gegenüber Clients mit unzureichenden Berechtigungen zu bestätigen.

## Status

```http
403 Forbidden
```

## Beispiele

### Anfrage fehlgeschlagen aufgrund unzureichender Berechtigungen

Die folgende Beispielanfrage wird an eine API zur Benutzerverwaltung gesendet. Die Anfrage enthält einen {{HTTPHeader("Authorization")}}-Header, der das `Bearer`-[Authentifizierungsschema](/de/docs/Web/HTTP/Authentication#authentication_schemes) mit einem Zugriffstoken verwendet:

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

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- {{HTTPStatus("401")}}
- [HTTP Status Code Definitions](https://httpwg.org/specs/rfc9110.html#status.403)
