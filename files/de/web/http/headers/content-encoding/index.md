---
title: Content-Encoding
slug: Web/HTTP/Headers/Content-Encoding
l10n:
  sourceCommit: ae86913908651e6008079242691e06b5e01d1c78
---

{{HTTPSidebar}}

Der **`Content-Encoding`** {{Glossary("representation header")}} listet alle Kodierungen auf, die auf eine Ressource angewendet wurden, und in welcher Reihenfolge sie angewendet wurden.
Dies ermöglicht es dem Empfänger zu wissen, wie die Daten dekodiert werden müssen, um das im {{HTTPHeader("Content-Type")}} Header beschriebene Originalformat zu erhalten.
Die Inhaltskodierung wird hauptsächlich verwendet, um Inhalte zu komprimieren, ohne Informationen über den ursprünglichen Medientyp zu verlieren.

Servern wird empfohlen, Daten so weit wie möglich zu komprimieren und dort, wo es angemessen ist, die Inhaltskodierung zu verwenden.
Das Komprimieren eines bereits komprimierten Medientyps wie einer .zip- oder .jpeg-Datei ist möglicherweise nicht angemessen, da dies die Größe des Inhalts erhöhen kann.
Wenn das Originalmedium bereits auf irgendeine Weise kodiert ist (z.B. eine .zip-Datei), dann würde diese Information nicht im `Content-Encoding` Header enthalten sein.

Wenn ein `Content-Encoding` Header vorhanden ist, beziehen sich andere Metadaten (z.B. {{HTTPHeader("Content-Length")}}) auf die kodierte Form der Daten und nicht auf die ursprüngliche Ressource, es sei denn, es wird ausdrücklich angegeben.
Die Inhaltskodierung unterscheidet sich von der {{HTTPHeader("Transfer-Encoding")}}, da `Transfer-Encoding` angibt, wie HTTP-Nachrichten selbst über das Netzwerk [hop-by-hop](/de/docs/Web/HTTP/Headers#hop-by-hop_headers) übertragen werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Representation header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Encoding: gzip
Content-Encoding: compress
Content-Encoding: deflate
Content-Encoding: br
Content-Encoding: zstd

// Mehrere, in der Reihenfolge, in der sie angewendet wurden
Content-Encoding: deflate, gzip
```

## Direktiven

- `gzip`
  - : Ein Format unter Verwendung der [Lempel-Ziv-Codierung](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77) mit einem 32-Bit-CRC.
    Dies ist das ursprüngliche Format des UNIX _gzip_ Programms.
    Der HTTP/1.1-Standard empfiehlt auch, dass Server, die diese Inhaltskodierung unterstützen, `x-gzip` als Alias erkennen, aus Kompatibilitätsgründen.
- `compress`
  - : Ein Format unter Verwendung des [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/LZW) (LZW) Algorithmus.
    Der Wertename wurde vom UNIX _compress_ Programm übernommen, das diesen Algorithmus implementierte.
    Wie das Compress-Programm, das aus den meisten UNIX-Distributionen verschwunden ist, wird diese Inhaltskodierung heute von vielen Browsern nicht mehr verwendet, teilweise wegen eines Patentproblems (es ist 2003 abgelaufen).
- `deflate`
  - : Verwendung der [zlib](https://en.wikipedia.org/wiki/Zlib) Struktur (definiert in {{rfc(1950)}}) mit dem [deflate](https://en.wikipedia.org/wiki/Deflate) Kompressionsalgorithmus (definiert in {{rfc(1951)}}).
- `br`
  - : Ein Format unter Verwendung der {{glossary("Brotli-Komprimierung","Brotli")}} Algorithmusstruktur (definiert in {{rfc(7932)}}).
- `zstd`
  - : Ein Format unter Verwendung der {{glossary("Zstandard-Komprimierung","Zstandard")}} Algorithmusstruktur (definiert in {{rfc(8878)}}).

## Beispiele

### Komprimierung mit gzip

Auf der Client-Seite können Sie eine Liste von Komprimierungsmethoden angeben, die in einer HTTP-Anfrage gesendet werden.
Der {{HTTPHeader("Accept-Encoding")}} Header wird für die Verhandlung der Inhaltskodierung verwendet.

```http
Accept-Encoding: gzip, deflate
```

Der Server antwortet mit dem verwendeten Schema, das durch den `Content-Encoding` Antwortheader angegeben wird.

```http
Content-Encoding: gzip
```

Beachten Sie, dass der Server nicht verpflichtet ist, eine Komprimierungsmethode zu verwenden. Die Komprimierung hängt stark von den Servereinstellungen und den verwendeten Servermodulen ab.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Transfer-Encoding")}}
- {{Glossary("Brotli compression")}}
- {{Glossary("GZip compression")}}
- {{Glossary("Zstandard compression")}}
