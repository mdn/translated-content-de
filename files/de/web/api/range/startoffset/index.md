---
title: "Range: startOffset-Eigenschaft"
short-title: startOffset
slug: Web/API/Range/startOffset
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

Die schreibgeschützte **`Range.startOffset`**-Eigenschaft gibt eine Zahl zurück, die angibt, wo im `startContainer` der `Range` beginnt.

Wenn der `startContainer` ein {{domxref("Node")}} vom Typ {{domxref("Text")}}, {{domxref("Comment")}} oder {{domxref("CDATASection")}} ist, dann ist der Offset die Anzahl der Zeichen vom Anfang des `startContainer` bis zum Randpunkt des {{domxref("Range")}}. Für andere {{domxref("Node")}}-Typen ist der `startOffset` die Anzahl der Kindknoten zwischen dem Anfang des `startContainer` und dem Randpunkt des {{domxref("Range")}}.

Um den `startOffset` eines {{domxref("Range")}} zu ändern, verwenden Sie die Methode {{domxref("Range.setStart")}}.

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
