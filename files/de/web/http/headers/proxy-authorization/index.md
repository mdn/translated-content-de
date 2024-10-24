---
title: Proxy-Authorization
slug: Web/HTTP/Headers/Proxy-Authorization
l10n:
  sourceCommit: cadc98b0f5f2a770c6ab9b1ca0bf31a90378c6df
---

{{HTTPSidebar}}

Der HTTP **`Proxy-Authorization`** {{Glossary("request_header", "Anforderungsheader")}} enthält die Anmeldedaten, um einen Client bei einem Proxy-Server zu authentifizieren, typischerweise nachdem der Server mit einem {{HTTPStatus("407", "407 Proxy Authentication Required")}}-Status mit dem {{HTTPHeader("Proxy-Authenticate")}}-Header geantwortet hat.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Headername")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Proxy-Authorization: <auth-scheme> <credentials>
```

## Direktiven

- `<auth-scheme>`
  - : Token, das das [Authentifizierungsschema](/de/docs/Web/HTTP/Authentication#authentication_schemes) angibt, wie z. B. `Basic`, `Bearer` usw.
    Das [IANA-Register der Authentifizierungsschemata](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml) führt eine vollständige Liste der verfügbaren Typen.
- `<credentials>`
  - : Anmeldedaten, die für das Authentifizierungsschema verwendet werden.

## Beispiele

### Basic-Authentifizierung

Bei `Basic`-Authentifizierung werden Anmeldedaten im Format `<username>:<password>` gesendet (zum Beispiel `aladdin:opensesame`).
Der resultierende String wird dann {{Glossary("Base64", "base64")}} kodiert (`YWxhZGRpbjpvcGVuc2VzYW1l`).

```http
Proxy-Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

> [!WARNING]
> Base64-Kodierung ist umkehrbar und bietet daher keine kryptografische Sicherheit.
> Diese Methode kann als äquivalent zum Senden der Anmeldedaten im Klartext betrachtet werden.
> Die Verwendung von {{Glossary("HTTPS", "HTTPS")}} wird immer empfohlen, insbesondere jedoch bei der Nutzung von `Basic`-Authentifizierung.

### Bearer-Authentifizierung (Auth-Token)

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
