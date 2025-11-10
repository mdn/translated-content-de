---
title: Proxy-Authorization header
short-title: Proxy-Authorization
slug: Web/HTTP/Reference/Headers/Proxy-Authorization
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-**`Proxy-Authorization`**-{{Glossary("request_header", "Request-Header")}} enthält die Anmeldedaten, um einen Client bei einem Proxy-Server zu authentifizieren, typischerweise nachdem der Server mit einem {{HTTPStatus("407", "407 Proxy Authentication Required")}} Status zusammen mit dem {{HTTPHeader("Proxy-Authenticate")}} Header geantwortet hat.

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
  - : Ein nicht casesensitiver Token, der das verwendete [Authentifizierungsschema](/de/docs/Web/HTTP/Guides/Authentication#authentication_schemes) angibt.
    Zu den gängigsten Typen gehören [`Basic`](/de/docs/Web/HTTP/Guides/Authentication#basic_authentication_scheme), `Digest`, `Negotiate` und `AWS4-HMAC-SHA256`.
    IANA führt eine [Liste der Authentifizierungsschemas](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml), aber es gibt auch andere Schemas, die von Hostdiensten angeboten werden.
- `<credentials>`
  - : Anmeldedaten, die für das Authentifizierungsschema verwendet werden.
    Im Allgemeinen müssen Sie die relevanten Spezifikationen für das Format überprüfen.

> [!NOTE]
> Weitere Details finden Sie unter {{HTTPHeader("Authorization")}}.

## Beispiele

### Basis-Authentifizierung

Bei der `Basic`-Authentifizierung werden die Anmeldedaten im Format `<username>:<password>` (zum Beispiel `aladdin:opensesame`) gesendet.
Die resultierende Zeichenfolge wird dann {{Glossary("Base64", "base64")}} kodiert (`YWxhZGRpbjpvcGVuc2VzYW1l`).

```http
Proxy-Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

> [!WARNING]
> Die Base64-Kodierung ist umkehrbar und bietet daher keine kryptografische Sicherheit.
> Diese Methode kann als äquivalent zum Senden der Anmeldedaten im Klartext angesehen werden.
> {{Glossary("HTTPS", "HTTPS")}} wird immer empfohlen, wenn Authentifizierung verwendet wird, ist aber umso mehr zu empfehlen, wenn `Basic`-Authentifizierung genutzt wird.

### Träger-Authentifizierung (Auth-Token)

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
