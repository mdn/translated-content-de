---
title: "MutationEvent: attrName-Eigenschaft"
short-title: attrName
slug: Web/API/MutationEvent/attrName
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("UI Events")}}{{Deprecated_Header}}

Die schreibgeschützte Eigenschaft **`attrName`** des [`MutationEvent`](/de/docs/Web/API/MutationEvent)-Interfaces gibt einen String zurück, der den Namen des Knotens enthält, der vom `DOMAttrModified`-Ereignis betroffen ist. Bei anderen Ereignissen hat es keine Bedeutung und wird auf den leeren String (`""`) gesetzt.

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
