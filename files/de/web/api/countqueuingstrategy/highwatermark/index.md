---
title: "CountQueuingStrategy: highWaterMark-Eigenschaft"
short-title: highWaterMark
slug: Web/API/CountQueuingStrategy/highWaterMark
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die schreibgeschützte **`CountQueuingStrategy.highWaterMark`**-Eigenschaft gibt die Gesamtzahl der Blöcke zurück, die in der internen Warteschlange enthalten sein können, bevor der Gegendruck angewendet wird.

## Werte

Ein ganzzahliger Wert, der die Anzahl der Blöcke darstellt.

## Beispiele

```js
const queueingStrategy = new CountQueuingStrategy({ highWaterMark: 1 });

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

- [`CountQueuingStrategy()`](/de/docs/Web/API/CountQueuingStrategy/CountQueuingStrategy) Konstruktor
