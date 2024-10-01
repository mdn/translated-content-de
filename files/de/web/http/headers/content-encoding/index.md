---
title: Content-Encoding
slug: Web/HTTP/Headers/Content-Encoding
l10n:
  sourceCommit: ae86913908651e6008079242691e06b5e01d1c78
---

{{HTTPSidebar}}

Der **`Content-Encoding`** {{Glossary("representation_header", "Repräsentations-Header")}} listet alle Kodierungen auf, die auf eine Ressource angewendet wurden, und deren Reihenfolge. Dies ermöglicht es dem Empfänger, zu wissen, wie die Daten decodiert werden müssen, um das ursprüngliche Inhaltsformat zu erhalten, das im {{HTTPHeader("Content-Type")}}-Header beschrieben ist. Die Inhaltskodierung wird hauptsächlich verwendet, um Inhalte zu komprimieren, ohne Informationen über den ursprünglichen Medientyp zu verlieren.

Servern wird empfohlen, die Daten so weit wie möglich zu komprimieren und Inhaltskodierung dort zu verwenden, wo es angemessen ist. Die Komprimierung eines bereits komprimierten Medientyps wie eines .zip oder .jpeg kann unangemessen sein, da dies die Inhalte vergrößern kann. Wenn das originale Medium bereits in irgendeiner Weise kodiert ist (z.B. eine .zip-Datei), würde diese Information nicht im `Content-Encoding`-Header enthalten sein.

Wenn es einen `Content-Encoding`-Header gibt, beziehen sich andere Metadaten (z.B. {{HTTPHeader("Content-Length")}}) auf die kodierte Form der Daten und nicht auf die ursprüngliche Ressource, es sei denn, ausdrücklich anders angegeben. Die Inhaltskodierung unterscheidet sich von {{HTTPHeader("Transfer-Encoding")}}, da `Transfer-Encoding` behandelt, wie HTTP-Nachrichten selbst über das Netzwerk auf [Hop-by-Hop-Basis](/de/docs/Web/HTTP/Headers#hop-by-hop_headers) übertragen werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Representation_header", "Repräsentations-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>nein</td>
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

// Multiple, in the order in which they were applied
Content-Encoding: deflate, gzip
```

## Direktiven

- `gzip`
  - : Ein Format, das die [Lempel-Ziv-Kodierung](https://de.wikipedia.org/wiki/LZ77_und_LZ78#LZ77) (LZ77) mit einer 32-Bit-CRC verwendet. Dies ist das ursprüngliche Format des UNIX-Programms _gzip_. Der HTTP/1.1-Standard empfiehlt auch, dass die Server, die diese Inhalts-Kodierung unterstützen, `x-gzip` als Alias anerkennen, aus Gründen der Kompatibilität.
- `compress`
  - : Ein Format, das den [Lempel-Ziv-Welch](https://de.wikipedia.org/wiki/Lempel-Ziv-Welch)-Algorithmus (LZW) verwendet. Der Wertname wurde vom UNIX-Programm _compress_ übernommen, das diesen Algorithmus implementierte. Wie das Compress-Programm, das aus den meisten UNIX-Distributionen verschwunden ist, wird diese Inhalts-Kodierung heute von vielen Browsern nicht mehr verwendet, teilweise aufgrund eines Patentproblems (es lief 2003 aus).
- `deflate`
  - : Verwendung der [zlib](https://de.wikipedia.org/wiki/Zlib)-Struktur (definiert in {{rfc(1950)}}) mit dem [deflate](https://de.wikipedia.org/wiki/Deflate)-Kompressionsalgorithmus (definiert in {{rfc(1951)}}).
- `br`
  - : Ein Format, das die {{Glossary("Brotli_compression", "Brotli")}}-Algorithmus-Struktur (definiert in {{rfc(7932)}}) verwendet.
- `zstd`
  - : Ein Format, das die {{Glossary("Zstandard_compression", "Zstandard")}}-Algorithmus-Struktur (definiert in {{rfc(8878)}}) verwendet.

## Beispiele

### Kompression mit gzip

Auf der Clientseite können Sie eine Liste von Kompressionsverfahren angeben, die in einer HTTP-Anfrage gesendet werden. Der {{HTTPHeader("Accept-Encoding")}} Header wird zur Aushandlung der Inhaltskodierung verwendet.

```http
Accept-Encoding: gzip, deflate
```

Der Server antwortet mit dem verwendeten Schema, das durch den `Content-Encoding` Antwort-Header angezeigt wird.

```http
Content-Encoding: gzip
```

Beachten Sie, dass der Server nicht verpflichtet ist, eine Kompressionsmethode zu verwenden. Die Komprimierung hängt stark von den Servereinstellungen und den verwendeten Servermodulen ab.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Transfer-Encoding")}}
- {{Glossary("Brotli_compression", "Brotli-Komprimierung")}}
- {{Glossary("GZip_compression", "GZip-Komprimierung")}}
- {{Glossary("Zstandard_compression", "Zstandard-Komprimierung")}}
