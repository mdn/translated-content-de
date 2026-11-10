---
title: "`x` CSS property"
short-title: x
slug: Web/CSS/Reference/Properties/x
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Die **`x`**-[CSS](/de/docs/Web/CSS)-Eigenschaft definiert die x-Achsen-Koordinate der oberen linken Ecke der SVG-Form {{SVGElement("rect")}}, des Bildes {{SVGElement("image")}}, des Viewports {{SVGElement("foreignObject")}} oder eines verschachtelten {{SVGElement("svg")}}-Viewports relativ zum Benutzer-[Koordinatensystem](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems) des nächstgelegenen `<svg>`-Vorfahren. Falls die Eigenschaft angegeben ist, hat sie Vorrang vor dem {{SVGAttr("x")}}-Attribut des Elements.

> [!NOTE]
> Die Eigenschaft `x` gilt nur für die Elemente {{SVGElement("rect")}}, {{SVGElement("image")}}, {{SVGElement("foreignObject")}} und {{SVGElement("svg")}}, die in einem {{SVGElement("svg")}} verschachtelt sind. Sie hat keine Auswirkung auf das äußerste `<svg>`-Element und gilt weder für andere SVG-Elemente noch für HTML-Elemente oder Pseudoelemente.

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

Die Werte {{cssxref("length")}} und {{cssxref("percentage")}} geben die Position der oberen linken Ecke des SVG-Element-Containers auf der x-Achse an.

- {{cssxref("length")}}
  - : Eine absolute oder relative Länge, die in jeder Einheit angegeben werden kann, die der CSS-Datentyp {{cssxref("&lt;length&gt;")}} erlaubt.

- {{cssxref("percentage")}}
  - : Prozentwerte beziehen sich auf die Breite der SVG-{{SVGAttr("viewBox")}}, sofern diese angegeben ist. Andernfalls beziehen sie sich auf die Breite des aktuellen SVG-Viewports.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### x-Achsen-Koordinaten von SVG-Formen festlegen

Dieses Beispiel zeigt die grundlegende Verwendung von `x` und wie die CSS-Eigenschaft `x` Vorrang vor dem Attribut `x` hat.

#### HTML

Wir fügen vier identische SVG-`<rect>`-Elemente ein. Die Werte ihrer Attribute `x` und {{SVGAttr("y")}} sind jeweils `10`. Das bedeutet, dass sich alle vier Rechtecke an derselben Position befinden, jeweils `10px` vom oberen und linken Rand des SVG-Viewports entfernt.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" x="10" y="10" />
  <rect width="100" height="100" x="10" y="10" />
  <rect width="100" height="100" x="10" y="10" />
  <rect width="100" height="100" x="10" y="10" />
</svg>
```

#### CSS

Wir geben allen Rechtecken einen schwarzen Rand und machen sie leicht transparent, damit überlappende Rechtecke sichtbar sind. Jedes Rechteck erhält unterschiedliche Werte für die Füllung und `x`.

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

#### Ergebnis

{{EmbedLiveSample("defining_the_x-axis_coordinates_of_svg_shapes", "300", "180")}}

Die linken Kanten der Rechtecke liegen bei `10` (aus dem Attribut), `3em`, `180px` beziehungsweise `50%`. Das SVG ist `300px` breit. Daher liegt die linke Kante des letzten Rechtecks bei `150px`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG-Attribut {{SVGAttr("x")}}
- Geometrieeigenschaften: `x`, {{cssxref("cx")}}, {{cssxref("cy")}}, {{cssxref("r")}}, {{cssxref("rx")}}, {{cssxref("ry")}}, {{cssxref("y")}}, {{cssxref("width")}}, {{cssxref("height")}}
- {{cssxref("fill")}}
- {{cssxref("stroke")}}
- {{cssxref("paint-order")}}
- Datentyp {{cssxref("basic-shape")}}
