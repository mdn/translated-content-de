---
title: "TransformStreamDefaultController: desiredSize Eigenschaft"
short-title: desiredSize
slug: Web/API/TransformStreamDefaultController/desiredSize
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`desiredSize`** schreibgeschützte Eigenschaft des {{domxref("TransformStreamDefaultController")}}-Interfaces gibt die gewünschte Größe an, um die Warteschlange des zugeordneten {{domxref("ReadableStream")}} zu füllen.

Die interne Warteschlange eines `ReadableStream` enthält Chunks, die eingereiht, aber noch nicht gelesen wurden. Der Browser bestimmt die **gewünschte Größe**, um den Stream zu füllen, und dieser Wert wird durch die `desiredSize`-Eigenschaft zurückgegeben.

Wenn die `desiredSize` `0` ist, ist die Warteschlange voll. Daher können Sie diese Information verwenden, um [manuell Gegendruck anzuwenden](/de/docs/Web/API/Streams_API/Concepts#backpressure), um die Warteschlange zu verwalten.

## Wert

Die gewünschte Größe.

## Beispiele

Im folgenden Beispiel wird die `desiredSize` in der Konsole protokolliert.

```js
console.log(controller.desiredSize);
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
