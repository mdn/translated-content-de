---
title: "AbstractRange: endOffset-Eigenschaft"
short-title: endOffset
slug: Web/API/AbstractRange/endOffset
l10n:
  sourceCommit: f314991b236fce81b712a6df59e4643de0f98449
---

{{APIRef("DOM")}}

Die **`endOffset`**-Eigenschaft der [`AbstractRange`](/de/docs/Web/API/AbstractRange)-Schnittstelle gibt den Offset in das Endknoten der Endposition des Bereichs zurück.

Um die Endposition zu ändern, verwenden Sie die Methode [`Range.setEnd()`](/de/docs/Web/API/Range/setEnd) oder eine ähnliche.

## Wert

Ein ganzzahliger Wert, der die Anzahl der Zeichen in den durch [`endContainer`](/de/docs/Web/API/AbstractRange/endContainer) angegebenen [`Node`](/de/docs/Web/API/Node) angibt, an dem sich das letzte Zeichen des Bereichs befindet.

Wenn der `endContainer` ein [`Node`](/de/docs/Web/API/Node) vom Typ [`Text`](/de/docs/Web/API/Text), [`Comment`](/de/docs/Web/API/Comment) oder [`CDATASection`](/de/docs/Web/API/CDATASection) ist, dann ist der Offset die Anzahl der Zeichen vom Beginn des `endContainer` bis zum Grenzpunkt des Bereichs. Bei anderen [`Node`](/de/docs/Web/API/Node)-Typen ist das `endOffset` die Anzahl der Kindknoten zwischen dem Beginn des `endContainer` und dem Grenzpunkt des Bereichs.

## Beispiel

```js
const range = document.createRange();
range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);

const endRangeOffset = range.endOffset;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
