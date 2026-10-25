---
title: "`rx` CSS property"
short-title: rx
slug: Web/CSS/Reference/Properties/rx
l10n:
  sourceCommit: b94f607de0017642074f3466e20cbd9017a1b150
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`rx`** definiert den horizontalen Radius einer SVG-{{SVGElement("ellipse")}} sowie die horizontale Krümmung der Ecken eines SVG-{{SVGElement("rect")}}-Rechtecks. Ist sie angegeben, überschreibt sie das {{SVGAttr("rx")}}-Attribut der Form.

> [!NOTE]
> Die Eigenschaft `rx` gilt nur für {{SVGElement("ellipse")}}- und {{SVGElement("rect")}}-Elemente innerhalb eines {{SVGElement("svg")}}-Elements. Sie gilt weder für andere SVG-Elemente noch für HTML-Elemente oder Pseudoelemente.

## Syntax

```css
/* Initial value */
rx: auto;

/* Length and percentage values */
rx: 20px;
rx: 20%;

/* Global values */
rx: inherit;
rx: initial;
rx: revert;
rx: revert-layer;
rx: unset;
```

### Werte

Ein Wert vom Typ {{cssxref("length")}} oder {{cssxref("percentage")}} oder das Schlüsselwort `auto` gibt den horizontalen Radius von Ellipsen beziehungsweise den horizontalen Eckenradius von Rechtecken an.

- {{cssxref("length")}}
  - : Absolute oder relative Längen können in jeder Einheit angegeben werden, die der CSS-Datentyp {{cssxref("&lt;length&gt;")}} erlaubt. Negative Werte sind ungültig.

- {{cssxref("percentage")}}
  - : Prozentwerte beziehen sich auf die Breite des aktuellen SVG-Viewports. Der verwendete Wert für ein `<rect>` beträgt nie mehr als 50 % der Breite des Rechtecks.

- `auto`
  - : Wenn `rx` auf `auto` gesetzt ist oder standardmäßig diesen Wert hat, entspricht sein Wert dem für {{cssxref("ry")}} verwendeten absoluten Längenwert. Haben sowohl `rx` als auch `ry` den berechneten Wert `auto`, ist der verwendete Wert `0`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Abgerundete Ecken erstellen

Dieses Beispiel zeigt, wie Sie Rechtecke mit abgerundeten Ecken erstellen, indem Sie die Eigenschaft `rx` auf SVG-`<rect>`-Elemente anwenden.

#### HTML

Wir fügen eine SVG-Grafik mit fünf `<rect>`-Elementen ein. Alle Rechtecke sind gleich, abgesehen vom Wert ihres {{SVGAttr("x")}}-Attributs, der sie entlang der x-Achse positioniert.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <rect width="50" height="120" y="5" x="5" />
  <rect width="50" height="120" y="5" x="60" />
  <rect width="50" height="120" y="5" x="115" />
  <rect width="50" height="120" y="5" x="170" />
  <rect width="50" height="120" y="5" x="225" />
</svg>
```

#### CSS

Mit CSS legen wir für vier der Rechtecke einen `rx`-Wert fest:

```css
svg {
  border: 1px solid;
}

rect:nth-of-type(2) {
  rx: 10px;
  fill: red;
}

rect:nth-of-type(3) {
  rx: 2em;
  fill: blue;
}

rect:nth-of-type(4) {
  rx: 5%;
  fill: orange;
}

