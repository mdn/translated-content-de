---
title: "MutationEvent: attrChange-Eigenschaft"
short-title: attrChange
slug: Web/API/MutationEvent/attrChange
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("UI Events")}}{{Deprecated_Header}}

Die schreibgeschützte Eigenschaft **`attrChange`** der [`MutationEvent`](/de/docs/Web/API/MutationEvent)-Schnittstelle gibt eine Zahl zurück, die anzeigt, welche Art von Änderung das `DOMAttrModified`-Ereignis ausgelöst hat. Die drei möglichen Werte sind `MODIFICATION` (`1`), `ADDITION` (`2`) oder `REMOVAL` (`3`). Für andere Ereignisse hat dies keine Bedeutung und wird dann auf `0` gesetzt.

## Wert

Ein Ganzzahlwert: `0`, `1` (`MODIFICATION`), `2` (`ADDITION`) oder `3` (`REMOVAL`).

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
