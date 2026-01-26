---
title: "AbstractRange: startContainer-Eigenschaft"
short-title: startContainer
slug: Web/API/AbstractRange/startContainer
l10n:
  sourceCommit: f314991b236fce81b712a6df59e4643de0f98449
---

{{APIRef("DOM")}}

Die schreibgeschützte **`startContainer`**-Eigenschaft der Schnittstelle [`AbstractRange`](/de/docs/Web/API/AbstractRange) gibt das [`Node`](/de/docs/Web/API/Node) zurück, in dem sich der Anfang des Bereichs befindet.

Um die Anfangsposition zu ändern, verwenden Sie die Methode [`Range.setStart()`](/de/docs/Web/API/Range/setStart) oder eine ähnliche.

## Wert

Das [`Node`](/de/docs/Web/API/Node), in dem sich die Startposition des Bereichs befindet.

## Beispiel

```js
const range = document.createRange();
range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);

const startRangeNode = range.startContainer;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
