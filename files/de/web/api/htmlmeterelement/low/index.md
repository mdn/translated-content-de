---
title: "HTMLMeterElement: low-Eigenschaft"
short-title: low
slug: Web/API/HTMLMeterElement/low
l10n:
  sourceCommit: f36d86d713e8757d5786bbc86eccf123bc1fec67
---

{{ APIRef("HTML DOM") }}

Die **`low`**-Eigenschaft des [`HTMLMeterElement`](/de/docs/Web/API/HTMLMeterElement)-Interfaces repräsentiert die untere Grenze des {{htmlelement("meter")}}-Elements als Gleitkommazahl. Sie spiegelt das [`low`](/de/docs/Web/HTML/Element/meter#low)-Attribut des Elements wider oder den Wert von `min`, wenn nicht definiert. Der Wert von `low` wird durch die Werte von `min` und `max` begrenzt.

Diese Eigenschaft kann auch direkt gesetzt werden, beispielsweise um einen Standardwert basierend auf einer Bedingung festzulegen.

## Wert

Eine Zahl, die nicht kleiner ist als [`HTMLMeterElement.min`](/de/docs/Web/API/HTMLMeterElement/min) und nicht größer als [`HTMLMeterElement.max`](/de/docs/Web/API/HTMLMeterElement/max).

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
