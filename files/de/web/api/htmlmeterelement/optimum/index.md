---
title: "HTMLMeterElement: optimum-Eigenschaft"
short-title: optimum
slug: Web/API/HTMLMeterElement/optimum
l10n:
  sourceCommit: f36d86d713e8757d5786bbc86eccf123bc1fec67
---

{{ APIRef("HTML DOM") }}

Die **`optimum`**-Eigenschaft der {{DOMxRef("HTMLMeterElement")}}-Schnittstelle repräsentiert die optimale Grenze des {{htmlelement("meter")}}-Elements als Gleitkommazahl. Sie spiegelt das [`optimum`](/de/docs/Web/HTML/Element/meter#optimum)-Attribut des Elements wider oder den Mittelwert zwischen den `min`- und `max`-Werten, wenn nicht definiert. Der Wert von `optimum` wird durch die `min`- und `max`-Werte begrenzt.

Diese Eigenschaft kann auch direkt gesetzt werden, zum Beispiel um einen Standardwert basierend auf einer Bedingung festzulegen.

## Wert

Eine Zahl. Standardmäßig ist es der Mittelwert zwischen {{DOMxRef("HTMLMeterElement.min")}} und {{DOMxRef("HTMLMeterElement.max")}}, wenn nicht definiert.

## Beispiele

In diesem Beispiel wird kein `optimum`-Wert festgelegt.

```html
<label for="review">Sternebewertung:</label>
<meter id="review" min="0" max="10" low="2" high="8" value="9"></meter>
```

Obwohl nicht explizit definiert, ist das Standard-`optimum` der Mittelwert zwischen `min` und `max`, kann aber auf jeden Wert zwischen `min` und `max`, einschließlich dieser, gesetzt werden.

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
- {{DOMXref("HTMLMeterElement.value")}}
- {{DOMXref("HTMLMeterElement.high")}}
- {{DOMXref("HTMLMeterElement.low")}}
- {{DOMXref("HTMLProgressElement")}}
