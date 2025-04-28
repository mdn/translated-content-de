---
title: "WritableStreamDefaultWriter: desiredSize Eigenschaft"
short-title: desiredSize
slug: Web/API/WritableStreamDefaultWriter/desiredSize
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`desiredSize`** des [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter)-Interfaces gibt die gewünschte Größe an, die benötigt wird, um die interne Warteschlange des Streams zu füllen.

## Wert

Ein Integer. Beachten Sie, dass dieser negativ sein kann, wenn die Warteschlange überfüllt ist.

Der Wert ist `null`, wenn der Stream nicht erfolgreich beschrieben werden kann (entweder aufgrund eines Fehlers oder weil ein Abbruch ansteht), und null wenn der Stream geschlossen ist.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Die Sperre des Schreibers wurde freigegeben.

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
