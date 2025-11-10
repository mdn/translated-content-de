---
title: "MutationEvent: newValue-Eigenschaft"
short-title: newValue
slug: Web/API/MutationEvent/newValue
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{APIRef("UI Events")}}{{Deprecated_Header}}{{non-standard_header}}

Die schreibgeschützte Eigenschaft **`newValue`** der [`MutationEvent`](/de/docs/Web/API/MutationEvent)-Schnittstelle gibt einen String zurück. In `DOMAttrModified`-Ereignissen stellt sie den neuen Wert des [`Attr`](/de/docs/Web/API/Attr)-Knotens dar. In `DOMCharacterDataModified`-Ereignissen enthält sie den neuen Wert des [`CharacterData`](/de/docs/Web/API/CharacterData)-Knotens. In allen anderen Fällen gibt sie den leeren String (`""`) zurück.

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
