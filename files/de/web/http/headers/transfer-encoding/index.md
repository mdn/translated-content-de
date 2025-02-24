---
title: Transfer-Encoding
slug: Web/HTTP/Headers/Transfer-Encoding
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP-**`Transfer-Encoding`**-{{Glossary("request_header", "Anfrage")}} und -{{Glossary("response_header", "Antwort-Header")}} gibt die Form der Kodierung an, die verwendet wird, um Nachrichten zwischen Knoten im Netzwerk zu übertragen.

`Transfer-Encoding` ist ein [Hop-by-Hop-Header](/de/docs/Web/HTTP/Headers#hop-by-hop_headers), der auf eine Nachricht zwischen zwei Knoten angewendet wird, nicht auf eine Ressource selbst.
Jedes Segment einer Multi-Knoten-Verbindung kann unterschiedliche `Transfer-Encoding`-Werte verwenden.
Wenn Sie Daten über die gesamte Verbindung komprimieren möchten, verwenden Sie stattdessen den End-to-End-{{HTTPHeader("Content-Encoding")}}-Header.

Wenn er in einer Antwort auf eine {{HTTPMethod("HEAD")}}-Anfrage ohne Body vorhanden ist, zeigt er den Wert an, der der entsprechenden {{HTTPMethod("GET")}}-Nachricht zugeordnet wäre.

> [!WARNING]
> HTTP/2 verbietet alle Verwendungen des `Transfer-Encoding`-Headers außer dem HTTP/2-spezifischen Wert `"trailers"`.
> HTTP/2 und spätere Versionen bieten effizientere Mechanismen für Daten-Streaming als chunked Transfer.
> Die Verwendung des Headers in HTTP/2 kann wahrscheinlich zu einem spezifischen `protocol error` führen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anfrage-Header")}}, {{Glossary("Response_header", "Antwort-Header")}}, {{Glossary("Content_header", "Inhalts-Header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>Ja</td>
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
  - : Daten werden in einer Reihe von Blöcken gesendet.
    Inhalt kann in Streams unbekannter Größe gesendet werden, um als eine Sequenz von längen-begrenzten Puffern übertragen zu werden, sodass der Sender die Verbindung offen halten kann und der Empfänger weiß, wann er die gesamte Nachricht empfangen hat.
    Der {{HTTPHeader("Content-Length")}}-Header muss weggelassen werden, und zu Beginn jedes Blocks zeigt eine Zeichenfolge von hexadezimalen Ziffern die Größe der Blockdaten in Oktetten an, gefolgt von `\r\n` und dann der Block selbst, gefolgt von einem weiteren `\r\n`.
    Der abschließende Block ist ein Block mit null Länge.
- `compress`
  - : Ein Format, das den [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/LZW) (LZW)-Algorithmus verwendet.
    Der Wertename stammt vom UNIX-_compress_-Programm, das diesen Algorithmus implementierte.
    Wie das compress-Programm, das von den meisten UNIX-Distributionen verschwunden ist, wird diese Inhaltkodierung heute von fast keinem Browser verwendet, teilweise wegen eines Patentproblems (das 2003 abgelaufen ist).
- `deflate`
  - : Verwendung der [zlib](https://en.wikipedia.org/wiki/Zlib)-Struktur (definiert in [RFC 1950](https://datatracker.ietf.org/doc/html/rfc1950)), mit dem [_deflate_](https://en.wikipedia.org/wiki/DEFLATE)-Kompressionsalgorithmus (definiert in [RFC 1951](https://datatracker.ietf.org/doc/html/rfc1952)).
- `gzip`
  - : Ein Format, das die [Lempel-Ziv-Kodierung](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77) mit einer 32-Bit-CRC nutzt.
    Dies ist ursprünglich das Format des UNIX-_gzip_-Programms.
    Der HTTP/1.1-Standard empfiehlt auch, dass die Server, die diese Inhaltkodierung unterstützen, `x-gzip` als Alias erkennen, aus Gründen der Kompatibilität.

## Beispiele

### Antwort mit chunked Kodierung

Chunked Kodierung ist nützlich, wenn größere Datenmengen an den Client gesendet werden und die Gesamtgröße der Antwort möglicherweise nicht bekannt ist, bis die Anfrage vollständig verarbeitet wurde.
Zum Beispiel beim Generieren einer großen HTML-Tabelle, die aus einer Datenbankabfrage resultiert, oder beim Übertragen großer Bilder.
Eine chunked Antwort sieht so aus:

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
- Header-Felder, die die Verwendung von Trailern regulieren: {{HTTPHeader("TE")}} (Anfragen) und {{HTTPHeader("Trailer")}} (Antworten).
- [Chunked Transfer Encoding](https://en.wikipedia.org/wiki/Chunked_transfer_encoding)
