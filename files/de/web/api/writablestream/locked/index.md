---
title: "WritableStream: locked-Eigenschaft"
short-title: locked
slug: Web/API/WritableStream/locked
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`locked`** schreibgeschützte Eigenschaft der [`WritableStream`](/de/docs/Web/API/WritableStream)-Schnittstelle gibt einen booleschen Wert zurück, der anzeigt, ob der `WritableStream` an einen Writer gebunden ist.

## Wert

Ein boolescher Wert, der anzeigt, ob der writable stream gebunden ist oder nicht.

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
// should return true, as the stream has been locked to a writer
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
