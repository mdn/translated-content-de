---
title: "y"
slug: Web/CSS/y
l10n:
  sourceCommit: c276224e43228e7d45e4894729fdc56a904615f5
---

{{CSSRef}}

Die **`y`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die y-Achsenkoordinate der oberen linken Ecke der SVG {{SVGElement("rect")}} Form, des {{SVGElement("image")}} Bildes, des {{SVGElement("foreignObject")}} Ansichtsfensters und des verschachtelten {{SVGElement("svg")}} Ansichtsfensters relativ zum nächsten `<svg>` Vorfahren im Benutzer-[Koordinatensystem](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems). Wenn vorhanden, überschreibt sie das {{SVGAttr("y")}} Attribut des Elements.

> [!NOTE]
> Die `y` Eigenschaft gilt nur für {{SVGElement("rect")}}, {{SVGElement("image")}}, {{SVGElement("foreignObject")}} und {{SVGElement("svg")}} Elemente, die in einem `<svg>` verschachtelt sind. Sie hat keine Wirkung auf äußerste `<svg>` Elemente und gilt nicht für andere SVG-Elemente oder HTML-Elemente und Pseudoelemente.

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

Die {{cssxref("length")}} und {{cssxref("percentage")}} Werte geben die Position der y-Achsenkoordinate der oberen linken Ecke des SVG-Elements an.

- {{cssxref("length")}}

  - : Als absolute oder relative Länge kann sie in jeder Einheit ausgedrückt werden, die vom CSS-Datentyp {{cssxref("&lt;length&gt;")}} erlaubt ist.

- {{cssxref("percentage")}}

  - : Prozentsätze beziehen sich auf die Höhe der SVG {{SVGAttr("viewBox")}}, falls deklariert, andernfalls bezieht sich der Prozentsatz auf die Höhe des aktuellen SVG-Ansichtsfensters.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definierung der y-Achsenkoordinaten von SVG-Formen

Dieses Beispiel zeigt den grundlegenden Anwendungsfall von `y` und wie die CSS `y` Eigenschaft gegenüber dem `y` Attribut Vorrang hat.

#### HTML

Wir fügen vier identische SVG `<rect>` Elemente ein; ihre {{SVGAttr("x")}} und `y` Attributwerte sind alle `10`, was bedeutet, dass die vier Rechtecke sich alle an derselben Position, `10px` vom oberen und linken Rand des SVG-Ansichtsfensters befinden.

```html
<svg>
  <rect width="40" height="40" x="10" y="10" />
  <rect width="40" height="40" x="10" y="10" />
  <rect width="40" height="40" x="10" y="10" />
  <rect width="40" height="40" x="10" y="10" />
</svg>
```

#### CSS

Wir gestalten alle Rechtecke so, dass sie einen schwarzen Rahmen haben und leicht transparent sind, sodass sich überlappende Rechtecke sichtbar sind. Wir versehen das Rechteck mit unterschiedlichen {{cssxref("fill")}} und `y` Werten.

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

{{EmbedLiveSample("Definierung der y-Achsenkoordinate von SVG-Formen", "300", "180")}}

Die oberen Kanten der Rechtecke befinden sich bei `10` (vom Attribut), `-20px`, `4em` und `60%`. Das Rechteck ist `40px` hoch, daher platziert das `-20px` die Hälfte des roten Rechtecks außerhalb des Ansichtsfensters. Das SVG ist `150px` hoch, sodass die Oberkante des orangefarbenen Rechtecks `90px` vom oberen Rand des SVG-Ansichtsfensters entfernt ist.

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
