---
title: cy
slug: Web/CSS/cy
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`cy`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert den Mittelpunkt auf der y-Achse von SVG-{{SVGElement("circle")}}- oder {{SVGElement("ellipse")}}-Elementen. Wenn vorhanden, überschreibt sie das {{SVGAttr("cy")}}-Attribut des Elements.

> [!NOTE]
> Während das SVG-{{SVGElement("radialGradient")}}-Element das {{SVGAttr("cy")}}-Attribut unterstützt, gilt die `cy`-Eigenschaft nur für {{SVGElement("circle")}}- und {{SVGElement("ellipse")}}-Elemente, die in einem {{SVGElement("svg")}} verschachtelt sind. Dieses Attribut gilt weder für `<radialGradient>` noch für andere SVG-Elemente noch für HTML-Elemente oder Pseudo-Elemente.

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

Die {{cssxref("length")}}- und {{cssxref("percentage")}}-Werte geben das vertikale Zentrum des Kreises oder der Ellipse an.

- {{cssxref("length")}}
  - : Als absolute oder relative Längenangabe kann sie in jeder Einheit ausgedrückt werden, die vom CSS-Datentyp {{cssxref("&lt;length&gt;")}} erlaubt ist. Negative Werte sind ungültig.

- {{cssxref("percentage")}}
  - : Prozentsätze beziehen sich auf die Höhe des aktuellen SVG-Ansichtsfensters.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Bestimmen der y-Achsen-Koordinate eines Kreises und einer Ellipse

In diesem Beispiel haben wir zwei identische `<circle>`- und `<ellipse>`-Elemente in einem SVG; ihre `cy`-Attributwerte sind jeweils `50` und `150`.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="30" />
  <circle cx="50" cy="50" r="30" />
  <ellipse cx="150" cy="50" rx="20" ry="40" />
  <ellipse cx="150" cy="50" rx="20" ry="40" />
</svg>
```

Mit CSS gestalten wir nur den ersten Kreis und die erste Ellipse, wobei ihre Zwillingsformen die Standardstile verwenden (wobei {{cssxref("fill")}} standardmäßig auf Schwarz gesetzt ist). Wir verwenden die `cy`-Eigenschaft, um den Wert des SVG-{{SVGAttr("cy")}}-Attributs zu überschreiben, und geben ihm auch ein `fill` und {{cssxref("stroke")}}, um die ersten Formen jedes Paares von ihrem Zwilling zu unterscheiden. Der Browser rendert SVG-Bilder standardmäßig mit einer Breite von `300px` und einer Höhe von `150px`.

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

{{EmbedLiveSample("Bestimmen der y-Achsen-Koordinate eines Kreises und einer Ellipse", "300", "180")}}

Der Mittelpunkt des gestalteten Kreises ist `30px` vom oberen Rand des SVG-Ansichtsfensters entfernt, und die gestaltete Ellipse ist `100px` von diesem Rand entfernt, wie in den CSS-`cy`-Eigenschaftswerten definiert. Die Mittelpunkte der ungestylten Formen sind beide `50px` vom oberen Rand des SVG-Ansichtsfensters entfernt, wie in ihren SVG-`cy`-Attributwerten definiert.

### y-Achsen-Koordinaten als Prozentsatzwerte

In diesem Beispiel verwenden wir dasselbe Markup wie im vorherigen Beispiel. Der einzige Unterschied ist der CSS-`cy`-Eigenschaftswert; in diesem Fall verwenden wir Prozentwerte von `30%` und `50%`.

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

{{EmbedLiveSample("y-Achsen-Koordinaten als Prozentsatzwerte", "300", "180")}}

In diesem Fall sind die y-Achsen-Koordinaten des Mittelpunkts des Kreises und der Ellipse jeweils `30%` und `50%` der Höhe des aktuellen SVG-Ansichtsfensters. Da die Höhe des Bildes standardmäßig `150px` beträgt, bedeutet dies, dass der `cy`-Wert dem Äquivalent von `45px` und `120px` entspricht.

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
- {{cssxref("border-radius")}} Kurzform-Eigenschaft
- {{cssxref("gradient/radial-gradient", "radial-gradient")}}
- {{cssxref("basic-shape")}} Datentyp
