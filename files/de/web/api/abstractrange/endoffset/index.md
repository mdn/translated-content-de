---
title: "AbstractRange: Eigenschaft endOffset"
short-title: endOffset
slug: Web/API/AbstractRange/endOffset
l10n:
  sourceCommit: ae380dd2b211ab497e064d4074ff81e71cb91a00
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`endOffset`** der Schnittstelle [`AbstractRange`](/de/docs/Web/API/AbstractRange) gibt den Offset im Endknoten an, an dem sich die Endposition des Bereichs befindet.

Um die Endposition zu ändern, verwenden Sie die Methode [`Range.setEnd()`](/de/docs/Web/API/Range/setEnd) oder eine ähnliche Methode.

## Wert

Ein ganzzahliger Wert, der angibt, wie viele Zeichen innerhalb des von [`endContainer`](/de/docs/Web/API/AbstractRange/endContainer) angegebenen [`Node`](/de/docs/Web/API/Node) bis zum letzten Zeichen des Bereichs liegen.

Wenn `endContainer` ein [`Node`](/de/docs/Web/API/Node) vom Typ [`Text`](/de/docs/Web/API/Text), [`Comment`](/de/docs/Web/API/Comment) oder [`CDATASection`](/de/docs/Web/API/CDATASection) ist, gibt der Offset die Anzahl der Zeichen vom Anfang von `endContainer` bis zum Begrenzungspunkt des Bereichs an. Bei anderen [`Node`](/de/docs/Web/API/Node)-Typen gibt `endOffset` die Anzahl der Kindknoten zwischen dem Anfang von `endContainer` und dem Begrenzungspunkt des Bereichs an.

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
