---
title: r
slug: Web/CSS/r
l10n:
  sourceCommit: c5f403bb08c91ae77ddfe47f937438fb5e6fcae5
---

{{CSSRef}}

Die **`r`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert den Radius eines Kreises. Sie kann nur mit dem SVG {{SVGElement("circle")}} Element verwendet werden. Wenn vorhanden, überschreibt sie das {{SVGAttr("r")}} Attribut des Kreises.

> [!NOTE]
> Die `r` Eigenschaft gilt nur für {{SVGElement("circle")}} Elemente, die in einem {{SVGElement("svg")}} verschachtelt sind. Sie gilt nicht für andere SVG-Elemente, HTML-Elemente oder Pseudoelemente.

## Syntax

```css
/* Längen- und Prozentwerte */
r: 3px;
r: 20%;

/* Globale Werte */
r: inherit;
r: initial;
r: revert;
r: revert-layer;
r: unset;
```

### Werte

Die {{cssxref("length")}} und {{cssxref("percentage")}} Werte definieren den Radius des Kreises.

- {{cssxref("length")}}

  - : Absolute oder relative Längen können in jeder Einheit ausgedrückt werden, die vom CSS {{cssxref("&lt;length&gt;")}} Datentyp erlaubt ist. Negative Werte sind ungültig.

- {{cssxref("percentage")}}

  - : Prozentsätze beziehen sich auf die normalisierte Diagonale des aktuellen SVG-Ansichtsfensters, die wie folgt berechnet wird: <math><mfrac><msqrt><mrow><msup><mi>&lt;width&gt;</mi><mn>2</mn></msup><mo>+</mo><msup><mi>&lt;height&gt;</mi><mn>2</mn></msup></mrow></msqrt><msqrt><mn>2</mn></msqrt></mfrac></math>.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definition des Radius eines Kreises

In diesem Beispiel haben wir zwei identische `<circle>`-Elemente in einem SVG, jedes mit einem Radius von `10` und denselben x- und y-Koordinaten für ihre Mittelpunkte.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="10" />
  <circle cx="50" cy="50" r="10" />
</svg>
```

Mit CSS stylen wir nur den ersten Kreis, während der zweite Kreis die Standardstile verwendet (mit ({{cssxref("fill")}} standardmäßig auf Schwarz eingestellt). Wir nutzen die `r` Eigenschaft, um den Wert des SVG-{{SVGAttr("r")}} Attributs zu überschreiben, und geben ihm eine `fill` und {{cssxref("stroke")}}. Die Standardgröße eines SVG beträgt `300px` in der Breite und `150px` in der Höhe.

```css
svg {
  border: 1px solid black;
}

circle:first-of-type {
  r: 30px;
  fill: lightgreen;
  stroke: black;
}
```

{{EmbedLiveSample("Definition des Radius eines Kreises", "300", "180")}}

### ViewBox versus Ansichtsfenster-Pixel

Dieses Beispiel enthält zwei SVGs, jeweils mit zwei `<circle>`-Elementen. Das zweite SVG enthält ein `viewBox`-Attribut, um den Unterschied zwischen SVG-viewBox und SVG-Ansichtsfenstern zu demonstrieren.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="10" />
  <circle cx="50" cy="50" r="10" />
</svg>
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="10" />
  <circle cx="50" cy="50" r="10" />
</svg>
```

Das CSS ist ähnlich wie im vorherigen Beispiel, mit `r: 30px` eingestellt, aber wir setzen eine {{cssxref("width")}}, um sicherzustellen, dass die Bilder beide `300px` breit sind:

```css
svg {
  border: 1px solid black;
  width: 300px;
}

circle:first-of-type {
  r: 30px;
  fill: lightgreen;
  stroke: black;
}
```

{{EmbedLiveSample("ViewBox versus Ansichtsfenster-Pixel", "300", "360")}}

Da das `viewBox`-Attribut das SVG als 200 SVG-Koordinatensystem-Pixel breit definiert und das Bild auf `300px` hochskaliert wird, werden die `30` SVG-Koordinatenpixel so skaliert, dass sie als `45` CSS-Pixel gerendert werden.

### Definition des Radius eines Kreises unter Verwendung von Prozentwerten

In diesem Beispiel verwenden wir das gleiche Markup wie im vorherigen Beispiel. Der einzige Unterschied ist der `r`-Wert; in diesem Fall verwenden wir einen Prozentwert.

```html hidden
<svg xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="10" />
  <circle cx="50" cy="50" r="10" />
</svg>
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="10" />
  <circle cx="50" cy="50" r="10" />
</svg>
```

```css
svg {
  border: 1px solid black;
  width: 300px;
}

circle:first-of-type {
  r: 30%;
  fill: lightgreen;
  stroke: black;
}
```

{{EmbedLiveSample("Definition des Radius eines Kreises unter Verwendung von Prozentwerten", "300", "360")}}

In beiden Fällen beträgt der Radius des Kreises `30%` der normalisierten Diagonale des SVG-Ansichtsfensters. Der Radius `r` entspricht <math><mn>0.3</mn><mo>&#xd7;</mo><mfrac><msqrt><mrow><msup><mi>&lt;width&gt;</mi><mn>2</mn></msup><mo>+</mo><msup><mi>&lt;height&gt;</mi><mn>2</mn></msup></mrow></msqrt><msqrt><mn>2</mn></msqrt></mfrac></math>. Während das erste Bild `300` und `150` CSS-Pixel und das zweite `200` und `100` SVG-viewBox-Einheiten verwendet, ist 30% ein proportionaler Wert. Daher ist der `r`-Wert derselbe: `47,43` viewBox-Einheiten, was `71,15` CSS-Pixel ergibt.

Obwohl der `r` derselbe ist, unterscheiden sich die Mittelpunkte, da das zweite SVG um 50% vergrößert wird, wodurch sein Mittelpunkt um 50% nach unten und rechts verschoben wird.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- Geometrieeigenschaften: `r`, {{cssxref("cx")}}, {{cssxref("cy")}}, {{cssxref("rx")}}, {{cssxref("ry")}}, {{cssxref("x")}}, {{cssxref("y")}}, {{cssxref("width")}}, {{cssxref("height")}}
- {{cssxref("fill")}}
- {{cssxref("stroke")}}
- {{cssxref("paint-order")}}
- {{cssxref("border-radius")}} Kurzschreibweise
- {{cssxref("gradient/radial-gradient", "radial-gradient")}}
- {{cssxref("basic-shape")}} Datentyp
- SVG {{SVGAttr("r")}} Attribut
