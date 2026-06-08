---
title: "CSSPseudoElement: element-Eigenschaft"
short-title: element
slug: Web/API/CSSPseudoElement/element
l10n:
  sourceCommit: 55fa0e2b797b1358464b42ceb32167675a03ca8d
---

{{APIRef}}{{SeeCompatTable}}

Die schreibgeschützte **`element`**-Eigenschaft des [`CSSPseudoElement`](/de/docs/Web/API/CSSPseudoElement)-Interfaces gibt eine Referenz auf das letztendliche Ursprungselement des Pseudo-Elements zurück.

Dies unterscheidet sich von der [`CSSPseudoElement.parent`](/de/docs/Web/API/CSSPseudoElement/parent)-Eigenschaft, welche eine Referenz auf das _unmittelbare_ Ursprungselement des Pseudo-Elements zurückgibt: Dies kann entweder ein [`Element`](/de/docs/Web/API/Element) oder ein `CSSPseudoElement` im Fall eines [verschachtelten Pseudo-Elements](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#nesting_pseudo-elements) sein.

## Wert

Ein [`Element`](/de/docs/Web/API/Element), das das letztendliche Ursprungselternelement des Pseudo-Elements darstellt.

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel zeigt die Beziehung zwischen `CSSPseudoElement.element` und [`Element.pseudo()`](/de/docs/Web/API/Element/pseudo):

```js
const myElement = document.querySelector("q");
const cssPseudoElement = myElement.pseudo("::after");
const originatingElement = cssPseudoElement.element;

console.log(myElement === originatingElement); // Outputs true
console.log(myElement.parentElement === originatingElement); // Outputs false
console.log(myElement.lastElementChild === cssPseudoElement); // Outputs false
console.log(myElement.lastChild === cssPseudoElement); // Outputs false
console.log(myElement.nextElementSibling === cssPseudoElement); // Outputs false
console.log(myElement.nextSibling === cssPseudoElement); // Outputs false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSPseudoElement.parent`](/de/docs/Web/API/CSSPseudoElement/parent)
- [`CSSPseudoElement.pseudo()`](/de/docs/Web/API/CSSPseudoElement/pseudo)
- [`Element.pseudo()`](/de/docs/Web/API/Element/pseudo)
