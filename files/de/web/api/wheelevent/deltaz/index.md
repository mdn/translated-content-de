---
title: "WheelEvent: deltaZ-Eigenschaft"
short-title: deltaZ
slug: Web/API/WheelEvent/deltaZ
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("UI Events")}}

Die schreibgeschützte Eigenschaft **`WheelEvent.deltaZ`** ist ein
`double`, das die Scroll-Menge entlang der z-Achse in der
[`WheelEvent.deltaMode`](/de/docs/Web/API/WheelEvent/deltaMode)-Einheit darstellt.

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
