---
title: "`r` CSS property"
short-title: r
slug: Web/CSS/Reference/Properties/r
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`r`** definiert den Radius eines Kreises. Sie kann nur mit dem SVG-Element {{SVGElement("circle")}} verwendet werden. Ist sie angegeben, überschreibt sie das {{SVGAttr("r")}}-Attribut des Kreises.

> [!NOTE]
> Die Eigenschaft `r` gilt nur für {{SVGElement("circle")}}-Elemente innerhalb eines {{SVGElement("svg")}}-Elements. Sie gilt weder für andere SVG- oder HTML-Elemente noch für Pseudoelemente.

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
  - : Absolute oder relative Längen können in jeder Einheit angegeben werden, die der CSS-Datentyp {{cssxref("&lt;length&gt;")}} zulässt. Negative Werte sind ungültig.

- {{cssxref("percentage")}}
  - : Prozentwerte beziehen sich auf die normierte Diagonale des aktuellen SVG-Viewports. Diese wird wie folgt berechnet: <math><mfrac><msqrt><mrow><msup><mi>&lt;width&gt;</mi><mn>2</mn></msup><mo>+</mo><msup><mi>&lt;height&gt;</mi><mn>2</mn></msup></mrow></msqrt><msqrt><mn>2</mn></msqrt></mfrac></math>.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Den Radius eines Kreises definieren

In diesem Beispiel gibt es zwei identische `<circle>`-Elemente in einem SVG. Beide haben einen Radius von `10` und dieselben x- und y-Koordinaten für ihre Mittelpunkte.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="10" />
  <circle cx="50" cy="50" r="10" />
</svg>
```

Mit CSS gestalten wir nur den ersten Kreis. Der zweite Kreis verwendet die Standardstile ({{cssxref("fill")}} ist standardmäßig schwarz). Mit der Eigenschaft `r` überschreiben wir den Wert des SVG-Attributs {{SVGAttr("r")}} und legen außerdem `fill` und {{cssxref("stroke")}} fest. Ein SVG ist standardmäßig `300px` breit und `150px` hoch.

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

{{EmbedLiveSample("defining_the_radius_of_a_circle", "300", "180")}}

### ViewBox im Vergleich zu Viewport-Pixeln

Dieses Beispiel enthält zwei SVGs mit jeweils zwei `<circle>`-Elementen. Das zweite SVG hat ein `viewBox`-Attribut, um den Unterschied zwischen der SVG-ViewBox und dem SVG-Viewport zu veranschaulichen.

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

Das CSS ähnelt dem vorherigen Beispiel: `r: 30px` ist festgelegt. Zusätzlich legen wir eine {{cssxref("width")}} fest, damit beide Bilder `300px` breit sind:

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

Da das Attribut `viewBox` eine Breite von 200 Pixeln im SVG-Koordinatensystem definiert und das Bild auf `300px` vergrößert wird, werden die `30` Pixel im SVG-Koordinatensystem skaliert und als `45` CSS-Pixel dargestellt.

### Den Radius eines Kreises mit Prozentwerten definieren

In diesem Beispiel verwenden wir dasselbe Markup wie im vorherigen Beispiel. Der einzige Unterschied ist der Wert von `r`: Hier verwenden wir einen Prozentwert.

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

In beiden Fällen beträgt der Kreisradius `30%` der normierten Diagonale des SVG-Viewports. Der Radius `r` entspricht <math><mn>0.3</mn><mo>&#xd7;</mo><mfrac><msqrt><mrow><msup><mi>&lt;width&gt;</mi><mn>2</mn></msup><mo>+</mo><msup><mi>&lt;height&gt;</mi><mn>2</mn></msup></mrow></msqrt><msqrt><mn>2</mn></msqrt></mfrac></math>. Das erste Bild verwendet `300` und `150` CSS-Pixel, das zweite `200` und `100` SVG-ViewBox-Einheiten. Da 30 % ein proportionaler Wert ist, ergibt sich für `r` derselbe Wert: `47.43` ViewBox-Einheiten, was `71.15` CSS-Pixeln entspricht.

Obwohl `r` gleich ist, unterscheiden sich die Mittelpunkte: Das zweite SVG wird um 50 % vergrößert, wodurch sich sein Mittelpunkt um 50 % nach unten und rechts verschiebt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Geometrieeigenschaften: `r`, {{cssxref("cx")}}, {{cssxref("cy")}}, {{cssxref("rx")}}, {{cssxref("ry")}}, {{cssxref("x")}}, {{cssxref("y")}}, {{cssxref("width")}}, {{cssxref("height")}}
- {{cssxref("fill")}}
- {{cssxref("stroke")}}
- {{cssxref("paint-order")}}
- Die Kurzschreibweise {{cssxref("border-radius")}}
- {{cssxref("gradient/radial-gradient", "radial-gradient")}}
- Der Datentyp {{cssxref("basic-shape")}}
- Das SVG-Attribut {{SVGAttr("r")}}
