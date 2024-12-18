---
title: "MutationEvent: newValue-Eigenschaft"
short-title: newValue
slug: Web/API/MutationEvent/newValue
l10n:
  sourceCommit: 8583c1238d297609d6db0623aba9070d5c57f330
---

{{APIRef("UI Events")}}{{Deprecated_Header}}{{non-standard_header}}

Die schreibgeschützte **`newValue`**-Eigenschaft des [`MutationEvent`](/de/docs/Web/API/MutationEvent)-Interfaces gibt einen String zurück. In `DOMAttrModified`-Ereignissen stellt sie den neuen Wert des [`Attr`](/de/docs/Web/API/Attr)-Knotens dar. In `DOMCharacterDataModified`-Ereignissen enthält sie den neuen Wert des [`CharacterData`](/de/docs/Web/API/CharacterData)-Knotens. In allen anderen Fällen gibt sie den leeren String (`""`) zurück.

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

## Browser-Kompatibilität

{{Compat}}
