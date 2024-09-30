---
title: "ReadableStreamBYOBReader: closed-Eigenschaft"
short-title: closed
slug: Web/API/ReadableStreamBYOBReader/closed
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`closed`** schreibgeschützte Eigenschaft der [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn der Stream geschlossen wird, oder abgelehnt wird, wenn der Stream einen Fehler auslöst oder das Leseschloss des Readers freigegeben wird.

Diese Eigenschaft ermöglicht es Ihnen, Code zu schreiben, der auf das Ende des Streaming-Prozesses reagiert.

## Wert

Ein {{jsxref("Promise")}}.

## Beispiele

Der folgende Code zeigt das Muster zum Umgang mit dem geschlossen/Fehlerzustand eines BYOBReaders.

```js
const reader = stream.getReader({ mode: "byob" });
reader.closed
  .then(() => {
    // Resolved - code to handle stream closing
  })
  .catch(() => {
    // Rejected - code to handle error
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ReadableStreamBYOBReader()`](/de/docs/Web/API/ReadableStreamBYOBReader/ReadableStreamBYOBReader) Konstruktor
- [Verwendung von lesbaren Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
