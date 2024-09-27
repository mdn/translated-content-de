---
title: "ReadableStreamBYOBReader: ReadableStreamBYOBReader() Konstruktor"
short-title: ReadableStreamBYOBReader()
slug: Web/API/ReadableStreamBYOBReader/ReadableStreamBYOBReader
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Der **`ReadableStreamBYOBReader()`** Konstruktor erzeugt und gibt eine `ReadableStreamBYOBReader` Objektinstanz zurück.

> [!NOTE]
> Sie würden diesen Konstruktor in der Regel nicht manuell verwenden;
> stattdessen nutzen Sie die Methode [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) mit dem Argument `"byob"`.

## Syntax

```js-nolint
new ReadableStreamBYOBReader(stream)
```

### Parameter

- `stream`
  - : Der zu lesende [`ReadableStream`](/de/docs/Web/API/ReadableStream).

### Rückgabewert

Eine Instanz des [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader) Objekts.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der angegebene `stream` Parameter kein [`ReadableStream`](/de/docs/Web/API/ReadableStream) ist, wenn er bereits von einem anderen Leser für das Lesen gesperrt ist oder wenn sein Stream-Controller kein [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController) ist.

## Beispiele

Der Konstruktor wird selten direkt aufgerufen.
Stattdessen rufen Sie `ReadableStream.getReader()` wie gezeigt auf:

```js
const reader = stream.getReader({ mode: "byob" });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader)
- [Verwendung des lesbaren Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
