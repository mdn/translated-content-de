---
title: 407 Proxy Authentication Required
slug: Web/HTTP/Reference/Status/407
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-Statuscode **`407 Proxy Authentication Required`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) zeigt an, dass die Anfrage nicht erfolgreich war, weil gültige Authentifizierungsdaten für den {{Glossary("proxy_server", "Proxyserver")}} fehlen, der zwischen dem Client und dem Server sitzt, der Zugriff auf die angeforderte Ressource hat.

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

Unterwegs informiert ein Vermittler den Client darüber, dass Clients authentifiziert werden müssen, und liefert Informationen über das Authentifizierungsschema:

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
