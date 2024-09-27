---
title: "HTMLMeterElement: optimum-Eigenschaft"
short-title: optimum
slug: Web/API/HTMLMeterElement/optimum
l10n:
  sourceCommit: f36d86d713e8757d5786bbc86eccf123bc1fec67
---

{{ APIRef("HTML DOM") }}

Die **`optimum`**-Eigenschaft des [`HTMLMeterElement`](/de/docs/Web/API/HTMLMeterElement)-Interfaces repräsentiert die optimale Grenze des {{htmlelement("meter")}}-Elements als Gleitkommazahl. Sie spiegelt das [`optimum`](/de/docs/Web/HTML/Element/meter#optimum)-Attribut des Elements wider oder, falls nicht definiert, den Mittelwert zwischen `min`- und `max`-Werten. Der Wert von `optimum` wird durch die `min`- und `max`-Werte begrenzt.

Diese Eigenschaft kann auch direkt gesetzt werden, zum Beispiel, um einen Standardwert basierend auf einer Bedingung festzulegen.

## Wert

Eine Zahl. Standardmäßig der Mittelwert zwischen [`HTMLMeterElement.min`](/de/docs/Web/API/HTMLMeterElement/min) und [`HTMLMeterElement.max`](/de/docs/Web/API/HTMLMeterElement/max), wenn nicht definiert.

## Beispiele

In diesem Beispiel wird kein `optimum`-Wert gesetzt.

```html
<label for="review">Star rating:</label>
<meter id="review" min="0" max="10" low="2" high="8" value="9"></meter>
```

Auch wenn er nicht explizit definiert ist, ist das Standard-`optimum` der Mittelwert zwischen `min` und `max`, kann aber auf jeden Wert zwischen `min` und `max` (einschließlich) gesetzt werden.

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
