---
title: "NodeIterator: Methode previousNode()"
short-title: previousNode()
slug: Web/API/NodeIterator/previousNode
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("DOM")}}

Die Methode **`NodeIterator.previousNode()`** gibt den vorherigen Knoten in der durch den {{domxref("NodeIterator")}} dargestellten Menge zurück und bewegt den Iterator innerhalb der Menge rückwärts.

Diese Methode gibt `null` zurück, wenn der aktuelle Knoten der erste Knoten in der Menge ist.

In alten Browsern, wie in alten Versionen der Spezifikationen angegeben, kann die Methode den `INVALID_STATE_ERR` {{domxref("DOMException")}} auslösen, wenn diese Methode nach der {{domxref("NodeIterator.detach()")}}-Methode aufgerufen wird. Neuere Browser lösen diesen Fehler nie aus.

## Syntax

```js-nolint
previousNode()
```

### Parameter

Keine.

### Rückgabewert

Ein {{domxref("Node")}}, der den Knoten vor dem aktuellen Knoten in der durch diesen `NodeIterator` dargestellten Menge repräsentiert, oder `null`, wenn der aktuelle Knoten der erste Knoten in der Menge ist.

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
previousNode = nodeIterator.previousNode(); // gleiches Ergebnis, da wir zum vorherigen Knoten zurückgegangen sind
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das zugehörige Interface: {{domxref("NodeIterator")}}.
