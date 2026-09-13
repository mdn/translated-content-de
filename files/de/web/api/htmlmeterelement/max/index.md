---
title: "HTMLMeterElement: max-Eigenschaft"
short-title: max
slug: Web/API/HTMLMeterElement/max
l10n:
  sourceCommit: 870fe25a3e6ed1a44222c52dd8a992b731c1a383
---

{{ APIRef("HTML DOM") }}

Die **`max`**-Eigenschaft der Schnittstelle [`HTMLMeterElement`](/de/docs/Web/API/HTMLMeterElement) repräsentiert den Maximalwert des {{htmlelement("meter")}}-Elements als Gleitkommazahl. Sie entspricht dem Attribut [`max`](/de/docs/Web/HTML/Reference/Elements/meter#max) des Elements oder dem Wert von `min`, wenn kein `max` festgelegt ist, oder `1`, wenn weder `min` noch `max` definiert ist.

Diese Eigenschaft kann auch direkt gesetzt werden, beispielsweise um einen Standardwert basierend auf einer Bedingung festzulegen.

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
