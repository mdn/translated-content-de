---
title: y
slug: Web/CSS/y
l10n:
  sourceCommit: 896a41d7d9832367a1e24af567fb419e9d4182f8
---

Die **`y`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die y-Achsen-Koordinate der linken oberen Ecke der SVG {{SVGElement("rect")}} Form, des {{SVGElement("image")}} Bildes, des {{SVGElement("foreignObject")}} Viewports und des verschachtelten {{SVGElement("svg")}} Viewports relativ zum nächsten `<svg>` Vorfahren im Benutzer-[Koordinatensystem](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems). Falls vorhanden, überschreibt sie das {{SVGAttr("y")}} Attribut des Elements.

> [!NOTE]
> Die `y` Eigenschaft gilt nur für {{SVGElement("rect")}}, {{SVGElement("image")}}, {{SVGElement("foreignObject")}} und {{SVGElement("svg")}} Elemente, die in einem `<svg>` verschachtelt sind. Sie hat keine Auswirkung auf äußerste `<svg>` Elemente und gilt nicht für andere SVG-Elemente oder HTML-Elemente und Pseudoelemente.

## Syntax

```css
/* length and percentage values */
y: 10px;
y: 10%;

/* Global values */
y: inherit;
y: initial;
y: revert;
y: revert-layer;
y: unset;
```

### Werte

Die {{cssxref("length")}} und {{cssxref("percentage")}} Werte geben die y-Achsen-Koordinatenposition der linken oberen Ecke des SVG-Elements an.

- {{cssxref("length")}}
  - : Als absolute oder relative Länge kann sie in jeder Einheit ausgedrückt werden, die vom CSS {{cssxref("&lt;length&gt;")}} Datentyp erlaubt ist.

- {{cssxref("percentage")}}
  - : Prozentwerte beziehen sich auf die Höhe der SVG {{SVGAttr("viewBox")}}, falls deklariert. Andernfalls bezieht sich der Prozentwert auf die Höhe des aktuellen SVG-Viewports.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definition der y-Achsen-Koordinaten von SVG-Formen

Dieses Beispiel zeigt den grundlegenden Anwendungsfall von `y` und wie die CSS `y` Eigenschaft das `y` Attribut übersteuert.

#### HTML

Wir fügen vier identische SVG `<rect>` Elemente ein; deren {{SVGAttr("x")}} und `y` Attributwerte sind alle `10`, was bedeutet, dass die vier Rechtecke sich alle an derselben Stelle befinden, `10px` von der oberen und linken Ecke des SVG-Viewports entfernt.

```html
<svg>
  <rect width="40" height="40" x="10" y="10" />
  <rect width="40" height="40" x="10" y="10" />
  <rect width="40" height="40" x="10" y="10" />
  <rect width="40" height="40" x="10" y="10" />
</svg>
```

#### CSS

Wir gestalten alle Rechtecke mit einem schwarzen Rahmen und machen sie leicht transparent, sodass überlappende Rechtecke sichtbar sind. Wir versehen das Rechteck mit unterschiedlichen {{cssxref("fill")}} und `y` Werten.

```css
svg {
  border: 1px solid;
}

rect {
  fill: none;
  stroke: black;
  opacity: 0.8;
}

rect:nth-of-type(2) {
  y: -20px;
  fill: red;
}

rect:nth-of-type(3) {
  y: 4em;
  fill: yellow;
}

rect:nth-of-type(4) {
  y: 60%;
  fill: orange;
}
```

#### Ergebnisse

{{EmbedLiveSample("Defining the y-axis coordinate of SVG shapes", "300", "180")}}

Die oberen Kanten der Rechtecke befinden sich bei `10` (vom Attribut), `-20px`, `4em` und `60%`. Das Rechteck ist `40px` hoch, sodass `-20px` die Hälfte des roten Rechtecks außerhalb des Viewports platziert. Das SVG ist `150px` hoch, sodass sich die obere Seite des orangefarbenen Rechtecks `90px` von der Oberseite des SVG-Viewports entfernt befindet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG {{SVGAttr("y")}} Attribut
- Geometrie-Eigenschaften: `y`, {{cssxref("cx")}}, {{cssxref("cy")}}, {{cssxref("r")}}, {{cssxref("rx")}}, {{cssxref("ry")}}, {{cssxref("x")}}, {{cssxref("width")}}, {{cssxref("height")}}
- {{cssxref("fill")}}
- {{cssxref("stroke")}}
- {{cssxref("paint-order")}}
- {{cssxref("basic-shape")}} Datentyp
