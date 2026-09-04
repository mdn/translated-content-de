---
title: "WritableStreamDefaultWriter: desiredSize-Eigenschaft"
short-title: desiredSize
slug: Web/API/WritableStreamDefaultWriter/desiredSize
l10n:
  sourceCommit: c16a9b4df8d0fed2512cdee329afdff73d0ff891
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`desiredSize`** schreibgeschützte Eigenschaft der [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter)-Schnittstelle gibt die gewünschte Größe zurück, die benötigt wird, um die interne Warteschlange des Streams zu füllen.

## Wert

Eine Zahl oder `null`.

Die Zahl kann negativ sein, wenn die Warteschlange überfüllt ist. Wenn eine benutzerdefinierte Warteschlangenstrategie verwendet wird, können deren Blockgrößen dazu führen, dass die Zahl eine dezimale Komponente hat. Der Wert ist `null`, wenn der Stream fehlerhaft ist oder ein Fehler aufgetreten ist, und `0`, wenn er geschlossen ist.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Die Sperre des Writers ist freigegeben.

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

// return stream's desired size
const size = writer.desiredSize;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
