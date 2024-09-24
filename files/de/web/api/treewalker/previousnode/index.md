---
title: "TreeWalker: previousNode() Methode"
short-title: previousNode()
slug: Web/API/TreeWalker/previousNode
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("DOM") }}

Die **`TreeWalker.previousNode()`** Methode verschiebt den aktuellen
{{domxref("Node")}} zum vorhergehenden _sichtbaren_ Knoten in der Dokumentenreihenfolge und
gibt den gefundenen Knoten zurück. Wenn ein solcher Knoten
nicht existiert oder sich vor dem _Wurzelknoten_ befindet, der beim Erstellen des Objekts definiert wurde, gibt es `null` zurück und der aktuelle Knoten wird nicht geändert.

## Syntax

```js-nolint
previousNode()
```

### Parameter

Keine.

### Rückgabewert

Ein {{domxref("Node")}} Objekt oder `null`.

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
const node = treeWalker.previousNode(); // gibt null zurück, da es keinen übergeordneten Knoten gibt
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{domxref("TreeWalker")}} Interface, zu dem es gehört.
