---
title: TE
slug: Web/HTTP/Headers/TE
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

Der **`TE`** Anforderungsheader gibt die Übertragungscodierungen an, die der Benutzeragent akzeptieren kann. (Sie könnten ihn informell als `Accept-Transfer-Encoding` bezeichnen, was intuitiver wäre).

> [!NOTE]
> In
> [HTTP/2](https://httpwg.org/specs/rfc9113.html#ConnectionSpecific) und
> [HTTP/3](https://httpwg.org/specs/rfc9114.html#header-formatting) wird das `TE`
> Header-Feld nur angenommen, wenn der Wert `trailers` gesetzt ist.

Siehe auch den {{HTTPHeader("Transfer-Encoding")}} Antwort-Header für weitere Details zu Übertragungscodierungen. Beachten Sie, dass `chunked` für HTTP/1.1-Empfänger immer akzeptabel ist und Sie `"chunked"` nicht im `TE`-Header angeben müssen. Jedoch ist es nützlich, wenn der Client Trailer-Felder in einer gestückelten Transfercodierung mit dem Wert "trailers" akzeptiert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Anforderungsheader](/de/docs/Glossary/Request_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
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

// Multiple directives, weighted with the {{glossary("quality values", "quality value")}} syntax:
TE: trailers, deflate;q=0.5
```

## Direktiven

- `compress`
  - : Ein Format, das den [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/LZW) (LZW) Algorithmus verwendet, wird als Name einer Übertragungscodierung akzeptiert.
- `deflate`
  - : Die Nutzung der [zlib](https://en.wikipedia.org/wiki/Zlib)
    Struktur wird als Name einer Übertragungscodierung akzeptiert.
- `gzip`
  - : Ein Format, das die [Lempel-Ziv-Codierung](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77)
    (LZ77) mit einer 32-Bit-CRC verwendet, wird als Name einer Übertragungscodierung akzeptiert.
- `trailers`
  - : Zeigt an, dass der Client bereit ist, Trailer-Felder in einer gestückelten Transfercodierung zu akzeptieren.
- `q`
  - : Wenn mehrere Übertragungscodierungen akzeptabel sind, kann der `q`-Parameter der
    [Qualitätswert](/de/docs/Glossary/Quality_values) Syntax Codierungen nach Präferenz gewichten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Transfer-Encoding")}}
- {{HTTPHeader("Trailer")}}
- [Gestückelte Transfercodierung](https://en.wikipedia.org/wiki/Chunked_transfer_encoding)
