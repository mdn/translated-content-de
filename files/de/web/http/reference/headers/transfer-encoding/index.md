---
title: Transfer-Encoding header
short-title: Transfer-Encoding
slug: Web/HTTP/Reference/Headers/Transfer-Encoding
l10n:
  sourceCommit: 3a55ff6741ee5ee955545857468b10f6c009f034
---

{{HTTPSidebar}}

Der HTTP **`Transfer-Encoding`** {{Glossary("request_header", "Request")}} und {{Glossary("response_header", "Response-Header")}} gibt die Form der Kodierung an, die verwendet wird, um Nachrichten zwischen Knoten im Netzwerk zu übertragen.

`Transfer-Encoding` ist ein [hop-by-hop-Header](/de/docs/Web/HTTP/Reference/Headers#hop-by-hop_headers), der auf eine Nachricht zwischen zwei Knoten angewendet wird, nicht auf eine Ressource selbst.
Jedes Segment einer Verbindung mit mehreren Knoten kann unterschiedliche `Transfer-Encoding`-Werte verwenden.
Wenn Sie Daten über die gesamte Verbindung komprimieren möchten, verwenden Sie stattdessen den End-to-End-Header {{HTTPHeader("Content-Encoding")}}.

In der Praxis wird dieser Header selten verwendet, und in diesen Fällen fast immer zusammen mit `chunked`.

Das heißt, die Spezifikation gibt an, dass, wenn dieser Header in einer Nachricht vorhanden ist, er die Kompression anzeigt, die auf die Nachricht in diesem Knoten angewendet wurde, und/oder ob die Nachricht in Blöcke unterteilt wurde.
Zum Beispiel zeigt `Transfer-Encoding: gzip, chunked` an, dass der Inhalt unter Verwendung des gzip-Codes komprimiert und dann mit der chunked-Codierung blockweise beim Erstellen des Nachrichtentextes verarbeitet wurde.

Der Header ist optional in den Antworten auf eine {{HTTPMethod("HEAD")}}-Anfrage, da diese Nachrichten keinen Textkörper haben und daher keine Transfer-Codierung benötigen.
Wenn er vorhanden ist, gibt er den Wert an, der auf die entsprechende Antwort auf eine {{HTTPMethod("GET")}}-Nachricht angewendet worden wäre, wenn diese `GET`-Anfrage keine bevorzugte `Transfer-Encoding` enthalten hätte.

> [!WARNING]
> HTTP/2 verbietet alle Verwendungen des `Transfer-Encoding`-Headers außer dem HTTP/2-spezifischen Wert `"trailers"`.
> HTTP/2 und spätere Versionen bieten effizientere Mechanismen für Datenstreaming als die chunked-Übertragung.
> Die Verwendung des Headers in HTTP/2 kann wahrscheinlich zu einem spezifischen `protocol error` führen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}}, {{Glossary("Response_header", "Response-Header")}}, {{Glossary("Content_header", "Content-Header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
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
    Inhalte können in Strömen unbekannter Größe gesendet werden, um als Sequenz von längenbegrenzten Pufferungen übertragen zu werden. Der Sender kann die Verbindung offenhalten und den Empfänger informieren, wenn er die gesamte Nachricht erhalten hat.
    Der {{HTTPHeader("Content-Length")}}-Header muss weggelassen werden, und zu Beginn jedes Blockes zeigt eine Zeichenfolge von hexadezimalen Ziffern die Größe der Blockdaten in Oktetten an, gefolgt von `\r\n` und dann der Block selbst, gefolgt von einem weiteren `\r\n`.
    Der Abschlusspunkt ist ein Block ohne Größe.
- `compress`
  - : Ein Format unter Verwendung des [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/LZW) (LZW) Algorithmus.
    Der Wertname wurde vom UNIX _compress_-Programm übernommen, das diesen Algorithmus implementiert.
    Wie das compress-Programm, das aus den meisten UNIX-Distributionen verschwunden ist, wird diese Content-Encoding heute von fast keinem Browser verwendet, teilweise aufgrund eines Patentrechtsproblems (das 2003 abgelaufen ist).
- `deflate`
  - : Verwendung der [zlib](https://en.wikipedia.org/wiki/Zlib)-Struktur (definiert in [RFC 1950](https://datatracker.ietf.org/doc/html/rfc1950)), mit dem [_deflate_](https://en.wikipedia.org/wiki/DEFLATE)-Kompressionsalgorithmus (definiert in [RFC 1951](https://datatracker.ietf.org/doc/html/rfc1952)).
- `gzip`
  - : Ein Format unter Verwendung der [Lempel-Ziv-Kodierung](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77), mit einer 32-Bit-CRC.
    Dies ist ursprünglich das Format des UNIX _gzip_-Programms.
    Der HTTP/1.1-Standard empfiehlt außerdem, dass die Server, die dieses Content-Encoding unterstützen, `x-gzip` als Alias anerkennen sollten, um die Kompatibilität zu gewährleisten.

## Beispiele

### Antwort mit chunked-Codierung

Chunked-Codierung ist nützlich, wenn größere Datenmengen an den Client gesendet werden und die Gesamtgröße der Antwort möglicherweise nicht bekannt ist, bis die Anfrage vollständig verarbeitet wurde.
Zum Beispiel beim Generieren einer großen HTML-Tabelle, die aus einer Datenbankabfrage resultiert, oder beim Übertragen großer Bilder.
Eine chunked-Antwort sieht folgendermaßen aus:

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
