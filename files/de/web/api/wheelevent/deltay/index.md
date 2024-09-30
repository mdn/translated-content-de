---
title: "WheelEvent: deltaY-Eigenschaft"
short-title: deltaY
slug: Web/API/WheelEvent/deltaY
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("UI Events")}}

Die **`WheelEvent.deltaY`**-Eigenschaft ist eine schreibgeschützte Eigenschaft, die einen `double` darstellt und die vertikale Scrollmenge in der [`WheelEvent.deltaMode`](/de/docs/Web/API/WheelEvent/deltaMode)-Einheit repräsentiert.

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

- [`wheel`](/de/docs/Web/API/Element/wheel_event)
- [`WheelEvent`](/de/docs/Web/API/WheelEvent)
