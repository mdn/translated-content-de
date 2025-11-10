---
title: "WritableStream: abort()-Methode"
short-title: abort()
slug: Web/API/WritableStream/abort
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`abort()`**-Methode der [`WritableStream`](/de/docs/Web/API/WritableStream)-Schnittstelle bricht den Stream ab und signalisiert, dass der Produzent nicht mehr erfolgreich in den Stream schreiben kann. Der Stream wird sofort in einen Fehlerzustand versetzt und alle angestauten Schreibvorgänge werden verworfen.

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
