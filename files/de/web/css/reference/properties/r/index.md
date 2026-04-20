---
title: "`r` CSS property"
short-title: r
slug: Web/CSS/Reference/Properties/r
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`r`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert den Radius eines Kreises. Sie kann nur mit dem SVG-{{SVGElement("circle")}}-Element verwendet werden. Wenn vorhanden, überschreibt sie das {{SVGAttr("r")}}-Attribut des Kreises.

> [!NOTE]
> Die `r`-Eigenschaft gilt nur für {{SVGElement("circle")}}-Elemente, die in einem {{SVGElement("svg")}} verschachtelt sind. Sie gilt nicht für andere SVG-Elemente oder HTML-Elemente oder Pseudo-Elemente.

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
  - : Absolute oder relative Längen können in jeder Einheit ausgedrückt werden, die durch den CSS-{{cssxref("&lt;length&gt;")}}-Datentyp erlaubt ist. Negative Werte sind ungültig.

- {{cssxref("percentage")}}
  - : Prozentsätze beziehen sich auf die normierte Diagonale des aktuellen SVG-Viewports, die wie folgt berechnet wird: <math><mfrac><msqrt><mrow><msup><mi>&lt;width&gt;</mi><mn>2</mn></msup><mo>+</mo><msup><mi>&lt;height&gt;</mi><mn>2</mn></msup></mrow></msqrt><msqrt><mn>2</mn></msqrt></mfrac></math>.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Den Radius eines Kreises definieren

In diesem Beispiel haben wir zwei identische `<circle>`-Elemente in einem SVG, jedes mit einem Radius von `10` und denselben x- und y-Koordinaten für ihre Mittelpunkte.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="10" />
  <circle cx="50" cy="50" r="10" />
</svg>
```

Mit CSS gestalten wir nur den ersten Kreis, sodass der zweite Kreis die Standardstile verwendet (mit {{cssxref("fill")}}, das standardmäßig auf schwarz eingestellt ist). Wir verwenden die `r`-Eigenschaft, um den Wert des SVG-{{SVGAttr("r")}}-Attributs zu überschreiben, und geben ihm eine Füllfarbe und einen {{cssxref("stroke")}}. Die Standardgröße eines SVG beträgt `300px` in der Breite und `150px` in der Höhe.

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

{{EmbedLiveSample("Den Radius eines Kreises definieren", "300", "180")}}

### ViewBox versus Viewport-Pixel

Dieses Beispiel enthält zwei SVGs, jede mit zwei `<circle>`-Elementen. Das zweite SVG enthält ein `viewBox`-Attribut, um den Unterschied zwischen SVG viewBox und SVG-Viewports zu demonstrieren.

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

Das CSS ist ähnlich wie im vorherigen Beispiel, mit `r: 30px` eingestellt, aber wir setzen eine {{cssxref("width")}}, um sicherzustellen, dass die Bilder jeweils `300px` breit sind:

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

{{EmbedLiveSample("ViewBox versus Viewport-Pixel", "300", "360")}}

Da das `viewBox`-Attribut das SVG als 200 SVG-Koordinatensystem-Pixel in der Breite definiert und das Bild auf `300px` skaliert wird, werden die `30` SVG-Koordinaten-Pixel so skaliert, dass sie als `45` CSS-Pixel dargestellt werden.

### Den Radius eines Kreises unter Verwendung von Prozentsätzen definieren

In diesem Beispiel verwenden wir dieselbe Markierung wie im vorherigen Beispiel. Der einzige Unterschied ist der `r`-Wert; in diesem Fall verwenden wir einen Prozentwert.

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

{{EmbedLiveSample("Den Radius eines Kreises unter Verwendung von Prozentsätzen definieren", "300", "360")}}

In beiden Fällen beträgt der Kreisradius `30%` der normierten Diagonale des SVG-Viewports. Der Radius `r` entspricht <math><mn>0.3</mn><mo>&#xd7;</mo><mfrac><msqrt><mrow><msup><mi>&lt;width&gt;</mi><mn>2</mn></msup><mo>+</mo><msup><mi>&lt;height&gt;</mi><mn>2</mn></msup></mrow></msqrt><msqrt><mn>2</mn></msqrt></mfrac></math>. Während das erste Bild `300` und `150` CSS-Pixel verwendet und das zweite `200` und `100` SVG-ViewBox-Einheiten, ist 30% ein proportionaler Wert. Daher ist der `r`-Wert derselbe: `47,43` ViewBox-Einheiten, was `71,15` CSS-Pixeln entspricht.

Obwohl der `r`-Wert derselbe ist, unterscheiden sich die Mittelpunkte, da das zweite SVG um 50% vergrößert wird, wodurch sein Mittelpunkt um 50% nach unten und nach rechts verschoben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Geometrieeigenschaften: `r`, {{cssxref("cx")}}, {{cssxref("cy")}}, {{cssxref("rx")}}, {{cssxref("ry")}}, {{cssxref("x")}}, {{cssxref("y")}}, {{cssxref("width")}}, {{cssxref("height")}}
- {{cssxref("fill")}}
- {{cssxref("stroke")}}
- {{cssxref("paint-order")}}
- {{cssxref("border-radius")}} Kurzform-Eigenschaft
- {{cssxref("gradient/radial-gradient", "radial-gradient")}}
- {{cssxref("basic-shape")}} Datentyp
- SVG-{{SVGAttr("r")}}-Attribut
