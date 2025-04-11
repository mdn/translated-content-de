---
title: CSS-Deklarationsblock
slug: Web/API/CSS_Object_Model/CSS_Declaration_Block
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{DefaultAPISidebar("CSSOM")}}

Ein **CSS-Deklarationsblock** ist eine geordnete Sammlung von CSS-Eigenschaften und Werten. Im DOM wird er als [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) dargestellt.

Jedes Paar aus Eigenschaft und Wert wird als [CSS-Deklaration](/de/docs/Web/API/CSS_Object_Model/CSS_Declaration) bezeichnet. Der CSS-Deklarationsblock hat die folgenden zugehörigen Eigenschaften:

- Berechnungsflag
  - : Wird gesetzt, wenn das [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt ein berechneter und nicht spezifizierter Stil ist. Standardmäßig nicht gesetzt.
- Deklarationen
  - : Die mit diesem Objekt verbundenen [CSS-Deklarationen](/de/docs/Web/API/CSS_Object_Model/CSS_Declaration).
- Übergeordnete CSS-Regel
  - : Die [`CSSRule`](/de/docs/Web/API/CSSRule), mit der der CSS-Deklarationsblock verbunden ist, andernfalls null.
- Eigentümerknoten
  - : Das [`Element`](/de/docs/Web/API/Element), mit dem der CSS-Deklarationsblock verbunden ist, andernfalls null.
- Aktualisierungsflag
  - : Wird gesetzt, wenn der CSS-Deklarationsblock das [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attribut des Eigentümerknotens aktualisiert.

Wenn eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) von einer [CSS Object Model (CSSOM)](/de/docs/Web/API/CSS_Object_Model)-Schnittstelle zurückgegeben wird, sind diese Eigenschaften auf die entsprechenden Werte gesetzt, wie in der Spezifikation definiert.

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

Wir können eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) zurückgeben, die diesen CSS-Deklarationsblock repräsentiert, indem wir [`CSSStyleRule.style`](/de/docs/Web/API/CSSStyleRule/style) verwenden.

```js
let myRules = document.styleSheets[0].cssRules;
let rule = myRules[0]; // a CSSStyleRule
console.log(rule.style); // a CSSStyleDeclaration object
```

## Spezifikationen

{{Specifications}}
