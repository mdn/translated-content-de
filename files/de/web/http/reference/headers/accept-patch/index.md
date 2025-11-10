---
title: Accept-Patch header
short-title: Accept-Patch
slug: Web/HTTP/Reference/Headers/Accept-Patch
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-**`Accept-Patch`**-{{Glossary("response_header", "Antwort-Header")}} informiert darüber, welche [Medientypen](/de/docs/Web/HTTP/Guides/MIME_types) der Server in einer {{HTTPMethod("PATCH")}}-Anfrage verarbeiten kann. Zum Beispiel könnte ein Server, der eine `PATCH`-Anfrage mit einem nicht unterstützten Medientyp erhält, mit {{HTTPStatus("415", "415 Unsupported Media Type")}} und einem `Accept-Patch`-Header antworten, der einen oder mehrere unterstützte Medientypen angibt.

Der Header sollte in {{HTTPMethod("OPTIONS")}}-Anfragen an eine Ressource erscheinen, die die `PATCH`-Methode unterstützt. Ein `Accept-Patch`-Header in einer Antwort auf jede Anfragemethode bedeutet implizit, dass ein `PATCH` auf der Zielressource in der Anfrage erlaubt ist.

> [!NOTE]
> IANA pflegt [eine Liste der offiziellen Content-Codierungen](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#content-coding).
> Die Codierungen `bzip` und `bzip2` sind nicht standardisiert, können jedoch in einigen Fällen, insbesondere zur Unterstützung älterer Systeme, verwendet werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Accept-Patch: <media-type>/<subtype>
Accept-Patch: <media-type>/*
Accept-Patch: */*

// Comma-separated list of media types
Accept-Patch: <media-type>/<subtype>, <media-type>/<subtype>
```

## Direktiven

- `<media-type>/<subtype>`
  - : Ein einzelner, genauer [Medientyp](/de/docs/Web/HTTP/Guides/MIME_types), wie `text/html`.
- `<media-type>/*`
  - : Ein Medientyp ohne einen Subtyp.
    Zum Beispiel entspricht `image/*` den Typen `image/png`, `image/svg`, `image/gif` und anderen Bildtypen.
- `*/*`
  - : Jeder Medientyp.

## Beispiele

```http
Accept-Patch: application/json
Accept-Patch: application/json, text/plain
Accept-Patch: text/plain;charset=utf-8
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Browser-Kompatibilität ist für diesen Header nicht relevant. Der Server sendet den Header, und die Spezifikation definiert kein Clientverhalten.

## Siehe auch

- {{HTTPHeader("Accept-Post")}}
- {{HTTPStatus("415", "415 Unsupported Media Type")}}
- {{HTTPMethod("PATCH")}} Anfrage-Methode
