---
title: "TreeWalker: filter Eigenschaft"
short-title: filter
slug: Web/API/TreeWalker/filter
l10n:
  sourceCommit: 169a9199209be8c6db80e1cd56238456f2641203
---

{{ APIRef("DOM") }}

Die schreibgeschützte Eigenschaft **`TreeWalker.filter`** gibt den `NodeFilter`
zurück, der mit dem {{domxref("TreeWalker")}} assoziiert ist.

Beim Erstellen des `TreeWalker` wird das Filterobjekt als dritter
Parameter übergeben, und seine Methode `acceptNode()` wird bei jedem
einzelnen Knoten aufgerufen, um zu bestimmen, ob er akzeptiert wird oder nicht.

## Wert

Ein `NodeFilter`-Objekt.

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
nodeFilter = treeWalker.filter; // document.body in diesem Fall
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- Die {{domxref("TreeWalker")}}-Schnittstelle, zu der es gehört.
