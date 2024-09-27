---
title: "MutationEvent: newValue-Eigenschaft"
short-title: newValue
slug: Web/API/MutationEvent/newValue
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("UI Events")}}{{Deprecated_Header}}

Die schreibgeschützte Eigenschaft **`newValue`** des [`MutationEvent`](/de/docs/Web/API/MutationEvent)-Interfaces gibt einen String zurück. Bei `DOMAttrModified`-Ereignissen stellt es den neuen Wert des [`Attr`](/de/docs/Web/API/Attr)-Knotens dar. Bei `DOMCharacterDataModified`-Ereignissen enthält es den neuen Wert des [`CharacterData`](/de/docs/Web/API/CharacterData)-Knotens. In allen anderen Fällen wird der leere String (`""`) zurückgegeben.

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
