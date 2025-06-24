---
title: x
slug: Web/CSS/x
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`x`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die x-Achsen-Koordinate der oberen linken Ecke der SVG {{SVGElement("rect")}}-Form, des {{SVGElement("image")}}-Bildes, des {{SVGElement("foreignObject")}}-Viewports oder des verschachtelten {{SVGElement("svg")}}-Viewports relativ zum nächstgelegenen `<svg>` Vorfahren im Nutzer-[Koordinatensystem](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems). Wenn vorhanden, überschreibt sie das {{SVGAttr("x")}}-Attribut des Elements.

> [!NOTE]
> Die `x`-Eigenschaft gilt nur für die Elemente {{SVGElement("rect")}}, {{SVGElement("image")}}, {{SVGElement("foreignObject")}} und verschachtelte {{SVGElement("svg")}} in einem {{SVGElement("svg")}}. Sie hat keine Wirkung auf das äußerste `<svg>`-Element selbst und ist nicht anwendbar auf andere SVG-Elemente, HTML-Elemente oder Pseudo-Elemente.

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

Die Werte {{cssxref("length")}} und {{cssxref("percentage")}} bezeichnen die x-Achsen-Koordinate der oberen linken Ecke des SVG-Elementcontainers.

- {{cssxref("length")}}

  - : Als absolute oder relative Länge kann sie in jeder vom CSS-Datentyp {{cssxref("&lt;length&gt;")}} erlaubten Einheit angegeben werden.

- {{cssxref("percentage")}}
  - : Prozentsätze beziehen sich auf die Breite des SVG-{{SVGAttr("viewBox")}}, falls angegeben, andernfalls bezieht sich der Prozentsatz auf die Breite des aktuellen SVG-Viewports.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definition der x-Achsen-Koordinaten von SVG-Formen

Dieses Beispiel demonstriert die grundlegende Verwendung von `x` und wie die CSS-`x`-Eigenschaft das `x`-Attribut überlagert.

#### HTML

Wir fügen vier identische SVG-`<rect>`-Elemente ein; deren `x`- und {{SVGAttr("y")}}-Attributwerte sind alle `10`, was bedeutet, dass die vier Rechtecke alle an derselben Stelle, `10px` von der oberen und linken Ecke des SVG-Viewports, platziert sind.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" x="10" y="10" />
  <rect width="100" height="100" x="10" y="10" />
  <rect width="100" height="100" x="10" y="10" />
  <rect width="100" height="100" x="10" y="10" />
</svg>
```

#### CSS

Wir gestalten alle Rechtecke mit einem schwarzen Rand und leicht transparent, damit sich überlappende Rechtecke sichtbar sind. Wir versehen jedes Rechteck mit unterschiedlichen Füll- und `x`-Werten.

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

Die linken Kanten der Rechtecke befinden sich bei `10` (vom Attribut), `3em`, `180px` und `50%`. Das SVG ist `300px` breit, sodass sich die linke Seite des letzten Rechtecks bei der `150px`-Markierung befindet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG-{{SVGAttr("x")}}-Attribut
- Geometrie-Eigenschaften: `x`, {{cssxref("cx")}}, {{cssxref("cy")}}, {{cssxref("r")}}, {{cssxref("rx")}}, {{cssxref("ry")}}, {{cssxref("y")}}, {{cssxref("width")}}, {{cssxref("height")}}
- {{cssxref("fill")}}
- {{cssxref("stroke")}}
- {{cssxref("paint-order")}}
- {{cssxref("basic-shape")}} Datentyp
