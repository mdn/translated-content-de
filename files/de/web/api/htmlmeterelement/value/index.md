---
title: "HTMLMeterElement: value-Eigenschaft"
short-title: Wert
slug: Web/API/HTMLMeterElement/value
l10n:
  sourceCommit: f36d86d713e8757d5786bbc86eccf123bc1fec67
---

{{ APIRef("HTML DOM") }}

Die **`value`**-Eigenschaft der {{DOMxRef("HTMLMeterElement")}}-Schnittstelle repräsentiert den aktuellen Wert des {{htmlelement("meter")}}-Elements als Gleitkommazahl. Sie spiegelt das [`value`](/de/docs/Web/HTML/Element/meter#value)-Attribut des Elements wider. Wenn kein `value` festgelegt ist, entspricht sie dem Wert von {{DOMxRef("HTMLMeterElement.min")}} oder `0`, je nachdem, welcher größer ist.

Diese Eigenschaft kann auch direkt gesetzt werden, zum Beispiel um einen Standardwert basierend auf einer bestimmten Bedingung festzulegen.

## Wert

Eine Zahl. Standardmäßig entweder {{DOMxRef("HTMLMeterElement.min")}} oder `0`, je nachdem, welcher größer ist, falls nicht definiert.

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
- {{DOMXref("HTMLMeterElement.min")}}
- {{DOMXref("HTMLProgressElement")}}
