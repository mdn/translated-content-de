---
title: "`cy` CSS property"
short-title: cy
slug: Web/CSS/Reference/Properties/cy
l10n:
  sourceCommit: d78544a841b0e266a6efc169c044573f5e0b4e7d
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`cy`** definiert den Mittelpunkt auf der y-Achse eines SVG-Elements {{SVGElement("circle")}} oder {{SVGElement("ellipse")}}. Ist sie vorhanden, überschreibt sie das Attribut {{SVGAttr("cy")}} des Elements.

> [!NOTE]
> Das SVG-Element {{SVGElement("radialGradient")}} unterstützt zwar das Attribut {{SVGAttr("cy")}}, die Eigenschaft `cy` gilt jedoch nur für {{SVGElement("circle")}}- und {{SVGElement("ellipse")}}-Elemente innerhalb eines {{SVGElement("svg")}}-Elements. Sie gilt weder für `<radialGradient>` oder andere SVG-Elemente noch für HTML-Elemente oder Pseudoelemente.

## Syntax

```css
/* length and percentage values */
cy: 3px;
cy: 20%;

/* Global values */
cy: inherit;
cy: initial;
cy: revert;
cy: revert-layer;
cy: unset;
```

### Werte

Die Werte {{cssxref("length")}} und {{cssxref("percentage")}} geben die vertikale Position des Mittelpunkts des Kreises oder der Ellipse an.

- {{cssxref("length")}}
  - : Als absolute oder relative Länge kann der Wert in jeder Einheit angegeben werden, die der CSS-Datentyp {{cssxref("&lt;length&gt;")}} zulässt. Negative Werte sind ungültig.

- {{cssxref("percentage")}}
  - : Prozentwerte beziehen sich auf die Höhe des aktuellen SVG-Viewports.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Die y-Koordinate eines Kreises und einer Ellipse festlegen

In diesem Beispiel enthält ein SVG zwei identische `<circle>`-Elemente und zwei identische `<ellipse>`-Elemente. Die Werte ihrer `cy`-Attribute sind `50` beziehungsweise `150`.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="30" />
  <circle cx="50" cy="50" r="30" />
  <ellipse cx="150" cy="50" rx="20" ry="40" />
  <ellipse cx="150" cy="50" rx="20" ry="40" />
</svg>
```

Mit CSS gestalten wir nur den ersten Kreis und die erste Ellipse. Die jeweils zweite Form behält die Standarddarstellung bei ({{cssxref("fill")}} ist dabei standardmäßig schwarz). Mit der Eigenschaft `cy` überschreiben wir den Wert des SVG-Attributs {{SVGAttr("cy")}}. Außerdem legen wir `fill` und {{cssxref("stroke")}} fest, um die erste Form jedes Paares von der zweiten zu unterscheiden. Browser stellen SVG-Bilder standardmäßig mit einer Breite von `300px` und einer Höhe von `150px` dar.

```css
svg {
  border: 1px solid;
}

circle:first-of-type {
  cy: 30px;
  fill: lightgreen;
  stroke: black;
}
ellipse:first-of-type {
  cy: 100px;
  fill: pink;
  stroke: black;
}
```

{{EmbedLiveSample("Defining the y-axis coordinate of a circle and ellipse", "300", "180")}}

Der Mittelpunkt des gestalteten Kreises liegt `30px` vom oberen Rand des SVG-Viewports entfernt, der Mittelpunkt der gestalteten Ellipse `100px`. Diese Positionen sind durch die Werte der CSS-Eigenschaft `cy` festgelegt. Die Mittelpunkte der nicht gestalteten Formen liegen gemäß ihren SVG-Attributen `cy` beide `50px` vom oberen Rand des SVG-Viewports entfernt.

### y-Koordinaten als Prozentwerte

In diesem Beispiel verwenden wir dasselbe Markup wie im vorherigen Beispiel. Der einzige Unterschied sind die Werte der CSS-Eigenschaft `cy`: Hier verwenden wir die Prozentwerte `30%` und `50%`.

```html hidden
<svg xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="30" />
  <circle cx="50" cy="50" r="30" />
  <ellipse cx="150" cy="50" rx="20" ry="40" />
  <ellipse cx="150" cy="50" rx="20" ry="40" />
</svg>
```

```css
svg {
  border: 1px solid;
}

circle:first-of-type {
  cy: 30%;
  fill: lightgreen;
  stroke: black;
}
ellipse:first-of-type {
  cy: 50%;
  fill: pink;
  stroke: black;
}
```

{{EmbedLiveSample("y-axis coordinates as percentage values", "300", "180")}}

Die y-Koordinaten der Mittelpunkte von Kreis und Ellipse liegen hier bei `30%` beziehungsweise `50%` der Höhe des aktuellen SVG-Viewports. Da die Bildhöhe standardmäßig `150px` beträgt, entsprechen die `cy`-Werte `45px` beziehungsweise `75px`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG-Attribut {{SVGAttr("cy")}}
- Geometrieeigenschaften: `cy`, {{cssxref("cx")}}, {{cssxref("r")}}, {{cssxref("rx")}}, {{cssxref("ry")}}, {{cssxref("x")}}, {{cssxref("y")}}, {{cssxref("width")}}, {{cssxref("height")}}
- {{cssxref("fill")}}
- {{cssxref("stroke")}}
- {{cssxref("paint-order")}}
- Kurzschreibweise {{cssxref("border-radius")}}
- {{cssxref("gradient/radial-gradient", "radial-gradient")}}
- Datentyp {{cssxref("basic-shape")}}
