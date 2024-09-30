---
title: Proxy-Authorization
slug: Web/HTTP/Headers/Proxy-Authorization
l10n:
  sourceCommit: bb23abe84f0f4da3cf5d72a66d356cf5f9e3cfa2
---

{{HTTPSidebar}}

Der HTTP-Request-Header **`Proxy-Authorization`** enthält die Anmeldedaten, um einen User-Agent bei einem Proxy-Server zu authentifizieren, normalerweise nachdem der Server mit einem {{HTTPStatus("407")}} `Proxy Authentication Required`-Status und dem {{HTTPHeader("Proxy-Authenticate")}}-Header geantwortet hat.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Request-Header](/de/docs/Glossary/Request_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Proxy-Authorization: <type> <credentials>
```

## Direktiven

- \<type>
  - : [Authentifizierungs-Typ](/de/docs/Web/HTTP/Authentication#authentication_schemes). Ein gebräuchlicher Typ ist ["Basic"](/de/docs/Web/HTTP/Authentication#basic_authentication_scheme).
    Siehe auch das [IANA-Register der Authentifizierungs-Schemata](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml).
- \<credentials>

  - : Die Anmeldedaten werden folgendermaßen konstruiert:

    - Der Benutzername und das Passwort werden mit einem Doppelpunkt
      kombiniert (`aladdin:opensesame`).
    - Der resultierende String wird [Base64](/de/docs/Glossary/Base64)
      codiert (`YWxhZGRpbjpvcGVuc2VzYW1l`).

    > [!NOTE]
    > Base64-Codierung bedeutet nicht Verschlüsselung oder Hashing! Diese
    > Methode ist genauso sicher wie das Senden der Anmeldedaten im Klartext (Base64 ist eine
    > reversible Codierung). Es ist vorzuziehen, HTTPS in Verbindung mit der Basis-Authentifizierung zu verwenden.

## Beispiele

```http
Proxy-Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Authentifizierung](/de/docs/Web/HTTP/Authentication)
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Authorization")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
