---
title: "TreeWalker: Methode parentNode()"
short-title: parentNode()
slug: Web/API/TreeWalker/parentNode
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("DOM") }}

Die **`TreeWalker.parentNode()`**-Methode verschiebt das aktuelle
[`Node`](/de/docs/Web/API/Node) zum ersten _sichtbaren_ Vorfahrknoten in der Dokumentreihenfolge
und gibt den gefundenen Knoten zurück. Wenn ein solcher Knoten nicht existiert oder sich oberhalb des
_ROOT-Knotens_ des `TreeWalker` befindet, wird `null` zurückgegeben und der aktuelle
Knoten wird nicht verändert.

## Syntax

```js-nolint
parentNode()
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
const node = treeWalker.parentNode(); // returns null as there is no parent
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`TreeWalker`](/de/docs/Web/API/TreeWalker)-Interface, zu dem es gehört.
