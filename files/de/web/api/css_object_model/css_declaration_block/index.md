---
title: CSS-Deklarationsblock
slug: Web/API/CSS_Object_Model/CSS_Declaration_Block
l10n:
  sourceCommit: b07efa13f8459a44a2cbc7b6cdb3279967565e63
---

{{DefaultAPISidebar("CSSOM")}}

Ein **CSS-Deklarationsblock** ist eine geordnete Sammlung von CSS-Eigenschaften und Werten. Im DOM wird er als [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) dargestellt.

Jedes Paar von Eigenschaft und Wert wird als [CSS-Deklaration](/de/docs/Web/API/CSS_Object_Model/CSS_Declaration) bezeichnet. Der CSS-Deklarationsblock hat die folgenden zugeordneten Eigenschaften:

- Berechnungs-Flag
  - : Wird gesetzt, wenn das [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) Objekt ein berechneter und nicht ein spezifizierter Stil ist. Standardmäßig nicht gesetzt.
- Deklarationen
  - : Die [CSS-Deklarationen](/de/docs/Web/API/CSS_Object_Model/CSS_Declaration), die diesem Objekt zugeordnet sind.
- Übergeordnete CSS-Regel
  - : Die [`CSSRule`](/de/docs/Web/API/CSSRule), mit der der CSS-Deklarationsblock verknüpft ist, ansonsten null.
- Besitzender Knoten
  - : Das [`element`](/de/docs/Web/API/Element), mit dem der CSS-Deklarationsblock verknüpft ist, ansonsten null.
- Aktualisierungs-Flag
  - : Wird gesetzt, wenn der CSS-Deklarationsblock das `style`-Attribut des besitzenenden Knotens aktualisiert.

Wenn eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) von einer [CSS Object Model (CSSOM)](/de/docs/Web/API/CSS_Object_Model) Schnittstelle zurückgegeben wird, werden diese Eigenschaften gemäß der Spezifikation auf die entsprechenden Werte gesetzt.

## Grundlegendes Beispiel

Das folgende Beispiel zeigt eine CSS-Regel mit einem Deklarationsblock für das {{htmlelement("Heading_Elements","h1")}} Element. Der CSS-Deklarationsblock befindet sich zwischen den geschweiften Klammern.

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
