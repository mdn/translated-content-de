---
title: "MutationEvent: prevValue-Eigenschaft"
short-title: prevValue
slug: Web/API/MutationEvent/prevValue
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("UI Events")}}{{non-standard_header}}

Die schreibgeschützte **`prevValue`**-Eigenschaft der [`MutationEvent`](/de/docs/Web/API/MutationEvent)-Schnittstelle gibt einen String zurück. In `DOMAttrModified`-Ereignissen repräsentiert sie den vorherigen Wert des [`Attr`](/de/docs/Web/API/Attr)-Knotens. In `DOMCharacterDataModified`-Ereignissen enthält sie den vorherigen Wert des [`CharacterData`](/de/docs/Web/API/CharacterData)-Knotens. In allen anderen Fällen wird der leere String (`""`) zurückgegeben.

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
