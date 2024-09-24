---
title: "WritableStreamDefaultWriter: Methode releaseLock()"
short-title: releaseLock()
slug: Web/API/WritableStreamDefaultWriter/releaseLock
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`releaseLock()`**-Methode der
{{domxref("WritableStreamDefaultWriter")}}-Schnittstelle gibt die Sperre des Writers auf dem
entsprechenden Stream frei. Nachdem die Sperre freigegeben wurde, ist der Writer nicht mehr aktiv.
Wenn der zugehörige Stream fehlerhaft ist, wenn die Sperre freigegeben wird, wird der Writer von nun an
ebenfalls als fehlerhaft erscheinen; andernfalls wird der Writer als geschlossen erscheinen.

## Syntax

```js-nolint
releaseLock()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

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

// Wenn gewünscht, die Sperre des Writers auf dem Stream freigeben
writer.releaseLock();
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}
