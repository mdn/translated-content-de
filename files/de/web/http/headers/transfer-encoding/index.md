---
title: Transfer-Encoding
slug: Web/HTTP/Headers/Transfer-Encoding
l10n:
  sourceCommit: ae86913908651e6008079242691e06b5e01d1c78
---

{{HTTPSidebar}}

Der **`Transfer-Encoding`** Header spezifiziert die Art der Codierung, die verwendet wird, um Nachrichten zwischen Knoten im Netzwerk zu übertragen.

> [!WARNING]
> HTTP/2 verbietet alle Verwendungen des Transfer-Encoding-Headers außer dem HTTP/2-spezifischen: `"trailers"`.
> HTTP/2 und spätere Versionen bieten ihre eigenen, effizienteren Mechanismen für Daten-Streaming als Chunked Transfer und untersagen die Verwendung des Headers.
> Die Verwendung des Headers in HTTP/2 kann wahrscheinlich zu einem spezifischen `protocol error` führen, da das HTTP/2-Protokoll die Verwendung verbietet.

`Transfer-Encoding` ist ein [Hop-by-Hop-Header](/de/docs/Web/HTTP/Headers#hop-by-hop_headers), der auf eine Nachricht zwischen zwei Knoten angewendet wird, nicht auf die Ressource selbst.
Jedes Segment einer mehrgliedrigen Verbindung kann unterschiedliche `Transfer-Encoding`-Werte verwenden.
Wenn Sie Daten über die gesamte Verbindung komprimieren möchten, verwenden Sie stattdessen den End-to-End-{{HTTPHeader("Content-Encoding")}}-Header.

Wenn er in einer Antwort auf eine {{HTTPMethod("HEAD")}}-Anfrage vorhanden ist, die keinen Körper hat, zeigt er den Wert an, der auf die entsprechende {{HTTPMethod("GET")}}-Nachricht angewendet worden wäre.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>
        {{Glossary("Request header")}}, {{Glossary("Response header")}}, {{Glossary("Content header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
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

// Mehrere Werte können, durch ein Komma getrennt, aufgelistet werden
Transfer-Encoding: gzip, chunked
```

## Direktiven

- `chunked`
  - : Daten werden in einer Reihe von Blöcken gesendet. Der {{HTTPHeader("Content-Length")}}-Header wird in diesem Fall weggelassen, und am Anfang jedes Blocks müssen Sie die Länge des aktuellen Blocks im Hexadezimalformat hinzufügen, gefolgt von '`\r\n`' und dann dem Block selbst, gefolgt von einem weiteren '`\r\n`'.
    Der abschließende Block ist ein regulärer Block, mit der Ausnahme, dass seine Länge null ist.
    Ihm folgt der Trailer, der aus einer (möglicherweise leeren) Sequenz von Header-Feldern besteht.
- `compress`
  - : Ein Format, das den [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/LZW) (LZW) Algorithmus verwendet.
    Der Wertename wurde von dem UNIX-_compress_-Programm übernommen, das diesen Algorithmus implementierte.
    Wie das Compress-Programm, das aus den meisten UNIX-Distributionen verschwunden ist, wird diese Inhaltscodierung heute von fast keinem Browser verwendet, teilweise aufgrund eines Patentproblems (das 2003 abgelaufen ist).
- `deflate`
  - : Verwendung der [zlib](https://en.wikipedia.org/wiki/Zlib)-Struktur (definiert in [RFC 1950](https://datatracker.ietf.org/doc/html/rfc1950)), mit dem [_deflate_](https://en.wikipedia.org/wiki/DEFLATE)-Kompressionsalgorithmus (definiert in [RFC 1951](https://datatracker.ietf.org/doc/html/rfc1952)).
- `gzip`
  - : Ein Format, das die [Lempel-Ziv-Kodierung](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77) verwendet, mit einem 32-Bit-CRC.
    Dies ist ursprünglich das Format des UNIX-_gzip_-Programms.
    Der HTTP/1.1-Standard empfiehlt auch, dass die Server, die diese Inhaltscodierung unterstützen, `x-gzip` als Alias erkennen, aus Kompatibilitätsgründen.

## Beispiele

### Chunked-Codierung

Chunked-Codierung ist nützlich, wenn größere Datenmengen an den Client gesendet werden und die Gesamtgröße der Antwort möglicherweise nicht bekannt ist, bis die Anfrage vollständig bearbeitet wurde.
Zum Beispiel bei der Erstellung einer großen HTML-Tabelle, die aus einer Datenbankabfrage resultiert, oder beim Übertragen großer Bilder.
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
- Header-Felder, die die Verwendung von Trailers regeln: {{HTTPHeader("TE")}} (Anfragen) und {{HTTPHeader("Trailer")}} (Antworten).
- [Chunked transfer encoding](https://en.wikipedia.org/wiki/Chunked_transfer_encoding)
