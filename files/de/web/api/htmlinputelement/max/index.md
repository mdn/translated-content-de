---
title: "HTMLInputElement: max Eigenschaft"
short-title: max
slug: Web/API/HTMLInputElement/max
l10n:
  sourceCommit: 97e0bb9c3087d24d09525a74619660c796cd635e
---

{{ApiRef("HTML DOM")}}

Die **`max`**-Eigenschaft der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle spiegelt das [`max`](/de/docs/Web/HTML/Element/input#max) Attribut des {{HTMLElement("input")}} Elements wider, welches im Allgemeinen den maximal gültigen Wert für eine numerische oder Datum-Zeit-Eingabe definiert. Wenn das Attribut nicht explizit gesetzt ist, ist die `max`-Eigenschaft ein leerer String.

## Wert

Ein String, der den `max`-Wert des Elements repräsentiert, oder ein leerer String, wenn kein `max` explizit gesetzt ist.

## Beispiel

```js
const inputElement = document.querySelector("#time");
console.log(inputElement.max); // the current value of the max attribute
inputElement.max = "18:00:00"; // sets the max value to 6pm
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("input")}} vom Typ {{HTMLElement("input/range", "range")}}, {{HTMLElement("input/number", "number")}}, {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, und {{HTMLElement("input/time", "time")}}
- [`HTMLInputElement.min`](/de/docs/Web/API/HTMLInputElement/min)
- [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value)
- [`HTMLInputElement.type`](/de/docs/Web/API/HTMLInputElement/type)
