---
title: x
slug: Web/CSS/x
l10n:
  sourceCommit: c276224e43228e7d45e4894729fdc56a904615f5
---

{{CSSRef}}

Die **`x`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die x-Achsen-Koordinate der oberen linken Ecke der SVG {{SVGElement("rect")}}-Form, {{SVGElement("image")}}-Bild, des {{SVGElement("foreignObject")}}-Viewports oder des verschachtelten {{SVGElement("svg")}}-Viewports relativ zum nächsten `<svg>`-Vorfahren im Benutzer-[Koordinatensystem](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems). Ist diese Eigenschaft vorhanden, überschreibt sie das {{SVGAttr("x")}}-Attribut des Elements.

> [!NOTE]
> Die `x`-Eigenschaft gilt nur für {{SVGElement("rect")}}, {{SVGElement("image")}}, {{SVGElement("foreignObject")}} und verschachtelte {{SVGElement("svg")}}-Elemente in einem {{SVGElement("svg")}}. Sie hat keine Wirkung auf die äußersten `<svg>`-Elemente selbst und gilt nicht für andere SVG-Elemente oder für HTML-Elemente oder Pseudo-Elemente.

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

Die Werte {{cssxref("length")}} und {{cssxref("percentage")}} geben die Position der x-Achse der oberen linken Ecke des SVG-Element-Containers an.

- {{cssxref("length")}}

  - : Als absolute oder relative Länge kann sie in jeder Einheit ausgedrückt werden, die vom CSS {{cssxref("&lt;length&gt;")}} Datentyp erlaubt ist.

- {{cssxref("percentage")}}

  - : Prozentsätze beziehen sich auf die Breite des SVG {{SVGAttr("viewBox")}}, falls deklariert, andernfalls bezieht sich der Prozentsatz auf die Breite des aktuellen SVG-Viewports.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definition der x-Achsen-Koordinaten von SVG-Formen

Dieses Beispiel demonstriert den grundlegenden Anwendungsfall von `x` und wie die CSS-`x`-Eigenschaft Vorrang gegenüber dem `x`-Attribut hat.

#### HTML

Wir fügen vier identische SVG `<rect>`-Elemente ein; deren `x`- und {{SVGAttr("y")}}-Attributwerte sind alle `10`, was bedeutet, dass sich die vier Rechtecke alle an derselben Stelle befinden, `10px` vom oberen und linken Rand des SVG-Viewports.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" x="10" y="10" />
  <rect width="100" height="100" x="10" y="10" />
  <rect width="100" height="100" x="10" y="10" />
  <rect width="100" height="100" x="10" y="10" />
</svg>
```

#### CSS

Wir stylen alle Rechtecke mit einem schwarzen Rahmen und machen sie leicht transparent, sodass überlappende Rechtecke sichtbar sind. Wir geben jedem Rechteck unterschiedliche Füll- und `x`-Werte.

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

Die linken Kanten der Rechtecke befinden sich bei `10` (vom Attribut) `3em`, `180px` und `50%`. Das SVG ist `300px` breit, daher befindet sich die linke Seite des letzten Rechtecks bei der `150px`-Marke.

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
