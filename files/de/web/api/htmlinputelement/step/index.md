---
title: "HTMLInputElement: step-Eigenschaft"
short-title: step
slug: Web/API/HTMLInputElement/step
l10n:
  sourceCommit: bc141099823c9ae2e46f560ac674be2bc4118351
---

{{ApiRef("HTML DOM")}}

Die **`step`**-Eigenschaft der {{domxref("HTMLInputElement")}}-Schnittstelle gibt an, um welchen Schritt numerische oder Datum-Zeit-{{HTMLElement("input")}}-Elemente geändert werden können. Sie spiegelt das [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut des Elements wider. Gültige Werte sind die Zeichenkette `"any"` oder eine Zeichenkette, die eine positive Gleitkommazahl enthält. Wenn das Attribut nicht ausdrücklich gesetzt ist, ist die `step`-Eigenschaft eine leere Zeichenkette.

## Wert

Eine Zeichenkette, die den `step`-Wert des Elements darstellt, oder eine leere Zeichenkette, wenn kein Schritt ausdrücklich festgelegt ist.

## Beispiel

```js
const inputElement = document.querySelector('[type="number"]');
console.log(inputElement.step); // der aktuelle Wert des step-Attributs
inputElement.step = 0.1; // setzt den step-Wert auf "0.1"
inputElement.step = "any"; // setzt den Schritt auf "any"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("input")}} vom Typ {{HTMLElement("input/range", "range")}}, {{HTMLElement("input/number", "number")}}, {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, und {{HTMLElement("input/time", "time")}}
- {{domxref("HTMLInputElement.value")}}
- {{domxref("HTMLInputElement.type")}}
