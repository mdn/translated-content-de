---
title: "CSSNestedDeclarations: Eigenschaft style"
short-title: style
slug: Web/API/CSSNestedDeclarations/style
l10n:
  sourceCommit: c053b4b3bb0f34736e9f4402d4254830670af723
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`style`**-Eigenschaft der [`CSSNestedDeclarations`](/de/docs/Web/API/CSSNestedDeclarations)-Schnittstelle repräsentiert die Stile, die mit den verschachtelten Regeln verbunden sind.

## Wert

Ein [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Objekt.

Obwohl die `style`-Eigenschaft selbst im Sinne von "nicht ersetzbar" schreibgeschützt ist, können Sie trotzdem direkt der `style`-Eigenschaft zuweisen, was gleichbedeutend mit dem Zuweisen zu ihrer [`cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText)-Eigenschaft ist. Sie können das `CSSStyleProperties`-Objekt auch mithilfe der Methoden [`setProperty()`](/de/docs/Web/API/CSSStyleDeclaration/setProperty) und [`removeProperty()`](/de/docs/Web/API/CSSStyleDeclaration/removeProperty) ändern.

## Beispiele

Dieses Stylesheet enthält eine verschachtelte [`cssRules`](/de/docs/Web/API/CSSRule).

Das erste `console.log` zeigt den Stil auf oberster Ebene, das zweite zeigt die verschachtelte `@media`-Abfrage mit ihrem verschachtelten Stil, und das letzte zeigt den verschachtelten Stil, der nach der `@media`-Abfrage deklariert wird.

```css
.foo {
  font-size: 1.2rem;
  @media screen {
    color: tomato;
    background-color: darkgrey;
  }
  color: black;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].style);
// { "0": "font-size" }
console.log(myRules[0].cssRules[0].cssRules[0].style);
// { "0": "color", "1": "background-color" }
console.log(myRules[0].cssRules[1].style);
// { "0": "color" }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSNestedDeclarations`](/de/docs/Web/API/CSSNestedDeclarations)
- [Die Regel für verschachtelte Deklarationen](/de/docs/Web/CSS/Guides/Nesting/Using#nested_declarations_rule)
