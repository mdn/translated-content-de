---
title: "ReadableStream: locked-Eigenschaft"
short-title: locked
slug: Web/API/ReadableStream/locked
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`locked`** schreibgeschützte Eigenschaft der {{domxref("ReadableStream")}}-Schnittstelle gibt an, ob der lesbare Stream mit einem Leser verbunden ist oder nicht.

Ein lesbarer Stream kann höchstens einen aktiven Leser gleichzeitig haben und bleibt bis zur Freigabe an diesen Leser gebunden.
Ein Leser kann mit [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) erworben und mit der `releaseLock()`-Methode des Lesers freigegeben werden.

## Wert

Ein {{Glossary("boolean")}}-Wert, der angibt, ob der lesbare Stream gesperrt ist oder nicht.

## Beispiele

```js
const stream = new ReadableStream({
  // ...
});

const reader = stream.getReader();

stream.locked;
// sollte true zurückgeben, da der Stream an einen Leser gebunden wurde
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("ReadableStream.ReadableStream", "ReadableStream()")}} Konstruktor
- [Verwendung von lesbaren Streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
