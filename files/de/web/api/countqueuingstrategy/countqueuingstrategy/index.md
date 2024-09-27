---
title: "CountQueuingStrategy: CountQueuingStrategy() Konstruktor"
short-title: CountQueuingStrategy()
slug: Web/API/CountQueuingStrategy/CountQueuingStrategy
l10n:
  sourceCommit: 340dc739b3f9c3c492303881b742d1aeca2c34c9
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Der **`CountQueuingStrategy()`** Konstruktor
erstellt und gibt eine neue Instanz eines `CountQueuingStrategy`-Objekts zurück.

## Syntax

```js-nolint
new CountQueuingStrategy(options)
```

### Parameter

- `options`
  - : Ein Objekt mit der folgenden Eigenschaft:
    - `highWaterMark`
      - : Die Gesamtanzahl der Chunks, die in der internen Warteschlange enthalten sein können, bevor Gegendruck angewendet wird.

### Rückgabewert

Eine Instanz des [`CountQueuingStrategy`](/de/docs/Web/API/CountQueuingStrategy)-Objekts.

### Ausnahmen

Keine.

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

- [`CountQueuingStrategy`](/de/docs/Web/API/CountQueuingStrategy)
