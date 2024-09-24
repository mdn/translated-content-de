---
title: "TreeWalker: parentNode() Methode"
short-title: parentNode()
slug: Web/API/TreeWalker/parentNode
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("DOM") }}

Die **`TreeWalker.parentNode()`**-Methode bewegt den aktuellen
{{domxref("Node")}} zum ersten _sichtbaren_ Vorfahrenknoten in der Dokumentreihenfolge und gibt den gefundenen Knoten zurück. Wenn ein solcher Knoten nicht existiert oder wenn er über dem _Wurzelknoten_ des `TreeWalker` liegt, wird `null` zurückgegeben und der aktuelle Knoten wird nicht geändert.

## Syntax

```js-nolint
parentNode()
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
const node = treeWalker.parentNode(); // gibt null zurück, da kein Vorefahren vorhanden ist
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{domxref("TreeWalker")}} Interface, zu dem es gehört.
