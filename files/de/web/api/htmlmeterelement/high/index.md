---
title: "HTMLMeterElement: high-Eigenschaft"
short-title: high
slug: Web/API/HTMLMeterElement/high
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Die **`high`**-Eigenschaft des [`HTMLMeterElement`](/de/docs/Web/API/HTMLMeterElement)-Interfaces repräsentiert die obere Grenze des {{htmlelement("meter")}}-Elements als Fließkommazahl. Sie spiegelt das [`high`](/de/docs/Web/HTML/Reference/Elements/meter#high)-Attribut des Elements wider oder den Wert von `max`, falls dieser nicht definiert ist. Der Wert von `high` wird durch die Werte von `low` und `max` begrenzt.

Diese Eigenschaft kann auch direkt gesetzt werden, um beispielsweise einen Standardwert basierend auf einer Bedingung festzulegen.

## Wert

Eine Zahl, die nicht kleiner als [`HTMLMeterElement.low`](/de/docs/Web/API/HTMLMeterElement/low) und nicht größer als [`HTMLMeterElement.max`](/de/docs/Web/API/HTMLMeterElement/max) ist.

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
console.log(meterElement.high); // 66
++meterElement.high;
console.log(meterElement.high); // 67
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("meter")}}
- [`HTMLMeterElement.value`](/de/docs/Web/API/HTMLMeterElement/value)
- [`HTMLMeterElement.max`](/de/docs/Web/API/HTMLMeterElement/max)
- [`HTMLMeterElement.low`](/de/docs/Web/API/HTMLMeterElement/low)
- [`HTMLProgressElement`](/de/docs/Web/API/HTMLProgressElement)
