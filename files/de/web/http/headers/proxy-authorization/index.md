---
title: Proxy-Authorization
slug: Web/HTTP/Headers/Proxy-Authorization
l10n:
  sourceCommit: 0b02491044c424c57fc7aff0c970164da602a72c
---

{{HTTPSidebar}}

Der HTTP **`Proxy-Authorization`** {{Glossary("request_header", "Anforderungsheader")}} enthält die Anmeldedaten, um einen Client bei einem Proxy-Server zu authentifizieren, typischerweise nachdem der Server mit einem {{HTTPStatus("407", "407 Proxy Authentication Required")}}-Status und dem {{HTTPHeader("Proxy-Authenticate")}}-Header geantwortet hat.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
  - : Token, das das [Authentifizierungsschema](/de/docs/Web/HTTP/Authentication#authentication_schemes) angibt, wie zum Beispiel `Basic`, `Bearer` usw.
    Das [IANA-Register der Authentifizierungsschemata](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml) führt eine vollständige Liste der verfügbaren Typen.
- `<credentials>`
  - : Anmeldedaten, die für das Authentifizierungsschema verwendet werden.

## Beispiele

### Basis-Authentifizierung

Bei der `Basic`-Authentifizierung werden Anmeldedaten im Format `<username>:<password>` gesendet (zum Beispiel `aladdin:opensesame`).
Die resultierende Zeichenfolge wird dann {{Glossary("Base64", "Base64")}} kodiert (`YWxhZGRpbjpvcGVuc2VzYW1l`).

```http
Proxy-Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

> [!WARNING]
> Base64-Codierung ist umkehrbar und bietet daher keine kryptographische Sicherheit.
> Diese Methode kann als gleichwertig mit dem Versenden von Anmeldedaten im Klartext betrachtet werden.
> {{Glossary("HTTPS", "HTTPS")}} wird immer empfohlen, wenn Authentifizierung verwendet wird, und ist besonders bei Verwendung der `Basic`-Authentifizierung ratsam.

### Träger-Authentifizierung (Auth-Token)

```http
Proxy-Authorization: Bearer kNTktNTA1My00YzLT1234
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Authentifizierung](/de/docs/Web/HTTP/Authentication)
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Authorization")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
