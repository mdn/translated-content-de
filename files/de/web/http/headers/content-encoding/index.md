---
title: Content-Encoding
slug: Web/HTTP/Headers/Content-Encoding
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP **`Content-Encoding`** {{Glossary("representation_header", "Repräsentations-Header")}} listet die Kodierungen und deren Reihenfolge auf, in der sie auf eine Ressource angewendet wurden.
Dies teilt dem Empfänger mit, wie die Daten dekodiert werden müssen, um das originale Inhaltsformat, das im {{HTTPHeader("Content-Type")}}-Header beschrieben ist, zu erhalten.
Die Inhaltskodierung wird hauptsächlich verwendet, um Inhalte zu komprimieren, ohne Informationen über den ursprünglichen Medientyp zu verlieren.

Server sollten Daten nach Möglichkeit so stark wie möglich komprimieren und, wo angebracht, Inhaltskodierung verwenden.
Bereits komprimierte Medientypen wie .zip oder .jpeg weiter zu komprimieren, ist in der Regel nicht sinnvoll, da dies die Dateigröße erhöhen kann.
Wenn das ursprüngliche Medium bereits kodiert ist (z.B. als .zip-Datei), wird diese Information nicht im `Content-Encoding`-Header angegeben.

Wenn der `Content-Encoding`-Header vorhanden ist, beziehen sich andere Metadaten (z.B. {{HTTPHeader("Content-Length")}}) auf die kodierte Form der Daten und nicht auf die originale Ressource, es sei denn, es wird ausdrücklich angegeben.
Die Inhaltskodierung unterscheidet sich von {{HTTPHeader("Transfer-Encoding")}} dahingehend, dass `Transfer-Encoding` regelt, wie HTTP-Nachrichten selbst über das Netzwerk auf Basis von [Hop-by-Hop](/de/docs/Web/HTTP/Headers#hop-by-hop_headers) geliefert werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Representation_header", "Repräsentations-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
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
  - : Ein Format, das die [Lempel-Ziv-Komprimierung](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77) mit einem 32-Bit-CRC verwendet.
    Dies ist das ursprüngliche Format des UNIX _gzip_-Programms.
    Der HTTP/1.1-Standard empfiehlt zudem, dass die Server, die diese Inhaltskodierung unterstützen, `x-gzip` als Alias erkennen sollten, um Kompatibilität zu gewährleisten.
- `compress`
  - : Ein Format, das den [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/LZW) (LZW) Algorithmus verwendet.
    Der Wertename wurde vom UNIX _compress_-Programm übernommen, das diesen Algorithmus implementierte.
    Wie das compress-Programm, das in den meisten UNIX-Distributionen verschwunden ist, wird diese Inhaltskodierung heute von vielen Browsern nicht mehr verwendet, teilweise wegen eines Patentproblems (es endete 2003).
- `deflate`
  - : Verwendung der [zlib](https://en.wikipedia.org/wiki/Zlib)-Struktur (definiert in {{rfc(1950)}}) mit dem [deflate](https://en.wikipedia.org/wiki/Deflate) Kompressionsalgorithmus (definiert in {{rfc(1951)}}).
- `br`
  - : Ein Format, das die {{Glossary("Brotli_compression", "Brotli")}}-Algorithmusstruktur verwendet (definiert in {{rfc(7932)}}).
- `zstd`
  - : Ein Format, das die {{Glossary("Zstandard_compression", "Zstandard")}}-Algorithmusstruktur verwendet (definiert in {{rfc(8878)}}).

## Beispiele

### Komprimieren mit gzip

Auf der Client-Seite können Sie eine Liste von Kompressionsschemen übermitteln, die in einer HTTP-Anfrage gesendet werden. Der {{HTTPHeader("Accept-Encoding")}}-Header wird zur Aushandlung der Inhaltskodierung verwendet.

```http
Accept-Encoding: gzip, deflate
```

Der Server antwortet mit dem verwendeten Schema, das im `Content-Encoding` Antwort-Header angegeben ist.

```http
Content-Encoding: gzip
```

Ob ein Server die vom Client angeforderten Kompressionsmethoden verwendet, hängt von der Konfiguration und den Fähigkeiten des Servers ab.

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
