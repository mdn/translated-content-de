---
title: y
slug: Web/CSS/Reference/Properties/y
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`y`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die y-Achsen-Koordinate der oberen linken Ecke der SVG {{SVGElement("rect")}} Form, des {{SVGElement("image")}} Bildes, des {{SVGElement("foreignObject")}} Viewports und des verschachtelten {{SVGElement("svg")}} Viewports relativ zum nächstgelegenen `<svg>`-Vorfahr im Benutzer-[Koordinatensystem](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems). Falls vorhanden, überschreibt sie das {{SVGAttr("y")}} Attribut des Elements.

> [!NOTE]
> Die `y` Eigenschaft gilt nur für {{SVGElement("rect")}}, {{SVGElement("image")}}, {{SVGElement("foreignObject")}} und verschachtelte {{SVGElement("svg")}} Elemente in einem `<svg>`. Sie hat keine Wirkung auf äußere `<svg>` Elemente und gilt nicht für andere SVG-Elemente oder HTML-Elemente und Pseudo-Elemente.

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

Die {{cssxref("length")}} und {{cssxref("percentage")}} Werte geben die Position der y-Achsen-Koordinate der oberen linken Ecke des SVG-Elements an.

- {{cssxref("length")}}
  - : Als absolute oder relative Länge kann sie in jeder Einheit ausgedrückt werden, die vom CSS {{cssxref("&lt;length&gt;")}} Datentyp erlaubt ist.

- {{cssxref("percentage")}}
  - : Prozentsätze beziehen sich auf die Höhe des SVG {{SVGAttr("viewBox")}}, falls deklariert; andernfalls bezieht sich der Prozentsatz auf die Höhe des aktuellen SVG-Viewports.

## Formale Definition

{{CSSInfo}}

## Formaler Syntax

{{csssyntax}}

## Beispiele

### Bestimmung der y-Achsen-Koordinaten von SVG-Formen

Dieses Beispiel demonstriert den grundlegenden Anwendungsfall von `y` und wie die CSS `y` Eigenschaft das `y` Attribut überlagert.

#### HTML

Wir fügen vier identische SVG `<rect>` Elemente ein; ihre {{SVGAttr("x")}} und `y` Attributwerte sind alle `10`, was bedeutet, dass die vier Rechtecke am gleichen Ort sind, `10px` von der oberen und linken Ecke des SVG-Viewports entfernt.

```html
<svg>
  <rect width="40" height="40" x="10" y="10" />
  <rect width="40" height="40" x="10" y="10" />
  <rect width="40" height="40" x="10" y="10" />
  <rect width="40" height="40" x="10" y="10" />
</svg>
```

#### CSS

Wir gestalten alle Rechtecke mit einem schwarzen Rand und leicht transparent, sodass überlappende Rechtecke sichtbar sind. Wir geben den Rechtecken verschiedene {{cssxref("fill")}} und `y` Werte.

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

Die oberen Kanten der Rechtecke sind bei `10` (vom Attribut), `-20px`, `4em` und `60%` entsprechend. Das Rechteck ist `40px` hoch, also platziert `-20px` die obere Hälfte des roten Rechtecks außerhalb des Viewports. Der SVG-Bereich ist `150px` hoch, daher ist die obere Seite des orangenen Rechtecks `90px` von der oberen Seite des SVG-Viewports entfernt.

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
