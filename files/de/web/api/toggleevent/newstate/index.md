---
title: "ToggleEvent: newState-Eigenschaft"
short-title: newState
slug: Web/API/ToggleEvent/newState
l10n:
  sourceCommit: 0df415130c5816ffea5b180c0c440edb712673e1
---

{{APIRef("Popover API")}}

Die **`newState`**-Eigenschaft der [`ToggleEvent`](/de/docs/Web/API/ToggleEvent)-Schnittstelle ist eine schreibgeschützte Zeichenkette, die den Zustand darstellt, zu dem das Element wechselt.

## Wert

Eine Zeichenkette. Mögliche Werte sind `"open"` (das Popover wird angezeigt) oder `"closed"` (das Popover wird versteckt).

## Beispiele

```js
const popover = document.getElementById("mypopover");

// ...

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
