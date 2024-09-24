---
title: CSS-Deklarationsblock
slug: Web/API/CSS_Object_Model/CSS_Declaration_Block
l10n:
  sourceCommit: d3cdafcdb4d22e5c55771501e7c80451a96aa032
---

{{ APIRef("CSSOM") }}

Ein **CSS-Deklarationsblock** ist eine geordnete Sammlung von CSS-Eigenschaften und -Werten. Im DOM wird er als {{domxref("CSSStyleDeclaration")}} dargestellt.

Jedes Paar aus Eigenschaft und Wert wird als [CSS-Deklaration](/de/docs/Web/API/CSS_Object_Model/CSS_Declaration) bezeichnet. Der CSS-Deklarationsblock hat die folgenden zugeordneten Eigenschaften:

- computed flag
  - : Wird gesetzt, wenn das {{domxref("CSSStyleDeclaration")}}-Objekt ein berechneter anstatt ein spezifizierter Stil ist. Standardmäßig nicht gesetzt.
- declarations
  - : Die [CSS-Deklarationen](/de/docs/Web/API/CSS_Object_Model/CSS_Declaration), die mit diesem Objekt assoziiert sind.
- parent CSS rule
  - : Die {{domxref("CSSRule")}}, mit der der CSS-Deklarationsblock verknüpft ist, ansonsten null.
- owner node
  - : Das {{domxref("element")}}, mit dem der CSS-Deklarationsblock verbunden ist, ansonsten null.
- updating flag
  - : Wird gesetzt, wenn der CSS-Deklarationsblock das `style`-Attribut des Besitzerelements aktualisiert.

Wenn eine {{domxref("CSSStyleDeclaration")}} von einer [CSS Object Model (CSSOM)](/de/docs/Web/API/CSS_Object_Model)-Schnittstelle zurückgegeben wird, sind diese Eigenschaften auf die geeigneten Werte gemäß der Spezifikation gesetzt.

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

Wir können eine {{domxref("CSSStyleDeclaration")}} zurückgeben, die diesen CSS-Deklarationsblock repräsentiert, indem wir {{domxref("CSSStyleRule.style")}} verwenden.

```js
let myRules = document.styleSheets[0].cssRules;
let rule = myRules[0]; // a CSSStyleRule
console.log(rule.style); // a CSSStyleDeclaration object
```

## Spezifikationen

{{Specifications}}
