---
title: TE
slug: Web/HTTP/Headers/TE
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

Der Anforderungsheader **`TE`** gibt an, welche Transfer-Codierungen der Benutzeragent zu akzeptieren bereit ist. (Sie könnten es informell als `Accept-Transfer-Encoding` bezeichnen, was intuitiver wäre).

> [!NOTE]
> In
> [HTTP/2](https://httpwg.org/specs/rfc9113.html#ConnectionSpecific) und
> [HTTP/3](https://httpwg.org/specs/rfc9114.html#header-formatting) wird das `TE`
> Header-Feld nur akzeptiert, wenn der `trailers` Wert gesetzt ist.

Sehen Sie auch den {{HTTPHeader("Transfer-Encoding")}} Antwort-Header für weitere Details zu Transfer-Codierungen. Beachten Sie, dass `chunked` immer für HTTP/1.1-Empfänger akzeptabel ist und Sie müssen `"chunked"` nicht mittels des
`TE` Headers spezifizieren. Es ist jedoch nützlich, es festzulegen, wenn der Client Trailer-Felder in einer Chunked-Transfer-Codierung mit dem "trailers" Wert akzeptiert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
TE: compress
TE: deflate
TE: gzip
TE: trailers

// Mehrere Direktiven, gewichtet mit der {{glossary("quality values", "quality value")}} Syntax:
TE: trailers, deflate;q=0.5
```

## Direktiven

- `compress`
  - : Ein Format unter Verwendung des [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/LZW) (LZW) Algorithmus wird als Transfer-Coding-Name akzeptiert.
- `deflate`
  - : Die Verwendung der [zlib](https://en.wikipedia.org/wiki/Zlib)
    Struktur wird als Transfer-Coding-Name akzeptiert.
- `gzip`
  - : Ein Format unter Verwendung der [Lempel-Ziv-Kodierung](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77)
    (LZ77), mit einer 32-Bit-CRC wird als Transfer-Coding-Name akzeptiert.
- `trailers`
  - : Gibt an, dass der Client bereit ist, Trailer-Felder in einer Chunked-Transfer-Codierung zu akzeptieren.
- `q`
  - : Wenn mehrere Transfer-Codierungen akzeptabel sind, kann der `q`-Parameter der
    [quality value](/de/docs/Glossary/Quality_values) Syntax Codierungen nach Präferenz ordnen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Transfer-Encoding")}}
- {{HTTPHeader("Trailer")}}
- [Chunked transfer encoding](https://en.wikipedia.org/wiki/Chunked_transfer_encoding)
