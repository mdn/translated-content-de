---
title: "DecompressionStream: writable-Eigenschaft"
short-title: writable
slug: Web/API/DecompressionStream/writable
l10n:
  sourceCommit: ae6626ec9a5729a51f202b77586f37958088ed77
---

{{APIRef("Compression Streams API")}}{{AvailableInWorkers}}

Die **`writable`** schreibgeschützte Eigenschaft des [`DecompressionStream`](/de/docs/Web/API/DecompressionStream)-Interfaces gibt einen [`WritableStream`](/de/docs/Web/API/WritableStream) zurück, der komprimierte Daten zur Dekomprimierung in Form von {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}} oder {{jsxref("DataView")}}-Chunks akzeptiert.

## Wert

Ein [`WritableStream`](/de/docs/Web/API/WritableStream).

## Beispiele

Dieses Beispiel erstellt einen `DecompressionStream`, der eine gzip-Dekomprimierung durchführt. Es schreibt einige komprimierte Binärdaten in den `writable`-Stream und liest dann die dekomprimierten Daten aus dem `readable`-Stream, wobei es diese als UTF-8-Text decodiert.

```js
const stream = new DecompressionStream("gzip");

// Write data to be compressed
const data = Uint8Array.fromBase64(
  "H4sIAAAAAAAAE/NIzcnJ11Eozy/KSVEEAObG5usNAAAA",
);
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
console.log(new TextDecoder().decode(new Uint8Array(output))); // Hello, world!
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`TransformStream.writable`](/de/docs/Web/API/TransformStream/writable)
