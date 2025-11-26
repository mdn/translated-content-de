---
title: "CompressionStream: writable-Eigenschaft"
short-title: writable
slug: Web/API/CompressionStream/writable
l10n:
  sourceCommit: ae6626ec9a5729a51f202b77586f37958088ed77
---

{{APIRef("Compression Streams API")}}{{AvailableInWorkers}}

Die **`writable`**-Eigenschaft, die nur-lesend ist, der Schnittstelle [`CompressionStream`](/de/docs/Web/API/CompressionStream) gibt einen [`WritableStream`](/de/docs/Web/API/WritableStream) zurück, der unkomprimierte Daten zur Komprimierung in Form von {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}} oder {{jsxref("DataView")}}-Chunks akzeptiert.

## Wert

Ein [`WritableStream`](/de/docs/Web/API/WritableStream).

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

- [`TransformStream.writable`](/de/docs/Web/API/TransformStream/writable)
