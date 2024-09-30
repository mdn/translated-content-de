---
title: Accept-Encoding
slug: Web/HTTP/Headers/Accept-Encoding
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

Der **`Accept-Encoding`** HTTP-Anforderungsheader gibt die Inhaltscodierung (normalerweise einen Kompressionsalgorithmus) an, die der Client verarbeiten kann. Der Server verwendet die [Inhaltsaushandlung](/de/docs/Web/HTTP/Content_negotiation), um einen der Vorschläge auszuwählen und teilt dem Client diese Auswahl mit dem {{HTTPHeader("Content-Encoding")}} Antwort-Header mit.

Selbst wenn sowohl der Client als auch der Server dieselben Kompressionsalgorithmen unterstützen, kann der Server entscheiden, den Körper einer Antwort nicht zu komprimieren, wenn der Wert `identity` ebenfalls akzeptabel ist. Zwei häufige Fälle führen dazu:

- Die zu sendenden Daten sind bereits komprimiert, daher wird eine zweite Komprimierung die zu übertragende Datenmenge nicht verringern. Dies gilt für vorab komprimierte Bildformate (zum Beispiel JPEG);
- Der Server ist überlastet und kann keine Rechenressourcen für die Komprimierung bereitstellen. Zum Beispiel empfiehlt Microsoft, die Komprimierung nicht durchzuführen, wenn ein Server mehr als 80 % seiner Rechenleistung verwendet.

Solange die Direktiven `identity;q=0` oder `*;q=0` den Wert `identity`, der keine Codierung bedeutet, nicht ausdrücklich verbieten, darf der Server niemals einen {{HTTPStatus("406")}} `Not Acceptable` Fehler zurückgeben.

> [!NOTE]
>
> - Ein IANA-Register führt [eine Liste offizieller Inhaltscodierungen](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#content-coding).
> - Die Codierungen `bzip` und `bzip2` sind nicht standardisiert, können aber in einigen Fällen verwendet werden, einschließlich der Unterstützung älterer Systeme.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>[Request header](/de/docs/Glossary/Request_header)</td>
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
  - : Ein Komprimierungsformat, das die [Lempel-Ziv-Codierung](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77) mit einem 32-Bit-CRC verwendet.
- `compress`
  - : Ein Komprimierungsformat, das den [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/LZW) (LZW) Algorithmus verwendet.
- `deflate`
  - : Ein Komprimierungsformat, das die [zlib](https://en.wikipedia.org/wiki/Zlib)-Struktur mit dem [_deflate_](https://en.wikipedia.org/wiki/DEFLATE) Komprimierungsalgorithmus verwendet.
- `br`
  - : Ein Komprimierungsformat, das den [Brotli](https://en.wikipedia.org/wiki/Brotli) Algorithmus verwendet.
- `zstd`
  - : Ein Komprimierungsformat, das den [Zstandard](https://en.wikipedia.org/wiki/Zstd) Algorithmus verwendet.
- `identity`
  - : Gibt die Identitätsfunktion an (d.h. ohne Änderung oder Komprimierung). Dieser Wert wird immer als akzeptabel angesehen, selbst wenn er nicht angegeben wird.
- `*`
  - : Entspricht jeder im Header nicht aufgeführten Inhaltscodierung. Dies ist der Standardwert, wenn der Header nicht vorhanden ist. Diese Direktive schlägt nicht vor, dass ein Algorithmus unterstützt wird, sondern gibt an, dass keine Präferenz ausgedrückt wird.
- `;q=` (q-Werte Gewichtung)
  - : Jeder Wert wird in eine Präferenzordnung gebracht, die mit einem relativen [Qualitätswert](/de/docs/Glossary/Quality_values), dem sogenannten _Gewicht_, ausgedrückt wird.

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
- [Brotli-Komprimierung](/de/docs/Glossary/Brotli_compression)
- [GZip-Komprimierung](/de/docs/Glossary/GZip_compression)
- [Zstandard-Komprimierung](/de/docs/Glossary/Zstandard_compression)
