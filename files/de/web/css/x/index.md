---
title: x
slug: Web/CSS/x
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`x`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die x-Achsen-Koordinate der oberen linken Ecke der SVG {{SVGElement("rect")}} Form, {{SVGElement("image")}} Bild, {{SVGElement("foreignObject")}} Ansicht oder verschachtelte {{SVGElement("svg")}} Ansicht relativ zum nächstgelegenen `<svg>` Vorfahren im Benutzer-[Koordinatensystem](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems). Wenn vorhanden, überschreibt sie das {{SVGAttr("x")}} Attribut des Elements.

> [!NOTE]
> Die `x` Eigenschaft gilt nur für {{SVGElement("rect")}}, {{SVGElement("image")}}, {{SVGElement("foreignObject")}} und {{SVGElement("svg")}} Elemente, die in einem {{SVGElement("svg")}} verschachtelt sind. Sie hat keine Wirkung auf das äußerste `<svg>` Element selbst und gilt nicht für andere SVG-Elemente noch für HTML-Elemente oder -Pseudo-Elemente.

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

Die {{cssxref("length")}} und {{cssxref("percentage")}} Werte geben die x-Achsen-Koordinatenposition der oberen linken Ecke des SVG-Element Containers an.

- {{cssxref("length")}}
  - : Als absolute oder relative Länge kann sie in jeder von der CSS {{cssxref("&lt;length&gt;")}} Datentyp erlaubten Einheit ausgedrückt werden.

- {{cssxref("percentage")}}
  - : Prozentsätze beziehen sich auf die Breite der SVG {{SVGAttr("viewBox")}}, falls deklariert, andernfalls bezieht sich der Prozentsatz auf die Breite des aktuellen SVG-Ansichtsfensters.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definieren der x-Achsen-Koordinaten von SVG-Formen

Dieses Beispiel zeigt den grundlegenden Anwendungsfall von `x` und wie die CSS `x` Eigenschaft Vorrang vor dem `x` Attribut hat.

#### HTML

Wir fügen vier identische SVG `<rect>` Elemente ein; ihre `x` und {{SVGAttr("y")}} Attributwerte sind alle `10`, was bedeutet, dass die vier Rechtecke alle an derselben Stelle sind, `10px` vom oberen und linken Rand des SVG-Ansichtsfensters entfernt.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" x="10" y="10" />
  <rect width="100" height="100" x="10" y="10" />
  <rect width="100" height="100" x="10" y="10" />
  <rect width="100" height="100" x="10" y="10" />
</svg>
```

#### CSS

Wir gestalten alle Rechtecke so, dass sie einen schwarzen Rand haben und leicht transparent sind, damit überlappende Rechtecke sichtbar sind. Wir versehen jedes Rechteck mit unterschiedlichen Füll- und `x` Werten.

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

Die linken Ränder der Rechtecke liegen bei `10` (vom Attribut), `3em`, `180px` und `50%`. Das SVG ist `300px` breit, sodass die linke Seite des letzten Rechtecks bei der `150px` Marke liegt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG {{SVGAttr("x")}} Attribut
- Geometrie-Eigenschaften: `x`, {{cssxref("cx")}}, {{cssxref("cy")}}, {{cssxref("r")}}, {{cssxref("rx")}}, {{cssxref("ry")}}, {{cssxref("y")}}, {{cssxref("width")}}, {{cssxref("height")}}
- {{cssxref("fill")}}
- {{cssxref("stroke")}}
- {{cssxref("paint-order")}}
- {{cssxref("basic-shape")}} Datentyp
