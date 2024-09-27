---
title: "HTMLMeterElement: max Eigenschaft"
short-title: max
slug: Web/API/HTMLMeterElement/max
l10n:
  sourceCommit: f36d86d713e8757d5786bbc86eccf123bc1fec67
---

{{ APIRef("HTML DOM") }}

Die **`max`** Eigenschaft der [`HTMLMeterElement`](/de/docs/Web/API/HTMLMeterElement) Schnittstelle repräsentiert den maximalen Wert des {{htmlelement("meter")}} Elements als Gleitkommazahl. Sie spiegelt das [`max`](/de/docs/Web/HTML/Element/meter#max)-Attribut des Elements wider oder den `min`-Wert, wenn kein `max` gesetzt ist, oder `1`, falls weder `min` noch `max` definiert sind.

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
console.log(meterElement.max); // 100
--meterElement.max;
console.log(meterElement.max); // 99
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("meter")}}
- [`HTMLMeterElement.value`](/de/docs/Web/API/HTMLMeterElement/value)
- [`HTMLMeterElement.min`](/de/docs/Web/API/HTMLMeterElement/min)
- [`HTMLProgressElement`](/de/docs/Web/API/HTMLProgressElement)
