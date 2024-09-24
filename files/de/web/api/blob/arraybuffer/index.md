---
title: "Blob: arrayBuffer() Methode"
short-title: arrayBuffer()
slug: Web/API/Blob/arrayBuffer
l10n:
  sourceCommit: 84a9afd94f497d4173bde131731ef6bdf0b6135d
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Die **`arrayBuffer()`** Methode des {{domxref("Blob")}}
Interfaces gibt ein {{jsxref("Promise")}} zurück, das sich mit dem Inhalt des Blobs als
Binärdaten, die in einem {{jsxref("ArrayBuffer")}} enthalten sind, auflöst.

## Syntax

```js-nolint
arrayBuffer()
```

### Parameter

Keine.

### Rückgabewert

Ein Promise, das sich mit einem {{jsxref("ArrayBuffer")}} auflöst, der die Daten des Blobs
in binärer Form enthält.

### Ausnahmen

Obwohl diese Methode keine Ausnahmen auslöst, kann sie das Promise ablehnen. Dies kann beispielsweise passieren, wenn der Reader, der zum Abrufen der Blob-Daten verwendet wird, eine Ausnahme auslöst. Alle Ausnahmen, die beim Abrufen der Daten ausgelöst werden, werden in Ablehnungen umgewandelt.

## Nutzungshinweise

Während sie der Methode {{domxref("FileReader.readAsArrayBuffer()")}} ähnelt, gibt `arrayBuffer()` ein Promise zurück, anstatt eine auf Ereignissen basierende API zu sein, wie es bei der Methode des `FileReader` Interfaces der Fall ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Response.arrayBuffer()")}}
- [Streams API](/de/docs/Web/API/Streams_API)
- {{domxref("FileReader.readAsArrayBuffer()")}}
