---
title: "NodeIterator: filter-Eigenschaft"
short-title: filter
slug: Web/API/NodeIterator/filter
l10n:
  sourceCommit: 56c76424a5edb45f6716ac4ee48861dac8e7ae38
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`NodeIterator.filter`** gibt ein `NodeFilter`-Objekt zurück, das ein Objekt ist, welches eine `acceptNode(node)`-Methode implementiert, um Knoten zu filtern.

Beim Erstellen des [`NodeIterator`](/de/docs/Web/API/NodeIterator) wird das Filterobjekt als dritter Parameter übergeben, und die Objektmethode `acceptNode(node)` wird für jeden einzelnen Knoten aufgerufen, um zu bestimmen, ob er akzeptiert werden soll oder nicht. Diese Funktion sollte die Konstante `NodeFilter.FILTER_ACCEPT` zurückgeben, wenn der Knoten akzeptiert werden soll, und `NodeFilter.FILTER_REJECT`, wenn der Knoten abgelehnt werden soll.

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

- Die Schnittstelle, zu der diese Eigenschaft gehört: [`NodeIterator`](/de/docs/Web/API/NodeIterator).
