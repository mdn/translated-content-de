---
title: "HTMLInputElement: step-Eigenschaft"
short-title: step
slug: Web/API/HTMLInputElement/step
l10n:
  sourceCommit: bc141099823c9ae2e46f560ac674be2bc4118351
---

{{ApiRef("HTML DOM")}}

Die **`step`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces gibt an, in welchen Schritten sich numerische oder datums- und uhrzeitbezogene {{HTMLElement("input")}}-Elemente ändern können. Sie spiegelt das [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut des Elements wider. Gültige Werte umfassen die Zeichenkette `"any"` oder eine Zeichenkette mit einer positiven Gleitkommazahl. Wenn das Attribut nicht explizit gesetzt ist, ist die `step`-Eigenschaft eine leere Zeichenkette.

## Wert

Eine Zeichenkette, die den `step`-Wert des Elements darstellt, oder eine leere Zeichenkette, wenn kein Schritt explizit gesetzt ist.

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
