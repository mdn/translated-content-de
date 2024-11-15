---
title: Accept-Encoding
slug: Web/HTTP/Headers/Accept-Encoding
l10n:
  sourceCommit: 36b7aecc7ea8c27732e916e8f36ea4e3c9fc1d29
---

{{HTTPSidebar}}

Der HTTP **`Accept-Encoding`** {{Glossary("request_header", "Request-Header")}} und {{Glossary("response_header", "Response-Header")}} gibt die Inhaltskodierung (normalerweise ein Komprimierungsalgorithmus) an, die der Empfänger verstehen kann.
In Anfragen verwendet der Server die [Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation), um einen der vom Client vorgeschlagenen Kodierungen auszuwählen und informiert den Client über diese Wahl mit dem {{HTTPHeader("Content-Encoding")}} Antwort-Header.
In Antworten liefert er Informationen darüber, welche Inhaltskodierungen der Server in Nachrichten zur angeforderten Ressource verstehen kann, sodass die Kodierung in nachfolgenden Anfragen an die Ressource verwendet werden kann. Zum Beispiel könnte dies in der Antwort auf eine `PUT`-Anfrage an eine Ressource gesendet werden, die eine nicht unterstützte Kodierung verwendet hat.

Auch wenn sowohl der Client als auch der Server die gleichen Komprimierungsalgorithmen unterstützen, kann der Server entscheiden, den Body einer Antwort nicht zu komprimieren, wenn der Wert `identity` ebenfalls akzeptabel ist.
Dies geschieht in zwei häufigen Fällen:

1. Die Daten sind bereits komprimiert, was bedeutet, dass eine zweite Runde der Komprimierung die Größe der übertragenen Daten nicht verringern wird und in einigen Fällen sogar die Größe des Inhalts erhöhen kann.
   Dies gilt für vorab komprimierte Bildformate (zum Beispiel JPEG).
2. Der Server ist überlastet und kann keine Rechenressourcen zur Durchführung der Komprimierung zuweisen. Zum Beispiel empfiehlt Microsoft, nicht zu komprimieren, wenn ein Server mehr als 80% seiner Rechenleistung nutzt.

Solange die Direktiven `identity;q=0` oder `*;q=0` nicht ausdrücklich den Wert `identity` verbieten, was keine Kodierung bedeutet, darf der Server niemals einen {{HTTPStatus("406", "406 Not Acceptable")}} Fehler zurückgeben.

> [!NOTE]
> IANA führt [eine Liste offizieller Inhaltskodierungen](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#content-coding).
> Die Kodierungen `bzip` und `bzip2` sind nicht standardmäßig, können aber in einigen Fällen verwendet werden, insbesondere zur Unterstützung älterer Systeme.

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
  - : Ein Komprimierungsformat, das das [Lempel-Ziv-Verfahren](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77) mit einem 32-Bit CRC verwendet.
- `compress`
  - : Ein Komprimierungsformat, das den [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/LZW) (LZW) Algorithmus verwendet.
- `deflate`
  - : Ein Komprimierungsformat, das die [zlib](https://en.wikipedia.org/wiki/Zlib) Struktur mit dem [_deflate_](https://en.wikipedia.org/wiki/DEFLATE) Komprimierungsalgorithmus verwendet.
- `br`
  - : Ein Komprimierungsformat, das den [Brotli](https://en.wikipedia.org/wiki/Brotli) Algorithmus verwendet.
- `zstd`
  - : Ein Komprimierungsformat, das den [Zstandard](https://en.wikipedia.org/wiki/Zstd) Algorithmus verwendet.
- `identity`
  - : Gibt die Identitätsfunktion an (d.h. ohne Modifikation oder Komprimierung). Dieser Wert wird immer als akzeptabel angesehen, auch wenn er weggelassen wird.
- `*` (Wildcard)
  - : Entspricht jeder Inhaltskodierung, die nicht bereits im Header aufgeführt ist. Dies ist der Standardwert, wenn der Header nicht vorhanden ist. Diese Direktive schlägt nicht vor, dass ein bestimmter Algorithmus unterstützt wird, sondern zeigt an, dass keine Präferenz geäußert wird.
- `;q=` (Q-Werte-Gewichtung)
  - : Jeder Wert wird in einer Ordnung der Präferenz ausgedrückt, die mit einem relativen {{Glossary("Quality_values", "Qualitätswert")}} namens _Gewicht_ bezeichnet wird.

## Beispiele

### Standardwerte für Accept-Encoding

Die Browser-Navigation hat typischerweise den folgenden `Accept-Encoding`-Request-Header-Wert:

```http
GET /en-US/ HTTP/2
Host: developer.mozilla.org
Accept-Encoding: gzip, deflate, br, zstd
```

### Gewichtete Accept-Encoding-Werte

Der folgende Header zeigt `Accept-Encoding`-Präferenzen mit einem Qualitätswert zwischen `0` (niedrigste Priorität) und `1` (höchste Priorität). Die Brotli-Komprimierung ist mit `1.0` gewichtet, wodurch `br` die erste Wahl des Clients ist, gefolgt von `gzip` mit `0.8` Priorität und dann jeder anderen Inhaltskodierung mit `0.1`:

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
