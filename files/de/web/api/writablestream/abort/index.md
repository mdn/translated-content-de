---
title: "WritableStream: abort() Methode"
short-title: abort()
slug: Web/API/WritableStream/abort
l10n:
  sourceCommit: 6012fe912a34bb129d5f9848a2b01b63468950f8
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`abort()`**-Methode der [`WritableStream`](/de/docs/Web/API/WritableStream)-Schnittstelle bricht den Stream ab, signalisiert, dass der Produzent nicht mehr erfolgreich in den Stream schreiben kann, und versetzt ihn umgehend in einen Fehlerzustand, wobei alle eingereihten Schreibvorgänge verworfen werden.

## Syntax

```js-nolint
abort(reason)
```

### Parameter

- `reason`
  - : Ein String, der einen menschenlesbaren Grund für den Abbruch angibt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` erfüllt wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Der Stream, den Sie abzubrechen versuchen, ist kein [`WritableStream`](/de/docs/Web/API/WritableStream) oder er ist gesperrt.

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

// abort the stream later on, when required
writableStream.abort();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
