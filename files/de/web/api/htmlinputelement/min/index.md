---
title: "HTMLInputElement: min-Eigenschaft"
short-title: min
slug: Web/API/HTMLInputElement/min
l10n:
  sourceCommit: 97e0bb9c3087d24d09525a74619660c796cd635e
---

{{ApiRef("HTML DOM")}}

Die **`min`**-Eigenschaft der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle spiegelt das `min`-Attribut des {{HTMLElement("input")}}-Elements wider, das im Allgemeinen den minimal gültigen Wert für eine numerische oder zeitliche Eingabe definiert. Wenn das Attribut nicht explizit gesetzt ist, ist die `min`-Eigenschaft ein leerer String.

## Wert

Ein String, der den `min`-Wert des Elements darstellt, oder ein leerer String, wenn kein `min` explizit gesetzt ist.

## Beispiel

```js
const inputElement = document.querySelector("#range");
console.log(inputElement.min); // the current value of the min attribute
inputElement.min = 0; // sets the min value to "0"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("input")}} vom Typ {{HTMLElement("input/range", "range")}}, {{HTMLElement("input/number", "number")}}, {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, und {{HTMLElement("input/time", "time")}}
- [`HTMLInputElement.max`](/de/docs/Web/API/HTMLInputElement/max)
- [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value)
- [`HTMLInputElement.type`](/de/docs/Web/API/HTMLInputElement/type)
