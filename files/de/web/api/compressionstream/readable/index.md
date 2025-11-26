---
title: "CompressionStream: readable-Eigenschaft"
short-title: readable
slug: Web/API/CompressionStream/readable
l10n:
  sourceCommit: ae6626ec9a5729a51f202b77586f37958088ed77
---

{{APIRef("Compression Streams API")}}{{AvailableInWorkers}}

Die **`readable`** schreibgeschützte Eigenschaft des [`CompressionStream`](/de/docs/Web/API/CompressionStream)-Interfaces gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurück, der komprimierte Daten als {{jsxref("Uint8Array")}}-Chunks ausgibt.

## Wert

Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream).

## Beispiele

Dieses Beispiel erstellt einen `CompressionStream`, der eine gzip-Komprimierung durchführt. Es schreibt einige Binärdaten in den `writable`-Stream und liest dann die komprimierten Daten aus dem `readable`-Stream.

```js
const stream = new CompressionStream("gzip");

// Write data to be compressed
const data = new TextEncoder().encode("Hello, world!");
const writer = stream.writable.getWriter();
writer.write(data);
writer.close();

// Read compressed data
const reader = stream.readable.getReader();
let done = false;
let output = [];
while (!done) {
  const result = await reader.read();
  if (result.value) {
    output.push(...result.value);
  }
  done = result.done;
}
console.log(new Uint8Array(output).toBase64()); // H4sIAAAAAAAAE/NIzcnJ11Eozy/KSVEEAObG5usNAAAA
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`TransformStream.readable`](/de/docs/Web/API/TransformStream/readable)
