---
title: "CountQueuingStrategy: highWaterMark-Eigenschaft"
short-title: highWaterMark
slug: Web/API/CountQueuingStrategy/highWaterMark
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die schreibgeschützte **`CountQueuingStrategy.highWaterMark`**-Eigenschaft gibt die Gesamtanzahl der Datenblöcke zurück, die in der internen Warteschlange enthalten sein können, bevor Rückstau angewendet wird.

## Werte

Ein Ganzzahlwert, der die Anzahl der Datenblöcke repräsentiert.

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

- {{domxref("CountQueuingStrategy.CountQueuingStrategy", "CountQueuingStrategy()")}} Konstruktor
