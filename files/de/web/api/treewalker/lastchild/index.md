---
title: "TreeWalker: lastChild()-Methode"
short-title: lastChild()
slug: Web/API/TreeWalker/lastChild
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("DOM") }}

Die **`TreeWalker.lastChild()`**-Methode bewegt den aktuellen [`Node`](/de/docs/Web/API/Node) zum letzten _sichtbaren_ Kindknoten des aktuellen Knotens und gibt das gefundene Kind zurück. Falls kein solches Kind existiert, gibt sie `null` zurück und der aktuelle Knoten bleibt unverändert.

## Syntax

```js-nolint
lastChild()
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
);
const node = treeWalker.lastChild(); // returns the last visible child of the root element
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`TreeWalker`](/de/docs/Web/API/TreeWalker)-Interface, zu dem es gehört.
