---
title: "ToggleEvent: oldState-Eigenschaft"
short-title: oldState
slug: Web/API/ToggleEvent/oldState
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("Popover API")}}

Die schreibgeschützte Eigenschaft **`oldState`** des [`ToggleEvent`](/de/docs/Web/API/ToggleEvent)-Interfaces ist ein String, der den Zustand darstellt, von dem das Element wechselt.

## Wert

Ein String. Mögliche Werte sind `"open"` (das Popover geht von sichtbar zu versteckt) oder `"closed"` (das Popover geht von versteckt zu sichtbar).

## Beispiele

```js
const popover = document.getElementById("mypopover");

// …

popover.addEventListener("beforetoggle", (event) => {
  if (event.oldState === "open") {
    console.log("Popover is being hidden");
  } else {
    console.log("Popover is being shown");
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Popover API](/de/docs/Web/API/Popover_API)
