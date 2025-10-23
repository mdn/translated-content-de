---
title: "NodeIterator: whatToShow-Eigenschaft"
short-title: whatToShow
slug: Web/API/NodeIterator/whatToShow
l10n:
  sourceCommit: 30ae43a0c98ab92f750fd571d7a3a8ee8b15b4c0
---

{{APIRef("DOM")}}

Die **`NodeIterator.whatToShow`** schreibgeschützte Eigenschaft stellt eine `unsigned integer` dar. Es handelt sich dabei um eine Bitmaske, die angibt, welche Arten von Knoten vom [`NodeIterator`](/de/docs/Web/API/NodeIterator) zurückgegeben werden sollen.

## Wert

Eine nicht negative Ganzzahl. Für die Liste der möglichen Werte siehe [`document.createNodeIterator()`](/de/docs/Web/API/Document/createNodeIterator#whattoshow).

## Beispiele

```js
const nodeIterator = document.createNodeIterator(
  document.body,
  NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT,
  { acceptNode: (node) => NodeFilter.FILTER_ACCEPT },
);
if (
  nodeIterator.whatToShow & NodeFilter.SHOW_ALL ||
  nodeIterator.whatToShow & NodeFilter.SHOW_COMMENT
) {
  // nodeIterator will show comments
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das Interface, zu dem diese Eigenschaft gehört: [`NodeIterator`](/de/docs/Web/API/NodeIterator).
