---
title: "HTMLInputElement: step-Eigenschaft"
short-title: step
slug: Web/API/HTMLInputElement/step
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ApiRef("HTML DOM")}}

Die **`step`**-Eigenschaft der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle gibt an, in welchen Schritten numerische oder datumsbezogene {{HTMLElement("input")}}-Elemente geändert werden können. Sie spiegelt das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut des Elements wider. Gültige Werte sind der String `"any"` oder ein String, der eine positive Gleitkommazahl enthält. Wenn das Attribut nicht explizit gesetzt ist, ist die `step`-Eigenschaft ein leerer String.

## Wert

Ein String, der den `step`-Wert des Elements repräsentiert oder ein leerer String, wenn kein Schritt explizit gesetzt ist.

## Beispiel

```js
const inputElement = document.querySelector('[type="number"]');
console.log(inputElement.step); // the current value of the step attribute
inputElement.step = 0.1; // sets the step value to "0.1"
inputElement.step = "any"; // sets the step to "any"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("input")}} vom Typ {{HTMLElement("input/range", "range")}}, {{HTMLElement("input/number", "number")}}, {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, und {{HTMLElement("input/time", "time")}}
- [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value)
- [`HTMLInputElement.type`](/de/docs/Web/API/HTMLInputElement/type)
