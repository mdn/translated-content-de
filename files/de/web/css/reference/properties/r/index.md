---
title: r
slug: Web/CSS/Reference/Properties/r
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`r`**-Eigenschaft [CSS](/de/docs/Web/CSS) definiert den Radius eines Kreises. Sie kann nur mit dem SVG-Element {{SVGElement("circle")}} verwendet werden. Ist sie vorhanden, überschreibt sie das {{SVGAttr("r")}}-Attribut des Kreises.

> [!NOTE]
> Die `r`-Eigenschaft gilt nur für in einem {{SVGElement("svg")}} verschachtelte {{SVGElement("circle")}}-Elemente. Sie gilt nicht für andere SVG-Elemente oder HTML-Elemente oder Pseudoelemente.

## Syntax

```css
/* Length and percentage values */
r: 3px;
r: 20%;

/* Global values */
r: inherit;
r: initial;
r: revert;
r: revert-layer;
r: unset;
```

### Werte

Die Werte {{cssxref("length")}} und {{cssxref("percentage")}} definieren den Radius des Kreises.

- {{cssxref("length")}}
  - : Absolute oder relative Längen können in jeder von der CSS-Datentyp {{cssxref("&lt;length&gt;")}} erlaubten Einheit ausgedrückt werden. Negative Werte sind ungültig.

- {{cssxref("percentage")}}
  - : Prozentsätze beziehen sich auf die normalisierte Diagonale des aktuellen SVG-Ansichtsfensters, die als <math><mfrac><msqrt><mrow><msup><mi>&lt;width&gt;</mi><mn>2</mn></msup><mo>+</mo><msup><mi>&lt;height&gt;</mi><mn>2</mn></msup></mrow></msqrt><msqrt><mn>2</mn></msqrt></mfrac></math> berechnet wird.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Den Radius eines Kreises definieren

In diesem Beispiel haben wir zwei identische `<circle>`-Elemente in einem SVG, jedes mit einem Radius von `10` und denselben x- und y-Achsenkoordinaten für ihre Mittelpunkte.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="10" />
  <circle cx="50" cy="50" r="10" />
</svg>
```

Mit CSS stylen wir nur den ersten Kreis, sodass der zweite Kreis die Standardstile verwendet (wobei ({{cssxref("fill")}} standardmäßig auf Schwarz gesetzt ist). Wir verwenden die `r`-Eigenschaft, um den Wert des SVG-Attributes {{SVGAttr("r")}} zu überschreiben, es mit einem `fill` und {{cssxref("stroke")}} zu versehen. Die Standardgröße eines SVG ist `300px` breit und `150px` hoch.

```css
svg {
  border: 1px solid black;
}

circle:first-of-type {
  r: 30px;
  fill: lightgreen;
  stroke: black;
}
```

{{EmbedLiveSample("Defining a circle's radius", "300", "180")}}

### ViewBox im Vergleich zu Ansichtsfenster-Pixeln

Dieses Beispiel enthält zwei SVGs, jedes mit zwei `<circle>`-Elementen. Das zweite SVG enthält ein `viewBox`-Attribut, um den Unterschied zwischen SVG-ViewBox und SVG-Ansichtsfenstern zu demonstrieren.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="10" />
  <circle cx="50" cy="50" r="10" />
</svg>
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="10" />
  <circle cx="50" cy="50" r="10" />
</svg>
```

Das CSS ist ähnlich wie im vorherigen Beispiel, wobei `r: 30px` gesetzt ist, aber wir setzen eine {{cssxref("width")}}, um sicherzustellen, dass die Bilder beide `300px` breit sind:

```css
svg {
  border: 1px solid black;
  width: 300px;
}

circle:first-of-type {
  r: 30px;
  fill: lightgreen;
  stroke: black;
}
```

{{EmbedLiveSample("ViewBox versus viewport pixels", "300", "360")}}

Weil das `viewBox`-Attribut das SVG als 200 SVG-Koordinatensystem-Pixel breit definiert und das Bild auf `300px` skaliert wird, werden die `30` SVG-Koordinatensystem-Pixel skaliert, um als `45` CSS-Pixel gerendert zu werden.

### Den Radius eines Kreises mit Prozentsätzen definieren

In diesem Beispiel verwenden wir das gleiche Markup wie im vorherigen Beispiel. Der einzige Unterschied ist der `r`-Wert; in diesem Fall verwenden wir einen Prozentwert.

```html hidden
<svg xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="10" />
  <circle cx="50" cy="50" r="10" />
</svg>
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="10" />
  <circle cx="50" cy="50" r="10" />
</svg>
```

```css
svg {
  border: 1px solid black;
  width: 300px;
}

circle:first-of-type {
  r: 30%;
  fill: lightgreen;
  stroke: black;
}
```

{{EmbedLiveSample("Defining the radius of a circle using percentages", "300", "360")}}

In beiden Fällen beträgt der Kreisradius `30 %` der normalisierten Diagonale des SVG-Ansichtsfensters. Der Radius `r` ist gleich <math><mn>0.3</mn><mo>&#xd7;</mo><mfrac><msqrt><mrow><msup><mi>&lt;width&gt;</mi><mn>2</mn></msup><mo>+</mo><msup><mi>&lt;height&gt;</mi><mn>2</mn></msup></mrow></msqrt><msqrt><mn>2</mn></msqrt></mfrac></math>. Während das erste Bild `300` und `150` CSS-Pixel verwendet und das zweite `200` und `100` SVG-ViewBox-Einheiten, ist 30 % ein proportionaler Wert. Dadurch ist der `r`-Wert derselbe: `47.43` ViewBox-Einheiten, was `71.15` CSS-Pixeln entspricht.

Obwohl der `r` derselbe ist, unterscheiden sich die Mittelpunkte, da das zweite SVG um 50 % skaliert ist, wodurch sein Zentrum um 50 % nach unten und nach rechts verschoben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Geometrische Eigenschaften: `r`, {{cssxref("cx")}}, {{cssxref("cy")}}, {{cssxref("rx")}}, {{cssxref("ry")}}, {{cssxref("x")}}, {{cssxref("y")}}, {{cssxref("width")}}, {{cssxref("height")}}
- {{cssxref("fill")}}
- {{cssxref("stroke")}}
- {{cssxref("paint-order")}}
- Kurzschreibweise der Eigenschaft {{cssxref("border-radius")}}
- {{cssxref("gradient/radial-gradient", "radial-gradient")}}
- {{cssxref("basic-shape")}} Datentyp
- SVG-Attribut {{SVGAttr("r")}}
