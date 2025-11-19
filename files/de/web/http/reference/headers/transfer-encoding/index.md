---
title: Transfer-Encoding header
short-title: Transfer-Encoding
slug: Web/HTTP/Reference/Headers/Transfer-Encoding
l10n:
  sourceCommit: dc18e207e48c04447d979a731129d1ae253a2109
---

Der HTTP **`Transfer-Encoding`** {{Glossary("request_header", "Anforderungs-")}} und {{Glossary("response_header", "Antwortheader")}} spezifiziert die Form der Kodierung, die verwendet wird, um Nachrichten zwischen Knoten im Netzwerk zu übertragen.

`Transfer-Encoding` ist ein [Hop-by-Hop-Header](/de/docs/Web/HTTP/Reference/Headers#hop-by-hop_headers), der auf eine Nachricht zwischen zwei Knoten angewendet wird, nicht auf eine Ressource selbst.
Jedes Segment einer Multi-Knoten-Verbindung kann unterschiedliche `Transfer-Encoding`-Werte verwenden.
Wenn Sie Daten über die gesamte Verbindung hinweg komprimieren möchten, verwenden Sie stattdessen den End-to-End {{HTTPHeader("Content-Encoding")}} Header.

In der Praxis wird dieser Header selten genutzt, und in diesen Fällen wird er fast immer mit `chunked` verwendet.

Die Spezifikation besagt jedoch, dass, wenn er in einer Nachricht vorhanden ist, er die auf die Nachricht in diesem Hop angewendete Kompression und/oder ob die Nachricht gestückelt wurde, anzeigt.
Zum Beispiel zeigt `Transfer-Encoding: gzip, chunked` an, dass der Inhalt unter Verwendung der Gzip-Codierung komprimiert und dann unter Verwendung der Chunked-Codierung gestückelt wurde, während der Nachrichtenkörper erstellt wurde.

Der Header ist in Antworten auf eine {{HTTPMethod("HEAD")}} Anfrage optional, da diese Nachrichten keinen Körper haben und daher keine Transferkodierung benötigen.
Wenn er vorhanden ist, zeigt er den Wert an, der auf die entsprechende Antwort auf eine {{HTTPMethod("GET")}} Nachricht angewendet worden wäre, falls diese `GET`-Anfrage keine bevorzugte `Transfer-Encoding` enthält.

> [!WARNING]
> HTTP/2 verbietet alle Verwendungen des `Transfer-Encoding` Headers.
> HTTP/2 und spätere Versionen bieten effizientere Mechanismen für das Datenstreaming als chunked transfer.
> Die Verwendung des Headers in HTTP/2 kann wahrscheinlich zu einem spezifischen `protocol error` führen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungsheader")}}, {{Glossary("Response_header", "Antwortheader")}}, {{Glossary("Content_header", "Inhaltsheader")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
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
  - : Daten werden in einer Reihe von Stücken gesendet.
    Der Inhalt kann in Streams unbekannter Größe gesendet werden, um als Sequenz von längenbegrenzten Puffern übertragen zu werden, sodass der Absender eine Verbindung offen halten kann und der Empfänger weiß, wann er die gesamte Nachricht erhalten hat.
    Der {{HTTPHeader("Content-Length")}} Header muss weggelassen werden, und am Anfang jedes Stückes zeigt eine Zeichenkette aus hexadezimalen Ziffern die Größe der Stückdaten in Oktetten an, gefolgt von `\r\n` und dann dem Stück selbst, gefolgt von einem weiteren `\r\n`.
    Das abschließende Stück ist ein Stück mit Länge Null.
- `compress`
  - : Ein Format unter Verwendung des [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/LZW) (LZW) Algorithmus.
    Der Wertname wurde von dem UNIX-Programm _compress_ übernommen, das diesen Algorithmus implementierte.
    Wie das Compress-Programm, das aus den meisten UNIX-Distributionen verschwunden ist, wird diese Inhaltkodierung heute von fast keinem Browser mehr verwendet, teilweise aufgrund eines Patentproblems (das 2003 abgelaufen ist).
- `deflate`
  - : Verwendung der [zlib](https://en.wikipedia.org/wiki/Zlib) Struktur (definiert in [RFC 1950](https://datatracker.ietf.org/doc/html/rfc1950)), mit dem [_deflate_](https://en.wikipedia.org/wiki/DEFLATE) Komprimierungsalgorithmus (definiert in [RFC 1951](https://datatracker.ietf.org/doc/html/rfc1952)).
- `gzip`
  - : Ein Format, das die [Lempel-Ziv-Codierung](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77) mit einer 32-Bit CRC verwendet.
    Dies ist ursprünglich das Format des UNIX-Programms _gzip_.
    Der HTTP/1.1 Standard empfiehlt auch, dass die Server, die diese Inhaltkodierung unterstützen, `x-gzip` als Alias erkennen sollten, aus Kompatibilitätsgründen.

## Beispiele

### Antwort mit Chunked Encoding

Chunked Encoding ist nützlich, wenn größere Datenmengen an den Client gesendet werden und die Gesamtgröße der Antwort möglicherweise erst bekannt ist, wenn die Anfrage vollständig verarbeitet wurde.
Zum Beispiel beim Generieren einer großen HTML-Tabelle, die aus einer Datenbankabfrage resultiert, oder beim Übertragen großer Bilder.
Eine chunked Antwort sieht so aus:

```http
HTTP/1.1 200 OK
Content-Type: text/plain
Transfer-Encoding: chunked

7\r\n
Welcome\r\n
1c\r\n
to Mozilla Developer Network\r\n
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
- [Chunked transfer encoding](https://en.wikipedia.org/wiki/Chunked_transfer_encoding)
