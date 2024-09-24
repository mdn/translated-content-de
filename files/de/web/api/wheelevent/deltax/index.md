---
title: "WheelEvent: deltaX-Eigenschaft"
short-title: deltaX
slug: Web/API/WheelEvent/deltaX
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("UI Events")}}

Die **`WheelEvent.deltaX`** schreibgeschützte Eigenschaft ist ein
`double`, das die horizontale Scrollmenge in der
{{domxref("WheelEvent.deltaMode")}} Einheit darstellt.

## Wert

Eine Zahl.

## Beispiele

```js
const syntheticEvent = new WheelEvent("syntheticWheel", {
  deltaX: 4,
  deltaMode: 0,
});

console.log(syntheticEvent.deltaX);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Element/wheel_event","wheel")}}
- {{domxref("WheelEvent")}}
