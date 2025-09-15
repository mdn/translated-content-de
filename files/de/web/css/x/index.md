---
title: x
slug: Web/CSS/x
l10n:
  sourceCommit: 896a41d7d9832367a1e24af567fb419e9d4182f8
---

Die **`x`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die x-Achsenkoordinate der oberen linken Ecke der SVG {{SVGElement("rect")}} Form, {{SVGElement("image")}} Bild, {{SVGElement("foreignObject")}} Ansicht oder des verschachtelten {{SVGElement("svg")}} Ansichtsbereichs relativ zum Benutzer-Koordinatensystem des nächstgelegenen `<svg>`-Vorfahrens. Falls vorhanden, überschreibt sie das {{SVGAttr("x")}} Attribut des Elements.

> [!NOTE]
> Die `x` Eigenschaft gilt nur für in einem {{SVGElement("svg")}} verschachtelte {{SVGElement("rect")}}, {{SVGElement("image")}}, {{SVGElement("foreignObject")}} und {{SVGElement("svg")}} Elemente. Sie hat keinen Effekt auf das äußerste `<svg>`-Element selbst und gilt nicht für andere SVG-Elemente noch für HTML-Elemente oder Pseudoelemente.

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

Die {{cssxref("length")}} und {{cssxref("percentage")}} Werte geben die x-Achsenkoordinatenposition der oberen linken Ecke des SVG-Elementcontainers an.

- {{cssxref("length")}}
  - : Als absolute oder relative Länge kann sie in jeder vom CSS {{cssxref("&lt;length&gt;")}} Datentyp zulässigen Einheit ausgedrückt werden.

- {{cssxref("percentage")}}
  - : Prozentsätze beziehen sich auf die Breite des SVG {{SVGAttr("viewBox")}}, falls deklariert, ansonsten bezieht sich der Prozentsatz auf die Breite des aktuellen SVG-Ansichtsbereichs.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definition der x-Achsenkoordinaten von SVG-Formen

Dieses Beispiel zeigt den grundlegenden Anwendungsfall von `x` und wie die CSS `x` Eigenschaft Vorrang vor dem `x` Attribut hat.

#### HTML

Wir fügen vier identische SVG `<rect>` Elemente ein; ihre `x` und {{SVGAttr("y")}} Attributswerte sind alle `10`, was bedeutet, dass die vier Rechtecke sich alle an derselben Stelle befinden, `10px` von der oberen und linken Ecke des SVG-Ansichtsbereichs entfernt.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" x="10" y="10" />
  <rect width="100" height="100" x="10" y="10" />
  <rect width="100" height="100" x="10" y="10" />
  <rect width="100" height="100" x="10" y="10" />
</svg>
```

#### CSS

Wir stilisieren alle Rechtecke so, dass sie einen schwarzen Rand haben und leicht transparent sind, damit überlappende Rechtecke sichtbar sind. Wir geben jedem Rechteck unterschiedliche Füll- und `x` Werte.

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

{{EmbedLiveSample("Definition der x-Achsenkoordinate von SVG-Formen", "300", "180")}}

Die linken Kanten der Rechtecke befinden sich jeweils bei `10` (vom Attribut), `3em`, `180px` und `50%`. Das SVG ist `300px` breit, daher befindet sich die linke Seite des letzten Rechtecks bei der `150px`-Markierung.

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
