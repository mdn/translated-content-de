---
title: r
slug: Web/CSS/r
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`r`**-Eigenschaft von [CSS](/de/docs/Web/CSS) definiert den Radius eines Kreises. Sie kann nur mit dem SVG-Element {{SVGElement("circle")}} verwendet werden. Wenn vorhanden, überschreibt sie das {{SVGAttr("r")}}-Attribut des Kreises.

> [!NOTE]
> Die `r`-Eigenschaft gilt nur für {{SVGElement("circle")}}-Elemente, die in einem {{SVGElement("svg")}} verschachtelt sind. Sie gilt nicht für andere SVG-Elemente, HTML-Elemente oder Pseudo-Elemente.

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
  - : Absolute oder relative Längen können in jeder vom CSS-Datentyp {{cssxref("&lt;length&gt;")}} erlaubten Einheit ausgedrückt werden. Negative Werte sind ungültig.

- {{cssxref("percentage")}}
  - : Prozentangaben beziehen sich auf die normalisierte Diagonale des aktuellen SVG-Viewports, die wie folgt berechnet wird: <math><mfrac><msqrt><mrow><msup><mi>&lt;width&gt;</mi><mn>2</mn></msup><mo>+</mo><msup><mi>&lt;height&gt;</mi><mn>2</mn></msup></mrow></msqrt><msqrt><mn>2</mn></msqrt></mfrac></math>.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Den Radius eines Kreises definieren

In diesem Beispiel haben wir zwei identische `<circle>`-Elemente in einem SVG, jedes mit einem Radius von `10` und den gleichen x- und y-Achsenkoordinaten für ihre Mittelpunkte.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="10" />
  <circle cx="50" cy="50" r="10" />
</svg>
```

Mit CSS stylen wir nur den ersten Kreis und erlauben dem zweiten Kreis, die Standardstile zu verwenden (wobei {{cssxref("fill")}} standardmäßig auf Schwarz gesetzt ist). Wir verwenden die `r`-Eigenschaft, um den Wert des SVG-Attributs {{SVGAttr("r")}} zu überschreiben und ihm eine `fill`- und {{cssxref("stroke")}}-Eigenschaft zu geben. Die Standardgröße eines SVG beträgt `300px` Breite und `150px` Höhe.

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

Dieses Beispiel enthält zwei SVGs, jeweils mit zwei `<circle>`-Elementen. Das zweite SVG enthält ein `viewBox`-Attribut, um den Unterschied zwischen SVG-ViewBox und SVG-Viewports zu demonstrieren.

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

Das CSS ist ähnlich wie im vorherigen Beispiel mit `r: 30px` gesetzt, aber wir setzen eine {{cssxref("width")}}, um sicherzustellen, dass die Bilder jeweils `300px` breit sind:

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

Da das `viewBox`-Attribut das SVG auf 200 SVG-Koordinatensystempixel Breite definiert und das Bild auf `300px` skaliert wird, werden die `30` SVG-Koordinatenpixel als `45` CSS-Pixel gerendert.

### Den Radius eines Kreises mit Prozentwerten definieren

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

{{EmbedLiveSample("Den Radius eines Kreises mit Prozentwerten definieren", "300", "360")}}

In beiden Fällen beträgt der Kreisradius `30%` der normalisierten Diagonale des SVG-Viewports. Der Radius `r` ist gleich <math><mn>0.3</mn><mo>&#xd7;</mo><mfrac><msqrt><mrow><msup><mi>&lt;width&gt;</mi><mn>2</mn></msup><mo>+</mo><msup><mi>&lt;height&gt;</mi><mn>2</mn></msup></mrow></msqrt><msqrt><mn>2</mn></msqrt></mfrac></math>. Während das erste Bild `300` und `150` CSS-Pixel verwendet und das zweite `200` und `100` SVG-ViewBox-Einheiten, ist 30% ein proportionaler Wert. Dadurch ist der `r`-Wert derselbe: `47.43` ViewBox-Einheiten, was zu `71.15` CSS-Pixel aufgelöst wird.

Obwohl der `r` gleich ist, unterscheiden sich die Mittelpunkte, da das zweite SVG um 50% vergrößert wird, wodurch sein Mittelpunkt um 50% nach unten und rechts verschoben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Geometrie-Eigenschaften: `r`, {{cssxref("cx")}}, {{cssxref("cy")}}, {{cssxref("rx")}}, {{cssxref("ry")}}, {{cssxref("x")}}, {{cssxref("y")}}, {{cssxref("width")}}, {{cssxref("height")}}
- {{cssxref("fill")}}
- {{cssxref("stroke")}}
- {{cssxref("paint-order")}}
- Kurzschreibweise {{cssxref("border-radius")}}
- {{cssxref("gradient/radial-gradient", "radial-gradient")}}
- Datentyp {{cssxref("basic-shape")}}
- SVG-Attribut {{SVGAttr("r")}}
