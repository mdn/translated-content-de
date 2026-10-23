---
title: "WritableStreamDefaultWriter: Eigenschaft closed"
short-title: closed
slug: Web/API/WritableStreamDefaultWriter/closed
l10n:
  sourceCommit: 2610bf04cc058d5ea2432012e6ade57394d9258c
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`closed`** der Schnittstelle [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter) gibt ein {{jsxref("Promise")}} zurück. Dieses wird erfüllt, wenn der Stream geschlossen wird, oder zurückgewiesen, wenn im Stream ein Fehler auftritt oder die Sperre des Writers freigegeben wird.

## Wert

Ein {{jsxref("Promise")}}.

## Beispiele

```js
const writableStream = new WritableStream(
  {
    start(controller) {},
    write(chunk, controller) {
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

// ..

// check if the stream is closed
writer.closed.then(() => {
  console.log("writer closed");
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
