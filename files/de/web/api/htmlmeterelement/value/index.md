---
title: "HTMLMeterElement: Eigenschaft value"
short-title: value
slug: Web/API/HTMLMeterElement/value
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Die **`value`**-Eigenschaft des [`HTMLMeterElement`](/de/docs/Web/API/HTMLMeterElement)-Interfaces stellt den aktuellen Wert des {{htmlelement("meter")}}-Elements als Gleitkommazahl dar. Sie spiegelt das [`value`](/de/docs/Web/HTML/Reference/Elements/meter#value)-Attribut des Elements wider. Wenn kein `value` festgelegt ist, ist es der [`HTMLMeterElement.min`](/de/docs/Web/API/HTMLMeterElement/min)-Wert oder `0`, je nachdem, welcher größer ist.

Diese Eigenschaft kann auch direkt gesetzt werden, um beispielsweise einen Standardwert basierend auf einer Bedingung festzulegen.

## Wert

Eine Zahl. Standardmäßig entweder [`HTMLMeterElement.min`](/de/docs/Web/API/HTMLMeterElement/min) oder `0`, je nachdem, welcher größer ist, wenn nicht definiert.

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
