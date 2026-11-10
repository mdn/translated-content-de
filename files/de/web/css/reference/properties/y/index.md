---
title: "`y` CSS property"
short-title: y
slug: Web/CSS/Reference/Properties/y
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`y`** definiert die y-Achsen-Koordinate der oberen linken Ecke einer SVG-{{SVGElement("rect")}}-Form, eines {{SVGElement("image")}}-Bildes sowie der Viewports von {{SVGElement("foreignObject")}} und eines verschachtelten {{SVGElement("svg")}}. Die Koordinate bezieht sich auf das Benutzer-[Koordinatensystem](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems) des nächstgelegenen übergeordneten `<svg>`-Elements. Ist die Eigenschaft angegeben, überschreibt sie das {{SVGAttr("y")}}-Attribut des Elements.

> [!NOTE]
> Die Eigenschaft `y` gilt nur für {{SVGElement("rect")}}-, {{SVGElement("image")}}-, {{SVGElement("foreignObject")}}- und {{SVGElement("svg")}}-Elemente, die in einem `<svg>` verschachtelt sind. Sie hat keine Auswirkungen auf äußerste `<svg>`-Elemente und gilt weder für andere SVG-Elemente noch für HTML-Elemente oder Pseudoelemente.

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

Die Werte {{cssxref("length")}} und {{cssxref("percentage")}} geben die Position der oberen linken Ecke des SVG-Elements auf der y-Achse an.

- {{cssxref("length")}}
  - : Als absolute oder relative Länge kann der Wert in jeder Einheit angegeben werden, die der CSS-Datentyp {{cssxref("&lt;length&gt;")}} zulässt.

- {{cssxref("percentage")}}
  - : Prozentwerte beziehen sich auf die Höhe der SVG-{{SVGAttr("viewBox")}}, sofern diese definiert ist. Andernfalls beziehen sie sich auf die Höhe des aktuellen SVG-Viewports.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### y-Achsen-Koordinaten von SVG-Formen festlegen

Dieses Beispiel zeigt die grundlegende Verwendung von `y` und wie die CSS-Eigenschaft `y` Vorrang vor dem Attribut `y` hat.

#### HTML

Wir fügen vier identische SVG-`<rect>`-Elemente ein. Ihre Attributwerte für {{SVGAttr("x")}} und `y` sind jeweils `10`. Damit befinden sich alle vier Rechtecke an derselben Position, jeweils `10px` vom oberen und linken Rand des SVG-Viewports entfernt.

```html
<svg>
  <rect width="40" height="40" x="10" y="10" />
  <rect width="40" height="40" x="10" y="10" />
  <rect width="40" height="40" x="10" y="10" />
  <rect width="40" height="40" x="10" y="10" />
</svg>
```

#### CSS

Wir geben allen Rechtecken einen schwarzen Rand und machen sie leicht transparent, damit überlappende Rechtecke sichtbar sind. Den Rechtecken weisen wir unterschiedliche Werte für {{cssxref("fill")}} und `y` zu.

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

#### Ergebnis

{{EmbedLiveSample("defining_the_y-axis_coordinates_of_svg_shapes", "300", "180")}}

Die oberen Kanten der Rechtecke liegen bei `10` (aus dem Attribut), `-20px`, `4em` beziehungsweise `60%`. Die Rechtecke sind `40px` hoch. Bei `-20px` liegt daher die Hälfte des roten Rechtecks außerhalb des Viewports. Das SVG ist `150px` hoch; die obere Kante des orangefarbenen Rechtecks befindet sich somit `90px` vom oberen Rand des SVG-Viewports entfernt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG-Attribut {{SVGAttr("y")}}
- Geometrieeigenschaften: `y`, {{cssxref("cx")}}, {{cssxref("cy")}}, {{cssxref("r")}}, {{cssxref("rx")}}, {{cssxref("ry")}}, {{cssxref("x")}}, {{cssxref("width")}}, {{cssxref("height")}}
- {{cssxref("fill")}}
- {{cssxref("stroke")}}
- {{cssxref("paint-order")}}
- Datentyp {{cssxref("basic-shape")}}
