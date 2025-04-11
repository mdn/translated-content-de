---
title: "HTMLInputElement: max-Eigenschaft"
short-title: max
slug: Web/API/HTMLInputElement/max
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ApiRef("HTML DOM")}}

Die **`max`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces spiegelt das [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribut des {{HTMLElement("input")}}-Elements wider, welches im Allgemeinen den maximal gültigen Wert für eine numerische oder datumsbezogene Eingabe definiert. Wenn das Attribut nicht explizit gesetzt ist, ist die `max`-Eigenschaft ein leerer String.

## Wert

Ein String, der den `max`-Wert des Elements oder einen leeren String darstellt, wenn kein `max` explizit gesetzt ist.

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
