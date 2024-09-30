---
title: "ByteLengthQueuingStrategy: highWaterMark-Eigenschaft"
short-title: highWaterMark
slug: Web/API/ByteLengthQueuingStrategy/highWaterMark
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die schreibgeschützte **`ByteLengthQueuingStrategy.highWaterMark`**-Eigenschaft gibt die Gesamtanzahl von Bytes zurück, die in der internen Warteschlange enthalten sein können, bevor [Backpressure](/de/docs/Web/API/Streams_API/Concepts#backpressure) angewendet wird.

> [!NOTE]
> Anders als bei [`CountQueuingStrategy()`](/de/docs/Web/API/CountQueuingStrategy/CountQueuingStrategy), wo die `highWaterMark`-Eigenschaft eine einfache Zählung der Anzahl der Blöcke angibt, legt der `highWaterMark`-Parameter bei `ByteLengthQueuingStrategy()` eine Anzahl von _Bytes_ fest — insbesondere, wie viele Bytes von diesen Blöcken eines Streams in der internen Warteschlange enthalten sein können (statt der Zählung, wie viele dieser Blöcke), bevor Backpressure angewendet wird.

## Werte

Ein ganzzahliger Wert.

## Beispiele

```js
const queuingStrategy = new ByteLengthQueuingStrategy({
  highWaterMark: 1 * 1024,
});

const readableStream = new ReadableStream(
  {
    start(controller) {
      // …
    },
    pull(controller) {
      // …
    },
    cancel(err) {
      console.log("stream error:", err);
    },
  },
  queuingStrategy,
);

const size = queuingStrategy.size(chunk);
console.log(`highWaterMark value: ${queuingStrategy.highWaterMark}$`);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ByteLengthQueuingStrategy()`](/de/docs/Web/API/ByteLengthQueuingStrategy/ByteLengthQueuingStrategy) Konstruktor
