---
title: "WritableStreamDefaultWriter: releaseLock()-Methode"
short-title: releaseLock()
slug: Web/API/WritableStreamDefaultWriter/releaseLock
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`releaseLock()`**-Methode der [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter)-Schnittstelle gibt die Sperre des Writers für den entsprechenden Stream frei. Nach der Freigabe der Sperre ist der Writer nicht mehr aktiv. Wenn der zugeordnete Stream fehlerhaft ist, wenn die Sperre freigegeben wird, erscheint der Writer von nun an auf die gleiche Weise fehlerhaft; andernfalls erscheint der Writer geschlossen.

## Syntax

```js-nolint
releaseLock()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

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

// ...

// release writer's lock on the stream when desired
writer.releaseLock();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
