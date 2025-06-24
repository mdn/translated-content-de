---
title: ry
slug: Web/CSS/ry
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`ry`**-Eigenschaft von [CSS](/de/docs/Web/CSS) definiert den y-Achsen- oder vertikalen Radius eines SVG-{{SVGElement("ellipse")}} sowie die vertikale Rundung der Ecken eines SVG-{{SVGElement("rect")}}-Rechtecks. Wenn vorhanden, überschreibt sie das {{SVGAttr("ry")}}-Attribut der Form.

> [!NOTE]
> Die `ry`-Eigenschaft gilt nur für {{SVGElement("ellipse")}}- und {{SVGElement("rect")}}-Elemente, die in einem {{SVGElement("svg")}} enthalten sind. Sie gilt nicht für andere SVG-Elemente oder HTML-Elemente oder Pseudo-Elemente.

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

Der Wert kann eine {{cssxref("length")}} sein, ein {{cssxref("percentage")}}, oder das Schlüsselwort `auto`, welches den vertikalen Radius von Ellipsen und den vertikalen `border-radius` von Rechtecken bezeichnet.

- {{cssxref("length")}}

  - : Absolute oder relative Längen können in jeder vom CSS {{cssxref("&lt;length&gt;")}} erlaubten Einheit ausgedrückt werden. Negative Werte sind ungültig.

- {{cssxref("percentage")}}

  - : Prozentsätze beziehen sich auf die Höhe des aktuellen SVG-Viewports. Der verwendete Wert für ein `<rect>` ist niemals mehr als 50% der Höhe des Rechtecks.

- `auto`
  - : Wenn `auto` gesetzt ist oder standardmäßig `auto` verwendet wird, entspricht der `ry`-Wert dem absoluten Längenwert, der für {{cssxref("rx")}} verwendet wird. Wenn sowohl `ry` als auch `rx` einen berechneten Wert von `auto` haben, wird der verwendete Wert `0`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Abgerundete Ecken erstellen

Dieses Beispiel zeigt, wie man Rechtecke mit abgerundeten Ecken erstellt, indem die `ry`-Eigenschaft auf SVG-`<rect>`-Elemente angewendet wird.

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

Mit CSS setzen wir einen `ry`-Wert für vier der Rechtecke:

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

Das erste Rechteck hat standardmäßig `auto`; da alle `rx`-Werte in diesem Beispiel ebenfalls standardmäßig `auto` sind, ist der verwendete Wert von `ry` `0`. Die roten und blauen Rechtecke haben Eckenradien von `10px` und `2em` bzw. Da der SVG-Viewport standardmäßig 300px mal 150px groß ist, erzeugt der `5%`-Wert des orangefarbenen Rechtecks einen `7.5px`-Radius. Das grüne Rechteck hat `ry: 80%` gesetzt. Da der `ry`-Wert jedoch niemals mehr als `50%` der Höhe des Rechtecks beträgt, ist der Effekt so, als ob `ry: 50%; rx: 50%` gesetzt wäre.

### Der vertikale Radius einer Ellipse definieren

Dieses grundlegende `<ellipse>`-Beispiel zeigt, wie die CSS-`ry`-Eigenschaft das SVG-`ry`-Attribut überschreibt, um den vertikalen Radius der Form zu definieren.

#### HTML

Wir fügen zwei identische `<ellipse>`-Elemente in ein SVG ein; jedes mit dem `ry`-Attribut auf `20` gesetzt.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="80" cy="50" rx="40" ry="20" />
  <ellipse cx="80" cy="50" rx="40" ry="20" />
</svg>
```

#### CSS

Wir stylen nur die erste Ellipse und lassen ihr Ebenbild die Standardstile des Benutzeragenten verwenden ({{cssxref("fill")}} mit Standardwert schwarz). Die geometrische `ry`-Eigenschaft überschreibt den Wert des SVG-{{SVGAttr("ry")}}-Attributs. Wir setzen auch die `fill`- und {{cssxref("stroke")}}-Eigenschaften, um die gestylte Form von ihrem Ebenbild zu unterscheiden.

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

Der vertikale Radius der gestylten Ellipse beträgt `80px`, wie im CSS-`ry`-Eigenschaftswert definiert. Der vertikale Radius der ungestylten Ellipse beträgt `20px`, was durch das `ry`-Attribut definiert wurde.

### Prozentwerte für den vertikalen Radius einer Ellipse

Dieses Beispiel zeigt, wie Prozentsätze für `ry` verwendet werden können.

#### HTML

Wir verwenden das gleiche Markup wie im vorherigen Beispiel.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="80" cy="50" rx="40" ry="20" />
  <ellipse cx="80" cy="50" rx="40" ry="20" />
</svg>
```

#### CSS

Das CSS ist dem vorherigen Beispiel ähnlich, mit der einzigen Ausnahme, dass der `ry`-Eigenschaftswert diesmal ein Prozentwert ist.

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

Bei Verwendung von Prozentwerten für `ry` beziehen sich die Werte auf die Höhe des SVG-Viewports. Hier beträgt die Größe des vertikalen Radiusses der gestylten Ellipse `30%` der Höhe des aktuellen SVG-Viewports. Da die Höhe standardmäßig `150px` beträgt, ist der `ry`-Wert `45px`, wodurch die Ellipse `90px` hoch ist.

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
- SVG-{{SVGAttr("ry")}}-Attribut
