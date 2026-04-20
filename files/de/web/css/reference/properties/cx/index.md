---
title: "`cx` CSS property"
short-title: cx
slug: Web/CSS/Reference/Properties/cx
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`cx`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert den Mittelpunkt der x-Achse eines SVG-{{SVGElement("circle")}}- oder {{SVGElement("ellipse")}}-Elements. Falls vorhanden, überschreibt sie das {{SVGAttr("cx")}}-Attribut des Elements.

> [!NOTE]
> Während das SVG-{{SVGAttr("cx")}}-Attribut für das SVG-{{SVGElement("radialGradient")}}-Element relevant ist, gilt die `cx`-Eigenschaft nur für {{SVGElement("circle")}}- und {{SVGElement("ellipse")}}-Elemente, die in einem {{SVGElement("svg")}} verschachtelt sind. Sie gilt nicht für `<radialGradient>` oder andere SVG-Elemente noch für HTML-Elemente oder Pseudo-Elemente.

## Syntax

```css
/* length and percentage values */
cx: 20px;
cx: 20%;

/* Global values */
cx: inherit;
cx: initial;
cx: revert;
cx: revert-layer;
cx: unset;
```

### Werte

Die {{cssxref("length")}}- und {{cssxref("percentage")}}-Werte kennzeichnen den horizontalen Mittelpunkt des Kreises oder der Ellipse.

- {{cssxref("length")}}
  - : Als absolute oder relative Länge kann sie in jeder Einheit ausgedrückt werden, die vom CSS {{cssxref("&lt;length&gt;")}}-Datentyp zugelassen ist. Negative Werte sind ungültig.

- {{cssxref("percentage")}}
  - : Prozentsätze beziehen sich auf die Breite des aktuellen SVG-Viewports.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definition der x-Achsen-Koordinate eines Kreises und einer Ellipse

Dieses Beispiel demonstriert den grundlegenden Anwendungsfall von `cx` und wie die CSS-`cx`-Eigenschaft das `cx`-Attribut überschreibt.

#### HTML

Wir fügen zwei identische `<circle>`- und zwei identische `<ellipse>`-Elemente in ein SVG ein; ihre `cx`-Attributwerte sind `50` bzw. `150`.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="30" />
  <circle cx="50" cy="50" r="30" />
  <ellipse cx="150" cy="50" rx="20" ry="40" />
  <ellipse cx="150" cy="50" rx="20" ry="40" />
</svg>
```

#### CSS

Mit CSS stylen wir nur den ersten Kreis und die erste Ellipse, sodass ihre Zwillingsformen Standardstile verwenden (mit {{cssxref("fill")}}, das standardmäßig auf Schwarz gesetzt ist). Wir verwenden die `cx`-Eigenschaft, um den Wert des SVG-{{SVGAttr("cx")}}-Attributs zu überschreiben, und geben ihm auch eine `fill`- und {{cssxref("stroke")}}, um die ersten Formen in jedem Paar von ihrem Zwilling zu unterscheiden. Der Browser rendert SVG-Bilder standardmäßig `300px` breit und `150px` hoch.

```css
svg {
  border: 1px solid;
}

circle:first-of-type {
  cx: 30px;
  fill: lightgreen;
  stroke: black;
}
ellipse:first-of-type {
  cx: 180px;
  fill: pink;
  stroke: black;
}
```

#### Ergebnisse

{{EmbedLiveSample("Defining the x-axis coordinate of a circle and ellipse", "300", "180")}}

Der stilisierte Kreis hat seinen Mittelpunkt `30px` vom linken Rand des SVG-Viewports entfernt und die stilisierte Ellipse ist `180px` von diesem Rand entfernt, wie in den CSS-`cx`-Eigenschaftswerten definiert. Die ungestylten Formen haben ihre Mittelpunkte `50px` und `150px` vom linken Rand des SVG-Viewports entfernt, wie in ihren SVG-`cx`-Attributwerten definiert.

### x-Achsen-Koordinaten als Prozentwerte

Dieses Beispiel zeigt die Verwendung von Prozentwerten für `cx`.

#### HTML

Wir verwenden dasselbe Markup wie im vorherigen Beispiel.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="30" />
  <circle cx="50" cy="50" r="30" />
  <ellipse cx="150" cy="50" rx="20" ry="40" />
  <ellipse cx="150" cy="50" rx="20" ry="40" />
</svg>
```

#### CSS

Wir verwenden CSS, das dem vorherigen Beispiel ähnlich ist. Der einzige Unterschied ist der Wert der CSS-`cx`-Eigenschaft; in diesem Fall verwenden wir Prozentwerte von `30%` für den `<circle>` und `80%` für die `<ellipse>`.

```css
svg {
  border: 1px solid;
}

circle:first-of-type {
  cx: 30%;
  fill: lightgreen;
  stroke: black;
}
ellipse:first-of-type {
  cx: 80%;
  fill: pink;
  stroke: black;
}
```

#### Ergebnisse

{{EmbedLiveSample("x-axis coordinates as percentage values", "300", "180")}}

Bei der Verwendung von Prozentwerten für `cx` sind die Werte relativ zur Breite des SVG-Viewports. Hier sind die x-Achsen-Koordinaten der Mittelpunkte des stilisierten Kreises und der Ellipse `30%` bzw. `80%` der Breite des aktuellen SVG-Viewports. Da die Breite standardmäßig `300px` beträgt, sind die `cx`-Werte `90px` und `240px` vom linken Rand des SVG-Viewports entfernt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG-{{SVGAttr("cx")}}-Attribut
- Geometrie-Eigenschaften: `cx`, {{cssxref("cy")}}, {{cssxref("r")}}, {{cssxref("rx")}}, {{cssxref("ry")}}, {{cssxref("x")}}, {{cssxref("y")}}, {{cssxref("width")}}, {{cssxref("height")}}
- {{cssxref("fill")}}
- {{cssxref("stroke")}}
- {{cssxref("paint-order")}}
- {{cssxref("border-radius")}}-Kurzform-Eigenschaft
- {{cssxref("gradient/radial-gradient", "radial-gradient")}}
- {{cssxref("basic-shape")}}-Datentyp
