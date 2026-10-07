---
title: "`cx` CSS property"
short-title: cx
slug: Web/CSS/Reference/Properties/cx
l10n:
  sourceCommit: d78544a841b0e266a6efc169c044573f5e0b4e7d
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`cx`** definiert den Mittelpunkt auf der x-Achse eines SVG-Elements {{SVGElement("circle")}} oder {{SVGElement("ellipse")}}. Ist sie vorhanden, überschreibt sie das Attribut {{SVGAttr("cx")}} des Elements.

> [!NOTE]
> Das SVG-Attribut {{SVGAttr("cx")}} ist zwar auch für das SVG-Element {{SVGElement("radialGradient")}} relevant, die Eigenschaft `cx` gilt jedoch nur für Elemente {{SVGElement("circle")}} und {{SVGElement("ellipse")}} innerhalb eines {{SVGElement("svg")}}. Sie gilt weder für `<radialGradient>` oder andere SVG-Elemente noch für HTML-Elemente oder Pseudoelemente.

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

Die Werte {{cssxref("length")}} und {{cssxref("percentage")}} geben die horizontale Position des Mittelpunkts des Kreises oder der Ellipse an.

- {{cssxref("length")}}
  - : Eine absolute oder relative Länge, die in jeder vom CSS-Datentyp {{cssxref("&lt;length&gt;")}} zugelassenen Einheit angegeben werden kann. Negative Werte sind ungültig.

- {{cssxref("percentage")}}
  - : Prozentwerte beziehen sich auf die Breite des aktuellen SVG-Viewports.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### x-Achsen-Koordinate eines Kreises und einer Ellipse festlegen

Dieses Beispiel zeigt die grundlegende Verwendung von `cx` und wie die CSS-Eigenschaft `cx` Vorrang vor dem Attribut `cx` hat.

#### HTML

Wir fügen jeweils zwei identische `<circle>`- und `<ellipse>`-Elemente in ein SVG ein. Ihre `cx`-Attributwerte sind `50` beziehungsweise `150`.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="30" />
  <circle cx="50" cy="50" r="30" />
  <ellipse cx="150" cy="50" rx="20" ry="40" />
  <ellipse cx="150" cy="50" rx="20" ry="40" />
</svg>
```

#### CSS

Mit CSS gestalten wir nur den ersten Kreis und die erste Ellipse. Die jeweils zweite Form behält ihre Standarddarstellung bei ({{cssxref("fill")}} ist standardmäßig schwarz). Mit der Eigenschaft `cx` überschreiben wir den Wert des SVG-Attributs {{SVGAttr("cx")}}. Außerdem legen wir `fill` und {{cssxref("stroke")}} fest, um die erste Form jedes Paars von der zweiten zu unterscheiden. Browser stellen SVG-Bilder standardmäßig mit einer Breite von `300px` und einer Höhe von `150px` dar.

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

Der Mittelpunkt des gestalteten Kreises liegt `30px` vom linken Rand des SVG-Viewports entfernt, der der gestalteten Ellipse `180px`. Diese Positionen werden durch die CSS-Werte der Eigenschaft `cx` festgelegt. Die Mittelpunkte der nicht gestalteten Formen liegen entsprechend ihren SVG-Attributwerten für `cx` `50px` beziehungsweise `150px` vom linken Rand des SVG-Viewports entfernt.

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

Wir verwenden ähnliches CSS wie im vorherigen Beispiel. Der einzige Unterschied ist der Wert der CSS-Eigenschaft `cx`: Hier verwenden wir `30%` für `<circle>` und `80%` für `<ellipse>`.

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

Bei Prozentwerten für `cx` beziehen sich die Werte auf die Breite des SVG-Viewports. Hier liegen die x-Achsen-Koordinaten der Mittelpunkte des gestalteten Kreises und der gestalteten Ellipse bei `30%` beziehungsweise `80%` der Breite des aktuellen SVG-Viewports. Da die Breite standardmäßig `300px` beträgt, liegen die `cx`-Werte `90px` beziehungsweise `240px` vom linken Rand des SVG-Viewports entfernt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG-Attribut {{SVGAttr("cx")}}
- Geometrie-Eigenschaften: `cx`, {{cssxref("cy")}}, {{cssxref("r")}}, {{cssxref("rx")}}, {{cssxref("ry")}}, {{cssxref("x")}}, {{cssxref("y")}}, {{cssxref("width")}}, {{cssxref("height")}}
- {{cssxref("fill")}}
- {{cssxref("stroke")}}
- {{cssxref("paint-order")}}
- Kurzschreibweise {{cssxref("border-radius")}}
- {{cssxref("gradient/radial-gradient", "radial-gradient")}}
- Datentyp {{cssxref("basic-shape")}}
