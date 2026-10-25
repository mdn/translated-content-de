---
title: "`ry` CSS property"
short-title: ry
slug: Web/CSS/Reference/Properties/ry
l10n:
  sourceCommit: b94f607de0017642074f3466e20cbd9017a1b150
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`ry`** definiert den Radius auf der y-Achse, also den vertikalen Radius, einer SVG-{{SVGElement("ellipse")}} sowie die vertikale Rundung der Ecken eines SVG-{{SVGElement("rect")}}-Rechtecks. Ist die Eigenschaft angegeben, überschreibt sie das {{SVGAttr("ry")}}-Attribut der Form.

> [!NOTE]
> Die Eigenschaft `ry` gilt nur für {{SVGElement("ellipse")}}- und {{SVGElement("rect")}}-Elemente innerhalb eines {{SVGElement("svg")}}-Elements. Sie gilt weder für andere SVG- oder HTML-Elemente noch für Pseudoelemente.

## Syntax

```css
/* Initial value */
ry: auto;

/* Length and percentage values */
ry: 30px;
ry: 30%;

/* Global values */
ry: inherit;
ry: initial;
ry: revert;
ry: revert-layer;
ry: unset;
```

### Werte

Ein Wert vom Typ {{cssxref("length")}} oder {{cssxref("percentage")}} oder das Schlüsselwort `auto` gibt den vertikalen Radius von Ellipsen und den vertikalen Eckenradius von Rechtecken an.

- {{cssxref("length")}}
  - : Absolute oder relative Längen können in jeder Einheit angegeben werden, die der CSS-Datentyp {{cssxref("&lt;length&gt;")}} zulässt. Negative Werte sind ungültig.

- {{cssxref("percentage")}}
  - : Prozentwerte beziehen sich auf die Höhe des aktuellen SVG-Viewports. Der verwendete Wert für ein `<rect>` beträgt nie mehr als 50 % der Höhe des Rechtecks.

- `auto`
  - : Wenn `ry` auf `auto` gesetzt ist oder standardmäßig diesen Wert hat, entspricht der Wert von `ry` dem für {{cssxref("rx")}} verwendeten absoluten Längenwert. Haben sowohl `ry` als auch `rx` den berechneten Wert `auto`, ist der verwendete Wert `0`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Abgerundete Ecken erstellen

Dieses Beispiel zeigt, wie Sie Rechtecke mit abgerundeten Ecken erstellen, indem Sie die Eigenschaft `ry` auf SVG-`<rect>`-Elemente anwenden.

#### HTML

Wir fügen ein SVG-Bild mit fünf `<rect>`-Elementen ein. Die Rechtecke unterscheiden sich nur im Wert ihres {{SVGAttr("x")}}-Attributs, der sie entlang der x-Achse positioniert.

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

Mit CSS legen wir für vier der Rechtecke einen `ry`-Wert fest:

```css
svg {
  border: 1px solid;
}

rect:nth-of-type(2) {
  ry: 10px;
  fill: red;
}

rect:nth-of-type(3) {
  ry: 2em;
  fill: blue;
}

rect:nth-of-type(4) {
  ry: 5%;
  fill: orange;
}

rect:nth-of-type(5) {
  ry: 80%;
  fill: green;
}
```

#### Ergebnis

{{EmbedLiveSample("Creating rounded corners", "300", "180")}}

Beim ersten Rechteck ist der Standardwert `auto`. Da auch alle `rx`-Werte in diesem Beispiel standardmäßig `auto` sind, beträgt der verwendete Wert von `ry` `0`. Das rote und das blaue Rechteck haben Eckenradien von `10px` beziehungsweise `2em`. Da der SVG-Viewport standardmäßig 300px breit und 150px hoch ist, ergibt der Wert `5%` des orangefarbenen Rechtecks einen Radius von `7.5px`. Für das grüne Rechteck ist `ry: 80%` festgelegt. Da der Wert von `ry` jedoch nie mehr als `50%` der Höhe des Rechtecks beträgt, ist der Effekt derselbe wie bei `ry: 50%; rx: 50%`.

### Den vertikalen Radius einer Ellipse definieren

Dieses einfache `<ellipse>`-Beispiel zeigt, dass die CSS-Eigenschaft `ry` Vorrang vor einem SVG-`ry`-Attribut hat, wenn der vertikale Radius der Form bestimmt wird.

#### HTML

Wir fügen zwei identische `<ellipse>`-Elemente in ein SVG ein, bei denen das Attribut `ry` jeweils auf `20` gesetzt ist.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="80" cy="50" rx="40" ry="20" />
  <ellipse cx="80" cy="50" rx="40" ry="20" />
</svg>
```

#### CSS

Wir gestalten nur die erste Ellipse und belassen die zweite bei den Standardstilen des User-Agents (wobei {{cssxref("fill")}} standardmäßig schwarz ist). Die geometrische Eigenschaft `ry` überschreibt den Wert des SVG-Attributs {{SVGAttr("ry")}}. Außerdem legen wir die Eigenschaften `fill` und {{cssxref("stroke")}} fest, um die gestaltete Ellipse von der anderen zu unterscheiden.

```css
svg {
  border: 1px solid;
}

ellipse:first-of-type {
  ry: 80px;
  fill: magenta;
  stroke: rebeccapurple;
}
```

#### Ergebnis

{{EmbedLiveSample("Defining the vertical radius of an ellipse", "300", "180")}}

Der vertikale Radius der gestalteten Ellipse beträgt `80px`, wie durch den Wert der CSS-Eigenschaft `ry` festgelegt. Der vertikale Radius der nicht gestalteten Ellipse beträgt `20px`, wie durch das Attribut `ry` festgelegt.

### Prozentwerte für den vertikalen Radius einer Ellipse

Dieses Beispiel zeigt die Verwendung von Prozentwerten für `ry`.

#### HTML

Wir verwenden dasselbe Markup wie im vorherigen Beispiel.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="80" cy="50" rx="40" ry="20" />
  <ellipse cx="80" cy="50" rx="40" ry="20" />
</svg>
```

#### CSS

Das CSS ähnelt dem vorherigen Beispiel. Der einzige Unterschied ist der Wert der Eigenschaft `ry`: In diesem Fall verwenden wir einen Prozentwert.

```css
svg {
  border: 1px solid;
}

ellipse:first-of-type {
  ry: 30%;
  fill: magenta;
  stroke: rebeccapurple;
}
```

#### Ergebnis

{{EmbedLiveSample("Ellipse vertical radius percentage values", "300", "180")}}

Bei Prozentwerten für `ry` beziehen sich die Werte auf die Höhe des SVG-Viewports. Hier beträgt der vertikale Radius der gestalteten Ellipse `30%` der Höhe des aktuellen SVG-Viewports. Da die Höhe standardmäßig `150px` beträgt, ergibt sich für `ry` ein Wert von `45px`. Die Ellipse ist damit `90px` hoch.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Geometrie-Eigenschaften: `ry`, {{cssxref("cx")}}, {{cssxref("cy")}}, {{cssxref("r")}}, {{cssxref("rx")}}, {{cssxref("x")}}, {{cssxref("y")}}, {{cssxref("height")}}, {{cssxref("height")}}
- {{cssxref("fill")}}
- {{cssxref("stroke")}}
- {{cssxref("paint-order")}}
- Die Kurzschreibweise-Eigenschaft {{cssxref("border-radius")}}
- {{cssxref("gradient/radial-gradient", "radial-gradient")}}
- Der Datentyp {{cssxref("basic-shape")}}
- Das SVG-Attribut {{SVGAttr("ry")}}
