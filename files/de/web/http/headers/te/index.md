---
title: TE
slug: Web/HTTP/Headers/TE
l10n:
  sourceCommit: ed041385cf874deec203e820fd415bdcd6f98a19
---

{{HTTPSidebar}}

Der HTTP **`TE`** {{Glossary("request_header", "Anforderungsheader")}} spezifiziert die Transfercodierungen, die der Benutzeragent zu akzeptieren bereit ist. Die Transfercodierungen dienen zur Nachrichtenkompression und zum Stückeln von Daten während der Übertragung.

Transfercodierungen werden auf der Protokollschicht angewendet, sodass eine Anwendung, die Antworten konsumiert, den Körper so erhält, als ob keine Codierung angewendet worden wäre.

> [!NOTE]
> In [HTTP/2](https://httpwg.org/specs/rfc9113.html#ConnectionSpecific) und [HTTP/3](https://httpwg.org/specs/rfc9114.html#header-formatting) wird das `TE`-Header-Feld nur akzeptiert, wenn der Wert `trailers` gesetzt ist.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
  - : Ein Format, das den [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/LZW) (LZW)-Algorithmus verwendet, wird als Transfercodierungsname akzeptiert.
- `deflate`
  - : Die Verwendung der [zlib](https://en.wikipedia.org/wiki/Zlib)-Struktur wird als Transfercodierungsname akzeptiert.
- `gzip`
  - : Ein Format, das den [Lempel-Ziv-Codierung](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77) mit einer 32-Bit-CRC verwendet, wird als Transfercodierungsname akzeptiert.
- `trailers`
  - : Gibt an, dass der Client Trailer-Felder in einer [Chunked Transfer Coding](/de/docs/Web/HTTP/Headers/Transfer-Encoding#chunked) nicht verwirft.
- `q`
  - : Wenn mehrere Transfercodierungen akzeptabel sind, ordnet die `q`-Parameter-Syntax ({{Glossary("quality_values", "Qualitätswerte")}}) die Codierungen nach Präferenz.

Beachten Sie, dass `chunked` immer von HTTP/1.1-Empfängern unterstützt wird, daher müssen Sie es nicht mit dem `TE`-Header spezifizieren. Weitere Details finden Sie im {{HTTPHeader("Transfer-Encoding")}}-Header.

## Beispiele

### Verwendung des TE-Headers mit Qualitätswerten

In der folgenden Anfrage gibt der Client eine Präferenz für `gzip`-codierte Antworten an, mit `deflate` als zweiter Präferenz unter Verwendung eines `q`-Werts:

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
