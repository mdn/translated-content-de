---
title: "CSSPseudoElement: type-Eigenschaft"
short-title: type
slug: Web/API/CSSPseudoElement/type
l10n:
  sourceCommit: f9f48866f02963e752717310b76a70d5bdaf554c
---

{{APIRef}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`type`** der [`CSSPseudoElement`](/de/docs/Web/API/CSSPseudoElement)-Schnittstelle gibt den Typ des Pseudo-Elements als Zeichenkette zurück, dargestellt in Form eines [CSS-Selektors](/de/docs/Web/CSS/CSS_pseudo-elements#selectors).

## Wert

Eine Zeichenkette, die einen der folgenden Werte enthält:

- {{CSSxRef('::before', '"::before"')}}
- {{CSSxRef('::after', '"::after"')}}
- {{CSSxRef('::marker', '"::marker"')}}

## Beispiele

Das folgende Beispiel zeigt die Beziehung zwischen `CSSPseudoElement.type` und [`Element.pseudo()`](/de/docs/Web/API/Element/pseudo):

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
- [Liste von Pseudo-Elementen](/de/docs/Web/CSS/Pseudo-elements#list_of_pseudo-elements)
