---
title: "CSSPseudoElement: type-Eigenschaft"
short-title: type
slug: Web/API/CSSPseudoElement/type
l10n:
  sourceCommit: e2819fa744925becc6b6800972c66a046ba8ddc0
---

{{APIRef}}{{SeeCompatTable}}

Die **`type`** schreibgeschützte Eigenschaft des
[`CSSPseudoElement`](/de/docs/Web/API/CSSPseudoElement)-Interfaces gibt den Typ des Pseudoelements als Zeichenfolge zurück, dargestellt in Form eines [CSS-Selectors](/de/docs/Web/CSS/CSS_pseudo-elements#selectors).

## Wert

Eine Zeichenfolge, die einen der folgenden Werte enthält:

- {{CSSxRef('::before', '"::before"')}}
- {{CSSxRef('::after', '"::after"')}}
- {{CSSxRef('::marker', '"::marker"')}}

## Beispiele

Das folgende Beispiel zeigt die Beziehung zwischen
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
- [Liste der Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements#alphabetical_index)
