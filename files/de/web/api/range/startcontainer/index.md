---
title: "Range: startContainer-Eigenschaft"
short-title: startContainer
slug: Web/API/Range/startContainer
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

Die **`Range.startContainer`** Leseeigenschaft gibt das [`Node`](/de/docs/Web/API/Node) zurück, innerhalb dessen das `Range` beginnt. Um die Startposition eines Knotens zu ändern, verwenden Sie eine der [`Range.setStart()`](/de/docs/Web/API/Range/setStart)-Methoden.

## Wert

Ein [`Node`](/de/docs/Web/API/Node)-Objekt.

## Beispiele

```js
range = document.createRange();
range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);
startRangeNode = range.startContainer;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Das DOM-Schnittstellenverzeichnis](/de/docs/Web/API/Document_Object_Model)
