---
title: "ReadableStreamDefaultReader: releaseLock() Methode"
short-title: releaseLock()
slug: Web/API/ReadableStreamDefaultReader/releaseLock
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`releaseLock()`**-Methode der [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader)-Schnittstelle löst das Lock des Readers auf dem Stream.

Wenn der zugehörige Stream beim Freigeben des Locks fehlerhaft ist, wird der Reader in gleicher Weise als fehlerhaft erscheinen; andernfalls wird der Reader als geschlossen erscheinen.

Wenn das Lock des Readers freigegeben wird, während er noch ausstehende Leseanforderungen hat, werden die von der [`ReadableStreamDefaultReader.read()`](/de/docs/Web/API/ReadableStreamDefaultReader/read)-Methode des Readers zurückgegebenen Versprechen sofort mit einem `TypeError` abgelehnt. Ungelesene Stücke verbleiben in der internen Warteschlange des Streams und können später durch Erwerben eines neuen Readers gelesen werden.

## Syntax

```js-nolint
releaseLock()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das Quellobjekt kein `ReadableStreamDefaultReader` ist.

## Beispiele

```js
function fetchStream() {
  const reader = stream.getReader();

  // ...

  reader.releaseLock();

  // ...
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ReadableStreamDefaultReader()`](/de/docs/Web/API/ReadableStreamDefaultReader/ReadableStreamDefaultReader) Konstruktor
- [Verwendung von lesbaren Streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
