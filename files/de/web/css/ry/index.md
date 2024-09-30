---
title: ry
slug: Web/CSS/ry
l10n:
  sourceCommit: c5f403bb08c91ae77ddfe47f937438fb5e6fcae5
---

{{CSSRef}}

Die **`ry`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert den y-Achsen- oder vertikalen Radius eines SVG-{{SVGElement("ellipse")}} und die vertikale Kurve der Ecken eines SVG-{{SVGElement("rect")}}-Rechtecks. Falls vorhanden, überschreibt sie das {{SVGAttr("ry")}}-Attribut der Form.

> [!NOTE]
> Die `ry`-Eigenschaft gilt nur für {{SVGElement("ellipse")}} und {{SVGElement("rect")}} Elemente, die in einem {{SVGElement("svg")}} verschachtelt sind. Sie gilt nicht für andere SVG-Elemente oder HTML-Elemente oder Pseudo-Elemente.

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

Der {{cssxref("length")}}-, {{cssxref("percentage")}}- oder `auto`-Schlüsselwortwert bezeichnet den vertikalen Radius von Ellipsen und den vertikalen Randradius von Rechtecken.

- {{cssxref("length")}}

  - : Absolute oder relative Längen können in jeder vom CSS {{cssxref("&lt;length&gt;")}}-Datentyp erlaubten Einheit ausgedrückt werden. Negative Werte sind ungültig.

- {{cssxref("percentage")}}

  - : Prozentwerte beziehen sich auf die Höhe des aktuellen SVG-Viewports. Der verwendete Wert für ein `<rect>` überschreitet niemals 50 % der Höhe des Rechtecks.

- `auto`

  - : Wenn auf `auto` gesetzt oder standardmäßig darauf zurückgegriffen wird, entspricht der `ry`-Wert dem absoluten Längenwert, der für {{cssxref("rx")}} verwendet wird. Wenn sowohl `ry` als auch `rx` den berechneten Wert `auto` haben, beträgt der verwendete Wert `0`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen abgerundeter Ecken

Dieses Beispiel zeigt, wie man Rechtecke mit abgerundeten Ecken erstellt, indem man die `ry`-Eigenschaft auf SVG-`<rect>`-Elemente anwendet.

#### HTML

Wir fügen ein SVG-Bild mit vier `<rect>`-Elementen ein; alle Rechtecke sind gleich, außer ihrem {{SVGAttr("x")}}-Attributwert, der sie entlang der x-Achse positioniert.

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

Mit CSS setzen wir einen `ry`-Wert auf vier der Rechtecke:

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

{{EmbedLiveSample("Erstellen abgerundeter Ecken", "300", "180")}}

Das erste Rechteck verwendet standardmäßig `auto`; da alle `rx`-Werte in diesem Beispiel ebenfalls standardmäßig auf `auto` gesetzt sind, beträgt der verwendete Wert von `ry` `0`. Die roten und blauen Rechtecke haben abgerundete Ecken von `10px` bzw. `2em`. Da der SVG-Viewport standardmäßig 300px mal 150px beträgt, erzeugt der `5%`-Wert des orangefarbenen Rechtecks einen Radius von `7.5px`. Das grüne Rechteck hat `ry: 80%` gesetzt. Da der Wert von `ry` jedoch nie mehr als `50%` der Höhe des Rechtecks beträgt, ist der Effekt so, als wäre `ry: 50%; rx: 50%` gesetzt.

### Definition des vertikalen Radius einer Ellipse

Dieses grundlegende `<ellipse>`-Beispiel zeigt die CSS-`ry`-Eigenschaft, die gegenüber einem SVG-`ry`-Attribut Vorrang hat, um den vertikalen Radius der Form zu definieren.

#### HTML

Wir fügen zwei identische `<ellipse>`-Elemente in ein SVG ein; jedes mit dem `ry`-Attribut auf `20` gesetzt.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="80" cy="50" rx="40" ry="20" />
  <ellipse cx="80" cy="50" rx="40" ry="20" />
</svg>
```

#### CSS

Wir stylen nur die erste Ellipse und lassen ihren Zwilling die Standardbenutzeragentenstile verwenden (wobei {{cssxref("fill")}} standardmäßig schwarz ist). Die geometrische `ry`-Eigenschaft überschreibt den Wert des SVG-{{SVGAttr("ry")}}-Attributs. Wir setzen auch die `fill`- und {{cssxref("stroke")}}-Eigenschaften, um die gestylte Form von ihrem Zwilling zu unterscheiden.

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

{{EmbedLiveSample("Definition des vertikalen Radius einer Ellipse", "300", "180")}}

Der vertikale Radius der gestylten Ellipse beträgt `80px`, wie im CSS-`ry`-Eigenschaftswert definiert. Der vertikale Radius der ungestylten Ellipse beträgt `20px`, wie durch das `ry`-Attribut definiert.

### Prozentwerte für den vertikalen Ellipsenradius

Dieses Beispiel zeigt die Verwendung von Prozentwerten für `ry`.

#### HTML

Wir verwenden das gleiche Markup wie im vorherigen Beispiel.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="80" cy="50" rx="40" ry="20" />
  <ellipse cx="80" cy="50" rx="40" ry="20" />
</svg>
```

#### CSS

Das CSS ist dem vorherigen Beispiel ähnlich, mit dem einzigen Unterschied, dass der `ry`-Eigenschaftswert in diesem Fall ein Prozentwert ist.

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

{{EmbedLiveSample("Prozentwerte für den vertikalen Ellipsenradius", "300", "180")}}

Bei der Verwendung von Prozentwerten für `ry` beziehen sich die Werte auf die Höhe des SVG-Viewports. Hier beträgt die Größe des vertikalen Radius der gestylten Ellipse `30%` der Höhe des aktuellen SVG-Viewports. Da die Höhe standardmäßig `150px` betrug, beträgt der `ry`-Wert `45px`, wodurch die Ellipse `90px` hoch wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Geometrieeigenschaften: `ry`, {{cssxref("cx")}}, {{cssxref("cy")}}, {{cssxref("r")}}, {{cssxref("rx")}}, {{cssxref("x")}}, {{cssxref("y")}}, {{cssxref("height")}}, {{cssxref("height")}}
- {{cssxref("fill")}}
- {{cssxref("stroke")}}
- {{cssxref("paint-order")}}
- {{cssxref("border-radius")}} Kurzschreibweise
- {{cssxref("gradient/radial-gradient", "radial-gradient")}}
- {{cssxref("basic-shape")}} Datentyp
