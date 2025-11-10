---
title: TE header
short-title: TE
slug: Web/HTTP/Reference/Headers/TE
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-**`TE`**-{{Glossary("request_header", "Request-Header")}} gibt die Transferkodierungen an, die der User-Agent zu akzeptieren bereit ist. Die Transferkodierungen dienen der Kompression von Nachrichten und der Datenchunkierung während der Übertragung.

Transferkodierungen werden auf Protokollebene angewendet, sodass eine Anwendung, die Antworten empfängt, den Körper so erhält, als wäre keine Kodierung angewendet worden.

> [!NOTE]
> In [HTTP/2](https://httpwg.org/specs/rfc9113.html#ConnectionSpecific) und [HTTP/3](https://httpwg.org/specs/rfc9114.html#header-formatting) wird das `TE`-Header-Feld nur akzeptiert, wenn der Wert `trailers` gesetzt ist.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
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

Mehrere Direktiven in einer kommagetrennten Liste mit {{Glossary("quality_values", "Qualitätswerten")}} als Gewichtungen:

```http
TE: trailers, deflate;q=0.5
```

## Direktiven

- `compress`
  - : Ein Format, das den [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/LZW) (LZW)-Algorithmus verwendet, wird als Transferkodierungsname akzeptiert.
- `deflate`
  - : Die Verwendung der [zlib](https://en.wikipedia.org/wiki/Zlib)-Struktur wird als Transferkodierungsname akzeptiert.
- `gzip`
  - : Ein Format, das die [Lempel-Ziv-Kodierung](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77) mit einem 32-Bit-CRC verwendet, wird als Transferkodierungsname akzeptiert.
- `trailers`
  - : Zeigt an, dass der Client Trailer-Felder in einer [chunked transfer coding](/de/docs/Web/HTTP/Reference/Headers/Transfer-Encoding#chunked) nicht verwerfen wird.
- `q`
  - : Wenn mehrere Transferkodierungen akzeptabel sind, ordnet der `q`-Parameter ({{Glossary("quality_values", "Qualitätswerte")}}) die Kodierungen nach Präferenz.

Beachten Sie, dass `chunked` immer von HTTP/1.1-Empfängern unterstützt wird, sodass Sie es nicht mit dem `TE`-Header angeben müssen. Weitere Details finden Sie im {{HTTPHeader("Transfer-Encoding")}}-Header.

## Beispiele

### Verwendung des TE-Headers mit Qualitätswerten

In der folgenden Anfrage gibt der Client eine Präferenz für `gzip`-codierte Antworten mit `deflate` als zweite Präferenz unter Verwendung eines `q`-Wertes an:

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
- [Chunked transfer encoding](https://en.wikipedia.org/wiki/Chunked_transfer_encoding)
