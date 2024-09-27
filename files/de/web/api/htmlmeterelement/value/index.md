---
title: "HTMLMeterElement: value-Eigenschaft"
short-title: value
slug: Web/API/HTMLMeterElement/value
l10n:
  sourceCommit: f36d86d713e8757d5786bbc86eccf123bc1fec67
---

{{ APIRef("HTML DOM") }}

Die **`value`**-Eigenschaft des [`HTMLMeterElement`](/de/docs/Web/API/HTMLMeterElement)-Interfaces repräsentiert den aktuellen Wert des {{htmlelement("meter")}}-Elements als Fließkommazahl. Sie spiegelt das [`value`](/de/docs/Web/HTML/Element/meter#value)-Attribut des Elements wider. Wenn kein `value` gesetzt ist, wird der Wert von [`HTMLMeterElement.min`](/de/docs/Web/API/HTMLMeterElement/min) oder `0` verwendet, je nachdem, welcher höher ist.

Diese Eigenschaft kann auch direkt gesetzt werden, zum Beispiel um einen Standardwert basierend auf einer Bedingung festzulegen.

## Wert

Eine Zahl. Standardmäßig entweder [`HTMLMeterElement.min`](/de/docs/Web/API/HTMLMeterElement/min) oder `0`, je nachdem, welcher höher ist, falls nicht definiert.

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
console.log(meterElement.value); // 50
--meterElement.value;
console.log(meterElement.value); // 49
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("meter")}}
- [`HTMLMeterElement.min`](/de/docs/Web/API/HTMLMeterElement/min)
- [`HTMLProgressElement`](/de/docs/Web/API/HTMLProgressElement)
