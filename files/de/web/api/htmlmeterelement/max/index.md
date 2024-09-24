---
title: "HTMLMeterElement: max Eigenschaft"
short-title: max
slug: Web/API/HTMLMeterElement/max
l10n:
  sourceCommit: f36d86d713e8757d5786bbc86eccf123bc1fec67
---

{{ APIRef("HTML DOM") }}

Die **`max`** Eigenschaft des {{DOMxRef("HTMLMeterElement")}} Interfaces repräsentiert den Höchstwert des {{htmlelement("meter")}} Elements als Gleitkommazahl. Sie spiegelt das [`max`](/de/docs/Web/HTML/Element/meter#max) Attribut des Elements wider, oder den `min` Wert, wenn kein `max` festgelegt ist, oder `1`, wenn weder `min` noch `max` definiert sind.

Diese Eigenschaft kann auch direkt gesetzt werden, zum Beispiel um basierend auf einer Bedingung einen Standardwert zuzuweisen.

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
- {{DOMXref("HTMLMeterElement.value")}}
- {{DOMXref("HTMLMeterElement.min")}}
- {{DOMXref("HTMLProgressElement")}}
