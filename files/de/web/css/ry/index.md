---
title: ry
slug: Web/CSS/ry
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`ry`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert den y-Achsen- oder vertikalen Radius eines SVG-{{SVGElement("ellipse")}} und die vertikale Rundung der Ecken eines SVG-{{SVGElement("rect")}}-Rechtecks. Wenn vorhanden, überschreibt sie das {{SVGAttr("ry")}}-Attribut der Form.

> [!NOTE]
> Die Eigenschaft `ry` gilt nur für innerhalb eines {{SVGElement("svg")}} verschachtelte {{SVGElement("ellipse")}}- und {{SVGElement("rect")}}-Elemente. Sie gilt nicht für andere SVG-Elemente oder HTML-Elemente oder Pseudo-Elemente.

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

Der {{cssxref("length")}}, {{cssxref("percentage")}} oder das `auto` Schlüsselwortwert bezeichnet den vertikalen Radius von Ellipsen und den vertikalen Randradius von Rechtecken.

- {{cssxref("length")}}
  - : Absolute oder relative Längen können in jeder Einheit angegeben werden, die vom CSS-Datentyp {{cssxref("&lt;length&gt;")}} erlaubt ist. Negative Werte sind ungültig.

- {{cssxref("percentage")}}
  - : Prozentsätze beziehen sich auf die Höhe des aktuellen SVG-Anzeigefensters. Der angewandte Wert für ein `<rect>` beträgt nie mehr als 50% der Höhe des Rechtecks.

- `auto`
  - : Wenn auf `auto` gesetzt oder standardmäßig verwendet, entspricht der `ry`-Wert dem absoluten Längenwert, der für {{cssxref("rx")}} verwendet wird. Wenn sowohl `ry` als auch `rx` einen berechneten Wert von `auto` haben, wird als verwendeter Wert `0` genommen.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Abgerundete Ecken erstellen

Dieses Beispiel zeigt, wie man Rechtecke mit abgerundeten Ecken erstellt, indem die `ry`-Eigenschaft auf SVG-`<rect>`-Elemente angewendet wird.

#### HTML

Wir fügen ein SVG-Bild mit vier `<rect>`-Elementen ein; alle Rechtecke sind gleich, mit Ausnahme ihres {{SVGAttr("x")}}-Attributwertes, der sie entlang der x-Achse positioniert.

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

{{EmbedLiveSample("Creating rounded corners", "300", "180")}}

Das erste Rechteck nutzt standardmäßig `auto`; da alle `rx`-Werte in diesem Beispiel auch standardmäßig `auto` sind, ist der verwendete Wert von `ry` `0`. Die roten und blauen Rechtecke haben jeweils Ecken mit `10px` und `2em` abgerundet. Da das SVG-Ansichtsfenster standardmäßig 300px mal 150px ist, erzeugt der `5%`-Wert des orangefarbenen Rechtecks einen Radius von `7,5px`. Das grüne Rechteck hat `ry: 80%` eingestellt. Da der Wert von `ry` jedoch niemals mehr als `50%` der Höhe des Rechtecks ist, ist der Effekt so, als ob `ry: 50%; rx: 50%` gesetzt wäre.

### Den vertikalen Radius einer Ellipse definieren

Dieses grundlegende `<ellipse>`-Beispiel zeigt, dass die CSS-`ry`-Eigenschaft Vorrang vor einem SVG-`ry`-Attribut hat, um den vertikalen Radius der Form festzulegen.

#### HTML

Wir fügen zwei identische `<ellipse>`-Elemente in ein SVG ein; jedes mit dem `ry`-Attribut auf `20` gesetzt.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="80" cy="50" rx="40" ry="20" />
  <ellipse cx="80" cy="50" rx="40" ry="20" />
</svg>
```

#### CSS

Wir stylen nur die erste Ellipse und lassen ihr Zwilling die Standard-User-Agent-Stile verwenden (wobei {{cssxref("fill")}} standardmäßig schwarz ist). Die geometrische `ry`-Eigenschaft überschreibt den Wert des SVG-{{SVGAttr("ry")}}-Attributs. Wir setzen auch die Eigenschaften `fill` und {{cssxref("stroke")}}, um die gestylte Form von ihrem Zwilling zu unterscheiden.

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

Dieses Beispiel demonstriert die Verwendung von Prozentwerten für `ry`.

#### HTML

Wir verwenden das gleiche Markup wie im vorherigen Beispiel.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="80" cy="50" rx="40" ry="20" />
  <ellipse cx="80" cy="50" rx="40" ry="20" />
</svg>
```

#### CSS

Das CSS ist dem vorherigen Beispiel ähnlich, mit dem einzigen Unterschied im `ry`-Eigenschaftswert; in diesem Fall verwenden wir einen Prozentwert.

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

Bei der Verwendung von Prozentwerten für `ry` sind die Werte relativ zur Höhe des SVG-Ansichtsfensters. Hier beträgt die Größe des vertikalen Radius der gestylten Ellipse `30%` der Höhe des aktuellen SVG-Ansichtsfensters. Da die Höhe standardmäßig `150px` war, beträgt der `ry`-Wert `45px`, wodurch die Ellipse `90px` hoch ist.

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
- SVG {{SVGAttr("ry")}} Attribut
