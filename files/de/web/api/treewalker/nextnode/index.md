---
title: "TreeWalker: nextNode() Methode"
short-title: nextNode()
slug: Web/API/TreeWalker/nextNode
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("DOM") }}

Die **`TreeWalker.nextNode()`**-Methode bewegt den aktuellen
{{domxref("Node")}} zum nächsten _sichtbaren_ Knoten in der Dokumentreihenfolge und gibt den gefundenen Knoten zurück. Wenn ein solcher Knoten nicht existiert, gibt sie `null` zurück und der aktuelle Knoten bleibt unverändert.

## Syntax

```js-nolint
nextNode()
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
const node = treeWalker.nextNode(); // gibt das erste Kind des Stammknotens zurück, da es der nächste Knoten in der Dokumentreihenfolge ist
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- Die {{domxref("TreeWalker")}}-Schnittstelle, zu der sie gehört.
