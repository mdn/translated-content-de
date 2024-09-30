---
title: "TransformStreamDefaultController: desiredSize-Eigenschaft"
short-title: desiredSize
slug: Web/API/TransformStreamDefaultController/desiredSize
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`desiredSize`** des [`TransformStreamDefaultController`](/de/docs/Web/API/TransformStreamDefaultController)-Interfaces gibt die gewünschte Größe zurück, um die Warteschlange des zugehörigen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zu füllen.

Die interne Warteschlange eines `ReadableStream` enthält Chunks, die eingereiht, aber noch nicht gelesen wurden. Der Browser bestimmt die **gewünschte Größe**, um den Stream zu füllen, und dieser Wert wird durch die `desiredSize`-Eigenschaft zurückgegeben.

Ist die `desiredSize` `0`, dann ist die Warteschlange voll. Daher können Sie diese Information verwenden, um [manuell Gegendruck anzuwenden](/de/docs/Web/API/Streams_API/Concepts#backpressure), um die Warteschlange zu verwalten.

## Wert

Die gewünschte Größe.

## Beispiele

Im folgenden Beispiel wird die `desiredSize` in die Konsole protokolliert.

```js
console.log(controller.desiredSize);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
