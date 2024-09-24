---
title: "Range: endContainer-Eigenschaft"
short-title: endContainer
slug: Web/API/Range/endContainer
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

Die **`Range.endContainer`** Eigenschaft ist eine schreibgeschützte Eigenschaft, die den {{domxref("Node")}} zurückgibt, in dem die {{domxref("Range")}} endet. Um die Endposition eines Knotens zu ändern, verwenden Sie die Methode {{domxref("Range.setEnd()")}} oder eine ähnliche.

## Wert

Ein {{domxref("Node")}}-Objekt.

## Beispiele

```js
const range = document.createRange();

range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);
endRangeNode = range.endContainer;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Das DOM-Interfaces-Index](/de/docs/Web/API/Document_Object_Model)
