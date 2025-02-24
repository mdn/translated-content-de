---
title: TE
slug: Web/HTTP/Headers/TE
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP **`TE`** {{Glossary("request_header", "Anforderungsheader")}} gibt die Transfercodierungen an, die der Benutzeragent akzeptieren möchte. Die Transfercodierungen dienen der Nachrichtenkompression und dem Aufteilen von Daten während der Übertragung.

Transfercodierungen werden auf der Protokollebene angewendet, sodass eine Anwendung, die Antworten konsumiert, den Körper erhält, als ob keine Codierung angewendet wurde.

> [!NOTE]
> In [HTTP/2](https://httpwg.org/specs/rfc9113.html#ConnectionSpecific) und [HTTP/3](https://httpwg.org/specs/rfc9114.html#header-formatting) wird das `TE`-Header-Feld nur akzeptiert, wenn der `trailers`-Wert gesetzt ist.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungsheader")}}</td>
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

Mehrere Direktiven in einer durch Kommas getrennten Liste mit {{Glossary("quality_values", "Qualitätswerten")}} als Gewichte:

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
  - : Gibt an, dass der Client Trailer-Felder in einer [chunked transfer coding](/de/docs/Web/HTTP/Headers/Transfer-Encoding#chunked) nicht verwerfen wird.
- `q`
  - : Wenn mehrere Transfercodierungen akzeptabel sind, ordnet der `q`-Parameter ({{Glossary("quality_values", "Qualitätswert")}}) die Codierungen nach Präferenz.

Beachten Sie, dass `chunked` von HTTP/1.1-Empfängern immer unterstützt wird, sodass Sie es nicht mit dem `TE`-Header angeben müssen. Siehe den {{HTTPHeader("Transfer-Encoding")}}-Header für weitere Details.

## Beispiele

### Verwendung des TE-Headers mit Qualitätswerten

In der folgenden Anfrage gibt der Client eine Präferenz für `gzip`-codierte Antworten an, wobei `deflate` als zweite Präferenz mit einem `q`-Wert verwendet wird:

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
