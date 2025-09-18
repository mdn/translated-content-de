---
title: "MutationEvent: prevValue-Eigenschaft"
short-title: prevValue
slug: Web/API/MutationEvent/prevValue
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{APIRef("UI Events")}}{{Deprecated_Header}}{{non-standard_header}}

Die schreibgeschützte **`prevValue`**-Eigenschaft des [`MutationEvent`](/de/docs/Web/API/MutationEvent)-Interfaces gibt einen String zurück. In `DOMAttrModified`-Ereignissen stellt sie den vorherigen Wert des [`Attr`](/de/docs/Web/API/Attr)-Knotens dar. In `DOMCharacterDataModified`-Ereignissen enthält sie den vorherigen Wert des [`CharacterData`](/de/docs/Web/API/CharacterData)-Knotens. In allen anderen Fällen wird der leere String (`""`) zurückgegeben.

## Wert

Ein String.

## Beispiele

```js
element.addEventListener("DOMAttrModified", (event) => {
  console.log(event.previousValue);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
