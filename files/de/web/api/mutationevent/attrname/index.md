---
title: "MutationEvent: attrName-Eigenschaft"
short-title: attrName
slug: Web/API/MutationEvent/attrName
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{APIRef("UI Events")}}{{Deprecated_Header}}{{non-standard_header}}

Die schreibgeschützte **`attrName`**-Eigenschaft der [`MutationEvent`](/de/docs/Web/API/MutationEvent)-Schnittstelle gibt einen String mit dem Namen des Knotens zurück, der durch das `DOMAttrModified`-Ereignis betroffen ist. Für andere Ereignisse hat sie keine Bedeutung und wird dann auf den leeren String (`""`) gesetzt.

## Wert

Ein String.

## Beispiele

```js
element.addEventListener("DOMAttrModified", (event) => {
  console.log(event.attrName);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
