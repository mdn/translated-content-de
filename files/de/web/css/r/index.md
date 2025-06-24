---
title: r
slug: Web/CSS/r
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`r`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert den Radius eines Kreises. Sie kann nur mit dem SVG-{{SVGElement("circle")}}-Element verwendet werden. Wenn sie vorhanden ist, überschreibt sie das {{SVGAttr("r")}}-Attribut des Kreises.

> [!NOTE]
> Die `r`-Eigenschaft gilt nur für {{SVGElement("circle")}} Elemente, die in einem {{SVGElement("svg")}} eingefügt sind. Sie gilt nicht für andere SVG-Elemente, HTML-Elemente oder Pseudo-Elemente.

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

Die {{cssxref("length")}}- und {{cssxref("percentage")}}-Werte definieren den Radius des Kreises.

- {{cssxref("length")}}

  - : Absolute oder relative Längen können in jeder Einheit ausgedrückt werden, die vom CSS-Datentyp {{cssxref("&lt;length&gt;")}} erlaubt ist. Negative Werte sind ungültig.

- {{cssxref("percentage")}}
  - : Prozentsätze beziehen sich auf die normalisierte Diagonale des aktuellen SVG-Anzeigebereichs, die berechnet wird als <math><mfrac><msqrt><mrow><msup><mi>&lt;width&gt;</mi><mn>2</mn></msup><mo>+</mo><msup><mi>&lt;height&gt;</mi><mn>2</mn></msup></mrow></msqrt><msqrt><mn>2</mn></msqrt></mfrac></math>.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Radius eines Kreises definieren

In diesem Beispiel haben wir zwei identische `<circle>`-Elemente in einem SVG, jedes mit einem Radius von `10` und denselben x- und y-Achsenkoordinaten für ihre Mittelpunkte.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="10" />
  <circle cx="50" cy="50" r="10" />
</svg>
```

Mit CSS gestalten wir nur den ersten Kreis, während der zweite Kreis die Standardstile verwendet (wobei {{cssxref("fill")}} standardmäßig auf Schwarz gesetzt ist). Wir verwenden die `r`-Eigenschaft, um den Wert des SVG-{{SVGAttr("r")}}-Attributs zu überschreiben, ihm eine `fill` und {{cssxref("stroke")}} zu geben. Die Standardgröße eines SVG beträgt `300px` Breite und `150px` Höhe.

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

{{EmbedLiveSample("Define den Radius eines Kreises", "300", "180")}}

### ViewBox versus Anzeigebereichs-Pixel

Dieses Beispiel enthält zwei SVGs, jeweils mit zwei `<circle>`-Elementen. Das zweite SVG enthält ein `viewBox`-Attribut, um den Unterschied zwischen SVG-ViewBox und SVG-Anzeigebereichen zu demonstrieren.

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

Das CSS ist dem vorherigen Beispiel ähnlich, mit `r: 30px` gesetzt, aber wir setzen eine {{cssxref("width")}}, um sicherzustellen, dass die Bilder jeweils `300px` breit sind:

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

{{EmbedLiveSample("ViewBox versus Anzeigebereichs-Pixel", "300", "360")}}

Weil das `viewBox`-Attribut das SVG auf 200 SVG-Koordinatensystem-Pixel Breite definiert und das Bild auf `300px` hochskaliert wird, werden die `30` SVG-Koordinatensystem-Pixel skaliert, um als `45` CSS-Pixel gerendert zu werden.

### Radius eines Kreises mit Prozentsätzen definieren

In diesem Beispiel verwenden wir denselben Markup wie im vorherigen Beispiel. Der einzige Unterschied ist der `r`-Wert; in diesem Fall verwenden wir einen Prozentsatzwert.

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

{{EmbedLiveSample("Den Radius eines Kreises mit Prozentsätzen definieren", "300", "360")}}

In beiden Fällen beträgt der Kreisradius `30%` der normalisierten Diagonale des SVG-Anzeigebereichs. Der Radius `r` ist gleich <math><mn>0.3</mn><mo>&#xd7;</mo><mfrac><msqrt><mrow><msup><mi>&lt;width&gt;</mi><mn>2</mn></msup><mo>+</mo><msup><mi>&lt;height&gt;</mi><mn>2</mn></msup></mrow></msqrt><msqrt><mn>2</mn></msqrt></mfrac></math>. Während das erste Bild `300` und `150` CSS-Pixel verwendet und das zweite `200` und `100` SVG-ViewBox-Einheiten, ist `30%` ein proportionaler Wert. Daher ist der `r`-Wert gleich: `47.43` ViewBox-Einheiten, was `71.15` CSS-Pixel entspricht.

Obwohl `r` gleich ist, unterscheiden sich die Mittelpunkte, weil das zweite SVG um 50% hochskaliert ist, was sein Zentrum um 50% nach unten und rechts verschiebt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Geometrie-Eigenschaften: `r`, {{cssxref("cx")}}, {{cssxref("cy")}}, {{cssxref("rx")}}, {{cssxref("ry")}}, {{cssxref("x")}}, {{cssxref("y")}}, {{cssxref("width")}}, {{cssxref("height")}}
- {{cssxref("fill")}}
- {{cssxref("stroke")}}
- {{cssxref("paint-order")}}
- {{cssxref("border-radius")}} Kurzschreibweise
- {{cssxref("gradient/radial-gradient", "radial-gradient")}}
- {{cssxref("basic-shape")}} Datentyp
- SVG-{{SVGAttr("r")}}-Attribut
