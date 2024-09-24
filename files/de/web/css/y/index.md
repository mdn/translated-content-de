---
title: "y"
slug: Web/CSS/y
l10n:
  sourceCommit: c276224e43228e7d45e4894729fdc56a904615f5
---

{{CSSRef}}

Die **`y`**-Eigenschaft ([CSS](/de/docs/Web/CSS)) definiert die y-Achsen-Koordinate der oberen linken Ecke der SVG {{SVGElement("rect")}}-Form, des {{SVGElement("image")}}-Bildes, des {{SVGElement("foreignObject")}}-Viewports und der verschachtelten {{SVGElement("svg")}}-Ansicht relativ zum Koordinatensystem des nächsten `<svg>`-Vorfahren. Wenn vorhanden, überschreibt sie das {{SVGAttr("y")}}-Attribut des Elements.

> [!NOTE]
> Die `y`-Eigenschaft gilt nur für {{SVGElement("rect")}}, {{SVGElement("image")}}, {{SVGElement("foreignObject")}} und verschachtelte {{SVGElement("svg")}}-Elemente innerhalb eines `<svg>`. Sie hat keine Wirkung auf äußerste `<svg>`-Elemente und gilt nicht für andere SVG-Elemente noch für HTML-Elemente oder Pseudo-Elemente.

## Syntax

```css
/* Längen- und Prozentwerte */
y: 10px;
y: 10%;

/* Globale Werte */
y: inherit;
y: initial;
y: revert;
y: revert-layer;
y: unset;
```

### Werte

Die {{cssxref("length")}}- und {{cssxref("percentage")}}-Werte geben die Position der y-Achsen-Koordinate der oberen linken Ecke des SVG-Elements an.

- {{cssxref("length")}}

  - : Als absolute oder relative Länge kann es in jeder von dem CSS-{{cssxref("&lt;length&gt;")}}-Datentyp erlaubten Einheit ausgedrückt werden.

- {{cssxref("percentage")}}

  - : Prozentsätze beziehen sich auf die Höhe des SVG-{{SVGAttr("viewBox")}}, wenn deklariert, andernfalls bezieht sich der Prozentsatz auf die Höhe des aktuellen SVG-Viewports.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definition der y-Achsenkoordinaten von SVG-Formen

Dieses Beispiel zeigt den grundlegenden Anwendungsfall von `y`, und wie die CSS-`y`-Eigenschaft das `y`-Attribut überschreibt.

#### HTML

Wir fügen vier identische SVG-`<rect>`-Elemente ein; ihre {{SVGAttr("x")}}- und `y`-Attributswerte sind alle `10`, was bedeutet, dass die vier Rechtecke sich an derselben Stelle befinden, `10px` von der oberen und linken Ecke des SVG-Viewports entfernt.

```html
<svg>
  <rect width="40" height="40" x="10" y="10" />
  <rect width="40" height="40" x="10" y="10" />
  <rect width="40" height="40" x="10" y="10" />
  <rect width="40" height="40" x="10" y="10" />
</svg>
```

#### CSS

Wir stylen alle Rechtecke mit einem schwarzen Rand und leicht transparenter Füllung, so dass überlappende Rechtecke sichtbar sind. Wir geben dem Rechteck unterschiedliche {{cssxref("fill")}}- und `y`-Werte.

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

Die oberen Kanten der Rechtecke befinden sich bei `10` (vom Attribut), `-20px`, `4em` und `60%`. Das Rechteck ist `40px` hoch, wodurch das `-20px` die Hälfte des roten Rechtecks außerhalb des Viewports platziert. Das SVG ist `150px` hoch, so dass die obere Seite des orangefarbenen Rechtecks `90px` von der Oberseite des SVG-Viewports entfernt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG {{SVGAttr("y")}}-Attribut
- Geometrie-Eigenschaften: `y`, {{cssxref("cx")}}, {{cssxref("cy")}}, {{cssxref("r")}}, {{cssxref("rx")}}, {{cssxref("ry")}}, {{cssxref("x")}}, {{cssxref("width")}}, {{cssxref("height")}}
- {{cssxref("fill")}}
- {{cssxref("stroke")}}
- {{cssxref("paint-order")}}
- {{cssxref("basic-shape")}}-Datentyp
