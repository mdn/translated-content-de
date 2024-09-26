---
title: Proxy-Authorization
slug: Web/HTTP/Headers/Proxy-Authorization
l10n:
  sourceCommit: bb23abe84f0f4da3cf5d72a66d356cf5f9e3cfa2
---

{{HTTPSidebar}}

Der HTTP-**`Proxy-Authorization`**-Anforderungsheader enthält die Anmeldedaten zur Authentifizierung eines User-Agents bei einem Proxy-Server, normalerweise nachdem der Server mit einem {{HTTPStatus("407")}} `Proxy Authentication Required`-Status und dem {{HTTPHeader("Proxy-Authenticate")}}-Header geantwortet hat.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
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
  - : [Authentifizierungstyp](/de/docs/Web/HTTP/Authentication#authentication_schemes). Ein häufig genutzter Typ ist ["Basic"](/de/docs/Web/HTTP/Authentication#basic_authentication_scheme).
    Siehe auch das [IANA-Register der Authentifizierungsschemata](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml).
- \<credentials>

  - : Die Anmeldedaten werden folgendermaßen erstellt:

    - Der Benutzername und das Passwort werden mit einem Doppelpunkt kombiniert
      (`aladdin:opensesame`).
    - Der resultierende String wird [base64](/de/docs/Glossary/Base64)
      kodiert (`YWxhZGRpbjpvcGVuc2VzYW1l`).

    > [!NOTE]
    > Die Base64-Kodierung bedeutet keine Verschlüsselung oder Hashing! Diese
    > Methode ist so sicher wie das Senden der Anmeldedaten im Klartext (Base64 ist eine
    > umkehrbare Kodierung). Es ist vorzuziehen, HTTPS in Verbindung mit Basic
    > Authentication zu verwenden.

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
