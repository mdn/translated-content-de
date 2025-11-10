---
title: x
slug: Web/CSS/Reference/Properties/x
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`x`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert die x-Achsen-Koordinate der oberen linken Ecke der SVG {{SVGElement("rect")}}-Form, des {{SVGElement("image")}}-Bildes, des {{SVGElement("foreignObject")}}-Ansichtsfensters oder eines verschachtelten {{SVGElement("svg")}}-Ansichtsfensters relativ zum Nutzerkoordinatensystem des nächsten `<svg>`-Vorfahren. Wenn vorhanden, überschreibt sie das {{SVGAttr("x")}}-Attribut des Elements.

> [!NOTE]
> Die `x`-Eigenschaft gilt nur für {{SVGElement("rect")}}, {{SVGElement("image")}}, {{SVGElement("foreignObject")}} und {{SVGElement("svg")}}-Elemente, die in einem {{SVGElement("svg")}} verschachtelt sind. Sie hat keine Auswirkung auf das äußerste `<svg>`-Element selbst und gilt nicht für andere SVG-Elemente noch für HTML-Elemente oder Pseudoelemente.

## Syntax

```css
/* length and percentage values */
x: 40px;
x: 40%;

/* Global values */
x: inherit;
x: initial;
x: revert;
x: revert-layer;
x: unset;
```

### Werte

Die {{cssxref("length")}}- und {{cssxref("percentage")}}-Werte kennzeichnen die x-Achsen-Koordinatenposition der oberen linken Ecke des SVG-Element-Containers.

- {{cssxref("length")}}
  - : Als absolute oder relative Länge kann sie in jeder von CSS erlaubten Einheit des Datentyps {{cssxref("&lt;length&gt;")}} ausgedrückt werden.

- {{cssxref("percentage")}}
  - : Prozentsätze beziehen sich auf die Breite des SVG-{{SVGAttr("viewBox")}}, falls deklariert. Andernfalls bezieht sich der Prozentsatz auf die Breite des aktuellen SVG-Ansichtsfensters.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der x-Achsen-Koordinaten von SVG-Formen

Dieses Beispiel demonstriert den grundlegenden Anwendungsfall von `x` und wie die CSS-`x`-Eigenschaft gegenüber dem `x`-Attribut Priorität hat.

#### HTML

Wir fügen vier identische SVG `<rect>`-Elemente ein; ihre `x`- und {{SVGAttr("y")}}-Attributwerte sind alle `10`, was bedeutet, dass die vier Rechtecke alle an derselben Stelle sind, `10px` von der oberen und linken Ecke des SVG-Ansichtsfensters entfernt.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" x="10" y="10" />
  <rect width="100" height="100" x="10" y="10" />
  <rect width="100" height="100" x="10" y="10" />
  <rect width="100" height="100" x="10" y="10" />
</svg>
```

#### CSS

Wir gestalten alle Rechtecke mit einem schwarzen Rand und leicht transparent, sodass sich überlappende Rechtecke sichtbar sind. Wir versehen jedes Rechteck mit unterschiedlichen Füll- und `x`-Werten.

```css
svg {
  border: 1px solid;
  width: 300px;
}

rect {
  fill: none;
  stroke: black;
  opacity: 0.8;
}

rect:nth-of-type(2) {
  x: 3em;
  fill: red;
}

rect:nth-of-type(3) {
  x: 180px;
  fill: yellow;
}

rect:nth-of-type(4) {
  x: 50%;
  fill: orange;
}
```

#### Ergebnisse

{{EmbedLiveSample("Defining the x-axis coordinate of SVG shapes", "300", "180")}}

Die linken Kanten der Rechtecke sind bei `10` (vom Attribut), `3em`, `180px` und `50%`, jeweils. Das SVG ist `300px` breit, daher befindet sich die linke Seite des letzten Rechtecks auf der `150px`-Markierung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG {{SVGAttr("x")}}-Attribut
- Geometrie-Eigenschaften: `x`, {{cssxref("cx")}}, {{cssxref("cy")}}, {{cssxref("r")}}, {{cssxref("rx")}}, {{cssxref("ry")}}, {{cssxref("y")}}, {{cssxref("width")}}, {{cssxref("height")}}
- {{cssxref("fill")}}
- {{cssxref("stroke")}}
- {{cssxref("paint-order")}}
- {{cssxref("basic-shape")}} Datentyp
