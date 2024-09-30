---
title: "NodeIterator: root-Eigenschaft"
short-title: root
slug: Web/API/NodeIterator/root
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`NodeIterator.root`** repräsentiert den
[`Node`](/de/docs/Web/API/Node), der die Wurzel dessen ist, was der [`NodeIterator`](/de/docs/Web/API/NodeIterator)
durchläuft.

## Wert

Ein [`Node`](/de/docs/Web/API/Node).

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
root = nodeIterator.root; // document.body in this case
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das zugehörige Interface: [`NodeIterator`](/de/docs/Web/API/NodeIterator).
