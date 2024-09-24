---
title: "TreeWalker: root-Eigenschaft"
short-title: root
slug: Web/API/TreeWalker/root
l10n:
  sourceCommit: 169a9199209be8c6db80e1cd56238456f2641203
---

{{ APIRef("DOM") }}

Die schreibgeschützte Eigenschaft **`TreeWalker.root`** gibt den Root-{{domxref("Node")}} zurück, den der {{domxref("TreeWalker")}} durchquert.

## Wert

Ein {{domxref("Node")}}-Objekt.

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
  false,
);
root = treeWalker.root; // document.body in diesem Fall
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{domxref("TreeWalker")}}-Schnittstelle.
