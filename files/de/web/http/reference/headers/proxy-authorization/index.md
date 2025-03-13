---
title: Proxy-Authorization
slug: Web/HTTP/Reference/Headers/Proxy-Authorization
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-**`Proxy-Authorization`**-{{Glossary("request_header", "Request-Header")}} enthält die Anmeldedaten, um einen Client bei einem Proxy-Server zu authentifizieren, typischerweise nachdem der Server mit einem {{HTTPStatus("407", "407 Proxy Authentication Required")}}-Status mit dem {{HTTPHeader("Proxy-Authenticate")}}-Header geantwortet hat.

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
  - : Ein nicht großgeschriebenes Token, das das verwendete [Authentifizierungsschema](/de/docs/Web/HTTP/Guides/Authentication#authentication_schemes) angibt.
    Einige der häufigeren Typen sind [`Basic`](/de/docs/Web/HTTP/Guides/Authentication#basic_authentication_scheme), `Digest`, `Negotiate` und `AWS4-HMAC-SHA256`.
    IANA führt eine [Liste der Authentifizierungsschemata](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml), aber es gibt auch andere Schemata, die von Host-Diensten angeboten werden.
- `<credentials>`
  - : Anmeldedaten, die für das Authentifizierungsschema verwendet werden.
    In der Regel müssen Sie die relevanten Spezifikationen für das Format überprüfen.

> [!NOTE]
> Sehen Sie sich {{HTTPHeader("Authorization")}} für weitere Details an.

## Beispiele

### Basis-Authentifizierung

Bei der `Basic`-Authentifizierung werden die Anmeldedaten im Format `<username>:<password>` gesendet (zum Beispiel `aladdin:opensesame`).
Der resultierende String wird dann {{Glossary("Base64", "Base64")}} codiert (`YWxhZGRpbjpvcGVuc2VzYW1l`).

```http
Proxy-Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

> [!WARNING]
> Die Base64-Codierung ist umkehrbar und bietet daher keine kryptografische Sicherheit.
> Diese Methode kann als gleichwertig mit dem Senden der Anmeldedaten im Klartext betrachtet werden.
> {{Glossary("HTTPS", "HTTPS")}} wird immer empfohlen, wenn Authentifizierung verwendet wird, aber noch stärker, wenn die `Basic`-Authentifizierung verwendet wird.

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
