---
title: "TreeWalker: currentNode-Eigenschaft"
short-title: currentNode
slug: Web/API/TreeWalker/currentNode
l10n:
  sourceCommit: 732ac4c3e442b1b5ddc5f08ec83d69dead2a04e8
---

{{ APIRef("DOM") }}

Die **`TreeWalker.currentNode`**-Eigenschaft repräsentiert den {{domxref("Node")}}, auf den der {{domxref("TreeWalker")}} derzeit zeigt.

## Wert

Ein {{domxref("Node")}}.

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
root = treeWalker.currentNode; // das Wurzelelement, da es das erste Element ist!
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- Die {{domxref("TreeWalker")}}-Schnittstelle.
