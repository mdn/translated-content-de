---
title: rx
slug: Web/CSS/rx
l10n:
  sourceCommit: c5f403bb08c91ae77ddfe47f937438fb5e6fcae5
---

{{CSSRef}}

Die **`rx`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert den x-Achsen- oder horizontalen Radius einer SVG {{SVGElement("ellipse")}} und die horizontale Kurve der Ecken eines SVG {{SVGElement("rect")}} Rechtecks. Wenn vorhanden, überschreibt sie das {{SVGAttr("rx")}} Attribut der Form.

> [!NOTE]
> Die `rx` Eigenschaft gilt nur für {{SVGElement("ellipse")}} und {{SVGElement("rect")}} Elemente, die in einem {{SVGElement("svg")}} verschachtelt sind. Sie gilt nicht für andere SVG-Elemente oder HTML-Elemente oder Pseudo-Elemente.

## Syntax

```css
/* Initialer Wert */
rx: auto;

/* Längen- und Prozentwerte */
rx: 20px;
rx: 20%;

/* Globale Werte */
rx: inherit;
rx: initial;
rx: revert;
rx: revert-layer;
rx: unset;
```

### Werte

Der {{cssxref("length")}}, {{cssxref("percentage")}}, oder `auto` Schlüsselwortwert bezeichnet den horizontalen Radius von Ellipsen und den horizontalen Rand-Radius von Rechtecken.

- {{cssxref("length")}}

  - : Absolute oder relative Längen können in jeder Einheit ausgedrückt werden, die vom CSS {{cssxref("&lt;length&gt;")}} Datentyp erlaubt ist. Negative Werte sind ungültig.

- {{cssxref("percentage")}}

  - : Prozentsätze beziehen sich auf die Breite des aktuellen SVG-Ansichtsfensters. Der verwendete Wert für ein `<rect>` beträgt nie mehr als 50% der Breite des Rechtecks.

- `auto`

  - : Wenn auf `auto` gesetzt oder voreingestellt, entspricht der `rx` Wert dem absoluten Längenwert, der für {{cssxref("ry")}} verwendet wird. Wenn sowohl `rx` als auch `ry` einen berechneten Wert von `auto` haben, ist der verwendete Wert `0`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Abgerundete Ecken erstellen

Dieses Beispiel zeigt, wie man Rechtecke mit abgerundeten Ecken erstellt, indem die `rx` Eigenschaft auf SVG `<rect>` Elemente angewendet wird.

#### HTML

Wir inkludieren ein SVG-Bild mit vier `<rect>` Elementen; alle Rechtecke sind gleich, außer ihrem {{SVGAttr("x")}} Attributwert, der sie entlang der x-Achse positioniert.

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

Mit CSS setzen wir einen `rx` Wert auf vier der Rechtecke:

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

{{EmbedLiveSample("Abgerundete Ecken erstellen", "300", "180")}}

Das erste Rechteck ist standardmäßig auf `auto`; da alle `ry` Werte in diesem Beispiel ebenfalls standardmäßig auf `auto` sind, beträgt der verwendete Wert von `rx` `0`. Die roten und blauen Rechtecke haben jeweils `10px` und `2em` abgerundete Ecken. Da das SVG-Ansichtsfenster standardmäßig 300px mal 150px ist, erzeugt der `5%` Wert des orangefarbenen Rechtecks einen Radius von `15px`. Das grüne Rechteck hat `rx: 80%` eingestellt. Da der Wert von `rx` jedoch nie mehr als `50%` der Breite des Rechtecks beträgt, wirkt es, als wäre `rx: 50%; ry: 50%` gesetzt.

### Horizontalen Radius einer Ellipse definieren

Dieses grundlegende `<ellipse>` Beispiel zeigt, dass die CSS `rx` Eigenschaft den SVG `rx` Attributwert für den horizontalen Radius der Form überschreibt.

#### HTML

Wir inkludieren zwei identische `<ellipse>` Elemente in einem SVG; jedes mit dem `rx` Attribut auf `20` gesetzt.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="80" cy="50" rx="20" ry="40" />
  <ellipse cx="80" cy="50" rx="20" ry="40" />
</svg>
```

#### CSS

Wir stylen nur die erste Ellipse, während ihr Zwilling die standardmäßigen Benutzeragent-Stile verwendet (mit {{cssxref("fill")}} standardmäßig auf Schwarz). Die geometrische `rx` Eigenschaft überschreibt den Wert des SVG {{SVGAttr("rx")}} Attributs. Wir setzen auch die `fill` und {{cssxref("stroke")}} Eigenschaften, um die gestylte Form von ihrem Zwilling zu unterscheiden.

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

{{EmbedLiveSample("Horizontalen Radius einer Ellipse definieren", "300", "180")}}

Der horizontale Radius der gestylten Ellipse beträgt `80px`, wie im CSS-`rx` Eigenschaftswert definiert. Der horizontale Radius der ungestylten Ellipse beträgt `20px`, der durch das `rx` Attribut definiert wurde.

### Ellipse horizontaler Radius Prozentwerte

Dieses Beispiel zeigt die Verwendung von Prozentwerten für `rx`.

#### HTML

Wir verwenden das gleiche Markup wie im vorherigen Beispiel.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="80" cy="50" rx="20" ry="40" />
  <ellipse cx="80" cy="50" rx="20" ry="40" />
</svg>
```

#### CSS

Das CSS ist ähnlich wie im vorherigen Beispiel, mit dem einzigen Unterschied, dass der Wert der `rx` Eigenschaft in diesem Fall ein Prozentwert ist.

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

{{EmbedLiveSample("Ellipse horizontaler Radius Prozentwerte", "300", "180")}}

Bei der Verwendung von Prozentwerten für `rx` sind die Werte relativ zur Breite des SVG-Ansichtsfensters. Hier beträgt die Größe des horizontalen Radius der gestylten Ellipse `30%` der Breite des aktuellen SVG-Ansichtsfensters. Da die Breite standardmäßig `300px` beträgt, ist der `rx` Wert `90px`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Geometrie-Eigenschaften: `rx`, {{cssxref("cx")}}, {{cssxref("cy")}}, {{cssxref("r")}}, {{cssxref("ry")}}, {{cssxref("x")}}, {{cssxref("y")}}, {{cssxref("width")}}, {{cssxref("height")}}
- {{cssxref("fill")}}
- {{cssxref("stroke")}}
- {{cssxref("paint-order")}}
- {{cssxref("border-radius")}} Kurzschreibweise
- {{cssxref("gradient/radial-gradient", "radial-gradient")}}
- {{cssxref("basic-shape")}} Datentyp
