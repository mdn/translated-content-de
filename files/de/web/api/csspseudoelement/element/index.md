---
title: "CSSPseudoElement: element-Eigenschaft"
short-title: element
slug: Web/API/CSSPseudoElement/element
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef}}{{SeeCompatTable}}

Die schreibgeschützte **`element`**-Eigenschaft der [`CSSPseudoElement`](/de/docs/Web/API/CSSPseudoElement)-Schnittstelle gibt eine Referenz auf das Ursprungselement des Pseudo-Elements zurück, mit anderen Worten auf sein Eltern-Element.

## Wert

Ein [`Element`](/de/docs/Web/API/Element), das das Ursprungselement des Pseudo-Elements repräsentiert.

## Beispiele

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

- [`Element.pseudo()`](/de/docs/Web/API/Element/pseudo)
