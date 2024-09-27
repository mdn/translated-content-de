---
title: "ReadableStreamBYOBReader: releaseLock() Methode"
short-title: releaseLock()
slug: Web/API/ReadableStreamBYOBReader/releaseLock
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`releaseLock()`**-Methode der [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader)-Schnittstelle löst die Sperre des Lesers auf dem Stream. Nach dem Freigeben der Sperre ist der Leser nicht mehr aktiv.

Der Leser erscheint fehlerhaft, wenn der zugehörige Stream fehlerhaft ist, wenn die Sperre freigegeben wird; andernfalls erscheint der Leser geschlossen.

Wenn die Sperre des Lesers freigegeben wird, während er noch ausstehende Leseanfragen hat, werden die durch die Methode [`ReadableStreamBYOBReader.read()`](/de/docs/Web/API/ReadableStreamBYOBReader/read) des Lesers zurückgegebenen Versprechen sofort mit einem `TypeError` abgelehnt. Ungeklärte Teile verbleiben in der internen Warteschlange des Streams und können später durch Erwerb eines neuen Lesers gelesen werden.

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

Ein triviales Beispiel wird unten gezeigt. Eine Sperre wird erstellt, sobald der Leser auf dem Stream erstellt wird.

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
- [Verwendung von lesbaren Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
