---
title: "CSSPseudoElement: type Eigenschaft"
short-title: type
slug: Web/API/CSSPseudoElement/type
l10n:
  sourceCommit: 55fa0e2b797b1358464b42ceb32167675a03ca8d
---

{{APIRef}}{{SeeCompatTable}}

Die **`type`**-Eigenschaft, eine schreibgeschützte Eigenschaft der [`CSSPseudoElement`](/de/docs/Web/API/CSSPseudoElement)-Schnittstelle, gibt den Typ des Pseudo-Elements als Zeichenkette zurück, dargestellt in Form eines [CSS-Selektors](/de/docs/Web/CSS/Guides/Pseudo-elements#selectors).

## Wert

Eine Zeichenkette, die den Typ des durch das `CSSPseudoElement` dargestellten Pseudo-Elements repräsentiert. Mögliche Werte sind:

- {{cssxref("::after")}}
- {{cssxref("::before")}}
- {{cssxref("::marker")}}

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel demonstriert die Beziehung zwischen
`CSSPseudoElement.type` und [`Element.pseudo()`](/de/docs/Web/API/Element/pseudo):

```js
const myElement = document.querySelector("q");
const mySelector = "::after";
const cssPseudoElement = myElement.pseudo(mySelector);
const typeOfPseudoElement = cssPseudoElement.type;

console.log(mySelector === typeOfPseudoElement); // Outputs true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.pseudo()`](/de/docs/Web/API/Element/pseudo)
- [`CSSPseudoElement.pseudo()`](/de/docs/Web/API/CSSPseudoElement/pseudo)
- [Liste von Pseudo-Elementen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#alphabetical_index)
