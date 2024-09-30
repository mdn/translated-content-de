---
title: "NodeIterator: Methode previousNode()"
short-title: previousNode()
slug: Web/API/NodeIterator/previousNode
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("DOM")}}

Die **`NodeIterator.previousNode()`**-Methode gibt den vorhergehenden Knoten in der durch den [`NodeIterator`](/de/docs/Web/API/NodeIterator) dargestellten Menge zurück und bewegt die Position des Iterators innerhalb der Menge rückwärts.

Diese Methode gibt `null` zurück, wenn der aktuelle Knoten der erste Knoten in der Menge ist.

In älteren Browsern, wie in älteren Versionen der Spezifikationen angegeben, kann die Methode die Ausnahme `INVALID_STATE_ERR` [`DOMException`](/de/docs/Web/API/DOMException) auslösen, wenn diese Methode nach der Methode [`NodeIterator.detach()`](/de/docs/Web/API/NodeIterator/detach) aufgerufen wird. Aktuelle Browser werfen diese Ausnahme nie.

## Syntax

```js-nolint
previousNode()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Node`](/de/docs/Web/API/Node), der den Knoten vor dem aktuellen Knoten in der durch diesen `NodeIterator` dargestellten Menge repräsentiert, oder `null`, wenn der aktuelle Knoten der erste Knoten in der Menge ist.

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

- Die Schnittstelle, zu der es gehört: [`NodeIterator`](/de/docs/Web/API/NodeIterator).
