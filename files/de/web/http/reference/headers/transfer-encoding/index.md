---
title: Transfer-Encoding header
short-title: Transfer-Encoding
slug: Web/HTTP/Reference/Headers/Transfer-Encoding
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP-**`Transfer-Encoding`**-{{Glossary("request_header", "Anforderungs-")}} und {{Glossary("response_header", "Antwortheader")}} spezifiziert die Form der Kodierung, die zum Übertragen von Nachrichten zwischen Knoten im Netzwerk verwendet wird.

`Transfer-Encoding` ist ein [Hop-by-Hop-Header](/de/docs/Web/HTTP/Reference/Headers#hop-by-hop_headers), der auf eine Nachricht zwischen zwei Knoten angewendet wird, nicht auf eine Ressource selbst. Jeder Abschnitt einer Verbindung über mehrere Knoten kann unterschiedliche `Transfer-Encoding`-Werte verwenden. Wenn Sie Daten über die gesamte Verbindung hinweg komprimieren möchten, verwenden Sie stattdessen den End-to-End-{{HTTPHeader("Content-Encoding")}}-Header.

Wenn er als Antwort auf eine {{HTTPMethod("HEAD")}}-Anfrage ohne Body vorhanden ist, gibt er den Wert an, der auf die entsprechende {{HTTPMethod("GET")}}-Nachricht angewendet worden wäre.

> [!WARNING]
> HTTP/2 verbietet alle Verwendungen des `Transfer-Encoding`-Headers außer dem HTTP/2-spezifischen Wert `"trailers"`.
> HTTP/2 und später bieten effizientere Mechanismen für das Data Streaming als chunked transfer.
> Die Verwendung des Headers in HTTP/2 kann wahrscheinlich zu einem bestimmten `protocol error` führen.

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
  - : Daten werden in einer Reihe von Chunks gesendet.
    Inhalte können in Streams unbekannter Größe gesendet werden, die als Folge von längenbegrenzt Puffer übertragen werden, sodass der Absender eine Verbindung offen halten kann und dem Empfänger signalisiert, wann die gesamte Nachricht empfangen wurde.
    Der {{HTTPHeader("Content-Length")}}-Header muss weggelassen werden, und zu Beginn jedes Chunks zeigt eine Zeichenfolge von Hexadezimalziffern die Größe der Chunk-Daten in Oktetten an, gefolgt von `\r\n` und dann dem Chunk selbst, gefolgt von einem weiteren `\r\n`.
    Der abschließende Chunk ist ein Chunk mit null Länge.
- `compress`
  - : Ein Format, das den [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/LZW) (LZW) Algorithmus verwendet.
    Der Wertname wurde vom UNIX-Programm _compress_ übernommen, das diesen Algorithmus implementierte.
    Wie das Compress-Programm, das von den meisten UNIX-Distributionen verschwunden ist, wird diese Inhaltskodierung heute von fast keinem Browser mehr verwendet, teilweise aufgrund eines Patentproblems (das 2003 ablief).
- `deflate`
  - : Verwendung der [zlib](https://en.wikipedia.org/wiki/Zlib)-Struktur (definiert in [RFC 1950](https://datatracker.ietf.org/doc/html/rfc1950)), mit dem [_deflate_](https://en.wikipedia.org/wiki/DEFLATE)-Kompressionsalgorithmus (definiert in [RFC 1951](https://datatracker.ietf.org/doc/html/rfc1952)).
- `gzip`
  - : Ein Format, das die [Lempel-Ziv-Kodierung](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77) mit einem 32-Bit-CRC verwendet.
    Dies ist ursprünglich das Format des UNIX-Programms _gzip_.
    Der HTTP/1.1-Standard empfiehlt auch, dass die Server, die diese Inhaltskodierung unterstützen, `x-gzip` als Alias erkennen, aus Kompatibilitätsgründen.

## Beispiele

### Antwort mit chunked encoding

Chunked-Encoding ist nützlich, wenn größere Datenmengen an den Client gesendet werden und die Gesamtgröße der Antwort möglicherweise erst bekannt ist, nachdem die Anfrage vollständig verarbeitet wurde. Zum Beispiel beim Generieren einer großen HTML-Tabelle aus einer Datenbankabfrage oder beim Übertragen großer Bilder. Eine chunked Antwort sieht wie folgt aus:

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
- Header-Felder, die die Verwendung von Trailers regulieren: {{HTTPHeader("TE")}} (Anfragen) und {{HTTPHeader("Trailer")}} (Antworten).
- [Chunked transfer encoding](https://en.wikipedia.org/wiki/Chunked_transfer_encoding)
