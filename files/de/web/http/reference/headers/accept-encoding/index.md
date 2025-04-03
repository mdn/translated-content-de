---
title: Accept-Encoding
slug: Web/HTTP/Reference/Headers/Accept-Encoding
l10n:
  sourceCommit: 43f272adb6ac15537cff3728c78ddf234485fff8
---

{{HTTPSidebar}}

Der HTTP-**`Accept-Encoding`** {{Glossary("request_header", "Request-Header")}} und {{Glossary("response_header", "Response-Header")}} gibt an, welche Inhaltskodierung (normalerweise ein Kompressionsalgorithmus) der Absender verstehen kann.
Bei Anfragen verwendet der Server die [Inhaltsverhandlung](/de/docs/Web/HTTP/Guides/Content_negotiation), um einen der vom Client vorgeschlagenen Kodierungsverfahren auszuwählen und teilt dem Client die Wahl mit dem {{HTTPHeader("Content-Encoding")}}-Response-Header mit.
In Antworten gibt er an, welche Inhaltskodierungen der Server in Nachrichten zur angeforderten Ressource verstehen kann, sodass die Kodierung in nachfolgenden Anfragen an die Ressource verwendet werden kann.
Zum Beispiel wird `Accept-Encoding` in einer {{HTTPStatus("415", "415 Unsupported Media Type")}}-Antwort enthalten, wenn eine Anfrage an eine Ressource (z.B. {{HTTPMethod("PUT")}}) eine nicht unterstützte Kodierung verwendet hat.

Selbst wenn sowohl der Client als auch der Server dieselben Kompressionsalgorithmen unterstützen, kann der Server entscheiden, den Body einer Antwort nicht zu komprimieren, wenn der Wert `identity` ebenfalls akzeptabel ist.
Dies tritt in zwei häufigen Fällen auf:

1. Die Daten sind bereits komprimiert, was bedeutet, dass eine zweite Kompression die übertragene Datenmenge nicht reduziert und in einigen Fällen sogar die Größe des Inhalts erhöhen kann.
   Dies gilt für vorab komprimierte Bildformate (JPEG zum Beispiel).
2. Der Server ist überlastet und kann keine Rechneressourcen bereitstellen, um die Kompression durchzuführen. Beispielsweise empfiehlt Microsoft, nicht zu komprimieren, wenn ein Server mehr als 80 % seiner Rechenleistung verbraucht.

Solange die Direktiven `identity;q=0` oder `*;q=0` den `identity`-Wert, der keine Kodierung bedeutet, nicht ausdrücklich verbieten, darf der Server niemals einen {{HTTPStatus("406", "406 Not Acceptable")}}-Fehler zurückgeben.

> [!NOTE]
> Die IANA führt [eine Liste der offiziellen Inhaltskodierungen](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#content-coding).
> Die Kodierungen `bzip` und `bzip2` sind nicht standardisiert, können aber in einigen Fällen, insbesondere zur Unterstützung von Altsystemen, verwendet werden.

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
  - : Ein Kompressionsformat, das die [Lempel-Ziv-Codierung](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77) mit einem 32-Bit-CRC verwendet.
- `compress`
  - : Ein Kompressionsformat, das den [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/LZW)-Algorithmus (LZW) verwendet.
- `deflate`
  - : Ein Kompressionsformat, das die [zlib](https://en.wikipedia.org/wiki/Zlib)-Struktur mit dem [_deflate_](https://en.wikipedia.org/wiki/DEFLATE)-Kompressionsalgorithmus verwendet.
- `br`
  - : Ein Kompressionsformat, das den [Brotli](https://en.wikipedia.org/wiki/Brotli)-Algorithmus verwendet.
- `zstd`
  - : Ein Kompressionsformat, das den [Zstandard](https://en.wikipedia.org/wiki/Zstd)-Algorithmus verwendet.
- `dcb` {{experimental_inline}}
  - : Ein Format, das den [Dictionary-Compressed Brotli](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-compression-dictionary#name-dictionary-compressed-brotl)-Algorithmus verwendet. Siehe [Kompressionswörterbuch-Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport).
- `dcz` {{experimental_inline}}
  - : Ein Format, das den [Dictionary-Compressed Zstandard](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-compression-dictionary#name-dictionary-compressed-zstan)-Algorithmus verwendet. Siehe [Kompressionswörterbuch-Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport).
- `identity`
  - : Gibt die Identitätsfunktion an (d.h. ohne Veränderung oder Kompression). Dieser Wert wird immer als akzeptabel betrachtet, auch wenn er weggelassen wird.
- `*` (Wildcard)
  - : Passt zu jeder Inhaltskodierung, die nicht bereits im Header aufgeführt ist. Dies ist der Standardwert, wenn der Header nicht vorhanden ist. Diese Direktive schlägt nicht vor, dass ein Algorithmus unterstützt wird, sondern zeigt an, dass keine Präferenz ausgedrückt wird.
- `;q=` (q-Werte-Gewichtung)
  - : Jeder Wert wird in einer Reihenfolge der Präferenz mit einem relativen {{Glossary("Quality_values", "Qualitätswert")}} ausgedrückt, der als _Gewicht_ bezeichnet wird.

## Beispiele

### Standardwerte von Accept-Encoding

Die Browser-Navigation hat typischerweise den folgenden Wert für den `Accept-Encoding`-Request-Header:

```http
GET /en-US/ HTTP/2
Host: developer.mozilla.org
Accept-Encoding: gzip, deflate, br, zstd
```

### Gewichtete Accept-Encoding-Werte

Der folgende Header zeigt `Accept-Encoding`-Präferenzen unter Verwendung eines Qualitätswertes zwischen `0` (niedrigste Priorität) und `1` (höchste Priorität).
Die Brotli-Kompression wird mit `1.0` gewichtet, was `br` zur ersten Wahl des Clients macht, gefolgt von `gzip` mit `0.8` Priorität und dann jede andere Inhaltskodierung mit `0.1`:

```http
Accept-Encoding: br;q=1.0, gzip;q=0.8, *;q=0.1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPStatus("415", "415 Unsupported Media Type")}}
- HTTP [Inhaltsverhandlung](/de/docs/Web/HTTP/Guides/Content_negotiation)
- Ein Header mit dem Ergebnis der Inhaltsverhandlung: {{HTTPHeader("Content-Encoding")}}
- Andere ähnliche Header: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Language")}}
- {{Glossary("Brotli_compression", "Brotli-Kompression")}}
- {{Glossary("GZip_compression", "GZip-Kompression")}}
- {{Glossary("Zstandard_compression", "Zstandard-Kompression")}}
- [Kompressionswörterbuch-Transport-Leitfaden](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport)
