---
title: "WritableStreamDefaultWriter: Eigenschaft desiredSize"
short-title: desiredSize
slug: Web/API/WritableStreamDefaultWriter/desiredSize
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`desiredSize`** des
{{domxref("WritableStreamDefaultWriter")}}-Interfaces gibt die gewünschte Größe zurück, die erforderlich ist, um die interne Warteschlange des Streams zu füllen.

## Wert

Ein ganzzahliger Wert. Beachten Sie, dass dieser negativ sein kann, wenn die Warteschlange überfüllt ist.

Der Wert ist `null`, wenn nicht erfolgreich in den Stream geschrieben werden kann (entweder aufgrund eines Fehlers oder weil ein Abbruch ansteht) und null, wenn der Stream geschlossen ist.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Die Sperre des Writers wurde freigegeben.

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

// gewünschte Größe des Streams zurückgeben
let size = writer.desiredSize;
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
