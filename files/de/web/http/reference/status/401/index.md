---
title: 401 Unauthorized
slug: Web/HTTP/Reference/Status/401
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-Statuscode **`401 Unauthorized`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) zeigt an, dass eine Anfrage nicht erfolgreich war, da gültige Authentifizierungsdaten für die angeforderte Ressource fehlen. Dieser Statuscode wird mit einem HTTP-{{HTTPHeader("WWW-Authenticate")}}-Antwortheader gesendet, der Informationen über das [Authentifizierungsschema](/de/docs/Web/HTTP/Guides/Authentication#authentication_schemes) enthält, das der Server erwartet, damit die Anfrage erfolgreich ausgeführt werden kann.

Ein `401 Unauthorized` ist ähnlich der {{HTTPStatus("403", "403 Forbidden")}}-Antwort, außer dass ein 403 zurückgegeben wird, wenn eine Anfrage gültige Anmeldeinformationen enthält, der Client jedoch nicht die Berechtigung hat, eine bestimmte Aktion auszuführen.

## Status

```http
401 Unauthorized
```

## Beispiele

### Nicht autorisierte Anfrage an eine geschützte API

Die folgende GET-Anfrage wird an eine URL `www.example.com/admin` gesendet, die Anmeldeinformationen in einem {{HTTPHeader("Authorization")}}-Header erwartet:

```http
GET /admin HTTP/1.1
Host: example.com
```

Der Server antwortet mit einer 401-Nachricht und einem {{HTTPHeader("WWW-Authenticate")}}-Header, der angibt, dass die Anfrage authentifiziert werden muss und dass `Bearer`-Authentifizierung (ein Zugriffstoken) das erlaubte [Authentifizierungsschema](/de/docs/Web/HTTP/Guides/Authentication#authentication_schemes) ist:

```http
HTTP/1.1 401 Unauthorized
Date: Tue, 02 Jul 2024 12:18:47 GMT
WWW-Authenticate: Bearer
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication)
- {{Glossary("Challenge", "Challenge")}}
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
