---
title: "MutationEvent: newValue-Eigenschaft"
short-title: newValue
slug: Web/API/MutationEvent/newValue
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("UI Events")}}{{non-standard_header}}

Die schreibgeschützte **`newValue`**-Eigenschaft des [`MutationEvent`](/de/docs/Web/API/MutationEvent)-Interfaces gibt einen String zurück. Bei `DOMAttrModified`-Ereignissen repräsentiert sie den neuen Wert des [`Attr`](/de/docs/Web/API/Attr)-Knotens. Bei `DOMCharacterDataModified`-Ereignissen enthält sie den neuen Wert des [`CharacterData`](/de/docs/Web/API/CharacterData)-Knotens. In allen anderen Fällen gibt sie den leeren String (`""`) zurück.

## Wert

Ein String.

## Beispiele

```js
element.addEventListener("DOMAttrModified", (event) => {
  console.log(event.newValue);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
