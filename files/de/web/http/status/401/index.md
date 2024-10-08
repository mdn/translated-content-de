---
title: 401 Unauthorized
slug: Web/HTTP/Status/401
l10n:
  sourceCommit: ba53fe04589c36a2210d7549c003f3016093ef8e
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`401 Unauthorized`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Status#client_error_responses) gibt an, dass eine Anfrage nicht erfolgreich war, da ihr gültige Authentifizierungsinformationen für die angeforderte Ressource fehlen. Dieser Statuscode wird mit einem HTTP {{HTTPHeader("WWW-Authenticate")}} Antwort-Header gesendet, der Informationen über das [Authentifizierungsschema](/de/docs/Web/HTTP/Authentication#authentication_schemes) enthält, das der Server erwartet, damit der Client die Anfrage erfolgreich stellen kann.

Ein `401 Unauthorized` ist ähnlich der Antwort {{HTTPStatus("403", "403 Forbidden")}}, außer dass ein 403 zurückgegeben wird, wenn eine Anfrage gültige Anmeldeinformationen enthält, jedoch der Client nicht die Berechtigung hat, eine bestimmte Aktion durchzuführen.

## Status

```http
401 Unauthorized
```

## Beispiele

### Unautorisierte Anfrage an eine geschützte API

Die folgende GET-Anfrage wird an eine URL `www.example.com/admin` gestellt, die Anmeldeinformationen in einem {{HTTPHeader("Authorization")}} Header erwartet:

```http
GET /admin HTTP/1.1
Host: example.com
```

Der Server antwortet mit einer 401-Nachricht und einem {{HTTPHeader("WWW-Authenticate")}} Header, der angibt, dass die Anfrage authentifiziert werden muss und dass `Bearer` Auth (ein Zugriffstoken) das erlaubte [Authentifizierungsschema](/de/docs/Web/HTTP/Authentication#authentication_schemes) ist:

```http
HTTP/1.1 401 Unauthorized
Date: Tue, 02 Jul 2024 12:18:47 GMT
WWW-Authenticate: Bearer
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- [HTTP-Authentifizierung](/de/docs/Web/HTTP/Authentication)
- {{Glossary("Challenge", "Challenge")}}
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
