---
title: "ReadableStreamDefaultReader: closed-Eigenschaft"
short-title: closed
slug: Web/API/ReadableStreamDefaultReader/closed
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die schreibgeschützte **`closed`**-Eigenschaft der [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn der Stream geschlossen wird, oder abgelehnt wird, wenn der Stream einen Fehler auslöst oder die Sperre des Readers freigegeben wird. Diese Eigenschaft ermöglicht es Ihnen, Code zu schreiben, der auf das Ende des Streaming-Prozesses reagiert.

## Wert

Ein {{jsxref("Promise")}}.

## Beispiele

In diesem Codeausschnitt wird ein zuvor erstellter Reader abgefragt, um festzustellen, ob der Stream geschlossen wurde. Wenn er geschlossen ist, wird das Versprechen erfüllt und die Nachricht in die Konsole protokolliert.

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

- [`ReadableStreamDefaultReader()`](/de/docs/Web/API/ReadableStreamDefaultReader/ReadableStreamDefaultReader)-Konstruktor
- [Verwendung von lesbaren Streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
