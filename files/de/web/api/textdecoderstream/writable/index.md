---
title: "TextDecoderStream: writable-Eigenschaft"
short-title: writable
slug: Web/API/TextDecoderStream/writable
l10n:
  sourceCommit: ae6626ec9a5729a51f202b77586f37958088ed77
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

Die **`writable`** schreibgeschützte Eigenschaft der [`TextDecoderStream`](/de/docs/Web/API/TextDecoderStream)-Schnittstelle gibt einen [`WritableStream`](/de/docs/Web/API/WritableStream) zurück, der Binärdaten in Form von {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}} oder {{jsxref("DataView")}}-Chunks akzeptiert ({{jsxref("SharedArrayBuffer")}} und seine Ansichten sind ebenfalls erlaubt), um in Strings dekodiert zu werden.

## Wert

Ein [`WritableStream`](/de/docs/Web/API/WritableStream).

## Beispiele

Dieses Beispiel erstellt einen `TextDecoderStream`, der UTF-8-kodierte Binärdaten dekodiert. Es schreibt einige kodierte Binärdaten in den `writable` Stream und liest dann den dekodierten Text aus dem `readable` Stream.

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
console.log(output);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`TransformStream.writable`](/de/docs/Web/API/TransformStream/writable)
