---
title: y
slug: Web/CSS/y
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`y`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert die y-Achsen-Koordinate der oberen linken Ecke der SVG {{SVGElement("rect")}}-Form, des {{SVGElement("image")}}-Bildes, des {{SVGElement("foreignObject")}}-Viewports und des verschachtelten {{SVGElement("svg")}}-Viewports relativ zum nächstgelegenen `<svg>`-Vorfahrers im Benutzer-Koordinatensystem. Wenn vorhanden, überschreibt sie das {{SVGAttr("y")}}-Attribut des Elements.

> [!NOTE]
> Die `y`-Eigenschaft gilt nur für {{SVGElement("rect")}}, {{SVGElement("image")}}, {{SVGElement("foreignObject")}} und {{SVGElement("svg")}}-Elemente, die in einem `<svg>` verschachtelt sind. Sie hat keine Wirkung auf äußerste `<svg>`-Elemente und gilt weder für andere SVG-Elemente noch für HTML-Elemente oder Pseudo-Elemente.

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

Die {{cssxref("length")}}- und {{cssxref("percentage")}}-Werte geben die y-Achsen-Koordinatenposition der oberen linken Ecke des SVG-Elements an.

- {{cssxref("length")}}
  - : Als absolute oder relative Länge kann es in jeder Einheit ausgedrückt werden, die vom CSS {{cssxref("&lt;length&gt;")}}-Datentyp erlaubt ist.

- {{cssxref("percentage")}}
  - : Prozentsätze beziehen sich auf die Höhe des SVG-{{SVGAttr("viewBox")}}, falls deklariert, andernfalls bezieht sich der Prozentsatz auf die Höhe des aktuellen SVG-Viewports.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definieren der y-Achsen-Koordinaten von SVG-Formen

Dieses Beispiel zeigt die grundlegende Verwendung von `y` und wie die CSS `y`-Eigenschaft das `y`-Attribut überlagert.

#### HTML

Wir fügen vier identische SVG-`<rect>`-Elemente ein; ihre {{SVGAttr("x")}}- und `y`-Attributwerte betragen alle `10`, was bedeutet, dass sich die vier Rechtecke alle an derselben Stelle befinden, `10px` von der oberen und linken Ecke des SVG-Viewports entfernt.

```html
<svg>
  <rect width="40" height="40" x="10" y="10" />
  <rect width="40" height="40" x="10" y="10" />
  <rect width="40" height="40" x="10" y="10" />
  <rect width="40" height="40" x="10" y="10" />
</svg>
```

#### CSS

Wir gestalten alle Rechtecke mit einem schwarzen Rand und leicht transparenter Füllung, damit überlappende Rechtecke sichtbar sind. Wir versehen das Rechteck mit unterschiedlichen {{cssxref("fill")}} und `y`-Werten.

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

Die oberen Kanten der Rechtecke befinden sich jeweils bei `10` (vom Attribut), `-20px`, `4em` und `60%`. Das Rechteck ist `40px` hoch, sodass die `-20px` die obere Hälfte des roten Rechtecks außerhalb des Viewports platzieren. Das SVG ist `150px` hoch, sodass die obere Seite des orangefarbenen Rechtecks `90px` von der oberen Seite des SVG-Viewports entfernt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG-{{SVGAttr("y")}}-Attribut
- Geometrie-Eigenschaften: `y`, {{cssxref("cx")}}, {{cssxref("cy")}}, {{cssxref("r")}}, {{cssxref("rx")}}, {{cssxref("ry")}}, {{cssxref("x")}}, {{cssxref("width")}}, {{cssxref("height")}}
- {{cssxref("fill")}}
- {{cssxref("stroke")}}
- {{cssxref("paint-order")}}
- {{cssxref("basic-shape")}}-Datentyp
