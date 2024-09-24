---
title: "HTMLInputElement: max-Eigenschaft"
short-title: max
slug: Web/API/HTMLInputElement/max
l10n:
  sourceCommit: 97e0bb9c3087d24d09525a74619660c796cd635e
---

{{ApiRef("HTML DOM")}}

Die **`max`**-Eigenschaft des {{domxref("HTMLInputElement")}}-Interfaces spiegelt das {{HTMLElement("input")}}-Element-Attribut [`max`](/de/docs/Web/HTML/Element/input#max) wider, das im Allgemeinen den maximal gültigen Wert für eine numerische oder datumsbezogene Eingabe definiert. Wenn das Attribut nicht explizit gesetzt ist, ist die `max`-Eigenschaft ein leerer String.

## Wert

Ein String, der den `max`-Wert des Elements repräsentiert oder ein leerer String, wenn kein `max` explizit gesetzt ist.

## Beispiel

```js
const inputElement = document.querySelector("#time");
console.log(inputElement.max); // der aktuelle Wert des max-Attributs
inputElement.max = "18:00:00"; // setzt den max-Wert auf 18:00 Uhr
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("input")}} vom Typ {{HTMLElement("input/range", "range")}}, {{HTMLElement("input/number", "number")}}, {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, und {{HTMLElement("input/time", "time")}}
- {{domxref("HTMLInputElement.min")}}
- {{domxref("HTMLInputElement.value")}}
- {{domxref("HTMLInputElement.type")}}
