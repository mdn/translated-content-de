---
title: 403 Verboten
slug: Web/HTTP/Status/403
l10n:
  sourceCommit: ba53fe04589c36a2210d7549c003f3016093ef8e
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`403 Verboten`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Status#client_error_responses) zeigt an, dass der Server die Anfrage verstanden hat, jedoch verweigert, sie zu verarbeiten.
Dieser Status ist dem {{HTTPStatus("401")}} ähnlich, mit dem Unterschied, dass bei **`403 Verboten`**-Antworten eine Authentifizierung oder erneute Authentifizierung keinen Unterschied macht.
Das Scheitern der Anfrage ist an die Anwendungslogik gebunden, wie z.B. unzureichende Berechtigungen für eine Ressource oder Aktion.

Clients, die eine `403`-Antwort erhalten, sollten annehmen, dass das Wiederholen der Anfrage ohne Änderungen mit demselben Fehler scheitern wird.
Serverbetreiber können entscheiden, eine {{HTTPStatus("404")}}-Antwort anstelle einer 403 zu senden, wenn sie nicht wollen, dass der Client die Existenz einer Ressource bei unzureichenden Berechtigungen anerkennt.

## Status

```http
403 Forbidden
```

## Beispiele

### Anfrage gescheitert aufgrund unzureichender Berechtigungen

Das folgende Beispiel zeigt eine Anfrage an eine API für Benutzerverwaltung.
Die Anfrage enthält einen {{HTTPHeader("Authorization")}}-Header, der das `Bearer` [Authentifizierungsschema](/de/docs/Web/HTTP/Authentication#authentication_schemes) verwendet und ein Zugriffstoken enthält:

```http
DELETE /users/123 HTTP/1.1
Host: example.com
Authorization: Bearer abcd123
```

Der Server hat die Anfrage authentifiziert, aber die Aktion scheitert aufgrund unzureichender Rechte und der Antwortinhalt enthält einen Grund für das Scheitern:

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
