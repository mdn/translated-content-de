---
title: 407 Proxy Authentication Required
slug: Web/HTTP/Status/407
l10n:
  sourceCommit: ba53fe04589c36a2210d7549c003f3016093ef8e
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`407 Proxy Authentication Required`** ([Client-Fehlerantwort](/de/docs/Web/HTTP/Status#client_error_responses)) zeigt an, dass die Anfrage nicht erfolgreich war, da ihr gültige Authentifizierungsnachweise für den {{Glossary("proxy_server", "Proxy-Server")}} fehlen, der zwischen dem Client und dem Server mit Zugriff auf die angeforderte Ressource sitzt.

Diese Antwort wird mit einem {{HTTPHeader("Proxy-Authenticate")}}-Header gesendet, der Informationen darüber enthält, wie Anfragen korrekt authentifiziert werden können. Der Client kann die Anfrage mit einem neuen oder ersetzten {{HTTPHeader("Proxy-Authorization")}}-Headerfeld wiederholen.

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

Unterwegs informiert ein Vermittler den Client darüber, dass Clients authentifiziert werden müssen, und bietet Informationen über das Authentifizierungsschema:

```http
HTTP/1.1 407 Proxy Authentication Required
Date: Wed, 21 Oct 2015 07:28:00 GMT
Proxy-Authenticate: Basic realm="Access to internal site"
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- [HTTP-Authentifizierung](/de/docs/Web/HTTP/Authentication)
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}
