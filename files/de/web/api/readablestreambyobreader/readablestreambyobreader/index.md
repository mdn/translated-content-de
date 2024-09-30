---
title: "ReadableStreamBYOBReader: ReadableStreamBYOBReader()-Konstruktor"
short-title: ReadableStreamBYOBReader()
slug: Web/API/ReadableStreamBYOBReader/ReadableStreamBYOBReader
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Der **`ReadableStreamBYOBReader()`**-Konstruktor erstellt und gibt eine Instanz des `ReadableStreamBYOBReader`-Objekts zurück.

> [!NOTE]
> In der Regel würden Sie diesen Konstruktor nicht manuell verwenden;
> stattdessen würden Sie die Methode [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) mit dem Argument `"byob"` verwenden.

## Syntax

```js-nolint
new ReadableStreamBYOBReader(stream)
```

### Parameter

- `stream`
  - : Der zu lesende [`ReadableStream`](/de/docs/Web/API/ReadableStream).

### Rückgabewert

Eine Instanz des [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader)-Objekts.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der übergebene `stream`-Parameter kein [`ReadableStream`](/de/docs/Web/API/ReadableStream) ist, oder er bereits von einem anderen Leser zum Lesen gesperrt ist, oder sein Stream-Controller kein [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController) ist.

## Beispiele

Der Konstruktor wird selten direkt aufgerufen.
Stattdessen rufen Sie [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) wie gezeigt auf:

```js
const reader = stream.getReader({ mode: "byob" });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader)
- [Verwendung von lesbarem Bytestrom](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
