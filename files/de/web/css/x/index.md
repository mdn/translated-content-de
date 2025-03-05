---
title: x
slug: Web/CSS/x
l10n:
  sourceCommit: d13c1276b80bbfc940a1091b62f333fe9edc78a2
---

{{CSSRef}}

Die **`x`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die x-Achsenkoordinate der oberen linken Ecke der SVG {{SVGElement("rect")}} Form, das {{SVGElement("image")}} Bild, das {{SVGElement("foreignObject")}} Ansichtsfenster oder das verschachtelte {{SVGElement("svg")}} Ansichtsfenster relativ zum nächstgelegenen `<svg>` Vorfahren im Benutzer[koordinatensystem](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems). Wenn vorhanden, überschreibt es das {{SVGAttr("x")}} Attribut des Elements.

> [!NOTE]
> Die `x`-Eigenschaft gilt nur für {{SVGElement("rect")}}, {{SVGElement("image")}}, {{SVGElement("foreignObject")}} und {{SVGElement("svg")}} Elemente, die in einem {{SVGElement("svg")}} verschachtelt sind. Sie hat keine Auswirkungen auf die äußersten `<svg>` Elemente selbst und gilt nicht für andere SVG-Elemente noch für HTML-Elemente oder Pseudo-Elemente.

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

Die Werte {{cssxref("length")}} und {{cssxref("percentage")}} geben die Position der x-Achsenkoordinate der oberen linken Ecke des SVG-Elementcontainers an.

- {{cssxref("length")}}

  - : Als absolute oder relative Länge kann sie in jeder von der CSS {{cssxref("&lt;length&gt;")}} Datentyp erlaubten Einheit ausgedrückt werden.

- {{cssxref("percentage")}}

  - : Prozentsätze beziehen sich auf die Breite der SVG {{SVGAttr("viewBox")}}, falls angegeben, andernfalls bezieht sich der Prozentsatz auf die Breite des aktuellen SVG-Ansichtsfensters.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der x-Achsenkoordinaten von SVG-Formen

Dieses Beispiel demonstriert den grundlegenden Anwendungsfall von `x` und wie die CSS `x`-Eigenschaft Vorrang vor dem `x`-Attribut hat.

#### HTML

Wir fügen vier identische SVG `<rect>` Elemente ein; die Werte ihrer `x`- und {{SVGAttr("y")}}-Attribute sind alle `10`, was bedeutet, dass sich die vier Rechtecke alle an derselben Position befinden, `10px` von der oberen und linken Ecke des SVG-Ansichtsfensters.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" x="10" y="10" />
  <rect width="100" height="100" x="10" y="10" />
  <rect width="100" height="100" x="10" y="10" />
  <rect width="100" height="100" x="10" y="10" />
</svg>
```

#### CSS

Wir gestalten alle Rechtecke mit einem schwarzen Rand und leicht transparent, damit überlappende Rechtecke sichtbar sind. Wir versehen jedes Rechteck mit unterschiedlichen Füll- und `x`-Werten.

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

- SVG {{SVGAttr("x")}} Attribut
- Geometrieeigenschaften: `x`, {{cssxref("cx")}}, {{cssxref("cy")}}, {{cssxref("r")}}, {{cssxref("rx")}}, {{cssxref("ry")}}, {{cssxref("y")}}, {{cssxref("width")}}, {{cssxref("height")}}
- {{cssxref("fill")}}
- {{cssxref("stroke")}}
- {{cssxref("paint-order")}}
- {{cssxref("basic-shape")}} Datentyp
