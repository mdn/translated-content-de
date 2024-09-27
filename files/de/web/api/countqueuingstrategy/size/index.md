---
title: "CountQueuingStrategy: size() Methode"
short-title: size()
slug: Web/API/CountQueuingStrategy/size
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`size()`** Methode der
[`CountQueuingStrategy`](/de/docs/Web/API/CountQueuingStrategy)-Schnittstelle gibt immer `1` zurück, sodass die Gesamtspeichergröße eine Zählung der Anzahl von Chunks in der Warteschlange ist.

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
    // Implement the sink
    write(chunk) {
      // …
    },
    close() {
      // …
    },
    abort(err) {
      console.log("Sink error:", err);
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

- [`CountQueuingStrategy()`](/de/docs/Web/API/CountQueuingStrategy/CountQueuingStrategy) Konstruktor
