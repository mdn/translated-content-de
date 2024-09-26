---
title: "WheelEvent: deltaZ-Eigenschaft"
short-title: deltaZ
slug: Web/API/WheelEvent/deltaZ
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("UI Events")}}

Die **`WheelEvent.deltaZ`** Eigenschaft ist eine schreibgeschützte
`double`, die die Scrollmenge entlang der z-Achse in der Einheit von {{domxref("WheelEvent.deltaMode")}} darstellt.

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

- {{domxref("Element/wheel_event","wheel")}}
- {{domxref("WheelEvent")}}