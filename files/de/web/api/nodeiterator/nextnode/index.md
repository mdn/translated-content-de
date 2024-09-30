---
title: "NodeIterator: Methode nextNode()"
short-title: nextNode()
slug: Web/API/NodeIterator/nextNode
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("DOM")}}

Die Methode **`NodeIterator.nextNode()`** gibt den nächsten Knoten in der durch den [`NodeIterator`](/de/docs/Web/API/NodeIterator) dargestellten Menge zurück und verschiebt die Position des Iterators innerhalb der Menge. Der erste Aufruf von `nextNode()` gibt den ersten Knoten in der Menge zurück.

Diese Methode gibt `null` zurück, wenn keine Knoten mehr in der Menge vorhanden sind.

In alten Browsern, wie in früheren Versionen der Spezifikationen festgelegt, kann die Methode den `INVALID_STATE_ERR` [`DOMException`](/de/docs/Web/API/DOMException) auslösen, wenn diese Methode nach der Methode [`NodeIterator.detach()`](/de/docs/Web/API/NodeIterator/detach) aufgerufen wird. Aktuelle Browser werfen diesen Fehler jedoch nie.

## Syntax

```js-nolint
nextNode()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Node`](/de/docs/Web/API/Node), der den Knoten nach dem aktuellen Knoten in der durch diesen `NodeIterator` dargestellten Menge repräsentiert, oder `null`, wenn der aktuelle Knoten der letzte Knoten in der Menge ist.

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
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, zu der es gehört: [`NodeIterator`](/de/docs/Web/API/NodeIterator).
