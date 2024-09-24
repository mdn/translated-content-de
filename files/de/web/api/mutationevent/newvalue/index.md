---
title: "MutationEvent: Eigenschaft newValue"
short-title: newValue
slug: Web/API/MutationEvent/newValue
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("UI Events")}}{{Deprecated_Header}}

Die schreibgeschützte Eigenschaft **`newValue`** des {{domxref("MutationEvent")}}-Interfaces gibt einen String zurück. In `DOMAttrModified`-Ereignissen repräsentiert sie den neuen Wert des {{domxref("Attr")}}-Knotens. In `DOMCharacterDataModified`-Ereignissen enthält sie den neuen Wert des {{domxref("CharacterData")}}-Knotens. In allen anderen Fällen gibt sie den leeren String (`""`) zurück.

## Wert

Ein String.

## Beispiele

```js
element.addEventListener(
  "DOMAttrModified",
  (event) => {
    console.log(event.newValue);
  },
  false,
);
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
