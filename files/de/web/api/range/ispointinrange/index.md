---
title: "Range: isPointInRange()-Methode"
short-title: isPointInRange()
slug: Web/API/Range/isPointInRange
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

Die **`Range.isPointInRange()`**-Methode gibt einen Boolean zurück, der anzeigt, ob der angegebene Punkt im [`Range`](/de/docs/Web/API/Range) liegt. Sie gibt `true` zurück, wenn der Punkt (Cursor-Position) bei `offset` innerhalb des `ReferenceNode` in diesem Bereich liegt.

## Syntax

```js-nolint
isPointInRange(referenceNode, offset)
```

### Parameter

- `referenceNode`
  - : Der [`Node`](/de/docs/Web/API/Node), der mit dem [`Range`](/de/docs/Web/API/Range) verglichen werden soll.
- `offset`
  - : Der Offset innerhalb des [`Node`](/de/docs/Web/API/Node), der mit dem [`Range`](/de/docs/Web/API/Range) verglichen werden soll.

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

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Das DOM-Schnittstellenindex](/de/docs/Web/API/Document_Object_Model)
