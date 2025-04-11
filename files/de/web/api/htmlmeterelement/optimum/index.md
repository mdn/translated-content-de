---
title: "HTMLMeterElement: optimum-Eigenschaft"
short-title: optimum
slug: Web/API/HTMLMeterElement/optimum
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Die **`optimum`**-Eigenschaft des [`HTMLMeterElement`](/de/docs/Web/API/HTMLMeterElement)-Interfaces repräsentiert die optimale Grenze des {{htmlelement("meter")}}-Elements als Fließkommazahl. Sie spiegelt das [`optimum`](/de/docs/Web/HTML/Reference/Elements/meter#optimum)-Attribut des Elements wider oder liegt in der Mitte zwischen den `min`- und `max`-Werten, wenn nicht definiert. Der Wert von `optimum` wird durch die `min`- und `max`-Werte begrenzt.

Diese Eigenschaft kann auch direkt gesetzt werden, zum Beispiel, um einen Standardwert basierend auf einer Bedingung festzulegen.

## Wert

Eine Zahl. Standardmäßig der Mittelwert zwischen [`HTMLMeterElement.min`](/de/docs/Web/API/HTMLMeterElement/min) und [`HTMLMeterElement.max`](/de/docs/Web/API/HTMLMeterElement/max), wenn nicht definiert.

## Beispiele

In diesem Beispiel wird kein `optimum`-Wert gesetzt.

```html
<label for="review">Star rating:</label>
<meter id="review" min="0" max="10" low="2" high="8" value="9"></meter>
```

Obwohl nicht explizit definiert, ist der Standardwert für `optimum` die Mitte zwischen `min` und `max`, kann jedoch auf jeden Wert zwischen `min` und `max`, einschließlich dieser, eingestellt werden.

```js
const meterElement = document.getElementById("fuel");
console.log(meterElement.optimum); // 5
meterElement.optimum = (meterElement.max + meterElement.optimum) / 2;
console.log(meterElement.optimum); // 7.5
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("meter")}}
- [`HTMLMeterElement.value`](/de/docs/Web/API/HTMLMeterElement/value)
- [`HTMLMeterElement.high`](/de/docs/Web/API/HTMLMeterElement/high)
- [`HTMLMeterElement.low`](/de/docs/Web/API/HTMLMeterElement/low)
- [`HTMLProgressElement`](/de/docs/Web/API/HTMLProgressElement)
