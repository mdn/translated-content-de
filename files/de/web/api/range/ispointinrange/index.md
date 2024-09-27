---
title: "Range: isPointInRange()-Methode"
short-title: isPointInRange()
slug: Web/API/Range/isPointInRange
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

Die **`Range.isPointInRange()`**-Methode gibt einen booleschen Wert zurück, der angibt, ob der angegebene Punkt im [`Range`](/de/docs/Web/API/Range) liegt. Sie gibt `true` zurück, wenn der Punkt (Cursorposition) bei `offset` innerhalb von `ReferenceNode` in diesem Bereich liegt.

## Syntax

```js-nolint
isPointInRange(referenceNode, offset)
```

### Parameter

- `referenceNode`
  - : Der [`Node`](/de/docs/Web/API/Node), der mit dem [`Range`](/de/docs/Web/API/Range) verglichen wird.
- `offset`
  - : Der Versatz in [`Node`](/de/docs/Web/API/Node) des zu vergleichenden Punktes mit dem [`Range`](/de/docs/Web/API/Range).

### Rückgabewert

Ein boolescher Wert.

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
