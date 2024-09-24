---
title: "WritableStream: locked-Eigenschaft"
short-title: locked
slug: Web/API/WritableStream/locked
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`locked`** des {{domxref("WritableStream")}}-Interfaces gibt ein Boolean zurück, das angibt, ob der `WritableStream` an einen Schreiber gebunden ist.

## Wert

Ein Boolean-Wert, der angibt, ob der Writable Stream gesperrt ist oder nicht.

## Beispiele

```js
const writableStream = new WritableStream(
  {
    write(chunk) {
      // ...
    },
    close() {
      // ...
    },
    abort(err) {
      // ...
    },
  },
  queuingStrategy,
);

// ...

const writer = writableStream.getWriter();

writableStream.locked;
// sollte true zurückgeben, da der Stream an einen Schreiber gebunden wurde
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
