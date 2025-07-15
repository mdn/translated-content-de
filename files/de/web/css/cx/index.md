---
title: cx
slug: Web/CSS/cx
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`cx`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert den Mittelpunkt der x-Achse eines SVG-{{SVGElement("circle")}}- oder {{SVGElement("ellipse")}}-Elements. Wenn sie vorhanden ist, überschreibt sie das {{SVGAttr("cx")}}-Attribut des Elements.

> [!NOTE]
> Während das {{SVGAttr("cx")}}-Attribut in SVG für das {{SVGElement("radialGradient")}}-Element relevant ist, gilt die `cx`-Eigenschaft nur für die {{SVGElement("circle")}}- und {{SVGElement("ellipse")}}-Elemente, die in einem {{SVGElement("svg")}} verschachtelt sind. Sie gilt nicht für `<radialGradient>` oder andere SVG-Elemente, noch für HTML-Elemente oder Pseudo-Elemente.

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

Die Werte {{cssxref("length")}} und {{cssxref("percentage")}} bezeichnen das horizontale Zentrum des Kreises oder der Ellipse.

- {{cssxref("length")}}
  - : Als absolute oder relative Länge kann sie in jeder Einheit ausgedrückt werden, die vom CSS-Datentyp {{cssxref("&lt;length&gt;")}} erlaubt wird. Negative Werte sind ungültig.

- {{cssxref("percentage")}}
  - : Prozentsätze beziehen sich auf die Breite des aktuellen SVG-Ansichtsfensters.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definition der x-Achsen-Koordinate eines Kreises und einer Ellipse

Dieses Beispiel zeigt die grundlegende Verwendung von `cx` und wie die CSS-Eigenschaft `cx` Vorrang vor dem `cx`-Attribut hat.

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

Mit CSS stylen wir nur den ersten Kreis und die erste Ellipse, sodass ihre Twin-Formen die Standardstile verwenden (mit {{cssxref("fill")}}, das standardmäßig auf Schwarz gesetzt ist). Wir verwenden die `cx`-Eigenschaft, um den Wert des SVG-{{SVGAttr("cx")}}-Attributs zu überschreiben, und geben ihnen auch ein `fill` und {{cssxref("stroke")}}, um die ersten Formen in jedem Paar von ihren Zwillingen zu unterscheiden. Der Browser rendert SVG-Bilder standardmäßig mit einer Breite von `300px` und einer Höhe von `150px`.

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

Der Mittelpunkt des stilisierten Kreises ist `30px` vom linken Rand des SVG-Ansichtsfensters entfernt, und die stilisierte Ellipse ist `180px` von diesem Rand entfernt, wie in den CSS-`cx`-Eigenschaftswerten definiert. Die nicht gestylten Formen haben ihre Mittelpunkte `50px` und `150px` vom linken Rand des SVG-Ansichtsfensters entfernt, wie in ihren SVG-`cx`-Attributwerten definiert.

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

Wir verwenden CSS, das dem des vorherigen Beispiels ähnlich ist. Der einzige Unterschied ist der Wert der CSS-`cx`-Eigenschaft; in diesem Fall verwenden wir Prozentwerte von `30%` für den `<circle>` und `80%` für die `<ellipse>`.

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

Bei der Verwendung von Prozentwerten für `cx` beziehen sich die Werte auf die Breite des SVG-Ansichtsfensters. Hier sind die x-Achsen-Koordinaten des Mittelpunkts des Stilkeks und der Ellipse jeweils `30%` und `80%` der Breite des aktuellen SVG-Ansichtsfensters. Da die Breite auf `300px` voreingestellt war, sind die `cx`-Werte `90px` und `240px` vom linken Rand des SVG-Ansichtsfensters entfernt.

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
- {{cssxref("border-radius")}} Kurzformeigenschaft
- {{cssxref("gradient/radial-gradient", "radial-gradient")}}
- {{cssxref("basic-shape")}} Datentyp
