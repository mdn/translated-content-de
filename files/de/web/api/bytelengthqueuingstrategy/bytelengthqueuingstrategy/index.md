---
title: "ByteLengthQueuingStrategy: ByteLengthQueuingStrategy() Konstruktor"
short-title: ByteLengthQueuingStrategy()
slug: Web/API/ByteLengthQueuingStrategy/ByteLengthQueuingStrategy
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Der **`ByteLengthQueuingStrategy()`** Konstruktor erstellt und gibt eine Instanz eines `ByteLengthQueuingStrategy`-Objekts zurück.

## Syntax

```js-nolint
new ByteLengthQueuingStrategy(options)
```

### Parameter

- `options`

  - : Ein Objekt mit der folgenden Eigenschaft:

    - `highWaterMark`

      - : Die Gesamtanzahl an Bytes, die in der internen Warteschlange enthalten sein können, bevor Rückdruck angewendet wird.

        Im Gegensatz zu [`CountQueuingStrategy()`](/de/docs/Web/API/CountQueuingStrategy/CountQueuingStrategy), bei der `highWaterMark` eine einfache Anzahl von Fragmenten angibt, gibt `highWaterMark` bei `ByteLengthQueuingStrategy()` eine Anzahl von _Bytes_ an — speziell, wie viele Bytes dieser Fragmente in der internen Warteschlange enthalten sein können, bevor Rückdruck angewendet wird, anstelle einer Zählung, wie viele dieser Fragmente enthalten sein können.

### Rückgabewert

Eine Instanz des [`ByteLengthQueuingStrategy`](/de/docs/Web/API/ByteLengthQueuingStrategy) Objekts.

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

- [`ByteLengthQueuingStrategy`](/de/docs/Web/API/ByteLengthQueuingStrategy) Schnittstelle
