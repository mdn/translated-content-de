---
title: "Range: endOffset-Eigenschaft"
short-title: endOffset
slug: Web/API/Range/endOffset
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

Die schreibgeschützte Eigenschaft **`Range.endOffset`** gibt eine Zahl zurück, die angibt, wo im [`Range.endContainer`](/de/docs/Web/API/Range/endContainer) der [`Range`](/de/docs/Web/API/Range) endet.

Wenn der `endContainer` ein [`Node`](/de/docs/Web/API/Node) vom Typ [`Text`](/de/docs/Web/API/Text), [`Comment`](/de/docs/Web/API/Comment) oder [`CDATASection`](/de/docs/Web/API/CDATASection) ist, dann ist der Offset die Anzahl der Zeichen vom Anfang des `endContainer` bis zum Grenzpunkt des [`Range`](/de/docs/Web/API/Range). Bei anderen [`Node`](/de/docs/Web/API/Node)-Typen ist der `endOffset` die Anzahl der Kindknoten zwischen dem Anfang des `endContainer` und dem Grenzpunkt des [`Range`](/de/docs/Web/API/Range). Diese Eigenschaft ist schreibgeschützt. Um den `endOffset` eines [`Range`](/de/docs/Web/API/Range) zu ändern, verwenden Sie eine der [`Range.setEnd`](/de/docs/Web/API/Range/setEnd)-Methoden.

## Wert

Eine Zahl.

## Beispiele

```js
const range = document.createRange();

range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);
endRangeOffset = range.endOffset;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Das DOM-Schnittstellenverzeichnis](/de/docs/Web/API/Document_Object_Model)
