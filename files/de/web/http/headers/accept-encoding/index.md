---
title: Accept-Encoding
slug: Web/HTTP/Headers/Accept-Encoding
l10n:
  sourceCommit: 92b03e46cef6be37de60799363e3e33e3415b491
---

{{HTTPSidebar}}

Der HTTP-**`Accept-Encoding`**-{{Glossary("request_header", "Request-Header")}} gibt die Inhaltskodierung (in der Regel ein Komprimierungsalgorithmus) an, die der Client verstehen kann. Der Server verwendet die [Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation), um einen der Vorschläge auszuwählen, und informiert den Client über diese Wahl mit dem {{HTTPHeader("Content-Encoding")}}-Response-Header.

Selbst wenn sowohl der Client als auch der Server dieselben Komprimierungsalgorithmen unterstützen, kann der Server entscheiden, den Inhalt eines Antwortkörpers nicht zu komprimieren, wenn auch der `identity`-Wert akzeptabel ist. Dies geschieht in zwei häufigen Fällen:

1. Die Daten sind bereits komprimiert, was bedeutet, dass eine zweite Komprimierungsrunde die Größe der übertragenen Daten nicht verringert und in manchen Fällen die Größe des Inhalts tatsächlich erhöhen kann. Dies gilt für vorab komprimierte Bildformate (zum Beispiel JPEG).
2. Der Server ist überlastet und kann keine Rechenressourcen für die Komprimierung bereitstellen. Beispielsweise empfiehlt Microsoft, keine Komprimierung durchzuführen, wenn ein Server mehr als 80 % seiner Rechenleistung nutzt.

Solange die Anweisungen `identity;q=0` oder `*;q=0` den `identity`-Wert, was keine Kodierung bedeutet, nicht ausdrücklich verbieten, darf der Server niemals einen {{HTTPStatus("406", "406 Not Acceptable")}}-Fehler zurückgeben.

> [!NOTE]
> IANA pflegt [eine Liste der offiziellen Inhaltkodierungen](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#content-coding).
> Die `bzip`- und `bzip2`-Kodierungen sind nicht standardisiert, können jedoch in einigen Fällen verwendet werden, insbesondere zum Erhalt der Abwärtskompatibilität.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>Ja</td>
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
  - : Ein Komprimierungsformat, das die [Lempel-Ziv-Kodierung](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77) mit einem 32-Bit-CRC verwendet.
- `compress`
  - : Ein Komprimierungsformat, das den [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/LZW) (LZW)-Algorithmus verwendet.
- `deflate`
  - : Ein Komprimierungsformat, das die [zlib](https://en.wikipedia.org/wiki/Zlib)-Struktur mit dem [_deflate_](https://en.wikipedia.org/wiki/DEFLATE)-Komprimierungsalgorithmus verwendet.
- `br`
  - : Ein Komprimierungsformat, das den [Brotli](https://en.wikipedia.org/wiki/Brotli)-Algorithmus verwendet.
- `zstd`
  - : Ein Komprimierungsformat, das den [Zstandard](https://en.wikipedia.org/wiki/Zstd)-Algorithmus verwendet.
- `identity`
  - : Gibt die Identity-Funktion an (das heißt, ohne Modifikation oder Komprimierung). Dieser Wert wird immer als akzeptabel angesehen, selbst wenn er weggelassen wird.
- `*`
  - : Entspricht jeder Inhaltkodierung, die nicht bereits im Header aufgeführt ist. Dies ist der Standardwert, wenn der Header nicht vorhanden ist. Diese Direktive schlägt nicht vor, dass ein Algorithmus unterstützt wird, sondern zeigt an, dass keine Präferenz ausgedrückt wird.
- `;q=` (qvalues-Gewichtung)
  - : Jedem Wert wird eine Präferenzreihenfolge zugewiesen, die durch einen relativen {{Glossary("Quality_values", "Qualitätswert")}} ausgedrückt wird, der als _Gewichtung_ bezeichnet wird.

## Beispiele

### Standardwerte von Accept-Encoding

Die Browser-Navigation hat typischerweise den folgenden `Accept-Encoding`-Request-Header-Wert:

```http
GET /en-US/ HTTP/2
Host: developer.mozilla.org
Accept-Encoding: gzip, deflate, br, zstd
```

### Gewichtete Accept-Encoding Werte

Der folgende Request-Header zeigt `Accept-Encoding`-Präferenzen mithilfe eines Qualitätswertes zwischen `0` (niedrigste Priorität) und `1` (höchste Priorität). Die Brotli-Komprimierung hat eine Gewichtung von `1.0`, was `br` zur ersten Wahl des Clients macht, gefolgt von `gzip` mit `0.8` Priorität und dann jeder anderen Inhaltskodierung mit `0.1`:

```http
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
- {{Glossary("Brotli_compression", "Brotli-Komprimierung")}}
- {{Glossary("GZip_compression", "GZip-Komprimierung")}}
- {{Glossary("Zstandard_compression", "Zstandard-Komprimierung")}}
