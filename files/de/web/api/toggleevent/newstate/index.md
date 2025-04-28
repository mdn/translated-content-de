---
title: "ToggleEvent: newState-Eigenschaft"
short-title: newState
slug: Web/API/ToggleEvent/newState
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("Popover API")}}

Die **`newState`**-Eigenschaft des [`ToggleEvent`](/de/docs/Web/API/ToggleEvent) Interfaces ist eine schreibgeschützte Zeichenkette, die den Zustand darstellt, zu dem das Element wechselt.

## Wert

Eine Zeichenkette. Mögliche Werte sind `"open"` (das Popover wird angezeigt) oder `"closed"` (das Popover wird ausgeblendet).

## Beispiele

```js
const popover = document.getElementById("mypopover");

// …

popover.addEventListener("beforetoggle", (event) => {
  if (event.newState === "open") {
    console.log("Popover is being shown");
  } else {
    console.log("Popover is being hidden");
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Popover API](/de/docs/Web/API/Popover_API)
