---
title: "ReadableStream: locked-Eigenschaft"
short-title: locked
slug: Web/API/ReadableStream/locked
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`locked`** schreibgeschützte Eigenschaft der [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Schnittstelle gibt zurück, ob der lesbare Stream an einen Leser gebunden ist oder nicht.

Ein lesbarer Stream kann jeweils höchstens einen aktiven Leser haben und ist an diesen Leser gebunden, bis er freigegeben wird.
Ein Leser kann mit [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) erworben und mit der `releaseLock()`-Methode des Lesers freigegeben werden.

## Wert

Ein [boolean](/de/docs/Glossary/boolean)-Wert, der angibt, ob der lesbare Stream gesperrt ist oder nicht.

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
