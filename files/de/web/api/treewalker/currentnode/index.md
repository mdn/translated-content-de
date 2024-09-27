---
title: "TreeWalker: currentNode-Eigenschaft"
short-title: currentNode
slug: Web/API/TreeWalker/currentNode
l10n:
  sourceCommit: 732ac4c3e442b1b5ddc5f08ec83d69dead2a04e8
---

{{ APIRef("DOM") }}

Die **`TreeWalker.currentNode`**-Eigenschaft repräsentiert den [`Node`](/de/docs/Web/API/Node), auf den der [`TreeWalker`](/de/docs/Web/API/TreeWalker) aktuell zeigt.

## Wert

Ein [`Node`](/de/docs/Web/API/Node).

## Beispiele

```js
const treeWalker = document.createTreeWalker(
  document.body,
  NodeFilter.SHOW_ELEMENT,
  {
    acceptNode(node) {
      return NodeFilter.FILTER_ACCEPT;
    },
  },
);
root = treeWalker.currentNode; // the root element as it is the first element!
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`TreeWalker`](/de/docs/Web/API/TreeWalker)-Schnittstelle.
