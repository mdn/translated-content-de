---
title: "ByteLengthQueuingStrategy: size()-Methode"
short-title: size()
slug: Web/API/ByteLengthQueuingStrategy/size
l10n:
  sourceCommit: d9c005fd4617bd388c583e27ba6f1c001e4e80b8
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`size()`**-Methode des
[`ByteLengthQueuingStrategy`](/de/docs/Web/API/ByteLengthQueuingStrategy)-Interfaces gibt die `byteLength`-Eigenschaft des gegebenen Datenblocks zurück.

## Syntax

```js-nolint
size(chunk)
```

### Parameter

- `chunk`
  - : Ein Datenblock, der durch den Stream geleitet wird.

### Rückgabewert

Ein Integer, der die Byte-Länge des gegebenen Datenblocks darstellt.

## Beispiele

```js
const queuingStrategy = new ByteLengthQueuingStrategy({ highWaterMark: 1 });

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

- [`ByteLengthQueuingStrategy()`](/de/docs/Web/API/ByteLengthQueuingStrategy/ByteLengthQueuingStrategy)-Konstruktor
