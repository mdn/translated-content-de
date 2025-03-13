---
title: Accept-Encoding
slug: Web/HTTP/Reference/Headers/Accept-Encoding
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP **`Accept-Encoding`** {{Glossary("request_header", "Request-Header")}} und {{Glossary("response_header", "Response-Header")}} gibt die Inhaltscodierung (in der Regel ein Kompressionsalgorithmus) an, die der Sender verstehen kann. Bei Anfragen verwendet der Server die [Inhaltsverhandlung](/de/docs/Web/HTTP/Guides/Content_negotiation), um einen der vom Client vorgeschlagenen Kodierungen auszuwählen und teilt dem Client diese Auswahl mit dem {{HTTPHeader("Content-Encoding")}} Response-Header mit. Bei Antworten gibt er an, welche Inhaltskodierungen der Server in Nachrichten zur angeforderten Ressource verstehen kann, sodass die Kodierung in nachfolgenden Anfragen zur Ressource verwendet werden kann. Beispielsweise ist `Accept-Encoding` in einer {{HTTPStatus("415", "415 Unsupported Media Type")}} Antwort enthalten, wenn eine Anfrage an eine Ressource (z.B. {{HTTPMethod("PUT")}}) eine nicht unterstützte Kodierung verwendet hat.

Selbst wenn sowohl der Client als auch der Server die gleichen Kompressionsalgorithmen unterstützen, kann der Server entscheiden, den Body einer Antwort nicht zu komprimieren, wenn der Wert `identity` ebenfalls akzeptabel ist. Dies tritt in zwei häufigen Fällen auf:

1. Die Daten sind bereits komprimiert, was bedeutet, dass eine zweite Kompressionsrunde die übertragene Datenmenge nicht verringern wird und in einigen Fällen die Größe des Inhalts tatsächlich erhöhen kann. Dies gilt für vorkomprimierte Bildformate (zum Beispiel JPEG).
2. Der Server ist überlastet und kann keine Rechenressourcen zuweisen, um die Kompression durchzuführen. Beispielsweise empfiehlt Microsoft, nicht zu komprimieren, wenn ein Server mehr als 80 % seiner Rechenleistung nutzt.

Solange die Direktiven `identity;q=0` oder `*;q=0` den Wert `identity` nicht ausdrücklich verbieten, was keine Kodierung bedeutet, darf der Server niemals einen {{HTTPStatus("406", "406 Not Acceptable")}} Fehler zurückgeben.

> [!NOTE]
> IANA pflegt [eine Liste der offiziellen Inhaltskodierungen](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#content-coding).
> Die Kodierungen `bzip` und `bzip2` sind nicht standardisiert, können aber in einigen Fällen verwendet werden, insbesondere für die Unterstützung älterer Systeme.

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
Accept-Encoding: identity
Accept-Encoding: *

// Multiple algorithms, weighted with the quality value syntax:
Accept-Encoding: deflate, gzip;q=1.0, *;q=0.5
```

## Direktiven

- `gzip`
  - : Ein Kompressionsformat, das das [Lempel-Ziv Kodierung](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77) mit einer 32-Bit-CRC verwendet.
- `compress`
  - : Ein Kompressionsformat, das den [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/LZW) (LZW) Algorithmus verwendet.
- `deflate`
  - : Ein Kompressionsformat, das die [zlib](https://en.wikipedia.org/wiki/Zlib) Struktur mit dem [_deflate_](https://en.wikipedia.org/wiki/DEFLATE) Kompressionsalgorithmus verwendet.
- `br`
  - : Ein Kompressionsformat, das den [Brotli](https://en.wikipedia.org/wiki/Brotli) Algorithmus verwendet.
- `zstd`
  - : Ein Kompressionsformat, das den [Zstandard](https://en.wikipedia.org/wiki/Zstd) Algorithmus verwendet.
- `identity`
  - : Gibt die Identitätsfunktion an (d.h. ohne Modifikation oder Kompression). Dieser Wert wird immer als akzeptabel angesehen, auch wenn er weggelassen wird.
- `*` (Wildcard)
  - : Entspricht jeder Inhaltskodierung, die nicht bereits im Header aufgeführt ist. Dies ist der Standardwert, wenn der Header nicht vorhanden ist. Diese Direktive suggeriert nicht, dass ein Algorithmus unterstützt wird, sondern zeigt an, dass keine Präferenz geäußert wird.
- `;q=` (q-Werte Gewichtung)
  - : Ein beliebiger Wert wird in einer Präferenzreihenfolge dargestellt, die durch einen relativen {{Glossary("Quality_values", "Qualitätswert")}}, genannt _Gewicht_, ausgedrückt wird.

## Beispiele

### Standardmäßige Accept-Encoding Werte

Browser-Navigation enthält typischerweise den folgenden `Accept-Encoding` Request-Header-Wert:

```http
GET /en-US/ HTTP/2
Host: developer.mozilla.org
Accept-Encoding: gzip, deflate, br, zstd
```

### Gewichtete Accept-Encoding Werte

Der folgende Header zeigt `Accept-Encoding` Präferenzen unter Verwendung eines Qualitätswertes zwischen `0` (niedrigste Priorität) und `1` (höchste Priorität). Brotli-Kompression wird mit `1.0` gewichtet, wodurch `br` die erste Wahl des Clients ist, gefolgt von `gzip` mit `0.8` Priorität und dann jede andere Inhaltskodierung mit `0.1`:

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
- Weitere ähnliche Header: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Language")}}
- {{Glossary("Brotli_compression", "Brotli-Kompression")}}
- {{Glossary("GZip_compression", "GZip-Kompression")}}
- {{Glossary("Zstandard_compression", "Zstandard-Kompression")}}
