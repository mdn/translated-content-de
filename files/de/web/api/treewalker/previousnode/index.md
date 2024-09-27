---
title: "TreeWalker: previousNode()-Methode"
short-title: previousNode()
slug: Web/API/TreeWalker/previousNode
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("DOM") }}

Die **`TreeWalker.previousNode()`**-Methode bewegt den aktuellen [`Node`](/de/docs/Web/API/Node) zum vorhergehenden _sichtbaren_ Knoten in der Dokumentenreihenfolge und gibt den gefundenen Knoten zurück. Wenn ein solcher Knoten nicht existiert oder er vor dem _Root-Knoten_ liegt, der bei der Objekterstellung definiert wurde, gibt sie `null` zurück und der aktuelle Knoten wird nicht geändert.

## Syntax

```js-nolint
previousNode()
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
const node = treeWalker.previousNode(); // returns null as there is no parent
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`TreeWalker`](/de/docs/Web/API/TreeWalker)-Interface, zu dem es gehört.
