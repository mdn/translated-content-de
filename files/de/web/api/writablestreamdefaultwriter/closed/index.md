---
title: "WritableStreamDefaultWriter: closed-Eigenschaft"
short-title: closed
slug: Web/API/WritableStreamDefaultWriter/closed
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die schreibgeschützte **`closed`**-Eigenschaft des
[`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter)-Interfaces gibt ein
{{jsxref("Promise")}} zurück, das erfüllt wird, wenn der Stream geschlossen wird, oder abgelehnt wird, wenn der Stream einen Fehler aufweist oder die Sperre des Writers freigegeben wird.

## Wert

Ein {{jsxref("Promise")}}.

## Beispiele

```js
const writableStream = new WritableStream(
  {
    start(controller) {},
    write(chunk, controller) {
      // ...
    },
    close(controller) {
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
