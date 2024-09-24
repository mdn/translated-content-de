---
title: cx
slug: Web/CSS/cx
l10n:
  sourceCommit: c5f403bb08c91ae77ddfe47f937438fb5e6fcae5
---

{{CSSRef}}

Die **`cx`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert den Mittelpunkt der x-Achse eines SVG-{{SVGElement("circle")}}- oder {{SVGElement("ellipse")}}-Elementes. Wenn vorhanden, überschreibt sie das {{SVGAttr("cx")}}-Attribut des Elements.

> [!NOTE]
> Während das SVG-{{SVGAttr("cx")}}-Attribut für das SVG-{{SVGElement("radialGradient")}}-Element relevant ist, gilt die `cx`-Eigenschaft nur für {{SVGElement("circle")}}- und {{SVGElement("ellipse")}}-Elemente, die in einem {{SVGElement("svg")}} verschachtelt sind. Sie gilt nicht für `<radialGradient>` oder andere SVG-Elemente, noch für HTML-Elemente oder Pseudo-Elemente.

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

Die {{cssxref("length")}}- und {{cssxref("percentage")}}-Werte bezeichnen das horizontale Zentrum des Kreises oder der Ellipse.

- {{cssxref("length")}}

  - : Als absolute oder relative Länge kann sie in jeder Einheit ausgedrückt werden, die der CSS {{cssxref("&lt;length&gt;")}}-Datentyp erlaubt. Negative Werte sind ungültig.

- {{cssxref("percentage")}}

  - : Prozentsätze beziehen sich auf die Breite des aktuellen SVG-Ansichtsfeldes.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definition der x-Achsen-Koordinate eines Kreises und einer Ellipse

Dieses Beispiel demonstriert die grundlegende Verwendung von `cx` und wie die CSS-`cx`-Eigenschaft Vorrang vor dem `cx`-Attribut hat.

#### HTML

Wir inkludieren zwei identische `<circle>`- und zwei identische `<ellipse>`-Elemente in einem SVG; ihre `cx`-Attributswerte sind jeweils `50` und `150`.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="30" />
  <circle cx="50" cy="50" r="30" />
  <ellipse cx="150" cy="50" rx="20" ry="40" />
  <ellipse cx="150" cy="50" rx="20" ry="40" />
</svg>
```

#### CSS

Mit CSS gestalten wir nur den ersten Kreis und die erste Ellipse, während ihre Zwillinge Standardstile verwenden (wobei {{cssxref("fill")}} standardmäßig auf schwarz setzt). Wir verwenden die `cx`-Eigenschaft, um den Wert des SVG-{{SVGAttr("cx")}}-Attributs zu überschreiben und geben ihm auch ein `fill` und {{cssxref("stroke")}}, um die ersten Formen jedes Paares von ihren Zwillingen zu unterscheiden. Der Browser rendert SVG-Bilder standardmäßig `300px` breit und `150px` hoch.

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

Der Mittelpunkt des gestylten Kreises ist `30px` vom linken Rand des SVG-Ansichtsfeldes entfernt und die gestylte Ellipse ist `180px` von diesem Rand entfernt, wie in den CSS-`cx`-Eigenschaftswerten definiert. Die ungestylten Formen haben ihre Mittelpunkte `50px` und `150px` vom linken Rand des SVG-Ansichtsfeldes entfernt, wie in ihren SVG-`cx`-Attributswerten definiert.

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

Wir verwenden CSS, das dem vorherigen Beispiel ähnlich ist. Der einzige Unterschied ist der CSS-`cx`-Eigenschaftswert; in diesem Fall verwenden wir Prozentwerte von `30%` für den `<circle>` und `80%` für die `<ellipse>`.

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

Bei der Verwendung von Prozentwerten für `cx` sind die Werte relativ zur Breite des SVG-Ansichtsfeldes. Hier sind die x-Achsen-Koordinaten des Mittelpunkts des gestylten Kreises und der Ellipse `30%` bzw. `80%` der Breite des aktuellen SVG-Ansichtsfeldes. Da die Breite auf `300px` voreingestellt ist, sind die `cx`-Werte `90px` und `240px` vom linken Rand des SVG-Ansichtsfeldes entfernt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG {{SVGAttr("cx")}} Attribut
- Geometrie-Eigenschaften: `cx`, {{cssxref("cy")}}, {{cssxref("r")}}, {{cssxref("rx")}}, {{cssxref("ry")}}, {{cssxref("x")}}, {{cssxref("y")}}, {{cssxref("width")}}, {{cssxref("height")}}
- {{cssxref("fill")}}
- {{cssxref("stroke")}}
- {{cssxref("paint-order")}}
- {{cssxref("border-radius")}} Kurzform-Eigenschaft
- {{cssxref("gradient/radial-gradient", "radial-gradient")}}
- {{cssxref("basic-shape")}} Datentyp
