---
title: "CSSPseudoElement: Elementeigenschaft"
short-title: Element
slug: Web/API/CSSPseudoElement/element
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef}}{{SeeCompatTable}}

Die **`element`** schreibgeschützte Eigenschaft der
{{DOMxRef('CSSPseudoElement')}}-Schnittstelle gibt eine Referenz auf das Ursprungs-Element
des Pseudo-Elements zurück, mit anderen Worten, auf sein übergeordnetes Element.

## Wert

Ein {{DOMxRef('Element')}}, das das Ursprungs-Element des Pseudo-Elements darstellt.

## Beispiele

Das folgende Beispiel zeigt die Beziehung zwischen
`CSSPseudoElement.element` und {{DOMxRef('Element.pseudo()')}}:

```js
const myElement = document.querySelector("q");
const cssPseudoElement = myElement.pseudo("::after");
const originatingElement = cssPseudoElement.element;

console.log(myElement === originatingElement); // Gibt true aus
console.log(myElement.parentElement === originatingElement); // Gibt false aus
console.log(myElement.lastElementChild === cssPseudoElement); // Gibt false aus
console.log(myElement.lastChild === cssPseudoElement); // Gibt false aus
console.log(myElement.nextElementSibling === cssPseudoElement); // Gibt false aus
console.log(myElement.nextSibling === cssPseudoElement); // Gibt false aus
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{DOMxRef('Element.pseudo()')}}
