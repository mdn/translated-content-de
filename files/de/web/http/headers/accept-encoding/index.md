---
title: Accept-Encoding
slug: Web/HTTP/Headers/Accept-Encoding
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP **`Accept-Encoding`** {{Glossary("request_header", "Request-")}} und {{Glossary("response_header", "Response-Header")}} gibt die Inhaltscodierungen (normalerweise ein Komprimierungsalgorithmus) an, die der Absender verstehen kann. In Anfragen verwendet der Server die [Inhaltsaushandlung](/de/docs/Web/HTTP/Content_negotiation), um eine der vom Client vorgeschlagenen Codierungen auszuwählen und informiert den Client über diese Wahl mit dem {{HTTPHeader("Content-Encoding")}} Response-Header. In Antworten liefert er Informationen darüber, welche Inhaltscodierungen der Server in Nachrichten zur angeforderten Ressource verstehen kann, sodass die Codierung in nachfolgenden Anfragen an die Ressource verwendet werden kann. Zum Beispiel ist `Accept-Encoding` in einem {{HTTPStatus("415", "415 Unsupported Media Type")}} Antwort enthalten, wenn eine Anfrage zu einer Ressource (z.B. {{HTTPMethod("PUT")}}) eine nicht unterstützte Codierung verwendet.

Selbst wenn sowohl der Client als auch der Server die gleichen Komprimierungsalgorithmen unterstützen, kann der Server entscheiden, den Körper einer Antwort nicht zu komprimieren, wenn der `identity`-Wert ebenfalls akzeptabel ist. Dies geschieht in zwei häufigen Fällen:

1. Die Daten sind bereits komprimiert, was bedeutet, dass eine zweite Runde der Komprimierung die übertragene Datenmenge nicht reduzieren wird und in einigen Fällen sogar die Größe des Inhalts erhöhen kann. Dies gilt für vorab komprimierte Bildformate (JPEG, zum Beispiel).
2. Der Server ist überlastet und kann keine Rechenressourcen zur Durchführung der Komprimierung bereitstellen. Zum Beispiel empfiehlt Microsoft, nicht zu komprimieren, wenn ein Server mehr als 80 % seiner Rechenleistung nutzt.

Solange die Direktiven `identity;q=0` oder `*;q=0` den `identity`-Wert, der keine Codierung bedeutet, nicht ausdrücklich verbieten, darf der Server niemals einen {{HTTPStatus("406", "406 Not Acceptable")}} Fehler zurückgeben.

> [!NOTE]
> Die IANA pflegt [eine Liste der offiziellen Inhaltscodierungen](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#content-coding). Die Codierungen `bzip` und `bzip2` sind nicht standardmäßig, können aber in einigen Fällen verwendet werden, insbesondere für die Unterstützung älterer Systeme.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}, {{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
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
  - : Ein Komprimierungsformat, das die [Lempel-Ziv-Codierung](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77) mit einem 32-Bit-CRC verwendet.
- `compress`
  - : Ein Komprimierungsformat, das den [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/LZW) (LZW) Algorithmus verwendet.
- `deflate`
  - : Ein Komprimierungsformat, das die [zlib](https://en.wikipedia.org/wiki/Zlib)-Struktur mit dem [_deflate_](https://en.wikipedia.org/wiki/DEFLATE)-Komprimierungsalgorithmus verwendet.
- `br`
  - : Ein Komprimierungsformat, das den [Brotli](https://en.wikipedia.org/wiki/Brotli)-Algorithmus verwendet.
- `zstd`
  - : Ein Komprimierungsformat, das den [Zstandard](https://en.wikipedia.org/wiki/Zstd)-Algorithmus verwendet.
- `identity`
  - : Gibt die Identity-Funktion an (d.h. ohne Änderung oder Komprimierung). Dieser Wert wird immer als akzeptabel angesehen, auch wenn er weggelassen wird.
- `*` (wildcard)
  - : Passt zu jeder Inhaltscodierung, die nicht bereits im Header aufgeführt ist. Dies ist der Standardwert, wenn der Header nicht vorhanden ist. Diese Direktive schlägt nicht vor, dass ein Algorithmus unterstützt wird, sondern zeigt an, dass keine Präferenz ausgedrückt wird.
- `;q=` (Gewichtung von q-Werten)
  - : Jeder Wert wird in einer Reihenfolge der Präferenz ausgedrückt, die durch einen relativen {{Glossary("Quality_values", "Qualitätswert")}} genannt _Gewicht_ ausgedrückt wird.

## Beispiele

### Standardwerte für Accept-Encoding

Bei der Browser-Navigation hat der `Accept-Encoding` Request-Header typischerweise den folgenden Wert:

```http
GET /en-US/ HTTP/2
Host: developer.mozilla.org
Accept-Encoding: gzip, deflate, br, zstd
```

### Gewichtete Accept-Encoding Werte

Der folgende Header zeigt `Accept-Encoding` Präferenzen, die einen Qualitätswert zwischen `0` (niedrigste Priorität) und `1` (höchste Priorität) verwenden. Die Brotli-Komprimierung ist mit `1.0` gewichtet, wodurch `br` die erste Wahl des Clients wird, gefolgt von `gzip` mit `0.8` Priorität und dann jeder anderen Inhaltscodierung mit `0.1`:

```http
Accept-Encoding: br;q=1.0, gzip;q=0.8, *;q=0.1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPStatus("415", "415 Unsupported Media Type")}}
- HTTP [Inhaltsaushandlung](/de/docs/Web/HTTP/Content_negotiation)
- Ein Header mit dem Ergebnis der Inhaltsaushandlung: {{HTTPHeader("Content-Encoding")}}
- Andere ähnliche Header: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Language")}}
- {{Glossary("Brotli_compression", "Brotli-Komprimierung")}}
- {{Glossary("GZip_compression", "GZip-Komprimierung")}}
- {{Glossary("Zstandard_compression", "Zstandard-Komprimierung")}}
