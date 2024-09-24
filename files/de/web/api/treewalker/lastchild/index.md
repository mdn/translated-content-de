---
title: "TreeWalker: lastChild()-Methode"
short-title: lastChild()
slug: Web/API/TreeWalker/lastChild
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("DOM") }}

Die **`TreeWalker.lastChild()`**-Methode bewegt den aktuellen {{domxref("Node")}} zum letzten _sichtbaren_ Kind des aktuellen Knotens und gibt das gefundene Kind zurück. Falls kein solches Kind existiert, wird `null` zurückgegeben und der aktuelle Knoten nicht verändert.

## Syntax

```js-nolint
lastChild()
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
);
const node = treeWalker.lastChild(); // gibt das letzte sichtbare Kind des Wurzelelements zurück
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle {{domxref("TreeWalker")}}, zu der sie gehört.
