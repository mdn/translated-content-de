---
title: "ReadableStreamDefaultReader: releaseLock() Methode"
short-title: releaseLock()
slug: Web/API/ReadableStreamDefaultReader/releaseLock
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`releaseLock()`**-Methode der [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader) Schnittstelle löst die Sperre des Readers auf dem Stream.

Wenn der zugehörige Stream fehlerhaft ist, wenn die Sperre gelöst wird, wird der Reader anschließend auf die gleiche Weise fehlerhaft erscheinen; andernfalls wird der Reader als geschlossen erscheinen.

Wird die Sperre des Readers gelöst, während noch ausstehende Leseanforderungen vorliegen, werden die von der Methode [`ReadableStreamDefaultReader.read()`](/de/docs/Web/API/ReadableStreamDefaultReader/read) des Readers zurückgegebenen Versprechen sofort mit einem `TypeError` abgelehnt. Nicht gelesene Chunks verbleiben in der internen Warteschlange des Streams und können später durch das Erwerben eines neuen Readers gelesen werden.

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
  - : Ausgelöst, wenn das Quellobjekt kein `ReadableStreamDefaultReader` ist.

## Beispiele

```js
function fetchStream() {
  const reader = stream.getReader();

  // …

  reader.releaseLock();

  // …
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ReadableStreamDefaultReader()`](/de/docs/Web/API/ReadableStreamDefaultReader/ReadableStreamDefaultReader) Konstruktor
- [Verwendung von lesbaren Streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
