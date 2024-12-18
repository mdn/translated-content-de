---
title: "MutationEvent: relatedNode-Eigenschaft"
short-title: relatedNode
slug: Web/API/MutationEvent/relatedNode
l10n:
  sourceCommit: 8583c1238d297609d6db0623aba9070d5c57f330
---

{{APIRef("UI Events")}}{{Deprecated_Header}}{{non-standard_header}}

Die **`relatedNode`** schreibgeschützte Eigenschaft der [`MutationEvent`](/de/docs/Web/API/MutationEvent)-Schnittstelle gibt einen String zurück, der den mit dem Ereignis verbundenen Knoten angibt, wie zum Beispiel den geänderten Knoten innerhalb des Unterbaums für `DOMSubtreeModified`.

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
