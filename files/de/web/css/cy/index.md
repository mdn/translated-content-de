---
title: cy
slug: Web/CSS/cy
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`cy`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert den y-Achsen-Mittelpunkt von SVG {{SVGElement("circle")}} oder {{SVGElement("ellipse")}} Elementen. Ist sie vorhanden, überschreibt sie das {{SVGAttr("cy")}} Attribut des Elements.

> [!NOTE]
> Obwohl das SVG {{SVGElement("radialGradient")}} Element das {{SVGAttr("cy")}} Attribut unterstützt, gilt die `cy` Eigenschaft nur für {{SVGElement("circle")}} und {{SVGElement("ellipse")}} Elemente, die in einem {{SVGElement("svg")}} geschachtelt sind. Dieses Attribut gilt nicht für `<radialGradient>` oder andere SVG-Elemente, weder für HTML-Elemente noch für Pseudo-Elemente.

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

Die {{cssxref("length")}} und {{cssxref("percentage")}} Werte geben den vertikalen Mittelpunkt des Kreises oder der Ellipse an.

- {{cssxref("length")}}

  - : Als absolute oder relative Länge kann es in jeder Einheit ausgedrückt werden, die vom CSS {{cssxref("&lt;length&gt;")}} Datentyp erlaubt ist. Negative Werte sind ungültig.

- {{cssxref("percentage")}}
  - : Prozentsätze beziehen sich auf die Höhe des aktuellen SVG-Viewports.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definition der y-Achsen-Koordinate eines Kreises und einer Ellipse

In diesem Beispiel haben wir zwei identische `<circle>` und zwei identische `<ellipse>` Elemente in einem SVG; ihre `cy` Attributwerte sind `50` bzw. `150`.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="30" />
  <circle cx="50" cy="50" r="30" />
  <ellipse cx="150" cy="50" rx="20" ry="40" />
  <ellipse cx="150" cy="50" rx="20" ry="40" />
</svg>
```

Mit CSS stylen wir nur den ersten Kreis und die erste Ellipse, so dass ihre Zwillinge die Standardstile verwenden (wobei {{cssxref("fill")}} standardmäßig auf Schwarz eingestellt ist). Wir verwenden die `cy` Eigenschaft, um den Wert des SVG {{SVGAttr("cy")}} Attributs zu überschreiben und geben ihm auch ein `fill` und {{cssxref("stroke")}}, um die ersten Formen in jedem Paar von ihren Zwillingen zu unterscheiden. Der Browser rendert SVG-Bilder standardmäßig als `300px` breit und `150px` hoch.

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

{{EmbedLiveSample("Definition der y-Achsen-Koordinate eines Kreises und einer Ellipse", "300", "180")}}

Der Mittelpunkt des gestylten Kreises liegt `30px` von der oberen Kante des SVG-Viewports und die gestylte Ellipse `100px` von dieser Kante entfernt, wie in den CSS `cy` Eigenschaftswerten definiert. Die Mittelpunkte der ungestylten Formen liegen beide `50px` von der oberen Kante des SVG-Viewports entfernt, wie in ihren SVG `cy` Attributwerten definiert.

### y-Achsen-Koordinaten als Prozentwerte

In diesem Beispiel verwenden wir das gleiche Markup wie im vorherigen Beispiel. Der einzige Unterschied ist der CSS `cy` Eigenschaftswert; in diesem Fall verwenden wir Prozentwerte von `30%` und `50%`.

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

{{EmbedLiveSample("y-Achsen-Koordinaten als Prozentwerte", "300", "180")}}

In diesem Fall sind die y-Achsen-Koordinaten des Mittelpunkts des Kreises und der Ellipse `30%` bzw. `50%` der Höhe des aktuellen SVG-Viewports. Da die Höhe des Bildes standardmäßig `150px` beträgt, bedeutet dies, dass der `cy` Wert dem von `45px` und `120px` entspricht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG {{SVGAttr("cy")}} Attribut
- Geometrie-Eigenschaften: `cy`, {{cssxref("cx")}}, {{cssxref("r")}}, {{cssxref("rx")}}, {{cssxref("ry")}}, {{cssxref("x")}}, {{cssxref("y")}}, {{cssxref("width")}}, {{cssxref("height")}}
- {{cssxref("fill")}}
- {{cssxref("stroke")}}
- {{cssxref("paint-order")}}
- {{cssxref("border-radius")}} Kurzschreibweise
- {{cssxref("gradient/radial-gradient", "radial-gradient")}}
- {{cssxref("basic-shape")}} Datentyp
