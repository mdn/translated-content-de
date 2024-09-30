---
title: "WritableStreamDefaultWriter: desiredSize-Eigenschaft"
short-title: desiredSize
slug: Web/API/WritableStreamDefaultWriter/desiredSize
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`desiredSize`** des [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter)-Interfaces gibt die gewünschte Größe zurück, die benötigt wird, um die interne Warteschlange des Streams zu füllen.

## Wert

Ein Ganzzahlwert. Beachten Sie, dass dieser negativ sein kann, wenn die Warteschlange überfüllt ist.

Der Wert ist `null`, wenn in den Stream nicht erfolgreich geschrieben werden kann (entweder aufgrund eines Fehlers oder wegen einer anstehenden Abbruchoperation) und null, wenn der Stream geschlossen ist.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Die Sperre des Writers ist freigegeben.

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
