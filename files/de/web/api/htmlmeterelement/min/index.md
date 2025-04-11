---
title: "HTMLMeterElement: min-Eigenschaft"
short-title: min
slug: Web/API/HTMLMeterElement/min
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Die **`min`**-Eigenschaft der [`HTMLMeterElement`](/de/docs/Web/API/HTMLMeterElement)-Schnittstelle repräsentiert den minimalen Wert des {{htmlelement("meter")}}-Elements als Gleitkommazahl. Sie spiegelt das [`min`](/de/docs/Web/HTML/Reference/Elements/meter#min)-Attribut des Elements wider oder `0`, wenn kein `min` definiert ist.

Diese Eigenschaft kann auch direkt gesetzt werden, zum Beispiel um einen Standardwert basierend auf einer Bedingung festzulegen.

## Wert

Eine Zahl.

## Beispiele

```html
<label for="fuel">Current fuel level:</label>
<meter
  id="fuel"
  min="0"
  max="100"
  low="15"
  high="66"
  optimum="80"
  value="50"></meter>
```

```js
const meterElement = document.getElementById("fuel");
console.log(meterElement.min); // 0
++meterElement.min;
console.log(meterElement.min); // 1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("meter")}}
- [`HTMLMeterElement.value`](/de/docs/Web/API/HTMLMeterElement/value)
- [`HTMLMeterElement.max`](/de/docs/Web/API/HTMLMeterElement/max)
- [`HTMLProgressElement`](/de/docs/Web/API/HTMLProgressElement)
