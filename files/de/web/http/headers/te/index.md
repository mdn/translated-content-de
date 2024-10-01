---
title: TE
slug: Web/HTTP/Headers/TE
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

Der **`TE`** Anfrage-Header gibt die Übertragungscodierungen an, die der Benutzeragent akzeptieren möchte. (Man könnte ihn informell als `Accept-Transfer-Encoding` bezeichnen, was intuitiver wäre).

> [!NOTE]
> In
> [HTTP/2](https://httpwg.org/specs/rfc9113.html#ConnectionSpecific) und
> [HTTP/3](https://httpwg.org/specs/rfc9114.html#header-formatting) wird das `TE`
> Header-Feld nur akzeptiert, wenn der Wert `trailers` gesetzt ist.

Siehe auch den {{HTTPHeader("Transfer-Encoding")}} Antwort-Header für weitere Details zu Übertragungscodierungen. Beachten Sie, dass `chunked` immer akzeptabel für HTTP/1.1 Empfänger ist und Sie nicht "chunked" mittels des
`TE` Headers spezifizieren müssen. Es ist jedoch nützlich für die Festlegung, wenn der Client Trailer-Felder in einer chunked Transfer-Codierung mit dem Wert "trailers" akzeptiert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
  - : Ein Format, das den [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/LZW) (LZW) Algorithmus verwendet, wird als Name für die Transfercodierung akzeptiert.
- `deflate`
  - : Die Verwendung der [zlib](https://en.wikipedia.org/wiki/Zlib)
    Struktur wird als Name für die Transfercodierung akzeptiert.
- `gzip`
  - : Ein Format, das die [Lempel-Ziv-Kodierung](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77)
    (LZ77) mit einem 32-Bit-CRC verwendet, wird als Name für die Transfercodierung akzeptiert.
- `trailers`
  - : Gibt an, dass der Client bereit ist, Trailer-Felder in einer chunked Transfer-Codierung zu akzeptieren.
- `q`
  - : Wenn mehrere Transfercodierungen akzeptabel sind, kann der `q`-Parameter der
    {{Glossary("Quality_values", "Qualitätswert")}} Syntax Codierungen nach Präferenz ordnen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Transfer-Encoding")}}
- {{HTTPHeader("Trailer")}}
- [Chunked transfer encoding](https://en.wikipedia.org/wiki/Chunked_transfer_encoding)
