---
title: "WritableStreamDefaultWriter: abort()-Methode"
short-title: abort()
slug: Web/API/WritableStreamDefaultWriter/abort
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`abort()`**-Methode des
{{domxref("WritableStreamDefaultWriter")}}-Interfaces bricht den Stream ab und signalisiert, dass der Ersteller nicht mehr erfolgreich in den Stream schreiben kann und er sofort in einen Fehlerzustand versetzt wird, wobei alle in der Warteschlange befindlichen Schreibvorgänge verworfen werden.

Wenn der Writer aktiv ist, verhält sich die `abort()`-Methode genauso wie bei dem zugehörigen Stream ({{domxref("WritableStream.abort()")}}). Andernfalls gibt sie ein abgelehntes Promise zurück.

## Syntax

```js-nolint
abort()
abort(reason)
```

### Parameter

- `reason` {{optional_inline}}
  - : Ein String, der einen lesbaren Grund für das Abbrechen darstellt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich zu `undefined` erfüllt, wenn der Stream abgebrochen wird, oder mit einem Fehler zurückgewiesen wird, wenn der Writer inaktiv war oder der empfangende Stream ungültig ist.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Der Stream, den Sie zu abbrechen versuchen, ist kein {{domxref("WritableStream")}}, oder er ist gesperrt.

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

// abbrechen des Streams bei Bedarf
await writer.abort("WritableStream abgebrochen. Grund: ...");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
