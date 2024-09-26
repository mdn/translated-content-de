---
title: TE
slug: Web/HTTP/Headers/TE
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

Der **`TE`** Anforderungsheader gibt die Transfercodierungen an, die der Benutzeragent akzeptieren kann. (Man könnte ihn informell als `Accept-Transfer-Encoding` bezeichnen, was intuitiver wäre).

> [!NOTE]
> In
> [HTTP/2](https://httpwg.org/specs/rfc9113.html#ConnectionSpecific) und
> [HTTP/3](https://httpwg.org/specs/rfc9114.html#header-formatting) wird das `TE`
> Header-Feld nur akzeptiert, wenn der Wert `trailers` gesetzt ist.

Siehe auch den {{HTTPHeader("Transfer-Encoding")}} Antwortheader für weitere Details zu Transfercodierungen. Beachten Sie, dass `chunked` für HTTP/1.1 Empfänger immer akzeptabel ist und Sie nicht `"chunked"` mit dem
`TE` Header angeben müssen. Es ist jedoch nützlich, wenn der Client Trailer-Felder in einer chunked Transfercodierung mit dem "trailers" Wert akzeptiert.

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
  - : Ein Format, das den [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/LZW) (LZW) Algorithmus verwendet, wird als Transfercodierungsname akzeptiert.
- `deflate`
  - : Die Verwendung der [zlib](https://en.wikipedia.org/wiki/Zlib)
    Struktur wird als Transfercodierungsname akzeptiert.
- `gzip`
  - : Ein Format, das die [Lempel-Ziv-Codierung](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77)
    (LZ77) mit einer 32-Bit CRC verwendet, wird als Transfercodierungsname akzeptiert.
- `trailers`
  - : Gibt an, dass der Client bereit ist, Trailer-Felder in einer chunked Transfercodierung zu akzeptieren.
- `q`
  - : Wenn mehrere Transfercodierungen akzeptabel sind, kann der `q` Parameter der
    [Qualitätswert](/de/docs/Glossary/Quality_values) Syntax Codierungen nach Präferenz bewerten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Transfer-Encoding")}}
- {{HTTPHeader("Trailer")}}
- [Chunked transfer encoding](https://en.wikipedia.org/wiki/Chunked_transfer_encoding)
