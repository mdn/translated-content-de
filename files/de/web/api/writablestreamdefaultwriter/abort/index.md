---
title: "WritableStreamDefaultWriter: abort()-Methode"
short-title: abort()
slug: Web/API/WritableStreamDefaultWriter/abort
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`abort()`**-Methode der [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter)-Schnittstelle bricht den Stream ab und signalisiert, dass der Producer den Stream nicht mehr erfolgreich beschreiben kann. Der Stream wird sofort in einen Fehlerzustand versetzt, wobei alle in der Warteschlange befindlichen Schreibvorgänge verworfen werden.

Wenn der Writer aktiv ist, verhält sich die `abort()`-Methode genauso wie bei dem zugehörigen Stream ([`WritableStream.abort()`](/de/docs/Web/API/WritableStream/abort)). Ist dies nicht der Fall, wird ein abgelehntes Versprechen zurückgegeben.

## Syntax

```js-nolint
abort()
abort(reason)
```

### Parameter

- `reason` {{optional_inline}}
  - : Ein String, der einen menschenlesbaren Grund für den Abbruch darstellt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` erfüllt wird, wenn der Stream abgebrochen wird, oder mit einem Fehler abgelehnt wird, wenn der Writer inaktiv oder der Empfangs-Stream ungültig ist.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Der Stream, den Sie versuchen abzubrechen, ist kein [`WritableStream`](/de/docs/Web/API/WritableStream) oder ist gesperrt.

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

// abort the stream when desired
await writer.abort("WritableStream aborted. Reason: ...");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
