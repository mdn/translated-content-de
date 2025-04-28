---
title: "ReadableStream: locked-Eigenschaft"
short-title: locked
slug: Web/API/ReadableStream/locked
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die schreibgeschützte **`locked`**-Eigenschaft der [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Schnittstelle gibt zurück, ob der lesbare Stream an einen Leser gebunden ist oder nicht.

Ein lesbarer Stream kann höchstens einen aktiven Leser gleichzeitig haben und ist an diesen Leser gebunden, bis er freigegeben wird. Ein Leser kann mit [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) bezogen und mit der Methode `releaseLock()` des Lesers freigegeben werden.

## Wert

Ein {{Glossary("boolean", "boolean")}}-Wert, der angibt, ob der lesbare Stream gesperrt ist oder nicht.

## Beispiele

```js
const stream = new ReadableStream({
  // …
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

- [`ReadableStream()`](/de/docs/Web/API/ReadableStream/ReadableStream) Konstruktor
- [Verwendung von lesbaren Streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
