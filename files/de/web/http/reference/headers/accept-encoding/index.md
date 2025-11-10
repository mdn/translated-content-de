---
title: Accept-Encoding header
short-title: Accept-Encoding
slug: Web/HTTP/Reference/Headers/Accept-Encoding
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-Anforderungsheader **`Accept-Encoding`** {{Glossary("request_header", "request")}} und {{Glossary("response_header", "response header")}} gibt die Inhaltskodierung (normalerweise ein Kompressionsalgorithmus) an, die der Absender verstehen kann. Bei Anfragen verwendet der Server die [Inhaltsaushandlung](/de/docs/Web/HTTP/Guides/Content_negotiation), um eines der Kodierungsangebote des Clients auszuwählen und teilt dem Client diese Auswahl mit dem {{HTTPHeader("Content-Encoding")}} Antwort-Header mit. In Antworten liefert es Informationen darüber, welche Inhaltskodierungen der Server in Nachrichten an die angeforderte Ressource verstehen kann, sodass die Kodierung in nachfolgenden Anfragen an die Ressource verwendet werden kann. Zum Beispiel ist `Accept-Encoding` in einer {{HTTPStatus("415", "415 Unsupported Media Type")}}-Antwort enthalten, wenn eine Anfrage an eine Ressource (z.B. {{HTTPMethod("PUT")}}) eine nicht unterstützte Kodierung verwendet hat.

Selbst wenn sowohl der Client als auch der Server dieselben Kompressionsalgorithmen unterstützen, kann der Server entscheiden, den Körper einer Antwort nicht zu komprimieren, wenn der `identity`-Wert ebenfalls akzeptabel ist. Dies tritt in zwei häufigen Fällen auf:

1. Die Daten sind bereits komprimiert, was bedeutet, dass eine zweite Kompression den Umfang der übertragenen Daten nicht verringern wird und in einigen Fällen sogar die Größe des Inhalts erhöhen kann. Dies gilt für vorab komprimierte Bildformate (z.B. JPEG).
2. Der Server ist überlastet und kann keine Rechenressourcen zur Durchführung der Kompression bereitstellen. Beispielsweise empfiehlt Microsoft, nicht zu komprimieren, wenn ein Server mehr als 80% seiner Rechenleistung nutzt.

Solange die Direktiven `identity;q=0` oder `*;q=0` den `identity`-Wert, der keine Kodierung bedeutet, nicht explizit verbieten, darf der Server niemals einen {{HTTPStatus("406", "406 Not Acceptable")}}-Fehler zurückgeben.

> [!NOTE]
> Die IANA pflegt [eine Liste der offiziellen Inhaltskodierungen](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#content-coding). Die Kodierungen `bzip` und `bzip2` sind nicht standardmäßig, können jedoch in einigen Fällen verwendet werden, insbesondere zur Unterstützung älterer Systeme.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungs-Header")}}, {{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
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
Accept-Encoding: dcb
Accept-Encoding: dcz
Accept-Encoding: identity
Accept-Encoding: *

// Multiple algorithms, weighted with the quality value syntax:
Accept-Encoding: deflate, gzip;q=1.0, *;q=0.5
```

## Direktiven

- `gzip`
  - : Ein Kompressionsformat, das die [Lempel-Ziv-Kodierung](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77) mit einer 32-Bit-CRC verwendet.
- `compress`
  - : Ein Kompressionsformat, das den [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/LZW) (LZW) Algorithmus verwendet.
- `deflate`
  - : Ein Kompressionsformat, das die [zlib](https://en.wikipedia.org/wiki/Zlib) Struktur mit dem [_deflate_](https://en.wikipedia.org/wiki/DEFLATE) Kompressionsalgorithmus verwendet.
- `br`
  - : Ein Kompressionsformat, das den [Brotli](https://en.wikipedia.org/wiki/Brotli) Algorithmus verwendet.
- `zstd`
  - : Ein Kompressionsformat, das den [Zstandard](https://en.wikipedia.org/wiki/Zstd) Algorithmus verwendet.
- `dcb` {{experimental_inline}}
  - : Ein Format, das den [Dictionary-Compressed Brotli](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-compression-dictionary#name-dictionary-compressed-brotl) Algorithmus verwendet. Siehe [Kompressionswörterbuch-Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport).
- `dcz` {{experimental_inline}}
  - : Ein Format, das den [Dictionary-Compressed Zstandard](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-compression-dictionary#name-dictionary-compressed-zstan) Algorithmus verwendet. Siehe [Kompressionswörterbuch-Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport).
- `identity`
  - : Gibt die Identitätsfunktion an (d.h. ohne Modifikation oder Kompression). Dieser Wert wird immer als akzeptabel betrachtet, selbst wenn er weggelassen wird.
- `*` (Wildcard)
  - : Passt zu jeder Inhaltskodierung, die nicht bereits im Header aufgeführt ist. Dies ist der Standardwert, wenn der Header nicht vorhanden ist. Diese Direktive schlägt nicht vor, dass ein Algorithmus unterstützt wird, sondern zeigt an, dass keine Präferenz ausgedrückt wird.
- `;q=` (qvalues Gewichtung)
  - : Jeder Wert wird in einer Reihenfolge der Präferenz unter Verwendung eines relativen {{Glossary("Quality_values", "Qualitätswertes")}} platziert, der _Gewicht_ genannt wird.

## Beispiele

### Standardwerte von Accept-Encoding

Die Browser-Navigation hat typischerweise den folgenden `Accept-Encoding` Anforderungs-Header-Wert:

```http
GET /en-US/ HTTP/2
Host: developer.mozilla.org
Accept-Encoding: gzip, deflate, br, zstd
```

### Gewichtete Accept-Encoding-Werte

Der folgende Header zeigt `Accept-Encoding`-Präferenzen, indem er einen Qualitätswert zwischen `0` (niedrigste Priorität) und `1` (höchste Priorität) verwendet. Die Brotli-Kompression ist mit `1.0` gewichtet und macht `br` zur ersten Wahl des Clients, gefolgt von `gzip` mit `0.8` Priorität und dann jede andere Inhaltskodierung mit `0.1`:

```http
Accept-Encoding: br;q=1.0, gzip;q=0.8, *;q=0.1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPStatus("415", "415 Unsupported Media Type")}}
- HTTP [Inhaltsaushandlung](/de/docs/Web/HTTP/Guides/Content_negotiation)
- Ein Header mit dem Ergebnis der Inhaltsaushandlung: {{HTTPHeader("Content-Encoding")}}
- Andere ähnliche Header: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Language")}}
- {{Glossary("Brotli_compression", "Brotli-Kompression")}}
- {{Glossary("GZip_compression", "GZip-Kompression")}}
- {{Glossary("Zstandard_compression", "Zstandard-Kompression")}}
- [Leitfaden zum Kompressionswörterbuch-Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport)
