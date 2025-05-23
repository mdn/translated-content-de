---
title: TE header
short-title: TE
slug: Web/HTTP/Reference/Headers/TE
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP-Anforderungsheader **`TE`** ({{Glossary("request_header", "Request Header")}}) gibt die Übertragungscodierungen an, die der Benutzeragent bereit ist zu akzeptieren.
Die Übertragungscodierungen dienen der Nachrichtenkompression und der Aufteilung von Daten während der Übertragung.

Übertragungscodierungen werden auf der Protokollebene angewendet, sodass eine Anwendung, die Antworten konsumiert, den Body erhält, als ob keine Codierung angewendet wurde.

> [!NOTE]
> In [HTTP/2](https://httpwg.org/specs/rfc9113.html#ConnectionSpecific) und [HTTP/3](https://httpwg.org/specs/rfc9114.html#header-formatting) wird das `TE`-Header-Feld nur akzeptiert, wenn der Wert `trailers` gesetzt ist.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
TE: compress
TE: deflate
TE: gzip
TE: trailers
```

Mehrere Direktiven in einer kommagetrennten Liste mit {{Glossary("quality_values", "Qualitätswerten")}} als Gewichtung:

```http
TE: trailers, deflate;q=0.5
```

## Direktiven

- `compress`
  - : Ein Format, das den [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/LZW) (LZW)-Algorithmus verwendet, wird als Transfercodierungsname akzeptiert.
- `deflate`
  - : Die Verwendung der [zlib](https://en.wikipedia.org/wiki/Zlib)-Struktur wird als Transfercodierungsname akzeptiert.
- `gzip`
  - : Ein Format, das die [Lempel-Ziv-Codierung](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77) mit einem 32-Bit-CRC verwendet, wird als Transfercodierungsname akzeptiert.
- `trailers`
  - : Zeigt an, dass der Client Trailer-Felder in einer [Chunked Transfer Coding](/de/docs/Web/HTTP/Reference/Headers/Transfer-Encoding#chunked) nicht verwirft.
- `q`
  - : Wenn mehrere Transfercodierungen akzeptabel sind, sortiert die `q`-Parameter-Syntax ({{Glossary("quality_values", "Qualitätswerte")}}) Codierungen nach Präferenz.

Beachten Sie, dass `chunked` immer von HTTP/1.1-Empfängern unterstützt wird, sodass Sie es nicht mittels des `TE`-Headers angeben müssen.
Weitere Details finden Sie im {{HTTPHeader("Transfer-Encoding")}}-Header.

## Beispiele

### Verwendung des TE-Headers mit Qualitätswerten

In der folgenden Anforderung gibt der Client eine Präferenz für `gzip`-kodierte Antworten und `deflate` als zweite Präferenz unter Verwendung eines `q`-Wertes an:

```http
GET /resource HTTP/1.1
Host: example.com
TE: gzip; q=1.0, deflate; q=0.8
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Transfer-Encoding")}}
- {{HTTPHeader("Content-Encoding")}}
- {{HTTPHeader("Trailer")}}
- [Chunked Transfer Encoding](https://en.wikipedia.org/wiki/Chunked_transfer_encoding)
