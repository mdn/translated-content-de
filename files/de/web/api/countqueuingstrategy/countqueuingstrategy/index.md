---
title: "CountQueuingStrategy: CountQueuingStrategy() Konstruktor"
short-title: CountQueuingStrategy()
slug: Web/API/CountQueuingStrategy/CountQueuingStrategy
l10n:
  sourceCommit: 340dc739b3f9c3c492303881b742d1aeca2c34c9
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Der **`CountQueuingStrategy()`** Konstruktor erstellt und gibt eine Instanz des `CountQueuingStrategy`-Objekts zurück.

## Syntax

```js-nolint
new CountQueuingStrategy(options)
```

### Parameter

- `options`
  - : Ein Objekt mit der folgenden Eigenschaft:
    - `highWaterMark`
      - : Die Gesamtanzahl der Chunks, die in der internen Warteschlange enthalten sein können, bevor Backpressure angewendet wird.

### Rückgabewert

Eine Instanz des {{domxref("CountQueuingStrategy")}}-Objekts.

### Ausnahmen

Keine.

## Beispiele

```js
const queuingStrategy = new CountQueuingStrategy({ highWaterMark: 1 });

const writableStream = new WritableStream(
  {
    // Sink implementieren
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

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- {{domxref("CountQueuingStrategy")}}
