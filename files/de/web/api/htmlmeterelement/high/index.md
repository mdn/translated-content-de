---
title: "HTMLMeterElement: high-Eigenschaft"
short-title: high
slug: Web/API/HTMLMeterElement/high
l10n:
  sourceCommit: f36d86d713e8757d5786bbc86eccf123bc1fec67
---

{{ APIRef("HTML DOM") }}

Die **`high`**-Eigenschaft des [`HTMLMeterElement`](/de/docs/Web/API/HTMLMeterElement)-Interfaces repräsentiert die obere Grenze des {{htmlelement("meter")}}-Elements als Fließkommazahl. Sie entspricht dem [`high`](/de/docs/Web/HTML/Element/meter#high)-Attribut des Elements oder dem Wert von `max`, wenn nicht definiert. Der Wert von `high` wird durch die Werte `low` und `max` begrenzt.

Diese Eigenschaft kann auch direkt gesetzt werden, z. B. um einen Standardwert basierend auf einer bestimmten Bedingung festzulegen.

## Wert

Eine Zahl, die nicht kleiner ist als [`HTMLMeterElement.low`](/de/docs/Web/API/HTMLMeterElement/low) und nicht größer als [`HTMLMeterElement.max`](/de/docs/Web/API/HTMLMeterElement/max).

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
