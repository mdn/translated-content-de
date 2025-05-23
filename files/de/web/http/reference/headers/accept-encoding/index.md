---
title: Accept-Encoding header
short-title: Accept-Encoding
slug: Web/HTTP/Reference/Headers/Accept-Encoding
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP-**`Accept-Encoding`**-{{Glossary("request_header", "Request-")}} und {{Glossary("response_header", "Response-Header")}} gibt die Inhaltskodierung (normalerweise ein Kompressionsalgorithmus) an, die der Absender verstehen kann. Bei Anfragen verwendet der Server die [Inhaltsaushandlung](/de/docs/Web/HTTP/Guides/Content_negotiation), um einen der vom Client vorgeschlagenen Kodierungen auszuwählen, und teilt dem Client diese Auswahl mit dem {{HTTPHeader("Content-Encoding")}}-Response-Header mit. In Antworten gibt er an, welche Inhaltskodierungen der Server in Nachrichten an die angeforderte Ressource verstehen kann, sodass die Kodierung bei nachfolgenden Anfragen an die Ressource verwendet werden kann. Zum Beispiel ist `Accept-Encoding` in einer {{HTTPStatus("415", "415 Unsupported Media Type")}}-Antwort enthalten, wenn eine Anfrage an eine Ressource (z.B. {{HTTPMethod("PUT")}}) eine nicht unterstützte Kodierung verwendet hat.

Selbst wenn sowohl der Client als auch der Server die gleichen Kompressionsalgorithmen unterstützen, kann der Server entscheiden, den Körper einer Antwort nicht zu komprimieren, wenn auch der `identity`-Wert akzeptabel ist. Dies geschieht in zwei häufigen Fällen:

1. Die Daten sind bereits komprimiert, was bedeutet, dass eine zweite Runde der Kompression die übertragene Datengröße nicht reduziert und in manchen Fällen tatsächlich die Größe des Inhalts erhöhen kann. Dies gilt für vorkomprimierte Bildformate (z.B. JPEG).
2. Der Server ist überlastet und kann keine Rechenressourcen für die Komprimierung bereitstellen. Zum Beispiel empfiehlt Microsoft keine Komprimierung, wenn ein Server mehr als 80% seiner Rechenleistung nutzt.

Solange die Direktiven `identity;q=0` oder `*;q=0` den `identity`-Wert, der keine Kodierung bedeutet, nicht ausdrücklich verbieten, darf der Server niemals einen {{HTTPStatus("406", "406 Not Acceptable")}}-Fehler zurückgeben.

> [!NOTE]
> IANA pflegt [eine Liste offizieller Inhaltskodierungen](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#content-coding). Die Kodierungen `bzip` und `bzip2` sind nicht standardisiert, können jedoch in einigen Fällen verwendet werden, insbesondere für Legacy-Unterstützung.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}, {{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
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
  - : Ein Kompressionsformat, das das [Lempel-Ziv-Coding](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77) mit einer 32-Bit-CRC verwendet.
- `compress`
  - : Ein Kompressionsformat, das den [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/LZW) (LZW)-Algorithmus verwendet.
- `deflate`
  - : Ein Kompressionsformat, das die [zlib](https://en.wikipedia.org/wiki/Zlib)-Struktur mit dem [_deflate_](https://en.wikipedia.org/wiki/DEFLATE)-Kompressionsalgorithmus verwendet.
- `br`
  - : Ein Kompressionsformat, das den [Brotli](https://en.wikipedia.org/wiki/Brotli)-Algorithmus verwendet.
- `zstd`
  - : Ein Kompressionsformat, das den [Zstandard](https://en.wikipedia.org/wiki/Zstd)-Algorithmus verwendet.
- `dcb` {{experimental_inline}}
  - : Ein Format, das den [Dictionary-Compressed Brotli](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-compression-dictionary#name-dictionary-compressed-brotl)-Algorithmus verwendet. Siehe [Compression Dictionary Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport).
- `dcz` {{experimental_inline}}
  - : Ein Format, das den [Dictionary-Compressed Zstandard](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-compression-dictionary#name-dictionary-compressed-zstan)-Algorithmus verwendet. Siehe [Compression Dictionary Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport).
- `identity`
  - : Gibt die Identitätsfunktion an (das heißt, ohne Veränderung oder Komprimierung). Dieser Wert wird immer als akzeptabel angesehen, selbst wenn er weggelassen wird.
- `*` (Wildcard)
  - : Passt zu jeder Inhaltskodierung, die nicht bereits im Header aufgelistet ist. Dies ist der Standardwert, wenn der Header nicht vorhanden ist. Diese Direktive schlägt nicht vor, dass ein bestimmter Algorithmus unterstützt wird, sondern zeigt an, dass keine Präferenz ausgedrückt wird.
- `;q=` (qvalues-Gewichtung)
  - : Jeder Wert wird in einer Reihenfolge von Präferenzen ausgedrückt, die einen relativen {{Glossary("Quality_values", "Qualitätswert")}} namens _weight_ verwendet.

## Beispiele

### Standardwerte von Accept-Encoding

Die Navigation im Browser hat typischerweise den folgenden `Accept-Encoding`-Request-Header-Wert:

```http
GET /en-US/ HTTP/2
Host: developer.mozilla.org
Accept-Encoding: gzip, deflate, br, zstd
```

### Gewichtete Accept-Encoding-Werte

Der folgende Header zeigt `Accept-Encoding`-Präferenzen unter Verwendung eines Qualitätswertes zwischen `0` (niedrigste Priorität) und `1` (höchste Priorität). Brotli-Kompression wird mit `1.0` gewichtet, was `br` zur ersten Wahl des Clients macht, gefolgt von `gzip` mit einer Priorität von `0.8` und dann jeder anderen Inhaltskodierung mit `0.1`:

```http
Accept-Encoding: br;q=1.0, gzip;q=0.8, *;q=0.1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPStatus("415", "415 Unsupported Media Type")}}
- HTTP-[Inhaltsaushandlung](/de/docs/Web/HTTP/Guides/Content_negotiation)
- Ein Header mit dem Ergebnis der Inhaltsaushandlung: {{HTTPHeader("Content-Encoding")}}
- Andere ähnliche Header: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Language")}}
- {{Glossary("Brotli_compression", "Brotli-Kompression")}}
- {{Glossary("GZip_compression", "GZip-Kompression")}}
- {{Glossary("Zstandard_compression", "Zstandard-Kompression")}}
- [Leitfaden zur Compression Dictionary Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport)
