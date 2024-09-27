---
title: rx
slug: Web/CSS/rx
l10n:
  sourceCommit: c5f403bb08c91ae77ddfe47f937438fb5e6fcae5
---

{{CSSRef}}

Die **`rx`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert den x-Achsen- oder horizontalen Radius eines SVG-{{SVGElement("ellipse")}} und die horizontale Krümmung der Ecken eines SVG-{{SVGElement("rect")}} Rechtecks. Falls vorhanden, überschreibt sie das {{SVGAttr("rx")}} Attribut der Form.

> [!NOTE]
> Die `rx` Eigenschaft gilt nur für {{SVGElement("ellipse")}} und {{SVGElement("rect")}} Elemente, die in einem {{SVGElement("svg")}} verschachtelt sind. Sie gilt nicht für andere SVG-Elemente oder HTML-Elemente oder Pseudo-Elemente.

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

Der Wert {{cssxref("length")}}, {{cssxref("percentage")}} oder das Schlüsselwort `auto` bezeichnet den horizontalen Radius von Ellipsen und den horizontalen Rahmenradius von Rechtecken.

- {{cssxref("length")}}

  - : Absolute oder relative Längen können in jeder Einheit ausgedrückt werden, die durch den CSS-{{cssxref("&lt;length&gt;")}} Datentyp erlaubt ist. Negative Werte sind ungültig.

- {{cssxref("percentage")}}

  - : Prozentsätze beziehen sich auf die Breite des aktuellen SVG-Viewports. Der verwendete Wert für ein `<rect>` beträgt nie mehr als 50 % der Breite des Rechtecks.

- `auto`

  - : Wird `auto` gesetzt oder ist `auto` der Standardwert, entspricht der `rx`-Wert dem absoluten Längenwert, der für {{cssxref("ry")}} verwendet wird. Wenn sowohl `rx` als auch `ry` einen berechneten Wert von `auto` haben, beträgt der verwendete Wert `0`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen von abgerundeten Ecken

Dieses Beispiel zeigt, wie man Rechtecke mit abgerundeten Ecken erstellt, indem die `rx`-Eigenschaft auf SVG-`<rect>`-Elemente angewendet wird.

#### HTML

Wir fügen ein SVG-Bild mit vier `<rect>`-Elementen ein; alle Rechtecke sind gleich, mit Ausnahme ihres {{SVGAttr("x")}} Attributwertes, der sie entlang der x-Achse positioniert.

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

Mit CSS setzen wir einen `rx`-Wert auf vier der Rechtecke:

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

#### Ergebnisse

{{EmbedLiveSample("Erstellen von abgerundeten Ecken", "300", "180")}}

Das erste Rechteck hat `auto` als Standardwert; da alle `ry`-Werte in diesem Beispiel auch auf `auto` standardmäßig eingestellt sind, beträgt der verwendete Wert von `rx` `0`. Die roten und blauen Rechtecke haben abgerundete Ecken mit `10px` bzw. `2em`. Da der SVG-Viewport standardmäßig 300px mal 150px beträgt, erzeugt der `5%`-Wert des orangefarbenen Rechtecks einen `15px`-Radius. Das grüne Rechteck hat `rx: 80%` gesetzt. Da der Wert von `rx` jedoch nie mehr als `50%` der Breite des Rechtecks beträgt, wirkt es so, als ob `rx: 50%; ry: 50%` gesetzt wäre.

### Definierung des horizontalen Radius einer Ellipse

Dieses grundlegende `<ellipse>`-Beispiel zeigt, dass die CSS-`rx`-Eigenschaft den SVG-`rx`-Attributwert zur Definition des horizontalen Radius der Form überschreibt.

#### HTML

Wir fügen zwei identische `<ellipse>`-Elemente in ein SVG ein; jedes mit dem `rx`-Attribut auf `20` gesetzt.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="80" cy="50" rx="20" ry="40" />
  <ellipse cx="80" cy="50" rx="20" ry="40" />
</svg>
```

#### CSS

Wir stylen nur die erste Ellipse und lassen ihr Pendant die Standard-Stilarten des User-Agents verwenden (wobei {{cssxref("fill")}} standardmäßig auf Schwarz eingestellt ist). Die geometrische `rx`-Eigenschaft überschreibt den Wert des SVG-{{SVGAttr("rx")}} Attributs. Wir setzen auch die `fill`- und {{cssxref("stroke")}}-Eigenschaften, um die gestylte Form von ihrem Pendant zu unterscheiden.

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

#### Ergebnisse

{{EmbedLiveSample("Definierung des horizontalen Radius einer Ellipse", "300", "180")}}

Der horizontale Radius der gestylten Ellipse beträgt `80px`, wie im CSS `rx`-Eigenschaftswert definiert. Der horizontale Radius der ungestylten Ellipse beträgt `20px`, was durch das `rx`-Attribut definiert wurde.

### Prozentuale Werte des horizontalen Radius einer Ellipse

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

Das CSS ist dem vorherigen Beispiel ähnlich, der einzige Unterschied ist der Wert der `rx`-Eigenschaft; in diesem Fall verwenden wir einen Prozentwert.

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

#### Ergebnisse

{{EmbedLiveSample("Prozentuale Werte des horizontalen Radius einer Ellipse", "300", "180")}}

Wenn Prozentwerte für `rx` verwendet werden, beziehen sich die Werte auf die Breite des SVG-Viewports. Hier ist die Größe des horizontalen Radius der gestylten Ellipse `30%` der Breite des aktuellen SVG-Viewports. Da die Breite standardmäßig auf `300px` eingestellt ist, beträgt der `rx`-Wert `90px`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Geometrie-Eigenschaften: `rx`, {{cssxref("cx")}}, {{cssxref("cy")}}, {{cssxref("r")}}, {{cssxref("ry")}}, {{cssxref("x")}}, {{cssxref("y")}}, {{cssxref("width")}}, {{cssxref("height")}}
- {{cssxref("fill")}}
- {{cssxref("stroke")}}
- {{cssxref("paint-order")}}
- Kurzbefehls-Eigenschaft {{cssxref("border-radius")}}
- {{cssxref("gradient/radial-gradient", "radial-gradient")}}
- {{cssxref("basic-shape")}} Datentyp
