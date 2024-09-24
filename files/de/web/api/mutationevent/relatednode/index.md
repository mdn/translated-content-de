---
title: "MutationEvent: relatedNode Eigenschaft"
short-title: relatedNode
slug: Web/API/MutationEvent/relatedNode
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("UI Events")}}{{Deprecated_Header}}

Die **`relatedNode`** schreibgeschützte Eigenschaft der {{domxref("MutationEvent")}}-Schnittstelle gibt einen String zurück, der den Knoten angibt, der mit dem Ereignis in Zusammenhang steht, wie z.B. den Knoten, der innerhalb des Teilbaums für `DOMSubtreeModified` geändert wurde.

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
