---
title: "Range: endOffset-Eigenschaft"
short-title: endOffset
slug: Web/API/Range/endOffset
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

Die **`Range.endOffset`** schreibgeschützte Eigenschaft gibt eine Zahl zurück, die angibt, wo im {{domxref("Range.endContainer")}} der {{domxref("Range")}} endet.

Wenn der `endContainer` ein {{domxref("Node")}} vom Typ {{domxref("Text")}}, {{domxref("Comment")}} oder {{domxref("CDATASection")}} ist, dann ist das Offset die Anzahl der Zeichen vom Beginn des `endContainer` bis zum Grenzpunkt des {{domxref("Range")}}. Für andere {{domxref("Node")}}-Typen ist das `endOffset` die Anzahl der Kindknoten zwischen dem Beginn des `endContainer` und dem Grenzpunkt des {{domxref("Range")}}. Diese Eigenschaft ist schreibgeschützt. Um das `endOffset` eines {{domxref("Range")}} zu ändern, verwenden Sie eine der {{domxref("Range.setEnd")}}-Methoden.

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
