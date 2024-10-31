---
title: Content-Encoding
slug: Web/HTTP/Headers/Content-Encoding
l10n:
  sourceCommit: 92b03e46cef6be37de60799363e3e33e3415b491
---

{{HTTPSidebar}}

Der HTTP-**`Content-Encoding`**-{{Glossary("representation_header", "Darstellungs-Header")}} listet die Kodierungen und deren Reihenfolge auf, die auf eine Ressource angewendet wurden. Dies gibt dem Empfänger die Möglichkeit zu verstehen, wie die Daten dekodiert werden müssen, um das ursprüngliche Inhaltsformat zu erhalten, das im {{HTTPHeader("Content-Type")}}-Header beschrieben ist. Die Inhaltskodierung wird hauptsächlich verwendet, um Inhalte zu komprimieren, ohne Informationen über den ursprünglichen Medientyp zu verlieren.

Server sollten die Daten so weit wie möglich komprimieren und die Inhaltskodierung dort verwenden, wo es angemessen ist. Das erneute Komprimieren bereits komprimierter Medientypen, wie .zip oder .jpeg, ist normalerweise nicht angebracht, da dies die Dateigröße erhöhen kann. Wenn das ursprüngliche Medium bereits kodiert ist (z.B. als .zip-Datei), wird diese Information nicht im `Content-Encoding`-Header aufgenommen.

Wenn der `Content-Encoding`-Header vorhanden ist, beziehen sich andere Metadaten (z.B. {{HTTPHeader("Content-Length")}}) auf die kodierte Form der Daten, nicht auf die ursprüngliche Ressource, es sei denn, es wird ausdrücklich angegeben. Die Inhaltskodierung unterscheidet sich von {{HTTPHeader("Transfer-Encoding")}} darin, dass `Transfer-Encoding` bestimmt, wie HTTP-Nachrichten selbst netzwerkübergreifend auf einer [Hop-by-Hop-Basis](/de/docs/Web/HTTP/Headers#hop-by-hop_headers) übertragen werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Representation_header", "Darstellungs-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
  - : Ein Format, das die [Lempel-Ziv-Kodierung](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77) mit einem 32-Bit-CRC verwendet.
    Dies ist das ursprüngliche Format des UNIX-Programms _gzip_.
    Der HTTP/1.1-Standard empfiehlt außerdem, dass Server, die diese Inhaltskodierung unterstützen, `x-gzip` als Alias erkennen sollten, um die Kompatibilität zu gewährleisten.
- `compress`
  - : Ein Format, das den [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/LZW) (LZW) Algorithmus verwendet.
    Der Wertename stammt vom UNIX-Programm _compress_, das diesen Algorithmus implementiert hat.
    Wie das Komprimierungsprogramm, das aus den meisten UNIX-Distributionen verschwunden ist, wird diese Inhaltskodierung heute von vielen Browsern nicht mehr verwendet, teilweise wegen eines Patents, das 2003 abgelaufen ist.
- `deflate`
  - : Verwendung der [zlib](https://en.wikipedia.org/wiki/Zlib)-Struktur (definiert in {{rfc(1950)}}) mit dem [deflate](https://en.wikipedia.org/wiki/Deflate)-Komprimierungsalgorithmus (definiert in {{rfc(1951)}}).
- `br`
  - : Ein Format, das die {{Glossary("Brotli_compression", "Brotli")}}-Algorithmusstruktur (definiert in {{rfc(7932)}}) verwendet.
- `zstd`
  - : Ein Format, das die {{Glossary("Zstandard_compression", "Zstandard")}}-Algorithmusstruktur (definiert in {{rfc(8878)}}) verwendet.

## Beispiele

### Komprimierung mit gzip

Auf der Client-Seite können Sie eine Liste von Komprimierungsmethoden angeben, die mit einer HTTP-Anfrage gesendet werden. Der {{HTTPHeader("Accept-Encoding")}}-Header wird zur Aushandlung der Inhaltskodierung verwendet.

```http
Accept-Encoding: gzip, deflate
```

Der Server antwortet mit dem verwendeten Schema, das durch den `Content-Encoding`-Antwort-Header angegeben wird.

```http
Content-Encoding: gzip
```

Ob ein Server die vom Client angeforderten Komprimierungsmethoden verwendet, hängt von der Konfiguration und den Fähigkeiten des Servers ab.

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
