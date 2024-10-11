---
title: CSS-Deklarationsblock
slug: Web/API/CSS_Object_Model/CSS_Declaration_Block
l10n:
  sourceCommit: 816cc4d4a5a318a23222946b6981bb92b499aebb
---

{{DefaultAPISidebar("CSSOM")}}

Ein **CSS-Deklarationsblock** ist eine geordnete Sammlung von CSS-Eigenschaften und -Werten. Im DOM wird er als [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) dargestellt.

Jedes Paar aus Eigenschaft und Wert wird als [CSS-Deklaration](/de/docs/Web/API/CSS_Object_Model/CSS_Declaration) bezeichnet. Der CSS-Deklarationsblock hat die folgenden zugehörigen Eigenschaften:

- berechnete Flagge
  - : Wird gesetzt, wenn das [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt einen berechneten anstelle eines angegebenen Stils darstellt. Standardmäßig nicht gesetzt.
- Deklarationen
  - : Die [CSS-Deklarationen](/de/docs/Web/API/CSS_Object_Model/CSS_Declaration), die mit diesem Objekt verbunden sind.
- übergeordnete CSS-Regel
  - : Die [`CSSRule`](/de/docs/Web/API/CSSRule), mit der der CSS-Deklarationsblock verknüpft ist, andernfalls null.
- Eigentümerknoten
  - : Das [`element`](/de/docs/Web/API/Element), mit dem der CSS-Deklarationsblock verknüpft ist, andernfalls null.
- Aktualisierungsflagge
  - : Wird gesetzt, wenn der CSS-Deklarationsblock das [`style`](/de/docs/Web/HTML/Global_attributes/style)-Attribut des Eigentümerknotens aktualisiert.

Wenn eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) von einer Schnittstelle des [CSS Object Model (CSSOM)](/de/docs/Web/API/CSS_Object_Model) zurückgegeben wird, werden diese Eigenschaften gemäß der Spezifikation auf die entsprechenden Werte gesetzt.

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
