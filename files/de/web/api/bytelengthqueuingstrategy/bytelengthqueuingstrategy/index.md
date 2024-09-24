---
title: "ByteLengthQueuingStrategy: ByteLengthQueuingStrategy() Konstruktor"
short-title: ByteLengthQueuingStrategy()
slug: Web/API/ByteLengthQueuingStrategy/ByteLengthQueuingStrategy
l10n:
  sourceCommit: 340dc739b3f9c3c492303881b742d1aeca2c34c9
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Der **`ByteLengthQueuingStrategy()`** Konstruktor erstellt und gibt eine Instanz des `ByteLengthQueuingStrategy`-Objekts zurück.

## Syntax

```js-nolint
new ByteLengthQueuingStrategy(options)
```

### Parameter

- `options`

  - : Ein Objekt mit der folgenden Eigenschaft:

    - `highWaterMark`

      - : Die Gesamtanzahl an Bytes, die in der internen Warteschlange enthalten sein können, bevor ein Rückstau angewendet wird.

        Im Gegensatz zu [`CountQueuingStrategy()`](/de/docs/Web/API/CountQueuingStrategy/CountQueuingStrategy), bei dem `highWaterMark` eine einfache Zählung der Anzahl von Blöcken angibt, legt `ByteLengthQueuingStrategy()` eine Anzahl von _Bytes_ fest — das heißt, angesichts eines Stroms von Blöcken, wie viele Bytes dieser Blöcke (anstatt einer Anzahl dieser Blöcke) in der internen Warteschlange enthalten sein können, bevor ein Rückstau angewendet wird.

### Rückgabewert

Eine Instanz des {{domxref("ByteLengthQueuingStrategy")}}-Objekts.

### Ausnahmen

Keine.

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
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("ByteLengthQueuingStrategy")}} Schnittstelle
