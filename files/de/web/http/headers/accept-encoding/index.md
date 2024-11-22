---
title: Accept-Encoding
slug: Web/HTTP/Headers/Accept-Encoding
l10n:
  sourceCommit: f341bd4728d3448faf6b9fc3b45980c35c067f25
---

{{HTTPSidebar}}

Der HTTP-**`Accept-Encoding`**-{{Glossary("request_header", "Anfrage-")}} und {{Glossary("response_header", "Antwortheader")}} gibt die Inhaltskodierung (in der Regel ein Kompressionsalgorithmus) an, die der Sender verstehen kann. Bei Anfragen verwendet der Server die [Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation), um eine der Kodierungsvorschläge des Clients auszuwählen, und informiert den Client mit dem {{HTTPHeader("Content-Encoding")}}-Antwortheader über diese Auswahl. Bei Antworten liefert er Informationen darüber, welche Inhaltskodierungen der Server bei Nachrichten an die angeforderte Ressource verstehen kann, so dass die Kodierung in nachfolgenden Anfragen an die Ressource verwendet werden kann. Zum Beispiel ist `Accept-Encoding` in einer {{HTTPStatus("415", "415 Unsupported Media Type")}}-Antwort enthalten, wenn eine Anfrage an eine Ressource (z.B. {{HTTPMethod("PUT")}}) eine nicht unterstützte Kodierung verwendet hat.

Selbst wenn sowohl der Client als auch der Server dieselben Kompressionsalgorithmen unterstützen, kann der Server entscheiden, den Körper einer Antwort nicht zu komprimieren, wenn der `identity`-Wert ebenfalls akzeptabel ist. Dies geschieht in zwei häufigen Fällen:

1. Die Daten sind bereits komprimiert, was bedeutet, dass eine zweite Runde der Komprimierung die übertragene Datenmenge nicht reduziert und in einigen Fällen sogar die Größe des Inhalts erhöhen kann. Dies gilt für vorab komprimierte Bildformate (zum Beispiel JPEG).
2. Der Server ist überlastet und kann keine Rechenressourcen zur Durchführung der Komprimierung bereitstellen. Beispielsweise empfiehlt Microsoft, nicht zu komprimieren, wenn ein Server mehr als 80 % seiner Rechenleistung nutzt.

Solange die `identity;q=0`- oder `*;q=0`-Direktiven den `identity`-Wert, der keine Kodierung bedeutet, nicht ausdrücklich verbieten, darf der Server niemals einen {{HTTPStatus("406", "406 Not Acceptable")}}-Fehler zurückgeben.

> [!NOTE]
> IANA pflegt [eine Liste der offiziellen Inhaltskodierungen](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#content-coding).
> Die Kodierungen `bzip` und `bzip2` sind nicht standardisiert, können aber in einigen Fällen, insbesondere für Legacy-Unterstützung, verwendet werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anfrageheader")}}, {{Glossary("Response_header", "Antwortheader")}}</td>
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
  - : Ein Kompressionsformat, das die [Lempel-Ziv-Kodierung](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77) mit einem 32-Bit-CRC verwendet.
- `compress`
  - : Ein Kompressionsformat, das den [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/LZW) (LZW)-Algorithmus verwendet.
- `deflate`
  - : Ein Kompressionsformat, das die [zlib](https://en.wikipedia.org/wiki/Zlib)-Struktur mit dem [_deflate_](https://en.wikipedia.org/wiki/DEFLATE)-Kompressionsalgorithmus verwendet.
- `br`
  - : Ein Kompressionsformat, das den [Brotli](https://en.wikipedia.org/wiki/Brotli)-Algorithmus verwendet.
- `zstd`
  - : Ein Kompressionsformat, das den [Zstandard](https://en.wikipedia.org/wiki/Zstd)-Algorithmus verwendet.
- `identity`
  - : Gibt die Identitätsfunktion an (das heißt, ohne Änderung oder Kompression). Dieser Wert wird immer als akzeptabel angesehen, auch wenn er weggelassen wird.
- `*` (Wildcard)
  - : Entspricht jeder Inhaltskodierung, die nicht bereits im Header aufgeführt ist. Dies ist der Standardwert, wenn der Header nicht vorhanden ist. Diese Direktive schlägt nicht vor, dass ein Algorithmus unterstützt wird, sondern zeigt an, dass keine Präferenz geäußert wird.
- `;q=` (q-Werte-Gewichtung)
  - : Jeder Wert wird in einer Präferenzordnung ausgedrückt, die durch einen relativen {{Glossary("Quality_values", "Qualitätswert")}}, genannt _Gewicht_, ausgedrückt wird.

## Beispiele

### Standardwerte von Accept-Encoding

Die Navigation im Browser hat typischerweise den folgenden `Accept-Encoding`-Anfrageheader-Wert:

```http
GET /en-US/ HTTP/2
Host: developer.mozilla.org
Accept-Encoding: gzip, deflate, br, zstd
```

### Gewichtete Accept-Encoding-Werte

Der folgende Header zeigt `Accept-Encoding`-Präferenzen unter Verwendung eines Qualitätswerts zwischen `0` (niedrigste Priorität) und `1` (höchste Priorität). Brotli-Kompression wird mit `1.0` gewichtet, was `br` zur ersten Wahl des Clients macht, gefolgt von `gzip` mit `0.8` Priorität und dann jeder anderen Inhaltskodierung mit `0.1`:

```http
Accept-Encoding: br;q=1.0, gzip;q=0.8, *;q=0.1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPStatus("415", "415 Unsupported Media Type")}}
- HTTP-[Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation)
- Ein Header mit dem Ergebnis der Inhaltsverhandlung: {{HTTPHeader("Content-Encoding")}}
- Andere ähnliche Header: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Language")}}
- {{Glossary("Brotli_compression", "Brotli-Kompression")}}
- {{Glossary("GZip_compression", "GZip-Kompression")}}
- {{Glossary("Zstandard_compression", "Zstandard-Kompression")}}
