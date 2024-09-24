---
title: "NodeIterator: Eigenschaft referenceNode"
short-title: referenceNode
slug: Web/API/NodeIterator/referenceNode
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM")}}

Die **`NodeIterator.referenceNode`** schreibgeschützte Eigenschaft gibt den {{domxref("Node")}} zurück, an den der Iterator verankert ist; wenn neue Knoten eingefügt werden, bleibt der Iterator gemäß dieser Eigenschaft an den Referenzknoten verankert.

## Wert

Ein {{domxref("Node")}}.

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
node = nodeIterator.referenceNode;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das Interface, zu dem es gehört: {{domxref("NodeIterator")}}
