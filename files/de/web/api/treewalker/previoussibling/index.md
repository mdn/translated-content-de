---
title: "TreeWalker: previousSibling() Methode"
short-title: previousSibling()
slug: Web/API/TreeWalker/previousSibling
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("DOM") }}

Die **`TreeWalker.previousSibling()`** Methode verschiebt das aktuelle [`Node`](/de/docs/Web/API/Node) zu seinem vorherigen Geschwisterknoten, falls vorhanden, und gibt das gefundene Geschwister zurück. Wenn es keinen solchen Knoten gibt, wird `null` zurückgegeben und der aktuelle Knoten bleibt unverändert.

## Syntax

```js-nolint
previousSibling()
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
const node = treeWalker.previousSibling(); // returns null as there is no previous sibling
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`TreeWalker`](/de/docs/Web/API/TreeWalker) Interface, zu dem es gehört.
