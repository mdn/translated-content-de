---
title: Content-Encoding header
short-title: Content-Encoding
slug: Web/HTTP/Reference/Headers/Content-Encoding
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP-**`Content-Encoding`**-{{Glossary("representation_header", "Darstellungsheader")}} listet die Kodierungen und deren Reihenfolge auf, in der sie auf eine Ressource angewendet wurden. Dies lässt den Empfänger wissen, wie die Daten dekodiert werden müssen, um das im {{HTTPHeader("Content-Type")}}-Header beschriebene Originalformat zu erhalten. Die Inhaltskodierung wird hauptsächlich verwendet, um Inhalte zu komprimieren, ohne Informationen über den ursprünglichen Medientyp zu verlieren.

Server sollten Daten soweit wie möglich komprimieren und Inhaltskodierung verwenden, wo es angemessen ist. Die Komprimierung bereits komprimierter Medientypen, wie .zip oder .jpeg, ist in der Regel nicht geeignet, da dies die Dateigröße erhöhen kann. Wenn das Originalmedium bereits kodiert ist (z.B. als .zip-Datei), wird diese Information nicht im `Content-Encoding`-Header eingeschlossen.

Wenn der `Content-Encoding`-Header vorhanden ist, beziehen sich andere Metadaten (z.B. {{HTTPHeader("Content-Length")}}) auf die kodierte Form der Daten, nicht auf die ursprüngliche Ressource, es sei denn, dies wird ausdrücklich angegeben. Die Inhaltskodierung unterscheidet sich von {{HTTPHeader("Transfer-Encoding")}}, da `Transfer-Encoding` regelt, wie HTTP-Nachrichten selbst im Netzwerk auf einer [Hop-by-Hop-Basis](/de/docs/Web/HTTP/Reference/Headers#hop-by-hop_headers) übermittelt werden.

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
Content-Encoding: dcb
Content-Encoding: dcz

// Multiple, in the order in which they were applied
Content-Encoding: deflate, gzip
```

## Direktiven

- `gzip`
  - : Ein Format, das die [Lempel-Ziv-Kodierung](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77) mit einer 32-Bit-CRC verwendet. Dies ist das Originalformat des UNIX-Programms _gzip_. Der HTTP/1.1-Standard empfiehlt auch, dass Server, die diese Inhaltskodierung unterstützen, `x-gzip` als Alias erkennen sollten, um Kompatibilität zu gewährleisten.
- `compress`
  - : Ein Format, das den [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/LZW) (LZW) Algorithmus verwendet. Der Name des Werts stammt von dem UNIX-Programm _compress_, welches diesen Algorithmus implementierte. Wie das Komprimierungsprogramm, das aus den meisten UNIX-Distributionen verschwunden ist, wird diese Inhaltskodierung heute von vielen Browsern nicht mehr verwendet, teilweise wegen eines Patentproblems (es lief 2003 ab).
- `deflate`
  - : Verwendet die [zlib](https://en.wikipedia.org/wiki/Zlib)-Struktur (definiert in {{rfc(1950)}}) mit dem [Deflate](https://en.wikipedia.org/wiki/Deflate)-Komprimierungsalgorithmus (definiert in {{rfc(1951)}}).
- `br`
  - : Ein Format, das die {{Glossary("Brotli_compression", "Brotli")}}-Algorithmusstruktur (definiert in {{rfc(7932)}}) verwendet.
- `zstd`
  - : Ein Format, das die {{Glossary("Zstandard_compression", "Zstandard")}}-Algorithmusstruktur (definiert in {{rfc(8878)}}) verwendet.
- `dcb` {{experimental_inline}}

  - : Ein Format, das den [Dictionary-Compressed Brotli Algorithmus](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-compression-dictionary#name-dictionary-compressed-brotl) verwendet. Siehe [Kompressionswörterbuch-Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport).

- `dcz` {{experimental_inline}}
  - : Ein Format, das den [Dictionary-Compressed Zstandard Algorithmus](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-compression-dictionary#name-dictionary-compressed-zstan) verwendet. Siehe [Kompressionswörterbuch-Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport).

## Beispiele

### Komprimierung mit gzip

Auf der Clientseite können Sie eine Liste von Komprimierungsschemata angeben, die in einer HTTP-Anfrage gesendet werden. Der {{HTTPHeader("Accept-Encoding")}}-Header wird zur Aushandlung der Inhaltskodierung verwendet.

```http
Accept-Encoding: gzip, deflate
```

Der Server antwortet mit dem verwendeten Schema, was im `Content-Encoding`-Antwortheader angegeben wird.

```http
Content-Encoding: gzip
```

Ob ein Server die vom Client angeforderten Komprimierungsmethoden verwendet, hängt von der Serverkonfiguration und den Fähigkeiten ab.

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
- [Leitfaden zum Kompressionswörterbuch-Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport)
