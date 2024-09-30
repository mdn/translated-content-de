---
title: CSS Declaration Block
slug: Web/API/CSS_Object_Model/CSS_Declaration_Block
l10n:
  sourceCommit: b07efa13f8459a44a2cbc7b6cdb3279967565e63
---

{{DefaultAPISidebar("CSSOM")}}

Ein **CSS-Deklarationsblock** ist eine geordnete Sammlung von CSS-Eigenschaften und -Werten. Im DOM wird er als [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) dargestellt.

Jedes Paar von Eigenschaft und Wert wird als [CSS-Deklaration](/de/docs/Web/API/CSS_Object_Model/CSS_Declaration) bezeichnet. Der CSS-Deklarationsblock hat die folgenden zugehörigen Eigenschaften:

- computed flag
  - : Wird gesetzt, wenn das [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt ein berechneter und kein spezifizierter Stil ist. Standardmäßig nicht gesetzt.
- declarations
  - : Die mit diesem Objekt verbundenen [CSS-Deklarationen](/de/docs/Web/API/CSS_Object_Model/CSS_Declaration).
- parent CSS rule
  - : Die [`CSSRule`](/de/docs/Web/API/CSSRule), mit der der CSS-Deklarationsblock verbunden ist, andernfalls null.
- owner node
  - : Das mit dem CSS-Deklarationsblock verbundene [`element`](/de/docs/Web/API/Element), andernfalls null.
- updating flag
  - : Wird gesetzt, wenn der CSS-Deklarationsblock das [`style`](/de/docs/Web/HTML/Global_attributes#style)-Attribut des Eigentümerknotens aktualisiert.

Wenn eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) von einer [CSS Object Model (CSSOM)](/de/docs/Web/API/CSS_Object_Model)-Schnittstelle zurückgegeben wird, sind diese Eigenschaften auf die in der Spezifikation definierten Werte gesetzt.

## Einfaches Beispiel

Das folgende Beispiel zeigt eine CSS-Regel mit einem Deklarationsblock für das {{htmlelement("Heading_Elements","h1")}}-Element. Der CSS-Deklarationsblock sind die Zeilen zwischen den geschweiften Klammern.

```css
h1 {
  margin: 0 auto;
  font-family: "Helvetica Neue", "Arial", sans-serif;
  font-style: italic;
  color: rebeccapurple;
}
```

Wir können eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) zurückgeben, die diesen CSS-Deklarationsblock darstellt, indem wir [`CSSStyleRule.style`](/de/docs/Web/API/CSSStyleRule/style) verwenden.

```js
let myRules = document.styleSheets[0].cssRules;
let rule = myRules[0]; // a CSSStyleRule
console.log(rule.style); // a CSSStyleDeclaration object
```

## Spezifikationen

{{Specifications}}
