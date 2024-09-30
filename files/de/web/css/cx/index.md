---
title: cx
slug: Web/CSS/cx
l10n:
  sourceCommit: c5f403bb08c91ae77ddfe47f937438fb5e6fcae5
---

{{CSSRef}}

Die **`cx`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert den Mittelpunkt auf der x-Achse eines SVG-{{SVGElement("circle")}}- oder {{SVGElement("ellipse")}}-Elements. Wenn sie vorhanden ist, überschreibt sie das {{SVGAttr("cx")}}-Attribut des Elements.

> [!NOTE]
> Während das SVG-{{SVGAttr("cx")}}-Attribut für das SVG-{{SVGElement("radialGradient")}}-Element relevant ist, gilt die `cx`-Eigenschaft nur für {{SVGElement("circle")}}- und {{SVGElement("ellipse")}}-Elemente innerhalb eines {{SVGElement("svg")}}. Sie gilt nicht für `<radialGradient>` oder andere SVG-Elemente, noch für HTML-Elemente oder Pseudoelemente.

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

Die Werte {{cssxref("length")}} und {{cssxref("percentage")}} geben den horizontalen Mittelpunkt des Kreises oder der Ellipse an.

- {{cssxref("length")}}

  - : Als absolute oder relative Länge kann es in jeder Maßeinheit ausgedrückt werden, die vom CSS-{{cssxref("&lt;length&gt;")}}-Datentyp erlaubt ist. Negative Werte sind ungültig.

- {{cssxref("percentage")}}

  - : Prozentsätze beziehen sich auf die Breite des aktuellen SVG-Viewports.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definition der x-Achsen-Koordinate eines Kreises und einer Ellipse

Dieses Beispiel demonstriert den grundlegenden Anwendungsfall von `cx` und wie die CSS-`cx`-Eigenschaft Vorrang vor dem `cx`-Attribut hat.

#### HTML

Wir fügen zwei identische `<circle>` und zwei identische `<ellipse>` Elemente in ein SVG ein; ihre `cx`-Attributwerte sind `50` bzw. `150`.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="30" />
  <circle cx="50" cy="50" r="30" />
  <ellipse cx="150" cy="50" rx="20" ry="40" />
  <ellipse cx="150" cy="50" rx="20" ry="40" />
</svg>
```

#### CSS

Mit CSS gestalten wir nur den ersten Kreis und die erste Ellipse, sodass ihre Doppelgänger die Standardstile verwenden (mit {{cssxref("fill")}}, das standardmäßig schwarz ist). Wir verwenden die `cx`-Eigenschaft, um den Wert des SVG-{{SVGAttr("cx")}}-Attributs zu überschreiben und geben ihnen auch eine `fill` und {{cssxref("stroke")}}, um die ersten Formen in jedem Paar von ihren Doppelgängern zu unterscheiden. Der Browser rendert SVG-Bilder standardmäßig mit `300px` Breite und `150px` Höhe.

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

{{EmbedLiveSample("Definition der x-Achsen-Koordinate eines Kreises und einer Ellipse", "300", "180")}}

Der Mittelpunkt des gestalteten Kreises befindet sich `30px` vom linken Rand des SVG-Viewports und die gestaltete Ellipse `180px` von diesem Rand entfernt, wie in den CSS-`cx`-Eigenschaftswerten definiert. Die ungestalteten Formmittelpunkte sind `50px` bzw. `150px` vom linken Rand des SVG-Viewports entfernt, wie in ihren SVG-`cx`-Attributwerten definiert.

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

Wir verwenden CSS, das dem vorherigen Beispiel ähnlich ist. Der einzige Unterschied ist der CSS-`cx`-Eigenschaftswert; in diesem Fall verwenden wir Prozentwerte von `30%` für das `<circle>` und `80%` für das `<ellipse>`.

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

Bei der Verwendung von Prozentwerten für `cx` sind die Werte relativ zur Breite des SVG-Viewports. Hier sind die x-Achsen-Koordinaten des Mittelpunkts des gestalteten Kreises und der Ellipse `30%` bzw. `80%` der Breite des aktuellen SVG-Viewports. Da die Breite standardmäßig `300px` beträgt, sind die `cx`-Werte `90px` bzw. `240px` vom linken Rand des SVG-Viewports entfernt.

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
- {{cssxref("border-radius")}} Kurzform-Eigenschaft
- {{cssxref("gradient/radial-gradient", "radial-gradient")}}
- {{cssxref("basic-shape")}} Datentyp
