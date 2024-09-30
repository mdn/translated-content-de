---
title: "TreeWalker: previousNode() Methode"
short-title: previousNode()
slug: Web/API/TreeWalker/previousNode
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("DOM") }}

Die **`TreeWalker.previousNode()`** Methode bewegt den aktuellen
[`Node`](/de/docs/Web/API/Node) zum vorhergehenden _sichtbaren_ Knoten in der Dokumentreihenfolge und
gibt den gefundenen Knoten zurück. Wenn kein solcher Knoten existiert oder sich dieser vor dem _Wurzelknoten_ befindet, der bei der Erstellung des Objekts definiert wurde, gibt die Methode `null` zurück und der aktuelle Knoten bleibt unverändert.

## Syntax

```js-nolint
previousNode()
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
const node = treeWalker.previousNode(); // returns null as there is no parent
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`TreeWalker`](/de/docs/Web/API/TreeWalker) Interface, zu dem es gehört.
