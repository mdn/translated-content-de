---
title: "TreeWalker: firstChild()-Methode"
short-title: firstChild()
slug: Web/API/TreeWalker/firstChild
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("DOM") }}

Die **`TreeWalker.firstChild()`**-Methode bewegt den aktuellen
[`Node`](/de/docs/Web/API/Node) zum ersten _sichtbaren_ Kind des aktuellen Knotens und gibt
das gefundene Kind zurück. Wenn ein solches Kind nicht existiert, gibt sie `null` zurück und der aktuelle Knoten wird nicht geändert.

## Syntax

```js-nolint
firstChild()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Node`](https://developer.mozilla.org/de/docs/Web/API/Node)-Objekt oder `null`.

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
const node = treeWalker.firstChild(); // returns the first child of the root element, or null if none
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`TreeWalker`](/de/docs/Web/API/TreeWalker)-Interface, zu dem es gehört.
