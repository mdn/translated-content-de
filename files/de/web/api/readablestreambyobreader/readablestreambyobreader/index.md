---
title: "ReadableStreamBYOBReader: ReadableStreamBYOBReader() Konstruktor"
short-title: ReadableStreamBYOBReader()
slug: Web/API/ReadableStreamBYOBReader/ReadableStreamBYOBReader
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Der **`ReadableStreamBYOBReader()`**-Konstruktor erstellt und gibt eine Instanz des `ReadableStreamBYOBReader`-Objekts zurück.

> [!NOTE]
> Im Allgemeinen würden Sie diesen Konstruktor nicht manuell verwenden;
> stattdessen würden Sie die Methode {{domxref("ReadableStream.getReader()")}} mit dem Argument `"byob"` verwenden.

## Syntax

```js-nolint
new ReadableStreamBYOBReader(stream)
```

### Parameter

- `stream`
  - : Der zu lesende {{domxref("ReadableStream")}}.

### Rückgabewert

Eine Instanz des {{domxref("ReadableStreamBYOBReader")}}-Objekts.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der übergebene `stream`-Parameter kein {{domxref("ReadableStream")}} ist, oder wenn er bereits für das Lesen durch einen anderen Leser gesperrt ist, oder wenn sein Stream-Controller kein {{domxref("ReadableByteStreamController")}} ist.

## Beispiele

Der Konstruktor wird selten direkt aufgerufen.
Stattdessen rufen Sie {{domxref("ReadableStream.getReader()")}} wie folgt auf:

```js
const reader = stream.getReader({ mode: "byob" });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("ReadableStreamBYOBReader")}}
- [Verwendung lesbarer Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
