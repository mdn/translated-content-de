---
title: "MutationEvent: relatedNode-Eigenschaft"
short-title: relatedNode
slug: Web/API/MutationEvent/relatedNode
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("UI Events")}}{{Deprecated_Header}}

Die **`relatedNode`**-Eigenschaft des schreibgeschützten [`MutationEvent`](/de/docs/Web/API/MutationEvent)-Interfaces gibt einen String zurück, der den Knoten bezeichnet, der mit dem Ereignis in Beziehung steht, wie der geänderte Knoten innerhalb des Unterbaums für `DOMSubtreeModified`.

## Wert

Ein String.

## Beispiele

```js
element.addEventListener(
  "DOMSubtreeModified",
  (event) => {
    console.log(event.relatedNode);
  },
  false,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
