---
title: "CSSPseudoElement: type-Eigenschaft"
short-title: type
slug: Web/API/CSSPseudoElement/type
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef}}{{SeeCompatTable}}

Die **`type`**-Eigenschaft der [`CSSPseudoElement`](/de/docs/Web/API/CSSPseudoElement)-Schnittstelle gibt den Typ des Pseudoelements als Zeichenfolge zurück, dargestellt in der Form eines [CSS-Selectors](/de/docs/Web/CSS/Guides/Pseudo-elements#selectors).

## Wert

Eine Zeichenfolge, die einen der folgenden Werte enthält:

- {{CSSxRef('::before', '"::before"')}}
- {{CSSxRef('::after', '"::after"')}}
- {{CSSxRef('::marker', '"::marker"')}}

## Beispiele

Das folgende Beispiel demonstriert die Beziehung zwischen `CSSPseudoElement.type` und [`Element.pseudo()`](/de/docs/Web/API/Element/pseudo):

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
- [Liste der Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#alphabetical_index)
