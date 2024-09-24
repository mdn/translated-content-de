---
title: "ReadableStreamDefaultReader: Eigenschaft closed"
short-title: closed
slug: Web/API/ReadableStreamDefaultReader/closed
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`closed`** der
{{domxref("ReadableStreamDefaultReader")}} Schnittstelle gibt ein
{{jsxref("Promise")}} zurück, das erfüllt wird, wenn der Stream geschlossen wird, oder fehlschlägt, wenn der
Stream einen Fehler wirft oder die Sperre des Lesers freigegeben wird. Diese Eigenschaft ermöglicht es Ihnen,
Code zu schreiben, der auf das Ende des Streaming-Prozesses reagiert.

## Wert

Ein {{jsxref("Promise")}}.

## Beispiele

In diesem Ausschnitt wird ein zuvor erstellter Leser abgefragt, um zu sehen, ob der Stream
geschlossen wurde. Wenn er geschlossen ist, wird das Versprechen erfüllt und die Nachricht wird in die
Konsole geloggt.

```js
reader.closed.then(() => {
  console.log("reader closed");
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("ReadableStreamDefaultReader.ReadableStreamDefaultReader", "ReadableStreamDefaultReader()")}} Konstruktor
- [Verwendung von lesbaren Streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
