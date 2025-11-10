---
title: Transfer-Encoding header
short-title: Transfer-Encoding
slug: Web/HTTP/Reference/Headers/Transfer-Encoding
l10n:
  sourceCommit: c98b77c8478136a2216d3daf6e05a8f3812dfe1e
---

Der HTTP **`Transfer-Encoding`** {{Glossary("request_header", "Anforderungs-")}} und {{Glossary("response_header", "Antwortheader")}} spezifiziert die Form der Kodierung, die verwendet wird, um Nachrichten zwischen Knoten im Netzwerk zu übertragen.

`Transfer-Encoding` ist ein [Hop-by-Hop-Header](/de/docs/Web/HTTP/Reference/Headers#hop-by-hop_headers), der auf eine Nachricht zwischen zwei Knoten angewendet wird, nicht auf die Ressource selbst.
Jedes Segment einer Multi-Knoten-Verbindung kann unterschiedliche `Transfer-Encoding`-Werte verwenden.
Wenn Sie Daten über die gesamte Verbindung komprimieren möchten, verwenden Sie stattdessen den End-to-End {{HTTPHeader("Content-Encoding")}} Header.

In der Praxis wird dieser Header selten verwendet, und in diesen Fällen fast immer mit `chunked`.

Die Spezifikation gibt jedoch an, dass dieser Header, wenn er in einer Nachricht vorhanden ist, die Kompression angibt, die auf die Nachricht in diesem Schritt angewandt wurde, und/oder ob die Nachricht gestückelt wurde.
Zum Beispiel zeigt `Transfer-Encoding: gzip, chunked` an, dass der Inhalt durch die gzip-Kodierung komprimiert und dann unter Verwendung der Chunked-Kodierung gestückelt wurde, während der Nachrichtentext erstellt wurde.

Der Header ist optional in Antworten auf eine {{HTTPMethod("HEAD")}}-Anfrage, da diese Nachrichten keinen Textkörper haben und daher keine Transferkodierung erfordern.
Wenn er vorhanden ist, zeigt er den Wert an, der auf die entsprechende Antwort auf eine {{HTTPMethod("GET")}}-Nachricht angewendet worden wäre, wenn diese `GET`-Anfrage keine bevorzugte `Transfer-Encoding` enthielt.

> [!WARNING]
> HTTP/2 verbietet jegliche Verwendung des `Transfer-Encoding` Headers.
> HTTP/2 und spätere Versionen bieten effizientere Mechanismen für Datenstreaming als Chunked Transfer.
> Die Verwendung des Headers in HTTP/2 kann wahrscheinlich zu einem bestimmten `protocol error` führen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungs-Header")}}, {{Glossary("Response_header", "Antwort-Header")}}, {{Glossary("Content_header", "Inhalts-Header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
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
  - : Daten werden in einer Reihe von Chunks gesendet.
    Inhalt kann als Strom unbekannter Größe gesendet werden, der als Sequenz von Länge-begrenzten Puffern übertragen wird, so dass der Absender die Verbindung offen halten kann und dem Empfänger mitteilen kann, wann er die gesamte Nachricht erhalten hat.
    Der {{HTTPHeader("Content-Length")}}-Header muss weggelassen werden, und am Anfang jedes Chunks gibt eine Zeichenfolge aus hexadezimalen Ziffern die Größe der Chunk-Daten in Oktetten an, gefolgt von `\r\n` und dann dem Chunk selbst, gefolgt von einem weiteren `\r\n`.
    Der abschließende Chunk ist ein Chunk mit null Länge.
- `compress`
  - : Ein Format, das den [Lempel-Ziv-Welch](https://de.wikipedia.org/wiki/LZW)-Algorithmus (LZW) verwendet.
    Der Wertename wurde vom UNIX-Programm _compress_ übernommen, das diesen Algorithmus implementierte.
    Wie das Programm compress, das von den meisten UNIX-Distributionen verschwunden ist, wird diese Inhaltskodierung heute von fast keinem Browser verwendet, teilweise wegen eines Patentproblems (das 2003 abgelaufen ist).
- `deflate`
  - : Verwendung der [zlib](https://de.wikipedia.org/wiki/Zlib)-Struktur (definiert in [RFC 1950](https://datatracker.ietf.org/doc/html/rfc1950)), mit dem [_deflate_](https://de.wikipedia.org/wiki/DEFLATE)-Kompressionsalgorithmus (definiert in [RFC 1951](https://datatracker.ietf.org/doc/html/rfc1952)).
- `gzip`
  - : Ein Format, das die [Lempel-Ziv-Kodierung](https://de.wikipedia.org/wiki/LZ77_und_LZ78#LZ77) (LZ77) mit einer 32-Bit CRC verwendet.
    Dies ist ursprünglich das Format des UNIX-Programms _gzip_.
    Der HTTP/1.1-Standard empfiehlt auch, dass die Server, die diese Inhaltskodierung unterstützen, `x-gzip` als Alias erkennen sollten, aus Kompatibilitätsgründen.

## Beispiele

### Antwort mit gestückelter Kodierung

Die gestückelte Kodierung ist nützlich, wenn größere Datenmengen an den Client gesendet werden und die Gesamtgröße der Antwort möglicherweise nicht bekannt ist, bis die Anfrage vollständig verarbeitet wurde.
Zum Beispiel, beim Generieren einer großen HTML-Tabelle, die aus einer Datenbankabfrage resultiert, oder beim Übertragen großer Bilder.
Eine gestückelte Antwort sieht folgendermaßen aus:

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
- [Chunked transfer encoding](https://de.wikipedia.org/wiki/Chunked_transfer_encoding)
