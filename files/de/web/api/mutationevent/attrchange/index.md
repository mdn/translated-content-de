---
title: "MutationEvent: attrChange-Eigenschaft"
short-title: attrChange
slug: Web/API/MutationEvent/attrChange
l10n:
  sourceCommit: 8583c1238d297609d6db0623aba9070d5c57f330
---

{{APIRef("UI Events")}}{{Deprecated_Header}}{{non-standard_header}}

Die schreibgeschützte **`attrChange`**-Eigenschaft der [`MutationEvent`](/de/docs/Web/API/MutationEvent)-Schnittstelle gibt eine Zahl zurück, die angibt, welche Art von Änderung das `DOMAttrModified`-Ereignis ausgelöst hat. Die drei möglichen Werte sind `MODIFICATION` (`1`), `ADDITION` (`2`) oder `REMOVAL` (`3`). Für andere Ereignisse hat sie keine Bedeutung und ist dann auf `0` gesetzt.

## Wert

Ein Integer: `0`, `1` (`MODIFICATION`), `2` (`ADDITION`), oder `3` (`REMOVAL`).

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
