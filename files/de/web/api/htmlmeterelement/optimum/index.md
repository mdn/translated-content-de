---
title: "HTMLMeterElement: optimum Eigenschaft"
short-title: optimum
slug: Web/API/HTMLMeterElement/optimum
l10n:
  sourceCommit: f36d86d713e8757d5786bbc86eccf123bc1fec67
---

{{ APIRef("HTML DOM") }}

Die **`optimum`**-Eigenschaft des [`HTMLMeterElement`](/de/docs/Web/API/HTMLMeterElement)-Interfaces stellt die optimale Grenze des {{htmlelement("meter")}}-Elements als Gleitkommazahl dar. Sie spiegelt das [`optimum`](/de/docs/Web/HTML/Element/meter#optimum)-Attribut des Elements wider oder den Mittelwert zwischen `min` und `max`, falls nicht definiert. Der Wert von `optimum` wird durch die `min`- und `max`-Werte begrenzt.

Diese Eigenschaft kann auch direkt gesetzt werden, zum Beispiel um einen Standardwert basierend auf einer bestimmten Bedingung zu definieren.

## Wert

Eine Zahl. Voreingestellt auf den Mittelwert zwischen [`HTMLMeterElement.min`](/de/docs/Web/API/HTMLMeterElement/min) und [`HTMLMeterElement.max`](/de/docs/Web/API/HTMLMeterElement/max), falls nicht definiert.

## Beispiele

In diesem Beispiel ist kein `optimum`-Wert festgelegt.

```html
<label for="review">Star rating:</label>
<meter id="review" min="0" max="10" low="2" high="8" value="9"></meter>
```

Obwohl nicht explizit definiert, ist das Standard-`optimum` der Mittelwert zwischen `min` und `max`, es kann jedoch auf jeden Wert zwischen `min` und `max`, einschließlich der Grenzen, eingestellt werden.

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
