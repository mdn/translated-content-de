---
title: cy
slug: Web/CSS/cy
l10n:
  sourceCommit: c5f403bb08c91ae77ddfe47f937438fb5e6fcae5
---

{{CSSRef}}

Die **`cy`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert den Mittelpunkt der y-Achse von SVG-{{SVGElement("circle")}}- oder {{SVGElement("ellipse")}}-Elementen. Wenn vorhanden, überschreibt sie das {{SVGAttr("cy")}}-Attribut des Elements.

> [!NOTE]
> Auch wenn das SVG-Element {{SVGElement("radialGradient")}} das {{SVGAttr("cy")}}-Attribut unterstützt, gilt die `cy`-Eigenschaft nur für {{SVGElement("circle")}}- und {{SVGElement("ellipse")}}-Elemente, die in einem {{SVGElement("svg")}} verschachtelt sind. Dieses Attribut gilt nicht für `<radialGradient>` oder andere SVG-Elemente, noch für HTML-Elemente oder Pseudo-Elemente.

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

  - : Als absolute oder relative Länge kann sie in jeder vom CSS {{cssxref("&lt;length&gt;")}} erlaubten Einheit ausgedrückt werden. Negative Werte sind ungültig.

- {{cssxref("percentage")}}

  - : Prozentsätze beziehen sich auf die Höhe des aktuellen SVG-Viewports.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Y-Achsen-Koordinate eines Kreises und einer Ellipse definieren

In diesem Beispiel haben wir zwei identische `<circle>`- und zwei identische `<ellipse>`-Elemente in einem SVG; ihre `cy`-Attributwerte sind jeweils `50` und `150`.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="30" />
  <circle cx="50" cy="50" r="30" />
  <ellipse cx="150" cy="50" rx="20" ry="40" />
  <ellipse cx="150" cy="50" rx="20" ry="40" />
</svg>
```

Mit CSS stylen wir nur den ersten Kreis und die erste Ellipse, sodass ihre Zwillinge die Standardstile verwenden (wobei {{cssxref("fill")}} standardmäßig auf Schwarz gesetzt ist). Wir verwenden die `cy`-Eigenschaft, um den Wert des SVG-{{SVGAttr("cy")}}-Attributs zu überschreiben und geben ihnen auch ein `fill` und {{cssxref("stroke")}}, um die ersten Formen in jedem Paar von ihren Zwillingen zu unterscheiden. Der Browser rendert SVG-Bilder standardmäßig mit einer Breite von `300px` und einer Höhe von `150px`.

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

Der Mittelpunkt des gestylten Kreises ist `30px` vom oberen Rand des SVG-Viewports entfernt und der der gestylten Ellipse `100px`, wie in den CSS-`cy`-Eigenschaftswerten definiert. Die ungestylten Formen haben Mittelpunkte, die beide `50px` vom oberen Rand des SVG-Viewports entfernt sind, wie in ihren SVG-`cy`-Attributwerten definiert.

### Y-Achsen-Koordinaten als Prozentwerte

In diesem Beispiel verwenden wir das gleiche Markup wie im vorherigen Beispiel. Der einzige Unterschied ist der CSS-`cy`-Eigenschaftswert; in diesem Fall verwenden wir Prozentwerte von `30%` und `50%`.

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

In diesem Fall sind die Y-Achsen-Koordinaten des Mittelpunkts des Kreises und der Ellipse `30%` bzw. `50%` der Höhe des aktuellen SVG-Viewports. Da die Bildhöhe standardmäßig `150px` beträgt, bedeutet dies, dass der `cy`-Wert `45px` bzw. `120px` entspricht.

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
- {{cssxref("border-radius")}} Kurzform-Eigenschaft
- {{cssxref("gradient/radial-gradient", "radial-gradient")}}
- {{cssxref("basic-shape")}} Datentyp
