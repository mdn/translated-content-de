---
title: "ToggleEvent: oldState-Eigenschaft"
short-title: oldState
slug: Web/API/ToggleEvent/oldState
l10n:
  sourceCommit: 0df415130c5816ffea5b180c0c440edb712673e1
---

{{APIRef("Popover API")}}

Die **`oldState`**-Eigenschaft der schreibgeschützten [`ToggleEvent`](/de/docs/Web/API/ToggleEvent)-Schnittstelle ist ein String, der den Zustand darstellt, von dem das Element übergeht.

## Wert

Ein String. Mögliche Werte sind `"open"` (das Popover wechselt von sichtbar zu versteckt) oder `"closed"` (das Popover wechselt von versteckt zu sichtbar).

## Beispiele

```js
const popover = document.getElementById("mypopover");

// ...

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
