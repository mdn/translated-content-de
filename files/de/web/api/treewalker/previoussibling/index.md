---
title: "TreeWalker: Methode previousSibling()"
short-title: previousSibling()
slug: Web/API/TreeWalker/previousSibling
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("DOM") }}

Die **`TreeWalker.previousSibling()`** Methode bewegt den aktuellen
{{domxref("Node")}} zu seinem vorherigen Geschwisterknoten, falls vorhanden, und gibt den gefundenen Geschwisterknoten zurück. Falls es keinen solchen Knoten gibt, wird `null` zurückgegeben und der aktuelle Knoten bleibt unverändert.

## Syntax

```js-nolint
previousSibling()
```

### Parameter

Keine.

### Rückgabewert

Ein {{domxref("Node")}}-Objekt oder `null`.

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

- Die {{domxref("TreeWalker")}}-Schnittstelle, zu der es gehört.
