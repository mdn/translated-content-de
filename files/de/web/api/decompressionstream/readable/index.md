---
title: "DecompressionStream: readable-Eigenschaft"
short-title: readable
slug: Web/API/DecompressionStream/readable
l10n:
  sourceCommit: ae6626ec9a5729a51f202b77586f37958088ed77
---

{{APIRef("Compression Streams API")}}{{AvailableInWorkers}}

Die **`readable`** schreibgeschützte Eigenschaft der [`DecompressionStream`](/de/docs/Web/API/DecompressionStream)-Schnittstelle gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurück, der dekomprimierte Daten als {{jsxref("Uint8Array")}}-Chunks ausgibt.

## Wert

Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream).

## Beispiele

Dieses Beispiel erstellt einen `DecompressionStream`, der die Gzip-Dekompression durchführt. Es wird etwas komprimierte Binärdaten in den `writable`-Stream geschrieben und anschließend die dekomprimierten Daten aus dem `readable`-Stream gelesen und als UTF-8-Text dekodiert.

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

- [`TransformStream.readable`](/de/docs/Web/API/TransformStream/readable)
