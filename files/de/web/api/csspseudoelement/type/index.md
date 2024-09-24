---
title: "CSSPseudoElement: type-Eigenschaft"
short-title: type
slug: Web/API/CSSPseudoElement/type
l10n:
  sourceCommit: f9f48866f02963e752717310b76a70d5bdaf554c
---

{{APIRef}}{{SeeCompatTable}}

Die **`type`**-Eigenschaft der schreibgeschützten
{{DOMxRef('CSSPseudoElement')}}-Schnittstelle gibt den Typ des Pseudoelements als
Zeichenkette zurück, dargestellt in Form eines [CSS-Selectors](/de/docs/Web/CSS/CSS_pseudo-elements#selectors).

## Wert

Eine Zeichenkette, die einen der folgenden Werte enthält:

- {{CSSxRef('::before', '"::before"')}}
- {{CSSxRef('::after', '"::after"')}}
- {{CSSxRef('::marker', '"::marker"')}}

## Beispiele

Das folgende Beispiel veranschaulicht die Beziehung zwischen
`CSSPseudoElement.type` und {{DOMxRef('Element.pseudo()')}}:

```js
const myElement = document.querySelector("q");
const mySelector = "::after";
const cssPseudoElement = myElement.pseudo(mySelector);
const typeOfPseudoElement = cssPseudoElement.type;

console.log(mySelector === typeOfPseudoElement); // Gibt true aus
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{DOMxRef('Element.pseudo()')}}
- [Liste der Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements#list_of_pseudo-elements)
