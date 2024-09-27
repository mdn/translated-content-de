---
title: "Range: endContainer-Eigenschaft"
short-title: endContainer
slug: Web/API/Range/endContainer
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

Die schreibgeschützte **`Range.endContainer`**-Eigenschaft gibt das [`Node`](/de/docs/Web/API/Node) zurück, innerhalb dessen der [`Range`](/de/docs/Web/API/Range) endet. Um die Endposition eines Knotens zu ändern, verwenden Sie die Methode [`Range.setEnd()`](/de/docs/Web/API/Range/setEnd) oder eine ähnliche.

## Wert

Ein [`Node`](/de/docs/Web/API/Node)-Objekt.

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

- [Das DOM-Schnittstellenindex](/de/docs/Web/API/Document_Object_Model)
