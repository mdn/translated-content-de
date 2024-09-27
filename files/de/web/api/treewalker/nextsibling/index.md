---
title: "TreeWalker: nextSibling()-Methode"
short-title: nextSibling()
slug: Web/API/TreeWalker/nextSibling
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("DOM") }}

Die **`TreeWalker.nextSibling()`**-Methode bewegt den aktuellen
[`Node`](/de/docs/Web/API/Node) zu seinem nächsten Geschwisterknoten, falls vorhanden, und gibt das gefundene Geschwister zurück. Wenn es keinen solchen Knoten gibt, wird `null` zurückgegeben und der aktuelle Knoten bleibt unverändert.

## Syntax

```js-nolint
nextSibling()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Node`](/de/docs/Web/API/Node)-Objekt oder `null`.

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
treeWalker.firstChild();
const node = treeWalker.nextSibling(); // returns null if the first child of the root element has no sibling
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`TreeWalker`](/de/docs/Web/API/TreeWalker)-Schnittstelle, zu der es gehört.
