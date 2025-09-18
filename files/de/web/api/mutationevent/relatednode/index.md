---
title: "MutationEvent: relatedNode-Eigenschaft"
short-title: relatedNode
slug: Web/API/MutationEvent/relatedNode
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{APIRef("UI Events")}}{{Deprecated_Header}}{{non-standard_header}}

Die schreibgeschützte **`relatedNode`**-Eigenschaft der [`MutationEvent`](/de/docs/Web/API/MutationEvent)-Schnittstelle gibt einen String zurück, der den Knoten angibt, der mit dem Ereignis in Bezug steht, wie z.B. der geänderte Knoten innerhalb des Unterbaums für `DOMSubtreeModified`.

## Wert

Ein String.

## Beispiele

```js
element.addEventListener("DOMSubtreeModified", (event) => {
  console.log(event.relatedNode);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
