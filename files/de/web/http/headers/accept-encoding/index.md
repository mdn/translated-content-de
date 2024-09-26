---
title: Accept-Encoding
slug: Web/HTTP/Headers/Accept-Encoding
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

Der **`Accept-Encoding`** HTTP-Header in der Anfrage gibt die Inhaltskodierung (normalerweise ein Komprimierungsalgorithmus) an, die der Client verstehen kann. Der Server verwendet [Inhaltsaushandlung](/de/docs/Web/HTTP/Content_negotiation), um eines der vorgeschlagenen Formate auszuwählen und informiert den Client über diese Wahl mit dem {{HTTPHeader("Content-Encoding")}} Header in der Antwort.

Auch wenn sowohl der Client als auch der Server dieselben Komprimierungsalgorithmen unterstützen, kann der Server entscheiden, den Inhalt einer Antwort nicht zu komprimieren, wenn der `identity`-Wert ebenfalls akzeptabel ist. Zwei häufige Gründe sind dafür:

- Die zu sendenden Daten sind bereits komprimiert, sodass eine zweite Komprimierung die übertragene Datenmenge nicht verringern würde. Dies gilt für vorkomprimierte Bildformate (z. B. JPEG);
- Der Server ist überlastet und kann keine Rechenressourcen für die Komprimierung bereitstellen. Microsoft empfiehlt beispielsweise, keine Komprimierung vorzunehmen, wenn ein Server mehr als 80 % seiner Rechenkapazität nutzt.

Solange die Direktiven `identity;q=0` oder `*;q=0` den `identity`-Wert, der keine Kodierung bedeutet, nicht ausdrücklich verbieten, darf der Server niemals einen {{HTTPStatus("406")}} `Not Acceptable` Fehler zurückgeben.

> [!NOTE]
>
> - Ein IANA-Register führt [eine Liste offizieller Inhaltskodierungen](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#content-coding).
> - Die `bzip` und `bzip2` Kodierungen sind nicht standardisiert, können jedoch in einigen Fällen verwendet werden, einschließlich Unterstützung älterer Systeme.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
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
  - : Ein Komprimierungsformat, das den [Lempel-Ziv-Algorithmus](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77) mit einem 32-Bit-CRC nutzt.
- `compress`
  - : Ein Komprimierungsformat, das den [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/LZW) (LZW) Algorithmus verwendet.
- `deflate`
  - : Ein Komprimierungsformat, das die [zlib](https://en.wikipedia.org/wiki/Zlib) Struktur mit dem [_deflate_](https://en.wikipedia.org/wiki/DEFLATE) Komprimierungsalgorithmus nutzt.
- `br`
  - : Ein Komprimierungsformat, das den [Brotli](https://en.wikipedia.org/wiki/Brotli) Algorithmus verwendet.
- `zstd`
  - : Ein Komprimierungsformat, das den [Zstandard](https://en.wikipedia.org/wiki/Zstd) Algorithmus benutzt.
- `identity`
  - : Gibt die Identitätsfunktion an (d. h. ohne Änderungen oder Komprimierung). Dieser Wert gilt immer als akzeptabel, auch wenn er weggelassen wird.
- `*`
  - : Entspricht jeder nicht bereits im Header aufgeführten Inhaltskodierung. Dies ist der Standardwert, wenn der Header nicht vorhanden ist. Diese Direktive deutet nicht darauf hin, dass irgendein Algorithmus unterstützt wird, sondern dass keine Präferenz ausgedrückt wird.
- `;q=` (q-Wert Gewichtung)
  - : Jeder Wert wird in einer Präferenzreihenfolge ausgedrückt, die mit einem relativen [Qualitätswert](/de/docs/Glossary/Quality_values) bezeichnet wird, der _Gewicht_ genannt wird.

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
- {{Glossary("Brotli compression")}}
- {{Glossary("GZip compression")}}
- {{Glossary("Zstandard compression")}}
