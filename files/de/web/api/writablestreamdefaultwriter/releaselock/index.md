---
title: "WritableStreamDefaultWriter: releaseLock() Methode"
short-title: releaseLock()
slug: Web/API/WritableStreamDefaultWriter/releaseLock
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`releaseLock()`** Methode der [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter)-Schnittstelle gibt das Schreiberschloss des entsprechenden Streams frei. Nachdem das Schloss freigegeben wurde, ist der Schreiber nicht mehr aktiv. Wenn der zugehörige Stream fehlerhaft ist, wenn das Schloss freigegeben wird, erscheint der Schreiber von nun an in gleicher Weise fehlerhaft; andernfalls erscheint der Schreiber geschlossen.

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

// …

// release writer's lock on the stream when desired
writer.releaseLock();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
