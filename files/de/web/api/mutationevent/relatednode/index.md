---
title: "MutationEvent: relatedNode-Eigenschaft"
short-title: relatedNode
slug: Web/API/MutationEvent/relatedNode
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("UI Events")}}{{non-standard_header}}

Die schreibgeschützte **`relatedNode`**-Eigenschaft des [`MutationEvent`](/de/docs/Web/API/MutationEvent)-Interfaces gibt einen String zurück, der den mit dem Ereignis verbundenen Knoten angibt, wie z. B. den geänderten Knoten innerhalb des Unterbaums für `DOMSubtreeModified`.

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
