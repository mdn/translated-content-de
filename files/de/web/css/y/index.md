---
title: y
slug: Web/CSS/y
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Die **`y`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert die y-Achsen-Koordinate der oberen linken Ecke der SVG-{{SVGElement("rect")}}-Form, des {{SVGElement("image")}}-Bildes, des {{SVGElement("foreignObject")}}-Viewports und des verschachtelten {{SVGElement("svg")}}-Viewports relativ zum Benutzer-[Koordinatensystem](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems) des nächsten `<svg>`-Vorfahrens. Falls vorhanden, überschreibt sie das {{SVGAttr("y")}}-Attribut des Elements.

> [!NOTE]
> Die `y`-Eigenschaft gilt nur für {{SVGElement("rect")}}-, {{SVGElement("image")}}-, {{SVGElement("foreignObject")}}- und {{SVGElement("svg")}}-Elemente, die in einem `<svg>` verschachtelt sind. Sie hat keine Wirkung auf äußerste `<svg>`-Elemente und gilt nicht für andere SVG-Elemente noch für HTML-Elemente oder Pseudo-Elemente.

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

Die Werte {{cssxref("length")}} und {{cssxref("percentage")}} geben die y-Achsen-Koordinatenposition der oberen linken Ecke des SVG-Elements an.

- {{cssxref("length")}}

  - : Als eine absolute oder relative Länge kann sie in jeder Einheit angegeben werden, die vom CSS-Datentyp {{cssxref("&lt;length&gt;")}} erlaubt ist.

- {{cssxref("percentage")}}

  - : Prozentwerte beziehen sich auf die Höhe der SVG-{{SVGAttr("viewBox")}}, falls vorhanden, andernfalls beziehen sich die Prozente auf die Höhe des aktuellen SVG-Viewports.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definieren der y-Achsen-Koordinaten von SVG-Formen

Dieses Beispiel demonstriert den grundlegenden Anwendungsfall von `y` und wie die CSS-`y`-Eigenschaft das `y`-Attribut übergeht.

#### HTML

Wir fügen vier identische SVG-`<rect>`-Elemente ein. Ihre {{SVGAttr("x")}}- und `y`-Attributwerte sind alle `10`, was bedeutet, dass sich alle vier Rechtecke an derselben Stelle befinden, `10px` vom oberen und linken Rand des SVG-Viewports.

```html
<svg>
  <rect width="40" height="40" x="10" y="10" />
  <rect width="40" height="40" x="10" y="10" />
  <rect width="40" height="40" x="10" y="10" />
  <rect width="40" height="40" x="10" y="10" />
</svg>
```

#### CSS

Wir gestalten alle Rechtecke mit einer schwarzen Umrandung und leicht transparenter Füllung, sodass sich überlappende Rechtecke sichtbar sind. Wir geben den Rechtecken unterschiedliche {{cssxref("fill")}}- und `y`-Werte.

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

Die oberen Kanten der Rechtecke befinden sich bei `10` (durch das Attribut), `-20px`, `4em` und `60%`. Die Höhe des Rechtecks beträgt `40px`, daher befindet sich die Hälfte des roten Rechtecks bei `-20px` außerhalb des Viewports. Das SVG ist `150px` hoch, daher befindet sich die Oberkante des orangefarbenen Rechtecks `90px` vom oberen Rand des SVG-Viewports entfernt.

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
