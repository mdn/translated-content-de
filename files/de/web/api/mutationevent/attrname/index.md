---
title: "MutationEvent: attrName-Eigenschaft"
short-title: attrName
slug: Web/API/MutationEvent/attrName
l10n:
  sourceCommit: 8583c1238d297609d6db0623aba9070d5c57f330
---

{{APIRef("UI Events")}}{{Deprecated_Header}}{{non-standard_header}}

Die **`attrName`** schreibgeschützte Eigenschaft des [`MutationEvent`](/de/docs/Web/API/MutationEvent)-Interfaces gibt einen String mit dem Namen des Knotens zurück, der von dem `DOMAttrModified`-Ereignis betroffen ist. Für andere Ereignisse hat sie keine Bedeutung und wird dann auf den leeren String (`""`) gesetzt.

## Wert

Ein String.

## Beispiele

```js
element.addEventListener(
  "DOMAttrModified",
  (event) => {
    console.log(event.attrName);
  },
  false,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
