---
title: "Blob: arrayBuffer()-Methode"
short-title: arrayBuffer()
slug: Web/API/Blob/arrayBuffer
l10n:
  sourceCommit: 84a9afd94f497d4173bde131731ef6bdf0b6135d
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Die **`arrayBuffer()`**-Methode des [`Blob`](/de/docs/Web/API/Blob)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das mit dem Inhalt des Blobs als binäre Daten in einem {{jsxref("ArrayBuffer")}} aufgelöst wird.

## Syntax

```js-nolint
arrayBuffer()
```

### Parameter

Keine.

### Rückgabewert

Ein Promise, das mit einem {{jsxref("ArrayBuffer")}} aufgelöst wird, das die Daten des Blobs in binärer Form enthält.

### Ausnahmen

Obwohl diese Methode keine Ausnahmen auslöst, kann sie das Promise ablehnen. Dies kann zum Beispiel passieren, wenn der Reader, der verwendet wird, um die Blob-Daten abzurufen, eine Ausnahme auslöst. Alle Ausnahmen, die beim Abrufen der Daten auftreten, werden in Ablehnungen umgewandelt.

## Nutzungshinweise

Während die Methode [`FileReader.readAsArrayBuffer()`](/de/docs/Web/API/FileReader/readAsArrayBuffer) ähnlich ist, gibt `arrayBuffer()` ein Promise zurück und ist nicht ereignisbasiert, wie es bei der Methode des `FileReader`-Interfaces der Fall ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Response.arrayBuffer()`](/de/docs/Web/API/Response/arrayBuffer)
- [Streams API](/de/docs/Web/API/Streams_API)
- [`FileReader.readAsArrayBuffer()`](/de/docs/Web/API/FileReader/readAsArrayBuffer)
