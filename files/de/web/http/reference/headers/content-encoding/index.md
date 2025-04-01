---
title: Content-Encoding
slug: Web/HTTP/Reference/Headers/Content-Encoding
l10n:
  sourceCommit: 3b950288ff28e6984e35acd8fa56fa885a935978
---

{{HTTPSidebar}}

Der HTTP **`Content-Encoding`** {{Glossary("representation_header", "Darstellungs-Header")}} listet die Kodierungen und deren Reihenfolge auf, in der sie auf eine Ressource angewendet wurden. Dies informiert den Empfänger, wie die Daten dekodiert werden müssen, um das ursprüngliche Inhaltsformat zu erhalten, das im {{HTTPHeader("Content-Type")}} Header beschrieben ist. Die Inhaltskodierung wird hauptsächlich verwendet, um Inhalte zu komprimieren, ohne Informationen über den ursprünglichen Medientyp zu verlieren.

Server sollten Daten so weit wie möglich komprimieren und die Inhaltskodierung, wo angemessen, verwenden. Das Komprimieren bereits komprimierter Medientypen wie .zip oder .jpeg ist normalerweise nicht sinnvoll, da dies die Dateigröße erhöhen kann. Wenn das ursprüngliche Medium bereits kodiert ist (z.B. als .zip-Datei), wird diese Information nicht im `Content-Encoding` Header angegeben.

Wenn der `Content-Encoding` Header vorhanden ist, beziehen sich andere Metadaten (z.B. {{HTTPHeader("Content-Length")}}) auf die kodierte Form der Daten und nicht auf die ursprüngliche Ressource, es sei denn, es wird explizit angegeben. Die Inhaltskodierung unterscheidet sich von {{HTTPHeader("Transfer-Encoding")}} darin, dass `Transfer-Encoding` regelt, wie HTTP-Nachrichten selbst über das Netzwerk auf einer [Hop-by-Hop-Basis](/de/docs/Web/HTTP/Reference/Headers#hop-by-hop_headers) übertragen werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Representation_header", "Darstellungs-Header")}}</td>
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
  - : Ein Format, das die [Lempel-Ziv-Kodierung](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77) mit einem 32-Bit-CRC verwendet. Dies ist das ursprüngliche Format des UNIX _gzip_-Programms. Der HTTP/1.1-Standard empfiehlt auch, dass Server, die diese Inhaltskodierung unterstützen, `x-gzip` als Alias anerkennen, aus Kompatibilitätsgründen.
- `compress`
  - : Ein Format, das den [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/LZW) (LZW) Algorithmus verwendet. Der Wertename stammt vom UNIX _compress_-Programm, das diesen Algorithmus implementierte. Wie das compress-Programm, das von den meisten UNIX-Distributionen verschwunden ist, wird diese Inhaltskodierung heute von vielen Browsern kaum mehr verwendet, teilweise wegen eines Patentproblems (das 2003 ablief).
- `deflate`
  - : Verwendung der [zlib](https://en.wikipedia.org/wiki/Zlib)-Struktur (definiert in {{rfc(1950)}}) mit dem [deflate](https://en.wikipedia.org/wiki/Deflate)-Komprimierungsalgorithmus (definiert in {{rfc(1951)}}).
- `br`
  - : Ein Format, das die {{Glossary("Brotli_compression", "Brotli")}}-Algorithmus-Struktur (definiert in {{rfc(7932)}}) verwendet.
- `zstd`
  - : Ein Format, das die {{Glossary("Zstandard_compression", "Zstandard")}}-Algorithmus-Struktur (definiert in {{rfc(8878)}}) verwendet.
- `dcb`

  - : Ein Format, das den [Dictionary-Compressed Brotli Algorithmus](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-compression-dictionary#name-dictionary-compressed-brotl) benutzt. Siehe [Kompressionswörterbuch Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport).

- `dcz`
  - : Ein Format, das den [Dictionary-Compressed Zstandard Algorithmus](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-compression-dictionary#name-dictionary-compressed-zstan) benutzt. Siehe [Kompressionswörterbuch Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport).

## Beispiele

### Komprimierung mit gzip

Auf der Clientseite können Sie eine Liste von Komprimierungsmethoden bekanntgeben, die in einer HTTP-Anfrage mitgesendet werden. Der {{HTTPHeader("Accept-Encoding")}} Header wird für die Aushandlung der Inhaltskodierung verwendet.

```http
Accept-Encoding: gzip, deflate
```

Der Server antwortet mit dem verwendeten Schema, angezeigt durch den `Content-Encoding` Antwort-Header.

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
- [Kompressionswörterbuch Transport Leitfaden](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport)
