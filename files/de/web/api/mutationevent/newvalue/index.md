---
title: "MutationEvent: Eigenschaft newValue"
short-title: newValue
slug: Web/API/MutationEvent/newValue
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("UI Events")}}{{Deprecated_Header}}

Die **`newValue`**-Eigenschaft der [`MutationEvent`](/de/docs/Web/API/MutationEvent)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die einen String zurückgibt. Bei `DOMAttrModified`-Ereignissen stellt sie den neuen Wert des [`Attr`](/de/docs/Web/API/Attr)-Knotens dar. Bei `DOMCharacterDataModified`-Ereignissen enthält sie den neuen Wert des [`CharacterData`](/de/docs/Web/API/CharacterData)-Knotens. In allen anderen Fällen gibt sie den leeren String (`""`) zurück.

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
