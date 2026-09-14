---
title: "PerformanceResourceTiming: Eigenschaft contentEncoding"
short-title: contentEncoding
slug: Web/API/PerformanceResourceTiming/contentEncoding
l10n:
  sourceCommit: 4d784d88f6e4f5f41d69a901604135f9014f313a
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`contentEncoding`** des Interfaces [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming) ist ein String, der die Inhaltskodierung der abgerufenen Ressource angibt.

Der Inhaltstyp wird aus dem HTTP-Header {{httpheader("Content-Encoding")}} extrahiert, der in der Abrufantwort der Ressource gesendet wird.

## Wert

Ein String, der die Inhaltskodierung des Inhalts angibt.
Dies kann einer der folgenden Werte sein:

- `gzip`
  - : Ein Format, das die [Lempel-Ziv-Kodierung](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77) mit einer 32-Bit-CRC verwendet.
    Dies ist das ursprüngliche Format des UNIX-Programms _gzip_.
    Der HTTP/1.1-Standard empfiehlt außerdem, dass Server, die diese Inhaltskodierung unterstützen, aus Kompatibilitätsgründen `x-gzip` als Alias erkennen sollten.
- `compress`
  - : Ein Format, das den [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/LZW)-Algorithmus (LZW) verwendet.
    Der Wertname wurde vom UNIX-Programm _compress_ übernommen, das diesen Algorithmus implementierte.
    Wie das Programm compress, das aus den meisten UNIX-Distributionen verschwunden ist, wird diese Inhaltskodierung heute von vielen Browsern nicht verwendet, teilweise aufgrund eines Patentproblems (das Patent lief 2003 ab).
- `deflate`
  - : Verwendet die [zlib](https://en.wikipedia.org/wiki/Zlib)-Struktur (definiert in {{rfc(1950)}}) mit dem [deflate](https://en.wikipedia.org/wiki/Deflate)-Komprimierungsalgorithmus (definiert in {{rfc(1951)}}).
- `br`
  - : Ein Format, das die Struktur des {{Glossary("Brotli_compression", "Brotli")}}-Algorithmus verwendet (definiert in {{rfc(7932)}}).
- `zstd`
  - : Ein Format, das die Struktur des {{Glossary("Zstandard_compression", "Zstandard")}}-Algorithmus verwendet (definiert in {{rfc(8878)}}).
- `dcb` {{experimental_inline}}
  - : Ein Format, das den [Dictionary-Compressed-Brotli-Algorithmus](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-compression-dictionary#name-dictionary-compressed-brotl) verwendet. Siehe [Compression Dictionary Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport).
- `dcz` {{experimental_inline}}
  - : Ein Format, das den [Dictionary-Compressed-Zstandard-Algorithmus](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-compression-dictionary#name-dictionary-compressed-zstan) verwendet. Siehe [Compression Dictionary Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport).

## Beispiele

### Ressourcen filtern

Die Eigenschaft `contentEncoding` kann verwendet werden, um nur bestimmte Ressourcen-Timing-Einträge abzurufen, beispielsweise nur jene, die mit [Compression Dictionary Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport) zusammenhängen.

Das folgende Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), um über neue `resource`-Performance-Einträge benachrichtigt zu werden, sobald diese in der Performance-Zeitachse des Browsers aufgezeichnet werden.
Die Option `buffered` wird verwendet, um auf Einträge zuzugreifen, die vor der Erstellung des Observers vorhanden waren.

```js
const observer = new PerformanceObserver((list) => {
  const dictionaryCompressedResources = list
    .getEntries()
    .filter(
      (entry) =>
        entry.contentEncoding === "dcb" || entry.contentEncoding === "dcz",
    );
  console.log(dictionaryCompressedResources);
});

observer.observe({ type: "resource", buffered: true });
```

Das folgende Beispiel verwendet [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Performance-Einträge anzeigt, die zum Zeitpunkt des Methodenaufrufs in der Performance-Zeitachse des Browsers vorhanden sind.

```js
const dictionaryCompressedResources = performance
  .getEntriesByType("resource")
  .filter(
    (entry) =>
      entry.contentEncoding === "dcb" || entry.contentEncoding === "dcz",
  );
console.log(dictionaryCompressedResources);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
