---
title: Proxy-Authentifizierung
slug: Web/HTTP/Headers/Proxy-Authenticate
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der HTTP **`Proxy-Authenticate`** Antwort-Header definiert die Authentifizierungsmethode, die verwendet werden sollte, um Zugriff auf eine Ressource hinter einem {{Glossary("proxy server")}} zu erhalten. Er authentifiziert die Anfrage an den Proxy-Server und ermöglicht ihm, die Anfrage weiterzuleiten.

Der `Proxy-Authenticate` Header wird zusammen mit einem {{HTTPStatus("407")}} `Proxy Authentication Required` gesendet.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Proxy-Authenticate: <type> realm=<realm>
```

## Direktiven

- \<type>
  - : [Authentication type](/de/docs/Web/HTTP/Authentication#authentication_schemes). Ein häufiger Typ ist ["Basic"](/de/docs/Web/HTTP/Authentication#basic_authentication_scheme).
    IANA pflegt eine [Liste von Authentifizierungsschemata](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml).
- realm=\<realm>
  - : Eine Beschreibung des geschützten Bereichs, der Realm. Wenn kein Realm angegeben ist, zeigen Clients häufig stattdessen einen formatierten Hostnamen an.

## Beispiele

```http
Proxy-Authenticate: Basic

Proxy-Authenticate: Basic realm="Access to the internal site"
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [HTTP-Authentifizierung](/de/docs/Web/HTTP/Authentication)
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
