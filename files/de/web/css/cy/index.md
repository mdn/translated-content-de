---
title: cy
slug: Web/CSS/cy
l10n:
  sourceCommit: c5f403bb08c91ae77ddfe47f937438fb5e6fcae5
---

{{CSSRef}}

Die **`cy`**-Eigenschaft von [CSS](/de/docs/Web/CSS) definiert den Mittelpunkt der y-Achse eines SVG {{SVGElement("circle")}} oder {{SVGElement("ellipse")}} Elements. Wenn vorhanden, überschreibt sie das {{SVGAttr("cy")}} Attribut des Elements.

> [!NOTE]
> Während das SVG {{SVGElement("radialGradient")}} Element das {{SVGAttr("cy")}} Attribut unterstützt, gilt die `cy` Eigenschaft nur für {{SVGElement("circle")}} und {{SVGElement("ellipse")}} Elemente, die in einem {{SVGElement("svg")}} eingebettet sind. Dieses Attribut gilt nicht für `<radialGradient>` oder andere SVG-Elemente und auch nicht für HTML-Elemente oder Pseudo-Elemente.

## Syntax

```css
/* Längen- und Prozentwerte */
cy: 3px;
cy: 20%;

/* Globale Werte */
cy: inherit;
cy: initial;
cy: revert;
cy: revert-layer;
cy: unset;
```

### Werte

Die {{cssxref("length")}}- und {{cssxref("percentage")}}-Werte geben das vertikale Zentrum des Kreises oder der Ellipse an.

- {{cssxref("length")}}

  - : Als absolute oder relative Länge kann sie in jeder Einheit ausgedrückt werden, die vom CSS {{cssxref("&lt;length&gt;")}} Datentyp erlaubt ist. Negative Werte sind ungültig.

- {{cssxref("percentage")}}

  - : Prozentwerte beziehen sich auf die Höhe des aktuellen SVG-Ansichtsfensters.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definiton der y-Achsen-Koordinate eines Kreises und einer Ellipse

In diesem Beispiel haben wir zwei identische `<circle>` und zwei identische `<ellipse>` Elemente in einem SVG; ihre `cy` Attributwerte sind `50` bzw. `150`.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="30" />
  <circle cx="50" cy="50" r="30" />
  <ellipse cx="150" cy="50" rx="20" ry="40" />
  <ellipse cx="150" cy="50" rx="20" ry="40" />
</svg>
```

Mit CSS stylen wir nur den ersten Kreis und die erste Ellipse, sodass ihre Zwillingsformen die Standardstile verwenden (wobei {{cssxref("fill")}} standardmäßig schwarz ist). Wir verwenden die `cy` Eigenschaft, um den Wert des SVG {{SVGAttr("cy")}} Attributs zu überschreiben und geben ihnen eine `fill`- und {{cssxref("stroke")}}, um die ersten Formen in jedem Paar von ihren Zwillingen zu unterscheiden. Der Browser rendert SVG-Bilder standardmäßig `300px` breit und `150px` hoch.

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

Das gestylte Zentrum des Kreises ist `30px` von der oberen Kante des SVG-Ansichtsfensters entfernt und die gestylte Ellipse ist `100px` von dieser Kante entfernt, wie in den CSS `cy`-Eigenschaftswerten definiert. Die ungestylten Formen sind jeweils `50px` von der oberen Kante des SVG-Ansichtsfensters entfernt, wie in ihren SVG `cy`-Attributwerten definiert.

### y-Achsen-Koordinaten als Prozentwerte

In diesem Beispiel verwenden wir das gleiche Markup wie im vorherigen Beispiel. Der einzige Unterschied ist der CSS `cy`-Eigenschaftswert; in diesem Fall verwenden wir Prozentwerte von `30%` und `50%`.

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

In diesem Fall sind die y-Achsen-Koordinaten des Zentrums des Kreises und der Ellipse `30%` bzw. `50%` der Höhe des aktuellen SVG-Ansichtsfensters. Da die Höhe des Bildes standardmäßig auf `150px` eingestellt ist, entspricht der `cy`-Wert `45px` und `120px`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG {{SVGAttr("cy")}} Attribut
- Geometrieeigenschaften: `cy`, {{cssxref("cx")}}, {{cssxref("r")}}, {{cssxref("rx")}}, {{cssxref("ry")}}, {{cssxref("x")}}, {{cssxref("y")}}, {{cssxref("width")}}, {{cssxref("height")}}
- {{cssxref("fill")}}
- {{cssxref("stroke")}}
- {{cssxref("paint-order")}}
- {{cssxref("border-radius")}} Kurzschreibweise
- {{cssxref("gradient/radial-gradient", "radial-gradient")}}
- {{cssxref("basic-shape")}} Datentyp
