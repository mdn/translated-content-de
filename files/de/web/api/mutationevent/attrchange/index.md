---
title: "MutationEvent: attrChange Eigenschaft"
short-title: attrChange
slug: Web/API/MutationEvent/attrChange
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("UI Events")}}{{non-standard_header}}

Die schreibgeschützte **`attrChange`** Eigenschaft der [`MutationEvent`](/de/docs/Web/API/MutationEvent)-Schnittstelle gibt eine Zahl zurück, die angibt, welche Art von Änderung das `DOMAttrModified`-Ereignis ausgelöst hat. Die drei möglichen Werte sind `MODIFICATION` (`1`), `ADDITION` (`2`) oder `REMOVAL` (`3`). Für andere Ereignisse hat dies keine Bedeutung und ist dann auf `0` gesetzt.

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
