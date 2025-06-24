---
title: Content-Encoding header
short-title: Content-Encoding
slug: Web/HTTP/Reference/Headers/Content-Encoding
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTTPSidebar}}

Der HTTP **`Content-Encoding`** {{Glossary("representation_header", "Repräsentationsheader")}} listet die Kodierungen und die Reihenfolge auf, in der sie auf eine Ressource angewendet wurden. Dies lässt den Empfänger wissen, wie er die Daten dekodieren muss, um das ursprüngliche Inhaltsformat zu erhalten, das im {{HTTPHeader("Content-Type")}}-Header beschrieben wird. Die Inhaltskodierung wird hauptsächlich verwendet, um Inhalte zu komprimieren, ohne Informationen über den ursprünglichen Medientyp zu verlieren.

Server sollten Daten so weit wie möglich komprimieren und die Inhaltskodierung dort einsetzen, wo es angebracht ist. Das Komprimieren bereits komprimierter Medientypen, wie .zip oder .jpeg, ist normalerweise nicht sinnvoll, da es die Dateigröße erhöhen kann. Wenn das ursprüngliche Medium bereits kodiert ist (z. B. als .zip-Datei), wird diese Information nicht im `Content-Encoding`-Header angegeben.

Wenn der `Content-Encoding`-Header vorhanden ist, beziehen sich andere Metadaten (z. B. {{HTTPHeader("Content-Length")}}) auf die kodierte Form der Daten, nicht auf die ursprüngliche Ressource, es sei denn, es wird ausdrücklich angegeben. Die Inhaltskodierung unterscheidet sich von {{HTTPHeader("Transfer-Encoding")}} darin, dass `Transfer-Encoding` regelt, wie HTTP-Nachrichten selbst über das Netzwerk auf einer [Hop-by-Hop-Basis](/de/docs/Web/HTTP/Reference/Headers#hop-by-hop_headers) geliefert werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Representation_header", "Repräsentationsheader")}}</td>
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
Content-Encoding: dcb
Content-Encoding: dcz

// Multiple, in the order in which they were applied
Content-Encoding: deflate, gzip
```

## Direktiven

- `gzip`
  - : Ein Format, das die [Lempel-Ziv-Kodierung](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77) mit einem 32-Bit-CRC verwendet. Dies ist das ursprüngliche Format des UNIX _gzip_-Programms. Der HTTP/1.1-Standard empfiehlt auch, dass die Server, die diese Inhaltskodierung unterstützen, `x-gzip` als Alias erkennen, aus Kompatibilitätsgründen.
- `compress`
  - : Ein Format, das den [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/LZW) (LZW)-Algorithmus verwendet. Der Wertname wurde vom UNIX _compress_-Programm übernommen, das diesen Algorithmus implementierte. Wie das Compress-Programm, das aus den meisten UNIX-Distributionen verschwunden ist, wird diese Inhaltskodierung heute von vielen Browsern nicht mehr verwendet, teilweise aufgrund eines Patentrechtsproblems (es lief 2003 ab).
- `deflate`
  - : Verwendung der [zlib](https://en.wikipedia.org/wiki/Zlib)-Struktur (definiert in {{rfc(1950)}}) mit dem [deflate](https://en.wikipedia.org/wiki/Deflate)-Kompressionsalgorithmus (definiert in {{rfc(1951)}}).
- `br`
  - : Ein Format, das die {{Glossary("Brotli_compression", "Brotli")}}-Algorithmusstruktur verwendet (definiert in {{rfc(7932)}}).
- `zstd`
  - : Ein Format, das die {{Glossary("Zstandard_compression", "Zstandard")}}-Algorithmusstruktur verwendet (definiert in {{rfc(8878)}}).
- `dcb` {{experimental_inline}}

  - : Ein Format, das den [Dictionary-Compressed Brotli-Algorithmus](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-compression-dictionary#name-dictionary-compressed-brotl) verwendet. Siehe [Compression Dictionary Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport).

- `dcz` {{experimental_inline}}
  - : Ein Format, das den [Dictionary-Compressed Zstandard-Algorithmus](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-compression-dictionary#name-dictionary-compressed-zstan) verwendet. Siehe [Compression Dictionary Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport).

## Beispiele

### Komprimierung mit gzip

Auf der Client-Seite können Sie eine Liste von Kompressionsverfahren angeben, die mit einer HTTP-Anfrage gesendet werden. Der {{HTTPHeader("Accept-Encoding")}}-Header wird verwendet, um die Inhalte-Kodierung zu verhandeln.

```http
Accept-Encoding: gzip, deflate
```

Der Server antwortet mit dem verwendeten Verfahren, das im `Content-Encoding`-Antwortheader angegeben ist.

```http
Content-Encoding: gzip
```

Ob ein Server die vom Client angeforderten Kompressionsmethoden verwendet, hängt von der Serverkonfiguration und seinen Fähigkeiten ab.

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
- [Compression Dictionary Transport-Leitfaden](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport)
