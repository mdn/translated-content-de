---
title: "TextEncoderStream: writable-Eigenschaft"
short-title: writable
slug: Web/API/TextEncoderStream/writable
l10n:
  sourceCommit: ae6626ec9a5729a51f202b77586f37958088ed77
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`writable`**-Eigenschaft der [`TextEncoderStream`](/de/docs/Web/API/TextEncoderStream)-Schnittstelle gibt einen [`WritableStream`](/de/docs/Web/API/WritableStream) zurück, der Zeichenfolgen akzeptiert, die in Binärdaten codiert werden sollen.

## Wert

Ein [`WritableStream`](/de/docs/Web/API/WritableStream).

## Beispiele

Dieses Beispiel erstellt einen `TextEncoderStream`, der Zeichenfolgen als UTF-8 codiert. Es schreibt einige Zeichenfolgen in den `writable`-Stream und liest dann die codierten Binärdaten aus dem `readable`-Stream.

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

- [`TransformStream.writable`](/de/docs/Web/API/TransformStream/writable)
