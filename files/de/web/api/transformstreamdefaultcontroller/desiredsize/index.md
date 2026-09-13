---
title: "TransformStreamDefaultController: desiredSize-Eigenschaft"
short-title: desiredSize
slug: Web/API/TransformStreamDefaultController/desiredSize
l10n:
  sourceCommit: c16a9b4df8d0fed2512cdee329afdff73d0ff891
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`desiredSize`**-Schreibgeschützte Eigenschaft des [`TransformStreamDefaultController`](/de/docs/Web/API/TransformStreamDefaultController)-Interfaces gibt die gewünschte Größe zurück, um die Warteschlange des zugehörigen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zu füllen.

Die interne Warteschlange eines `ReadableStream` enthält Chunks, die eingereiht, aber noch nicht gelesen wurden. Der Browser bestimmt die **gewünschte Größe**, um den Stream zu füllen, und dieser Wert wird von der `desiredSize`-Eigenschaft zurückgegeben.

Wenn die `desiredSize` `0` ist, dann ist die Warteschlange voll. Daher können Sie diese Information verwenden, um [manuell Gegendruck anzuwenden](/de/docs/Web/API/Streams_API/Concepts#backpressure), um die Warteschlange zu verwalten.

## Wert

Eine Zahl oder `null`.

Die Zahl kann negativ sein, wenn die Warteschlange überfüllt ist. Wenn eine benutzerdefinierte Lesewarteschlangenstrategie verwendet wird, können ihre Chunk-Größen dazu führen, dass die Zahl eine gebrochene Komponente hat. Der Wert ist `null`, wenn die lesbare Seite fehlerhaft ist, und `0`, wenn sie geschlossen ist.

## Beispiele

Im nächsten Beispiel wird die `desiredSize` in die Konsole geloggt.

```js
console.log(controller.desiredSize);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
