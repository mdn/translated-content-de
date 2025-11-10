---
title: "TextEncoderStream: readable-Eigenschaft"
short-title: readable
slug: Web/API/TextEncoderStream/readable
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

Die **`readable`** schreibgeschützte Eigenschaft der [`TextEncoderStream`](/de/docs/Web/API/TextEncoderStream)-Schnittstelle gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurück.

## Wert

Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream).

## Beispiele

Das folgende Beispiel zeigt, wie ein `ReadableStream` von einem `TextEncoderStream`-Objekt zurückgegeben wird.

```js
const stream = new TextEncoderStream();
console.log(stream.readable); // A ReadableStream
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
