---
title: "MutationEvent: attrChange-Eigenschaft"
short-title: attrChange
slug: Web/API/MutationEvent/attrChange
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{APIRef("UI Events")}}{{Deprecated_Header}}{{non-standard_header}}

Die **`attrChange`** schreibgeschützte Eigenschaft des [`MutationEvent`](/de/docs/Web/API/MutationEvent)-Interfaces gibt eine Zahl zurück, die angibt, welche Art von Änderung das `DOMAttrModified`-Event ausgelöst hat. Die drei möglichen Werte sind `MODIFICATION` (`1`), `ADDITION` (`2`) oder `REMOVAL` (`3`). Für andere Ereignisse hat diese Eigenschaft keine Bedeutung und wird dann auf `0` gesetzt.

## Wert

Ein Integer: `0`, `1` (`MODIFICATION`), `2` (`ADDITION`) oder `3` (`REMOVAL`).

## Beispiele

```js
element.addEventListener("DOMAttrModified", (event) => {
  console.log(event.attrChange);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
