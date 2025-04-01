---
title: Accept-Encoding
slug: Web/HTTP/Reference/Headers/Accept-Encoding
l10n:
  sourceCommit: 3b950288ff28e6984e35acd8fa56fa885a935978
---

{{HTTPSidebar}}

Der HTTP-**`Accept-Encoding`**-{{Glossary("request_header", "Request-")}} und {{Glossary("response_header", "Response-Header")}} gibt die Inhaltscodierung (in der Regel ein Kompressionsalgorithmus) an, die der Absender verstehen kann. Bei Anfragen nutzt der Server die [Inhaltsverhandlung](/de/docs/Web/HTTP/Guides/Content_negotiation), um einen der vom Client vorgeschlagenen Kodierungen auszuwählen und informiert den Client über diese Wahl mit dem {{HTTPHeader("Content-Encoding")}}-Response-Header. Bei Antworten liefert es Informationen darüber, welche Inhaltskodierungen der Server in Nachrichten an die angeforderte Ressource verstehen kann, damit die Kodierung in nachfolgenden Anfragen an die Ressource verwendet werden kann. Zum Beispiel ist `Accept-Encoding` in einer {{HTTPStatus("415", "415 Unsupported Media Type")}}-Antwort enthalten, wenn eine Anfrage an eine Ressource (z.B. {{HTTPMethod("PUT")}}) eine nicht unterstützte Kodierung verwendet hat.

Selbst wenn sowohl der Client als auch der Server dieselben Kompressionsalgorithmen unterstützen, kann der Server entscheiden, den Körper einer Antwort nicht zu komprimieren, wenn der Wert `identity` ebenfalls akzeptabel ist. Dies geschieht in zwei häufigen Fällen:

1. Die Daten sind bereits komprimiert, was bedeutet, dass eine zweite Runde der Kompression die Übertragungsgröße der Daten nicht reduziert und in einigen Fällen die Größe des Inhalts sogar erhöhen kann. Dies gilt für vorab komprimierte Bildformate (zum Beispiel JPEG).
2. Der Server ist überlastet und kann keine Rechenressourcen zuweisen, um die Kompression durchzuführen. Microsoft empfiehlt beispielsweise, nicht zu komprimieren, wenn ein Server mehr als 80 % seiner Rechenleistung nutzt.

Solange die `identity;q=0`- oder `*;q=0`-Direktiven den `identity`-Wert, der keine Kodierung bedeutet, nicht ausdrücklich verbieten, darf der Server niemals einen {{HTTPStatus("406", "406 Not Acceptable")}}-Fehler zurückgeben.

> [!NOTE]
> Die IANA pflegt [eine Liste offizieller Inhaltskodierungen](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#content-coding).
> Die `bzip`- und `bzip2`-Kodierungen sind nicht standardisiert, können aber in einigen Fällen verwendet werden, insbesondere zur Unterstützung älterer Systeme.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}, {{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Unerlaubter Request-Header")}}</th>
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
  - : Ein Kompressionsformat, das die [Lempel-Ziv-Codierung](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77) mit einer 32-Bit-CRC verwendet.
- `compress`
  - : Ein Kompressionsformat, das den [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/LZW) (LZW)-Algorithmus verwendet.
- `deflate`
  - : Ein Kompressionsformat, das die [zlib](https://en.wikipedia.org/wiki/Zlib)-Struktur mit dem [_deflate_](https://en.wikipedia.org/wiki/DEFLATE)-Kompressionsalgorithmus verwendet.
- `br`
  - : Ein Kompressionsformat, das den [Brotli](https://en.wikipedia.org/wiki/Brotli)-Algorithmus verwendet.
- `zstd`
  - : Ein Kompressionsformat, das den [Zstandard](https://en.wikipedia.org/wiki/Zstd)-Algorithmus verwendet.
- `dcb`
  - : Ein Format, das den [Dictionary-Compressed Brotli](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-compression-dictionary#name-dictionary-compressed-brotl)-Algorithmus verwendet. Siehe [Compression Dictionary Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport).
- `dcz`
  - : Ein Format, das den [Dictionary-Compressed Zstandard](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-compression-dictionary#name-dictionary-compressed-zstan)-Algorithmus verwendet. Siehe [Compression Dictionary Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport).
- `identity`
  - : Gibt die Identitätsfunktion an (d.h. ohne Modifikation oder Kompression). Dieser Wert wird immer als akzeptabel betrachtet, auch wenn er weggelassen wird.
- `*` (Wildcard)
  - : Passt auf jede Inhaltskodierung, die nicht bereits im Header aufgeführt ist. Dies ist der Standardwert, wenn der Header nicht vorhanden ist. Diese Direktive deutet nicht darauf hin, dass irgendein Algorithmus unterstützt wird, sondern signalisiert, dass keine Präferenz geäußert wird.
- `;q=` (q-Werte-Gewichtung)
  - : Jeder Wert wird in einer Präferenzordnung ausgedrückt, indem ein relatives {{Glossary("Quality_values", "Qualitätswert")}} namens _Gewicht_ verwendet wird.

## Beispiele

### Standard-`Accept-Encoding`-Werte

Die Navigation im Browser hat typischerweise folgenden `Accept-Encoding`-Request-Header-Wert:

```http
GET /en-US/ HTTP/2
Host: developer.mozilla.org
Accept-Encoding: gzip, deflate, br, zstd
```

### Gewichtete `Accept-Encoding`-Werte

Der folgende Header zeigt `Accept-Encoding`-Präferenzen unter Verwendung eines Qualitätswertes zwischen `0` (niedrigste Priorität) und `1` (höchste Priorität). Die Brotli-Kompression ist mit `1.0` gewichtet, was `br` zur ersten Wahl des Clients macht, gefolgt von `gzip` mit `0.8` Priorität und dann jeder anderen Inhaltskodierung mit `0.1`:

```http
Accept-Encoding: br;q=1.0, gzip;q=0.8, *;q=0.1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPStatus("415", "415 Unsupported Media Type")}}
- HTTP-[Inhaltsverhandlung](/de/docs/Web/HTTP/Guides/Content_negotiation)
- Ein Header mit dem Ergebnis der Inhaltsverhandlung: {{HTTPHeader("Content-Encoding")}}
- Andere ähnliche Header: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Language")}}
- {{Glossary("Brotli_compression", "Brotli-Kompression")}}
- {{Glossary("GZip_compression", "GZip-Kompression")}}
- {{Glossary("Zstandard_compression", "Zstandard-Kompression")}}
- [Leitfaden für Compression Dictionary Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport)
