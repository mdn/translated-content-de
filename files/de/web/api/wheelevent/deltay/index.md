---
title: "WheelEvent: deltaY-Eigenschaft"
short-title: deltaY
slug: Web/API/WheelEvent/deltaY
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("UI Events")}}

Die schreibgeschützte **`WheelEvent.deltaY`**-Eigenschaft ist ein
`double`, das die vertikale Scrollmenge in der
{{domxref("WheelEvent.deltaMode")}}-Einheit darstellt.

## Wert

Eine Zahl.

## Beispiele

```js
const syntheticEvent = new WheelEvent("syntheticWheel", {
  deltaY: 4,
  deltaMode: 0,
});

console.log(syntheticEvent.deltaY);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Element/wheel_event","wheel")}}
- {{domxref("WheelEvent")}}
