---
title: "NodeIterator: filter-Eigenschaft"
short-title: filter
slug: Web/API/NodeIterator/filter
l10n:
  sourceCommit: 56c76424a5edb45f6716ac4ee48861dac8e7ae38
---

{{APIRef("DOM")}}

Die **`NodeIterator.filter`**-Eigenschaft ist eine schreibgeschützte Eigenschaft, die ein `NodeFilter`-Objekt zurückgibt. Dieses Objekt implementiert die Methode `acceptNode(node)`, die verwendet wird, um Nodes zu filtern.

Beim Erstellen des {{domxref("NodeIterator")}} wird das Filterobjekt als dritter Parameter übergeben, und die Objektmethode `acceptNode(node)` wird für jeden einzelnen Node aufgerufen, um zu bestimmen, ob er akzeptiert wird oder nicht. Diese Funktion sollte im Falle, dass der Node akzeptiert werden soll, die Konstante `NodeFilter.FILTER_ACCEPT` zurückgeben, und im Falle, dass der Node abgelehnt werden soll, die Konstante `NodeFilter.FILTER_REJECT`.

## Wert

Ein `NodeFilter`-Objekt.

## Beispiele

```js
const nodeIterator = document.createNodeIterator(
  document.body,
  NodeFilter.SHOW_ELEMENT,
  {
    acceptNode(node) {
      return NodeFilter.FILTER_ACCEPT;
    },
  },
);
nodeFilter = nodeIterator.filter;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, zu der diese Eigenschaft gehört: {{domxref("NodeIterator")}}.
