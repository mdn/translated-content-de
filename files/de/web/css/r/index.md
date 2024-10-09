---
title: r
slug: Web/CSS/r
l10n:
  sourceCommit: b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{CSSRef}}

Die **`r`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert den Radius eines Kreises. Sie kann nur mit dem SVG-Element {{SVGElement("circle")}} verwendet werden. Wenn vorhanden, überschreibt sie das Attribut {{SVGAttr("r")}} des Kreises.

> [!NOTE]
> Die `r` Eigenschaft gilt nur für {{SVGElement("circle")}} Elemente, die in einem {{SVGElement("svg")}} verschachtelt sind. Sie gilt nicht für andere SVG-Elemente oder HTML-Elemente oder Pseudo-Elemente.

## Syntax

```css
/* Length and percentage values */
r: 3px;
r: 20%;

/* Global values */
r: inherit;
r: initial;
r: revert;
r: revert-layer;
r: unset;
```

### Werte

Die Werte {{cssxref("length")}} und {{cssxref("percentage")}} definieren den Radius des Kreises.

- {{cssxref("length")}}

  - : Absolute oder relative Längen können in jeder Einheit ausgedrückt werden, die vom CSS-Datentyp {{cssxref("&lt;length&gt;")}} zugelassen wird. Negative Werte sind ungültig.

- {{cssxref("percentage")}}

  - : Prozentsätze beziehen sich auf die normierte Diagonale des aktuellen SVG-Viewports, die berechnet wird als <math><mfrac><msqrt><mrow><msup><mi>&lt;width&gt;</mi><mn>2</mn></msup><mo>+</mo><msup><mi>&lt;height&gt;</mi><mn>2</mn></msup></mrow></msqrt><msqrt><mn>2</mn></msqrt></mfrac></math>.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definition des Radius eines Kreises

In diesem Beispiel haben wir zwei identische `<circle>` Elemente in einem SVG, jeweils mit einem Radius von `10` und denselben x- und y-Achsen-Koordinaten für ihre Mittelpunkte.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="10" />
  <circle cx="50" cy="50" r="10" />
</svg>
```

Mit CSS stylen wir nur den ersten Kreis, während der zweite Kreis die Standardstile verwendet (mit der {{cssxref("fill")}} Standardeinstellung auf Schwarz). Wir verwenden die `r` Eigenschaft, um den Wert des SVG-Attributs {{SVGAttr("r")}} zu überschreiben, ihm ein `fill` und einen {{cssxref("stroke")}} zu geben. Die Standardgröße eines SVG beträgt `300px` in der Breite und `150px` in der Höhe.

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

### ViewBox versus Viewport-Pixel

Dieses Beispiel enthält zwei SVGs, jeweils mit zwei `<circle>` Elementen. Das zweite SVG beinhaltet ein `viewBox` Attribut, um den Unterschied zwischen SVG viewBox und SVG Viewports zu verdeutlichen.

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

Das CSS ist ähnlich wie im vorherigen Beispiel, mit `r: 30px` gesetzt, aber wir setzen eine {{cssxref("width")}}, um sicherzustellen, dass die Bilder beide `300px` breit sind:

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

{{EmbedLiveSample("ViewBox versus Viewport-Pixel", "300", "360")}}

Da das `viewBox` Attribut das SVG mit 200 SVG-Koordinatensystem-Pixeln in der Breite definiert und das Bild auf `300px` vergrößert wird, werden die `30` SVG-Koordinatensystem-Pixel zu `45` CSS-Pixeln skaliert.

### Definition des Radius eines Kreises mit Prozentsätzen

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

{{EmbedLiveSample("Definition des Radius eines Kreises mit Prozentsätzen", "300", "360")}}

In beiden Fällen beträgt der Kreisradius `30%` der normierten Diagonale des SVG-Viewports. Der Radius `r` entspricht <math><mn>0.3</mn><mo>&#xd7;</mo><mfrac><msqrt><mrow><msup><mi>&lt;width&gt;</mi><mn>2</mn></msup><mo>+</mo><msup><mi>&lt;height&gt;</mi><mn>2</mn></msup></mrow></msqrt><msqrt><mn>2</mn></msqrt></mfrac></math>. Während das erste Bild `300` und `150` CSS-Pixel verwendet und das zweite `200` und `100` SVG-ViewBox-Einheiten, ist 30% ein proportionaler Wert. Dadurch ist der `r`-Wert derselbe: `47.43` ViewBox-Einheiten, was in `71.15` CSS-Pixeln resultiert.

Während `r` gleich ist, unterscheiden sich die Mittelpunkte, da das zweite SVG um 50% vergrößert wird, wodurch sich sein Mittelpunkt um 50% nach unten und rechts verschiebt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

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
