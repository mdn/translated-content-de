---
title: "HTMLMeterElement: min-Eigenschaft"
short-title: min
slug: Web/API/HTMLMeterElement/min
l10n:
  sourceCommit: f36d86d713e8757d5786bbc86eccf123bc1fec67
---

{{ APIRef("HTML DOM") }}

Die **`min`**-Eigenschaft der {{DOMxRef("HTMLMeterElement")}}-Schnittstelle repräsentiert den minimalen Wert des {{htmlelement("meter")}}-Elements als Gleitkommazahl. Sie spiegelt das [`min`](/de/docs/Web/HTML/Element/meter#min)-Attribut des Elements wider, oder `0`, wenn kein `min` definiert ist.

Diese Eigenschaft kann auch direkt gesetzt werden, beispielsweise um einen Standardwert basierend auf einer Bedingung festzulegen.

## Wert

Eine Zahl.

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
console.log(meterElement.min); // 0
++meterElement.min;
console.log(meterElement.min); // 1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("meter")}}
- {{DOMXref("HTMLMeterElement.value")}}
- {{DOMXref("HTMLMeterElement.max")}}
- {{DOMXref("HTMLProgressElement")}}
