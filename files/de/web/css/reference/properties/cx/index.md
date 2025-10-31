---
title: cx
slug: Web/CSS/Reference/Properties/cx
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`cx`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert den x-Achsen-Mittelpunkt eines SVG-{{SVGElement("circle")}}- oder {{SVGElement("ellipse")}}-Elements. Wenn vorhanden, überschreibt sie das {{SVGAttr("cx")}}-Attribut des Elements.

> [!NOTE]
> Während das SVG-{{SVGAttr("cx")}}-Attribut für das SVG-{{SVGElement("radialGradient")}}-Element relevant ist, gilt die `cx`-Eigenschaft nur für {{SVGElement("circle")}}- und {{SVGElement("ellipse")}}-Elemente, die in einem {{SVGElement("svg")}} verschachtelt sind. Sie gilt nicht für `<radialGradient>` oder andere SVG-Elemente und auch nicht für HTML-Elemente oder Pseudoelemente.

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

Die {{cssxref("length")}}- und {{cssxref("percentage")}}-Werte geben das horizontale Zentrum des Kreises oder der Ellipse an.

- {{cssxref("length")}}
  - : Als absolute oder relative Länge kann sie in jeder vom CSS-Datentyp {{cssxref("&lt;length&gt;")}} erlaubten Einheit ausgedrückt werden. Negative Werte sind ungültig.

- {{cssxref("percentage")}}
  - : Prozentwerte beziehen sich auf die Breite des aktuellen SVG-Viewports.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definieren der x-Achsen-Koordinate eines Kreises und einer Ellipse

Dieses Beispiel zeigt den grundlegenden Anwendungsfall von `cx` und wie die CSS-`cx`-Eigenschaft Vorrang vor dem `cx`-Attribut hat.

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

Mit CSS gestalten wir nur den ersten Kreis und die erste Ellipse, sodass ihre Zwillingsformen die Standardstile verwenden (wobei {{cssxref("fill")}} standardmäßig schwarz ist). Wir verwenden die `cx`-Eigenschaft, um den Wert des SVG-{{SVGAttr("cx")}}-Attributs zu überschreiben und geben ihm zusätzlich ein `fill` und {{cssxref("stroke")}}, um die ersten Formen in jedem Paar von ihrem Zwilling zu unterscheiden. Der Browser rendert SVG-Bilder standardmäßig mit `300px` Breite und `150px` Höhe.

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

{{EmbedLiveSample("Definieren der x-Achsen-Koordinate eines Kreises und einer Ellipse", "300", "180")}}

Der Mittelpunkt des stilisierten Kreises liegt `30px` vom linken Rand des SVG-Viewports und die stilisierte Ellipse liegt `180px` von diesem Rand entfernt, wie in den CSS-`cx`-Eigenschaftswerten definiert. Die nicht gestylten Formen befinden sich `50px` und `150px` vom linken Rand des SVG-Viewports entfernt, wie in ihren SVG-`cx`-Attributwerten definiert.

### x-Achsen-Koordinaten als Prozentwerte

Dieses Beispiel zeigt die Verwendung von Prozentwerten für `cx`.

#### HTML

Wir verwenden das gleiche Markup wie im vorherigen Beispiel.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="30" />
  <circle cx="50" cy="50" r="30" />
  <ellipse cx="150" cy="50" rx="20" ry="40" />
  <ellipse cx="150" cy="50" rx="20" ry="40" />
</svg>
```

#### CSS

Wir verwenden CSS, das dem vorherigen Beispiel ähnlich ist. Der einzige Unterschied besteht im Wert der CSS-`cx`-Eigenschaft; in diesem Fall verwenden wir Prozentwerte von `30%` für den `<circle>` und `80%` für die `<ellipse>`.

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

{{EmbedLiveSample("x-Achsen-Koordinaten als Prozentwerte", "300", "180")}}

Bei der Verwendung von Prozentwerten für `cx` sind die Werte relativ zur Breite des SVG-Viewports. Hier liegen die x-Achsen-Koordinaten des Mittelpunkts des stilisierten Kreises und der Ellipse bei `30%` bzw. `80%` der Breite des aktuellen SVG-Viewports. Da die Breite standardmäßig `300px` beträgt, sind die `cx`-Werte `90px` bzw. `240px` vom linken Rand des SVG-Viewports entfernt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG-{{SVGAttr("cx")}}-Attribut
- Geometrieeigenschaften: `cx`, {{cssxref("cy")}}, {{cssxref("r")}}, {{cssxref("rx")}}, {{cssxref("ry")}}, {{cssxref("x")}}, {{cssxref("y")}}, {{cssxref("width")}}, {{cssxref("height")}}
- {{cssxref("fill")}}
- {{cssxref("stroke")}}
- {{cssxref("paint-order")}}
- Kurzschreibweise {{cssxref("border-radius")}}
- {{cssxref("gradient/radial-gradient", "radial-gradient")}}
- {{cssxref("basic-shape")}}-Datentyp
