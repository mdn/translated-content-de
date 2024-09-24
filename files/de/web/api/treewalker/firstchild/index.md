---
title: "TreeWalker: firstChild()-Methode"
short-title: firstChild()
slug: Web/API/TreeWalker/firstChild
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("DOM") }}

Die **`TreeWalker.firstChild()`**-Methode bewegt den aktuellen
{{domxref("Node")}} zum ersten _sichtbaren_ Kind des aktuellen Knotens und gibt das gefundene Kind zurück. Wenn kein solches Kind existiert, gibt sie `null` zurück und der aktuelle Knoten wird nicht verändert.

## Syntax

```js-nolint
firstChild()
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
const node = treeWalker.firstChild(); // gibt das erste Kind des Wurzelelements zurück oder null, falls keines vorhanden
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das zugehörige {{domxref("TreeWalker")}}-Interface.
