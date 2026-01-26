---
title: "TextDecoderStream: readable-Eigenschaft"
short-title: readable
slug: Web/API/TextDecoderStream/readable
l10n:
  sourceCommit: ae6626ec9a5729a51f202b77586f37958088ed77
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`readable`**-Eigenschaft der [`TextDecoderStream`](/de/docs/Web/API/TextDecoderStream)-Schnittstelle gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurück, der dekodierte Strings ausgibt.

## Wert

Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream).

## Beispiele

Dieses Beispiel erstellt einen `TextDecoderStream`, der UTF-8-kodierte Binärdaten dekodiert. Es schreibt einige kodierte Binärdaten in den `writable`-Stream und liest dann den dekodierten Text aus dem `readable`-Stream.

```js
const stream = new TextDecoderStream();

// Write data to be decoded
const data = Uint8Array.fromBase64("5L2g5aW95LiW55WM");
const writer = stream.writable.getWriter();
writer.write(data);
writer.close();

// Read decoded data
const reader = stream.readable.getReader();
let done = false;
let output = "";
while (!done) {
  const result = await reader.read();
  if (result.value) {
    output += result.value;
  }
  done = result.done;
}
console.log(output); // 你好世界
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`TransformStream.readable`](/de/docs/Web/API/TransformStream/readable)
