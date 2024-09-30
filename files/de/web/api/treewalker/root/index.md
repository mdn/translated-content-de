---
title: "TreeWalker: root Eigenschaft"
short-title: root
slug: Web/API/TreeWalker/root
l10n:
  sourceCommit: 169a9199209be8c6db80e1cd56238456f2641203
---

{{ APIRef("DOM") }}

Die schreibgeschützte Eigenschaft **`TreeWalker.root`** gibt den Stamm[`Node`](/de/docs/Web/API/Node) zurück, den der [`TreeWalker`](/de/docs/Web/API/TreeWalker) durchläuft.

## Wert

Ein [`Node`](/de/docs/Web/API/Node)-Objekt.

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
root = treeWalker.root; // document.body in this case
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`TreeWalker`](/de/docs/Web/API/TreeWalker)-Interface.
