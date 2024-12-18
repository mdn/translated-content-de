---
title: "MutationEvent: prevValue-Eigenschaft"
short-title: prevValue
slug: Web/API/MutationEvent/prevValue
l10n:
  sourceCommit: 8583c1238d297609d6db0623aba9070d5c57f330
---

{{APIRef("UI Events")}}{{Deprecated_Header}}{{non-standard_header}}

Die schreibgeschützte Eigenschaft **`prevValue`** der [`MutationEvent`](/de/docs/Web/API/MutationEvent)-Schnittstelle gibt einen String zurück. Bei `DOMAttrModified`-Ereignissen repräsentiert sie den vorherigen Wert des [`Attr`](/de/docs/Web/API/Attr)-Nodes. Bei `DOMCharacterDataModified`-Ereignissen enthält sie den vorherigen Wert des [`CharacterData`](/de/docs/Web/API/CharacterData)-Nodes. In allen anderen Fällen gibt sie den leeren String (`""`) zurück.

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
