---
title: Content-Encoding
slug: Web/HTTP/Reference/Headers/Content-Encoding
l10n:
  sourceCommit: 43f272adb6ac15537cff3728c78ddf234485fff8
---

{{HTTPSidebar}}

Der HTTP-**`Content-Encoding`**-{{Glossary("representation_header", "Repräsentations-Header")}} listet die Kodierungen und deren Reihenfolge auf, in der sie auf eine Ressource angewendet wurden. Damit wird dem Empfänger mitgeteilt, wie die Daten dekodiert werden müssen, um das ursprüngliche Inhaltsformat zu erhalten, das im {{HTTPHeader("Content-Type")}}-Header beschrieben ist. Die Inhaltskodierung wird hauptsächlich verwendet, um Inhalte zu komprimieren, ohne Informationen über den ursprünglichen Medientyp zu verlieren.

Server sollten Daten so weit wie möglich komprimieren und dort eine Inhaltskodierung verwenden, wo es angemessen ist. Das Komprimieren von bereits komprimierten Medientypen wie .zip oder .jpeg ist in der Regel nicht sinnvoll, da dies die Dateigröße erhöhen kann. Sollte das ursprüngliche Medium bereits kodiert sein (z.B. als .zip-Datei), wird diese Information nicht im `Content-Encoding`-Header angegeben.

Wenn der `Content-Encoding`-Header vorhanden ist, beziehen sich andere Metadaten (z.B. {{HTTPHeader("Content-Length")}}) auf die kodierte Form der Daten, nicht auf die ursprüngliche Ressource, es sei denn, es wird ausdrücklich darauf hingewiesen. Die Inhaltskodierung unterscheidet sich von der {{HTTPHeader("Transfer-Encoding")}}, da `Transfer-Encoding` damit umgeht, wie HTTP-Nachrichten selbst über das Netzwerk auf [hop-by-hop-Basis](/de/docs/Web/HTTP/Reference/Headers#hop-by-hop_headers) übertragen werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Representation_header", "Repräsentations-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
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
  - : Ein Format unter Verwendung der [Lempel-Ziv-Kodierung](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77) mit einer 32-Bit-CRC. Dies ist das ursprüngliche Format des UNIX-_gzip_-Programms. Der HTTP/1.1-Standard empfiehlt auch, dass die Server, die diese Inhaltskodierung unterstützen, `x-gzip` als Alias erkennen, zu Kompatibilitätszwecken.
- `compress`
  - : Ein Format unter Verwendung des [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/LZW) (LZW)-Algorithmus. Der Name des Werts stammt vom UNIX-_compress_-Programm, das diesen Algorithmus implementierte. Wie das Komprimierprogramm, das aus den meisten UNIX-Distributionen verschwunden ist, wird diese Inhaltskodierung heute von vielen Browsern nicht mehr verwendet, teilweise aufgrund eines Patentproblems (das 2003 abgelaufen ist).
- `deflate`
  - : Unter Verwendung der [zlib](https://en.wikipedia.org/wiki/Zlib)-Struktur (definiert in {{rfc(1950)}}) mit dem [Deflate](https://en.wikipedia.org/wiki/Deflate)-Kompressionsalgorithmus (definiert in {{rfc(1951)}}).
- `br`
  - : Ein Format unter Verwendung der {{Glossary("Brotli_compression", "Brotli")}}-Algorithmusstruktur (definiert in {{rfc(7932)}}).
- `zstd`
  - : Ein Format unter Verwendung der {{Glossary("Zstandard_compression", "Zstandard")}}-Algorithmusstruktur (definiert in {{rfc(8878)}}).
- `dcb` {{experimental_inline}}

  - : Ein Format, das den [Dictionary-Compressed Brotli-Algorithmus](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-compression-dictionary#name-dictionary-compressed-brotl) verwendet. Siehe [Transport von Kompressionswörterbüchern](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport).

- `dcz` {{experimental_inline}}
  - : Ein Format, das den [Dictionary-Compressed Zstandard-Algorithmus](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-compression-dictionary#name-dictionary-compressed-zstan) verwendet. Siehe [Transport von Kompressionswörterbüchern](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport).

## Beispiele

### Komprimieren mit gzip

Auf der Clientseite können Sie eine Liste von Kompressionsschemata angeben, die in einer HTTP-Anfrage gesendet werden. Der {{HTTPHeader("Accept-Encoding")}}-Header wird für die Aushandlung der Inhaltskodierung verwendet.

```http
Accept-Encoding: gzip, deflate
```

Der Server antwortet mit dem verwendeten Schema, angegeben im `Content-Encoding`-Antwortheader.

```http
Content-Encoding: gzip
```

Ob ein Server die vom Client angeforderten Komprimierungsmethoden verwendet, hängt von der Serverkonfiguration und den Möglichkeiten ab.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Transfer-Encoding")}}
- {{Glossary("Brotli_compression", "Brotli-Kompression")}}
- {{Glossary("GZip_compression", "GZip-Kompression")}}
- {{Glossary("Zstandard_compression", "Zstandard-Kompression")}}
- [Leitfaden zum Transport von Kompressionswörterbüchern](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport)
