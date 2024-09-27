---
title: Accept-Encoding
slug: Web/HTTP/Headers/Accept-Encoding
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

Der **`Accept-Encoding`** Anfrage-HTTP-Header gibt die Inhaltscodierung (normalerweise ein Kompressionsalgorithmus) an, die der Client verstehen kann. Der Server verwendet die [Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation), um einen der Vorschläge auszuwählen und teilt die Auswahl dem Client mit dem {{HTTPHeader("Content-Encoding")}} Antwort-Header mit.

Selbst wenn sowohl der Client als auch der Server dieselben Kompressionsalgorithmen unterstützen, kann der Server entscheiden, den Rumpf einer Antwort nicht zu komprimieren, wenn der `identity`-Wert ebenfalls akzeptabel ist. Zwei häufige Szenarien führen dazu:

- Die zu sendenden Daten sind bereits komprimiert, daher wird eine zweite Kompression die übertragene Datenmenge nicht verringern. Dies gilt für vorab komprimierte Bildformate (zum Beispiel JPEG);
- Der Server ist überlastet und kann keine Rechenressourcen zur Durchführung der Kompression bereitstellen. Zum Beispiel empfiehlt Microsoft, keine Kompression durchzuführen, wenn ein Server mehr als 80 % seiner Rechenleistung nutzt.

Solange die Direktiven `identity;q=0` oder `*;q=0` den `identity`-Wert, der keine Kodierung bedeutet, nicht ausdrücklich verbieten, darf der Server niemals einen {{HTTPStatus("406")}} `Not Acceptable` Fehler zurückgeben.

> [!NOTE]
>
> - Ein IANA-Register führt [eine Liste der offiziellen Inhaltskodierungen](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#content-coding).
> - Die `bzip`- und `bzip2`-Kodierungen sind nicht standardisiert, können jedoch in einigen Fällen, einschließlich Unterstützung aus Gründen der Kompatibilität, verwendet werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Anfrage-Header](/de/docs/Glossary/Request_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Accept-Encoding: gzip
Accept-Encoding: compress
Accept-Encoding: deflate
Accept-Encoding: br
Accept-Encoding: zstd
Accept-Encoding: identity
Accept-Encoding: *

// Multiple algorithms, weighted with the quality value syntax:
Accept-Encoding: deflate, gzip;q=1.0, *;q=0.5
```

## Direktiven

- `gzip`
  - : Ein Kompressionsformat, das das [Lempel-Ziv-Coding](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77) mit einem 32-Bit-CRC verwendet.
- `compress`
  - : Ein Kompressionsformat, das den [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/LZW) (LZW) Algorithmus verwendet.
- `deflate`
  - : Ein Kompressionsformat, das die [zlib](https://en.wikipedia.org/wiki/Zlib) Struktur mit dem [_deflate_](https://en.wikipedia.org/wiki/DEFLATE) Kompressionsalgorithmus verwendet.
- `br`
  - : Ein Kompressionsformat, das den [Brotli](https://en.wikipedia.org/wiki/Brotli) Algorithmus verwendet.
- `zstd`
  - : Ein Kompressionsformat, das den [Zstandard](https://en.wikipedia.org/wiki/Zstd) Algorithmus verwendet.
- `identity`
  - : Besagt die Identity-Funktion (d. h. ohne Änderung oder Kompression). Dieser Wert wird immer als akzeptabel betrachtet, auch wenn er weggelassen wird.
- `*`
  - : Entspricht jeder Inhaltskodierung, die nicht bereits im Header aufgelistet ist. Dies ist der Standardwert, wenn der Header nicht vorhanden ist. Diese Direktive schlägt nicht vor, dass ein beliebiger Algorithmus unterstützt wird, sondern zeigt an, dass keine Präferenz ausgedrückt wird.
- `;q=` (qvalues Gewichtung)
  - : Jeder Wert wird in einer Rangfolge der Präferenz ausgedrückt, die unter Verwendung eines relativen [Qualitätswertes](/de/docs/Glossary/Quality_values) _Gewichtung_ genannt wird, angegeben.

## Beispiele

```http
Accept-Encoding: gzip

Accept-Encoding: gzip, compress, br

Accept-Encoding: gzip, compress, br, zstd

Accept-Encoding: br;q=1.0, gzip;q=0.8, *;q=0.1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTTP [Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation)
- Ein Header mit dem Ergebnis der Inhaltsverhandlung: {{HTTPHeader("Content-Encoding")}}
- Andere ähnliche Header: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Language")}}
- [Brotli-Kompression](/de/docs/Glossary/Brotli_compression)
- [GZip-Kompression](/de/docs/Glossary/GZip_compression)
- [Zstandard-Kompression](/de/docs/Glossary/Zstandard_compression)
