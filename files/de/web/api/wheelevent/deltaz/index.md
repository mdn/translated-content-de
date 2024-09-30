---
title: "WheelEvent: deltaZ-Eigenschaft"
short-title: deltaZ
slug: Web/API/WheelEvent/deltaZ
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("UI Events")}}

Die **`WheelEvent.deltaZ`** schreibgeschützte Eigenschaft ist ein
`double`, das die Scrollmenge entlang der z-Achse im
[`WheelEvent.deltaMode`](/de/docs/Web/API/WheelEvent/deltaMode) Einheitswert darstellt.

## Wert

Eine Zahl.

## Beispiele

```js
const syntheticEvent = new WheelEvent("syntheticWheel", {
  deltaZ: 4,
  deltaMode: 0,
});

console.log(syntheticEvent.deltaZ);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`wheel`](/de/docs/Web/API/Element/wheel_event)
- [`WheelEvent`](/de/docs/Web/API/WheelEvent)
