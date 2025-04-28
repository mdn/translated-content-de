---
title: "WritableStream: locked-Eigenschaft"
short-title: locked
slug: Web/API/WritableStream/locked
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`locked`** der [`WritableStream`](/de/docs/Web/API/WritableStream)-Schnittstelle gibt einen booleschen Wert zurück, der angibt, ob der `WritableStream` an einen Schreiber gebunden ist.

## Wert

Ein boolescher Wert, der angibt, ob der schreibbare Stream gesperrt ist oder nicht.

## Beispiele

```js
const writableStream = new WritableStream(
  {
    write(chunk) {
      // …
    },
    close() {
      // …
    },
    abort(err) {
      // …
    },
  },
  queuingStrategy,
);

// …

const writer = writableStream.getWriter();

writableStream.locked;
// should return true, as the stream has been locked to a writer
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
