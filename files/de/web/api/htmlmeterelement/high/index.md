---
title: "HTMLMeterElement: high Eigenschaft"
short-title: high
slug: Web/API/HTMLMeterElement/high
l10n:
  sourceCommit: f36d86d713e8757d5786bbc86eccf123bc1fec67
---

{{ APIRef("HTML DOM") }}

Die **`high`**-Eigenschaft der {{DOMxRef("HTMLMeterElement")}}-Schnittstelle repräsentiert die obere Grenze des {{htmlelement("meter")}}-Elements als Gleitkommazahl. Sie spiegelt das [`high`](/de/docs/Web/HTML/Element/meter#high)-Attribut des Elements wider oder den Wert von `max`, wenn nicht definiert. Der Wert von `high` wird durch die Werte `low` und `max` begrenzt.

Diese Eigenschaft kann auch direkt gesetzt werden, zum Beispiel um einen Standardwert basierend auf einer Bedingung festzulegen.

## Wert

Eine Zahl, die nicht kleiner als {{DOMxRef("HTMLMeterElement.low")}} und nicht größer als {{DOMxRef("HTMLMeterElement.max")}} ist.

## Beispiele

```html
<label for="fuel">Aktueller Kraftstoffstand:</label>
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
- {{DOMXref("HTMLMeterElement.value")}}
- {{DOMXref("HTMLMeterElement.max")}}
- {{DOMXref("HTMLMeterElement.low")}}
- {{DOMXref("HTMLProgressElement")}}
