---
title: "WritableStreamDefaultWriter: releaseLock() Methode"
short-title: releaseLock()
slug: Web/API/WritableStreamDefaultWriter/releaseLock
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`releaseLock()`**-Methode der
[`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter)-Schnittstelle gibt die Sperre des Writers auf dem
entsprechenden Stream frei. Nachdem die Sperre freigegeben wurde, ist der Writer nicht mehr aktiv. Wenn der
zugehörige Stream fehlerhaft ist, wenn die Sperre freigegeben wird, wird der Writer von nun an auf die gleiche Weise fehlerhaft erscheinen; andernfalls wird der Writer als geschlossen erscheinen.

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
