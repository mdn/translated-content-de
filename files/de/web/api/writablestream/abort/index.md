---
title: "WritableStream: abort()-Methode"
short-title: abort()
slug: Web/API/WritableStream/abort
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`abort()`**-Methode der [`WritableStream`](/de/docs/Web/API/WritableStream)-Schnittstelle bricht den Stream ab. Sie signalisiert, dass der Produzent nicht mehr erfolgreich in den Stream schreiben kann und dieser sofort in einen Fehlerzustand versetzt werden soll, wobei alle eingereihten Schreibvorgänge verworfen werden.

## Syntax

```js-nolint
abort(reason)
```

### Parameter

- `reason`
  - : Ein String, der einen menschenlesbaren Grund für den Abbruch angibt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit dem im `reason`-Parameter angegebenen Wert erfüllt wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Der Stream, den Sie abzubrechen versuchen, ist kein [`WritableStream`](/de/docs/Web/API/WritableStream) oder er ist gesperrt.

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

// abort the stream later on, when required
writableStream.abort();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
