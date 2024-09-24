---
title: "HTMLInputElement: min-Eigenschaft"
short-title: min
slug: Web/API/HTMLInputElement/min
l10n:
  sourceCommit: 97e0bb9c3087d24d09525a74619660c796cd635e
---

{{ApiRef("HTML DOM")}}

Die **`min`**-Eigenschaft der {{domxref("HTMLInputElement")}}-Schnittstelle spiegelt das [`min`](/de/docs/Web/HTML/Element/input#min)-Attribut des {{HTMLElement("input")}}-Elements wider, das im Allgemeinen den minimal gültigen Wert für eine numerische oder Datum-Zeit-Eingabe definiert. Wenn das Attribut nicht explizit gesetzt ist, ist die `min`-Eigenschaft ein leerer String.

## Wert

Ein String, der den `min`-Wert des Elements oder einen leeren String darstellt, wenn kein `min` explizit festgelegt ist.

## Beispiel

```js
const inputElement = document.querySelector("#range");
console.log(inputElement.min); // der aktuelle Wert des min-Attributs
inputElement.min = 0; // setzt den min-Wert auf "0"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("input")}} vom Typ {{HTMLElement("input/range", "range")}}, {{HTMLElement("input/number", "number")}}, {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, und {{HTMLElement("input/time", "time")}}
- {{domxref("HTMLInputElement.max")}}
- {{domxref("HTMLInputElement.value")}}
- {{domxref("HTMLInputElement.type")}}
