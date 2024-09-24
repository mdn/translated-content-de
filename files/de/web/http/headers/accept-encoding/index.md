---
title: Accept-Encoding
slug: Web/HTTP/Headers/Accept-Encoding
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

Der **`Accept-Encoding`** Anfrage-HTTP-Header gibt an, welche Inhaltscodierung (normalerweise ein Komprimierungsalgorithmus) der Client verstehen kann. Der Server verwendet die [Inhaltsaushandlung](/de/docs/Web/HTTP/Content_negotiation), um einen der Vorschläge auszuwählen und informiert den Client über diese Wahl mit dem {{HTTPHeader("Content-Encoding")}} Antwort-Header.

Selbst wenn sowohl der Client als auch der Server die gleichen Komprimierungsalgorithmen unterstützen, kann der Server entscheiden, den Körper einer Antwort nicht zu komprimieren, wenn der Wert `identity` ebenfalls akzeptabel ist. Zwei häufige Gründe führen dazu:

- Die zu sendenden Daten sind bereits komprimiert, daher würde eine zweite Komprimierung die übertragene Datenmenge nicht verringern. Dies gilt für vorab komprimierte Bildformate (beispielsweise JPEG);
- Der Server ist überlastet und kann keine Rechenressourcen zur Durchführung der Komprimierung bereitstellen. Zum Beispiel empfiehlt Microsoft, nicht zu komprimieren, wenn ein Server mehr als 80 % seiner Rechenleistung nutzt.

Solange die Direktiven `identity;q=0` oder `*;q=0` den Wert `identity`, was keine Kodierung bedeutet, nicht ausdrücklich verbieten, darf der Server niemals einen {{HTTPStatus("406")}} `Nicht akzeptabel` Fehler zurückgeben.

> [!NOTE]
>
> - Ein IANA-Register hält [eine Liste der offiziellen Inhaltskodierungen](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#content-coding) bereit.
> - Die `bzip` und `bzip2` Kodierungen sind nicht standardisiert, können jedoch in einigen Fällen, einschließlich Unterstützung für ältere Systeme, verwendet werden.

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
Accept-Encoding: gzip
Accept-Encoding: compress
Accept-Encoding: deflate
Accept-Encoding: br
Accept-Encoding: zstd
Accept-Encoding: identity
Accept-Encoding: *

// Mehrere Algorithmen, gewichtet mit der Qualitätswertsyntax:
Accept-Encoding: deflate, gzip;q=1.0, *;q=0.5
```

## Direktiven

- `gzip`
  - : Ein Komprimierungsformat, das die [Lempel-Ziv-Codierung](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77) mit einer 32-Bit-CRC verwendet.
- `compress`
  - : Ein Komprimierungsformat, das den [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/LZW) (LZW) Algorithmus verwendet.
- `deflate`
  - : Ein Komprimierungsformat, das die [zlib](https://en.wikipedia.org/wiki/Zlib) Struktur mit dem [_deflate_](https://en.wikipedia.org/wiki/DEFLATE) Komprimierungsalgorithmus verwendet.
- `br`
  - : Ein Komprimierungsformat, das den [Brotli-Algorithmus](https://en.wikipedia.org/wiki/Brotli) verwendet.
- `zstd`
  - : Ein Komprimierungsformat, das den [Zstandard-Algorithmus](https://en.wikipedia.org/wiki/Zstd) verwendet.
- `identity`
  - : Gibt die Identity-Funktion an (d. h. ohne Änderung oder Komprimierung). Dieser Wert wird immer als akzeptabel angesehen, selbst wenn er weggelassen wird.
- `*`
  - : Passt zu jeder Inhaltskodierung, die nicht bereits im Header aufgeführt ist. Dies ist der Standardwert, wenn der Header nicht vorhanden ist. Diese Direktive deutet nicht darauf hin, dass ein Algorithmus unterstützt wird, sondern gibt an, dass keine Präferenz ausgedrückt wird.
- `;q=` (q-Werte Gewichtung)
  - : Jeder Wert wird in einer Präferenzreihenfolge ausgedrückt, die durch einen relativen [Qualitätswert](/de/docs/Glossary/Quality_values), genannt _Gewicht_, angegeben wird.

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

- HTTP [Inhaltsaushandlung](/de/docs/Web/HTTP/Content_negotiation)
- Ein Header mit dem Ergebnis der Inhaltsaushandlung: {{HTTPHeader("Content-Encoding")}}
- Andere ähnliche Header: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Language")}}
- {{Glossary("Brotli-Komprimierung")}}
- {{Glossary("GZip-Komprimierung")}}
- {{Glossary("Zstandard-Komprimierung")}}
