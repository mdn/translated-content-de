---
title: "ReadableStreamDefaultReader: releaseLock()-Methode"
short-title: releaseLock()
slug: Web/API/ReadableStreamDefaultReader/releaseLock
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`releaseLock()`**-Methode der [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader)-Schnittstelle gibt die Sperre des Lesers auf den Stream frei.

Wenn der zugeordnete Stream beim Freigeben der Sperre fehlerhaft ist, wird der Leser anschließend auf die gleiche Weise fehlerhaft erscheinen; andernfalls erscheint der Leser als geschlossen.

Wenn die Sperre des Lesers freigegeben wird, während er noch ausstehende Leseanforderungen hat, werden die von der [`ReadableStreamDefaultReader.read()`](/de/docs/Web/API/ReadableStreamDefaultReader/read)-Methode des Lesers zurückgegebenen Versprechen sofort mit einem `TypeError` abgelehnt. Ungelesene Datenblöcke verbleiben in der internen Warteschlange des Streams und können später durch Erstellen eines neuen Lesers gelesen werden.

## Syntax

```js-nolint
releaseLock()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

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

- [`ReadableStreamDefaultReader()`](/de/docs/Web/API/ReadableStreamDefaultReader/ReadableStreamDefaultReader)-Konstruktor
- [Verwendung lesbarer Streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
