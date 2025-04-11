---
title: "HTMLInputElement: min-Eigenschaft"
short-title: min
slug: Web/API/HTMLInputElement/min
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ApiRef("HTML DOM")}}

Die **`min`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces spiegelt das [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)-Attribut des {{HTMLElement("input")}}-Elements wider, welches im Allgemeinen den minimal gültigen Wert für eine numerische oder datumsbasierte Eingabe definiert. Wenn das Attribut nicht explizit gesetzt ist, ist die `min`-Eigenschaft ein leerer String.

## Wert

Ein String, der den `min`-Wert des Elements darstellt oder ein leerer String, wenn kein `min` explizit gesetzt ist.

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

- {{HTMLElement("input")}} des Typs {{HTMLElement("input/range", "range")}}, {{HTMLElement("input/number", "number")}}, {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, und {{HTMLElement("input/time", "time")}}
- [`HTMLInputElement.max`](/de/docs/Web/API/HTMLInputElement/max)
- [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value)
- [`HTMLInputElement.type`](/de/docs/Web/API/HTMLInputElement/type)
