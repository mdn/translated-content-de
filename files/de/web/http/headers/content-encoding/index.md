---
title: Content-Encoding
slug: Web/HTTP/Headers/Content-Encoding
l10n:
  sourceCommit: ae86913908651e6008079242691e06b5e01d1c78
---

{{HTTPSidebar}}

Der **`Content-Encoding`**-[Repräsentationsheader](/de/docs/Glossary/representation_header) listet alle Kodierungen auf, die auf eine Ressource angewendet wurden, und in welcher Reihenfolge. Dies lässt den Empfänger wissen, wie er die Daten dekodieren muss, um das im {{HTTPHeader("Content-Type")}}-Header beschriebene ursprüngliche Inhaltsformat zu erhalten. Die Inhaltskodierung wird hauptsächlich verwendet, um Inhalte zu komprimieren, ohne Informationen über den ursprünglichen Medientyp zu verlieren.

Server werden ermutigt, Daten so weit wie möglich zu komprimieren und sollten Inhaltskodierung dort verwenden, wo es angemessen ist. Das Komprimieren eines bereits komprimierten Medientyps wie einer ZIP- oder JPEG-Datei kann unangemessen sein, da dies den Inhalt vergrößern kann. Wenn das ursprüngliche Medium bereits in irgendeiner Weise kodiert ist (z. B. eine Zip-Datei), würde diese Information nicht im `Content-Encoding`-Header enthalten sein.

Wenn es einen `Content-Encoding`-Header gibt, beziehen sich andere Metadaten (z. B. {{HTTPHeader("Content-Length")}}) auf die kodierte Form der Daten und nicht auf die ursprüngliche Ressource, es sei denn, es wird ausdrücklich angegeben. Die Inhaltskodierung unterscheidet sich von {{HTTPHeader("Transfer-Encoding")}} darin, dass `Transfer-Encoding` den Umgang mit der Übertragung von HTTP-Nachrichten im Netzwerk auf einer [Hop-by-Hop-Basis](/de/docs/Web/HTTP/Headers#hop-by-hop_headers) behandelt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Repräsentationsheader](/de/docs/Glossary/Representation_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
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
  - : Ein Format, das die [Lempel-Ziv-Kodierung](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77) mit einer 32-Bit-CRC verwendet. Dies ist das ursprüngliche Format des UNIX-Programms _gzip_. Der HTTP/1.1-Standard empfiehlt auch, dass Server, die diese Inhaltskodierung unterstützen, `x-gzip` als Alias erkennen, um die Kompatibilität zu gewährleisten.
- `compress`
  - : Ein Format, das den [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/LZW)-Algorithmus (LZW) verwendet. Der Wertname stammt vom UNIX-Programm _compress_, das diesen Algorithmus implementierte. Wie das Programm, das aus den meisten UNIX-Distributionen verschwunden ist, wird diese Inhaltskodierung heute von vielen Browsern kaum genutzt, teilweise aufgrund eines Patentproblems (es lief 2003 ab).
- `deflate`
  - : Die Verwendung der [zlib](https://en.wikipedia.org/wiki/Zlib)-Struktur (definiert in {{rfc(1950)}}) mit dem [deflate](https://en.wikipedia.org/wiki/Deflate)-Kompressionsalgorithmus (definiert in {{rfc(1951)}}).
- `br`
  - : Ein Format, das die [Brotli](/de/docs/Glossary/Brotli_compression)-Algorithmusstruktur (definiert in {{rfc(7932)}}) verwendet.
- `zstd`
  - : Ein Format, das die [Zstandard](/de/docs/Glossary/Zstandard_compression)-Algorithmusstruktur (definiert in {{rfc(8878)}}) verwendet.

## Beispiele

### Komprimierung mit gzip

Auf der Client-Seite können Sie eine Liste von Kompressionsmethoden angeben, die in einer HTTP-Anfrage gesendet werden. Der {{HTTPHeader("Accept-Encoding")}}-Header wird verwendet, um über die Inhaltskodierung zu verhandeln.

```http
Accept-Encoding: gzip, deflate
```

Der Server antwortet mit dem verwendeten Schema, das durch den `Content-Encoding`-Antwort-Header angezeigt wird.

```http
Content-Encoding: gzip
```

Beachten Sie, dass der Server nicht verpflichtet ist, irgendeine Kompressionsmethode zu verwenden. Die Kompression hängt stark von den Servereinstellungen und den verwendeten Servermodulen ab.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Transfer-Encoding")}}
- [Brotli-Kompression](/de/docs/Glossary/Brotli_compression)
- [GZip-Kompression](/de/docs/Glossary/GZip_compression)
- [Zstandard-Kompression](/de/docs/Glossary/Zstandard_compression)
