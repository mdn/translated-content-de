---
title: 407 Proxy Authentication Required
slug: Web/HTTP/Reference/Status/407
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

Der HTTP-Statuscode **`407 Proxy Authentication Required`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) zeigt an, dass die Anfrage nicht erfolgreich war, weil sie keine gültigen Authentifizierungsanmeldedaten für den {{Glossary("proxy_server", "Proxy-Server")}} enthält, der zwischen dem Client und dem Server mit Zugriff auf die angeforderte Ressource liegt.

Diese Antwort wird mit einem {{HTTPHeader("Proxy-Authenticate")}}-Header gesendet, der Informationen darüber enthält, wie Anfragen korrekt authentifiziert werden können.
Der Client kann die Anfrage mit einem neuen oder ersetzten {{HTTPHeader("Proxy-Authorization")}}-Headerfeld wiederholen.

## Status

```http
407 Proxy Authentication Required
```

## Beispiele

### Proxy-Authentifizierung

Eine GET-Anfrage wird an `example.com/admin` gestellt:

```http
GET /admin HTTP/1.1
Host: example.com
```

Unterwegs teilt ein Vermittler dem Client mit, dass Clients authentifiziert werden müssen und bietet Informationen über das Authentifizierungsschema:

```http
HTTP/1.1 407 Proxy Authentication Required
Date: Wed, 21 Oct 2015 07:28:00 GMT
Proxy-Authenticate: Basic realm="Access to internal site"
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication)
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}
