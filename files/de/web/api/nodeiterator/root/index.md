---
title: "NodeIterator: Root-Eigenschaft"
short-title: root
slug: Web/API/NodeIterator/root
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM")}}

Die **`NodeIterator.root`** schreibgeschützte Eigenschaft repräsentiert den
{{DOMxref("Node")}}, der die Wurzel dessen ist, was der {{DOMxref("NodeIterator")}}
durchläuft.

## Wert

Ein {{DOMxref("Node")}}.

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
root = nodeIterator.root; // document.body in diesem Fall
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, zu der es gehört: {{domxref("NodeIterator")}}.
