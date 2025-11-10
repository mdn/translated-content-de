---
title: "HTMLMeterElement: low-Eigenschaft"
short-title: low
slug: Web/API/HTMLMeterElement/low
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Die **`low`**-Eigenschaft der [`HTMLMeterElement`](/de/docs/Web/API/HTMLMeterElement)-Schnittstelle repräsentiert die untere Grenze des {{htmlelement("meter")}}-Elements als Gleitkommazahl. Sie spiegelt das [`low`](/de/docs/Web/HTML/Reference/Elements/meter#low)-Attribut des Elements wider oder den Wert von `min`, falls nicht definiert. Der Wert von `low` wird durch die `min`- und `max`-Werte begrenzt.

Diese Eigenschaft kann auch direkt gesetzt werden, um beispielsweise einen Standardwert basierend auf einer bestimmten Bedingung festzulegen.

## Wert

Eine Zahl, die nicht kleiner als [`HTMLMeterElement.min`](/de/docs/Web/API/HTMLMeterElement/min) und nicht größer als [`HTMLMeterElement.max`](/de/docs/Web/API/HTMLMeterElement/max) ist.

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
console.log(meterElement.low); // 15
--meterElement.low;
console.log(meterElement.low); // 14
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("meter")}}
- [`HTMLMeterElement.value`](/de/docs/Web/API/HTMLMeterElement/value)
- [`HTMLMeterElement.min`](/de/docs/Web/API/HTMLMeterElement/min)
- [`HTMLMeterElement.high`](/de/docs/Web/API/HTMLMeterElement/high)
- [`HTMLProgressElement`](/de/docs/Web/API/HTMLProgressElement)
