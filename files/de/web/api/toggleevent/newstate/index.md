---
title: "ToggleEvent: newState-Eigenschaft"
short-title: newState
slug: Web/API/ToggleEvent/newState
l10n:
  sourceCommit: 0df415130c5816ffea5b180c0c440edb712673e1
---

{{APIRef("Popover API")}}

Die **`newState`**-Eigenschaft der {{domxref("ToggleEvent")}}-Schnittstelle ist eine schreibgeschützte Eigenschaft, die einen String darstellt, der den Zustand angibt, zu dem das Element wechselt.

## Wert

Ein String. Mögliche Werte sind `"open"` (das Popover wird angezeigt) oder `"closed"` (das Popover wird ausgeblendet).

## Beispiele

```js
const popover = document.getElementById("mypopover");

// ...

popover.addEventListener("beforetoggle", (event) => {
  if (event.newState === "open") {
    console.log("Popover ist im Begriff angezeigt zu werden");
  } else {
    console.log("Popover ist im Begriff ausgeblendet zu werden");
  }
});
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- [Popover API](/de/docs/Web/API/Popover_API)
