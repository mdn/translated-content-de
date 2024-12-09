---
title: Proxy-Authorization
slug: Web/HTTP/Headers/Proxy-Authorization
l10n:
  sourceCommit: ed041385cf874deec203e820fd415bdcd6f98a19
---

{{HTTPSidebar}}

Der HTTP-**`Proxy-Authorization`**-{{Glossary("request_header", "Anforderungsheader")}} enthält die Anmeldedaten, um einen Client bei einem Proxy-Server zu authentifizieren, normalerweise nachdem der Server mit einem {{HTTPStatus("407", "407 Proxy Authentication Required")}}-Status mit dem {{HTTPHeader("Proxy-Authenticate")}}-Header geantwortet hat.

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
  - : Ein nicht-auf Groß-/Kleinschreibung achtendes Token, das das verwendete [Authentifizierungsschema](/de/docs/Web/HTTP/Authentication#authentication_schemes) angibt.
    Einige der gängigeren Typen sind [`Basic`](/de/docs/Web/HTTP/Authentication#basic_authentication_scheme), `Digest`, `Negotiate` und `AWS4-HMAC-SHA256`.
    IANA führt eine [Liste der Authentifizierungsschemata](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml), aber es gibt andere Schemata, die von Host-Services angeboten werden.
- `<credentials>`
  - : Anmeldedaten, die für das Authentifizierungsschema verwendet werden.
    Im Allgemeinen müssen Sie die entsprechenden Spezifikationen für das Format überprüfen.

> [!NOTE]
> Weitere Details finden Sie unter {{HTTPHeader("Authorization")}}.

## Beispiele

### Basic-Authentifizierung

Bei der `Basic`-Authentifizierung werden Anmeldedaten im Format `<username>:<password>` gesendet (zum Beispiel `aladdin:opensesame`).
Der resultierende String wird dann {{Glossary("Base64", "base64")}} kodiert (`YWxhZGRpbjpvcGVuc2VzYW1l`).

```http
Proxy-Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

> [!WARNING]
> Base64-Kodierung ist umkehrbar und bietet daher keine kryptografische Sicherheit.
> Diese Methode kann als gleichwertig mit dem Senden der Anmeldedaten im Klartext angesehen werden.
> {{Glossary("HTTPS", "HTTPS")}} wird immer empfohlen, wenn Authentifizierung verwendet wird, insbesondere bei Verwendung der `Basic`-Authentifizierung.

### Bearer-Authentifizierung (Authentifizierungs-Token)

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
