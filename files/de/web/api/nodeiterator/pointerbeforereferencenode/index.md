---
title: "NodeIterator: pointerBeforeReferenceNode Eigenschaft"
short-title: pointerBeforeReferenceNode
slug: Web/API/NodeIterator/pointerBeforeReferenceNode
l10n:
  sourceCommit: 56c76424a5edb45f6716ac4ee48861dac8e7ae38
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`NodeIterator.pointerBeforeReferenceNode`** gibt ein Boolesches Flag zurück, das angibt, ob der `NodeFilter` vor (wenn dieser Wert `true` ist) oder nach (wenn dieser Wert `false` ist) dem Ankerknoten verankert ist, der durch die {{domxref("NodeIterator.referenceNode")}}-Eigenschaft angegeben wird.

## Wert

Ein boolescher Wert.

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
flag = nodeIterator.pointerBeforeReferenceNode;
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- Die Schnittstelle, zu der es gehört: {{domxref("NodeIterator")}}
