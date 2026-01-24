---
title: "AbstractRange: endContainer-Eigenschaft"
short-title: endContainer
slug: Web/API/AbstractRange/endContainer
l10n:
  sourceCommit: f314991b236fce81b712a6df59e4643de0f98449
---

{{APIRef("DOM")}}

Die schreibgeschützte **`endContainer`**-Eigenschaft des [`AbstractRange`](/de/docs/Web/API/AbstractRange)-Interfaces gibt den [`Node`](/de/docs/Web/API/Node) zurück, in dem sich das Ende des Bereichs befindet.

Um die Endposition zu ändern, verwenden Sie die Methode [`Range.setEnd()`](/de/docs/Web/API/Range/setEnd) oder eine ähnliche Methode.

## Wert

Der [`Node`](/de/docs/Web/API/Node), der das letzte Zeichen des Bereichs enthält.

## Beispiel

```js
const range = document.createRange();
range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);

const endRangeNode = range.endContainer;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
