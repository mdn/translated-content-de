---
title: "Blob: arrayBuffer()-Methode"
short-title: arrayBuffer()
slug: Web/API/Blob/arrayBuffer
l10n:
  sourceCommit: 84a9afd94f497d4173bde131731ef6bdf0b6135d
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Die **`arrayBuffer()`**-Methode des [`Blob`](/de/docs/Web/API/Blob)
Interfaces gibt ein {{jsxref("Promise")}} zurück, das mit dem Inhalt des Blobs als
Binärdaten, die in einem {{jsxref("ArrayBuffer")}} enthalten sind, aufgelöst wird.

## Syntax

```js-nolint
arrayBuffer()
```

### Parameter

Keine.

### Rückgabewert

Ein Promise, das mit einem {{jsxref("ArrayBuffer")}} aufgelöst wird, der die Daten des Blobs
in binärer Form enthält.

### Ausnahmen

Während diese Methode keine Ausnahmen auslöst, kann sie das Promise ablehnen. Dies kann geschehen,
wenn z.B. der Leser, der verwendet wird, um die Daten des Blobs zu holen, eine Ausnahme auslöst. Alle
Ausnahmen, die beim Abrufen der Daten ausgelöst werden, werden in Ablehnungen umgewandelt.

## Verwendungshinweise

Während sie der [`FileReader.readAsArrayBuffer()`](/de/docs/Web/API/FileReader/readAsArrayBuffer)-Methode ähnlich ist,
gibt `arrayBuffer()` ein Promise zurück, anstatt eine ereignisbasierte API zu sein, wie es
bei der Methode des `FileReader`-Interfaces der Fall ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Response.arrayBuffer()`](/de/docs/Web/API/Response/arrayBuffer)
- [Streams API](/de/docs/Web/API/Streams_API)
- [`FileReader.readAsArrayBuffer()`](/de/docs/Web/API/FileReader/readAsArrayBuffer)
