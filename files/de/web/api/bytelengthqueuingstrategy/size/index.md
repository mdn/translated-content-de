---
title: "ByteLengthQueuingStrategy: size()-Methode"
short-title: size()
slug: Web/API/ByteLengthQueuingStrategy/size
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`size()`**-Methode der
{{domxref("ByteLengthQueuingStrategy")}}-Schnittstelle gibt die `byteLength`-Eigenschaft des angegebenen Chunks zurück.

## Syntax

```js-nolint
size(chunk)
```

### Parameter

- `chunk`
  - : Ein Datenblock, der durch den Stream geleitet wird.

### Rückgabewert

Ein ganzzahliger Wert, der die Byte-Länge des angegebenen Chunks darstellt.

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

const size = queueingStrategy.size(chunk);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("ByteLengthQueuingStrategy.ByteLengthQueuingStrategy", "ByteLengthQueuingStrategy()")}} Konstruktor
