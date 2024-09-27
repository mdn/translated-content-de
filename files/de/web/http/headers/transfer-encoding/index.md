---
title: Transfer-Encoding
slug: Web/HTTP/Headers/Transfer-Encoding
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTTPSidebar}}

Der **`Transfer-Encoding`** Header legt die Art der Codierung fest, die zum Übertragen von Nachrichten zwischen Knoten im Netzwerk verwendet wird.

> [!WARNING]
> HTTP/2 verbietet alle Verwendungen des Transfer-Encoding Headers mit Ausnahme der spezifischen für HTTP/2: `"trailers"`.
> HTTP/2 und später bietet seine eigenen effizienteren Mechanismen für Datenstreaming als "chunked transfer" und verbietet die Verwendung des Headers.
> Die Nutzung des Headers in HTTP/2 kann wahrscheinlich zu einem spezifischen `protocol error` führen, da das HTTP/2-Protokoll die Verwendung verbietet.

`Transfer-Encoding` ist ein [Hop-by-hop-Header](/de/docs/Web/HTTP/Headers#hop-by-hop_headers), der auf eine Nachricht zwischen zwei Knoten angewendet wird, nicht auf die Ressource selbst.
Jedes Segment einer Multi-Knoten-Verbindung kann unterschiedliche `Transfer-Encoding` Werte verwenden.
Wenn Sie Daten über die gesamte Verbindung komprimieren möchten, verwenden Sie stattdessen den End-to-end {{HTTPHeader("Content-Encoding")}} Header.

Wenn dieser bei einer Antwort auf einen {{HTTPMethod("HEAD")}}-Request ohne Body vorhanden ist, zeigt er den Wert an, der auf die entsprechende {{HTTPMethod("GET")}} Nachricht angewendet worden wäre.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        [Request header](/de/docs/Glossary/Request_header), [Response header](/de/docs/Glossary/Response_header), [Content header](/de/docs/Glossary/Content_header)
      </td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Transfer-Encoding: chunked
Transfer-Encoding: compress
Transfer-Encoding: deflate
Transfer-Encoding: gzip

// Several values can be listed, separated by a comma
Transfer-Encoding: gzip, chunked
```

## Direktiven

- `chunked`
  - : Daten werden in einer Reihe von Blöcken gesendet. Der {{HTTPHeader("Content-Length")}} Header wird in diesem Fall weggelassen und am Anfang jedes Blocks muss die Länge des aktuellen Blocks im Hexadezimalformat hinzugefügt werden, gefolgt von `\r\n` und dann der Block selbst, gefolgt von einem weiteren `\r\n`.
    Der endende Block ist ein normaler Block, mit der Ausnahme, dass seine Länge null ist.
    Er wird gefolgt vom Trailer, der aus einer (möglicherweise leeren) Sequenz von Header-Feldern besteht.
- `compress`
  - : Ein Format, das den [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/LZW) (LZW) Algorithmus verwendet.
    Der Wertename wurde vom UNIX _compress_ Programm übernommen, das diesen Algorithmus implementierte.
    Wie das compress-Programm, das aus den meisten UNIX-Distributionen verschwunden ist, wird diese Inhaltscodierung heutzutage von fast keinem Browser mehr verwendet, teilweise aufgrund eines Patentrechts, das 2003 abgelaufen ist.
- `deflate`
  - : Verwendung der [zlib](https://en.wikipedia.org/wiki/Zlib) Struktur (definiert in [RFC 1950](https://datatracker.ietf.org/doc/html/rfc1950)), mit dem [_deflate_](https://en.wikipedia.org/wiki/DEFLATE) Kompressionsalgorithmus (definiert in [RFC 1951](https://datatracker.ietf.org/doc/html/rfc1952)).
- `gzip`
  - : Ein Format, das die [Lempel-Ziv-Codierung](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77) verwendet, mit einer 32-Bit CRC.
    Dies ist ursprünglich das Format des UNIX _gzip_ Programms.
    Der HTTP/1.1 Standard empfiehlt auch, dass die Server, die diese Inhaltscodierung unterstützen, `x-gzip` als Alias erkennen sollten, aus Kompatibilitätsgründen.

## Beispiele

### Chunked Encoding

Chunked Encoding ist nützlich, wenn größere Datenmengen an den Client gesendet werden und die Gesamtgröße der Antwort möglicherweise nicht bekannt ist, bis die Anfrage vollständig verarbeitet wurde.
Zum Beispiel bei der Generierung einer großen HTML-Tabelle als Ergebnis einer Datenbankabfrage oder beim Übertragen großer Bilder.
Eine chunked Antwort sieht folgendermaßen aus:

```http
HTTP/1.1 200 OK
Content-Type: text/plain
Transfer-Encoding: chunked

7\r\n
Mozilla\r\n
11\r\n
Developer Network\r\n
0\r\n
\r\n
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Content-Encoding")}}
- {{HTTPHeader("Content-Length")}}
- Header-Felder, die die Verwendung von Trailers regeln: {{HTTPHeader("TE")}} (Anfragen) und {{HTTPHeader("Trailer")}} (Antworten).
- [Chunked transfer encoding](https://en.wikipedia.org/wiki/Chunked_transfer_encoding)
