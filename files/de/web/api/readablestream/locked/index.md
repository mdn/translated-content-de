---
title: "ReadableStream: locked-Eigenschaft"
short-title: locked
slug: Web/API/ReadableStream/locked
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die schreibgeschützte **`locked`**-Eigenschaft der [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Schnittstelle gibt an, ob der lesbare Stream an einen Leser gebunden ist oder nicht.

Ein lesbarer Stream kann höchstens einen aktiven Leser gleichzeitig haben und bleibt an diesen Leser gebunden, bis er freigegeben wird. Ein Leser kann durch Verwenden von [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) erhalten und durch die Methode `releaseLock()` des Lesers freigegeben werden.

## Wert

Ein {{Glossary("boolean", "boolean")}}-Wert, der angibt, ob der lesbare Stream gesperrt ist oder nicht.

## Beispiele

```js
const stream = new ReadableStream({
  // ...
});

const reader = stream.getReader();

stream.locked;
// should return true, as the stream has been locked to a reader
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ReadableStream()`](/de/docs/Web/API/ReadableStream/ReadableStream)-Konstruktor
- [Verwendung von lesbaren Streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
