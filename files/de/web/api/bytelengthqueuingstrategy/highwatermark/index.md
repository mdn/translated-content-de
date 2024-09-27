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
> Im Gegensatz zu [`CountQueuingStrategy()`](/de/docs/Web/API/CountQueuingStrategy/CountQueuingStrategy), bei dem die `highWaterMark`-Eigenschaft eine einfache Zählung der Anzahl von Chunks angibt, gibt bei `ByteLengthQueuingStrategy()` der `highWaterMark`-Parameter eine Anzahl von _Bytes_ an — insbesondere bei einem Strom von Chunks, wie viele Bytes dieser Chunks (anstatt einer Zählung, wie viele dieser Chunks) in der internen Warteschlange enthalten sein können, bevor Backpressure angewendet wird.

## Werte

Ein Integer.

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
console.log(`highWaterMark value: ${queuingStrategy.highWaterMark}{{APIRef("Streams")}}{{AvailableInWorkers}}

Die schreibgeschützte **`ByteLengthQueuingStrategy.highWaterMark`**-Eigenschaft gibt die Gesamtanzahl von Bytes zurück, die in der internen Warteschlange enthalten sein können, bevor [Backpressure](/de/docs/Web/API/Streams_API/Concepts#backpressure) angewendet wird.

> [!NOTE]
> Im Gegensatz zu [`CountQueuingStrategy()`](/de/docs/Web/API/CountQueuingStrategy/CountQueuingStrategy), bei dem die `highWaterMark`-Eigenschaft eine einfache Zählung der Anzahl von Chunks angibt, gibt bei `ByteLengthQueuingStrategy()` der `highWaterMark`-Parameter eine Anzahl von _Bytes_ an — insbesondere bei einem Strom von Chunks, wie viele Bytes dieser Chunks (anstatt einer Zählung, wie viele dieser Chunks) in der internen Warteschlange enthalten sein können, bevor Backpressure angewendet wird.

## Werte

Ein Integer.

## Beispiele

);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ByteLengthQueuingStrategy()`](/de/docs/Web/API/ByteLengthQueuingStrategy/ByteLengthQueuingStrategy)-Konstruktor
