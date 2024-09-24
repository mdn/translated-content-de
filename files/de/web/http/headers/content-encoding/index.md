---
title: Content-Encoding
slug: Web/HTTP/Headers/Content-Encoding
l10n:
  sourceCommit: ae86913908651e6008079242691e06b5e01d1c78
---

{{HTTPSidebar}}

Der **`Content-Encoding`** {{Glossary("representation header")}} listet alle Codierungen auf, die auf eine Ressource angewendet wurden, und in welcher Reihenfolge. Dies ermöglicht es dem Empfänger, die Daten zu decodieren, um das Originalformat zu erhalten, das im {{HTTPHeader("Content-Type")}}-Header beschrieben ist. Die Inhaltscodierung wird hauptsächlich verwendet, um Inhalte zu komprimieren, ohne Informationen über den ursprünglichen Medientyp zu verlieren.

Server werden ermutigt, Daten so weit wie möglich zu komprimieren und sollten Inhaltscodierung verwenden, wo dies angemessen ist. Die Komprimierung eines bereits komprimierten Medientyps wie .zip oder .jpeg ist möglicherweise nicht angemessen, da dies den Inhalt vergrößern kann. Wenn das ursprüngliche Medium bereits in irgendeiner Weise kodiert ist (z.B. eine .zip-Datei), dann würde diese Information nicht im `Content-Encoding`-Header enthalten sein.

Wenn ein `Content-Encoding`-Header vorhanden ist, beziehen sich andere Metadaten (z.B. {{HTTPHeader("Content-Length")}}) auf die kodierte Form der Daten und nicht auf die ursprüngliche Ressource, es sei denn, dies wird ausdrücklich angegeben. Die Inhaltscodierung unterscheidet sich von {{HTTPHeader("Transfer-Encoding")}}, da `Transfer-Encoding` festlegt, wie HTTP-Nachrichten selbst über das Netzwerk auf einer [Hop-by-Hop-Basis](/de/docs/Web/HTTP/Headers#hop-by-hop_headers) übertragen werden.

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
  - : Ein Format, das das [Lempel-Ziv-Kodierung](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77) mit einem 32-Bit-CRC verwendet. Dies ist das ursprüngliche Format des UNIX _gzip_-Programms. Der HTTP/1.1-Standard empfiehlt außerdem, dass die Server, die diese Inhaltskodierung unterstützen, `x-gzip` als Alias erkennen, aus Gründen der Kompatibilität.
- `compress`
  - : Ein Format, das den [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/LZW) (LZW)-Algorithmus verwendet. Der Wertname wurde vom UNIX _compress_-Programm übernommen, das diesen Algorithmus implementierte. Wie das compress-Programm, das auf den meisten UNIX-Distributionen verschwunden ist, wird diese Inhaltskodierung heute von vielen Browsern nicht mehr verwendet, teilweise wegen eines Patents (es ist 2003 abgelaufen).
- `deflate`
  - : Verwendet die [zlib](https://en.wikipedia.org/wiki/Zlib)-Struktur (definiert in {{rfc(1950)}}) mit dem [deflate](https://en.wikipedia.org/wiki/Deflate)-Kompressionsalgorithmus (definiert in {{rfc(1951)}}).
- `br`
  - : Ein Format, das die {{glossary("Brotli compression","Brotli")}}-Algorithmusstruktur verwendet (definiert in {{rfc(7932)}}).
- `zstd`
  - : Ein Format, das die {{glossary("Zstandard compression","Zstandard")}}-Algorithmusstruktur verwendet (definiert in {{rfc(8878)}}).

## Beispiele

### Komprimieren mit gzip

Auf der Clientseite können Sie eine Liste von Komprimierungsschemata angeben, die in einer HTTP-Anfrage gesendet werden. Der {{HTTPHeader("Accept-Encoding")}}-Header wird verwendet, um über die Inhaltskodierung zu verhandeln.

```http
Accept-Encoding: gzip, deflate
```

Der Server antwortet mit dem verwendeten Schema, angezeigt durch den `Content-Encoding`-Antwort-Header.

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
