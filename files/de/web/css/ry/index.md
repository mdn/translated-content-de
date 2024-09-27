---
title: ry
slug: Web/CSS/ry
l10n:
  sourceCommit: c5f403bb08c91ae77ddfe47f937438fb5e6fcae5
---

{{CSSRef}}

Die **`ry`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert den y-Achsen- oder vertikalen Radius eines SVG-{{SVGElement("ellipse")}} und die vertikale Rundung der Ecken eines SVG-{{SVGElement("rect")}} Rechtecks. Wenn vorhanden, überschreibt sie das {{SVGAttr("ry")}} Attribut der Form.

> [!NOTE]
> Die `ry` Eigenschaft gilt nur für {{SVGElement("ellipse")}} und {{SVGElement("rect")}} Elemente, die in einem {{SVGElement("svg")}} eingebettet sind. Sie gilt nicht für andere SVG-Elemente, HTML-Elemente oder Pseudo-Elemente.

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

Der {{cssxref("length")}}, {{cssxref("percentage")}}, oder `auto` Schlüsselwortwert bezeichnet den vertikalen Radius von Ellipsen und den vertikalen Radius von Rechtecken.

- {{cssxref("length")}}

  - : Absolute oder relative Längen können in jeder vom CSS {{cssxref("&lt;length&gt;")}} Datentyp erlaubten Einheit ausgedrückt werden. Negative Werte sind ungültig.

- {{cssxref("percentage")}}

  - : Prozentsätze beziehen sich auf die Höhe des aktuellen SVG-Ansichtsfensters. Der verwendete Wert für ein `<rect>` ist nie mehr als 50% der Höhe des Rechtecks.

- `auto`

  - : Wenn auf `auto` gesetzt oder darauf zurückgegriffen wird, entspricht der `ry` Wert dem absoluten Längenwert, der für {{cssxref("rx")}} verwendet wird. Wenn sowohl `ry` als auch `rx` einen berechneten Wert von `auto` haben, beträgt der verwendete Wert `0`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen abgerundeter Ecken

Dieses Beispiel demonstriert die Erstellung von Rechtecken mit abgerundeten Ecken, indem die `ry` Eigenschaft auf SVG `<rect>` Elemente angewendet wird.

#### HTML

Wir fügen ein SVG-Bild mit vier `<rect>` Elementen ein; alle Rechtecke sind gleich, außer ihr {{SVGAttr("x")}} Attributwert, der sie entlang der x-Achse positioniert.

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

Das erste Rechteck hat standardmäßig `auto`; da alle `rx` Werte in diesem Beispiel auch standardmäßig `auto` sind, beträgt der verwendete Wert von `ry` `0`. Die roten und blauen Rechtecke haben jeweils `10px` und `2em` abgerundete Ecken. Da das SVG-Ansichtsfenster standardmäßig 300px mal 150px groß ist, erzeugt der `5%` Wert des orangen Rechtecks einen Radius von `7.5px`. Das grüne Rechteck hat `ry: 80%` gesetzt. Da der Wert von `ry` jedoch nie mehr als `50%` der Höhe des Rechtecks beträgt, ist der Effekt so, als ob `ry: 50%; rx: 50%` gesetzt wäre.

### Definieren des vertikalen Radius einer Ellipse

Dieses einfache `<ellipse>` Beispiel zeigt, dass die CSS `ry` Eigenschaft Vorrang vor einem SVG `ry` Attribut hat, um den vertikalen Radius der Form festzulegen.

#### HTML

Wir fügen zwei identische `<ellipse>` Elemente in ein SVG ein; jedes hat das `ry` Attribut auf `20` gesetzt.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="80" cy="50" rx="40" ry="20" />
  <ellipse cx="80" cy="50" rx="40" ry="20" />
</svg>
```

#### CSS

Wir stylen nur die erste Ellipse, damit ihr Zwilling die Standard-Stile des Benutzeragenten verwendet (wobei {{cssxref("fill")}} standardmäßig schwarz ist). Die geometrische `ry` Eigenschaft überschreibt den Wert des SVG {{SVGAttr("ry")}} Attributs. Wir setzen auch die `fill` und {{cssxref("stroke")}} Eigenschaften, um die gestylte Form von ihrem Zwilling zu unterscheiden.

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

### Prozentuale Werte des vertikalen Radius einer Ellipse

Dieses Beispiel demonstriert die Verwendung von Prozentwerten für `ry`.

#### HTML

Wir verwenden dasselbe Markup wie im vorherigen Beispiel.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="80" cy="50" rx="40" ry="20" />
  <ellipse cx="80" cy="50" rx="40" ry="20" />
</svg>
```

#### CSS

Das CSS ist ähnlich wie im vorherigen Beispiel, der einzige Unterschied ist der Wert der `ry` Eigenschaft; in diesem Fall verwenden wir einen Prozentwert.

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

Bei der Verwendung von Prozentwerten für `ry` sind die Werte relativ zur Höhe des SVG-Ansichtsfensters. Hier beträgt die Größe des vertikalen Radius der gestylten Ellipse `30%` der Höhe des aktuellen SVG-Ansichtsfensters. Da die Höhe standardmäßig `150px` beträgt, ist der `ry` Wert `45px`, was die Ellipse `90px` hoch macht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Geometrie-Eigenschaften: `ry`, {{cssxref("cx")}}, {{cssxref("cy")}}, {{cssxref("r")}}, {{cssxref("rx")}}, {{cssxref("x")}}, {{cssxref("y")}}, {{cssxref("height")}}, {{cssxref("height")}}
- {{cssxref("fill")}}
- {{cssxref("stroke")}}
- {{cssxref("paint-order")}}
- {{cssxref("border-radius")}} Kurzform-Eigenschaft
- {{cssxref("gradient/radial-gradient", "radial-gradient")}}
- {{cssxref("basic-shape")}} Datentyp
