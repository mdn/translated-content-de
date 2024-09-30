---
title: "ReadableStreamBYOBReader: releaseLock() Methode"
short-title: releaseLock()
slug: Web/API/ReadableStreamBYOBReader/releaseLock
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`releaseLock()`**-Methode des [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader)-Interfaces gibt die Sperre des Readers auf dem Stream frei. Nachdem die Sperre gelöst wurde, ist der Reader nicht mehr aktiv.

Der Reader erscheint als fehlerhaft, wenn der zugehörige Stream fehlerhaft ist, wenn die Sperre freigegeben wird; andernfalls erscheint der Reader als geschlossen.

Wenn die Sperre des Readers freigegeben wird, während er noch ausstehende Leseanfragen hat, werden die Versprechen, die von der `ReadableStreamBYOBReader.read()`-Methode des Readers zurückgegeben werden, sofort mit einem `TypeError` abgelehnt. Ungelesene Chunks verbleiben in der internen Warteschlange des Streams und können später durch das Erhalten eines neuen Readers gelesen werden.

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
  - : Wird ausgelöst, wenn das Quellobjekt kein `ReadableStreamBYOBReader` ist.

## Beispiele

Ein triviales Beispiel wird unten gezeigt. Eine Sperre wird erstellt, sobald der Reader auf dem Stream erstellt wird.

```js
const reader = stream.getReader({ mode: "byob" });
reader.releaseLock();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ReadableStreamBYOBReader()`](/de/docs/Web/API/ReadableStreamBYOBReader/ReadableStreamBYOBReader) Konstruktor
- [Verwendung von lesbaren Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
