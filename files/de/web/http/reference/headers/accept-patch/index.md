---
title: Accept-Patch header
short-title: Accept-Patch
slug: Web/HTTP/Reference/Headers/Accept-Patch
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

Der HTTP **`Accept-Patch`** {{Glossary("response_header", "Antwort-Header")}} gibt an, welche [Medientypen](/de/docs/Web/HTTP/Guides/MIME_types) der Server in einer {{HTTPMethod("PATCH")}}-Anfrage verstehen kann.
Beispielsweise könnte ein Server, der eine `PATCH`-Anfrage mit einem nicht unterstützten Medientyp erhält, mit {{HTTPStatus("415", "415 Unsupported Media Type")}} antworten und in einem `Accept-Patch`-Header einen oder mehrere unterstützte Medientypen angeben.

Der Header sollte in {{HTTPMethod("OPTIONS")}}-Anfragen an eine Ressource erscheinen, die die `PATCH`-Methode unterstützt.
Ein `Accept-Patch`-Header in einer Antwort auf jede beliebige Anfragemethode bedeutet implizit, dass ein `PATCH` auf der Zielressource in der Anfrage erlaubt ist.

> [!NOTE]
> Die IANA pflegt [eine Liste offizieller Inhaltskodierungen](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#content-coding).
> Die Kodierungen `bzip` und `bzip2` sind nicht standardisiert, können aber in einigen Fällen, insbesondere für Altsysteme, verwendet werden.

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

Browser-Kompatibilität ist für diesen Header nicht relevant.
Der Server sendet den Header, und die Spezifikation definiert kein Verhalten des Clients.

## Siehe auch

- {{HTTPHeader("Accept-Post")}}
- {{HTTPStatus("415", "415 Unsupported Media Type")}}
- {{HTTPMethod("PATCH")}}-Anfragemethode
