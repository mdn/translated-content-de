---
title: "CountQueuingStrategy: size()-Methode"
short-title: size()
slug: Web/API/CountQueuingStrategy/size
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`size()`**-Methode des {{domxref("CountQueuingStrategy")}}-Interfaces gibt immer `1` zurück, sodass die gesamte Warteschlangenlänge die Anzahl der Chunks in der Warteschlange darstellt.

## Syntax

```js-nolint
size()
```

### Parameter

Keine.

### Rückgabewert

`1`.

## Beispiele

```js
const queuingStrategy = new CountQueuingStrategy({ highWaterMark: 1 });

const writableStream = new WritableStream(
  {
    // Implementieren Sie den Sink
    write(chunk) {
      // …
    },
    close() {
      // …
    },
    abort(err) {
      console.log("Sink-Fehler:", err);
    },
  },
  queuingStrategy,
);

const size = queuingStrategy.size();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("CountQueuingStrategy.CountQueuingStrategy", "CountQueuingStrategy()")}}-Konstruktor
