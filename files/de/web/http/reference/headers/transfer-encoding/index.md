---
title: Transfer-Encoding
slug: Web/HTTP/Reference/Headers/Transfer-Encoding
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-**`Transfer-Encoding`**-{{Glossary("request_header", "Anforderungs-")}} und {{Glossary("response_header", "Antwort-Header")}} gibt die Form der Codierung an, die verwendet wird, um Nachrichten zwischen Knoten im Netzwerk zu übertragen.

`Transfer-Encoding` ist ein [Hop-by-hop-Header](/de/docs/Web/HTTP/Reference/Headers#hop-by-hop_headers), der auf eine Nachricht zwischen zwei Knoten angewendet wird, nicht auf eine Ressource selbst.
Jedes Segment einer Verbindung über mehrere Knoten kann unterschiedliche `Transfer-Encoding`-Werte verwenden.
Wenn Sie Daten über die gesamte Verbindung komprimieren möchten, verwenden Sie stattdessen den end-to-end {{HTTPHeader("Content-Encoding")}} Header.

Wenn er in einer Antwort auf eine {{HTTPMethod("HEAD")}}-Anfrage ohne Körper vorhanden ist, gibt er den Wert an, der auf die entsprechende {{HTTPMethod("GET")}}-Nachricht angewendet worden wäre.

> [!WARNING]
> HTTP/2 verbietet alle Verwendungen des `Transfer-Encoding`-Headers, außer dem HTTP/2-spezifischen Wert `"trailers"`.
> HTTP/2 und spätere Versionen bieten effizientere Mechanismen für die Datenübertragung als Chunked Transfer.
> Die Verwendung des Headers in HTTP/2 kann wahrscheinlich zu einem spezifischen `protokollfehler` führen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungs-Header")}}, {{Glossary("Response_header", "Antwort-Header")}}, {{Glossary("Content_header", "Inhalts-header")}}
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
    Inhalte können als Streams unbekannter Größe gesendet werden, um als eine Folge von längengesteuerten Puffern übertragen zu werden, sodass der Absender eine Verbindung offenhalten kann und der Empfänger weiß, wann er die gesamte Nachricht erhalten hat.
    Der {{HTTPHeader("Content-Length")}} Header muss weggelassen werden, und zu Beginn jedes Chunks gibt eine Zeichenfolge aus hexadezimalen Ziffern die Größe der Chunk-Daten in Oktetten an, gefolgt von `\r\n` und dann dem Chunk selbst, gefolgt von einem weiteren `\r\n`.
    Der abschließende Chunk ist ein Null-Längen-Chunk.
- `compress`
  - : Ein Format, das den [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/LZW) (LZW) Algorithmus verwendet.
    Der Wertname stammt aus dem UNIX-Programm _compress_, das diesen Algorithmus implementierte.
    Wie das Compress-Programm, das aus den meisten UNIX-Distributionen verschwunden ist, wird diese Content-Encoding heute von fast keinen Browsern mehr verwendet, teilweise wegen eines Patentproblems (das 2003 abgelaufen ist).
- `deflate`
  - : Verwendung der [zlib](https://en.wikipedia.org/wiki/Zlib)-Struktur (definiert in [RFC 1950](https://datatracker.ietf.org/doc/html/rfc1950)) mit dem [_deflate_](https://en.wikipedia.org/wiki/DEFLATE)-Kompressionsalgorithmus (definiert in [RFC 1951](https://datatracker.ietf.org/doc/html/rfc1952)).
- `gzip`
  - : Ein Format, das das [Lempel-Ziv-Kodierung](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77) verwendet, mit einer 32-Bit-CRC.
    Dies ist ursprünglich das Format des UNIX-Programms _gzip_.
    Der HTTP/1.1-Standard empfiehlt auch, dass Server, die diese Inhaltscodierung unterstützen, `x-gzip` als Alias erkennen, aus Kompatibilitätsgründen.

## Beispiele

### Antwort mit chunked Encoding

Chunked Encoding ist nützlich, wenn größere Datenmengen an den Client gesendet werden und die Gesamtgröße der Antwort möglicherweise nicht bekannt ist, bis die Anfrage vollständig verarbeitet wurde.
Zum Beispiel, wenn eine große HTML-Tabelle generiert wird, die aus einer Datenbankabfrage resultiert, oder wenn große Bilder übertragen werden.
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
- Header-Felder, die die Verwendung von Trailers regulieren: {{HTTPHeader("TE")}} (Anfragen) und {{HTTPHeader("Trailer")}} (Antworten).
- [Chunked Transfer Encoding](https://en.wikipedia.org/wiki/Chunked_transfer_encoding)
