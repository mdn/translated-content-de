---
title: "ByteLengthQueuingStrategy: highWaterMark-Eigenschaft"
short-title: highWaterMark
slug: Web/API/ByteLengthQueuingStrategy/highWaterMark
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die schreibgeschützte **`ByteLengthQueuingStrategy.highWaterMark`**-Eigenschaft gibt die Gesamtzahl von Bytes zurück, die in der internen Warteschlange enthalten sein können, bevor [Rückstau](/de/docs/Web/API/Streams_API/Concepts#backpressure) angewendet wird.

> [!NOTE]
> Im Gegensatz zu [`CountQueuingStrategy()`](/de/docs/Web/API/CountQueuingStrategy/CountQueuingStrategy), bei der die `highWaterMark`-Eigenschaft eine einfache Zählung der Anzahl der Chunks angibt, spezifiziert der `highWaterMark`-Parameter bei `ByteLengthQueuingStrategy()` eine Anzahl von _Bytes_ — genauer gesagt, wird angegeben, wie viele Bytes dieser Chunks eines Stroms (statt einer Zählung, wie viele dieser Chunks) in der internen Warteschlange enthalten sein können, bevor Rückstau angewendet wird.

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
console.log(`highWaterMark value: ${queuingStrategy.highWaterMark}$`);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("ByteLengthQueuingStrategy.ByteLengthQueuingStrategy", "ByteLengthQueuingStrategy()")}} Konstruktor
