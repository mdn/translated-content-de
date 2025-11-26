---
title: "TransformStream: readable-Eigenschaft"
short-title: readable
slug: Web/API/TransformStream/readable
l10n:
  sourceCommit: ae6626ec9a5729a51f202b77586f37958088ed77
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die schreibgeschützte **`readable`**-Eigenschaft des [`TransformStream`](/de/docs/Web/API/TransformStream)-Interfaces gibt die [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Instanz zurück, die von diesem `TransformStream` gesteuert wird. Dieser Stream gibt die transformierten Ausgabedaten aus.

## Wert

Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream).

## Beispiele

Dieses Beispiel erstellt einen `TransformStream`, der alle Eingabetexte in Großbuchstaben umwandelt. Es schreibt Text in den `writable`-Stream und liest dann den transformierten Text aus dem `readable`-Stream.

```js
const stream = new TransformStream({
  transform(chunk, controller) {
    controller.enqueue(chunk.toUpperCase());
  },
});

// Write data to be transformed
const writer = stream.writable.getWriter();
writer.write("hello ");
writer.write("world");
writer.close();

// Read transformed data
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
console.log(output); // HELLO WORLD
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
