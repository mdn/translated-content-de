---
title: "Range: Methode isPointInRange()"
short-title: isPointInRange()
slug: Web/API/Range/isPointInRange
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

Die Methode **`Range.isPointInRange()`** gibt einen Boolean zurück, der anzeigt, ob der gegebene Punkt im {{domxref("Range")}} liegt. Sie gibt `true` zurück, wenn der Punkt (Cursorposition) bei `offset` innerhalb von `ReferenceNode` in diesem Bereich liegt.

## Syntax

```js-nolint
isPointInRange(referenceNode, offset)
```

### Parameter

- `referenceNode`
  - : Der {{domxref("Node")}}, der mit dem {{domxref("Range")}} verglichen werden soll.
- `offset`
  - : Der Offset innerhalb des {{domxref("Node")}}, um den Punkt mit dem {{domxref("Range")}} zu vergleichen.

### Rückgabewert

Ein Boolean.

## Beispiele

```js
range = document.createRange();
range.selectNode(document.getElementsByTagName("div").item(0));
bool = range.isPointInRange(document.getElementsByTagName("p").item(0), 1);
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Das DOM-Schnittstellenverzeichnis](/de/docs/Web/API/Document_Object_Model)
