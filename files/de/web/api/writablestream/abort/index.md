---
title: "WritableStream: abort()-Methode"
short-title: abort()
slug: Web/API/WritableStream/abort
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`abort()`**-Methode des {{domxref("WritableStream")}}-Interfaces bricht den Strom ab, was signalisiert, dass der Erzeuger nicht mehr erfolgreich in den Strom schreiben kann und dieser sofort in einen Fehlerzustand versetzt wird, wobei alle anstehenden Schreibvorgänge verworfen werden.

## Syntax

```js-nolint
abort(reason)
```

### Parameter

- `reason`
  - : Ein String, der einen für Menschen lesbaren Grund für den Abbruch angibt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit dem im `reason` Parameter angegebenen Wert erfüllt wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Der Strom, den Sie abzubrechen versuchen, ist kein {{domxref("WritableStream")}}, oder er ist gesperrt.

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

// den Strom später bei Bedarf abbrechen
writableStream.abort();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
