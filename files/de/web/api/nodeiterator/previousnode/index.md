---
title: "NodeIterator: Methode previousNode()"
short-title: previousNode()
slug: Web/API/NodeIterator/previousNode
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("DOM")}}

Die **`NodeIterator.previousNode()`**-Methode gibt den vorherigen Knoten in der Menge zurück, die durch den [`NodeIterator`](/de/docs/Web/API/NodeIterator) dargestellt wird, und bewegt die Position des Iterators innerhalb der Menge rückwärts.

Diese Methode gibt `null` zurück, wenn der aktuelle Knoten der erste Knoten in der Menge ist.

In alten Browsern, wie in früheren Versionen der Spezifikationen angegeben, kann die Methode den `INVALID_STATE_ERR`-[`DOMException`](/de/docs/Web/API/DOMException) auslösen, wenn diese Methode nach der [`NodeIterator.detach()`](/de/docs/Web/API/NodeIterator/detach)-Methode aufgerufen wird. In neueren Browsern wird dies nie ausgelöst.

## Syntax

```js-nolint
previousNode()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Node`](/de/docs/Web/API/Node), der den Knoten vor dem aktuellen Knoten in der durch diesen `NodeIterator` dargestellten Menge darstellt, oder `null`, wenn der aktuelle Knoten der erste Knoten in der Menge ist.

## Beispiele

```js
const nodeIterator = document.createNodeIterator(
  document.body,
  NodeFilter.SHOW_ELEMENT,
  {
    acceptNode(node) {
      return NodeFilter.FILTER_ACCEPT;
    },
  },
);
currentNode = nodeIterator.nextNode(); // returns the next node
previousNode = nodeIterator.previousNode(); // same result, since we backtracked to the previous node
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, zu der sie gehört: [`NodeIterator`](/de/docs/Web/API/NodeIterator).
