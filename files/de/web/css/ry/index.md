---
title: ry
slug: Web/CSS/ry
l10n:
  sourceCommit: 64d85b74ce1cce6a24ae8979da4f3f4a01a47229
---

{{CSSRef}}

Die **`ry`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert den y-Achsen- oder vertikalen Radius eines SVG-{{SVGElement("ellipse")}} und die vertikale Rundung der Ecken eines SVG-{{SVGElement("rect")}} Rechtecks. Wenn vorhanden, überschreibt sie das {{SVGAttr("ry")}} Attribut der Form.

> [!NOTE]
> Die `ry` Eigenschaft gilt nur für die {{SVGElement("ellipse")}} und {{SVGElement("rect")}} Elemente, die in einem {{SVGElement("svg")}} eingebettet sind. Sie gilt nicht für andere SVG-Elemente oder HTML-Elemente oder Pseudoelemente.

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

Der Wert {{cssxref("length")}}, {{cssxref("percentage")}} oder das Schlüsselwort `auto` bezeichnen den vertikalen Radius von Ellipsen und den vertikalen Rahmenradius von Rechtecken.

- {{cssxref("length")}}

  - : Absolute oder relative Längen können in allen Einheiten dargestellt werden, die durch den CSS-Datentyp {{cssxref("&lt;length&gt;")}} erlaubt sind. Negative Werte sind ungültig.

- {{cssxref("percentage")}}

  - : Prozentwerte beziehen sich auf die Höhe des aktuellen SVG-Viewports. Der verwendete Wert für ein `<rect>` überschreitet niemals 50% der Höhe des Rechtecks.

- `auto`

  - : Wenn `auto` gesetzt ist oder die Standardeinstellung ist, entspricht der `ry` Wert dem absoluten Längenwert, der für {{cssxref("rx")}} verwendet wird. Wenn sowohl `ry` als auch `rx` auf `auto` berechnet wurden, ist der verwendete Wert `0`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Abgerundete Ecken erstellen

Dieses Beispiel demonstriert das Erstellen von Rechtecken mit abgerundeten Ecken durch die Anwendung der `ry` Eigenschaft auf SVG `<rect>` Elemente.

#### HTML

Wir fügen ein SVG-Bild mit vier `<rect>` Elementen ein; alle Rechtecke sind gleich außer ihrem {{SVGAttr("x")}} Attributwert, der sie entlang der x-Achse positioniert.

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

Mit CSS setzen wir einen `ry` Wert auf vier der Rechtecke:

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

#### Ergebnisse

{{EmbedLiveSample("Creating rounded corners", "300", "180")}}

Das erste Rechteck hat den Standardwert `auto`; da alle `rx` Werte in diesem Beispiel ebenfalls auf `auto` standardisieren, ist der verwendete Wert von `ry` `0`. Die roten und blauen Rechtecke haben abgerundete Ecken von `10px` bzw. `2em`. Da der SVG-Viewport standardmäßig 300px mal 150px ist, erzeugt der `5%` Wert des orangefarbenen Rechtecks einen Radius von `7.5px`. Das grüne Rechteck hat `ry: 80%` gesetzt. Da der Wert von `ry` jedoch niemals mehr als `50%` der Höhe des Rechtecks ist, wirkt es, als ob `ry: 50%; rx: 50%` gesetzt worden wäre.

### Den vertikalen Radius einer Ellipse definieren

Dieses grundlegende `<ellipse>` Beispiel zeigt, wie die CSS `ry` Eigenschaft vorrangig gegenüber einem SVG `ry` Attribut verwendet wird, um den vertikalen Radius der Form zu definieren.

#### HTML

Wir fügen zwei identische `<ellipse>` Elemente in ein SVG ein; jedes hat das `ry` Attribut auf `20` gesetzt.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="80" cy="50" rx="40" ry="20" />
  <ellipse cx="80" cy="50" rx="40" ry="20" />
</svg>
```

#### CSS

Wir stylen nur die erste Ellipse und lassen ihren Zwilling die Standardnutzeragentenstile verwenden (mit {{cssxref("fill")}}, die standardmäßig schwarz ist). Die geometrische `ry` Eigenschaft überschreibt den Wert des SVG {{SVGAttr("ry")}} Attributs. Wir setzen auch die `fill` und {{cssxref("stroke")}} Eigenschaften, um die gestylte Form von ihrem Zwilling zu unterscheiden.

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

#### Ergebnisse

{{EmbedLiveSample("Defining the vertical radius of an ellipse", "300", "180")}}

Der vertikale Radius der gestylten Ellipse beträgt `80px`, wie im CSS `ry` Eigenschaftswert definiert. Der vertikale Radius der ungestylten Ellipse beträgt `20px`, wie durch das `ry` Attribut definiert.

### Prozentsatzwerte für den vertikalen Radius einer Ellipse

Dieses Beispiel zeigt die Nutzung von Prozentsatzwerten für `ry`.

#### HTML

Wir verwenden das gleiche Markup wie im vorherigen Beispiel.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="80" cy="50" rx="40" ry="20" />
  <ellipse cx="80" cy="50" rx="40" ry="20" />
</svg>
```

#### CSS

Das CSS ist ähnlich wie im vorherigen Beispiel, mit dem einzigen Unterschied, dass der `ry` Eigenschaftswert hier ein Prozentwert ist.

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

#### Ergebnisse

{{EmbedLiveSample("Ellipse vertical radius percentage values", "300", "180")}}

Wenn Prozentsatzwerte für `ry` verwendet werden, beziehen sich die Werte auf die Höhe des SVG-Viewports. Hier beträgt die Größe des vertikalen Radius der gestylten Ellipse `30%` der Höhe des aktuellen SVG-Viewports. Da die Höhe standardmäßig `150px` beträgt, ist der `ry` Wert `45px`, wodurch die Ellipse `90px` hoch wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Geometrieeigenschaften: `ry`, {{cssxref("cx")}}, {{cssxref("cy")}}, {{cssxref("r")}}, {{cssxref("rx")}}, {{cssxref("x")}}, {{cssxref("y")}}, {{cssxref("height")}}, {{cssxref("height")}}
- {{cssxref("fill")}}
- {{cssxref("stroke")}}
- {{cssxref("paint-order")}}
- Kurzschreibweise für {{cssxref("border-radius")}}
- {{cssxref("gradient/radial-gradient", "radial-gradient")}}
- {{cssxref("basic-shape")}} Datentyp
- SVG {{SVGAttr("ry")}} Attribut
