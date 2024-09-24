---
title: x
slug: Web/CSS/x
l10n:
  sourceCommit: c276224e43228e7d45e4894729fdc56a904615f5
---

{{CSSRef}}

Die **`x`**-Eigenschaft ([CSS](/de/docs/Web/CSS)) definiert die x-Achsenkoordinate der oberen linken Ecke der SVG {{SVGElement("rect")}} Form, des {{SVGElement("image")}} Bildes, des {{SVGElement("foreignObject")}} Ansichtsfensters oder des verschachtelten {{SVGElement("svg")}}-Ansichtsfensters relativ zum Benutzerkoordinatensystem des nächsten `<svg>`-Vorfahren. Wenn vorhanden, überschreibt sie das {{SVGAttr("x")}}-Attribut des Elements.

> [!NOTE]
> Die `x`-Eigenschaft gilt nur für {{SVGElement("rect")}}, {{SVGElement("image")}}, {{SVGElement("foreignObject")}} und {{SVGElement("svg")}}-Elemente, die in einem {{SVGElement("svg")}} verschachtelt sind. Sie hat keinen Effekt auf das äußerste `<svg>`-Element selbst und gilt nicht für andere SVG-Elemente, HTML-Elemente oder Pseudo-Elemente.

## Syntax

```css
/* Längen- und Prozentwerte */
x: 40px;
x: 40%;

/* Globale Werte */
x: inherit;
x: initial;
x: revert;
x: revert-layer;
x: unset;
```

### Werte

Die Werte {{cssxref("length")}} und {{cssxref("percentage")}} geben die x-Achsenkoordinatenposition der oberen linken Ecke des SVG-Elementcontainers an.

- {{cssxref("length")}}

  - : Als absolute oder relative Länge kann sie in jeder Einheit ausgedrückt werden, die von dem CSS {{cssxref("&lt;length&gt;")}} Datentyp erlaubt ist.

- {{cssxref("percentage")}}

  - : Prozentsätze beziehen sich auf die Breite des SVG {{SVGAttr("viewBox")}}, falls angegeben, andernfalls bezieht sich der Prozentsatz auf die Breite des aktuellen SVG-Ansichtsfensters.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definition der x-Achsenkoordinaten von SVG-Formen

Dieses Beispiel demonstriert den grundlegenden Anwendungsfall von `x` und wie die CSS `x`-Eigenschaft Vorrang vor dem `x`-Attribut hat.

#### HTML

Wir fügen vier identische SVG `<rect>`-Elemente ein; ihre `x`- und {{SVGAttr("y")}}-Attributwerte sind alle `10`, was bedeutet, dass die vier Rechtecke sich alle an derselben Stelle befinden, `10px` vom oberen und linken Rand des SVG-Ansichtsfensters entfernt.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" x="10" y="10" />
  <rect width="100" height="100" x="10" y="10" />
  <rect width="100" height="100" x="10" y="10" />
  <rect width="100" height="100" x="10" y="10" />
</svg>
```

#### CSS

Wir gestalten alle Rechtecke so, dass sie einen schwarzen Rand haben und leicht transparent sind, sodass sich überlappende Rechtecke sichtbar sind. Wir versehen jedes Rechteck mit unterschiedlichen Füll- und `x`-Werten.

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

Die linken Kanten der Rechtecke befinden sich bei `10` (vom Attribut), `3em`, `180px` und `50%`. Das SVG ist `300px` breit, daher ist die linke Seite des letzten Rechtecks bei der `150px`-Marke.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- SVG {{SVGAttr("x")}} Attribut
- Geometrie-Eigenschaften: `x`, {{cssxref("cx")}}, {{cssxref("cy")}}, {{cssxref("r")}}, {{cssxref("rx")}}, {{cssxref("ry")}}, {{cssxref("y")}}, {{cssxref("width")}}, {{cssxref("height")}}
- {{cssxref("fill")}}
- {{cssxref("stroke")}}
- {{cssxref("paint-order")}}
- {{cssxref("basic-shape")}} Datentyp
