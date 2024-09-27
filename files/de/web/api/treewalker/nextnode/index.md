---
title: "TreeWalker: nextNode() Methode"
short-title: nextNode()
slug: Web/API/TreeWalker/nextNode
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("DOM") }}

Die **`TreeWalker.nextNode()`** Methode bewegt den aktuellen [`Node`](/de/docs/Web/API/Node) zum nächsten _sichtbaren_ Knoten in der Dokumentenreihenfolge und gibt den gefundenen Knoten zurück. Existiert ein solcher Knoten nicht, wird `null` zurückgegeben und der aktuelle Knoten wird nicht geändert.

## Syntax

```js-nolint
nextNode()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Node`](/de/docs/Web/API/Node) Objekt oder `null`.

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
const node = treeWalker.nextNode(); // returns the first child of root, as it is the next node in document order
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`TreeWalker`](/de/docs/Web/API/TreeWalker) Interface, zu dem es gehört.
