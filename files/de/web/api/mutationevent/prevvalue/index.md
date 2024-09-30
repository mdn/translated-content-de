---
title: "MutationEvent: prevValue-Eigenschaft"
short-title: prevValue
slug: Web/API/MutationEvent/prevValue
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("UI Events")}}{{Deprecated_Header}}

Die schreibgeschützte Eigenschaft **`prevValue`** der [`MutationEvent`](/de/docs/Web/API/MutationEvent)-Schnittstelle gibt einen String zurück. Bei `DOMAttrModified`-Ereignissen stellt sie den vorherigen Wert des [`Attr`](/de/docs/Web/API/Attr)-Knotens dar. Bei `DOMCharacterDataModified`-Ereignissen enthält sie den vorherigen Wert des [`CharacterData`](/de/docs/Web/API/CharacterData)-Knotens. In allen anderen Fällen gibt sie den leeren String (`""`) zurück.

## Wert

Ein String.

## Beispiele

```js
element.addEventListener(
  "DOMAttrModified",
  (event) => {
    console.log(event.previousValue);
  },
  false,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
