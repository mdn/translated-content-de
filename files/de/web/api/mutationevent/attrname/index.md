---
title: "MutationEvent: attrName-Eigenschaft"
short-title: attrName
slug: Web/API/MutationEvent/attrName
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("UI Events")}}{{non-standard_header}}

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
