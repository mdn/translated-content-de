---
title: "TreeWalker: Methode nextSibling()"
short-title: nextSibling()
slug: Web/API/TreeWalker/nextSibling
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("DOM") }}

Die **`TreeWalker.nextSibling()`**-Methode verschiebt das aktuelle
{{domxref("Node")}} zu seinem nächsten Geschwisterknoten, falls vorhanden, und gibt das gefundene Geschwisterknoten zurück. Wenn kein solcher Knoten existiert, gibt sie `null` zurück und der aktuelle Knoten bleibt unverändert.

## Syntax

```js-nolint
nextSibling()
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
treeWalker.firstChild();
const node = treeWalker.nextSibling(); // gibt null zurück, wenn das erste Kind des Wurzelelements kein Geschwister hat
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{domxref("TreeWalker")}}-Interface, zu dem es gehört.
