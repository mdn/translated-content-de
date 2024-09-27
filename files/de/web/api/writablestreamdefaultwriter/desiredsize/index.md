---
title: "WritableStreamDefaultWriter: desiredSize Eigenschaft"
short-title: desiredSize
slug: Web/API/WritableStreamDefaultWriter/desiredSize
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`desiredSize`** schreibgeschützte Eigenschaft der [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter) Schnittstelle gibt die gewünschte Größe zurück, die erforderlich ist, um die interne Warteschlange des Streams zu füllen.

## Wert

Ein Integer. Beachten Sie, dass dieser negativ sein kann, wenn die Warteschlange überfüllt ist.

Der Wert wird `null` sein, wenn nicht erfolgreich in den Stream geschrieben werden kann (entweder aufgrund eines Fehlers oder weil ein Abbruch ansteht) und null, wenn der Stream geschlossen ist.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Die Sperre des Writers wird freigegeben.

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

// return stream's desired size
let size = writer.desiredSize;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
