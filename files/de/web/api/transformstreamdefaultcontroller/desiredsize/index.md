---
title: "TransformStreamDefaultController: desiredSize-Eigenschaft"
short-title: desiredSize
slug: Web/API/TransformStreamDefaultController/desiredSize
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die schreibgeschützte **`desiredSize`**-Eigenschaft der [`TransformStreamDefaultController`](/de/docs/Web/API/TransformStreamDefaultController)-Schnittstelle gibt die gewünschte Größe zurück, um die Warteschlange des zugehörigen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zu füllen.

Die interne Warteschlange eines `ReadableStream` enthält Chunks, die eingereiht, aber noch nicht gelesen wurden. Der Browser bestimmt die **gewünschte Größe** für die Füllung des Streams, und dies ist der Wert, der von der `desiredSize`-Eigenschaft zurückgegeben wird.

Wenn die `desiredSize` `0` ist, dann ist die Warteschlange voll. Daher können Sie diese Information nutzen, um [manuell Gegendruck anzuwenden](/de/docs/Web/API/Streams_API/Concepts#backpressure), um die Warteschlange zu verwalten.

## Wert

Die gewünschte Größe.

## Beispiele

Im folgenden Beispiel wird die `desiredSize` in der Konsole protokolliert.

```js
console.log(controller.desiredSize);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
