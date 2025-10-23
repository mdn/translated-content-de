---
title: "TreeWalker: whatToShow-Eigenschaft"
short-title: whatToShow
slug: Web/API/TreeWalker/whatToShow
l10n:
  sourceCommit: 30ae43a0c98ab92f750fd571d7a3a8ee8b15b4c0
---

{{ APIRef("DOM") }}

Die **`TreeWalker.whatToShow`** schreibgeschützte Eigenschaft gibt eine Bitmaske zurück, die die Typen von [Knoten](/de/docs/Web/API/Node) anzeigt, die angezeigt werden sollen. Nicht übereinstimmende Knoten werden übersprungen, aber ihre Kinder können, falls relevant, einbezogen werden.

## Wert

Eine nicht-negative ganze Zahl. Für die Liste der möglichen Werte siehe [`document.createTreeWalker()`](/de/docs/Web/API/Document/createTreeWalker#whattoshow).

## Beispiele

```js
const treeWalker = document.createTreeWalker(
  document.body,
  NodeFilter.SHOW_ELEMENT + NodeFilter.SHOW_COMMENT + NodeFilter.SHOW_TEXT,
  { acceptNode: (node) => NodeFilter.FILTER_ACCEPT },
  false,
);
if (
  treeWalker.whatToShow === NodeFilter.SHOW_ALL ||
  treeWalker.whatToShow % (NodeFilter.SHOW_COMMENT * 2) >=
    NodeFilter.SHOW_COMMENT
) {
  // treeWalker will show comments
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`TreeWalker`](/de/docs/Web/API/TreeWalker) Interface.
