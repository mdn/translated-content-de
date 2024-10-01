---
title: Transfer-Encoding
slug: Web/HTTP/Headers/Transfer-Encoding
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTTPSidebar}}

Der **`Transfer-Encoding`**-Header gibt die Form der Kodierung an, die zum Übertragen von Nachrichten zwischen Knoten im Netzwerk verwendet wird.

> [!WARNING]
> HTTP/2 verbietet alle Verwendungen des Transfer-Encoding-Headers außer dem HTTP/2-spezifischen: `"trailers"`.
> HTTP/2 und spätere Versionen bieten effizientere Mechanismen für das Daten-Streaming als Chunked Transfer und verbieten die Verwendung des Headers.
> Die Verwendung des Headers in HTTP/2 kann wahrscheinlich zu einem spezifischen `protocol error` führen, da das HTTP/2-Protokoll die Verwendung verbietet.

`Transfer-Encoding` ist ein [hop-by-hop header](/de/docs/Web/HTTP/Headers#hop-by-hop_headers), der auf eine Nachricht zwischen zwei Knoten angewendet wird, nicht auf eine Ressource selbst.
Jedes Segment einer Multi-Knoten-Verbindung kann unterschiedliche `Transfer-Encoding`-Werte verwenden.
Wenn Sie Daten über die gesamte Verbindung komprimieren möchten, verwenden Sie stattdessen den end-to-end {{HTTPHeader("Content-Encoding")}}-Header.

Wenn er in der Antwort auf eine {{HTTPMethod("HEAD")}}-Anfrage vorhanden ist, die keinen Body hat, gibt er den Wert an, der auf die entsprechende {{HTTPMethod("GET")}}-Nachricht angewendet worden wäre.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request header")}}, {{Glossary("Response_header", "Response header")}}, {{Glossary("Content_header", "Content header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
  - : Daten werden in einer Reihe von Blöcken gesendet. Der {{HTTPHeader("Content-Length")}}-Header wird in diesem Fall weggelassen und am Anfang jedes Blocks muss die Länge des aktuellen Blocks in hexadezimalem Format hinzugefügt werden, gefolgt von `\r\n` und dann dem Block selbst, gefolgt von einem weiteren `\r\n`.
    Der abschließende Block ist ein regulärer Block, mit der Ausnahme, dass seine Länge null ist.
    Er wird vom Trailer gefolgt, der aus einer (möglicherweise leeren) Sequenz von Header-Feldern besteht.
- `compress`
  - : Ein Format unter Verwendung des [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/LZW) (LZW)-Algorithmus.
    Der Wertename wurde vom UNIX-Programm _compress_ übernommen, das diesen Algorithmus implementierte.
    Wie das Compress-Programm, das von den meisten UNIX-Distributionen verschwunden ist, wird diese Content-Encoding heutzutage von fast keinem Browser mehr verwendet, teilweise aufgrund eines Patentproblems (das 2003 ablief).
- `deflate`
  - : Verwendung der [zlib](https://en.wikipedia.org/wiki/Zlib)-Struktur (definiert in [RFC 1950](https://datatracker.ietf.org/doc/html/rfc1950)), mit dem [_deflate_](https://en.wikipedia.org/wiki/DEFLATE)-Kompessionsalgorithmus (definiert in [RFC 1951](https://datatracker.ietf.org/doc/html/rfc1952)).
- `gzip`
  - : Ein Format unter Verwendung der [Lempel-Ziv-Kodierung](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77), mit einem 32-Bit-CRC.
    Dies ist ursprünglich das Format des UNIX-Programms _gzip_.
    Der HTTP/1.1-Standard empfiehlt auch, dass die Server, die dieses Content-Encoding unterstützen, `x-gzip` als Alias erkennen sollten, aus Kompatibilitätsgründen.

## Beispiele

### Chunked Encoding

Chunked Encoding ist nützlich, wenn größere Datenmengen an den Client gesendet werden und die Gesamtgröße der Antwort möglicherweise nicht bekannt ist, bis die Anfrage vollständig verarbeitet wurde.
Zum Beispiel beim Generieren einer großen HTML-Tabelle, die aus einer Datenbankabfrage resultiert, oder beim Übertragen großer Bilder.
Eine Chunked-Antwort sieht folgendermaßen aus:

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
- Header-Felder, die die Verwendung von Trails regeln: {{HTTPHeader("TE")}} (Anfragen) und {{HTTPHeader("Trailer")}} (Antworten).
- [Chunked Transfer Encoding](https://en.wikipedia.org/wiki/Chunked_transfer_encoding)
