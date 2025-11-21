---
title: Accept-Patch header
short-title: Accept-Patch
slug: Web/HTTP/Reference/Headers/Accept-Patch
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

Der HTTP **`Accept-Patch`** {{Glossary("response_header", "Antwort-Header")}} gibt an, welche [Medientypen](/de/docs/Web/HTTP/Guides/MIME_types) der Server in einer {{HTTPMethod("PATCH")}}-Anfrage verarbeiten kann. Zum Beispiel könnte ein Server, der eine `PATCH`-Anfrage mit einem nicht unterstützten Medientyp erhält, mit {{HTTPStatus("415", "415 Unsupported Media Type")}} und einem `Accept-Patch`-Header antworten, der auf einen oder mehrere unterstützte Medientypen verweist.

Der Header sollte in {{HTTPMethod("OPTIONS")}}-Anfragen an eine Ressource erscheinen, die die `PATCH`-Methode unterstützt. Ein `Accept-Patch`-Header in einer Antwort auf eine beliebige Anfragemethode impliziert, dass ein `PATCH` auf die Zielressource in der Anfrage erlaubt ist.

> [!NOTE]
> IANA pflegt [eine Liste offizieller Inhaltskodierungen](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#content-coding).
> Die `bzip`- und `bzip2`-Kodierungen sind nicht standardisiert, können jedoch in einigen Fällen verwendet werden, insbesondere zur Unterstützung älterer Systeme.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
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
  - : Ein Medientyp ohne Subtyp.
    Zum Beispiel entspricht `image/*` `image/png`, `image/svg`, `image/gif` und anderen Bildtypen.
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

Die Browser-Kompatibilität ist für diesen Header nicht relevant.
Der Server sendet den Header, und die Spezifikation definiert das Verhalten des Clients nicht.

## Siehe auch

- {{HTTPHeader("Accept-Post")}}
- {{HTTPStatus("415", "415 Unsupported Media Type")}}
- {{HTTPMethod("PATCH")}} Anfrage-Methode
