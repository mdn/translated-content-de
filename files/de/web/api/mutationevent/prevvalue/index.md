---
title: "MutationEvent: prevValue-Eigenschaft"
short-title: prevValue
slug: Web/API/MutationEvent/prevValue
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("UI Events")}}{{Deprecated_Header}}

Die **`prevValue`** schreibgeschützte Eigenschaft des {{domxref("MutationEvent")}}-Interfaces gibt eine Zeichenkette zurück. Bei `DOMAttrModified`-Ereignissen repräsentiert sie den vorherigen Wert des {{domxref("Attr")}}-Knotens. Bei `DOMCharacterDataModified`-Ereignissen enthält sie den vorherigen Wert des {{domxref("CharacterData")}}-Knotens. In allen anderen Fällen gibt sie die leere Zeichenkette (`""`) zurück.

## Wert

Eine Zeichenkette.

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

## Kompatibilität der Browser

{{Compat}}
