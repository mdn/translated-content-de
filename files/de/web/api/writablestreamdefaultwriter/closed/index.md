---
title: "WritableStreamDefaultWriter: closed-Eigenschaft"
short-title: closed
slug: Web/API/WritableStreamDefaultWriter/closed
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`closed`** schreibgeschützte Eigenschaft der [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn der Stream geschlossen wird, oder abgelehnt wird, wenn der Stream fehlerhaft ist oder die Sperre des Schreibers freigegeben wird.

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
    close(controller) {
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
