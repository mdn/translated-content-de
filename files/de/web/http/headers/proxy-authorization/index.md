---
title: Proxy-Authorization
slug: Web/HTTP/Headers/Proxy-Authorization
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP **`Proxy-Authorization`** {{Glossary("request_header", "Anforderungsheader")}} enthält die Anmeldedaten, um einen Client bei einem Proxyserver zu authentifizieren, typischerweise nachdem der Server mit einem {{HTTPStatus("407", "407 Proxy Authentication Required")}}-Status mit dem {{HTTPHeader("Proxy-Authenticate")}}-Header geantwortet hat.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Request_header", "Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
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
  - : Ein nicht Groß-/Kleinschreibung-empfindliches Token, das das verwendete [Authentifizierungsschema](/de/docs/Web/HTTP/Authentication#authentication_schemes) angibt.
    Einige der häufigeren Typen sind [`Basic`](/de/docs/Web/HTTP/Authentication#basic_authentication_scheme), `Digest`, `Negotiate` und `AWS4-HMAC-SHA256`.
    Die IANA führt eine [Liste der Authentifizierungsschemen](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml), aber es gibt weitere Schemata, die von Hostdiensten angeboten werden.
- `<credentials>`
  - : Anmeldedaten, die für das Authentifizierungsschema verwendet werden.
    Im Allgemeinen müssen Sie die relevanten Spezifikationen für das Format überprüfen.

> [!NOTE]
> Siehe {{HTTPHeader("Authorization")}} für weitere Details.

## Beispiele

### Basis-Authentifizierung

Bei der `Basic`-Authentifizierung werden Anmeldedaten im Format `<username>:<password>` gesendet (zum Beispiel `aladdin:opensesame`).
Die resultierende Zeichenkette wird dann {{Glossary("Base64", "base64")}} kodiert (`YWxhZGRpbjpvcGVuc2VzYW1l`).

```http
Proxy-Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

> [!WARNING]
> Base64-Kodierung ist umkehrbar und bietet daher keine kryptografische Sicherheit.
> Diese Methode kann als gleichwertig mit dem Senden der Anmeldedaten im Klartext betrachtet werden.
> {{Glossary("HTTPS", "HTTPS")}} wird immer empfohlen, wenn Sie Authentifizierung verwenden, aber umso mehr, wenn Sie die `Basic`-Authentifizierung verwenden.

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
