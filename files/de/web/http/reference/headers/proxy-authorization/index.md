---
title: Proxy-Authorization header
short-title: Proxy-Authorization
slug: Web/HTTP/Reference/Headers/Proxy-Authorization
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP-**`Proxy-Authorization`**-{{Glossary("request_header", "Request-Header")}} enthält die Anmeldeinformationen zur Authentifizierung eines Clients bei einem Proxy-Server, normalerweise nachdem der Server mit einem {{HTTPStatus("407", "407 Proxy Authentication Required")}}-Status mit dem {{HTTPHeader("Proxy-Authenticate")}}-Header geantwortet hat.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Proxy-Authorization: <auth-scheme> <credentials>
```

## Direktiven

- `<auth-scheme>`
  - : Ein nicht case-sensitives Token, das das verwendete [Authentifizierungsschema](/de/docs/Web/HTTP/Guides/Authentication#authentication_schemes) angibt.
    Einige der häufigeren Typen sind [`Basic`](/de/docs/Web/HTTP/Guides/Authentication#basic_authentication_scheme), `Digest`, `Negotiate` und `AWS4-HMAC-SHA256`.
    IANA pflegt eine [Liste von Authentifizierungsschemata](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml), aber es gibt auch andere von Host-Diensten angebotene Schemata.
- `<credentials>`
  - : Anmeldeinformationen, die für das Authentifizierungsschema verwendet werden.
    Generell müssen Sie die relevanten Spezifikationen für das Format überprüfen.

> [!NOTE]
> Siehe {{HTTPHeader("Authorization")}} für weitere Informationen.

## Beispiele

### Basis-Authentifizierung

Bei der `Basic`-Authentifizierung werden die Anmeldeinformationen im Format `<username>:<password>` gesendet (zum Beispiel `aladdin:opensesame`).
Die resultierende Zeichenkette wird dann {{Glossary("Base64", "Base64")}} kodiert (`YWxhZGRpbjpvcGVuc2VzYW1l`).

```http
Proxy-Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

> [!WARNING]
> Die Base64-Codierung ist reversibel und bietet daher keine kryptographische Sicherheit.
> Diese Methode kann als gleichwertig mit dem Senden der Anmeldeinformationen im Klartext angesehen werden.
> {{Glossary("HTTPS", "HTTPS")}} wird immer empfohlen, wenn Authentifizierung verwendet wird, insbesondere jedoch bei `Basic`-Authentifizierung.

### Bearer-Authentifizierung (Auth-Token)

```http
Proxy-Authorization: Bearer kNTktNTA1My00YzLT1234
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication)
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Authorization")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
