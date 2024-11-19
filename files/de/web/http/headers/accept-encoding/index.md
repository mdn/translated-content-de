---
title: Accept-Encoding
slug: Web/HTTP/Headers/Accept-Encoding
l10n:
  sourceCommit: edefa50f18613599b92e2eb3e9556fbde220b360
---

{{HTTPSidebar}}

Der HTTP **`Accept-Encoding`** {{Glossary("request_header", "Request-Header")}} und {{Glossary("response_header", "Response-Header")}} gibt die Inhaltscodierung (normalerweise ein Kompressionsalgorithmus) an, die der Absender verstehen kann. In Anfragen verwendet der Server die [Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation), um einen der Kodierungsvorschläge vom Client auszuwählen und informiert den Client über diese Wahl mit dem {{HTTPHeader("Content-Encoding")}} Response-Header. In Antworten gibt er Informationen darüber, welche Inhaltskodierungen der Server in Nachrichten an die angeforderte Ressource verstehen kann, damit die Kodierung in zukünftigen Anfragen an die Ressource verwendet werden kann. Zum Beispiel kann dies in der Antwort auf eine `PUT`-Anfrage an eine Ressource gesendet werden, die eine nicht unterstützte Kodierung verwendet hat.

Selbst wenn sowohl der Client als auch der Server dieselben Kompressionsalgorithmen unterstützen, kann der Server entscheiden, den Körper einer Antwort nicht zu komprimieren, wenn der Wert `identity` auch akzeptabel ist. Dies geschieht in zwei häufigen Fällen:

1. Die Daten sind bereits komprimiert, was bedeutet, dass eine zweite Runde der Kompression die Größe der übertragenen Daten nicht reduzieren wird und in manchen Fällen die Größe des Inhalts tatsächlich erhöhen kann. Dies gilt für vorab komprimierte Bildformate (z.B. JPEG).
2. Der Server ist überlastet und kann keine Rechenressourcen bereitstellen, um die Kompression durchzuführen. Zum Beispiel empfiehlt Microsoft, nicht zu komprimieren, wenn ein Server mehr als 80% seiner Rechenleistung nutzt.

Solange die Direktiven `identity;q=0` oder `*;q=0` den Wert `identity`, was keine Codierung bedeutet, nicht ausdrücklich verbieten, darf der Server niemals einen {{HTTPStatus("406", "406 Not Acceptable")}} Fehler zurückgeben.

> [!NOTE]
> Die IANA pflegt [eine Liste offizieller Inhaltskodierungen](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#content-coding).
> Die `bzip` und `bzip2` Kodierungen sind nicht standardisiert, können jedoch in einigen Fällen verwendet werden, insbesondere für die Unterstützung älterer Systeme.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}, {{Glossary("Response_header", "Response-Header")}}</td>
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
  - : Ein Kompressionsformat, das die [Lempel-Ziv-Kodierung](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77) mit einer 32-Bit-CRC verwendet.
- `compress`
  - : Ein Kompressionsformat, das den [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/LZW) (LZW) Algorithmus verwendet.
- `deflate`
  - : Ein Kompressionsformat, das die [zlib](https://en.wikipedia.org/wiki/Zlib)-Struktur mit dem [_deflate_](https://en.wikipedia.org/wiki/DEFLATE)-Kompressionsalgorithmus verwendet.
- `br`
  - : Ein Kompressionsformat, das den [Brotli](https://en.wikipedia.org/wiki/Brotli) Algorithmus verwendet.
- `zstd`
  - : Ein Kompressionsformat, das den [Zstandard](https://en.wikipedia.org/wiki/Zstd) Algorithmus verwendet.
- `identity`
  - : Gibt die Identitätsfunktion an (d.h. ohne Modifikation oder Kompression). Dieser Wert wird immer als akzeptabel angesehen, selbst wenn er weggelassen wird.
- `*` (Wildcard)
  - : Entspricht jeder Inhaltskodierung, die nicht bereits im Header aufgelistet ist. Dies ist der Standardwert, wenn der Header nicht vorhanden ist. Diese Direktive deutet nicht darauf hin, dass irgendein Algorithmus unterstützt wird, sondern dass keine Präferenz ausgedrückt wird.
- `;q=` (q-Werte Gewichtung)
  - : Jeder Wert wird in einer Reihenfolge der Präferenz ausgedrückt, die mit einem relativen {{Glossary("Quality_values", "Qualitätswert")}}, genannt _Gewicht_, angegeben wird.

## Beispiele

### Standardwerte für Accept-Encoding

Browser-Navigation hat typischerweise den folgenden Wert für den `Accept-Encoding` Request-Header:

```http
GET /en-US/ HTTP/2
Host: developer.mozilla.org
Accept-Encoding: gzip, deflate, br, zstd
```

### Gewichtete Accept-Encoding-Werte

Der folgende Header zeigt `Accept-Encoding` Präferenzen unter Verwendung eines Qualitätswertes zwischen `0` (niedrigste Priorität) und `1` (höchste Priorität). Die Brotli-Kompression wird mit `1.0` gewichtet, wodurch `br` die erste Wahl des Clients ist, gefolgt von `gzip` mit `0.8` Priorität und dann jede andere Inhaltskodierung mit `0.1`:

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
- {{Glossary("Brotli_compression", "Brotli-Kompression")}}
- {{Glossary("GZip_compression", "GZip-Kompression")}}
- {{Glossary("Zstandard_compression", "Zstandard-Kompression")}}
