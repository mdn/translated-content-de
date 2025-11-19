---
title: "WritableStreamDefaultWriter: abort() Methode"
short-title: abort()
slug: Web/API/WritableStreamDefaultWriter/abort
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`abort()`**-Methode des [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter)-Interfaces bricht den Stream ab und signalisiert, dass der Erzeuger nicht mehr erfolgreich in den Stream schreiben kann und dieser sofort in einen Fehlerzustand versetzt wird, wobei alle wartenden Schreibvorgänge verworfen werden.

Wenn der Writer aktiv ist, verhält sich die `abort()`-Methode genauso wie die des zugehörigen Streams ([`WritableStream.abort()`](/de/docs/Web/API/WritableStream/abort)). Andernfalls gibt sie ein abgelehntes Promise zurück.

## Syntax

```js-nolint
abort()
abort(reason)
```

### Parameter

- `reason` {{optional_inline}}
  - : Ein String, der einen für Menschen lesbaren Grund für den Abbruch darstellt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf `undefined` erfüllt wird, wenn der Stream abgebrochen wird, oder bei einem Fehler ablehnt, wenn der Writer inaktiv war oder der empfangende Stream ungültig ist.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Der Stream, den Sie abzubrechen versuchen, ist kein [`WritableStream`](/de/docs/Web/API/WritableStream), oder er ist gesperrt.

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

// abort the stream when desired
await writer.abort("WritableStream aborted. Reason: ...");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
