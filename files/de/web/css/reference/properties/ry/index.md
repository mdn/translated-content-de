---
title: ry
slug: Web/CSS/Reference/Properties/ry
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`ry`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert den y-Achsen- oder vertikalen Radius eines SVG-{{SVGElement("ellipse")}} und die vertikale Rundung der Ecken eines SVG-{{SVGElement("rect")}} Rechtecks. Wenn vorhanden, überschreibt sie das {{SVGAttr("ry")}} Attribut der Form.

> [!NOTE]
> Die `ry` Eigenschaft gilt nur für {{SVGElement("ellipse")}} und {{SVGElement("rect")}} Elemente, die in einem {{SVGElement("svg")}} verschachtelt sind. Sie gilt nicht für andere SVG-Elemente, HTML-Elemente oder Pseudo-Elemente.

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

Der {{cssxref("length")}}, {{cssxref("percentage")}}, oder der `auto` Schlüsselwortwert bezeichnet den vertikalen Radius von Ellipsen und den vertikalen `border-radius` von Rechtecken.

- {{cssxref("length")}}
  - : Absolute oder relative Längen können in jeder von der CSS {{cssxref("&lt;length&gt;")}} Datenart erlaubten Einheit ausgedrückt werden. Negative Werte sind ungültig.

- {{cssxref("percentage")}}
  - : Prozentsätze beziehen sich auf die Höhe des aktuellen SVG-Ansichtsfensters. Der verwendete Wert für ein `<rect>` beträgt niemals mehr als 50% der Höhe des Rechtecks.

- `auto`
  - : Wenn auf `auto` eingestellt oder standardmäßig, entspricht der `ry` Wert dem absoluten Längenwert, der für {{cssxref("rx")}} verwendet wird. Haben sowohl `ry` als auch `rx` einen berechneten Wert von `auto`, ist der verwendete Wert `0`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen von abgerundeten Ecken

Dieses Beispiel zeigt, wie Rechtecke mit abgerundeten Ecken erstellt werden, indem die `ry` Eigenschaft auf SVG-`<rect>`-Elemente angewendet wird.

#### HTML

Wir fügen ein SVG-Bild mit vier `<rect>`-Elementen ein; alle Rechtecke sind gleich, außer ihrem {{SVGAttr("x")}} Attributwert, der sie entlang der x-Achse positioniert.

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

Das erste Rechteck hat den Standardwert `auto`; da alle `rx` Werte in diesem Beispiel ebenfalls auf `auto` gesetzt sind, beträgt der verwendete Wert von `ry` `0`. Die roten und blauen Rechtecke haben abgerundete Ecken von `10px` bzw. `2em`. Da das SVG-Ansichtsfenster standardmäßig 300px mal 150px groß ist, erzeugt der `5%` Wert des orangefarbenen Rechtecks einen Radius von `7.5px`. Das grüne Rechteck hat `ry: 80%` gesetzt. Da der Wert von `ry` jedoch niemals mehr als 50% der Höhe des Rechtecks beträgt, hat dies den Effekt, als wäre `ry: 50%; rx: 50%` gesetzt.

### Definieren des vertikalen Radius einer Ellipse

Dieses grundlegende `<ellipse>` Beispiel zeigt, dass die CSS-`ry` Eigenschaft gegenüber einem SVG-`ry` Attribut Vorrang hat, um den vertikalen Radius der Form zu definieren.

#### HTML

Wir fügen zwei identische `<ellipse>`-Elemente in ein SVG ein; jedes mit dem `ry` Attribut auf `20` gesetzt.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="80" cy="50" rx="40" ry="20" />
  <ellipse cx="80" cy="50" rx="40" ry="20" />
</svg>
```

#### CSS

Wir stylen nur die erste Ellipse und lassen die zweite die Standardstile des Benutzer-Agents verwenden (mit {{cssxref("fill")}}, das standardmäßig schwarz ist). Die geometrische `ry` Eigenschaft überschreibt den Wert des SVG-{{SVGAttr("ry")}} Attributs. Wir setzen auch die `fill` und {{cssxref("stroke")}} Eigenschaften, um die gestylte Form von ihrem Zwilling zu unterscheiden.

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

Der vertikale Radius der gestylten Ellipse beträgt `80px`, wie im CSS `ry` Eigenschaftswert definiert. Der vertikale Radius der ungestylten Ellipse beträgt `20px`, was durch das `ry` Attribut definiert wurde.

### Ellipse vertikaler Radius Prozentwerte

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

Das CSS ist ähnlich wie im vorherigen Beispiel, mit dem einzigen Unterschied im `ry` Eigenschaftswert; in diesem Fall verwenden wir einen Prozentwert.

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

Bei der Verwendung von Prozentwerten für `ry` beziehen sich die Werte auf die Höhe des SVG-Ansichtsfensters. Hier beträgt die Größe des vertikalen Radius der gestylten Ellipse `30%` der Höhe des aktuellen SVG-Ansichtsfensters. Da die Höhe standardmäßig `150px` beträgt, ist der `ry` Wert `45px`, was die Ellipse `90px` hoch macht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Geometrie-Eigenschaften: `ry`, {{cssxref("cx")}}, {{cssxref("cy")}}, {{cssxref("r")}}, {{cssxref("rx")}}, {{cssxref("x")}}, {{cssxref("y")}}, {{cssxref("height")}}, {{cssxref("height")}}
- {{cssxref("fill")}}
- {{cssxref("stroke")}}
- {{cssxref("paint-order")}}
- {{cssxref("border-radius")}} Kurzschreibweise
- {{cssxref("gradient/radial-gradient", "radial-gradient")}}
- {{cssxref("basic-shape")}} Datentyp
- SVG {{SVGAttr("ry")}} Attribut
