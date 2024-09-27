---
title: "WheelEvent: deltaX-Eigenschaft"
short-title: deltaX
slug: Web/API/WheelEvent/deltaX
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("UI Events")}}

Die **`WheelEvent.deltaX`** schreibgeschützte Eigenschaft ist ein
`double`, der die horizontale Scrollmenge in der
[`WheelEvent.deltaMode`](/de/docs/Web/API/WheelEvent/deltaMode) Einheit darstellt.

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

- [`wheel`](/de/docs/Web/API/Element/wheel_event)
- [`WheelEvent`](/de/docs/Web/API/WheelEvent)
