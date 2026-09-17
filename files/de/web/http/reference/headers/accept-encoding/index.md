---
title: Accept-Encoding header
short-title: Accept-Encoding
slug: Web/HTTP/Reference/Headers/Accept-Encoding
l10n:
  sourceCommit: a4c63d2855b2f557e7d1ee821dee65011d569a41
---

Der HTTP-**`Accept-Encoding`**-{{Glossary("request_header", "Request-")}} und {{Glossary("response_header", "Response-Header")}} gibt die Inhaltskodierung (üblicherweise einen Komprimierungsalgorithmus) an, die der Sender verstehen kann.
In Requests verwendet der Server die [Content Negotiation](/de/docs/Web/HTTP/Guides/Content_negotiation), um einen der Kodierungsvorschläge des Clients auszuwählen, und informiert den Client mit dem Response-Header {{HTTPHeader("Content-Encoding")}} über diese Wahl.
In Responses liefert er Informationen darüber, welche Inhaltskodierungen der Server in Nachrichten an die angeforderte Ressource verstehen kann, sodass die Kodierung in nachfolgenden Requests an die Ressource verwendet werden kann.
Beispielsweise ist `Accept-Encoding` in einer {{HTTPStatus("415", "415 Unsupported Media Type")}}-Response enthalten, wenn ein Request an eine Ressource (z. B. {{HTTPMethod("PUT")}}) eine nicht unterstützte Kodierung verwendet hat.

Selbst wenn Client und Server dieselben Komprimierungsalgorithmen unterstützen, kann der Server entscheiden, den Body einer Response nicht zu komprimieren, wenn auch der Wert `identity` akzeptabel ist.
Dies tritt in zwei häufigen Fällen auf:

1. Die Daten sind bereits komprimiert, was bedeutet, dass eine zweite Komprimierungsrunde die Größe der übertragenen Daten nicht verringert und die Größe des Inhalts in einigen Fällen sogar erhöhen kann.
   Dies gilt für vorkomprimierte Bildformate (beispielsweise JPEG).
2. Der Server ist überlastet und kann keine Rechenressourcen für die Komprimierung bereitstellen. Microsoft empfiehlt beispielsweise, nicht zu komprimieren, wenn ein Server mehr als 80 % seiner Rechenleistung nutzt.

Solange die Direktiven `identity;q=0` oder `*;q=0` den Wert `identity`, der keine Kodierung bedeutet, nicht ausdrücklich verbieten, darf der Server niemals einen {{HTTPStatus("406", "406 Not Acceptable")}}-Fehler zurückgeben.

> [!NOTE]
> Die IANA führt [eine Liste offizieller Inhaltskodierungen](https://www.iana.org/assignments/http-parameters#content-coding).
> Die Kodierungen `bzip` und `bzip2` sind nicht standardisiert, können jedoch in einigen Fällen verwendet werden, insbesondere zur Unterstützung älterer Systeme.

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
  - : Ein Komprimierungsformat, das die [Lempel-Ziv-Kodierung](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77) mit einer 32-Bit-CRC verwendet.
- `compress`
  - : Ein Komprimierungsformat, das den [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/LZW)-Algorithmus (LZW) verwendet.
- `deflate`
  - : Ein Komprimierungsformat, das die [zlib](https://en.wikipedia.org/wiki/Zlib)-Struktur mit dem Komprimierungsalgorithmus [_deflate_](https://en.wikipedia.org/wiki/DEFLATE) verwendet.
- `br`
  - : Ein Komprimierungsformat, das den [Brotli](https://en.wikipedia.org/wiki/Brotli)-Algorithmus verwendet.
- `zstd`
  - : Ein Komprimierungsformat, das den [Zstandard](https://en.wikipedia.org/wiki/Zstd)-Algorithmus verwendet.
- `dcb` {{experimental_inline}}
  - : Ein Format, das den Algorithmus [Dictionary-Compressed Brotli](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-compression-dictionary#name-dictionary-compressed-brotl) verwendet. Siehe [Compression Dictionary Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport).
- `dcz` {{experimental_inline}}
  - : Ein Format, das den Algorithmus [Dictionary-Compressed Zstandard](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-compression-dictionary#name-dictionary-compressed-zstan) verwendet. Siehe [Compression Dictionary Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport).
- `identity`
  - : Gibt die Identitätsfunktion an (d.h. ohne Änderung oder Komprimierung). Dieser Wert wird immer als akzeptabel betrachtet, auch wenn er weggelassen wird.
- `*` (Platzhalter)
  - : Entspricht jeder Inhaltskodierung, die nicht bereits im Header aufgeführt ist. Dies ist der Standardwert, wenn der Header nicht vorhanden ist. Diese Direktive legt nicht nahe, dass ein Algorithmus unterstützt wird, sondern gibt an, dass keine Präferenz ausgedrückt wird.
- `;q=` (qvalue-Gewichtung)
  - : Jeder Wert wird in eine Präferenzreihenfolge gebracht, die mithilfe eines relativen {{Glossary("Quality_values", "Qualitätswerts")}}, _Gewichtung_ genannt, ausgedrückt wird.

## Beispiele

### Standardwerte für Accept-Encoding

Die Browser-Navigation weist üblicherweise den folgenden Wert für den `Accept-Encoding`-Request-Header auf:

```http
GET /en-US/ HTTP/2
Host: developer.mozilla.org
Accept-Encoding: gzip, deflate, br, zstd
```

### Gewichtete Accept-Encoding-Werte

Der folgende Header zeigt `Accept-Encoding`-Präferenzen unter Verwendung eines Qualitätswerts zwischen `0` (niedrigste Priorität) und `1` (höchste Priorität).
Die Brotli-Komprimierung wird mit `1.0` gewichtet, wodurch `br` zur ersten Wahl des Clients wird, gefolgt von `gzip` mit einer Priorität von `0.8` und anschließend jeder anderen Inhaltskodierung mit `0.1`:

```http
Accept-Encoding: br;q=1.0, gzip;q=0.8, *;q=0.1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPStatus("415", "415 Unsupported Media Type")}}
- HTTP-[Content Negotiation](/de/docs/Web/HTTP/Guides/Content_negotiation)
- Ein Header mit dem Ergebnis der Content Negotiation: {{HTTPHeader("Content-Encoding")}}
- Weitere ähnliche Header: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Language")}}
- {{Glossary("Brotli_compression", "Brotli-Komprimierung")}}
- {{Glossary("GZip_compression", "GZip-Komprimierung")}}
- {{Glossary("Zstandard_compression", "Zstandard-Komprimierung")}}
- [Leitfaden zu Compression Dictionary Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport)
