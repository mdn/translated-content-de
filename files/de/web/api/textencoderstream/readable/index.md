---
title: "TextEncoderStream: readable-Eigenschaft"
short-title: readable
slug: Web/API/TextEncoderStream/readable
l10n:
  sourceCommit: ae6626ec9a5729a51f202b77586f37958088ed77
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`readable`** der [`TextEncoderStream`](/de/docs/Web/API/TextEncoderStream) Schnittstelle gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurück, der kodierte Binärdaten als {{jsxref("Uint8Array")}}-Blöcke ausgibt.

## Wert

Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream).

## Beispiele

Dieses Beispiel erstellt einen `TextEncoderStream`, der Zeichenfolgen als UTF-8 kodiert. Es schreibt einige Zeichenfolgen in den `writable` Stream und liest dann die kodierten Binärdaten aus dem `readable` Stream.

```js
const stream = new TextEncoderStream();

// Write data to be encoded
const data = "你好世界";
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
console.log(new Uint8Array(output).toBase64()); // 5L2g5aW95LiW55WM
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`TransformStream.readable`](/de/docs/Web/API/TransformStream/readable)
