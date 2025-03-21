---
title: "CSSNestedDeclarations: style-Eigenschaft"
short-title: style
slug: Web/API/CSSNestedDeclarations/style
l10n:
  sourceCommit: 5e3cb7c4405256c4ad004986bbff622777b664b6
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`style`**-Eigenschaft der [`CSSNestedDeclarations`](/de/docs/Web/API/CSSNestedDeclarations)-Schnittstelle repräsentiert die mit den verschachtelten Regeln verbundenen Stile.

## Wert

Ein Objekt.

## Beispiele

Dieses Stylesheet enthält eine verschachtelte [`cssRules`](/de/docs/Web/API/CSSRule).

Das erste `console.log` zeigt den obersten `style`, das zweite zeigt die verschachtelte `@media`-Abfrage mit ihrem verschachtelten Stil und das letzte zeigt den verschachtelten Stil, der nach der `@media`-Abfrage deklariert wird.

```css
.foo {
  font-size: 1.2rem;
  @media (screen) {
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
- [Die Regel der verschachtelten Deklarationen](/de/docs/Web/CSS/CSS_nesting/Using_CSS_nesting#nested_declarations_rule)