rect:nth-of-type(5) {
  rx: 80%;
  fill: green;
}
```

#### Ergebnis

{{EmbedLiveSample("Creating rounded corners", "300", "180")}}

Beim ersten Rechteck hat `rx` standardmäßig den Wert `auto`. Da in diesem Beispiel auch alle `ry`-Werte standardmäßig `auto` sind, ist der verwendete Wert von `rx` gleich `0`. Die Ecken des roten und des blauen Rechtecks haben einen Radius von `10px` beziehungsweise `2em`. Da der SVG-Viewport standardmäßig 300px breit und 150px hoch ist, ergibt der Wert `5%` beim orangefarbenen Rechteck einen Radius von `15px`. Für das grüne Rechteck ist `rx: 80%` festgelegt. Da der Wert von `rx` jedoch nie mehr als `50%` der Breite des Rechtecks beträgt, ist die Wirkung dieselbe, als wäre `rx: 50%; ry: 50%` festgelegt.

### Den horizontalen Radius einer Ellipse definieren

Dieses einfache `<ellipse>`-Beispiel zeigt, dass die CSS-Eigenschaft `rx` Vorrang vor einem SVG-`rx`-Attribut hat, wenn der horizontale Radius der Form bestimmt wird.

#### HTML

Wir fügen zwei identische `<ellipse>`-Elemente in ein SVG ein. Bei beiden ist das Attribut `rx` auf `20` gesetzt.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="80" cy="50" rx="20" ry="40" />
  <ellipse cx="80" cy="50" rx="20" ry="40" />
</svg>
```

#### CSS

Wir gestalten nur die erste Ellipse und lassen für die zweite die Standardstile des User-Agents gelten (wobei {{cssxref("fill")}} standardmäßig schwarz ist). Die geometrische Eigenschaft `rx` überschreibt den Wert des SVG-Attributs {{SVGAttr("rx")}}. Außerdem legen wir die Eigenschaften `fill` und {{cssxref("stroke")}} fest, um die gestaltete Ellipse von der anderen zu unterscheiden.

```css
svg {
  border: 1px solid;
}

ellipse:first-of-type {
  rx: 80px;
  fill: magenta;
  stroke: rebeccapurple;
}
```

#### Ergebnis

{{EmbedLiveSample("Defining the horizontal radius of an ellipse", "300", "180")}}

Der horizontale Radius der gestalteten Ellipse beträgt `80px`, wie durch den Wert der CSS-Eigenschaft `rx` festgelegt. Der horizontale Radius der nicht gestalteten Ellipse beträgt `20px`, wie durch das Attribut `rx` festgelegt.

### Prozentwerte für den horizontalen Radius einer Ellipse

Dieses Beispiel zeigt die Verwendung von Prozentwerten für `rx`.

#### HTML

Wir verwenden dasselbe Markup wie im vorherigen Beispiel.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="80" cy="50" rx="20" ry="40" />
  <ellipse cx="80" cy="50" rx="20" ry="40" />
</svg>
```

#### CSS

Das CSS ähnelt dem vorherigen Beispiel. Der einzige Unterschied ist der Wert der Eigenschaft `rx`: Hier verwenden wir einen Prozentwert.

```css
svg {
  border: 1px solid;
}

ellipse:first-of-type {
  rx: 30%;
  fill: magenta;
  stroke: rebeccapurple;
}
```

#### Ergebnis

{{EmbedLiveSample("Ellipse horizontal radius percentage values", "300", "180")}}

Prozentwerte für `rx` beziehen sich auf die Breite des SVG-Viewports. Hier beträgt der horizontale Radius der gestalteten Ellipse `30%` der Breite des aktuellen SVG-Viewports. Da die Breite standardmäßig `300px` beträgt, ergibt sich für `rx` ein Wert von `90px`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Geometrieeigenschaften: `rx`, {{cssxref("cx")}}, {{cssxref("cy")}}, {{cssxref("r")}}, {{cssxref("ry")}}, {{cssxref("x")}}, {{cssxref("y")}}, {{cssxref("width")}}, {{cssxref("height")}}
- {{cssxref("fill")}}
- {{cssxref("stroke")}}
- {{cssxref("paint-order")}}
- Kurzschreibweise {{cssxref("border-radius")}}
- {{cssxref("gradient/radial-gradient", "radial-gradient")}}
- Datentyp {{cssxref("basic-shape")}}
- SVG-Attribut {{SVGAttr("rx")}}
