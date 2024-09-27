---
title: "Range: startOffset-Eigenschaft"
short-title: startOffset
slug: Web/API/Range/startOffset
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

Die **`Range.startOffset`** schreibgeschützte Eigenschaft gibt eine Zahl zurück, die angibt, wo im `startContainer` der `Range` beginnt.

Wenn der `startContainer` ein [`Node`](/de/docs/Web/API/Node) vom Typ [`Text`](/de/docs/Web/API/Text), [`Comment`](/de/docs/Web/API/Comment) oder [`CDATASection`](/de/docs/Web/API/CDATASection) ist, dann ist der Offset die Anzahl der Zeichen vom Anfang des `startContainer` bis zum Begrenzungspunkt des [`Range`](/de/docs/Web/API/Range). Für andere [`Node`](/de/docs/Web/API/Node)-Typen ist der `startOffset` die Anzahl der Kindknoten zwischen dem Anfang des `startContainer` und dem Begrenzungspunkt des [`Range`](/de/docs/Web/API/Range).

Um den `startOffset` eines [`Range`](/de/docs/Web/API/Range) zu ändern, verwenden Sie die Methode [`Range.setStart`](/de/docs/Web/API/Range/setStart).

## Wert

Eine Zahl.

## Beispiele

```js
const range = document.createRange();
range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);
const startRangeOffset = range.startOffset;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Das DOM-Schnittstellenverzeichnis](/de/docs/Web/API/Document_Object_Model)
