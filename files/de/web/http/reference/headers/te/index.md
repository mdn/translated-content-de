---
title: TE
slug: Web/HTTP/Reference/Headers/TE
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-**`TE`**-{{Glossary("request_header", "Request-Header")}} gibt die Transfercodierungen an, die der User-Agent akzeptieren möchte. Die Transfercodierungen dienen der Nachrichtenkompression und dem Aufteilen von Daten während der Übertragung.

Transfercodierungen werden auf der Protokollebene angewendet, sodass eine Anwendung, die Antworten konsumiert, den Körper erhält, als ob keine Codierung angewendet wurde.

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

Mehrere Direktiven in einer durch Kommas getrennten Liste mit {{Glossary("quality_values", "Qualitätswerten")}} als Gewichtung:

```http
TE: trailers, deflate;q=0.5
```

## Direktiven

- `compress`
  - : Ein Format, das den [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/LZW) (LZW) Algorithmus verwendet, wird als Transfercodierungsname akzeptiert.
- `deflate`
  - : Die Verwendung der [zlib](https://en.wikipedia.org/wiki/Zlib)-Struktur wird als Transfercodierungsname akzeptiert.
- `gzip`
  - : Ein Format, das das [Lempel-Ziv-Coding](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77) mit einem 32-Bit-CRC verwendet, wird als Transfercodierungsname akzeptiert.
- `trailers`
  - : Gibt an, dass der Client Trailer-Felder in einer [Chunked Transfer Coding](/de/docs/Web/HTTP/Reference/Headers/Transfer-Encoding#chunked) nicht verwirft.
- `q`
  - : Wenn mehrere Transfercodierungen akzeptabel sind, ordnet die `q`-Parameter ({{Glossary("quality_values", "Qualitätswerte")}})-Syntax Codierungen nach Präferenz.

Beachten Sie, dass `chunked` immer von HTTP/1.1-Empfängern unterstützt wird. Daher müssen Sie es nicht mit dem `TE`-Header angeben. Weitere Einzelheiten finden Sie im {{HTTPHeader("Transfer-Encoding")}}-Header.

## Beispiele

### Verwendung des TE-Headers mit Qualitätswerten

Im folgenden Request gibt der Client eine Präferenz für `gzip`-codierte Antworten an, mit `deflate` als zweiter Präferenz unter Verwendung eines `q`-Werts:

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
