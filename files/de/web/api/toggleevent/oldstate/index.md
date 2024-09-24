---
title: "ToggleEvent: oldState-Eigenschaft"
short-title: oldState
slug: Web/API/ToggleEvent/oldState
l10n:
  sourceCommit: 0df415130c5816ffea5b180c0c440edb712673e1
---

{{APIRef("Popover API")}}

Die schreibgeschützte Eigenschaft **`oldState`** der {{domxref("ToggleEvent")}}-Schnittstelle ist ein Zeichenkette, die den Zustand repräsentiert, von dem das Element übergeht.

## Wert

Eine Zeichenkette. Mögliche Werte sind `"open"` (das Popover wechselt von sichtbar zu verborgen) oder `"closed"` (das Popover wechselt von verborgen zu sichtbar).

## Beispiele

```js
const popover = document.getElementById("mypopover");

// ...

popover.addEventListener("beforetoggle", (event) => {
  if (event.oldState === "open") {
    console.log("Popover wird verborgen");
  } else {
    console.log("Popover wird angezeigt");
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Popover API](/de/docs/Web/API/Popover_API)
