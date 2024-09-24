---
title: "NodeIterator: nextNode()-Methode"
short-title: nextNode()
slug: Web/API/NodeIterator/nextNode
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("DOM")}}

Die **`NodeIterator.nextNode()`**-Methode gibt den nächsten Knoten in der Menge zurück, die durch den {{domxref("NodeIterator")}} dargestellt wird, und bewegt die Position des Iterators innerhalb der Menge. Der erste Aufruf von `nextNode()` gibt den ersten Knoten in der Menge zurück.

Diese Methode gibt `null` zurück, wenn keine Knoten mehr in der Menge vorhanden sind.

In alten Browsern, wie in alten Versionen der Spezifikationen angegeben, kann die Methode den `INVALID_STATE_ERR` {{domxref("DOMException")}} auslösen, wenn diese Methode nach der {{domxref("NodeIterator.detach()")}}-Methode aufgerufen wird. Neuere Browser werfen diesen Fehler nie.

## Syntax

```js-nolint
nextNode()
```

### Parameter

Keine.

### Rückgabewert

Ein {{domxref("Node")}}, der den Knoten nach dem aktuellen Knoten in der durch diesen `NodeIterator` dargestellten Menge repräsentiert, oder `null`, wenn der aktuelle Knoten der letzte Knoten in der Menge ist.

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
currentNode = nodeIterator.nextNode(); // gibt den nächsten Knoten zurück
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das Interface, zu dem es gehört: {{domxref("NodeIterator")}}.
