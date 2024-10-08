---
title: "NodeIterator: referenceNode-Eigenschaft"
short-title: referenceNode
slug: Web/API/NodeIterator/referenceNode
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`NodeIterator.referenceNode`** gibt den
[`Node`](/de/docs/Web/API/Node) zurück, an dem der Iterator verankert ist; wenn neue Knoten eingefügt werden, bleibt der Iterator an den durch diese Eigenschaft angegebenen Referenzknoten verankert.

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
node = nodeIterator.referenceNode;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das Interface, zu dem es gehört: [`NodeIterator`](/de/docs/Web/API/NodeIterator)
