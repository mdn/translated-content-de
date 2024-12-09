---
title: Transfer-Encoding
slug: Web/HTTP/Headers/Transfer-Encoding
l10n:
  sourceCommit: ed041385cf874deec203e820fd415bdcd6f98a19
---

{{HTTPSidebar}}

Der HTTP-Header **`Transfer-Encoding`** für {{Glossary("request_header", "Anfragen")}} und {{Glossary("response_header", "Antworten")}} gibt die Form der Kodierung an, die verwendet wird, um Nachrichten zwischen Knoten im Netzwerk zu übertragen.

`Transfer-Encoding` ist ein [hop-by-hop Header](/de/docs/Web/HTTP/Headers#hop-by-hop_headers), der auf eine Nachricht zwischen zwei Knoten angewendet wird, nicht auf die Ressource selbst. Jeder Abschnitt einer Multi-Knoten-Verbindung kann unterschiedliche `Transfer-Encoding`-Werte verwenden. Wenn Sie Daten über die gesamte Verbindung komprimieren möchten, verwenden Sie stattdessen den End-to-End-{{HTTPHeader("Content-Encoding")}}-Header.

Wenn dieser in einer Antwort auf eine {{HTTPMethod("HEAD")}}-Anfrage erscheint, die keinen Körper hat, gibt er den Wert an, der auf die entsprechende {{HTTPMethod("GET")}}-Nachricht angewendet worden wäre.

> [!WARNING]
> HTTP/2 verbietet alle Anwendungen des `Transfer-Encoding`-Headers mit Ausnahme des HTTP/2-spezifischen Wertes `"trailers"`.
> HTTP/2 und spätere Versionen bieten effizientere Mechanismen für Datenstreaming als Chunked Transfer.
> Die Nutzung des Headers in HTTP/2 kann wahrscheinlich zu einem spezifischen `protocol error` führen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anfrage-Header")}}, {{Glossary("Response_header", "Antwort-Header")}}, {{Glossary("Content_header", "Inhalts-Header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Headername")}}</th>
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
    Inhalte können in Streams unbekannter Größe gesendet werden, um als eine Folge von längenbegrenzten Puffern übertragen zu werden, sodass der Absender eine Verbindung offen halten kann und der Empfänger erfährt, wenn die gesamte Nachricht empfangen wurde.
    Der {{HTTPHeader("Content-Length")}}-Header muss weggelassen werden, und zu Beginn jedes Blocks gibt eine Zeichenkette aus Hexadezimalziffern die Größe der Block-Daten in Oktetten an, gefolgt von `\r\n` und dann dem Block selbst, gefolgt von einem weiteren `\r\n`.
    Der abschließende Block ist ein Block mit null Länge.
- `compress`
  - : Ein Format, das den [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/LZW) (LZW)-Algorithmus verwendet.
    Der Wertname stammt vom UNIX-Programm _compress_, das diesen Algorithmus implementierte.
    Wie das Compress-Programm, das von den meisten UNIX-Distributionen verschwunden ist, wird diese Inhaltskodierung heute von fast keinem Browser mehr verwendet, teilweise wegen eines Patentproblems (das 2003 abgelaufen ist).
- `deflate`
  - : Verwendung der [zlib](https://en.wikipedia.org/wiki/Zlib)-Struktur (definiert in [RFC 1950](https://datatracker.ietf.org/doc/html/rfc1950)) mit dem [_deflate_](https://en.wikipedia.org/wiki/DEFLATE)-Kompressionsalgorithmus (definiert in [RFC 1951](https://datatracker.ietf.org/doc/html/rfc1952)).
- `gzip`
  - : Ein Format, das die [Lempel-Ziv-Codierung](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77) mit einer 32-Bit-CRC verwendet.
    Dies ist ursprünglich das Format des UNIX-Programms _gzip_.
    Der HTTP/1.1-Standard empfiehlt auch, dass die Server, die diese Inhaltskodierung unterstützen, `x-gzip` als Alias erkennen, aus Kompatibilitätsgründen.

## Beispiele

### Antwort mit Chunked Encoding

Chunked Encoding ist nützlich, wenn größere Datenmengen an den Client gesendet werden und die Gesamtgröße der Antwort möglicherweise nicht bekannt ist, bis die Anfrage vollständig verarbeitet wurde.
Zum Beispiel, wenn eine große HTML-Tabelle aus einer Datenbankabfrage generiert wird oder beim Übertragen großer Bilder.
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
- Header-Felder, die die Nutzung von Trailers regeln: {{HTTPHeader("TE")}} (Anfragen) und {{HTTPHeader("Trailer")}} (Antworten).
- [Chunked Transfer Encoding](https://en.wikipedia.org/wiki/Chunked_transfer_encoding)
