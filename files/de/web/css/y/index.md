---
title: y
slug: Web/CSS/y
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`y`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die y-Achsen-Koordinate der oberen linken Ecke der SVG {{SVGElement("rect")}} Form, des {{SVGElement("image")}} Bildes, des {{SVGElement("foreignObject")}} Viewports und des verschachtelten {{SVGElement("svg")}} Viewports relativ zum nächstgelegenen `<svg>` Vorfahren im Nutzer-[Koordinatensystem](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems). Wenn vorhanden, überschreibt sie das {{SVGAttr("y")}} Attribut des Elements.

> [!NOTE]
> Die `y` Eigenschaft gilt nur für verschachtelte {{SVGElement("rect")}}, {{SVGElement("image")}}, {{SVGElement("foreignObject")}}, und {{SVGElement("svg")}} Elemente in einem `<svg>`. Sie hat keine Auswirkung auf äußerste `<svg>` Elemente und gilt nicht für andere SVG-Elemente noch für HTML-Elemente oder Pseudo-Elemente.

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

Die {{cssxref("length")}} und {{cssxref("percentage")}} Werte geben die y-Achsen-Koordinatenposition der oberen linken Ecke des SVG-Elements an.

- {{cssxref("length")}}

  - : Als absolute oder relative Länge kann sie in jeder vom CSS {{cssxref("&lt;length&gt;")}} Datentyp erlaubten Einheit ausgedrückt werden.

- {{cssxref("percentage")}}
  - : Prozentsätze beziehen sich auf die Höhe des SVG {{SVGAttr("viewBox")}}, wenn deklariert, andernfalls bezieht sich der Prozentsatz auf die Höhe des aktuellen SVG Viewports.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definieren der y-Achsen-Koordinate von SVG-Formen

Dieses Beispiel zeigt den grundlegenden Anwendungsfall von `y` und wie die CSS `y` Eigenschaft das `y` Attribut überlagert.

#### HTML

Wir fügen vier identische SVG `<rect>` Elemente ein; deren {{SVGAttr("x")}} und `y` Attributwerte sind alle `10`, was bedeutet, dass sich die vier Rechtecke an derselben Stelle befinden, `10px` vom oberen und linken Rand des SVG Viewports.

```html
<svg>
  <rect width="40" height="40" x="10" y="10" />
  <rect width="40" height="40" x="10" y="10" />
  <rect width="40" height="40" x="10" y="10" />
  <rect width="40" height="40" x="10" y="10" />
</svg>
```

#### CSS

Wir stylen alle Rechtecke mit einem schwarzen Rand und machen sie leicht transparent, damit überlappende Rechtecke sichtbar sind. Wir versehen die Rechtecke mit unterschiedlichen {{cssxref("fill")}} und `y` Werten.

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

Die oberen Kanten der Rechtecke befinden sich bei `10` (vom Attribut), `-20px`, `4em` und `60%`. Das Rechteck ist `40px` hoch, daher befindet sich die Hälfte des roten Rechtecks bei `-20px` außerhalb des Viewports. Das SVG ist `150px` hoch, sodass sich die obere Seite des orangefarbenen Rechtecks `90px` vom oberen Rand des SVG Viewports befindet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG {{SVGAttr("y")}} Attribut
- Geometrieeigenschaften: `y`, {{cssxref("cx")}}, {{cssxref("cy")}}, {{cssxref("r")}}, {{cssxref("rx")}}, {{cssxref("ry")}}, {{cssxref("x")}}, {{cssxref("width")}}, {{cssxref("height")}}
- {{cssxref("fill")}}
- {{cssxref("stroke")}}
- {{cssxref("paint-order")}}
- {{cssxref("basic-shape")}} Datentyp
