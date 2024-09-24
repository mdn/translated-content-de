---
title: "ReadableStreamBYOBReader: closed-Eigenschaft"
short-title: closed
slug: Web/API/ReadableStreamBYOBReader/closed
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`closed`** des {{domxref("ReadableStreamBYOBReader")}}-Interfaces gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn der Stream schließt, oder ablehnt, wenn der Stream einen Fehler auslöst oder die Sperre des Lesers freigegeben wird.

Diese Eigenschaft ermöglicht es Ihnen, Code zu schreiben, der auf ein Ende des Streaming-Prozesses reagiert.

## Wert

Ein {{jsxref("Promise")}}.

## Beispiele

Der folgende Code zeigt das Muster zum Umgang mit dem geschlossenen/Fehlerzustand eines BYOBReader.

```js
const reader = stream.getReader({ mode: "byob" });
reader.closed
  .then(() => {
    // Resolved - Code zum Umgang mit dem Schließen des Streams
  })
  .catch(() => {
    // Rejected - Code zum Umgang mit Fehlern
  });
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Webbrowsern

{{Compat}}

## Siehe auch

- {{domxref("ReadableStreamBYOBReader.ReadableStreamBYOBReader", "ReadableStreamBYOBReader()")}} Konstruktor
- [Verwenden von lesbaren Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
