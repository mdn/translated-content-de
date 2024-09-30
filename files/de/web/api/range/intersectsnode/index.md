---
title: "Range: intersectsNode() Methode"
short-title: intersectsNode()
slug: Web/API/Range/intersectsNode
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ApiRef("DOM")}}

Die **`Range.intersectsNode()`** Methode gibt einen booleschen Wert zurück, der angibt, ob der gegebene [`Node`](/de/docs/Web/API/Node) den [`Range`](/de/docs/Web/API/Range) schneidet.

## Syntax

```js-nolint
intersectsNode(referenceNode)
```

### Parameter

- `referenceNode`
  - : Der [`Node`](/de/docs/Web/API/Node), mit dem der [`Range`](/de/docs/Web/API/Range) verglichen werden soll.

### Rückgabewert

Ein boolescher Wert.

## Beispiele

```js
const range = document.createRange();

range.selectNode(document.getElementsByTagName("div").item(0));
const intersectingNode = range.intersectsNode(
  document.getElementsByTagName("p").item(0),
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Das DOM-Schnittstellenindex](/de/docs/Web/API/Document_Object_Model)
