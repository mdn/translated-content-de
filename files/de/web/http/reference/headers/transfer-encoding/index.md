---
title: Transfer-Encoding header
short-title: Transfer-Encoding
slug: Web/HTTP/Reference/Headers/Transfer-Encoding
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP **`Transfer-Encoding`** {{Glossary("request_header", "Anforderungs")}} und {{Glossary("response_header", "Antwort-Header")}} gibt die Form der Kodierung an, die zum Übertragen von Nachrichten zwischen Knoten im Netzwerk verwendet wird.

`Transfer-Encoding` ist ein [Hop-by-Hop-Header](/de/docs/Web/HTTP/Reference/Headers#hop-by-hop_headers), der auf eine Nachricht zwischen zwei Knoten angewendet wird, nicht auf eine Ressource selbst.
Jedes Segment einer mehrknotigen Verbindung kann unterschiedliche `Transfer-Encoding`-Werte verwenden.
Wenn Sie Daten über die gesamte Verbindung komprimieren möchten, verwenden Sie stattdessen den End-to-End-{{HTTPHeader("Content-Encoding")}}-Header.

In der Praxis wird dieser Header selten verwendet und in diesen Fällen fast immer mit `chunked`.

Die Spezifikation gibt an, dass, wenn dieser Header in einer Nachricht vorhanden ist, er die Komprimierung angibt, die auf die Nachricht in diesem Hop angewendet wurde, und/oder ob die Nachricht in Blöcke aufgeteilt wurde.
Zum Beispiel zeigt `Transfer-Encoding: gzip, chunked` an, dass der Inhalt mit der gzip-Kodierung komprimiert und dann unter Verwendung der Chunked-Kodierung in Blöcke aufgeteilt wurde, während der Nachrichtentext gebildet wurde.

Der Header ist optional in Antworten auf eine {{HTTPMethod("HEAD")}}-Anfrage, da diese Nachrichten keinen Textkörper haben und daher keine Übertragungskodierung erforderlich ist.
Wenn er vorhanden ist, gibt er den Wert an, der auf die entsprechende Antwort auf eine {{HTTPMethod("GET")}}-Nachricht angewendet worden wäre, wenn diese `GET`-Anfrage keine bevorzugte `Transfer-Encoding` enthalten hätte.

> [!WARNING]
> HTTP/2 verbietet alle Verwendungen des `Transfer-Encoding`-Headers außer dem HTTP/2-spezifischen Wert `"trailers"`.
> HTTP/2 und spätere Versionen bieten effizientere Mechanismen für das Datenstreaming als Chunked-Transfer.
> Die Verwendung des Headers in HTTP/2 kann wahrscheinlich zu einem spezifischen `protocol error` führen.

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
  - : Daten werden in einer Serie von Blöcken gesendet.
    Inhalte können in Strömen unbekannter Größe gesendet werden, die als Folge von längenbeschränkten Puffern übertragen werden, sodass der Sender die Verbindung offen halten und dem Empfänger mitteilen kann, wann er die gesamte Nachricht empfangen hat.
    Der {{HTTPHeader("Content-Length")}}-Header muss weggelassen werden, und am Anfang jedes Blocks zeigt eine Zeichenfolge von Hexadezimalziffern die Größe der Blockdaten in Oktetten an, gefolgt von `\r\n` und dann der Block selbst, gefolgt von einem weiteren `\r\n`.
    Der abschließende Block ist ein null-längiger Block.
- `compress`
  - : Ein Format, das den [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/LZW) (LZW) Algorithmus verwendet.
    Der Wertname wurde vom UNIX-Komprimierungsprogramm _compress_ übernommen, das diesen Algorithmus implementiert hat.
    Wie das Komprimierungsprogramm, das aus den meisten UNIX-Distributionen verschwunden ist, wird diese Inhaltskodierung heute von fast keinem Browser verwendet, teilweise aufgrund eines Patentproblems (das 2003 abgelaufen ist).
- `deflate`
  - : Verwendung der [zlib](https://en.wikipedia.org/wiki/Zlib) Struktur (definiert in [RFC 1950](https://datatracker.ietf.org/doc/html/rfc1950)), mit dem [deflate](https://en.wikipedia.org/wiki/DEFLATE) Komprimierungsalgorithmus (definiert in [RFC 1951](https://datatracker.ietf.org/doc/html/rfc1952)).
- `gzip`
  - : Ein Format, das die [Lempel-Ziv Kodierung](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77) verwendet, mit einer 32-Bit-CRC.
    Dies ist ursprünglich das Format des UNIX-Programms _gzip_.
    Der HTTP/1.1-Standard empfiehlt zudem, dass die Server, die diese Inhaltskodierung unterstützen, `x-gzip` als Alias erkennen sollten, aus Kompatibilitätsgründen.

## Beispiele

### Antwort mit Chunked-Kodierung

Die Chunked-Kodierung ist nützlich, wenn größere Datenmengen an den Client gesendet werden und die Gesamtgröße der Antwort möglicherweise nicht bekannt ist, bis die Anfrage vollständig verarbeitet wurde.
Zum Beispiel beim Generieren einer großen HTML-Tabelle, die aus einer Datenbankabfrage resultiert, oder beim Übertragen großer Bilder.
Eine chunked-Antwort sieht so aus:

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
- Header-Felder, die die Verwendung von Trailers regeln: {{HTTPHeader("TE")}} (Anforderungen) und {{HTTPHeader("Trailer")}} (Antworten).
- [Chunked transfer encoding](https://en.wikipedia.org/wiki/Chunked_transfer_encoding)
