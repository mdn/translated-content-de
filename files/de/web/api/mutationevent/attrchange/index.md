---
title: "MutationEvent: `attrChange`-Eigenschaft"
short-title: attrChange
slug: Web/API/MutationEvent/attrChange
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("UI Events")}}{{Deprecated_Header}}

Die **`attrChange`**-Schreibgeschützte Eigenschaft des {{domxref("MutationEvent")}}-Interfaces gibt eine Zahl zurück, die angibt, welche Art von Änderung das `DOMAttrModified`-Ereignis ausgelöst hat. Die drei möglichen Werte sind `MODIFICATION` (`1`), `ADDITION` (`2`) oder `REMOVAL` (`3`). Bei anderen Ereignissen hat sie keine Bedeutung und wird dann auf `0` gesetzt.

## Wert

Ein Integer: `0`, `1` (`MODIFICATION`), `2` (`ADDITION`) oder `3` (`REMOVAL`).

## Beispiele

```js
element.addEventListener(
  "DOMAttrModified",
  (event) => {
    console.log(event.attrChange);
  },
  false,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
