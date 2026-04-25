---
title: "`x` CSS property"
short-title: x
slug: Web/CSS/Reference/Properties/x
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`x`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert die x-Achsen-Koordinate der oberen linken Ecke der SVG {{SVGElement("rect")}} Form, des {{SVGElement("image")}} Bildes, des {{SVGElement("foreignObject")}} Viewports oder des verschachtelten {{SVGElement("svg")}} Viewports relativ zum Benutzer-[Koordinatensystem](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems) des nächstgelegenen `<svg>` Vorfahren. Wenn vorhanden, überschreibt sie das {{SVGAttr("x")}} Attribut des Elements.

> [!NOTE]
> Die `x` Eigenschaft gilt nur für {{SVGElement("rect")}}, {{SVGElement("image")}}, {{SVGElement("foreignObject")}}, und {{SVGElement("svg")}} Elemente, die in einem {{SVGElement("svg")}} verschachtelt sind. Sie hat keine Auswirkung auf das äußerste `<svg>` Element selbst und gilt nicht für andere SVG-Elemente, HTML-Elemente oder Pseudo-Elemente.

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

Die {{cssxref("length")}} und {{cssxref("percentage")}} Werte geben die x-Achsen-Koordinatenposition der oberen linken Ecke des SVG-Element-Containers an.

- {{cssxref("length")}}
  - : Als absolute oder relative Länge kann sie in jeder vom CSS {{cssxref("&lt;length&gt;")}} Datentyp erlaubten Einheit ausgedrückt werden.

- {{cssxref("percentage")}}
  - : Prozentangaben beziehen sich auf die Breite des SVG-{{SVGAttr("viewBox")}}, falls deklariert, andernfalls bezieht sich der Prozentsatz auf die Breite des aktuellen SVG-Viewports.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der x-Achsen-Koordinaten von SVG-Formen

Dieses Beispiel zeigt den grundlegenden Anwendungsfall von `x` und wie die CSS-`x`-Eigenschaft das `x`-Attribut überlagert.

#### HTML

Wir fügen vier identische SVG-`<rect>`-Elemente hinzu; deren `x`- und {{SVGAttr("y")}}-Attributwerte sind alle `10`, was bedeutet, dass die vier Rechtecke alle an derselben Position, `10px` von der oberen linken Ecke des SVG-Viewports, liegen.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" x="10" y="10" />
  <rect width="100" height="100" x="10" y="10" />
  <rect width="100" height="100" x="10" y="10" />
  <rect width="100" height="100" x="10" y="10" />
</svg>
```

#### CSS

Wir gestalten alle Rechtecke mit einem schwarzen Rand und leicht transparenter Darstellung, sodass überlappende Rechtecke sichtbar sind. Wir versehen jedes Rechteck mit unterschiedlichen Füll- und `x`-Werten.

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

Die linken Kanten der Rechtecke befinden sich bei `10` (vom Attribut), `3em`, `180px` und `50%`. Das SVG ist `300px` breit, sodass sich die linke Seite des letzten Rechtecks bei der `150px` Marke befindet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG {{SVGAttr("x")}} Attribut
- Geometrische Eigenschaften: `x`, {{cssxref("cx")}}, {{cssxref("cy")}}, {{cssxref("r")}}, {{cssxref("rx")}}, {{cssxref("ry")}}, {{cssxref("y")}}, {{cssxref("width")}}, {{cssxref("height")}}
- {{cssxref("fill")}}
- {{cssxref("stroke")}}
- {{cssxref("paint-order")}}
- {{cssxref("basic-shape")}} Datentyp
