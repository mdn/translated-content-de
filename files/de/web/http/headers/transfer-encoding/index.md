---
title: Transfer-Encoding
slug: Web/HTTP/Headers/Transfer-Encoding
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTTPSidebar}}

Der **`Transfer-Encoding`** Header gibt die Form der Kodierung an, die verwendet wird, um Nachrichten zwischen Knoten im Netzwerk zu übertragen.

> [!WARNING]
> HTTP/2 verbietet die Verwendung des Transfer-Encoding Headers mit Ausnahme des HTTP/2-spezifischen: `"trailers"`.
> HTTP/2 und spätere Versionen bieten eigene, effizientere Mechanismen für Datenstreaming als die gestückelte Übertragung und verbieten die Verwendung des Headers.
> Die Nutzung des Headers in HTTP/2 kann wahrscheinlich einen spezifischen `Protokollfehler` verursachen, da das HTTP/2-Protokoll die Nutzung verbietet.

`Transfer-Encoding` ist ein [Hop-by-Hop-Header](/de/docs/Web/HTTP/Headers#hop-by-hop_headers), der auf eine Nachricht zwischen zwei Knoten angewendet wird, nicht auf die Ressource selbst.
Jedes Segment einer Verbindung über mehrere Knoten hinweg kann unterschiedliche `Transfer-Encoding`-Werte verwenden.
Wenn Sie die Daten über die gesamte Verbindung komprimieren möchten, verwenden Sie stattdessen den End-to-End-{{HTTPHeader("Content-Encoding")}}-Header.

Wenn dieser Header bei einer Antwort auf eine {{HTTPMethod("HEAD")}} Anfrage ohne Inhalt vorhanden ist, zeigt er den Wert an, der auf die entsprechende {{HTTPMethod("GET")}} Nachricht angewendet worden wäre.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
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

// Mehrere Werte können aufgelistet werden, getrennt durch ein Komma
Transfer-Encoding: gzip, chunked
```

## Direktiven

- `chunked`
  - : Daten werden in einer Reihe von Blöcken gesendet. Der {{HTTPHeader("Content-Length")}} Header wird in diesem Fall weggelassen, und am Anfang jedes Blocks müssen Sie die Länge des aktuellen Blocks im hexadezimalen Format hinzufügen, gefolgt von `\r\n` und dann der Block selbst, gefolgt von einem weiteren `\r\n`.
    Der abschließende Block ist ein regulärer Block, mit der Ausnahme, dass seine Länge null ist.
    Ihm folgt der Trailer, der aus einer (möglicherweise leeren) Sequenz von Header-Feldern besteht.
- `compress`
  - : Ein Format, das den [Lempel-Ziv-Welch](https://de.wikipedia.org/wiki/LZW)-Algorithmus (LZW) verwendet.
    Der Wertname wurde vom UNIX-Programm _compress_ übernommen, welches diesen Algorithmus implementiert hat.
    Wie das compress Programm, das von den meisten UNIX-Distributionen verschwunden ist, wird dieses Content-Encoding heute von fast keinem Browser mehr verwendet, teilweise wegen eines Patents, das 2003 abgelaufen ist.
- `deflate`
  - : Verwendung der [zlib](https://de.wikipedia.org/wiki/Zlib)-Struktur (definiert in [RFC 1950](https://datatracker.ietf.org/doc/html/rfc1950)), mit dem [_deflate_](https://de.wikipedia.org/wiki/DEFLATE)-Kompressionsalgorithmus (definiert in [RFC 1951](https://datatracker.ietf.org/doc/html/rfc1952)).
- `gzip`
  - : Ein Format, das die [Lempel-Ziv-Kodierung](https://de.wikipedia.org/wiki/LZ77_und_LZ78#LZ77) (LZ77) verwendet, mit einer 32-Bit-CRC.
    Dies ist ursprünglich das Format des UNIX-Programms _gzip_.
    Der HTTP/1.1-Standard empfiehlt auch, dass die Server, die diese Content-Kodierung unterstützen, `x-gzip` als Alias erkennen, aus Kompatibilitätsgründen.

## Beispiele

### Chunked-Encoding

Chunked-Encoding ist nützlich, wenn große Datenmengen an den Client gesendet werden und die Gesamtgröße der Antwort möglicherweise nicht bekannt ist, bis die Anfrage vollständig verarbeitet wurde.
Zum Beispiel beim Generieren einer großen HTML-Tabelle als Ergebnis einer Datenbankabfrage oder beim Übertragen großer Bilder.
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
- Header-Felder, die die Verwendung von Trailern regeln: {{HTTPHeader("TE")}} (Anfragen) und {{HTTPHeader("Trailer")}} (Antworten).
- [Chunked Transfer Encoding](https://en.wikipedia.org/wiki/Chunked_transfer_encoding)
