---
title: Proxy-Authorization header
short-title: Proxy-Authorization
slug: Web/HTTP/Reference/Headers/Proxy-Authorization
l10n:
  sourceCommit: a4c63d2855b2f557e7d1ee821dee65011d569a41
---

Der HTTP-**`Proxy-Authorization`**-{{Glossary("request_header", "Request-Header")}} enthält die Anmeldedaten zur Authentifizierung eines Clients bei einem Proxy-Server, typischerweise nachdem der Server mit dem Status {{HTTPStatus("407", "407 Proxy Authentication Required")}} und dem Header {{HTTPHeader("Proxy-Authenticate")}} geantwortet hat.

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
  - : Ein Token ohne Beachtung der Groß-/Kleinschreibung, das das verwendete [Authentifizierungsschema](/de/docs/Web/HTTP/Guides/Authentication#authentication_schemes) angibt.
    Zu den häufigeren Typen gehören [`Basic`](/de/docs/Web/HTTP/Guides/Authentication#basic_authentication_scheme), `Digest`, `Negotiate` und `AWS4-HMAC-SHA256`.
    Die IANA verwaltet eine [Liste von Authentifizierungsschemata](https://www.iana.org/assignments/http-authschemes), es gibt jedoch weitere Schemata, die von Host-Diensten angeboten werden.
- `<credentials>`
  - : Anmeldedaten, die für das Authentifizierungsschema verwendet werden.
    Im Allgemeinen müssen Sie die entsprechenden Spezifikationen für das Format prüfen.

> [!NOTE]
> Weitere Details finden Sie unter {{HTTPHeader("Authorization")}}.

## Beispiele

### Basic-Authentifizierung

Bei der `Basic`-Authentifizierung werden Anmeldedaten im Format `<username>:<password>` gesendet (zum Beispiel `aladdin:opensesame`).
Die resultierende Zeichenfolge wird anschließend {{Glossary("Base64", "base64")}}-kodiert (`YWxhZGRpbjpvcGVuc2VzYW1l`).

```http
Proxy-Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

> [!WARNING]
> Die Base64-Kodierung ist umkehrbar und bietet daher keine kryptografische Sicherheit.
> Diese Methode kann als gleichwertig mit dem Senden der Anmeldedaten im Klartext angesehen werden.
> {{Glossary("HTTPS", "HTTPS")}} wird bei der Verwendung von Authentifizierung immer empfohlen, gilt jedoch bei der Verwendung der `Basic`-Authentifizierung umso mehr.

### Bearer-Authentifizierung (Authentifizierungstoken)

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
