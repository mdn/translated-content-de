---
title: Content-Encoding
slug: Web/HTTP/Reference/Headers/Content-Encoding
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP **`Content-Encoding`** {{Glossary("representation_header", "Darstellungsheader")}} listet die Kodierungen und die Reihenfolge auf, in der sie auf eine Ressource angewendet wurden. Dadurch erfährt der Empfänger, wie die Daten dekodiert werden müssen, um das ursprüngliche Inhaltsformat zu erhalten, wie im {{HTTPHeader("Content-Type")}}-Header beschrieben. Die Inhaltskodierung wird hauptsächlich verwendet, um Inhalte zu komprimieren, ohne Informationen über den ursprünglichen Medientyp zu verlieren.

Server sollten Daten so weit wie möglich komprimieren und Inhaltskodierung verwenden, wo es angemessen ist. Die Komprimierung bereits komprimierter Medientypen, wie .zip oder .jpeg, ist in der Regel nicht angemessen, da sie die Dateigröße erhöhen kann. Wenn das ursprüngliche Medium bereits kodiert ist (z.B. als .zip-Datei), wird diese Information nicht im `Content-Encoding`-Header angegeben.

Wenn der `Content-Encoding`-Header vorhanden ist, beziehen sich andere Metadaten (z.B. {{HTTPHeader("Content-Length")}}) auf die kodierte Form der Daten, nicht auf die ursprüngliche Ressource, es sei denn, es wird explizit angegeben. Die Inhaltskodierung unterscheidet sich von {{HTTPHeader("Transfer-Encoding")}} darin, dass `Transfer-Encoding` behandelt, wie HTTP-Nachrichten selbst über das Netzwerk auf [Hop-by-Hop-Basis](/de/docs/Web/HTTP/Reference/Headers#hop-by-hop_headers) übertragen werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Representation_header", "Darstellungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
      <td>Nein</td>
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
  - : Ein Format, das die [Lempel-Ziv-Kodierung](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77) mit einer 32-Bit-CRC verwendet. Dies ist das ursprüngliche Format des UNIX _gzip_-Programms. Der HTTP/1.1-Standard empfiehlt auch, dass Server, die diese Inhaltskodierung unterstützen, `x-gzip` als Alias erkennen, aus Kompatibilitätsgründen.
- `compress`
  - : Ein Format, das den [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/LZW) (LZW)-Algorithmus verwendet. Der Wertname stammt von dem UNIX _compress_-Programm, das diesen Algorithmus implementierte. Wie das compress-Programm, das aus den meisten UNIX-Distributionen verschwunden ist, wird diese Inhaltskodierung heute von vielen Browsern nicht mehr verwendet, teilweise wegen eines Patentproblems (es lief 2003 aus).
- `deflate`
  - : Verwendung der [zlib](https://en.wikipedia.org/wiki/Zlib)-Struktur (definiert in {{rfc(1950)}}) mit dem [deflate](https://en.wikipedia.org/wiki/Deflate)-Komprimierungsalgorithmus (definiert in {{rfc(1951)}}).
- `br`
  - : Ein Format, das die {{Glossary("Brotli_compression", "Brotli")}}-Algorithmusstruktur (definiert in {{rfc(7932)}}) verwendet.
- `zstd`
  - : Ein Format, das die {{Glossary("Zstandard_compression", "Zstandard")}}-Algorithmusstruktur (definiert in {{rfc(8878)}}) verwendet.

## Beispiele

### Komprimierung mit gzip

Auf der Clientseite können Sie eine Liste von Komprimierungsschemata angeben, die mit einer HTTP-Anfrage gesendet werden. Der {{HTTPHeader("Accept-Encoding")}}-Header wird zur Aushandlung der Inhaltskodierung verwendet.

```http
Accept-Encoding: gzip, deflate
```

Der Server antwortet mit dem verwendeten Schema, das durch den `Content-Encoding`-Antwortheader angegeben wird.

```http
Content-Encoding: gzip
```

Ob ein Server Komprimierungsmethoden verwendet, die vom Client angefordert werden, hängt von der Serverkonfiguration und den Fähigkeiten ab.

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
