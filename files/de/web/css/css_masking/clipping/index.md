---
title: Einführung in das Zuschneiden mit CSS
slug: Web/CSS/CSS_masking/Clipping
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

CSS-Zuschneiden ermöglicht es Ihnen, sichtbare Abschnitte eines Elements zu definieren, während andere Teile verborgen werden, und effektiv den Inhalt innerhalb einer bestimmten Form oder Fläche zu "zuschneiden". Mit dem Zuschneiden sind Elemente nicht darauf beschränkt, als Rechtecke gerendert zu werden, sondern können auf visuell ansprechende Weise gestaltet werden. Dieser Leitfaden untersucht die {{cssxref("clip-path")}}-Eigenschaft sowie einige Beispiele.

## CSS-Zuschneiden

Zuschneiden ist eine CSS-Technik, die dazu verwendet wird, Abschnitte eines Elements zu verbergen und nur den Bereich des Elements anzuzeigen, der innerhalb eines vom Entwickler definierten Pfades liegt. Zuschneidungsbereiche werden durch Vektorpfade erstellt; alles, was sich im Pfad befindet, ist sichtbar, während Bereiche außerhalb des Pfades verborgen bleiben.

### Die `clip-path`-Eigenschaft

Die `clip-path`-Eigenschaft wendet das Zuschneiden an. Der Wert, den sie akzeptiert, ist ein Vektorpfad, der den Bereich des Elements definiert, der sichtbar bleiben soll. Der Pfad kann durch Kästchen, einen Verweis auf ein [SVG `<clipPath>`](#svg_als_quelle) oder CSS- [Formen und Pfade](#formfunktion) definiert werden. Im folgenden Beispiel schneiden wir ein blaues Quadrat-{{htmlelement("div")}}, indem wir mit der {{cssxref("basic-shape/polygon","polygon()")}}-Funktion als Zuschneidungspfad eine Raute erzeugen:

```html hidden live-sample__clip-path
<div class="diamond"></div>
```

```css live-sample__clip-path
.diamond {
  height: 200px;
  width: 200px;
  background-color: blue;

  clip-path: polygon(0 50%, 50% 100%, 100% 50%, 50% 0);
}
```

{{ EmbedLiveSample('clip-path', 230, 230) }}

Mit der `clip-path`-Eigenschaft können Sie komplexe Formen erstellen, indem Sie ein Element auf eine `<basic-shape>` oder auf eine [SVG-Quelle](#svg_als_quelle) zuschneiden. Sie können [animieren und überblenden von `clip-path`-Formen](#animation), wenn die deklarierten Zustände die gleiche Anzahl an Vektorpunkten aufweisen.

### Werte der `clip-path`-Eigenschaft

Um ein Element visuell zuzuschneiden, wird die `clip-path`-Eigenschaft entweder auf eine [`<geometry-box>`](/de/docs/Web/CSS/clip-path#geometry-box), eine {{cssxref("url_value", "url")}} zu einer {{svgElement("clipPath")}}-Zuschneidungsquelle oder eine {{cssxref("basic-shape")}} mit [Formfunktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions#shape_functions) gesetzt.

### Geometrieboxen

Die `clip-path` verbirgt alles außerhalb des zugeschnittenen Bereichs. Der grundlegendste Zuschnitt erfolgt über eine Geometriebox. Sie können ein Element basierend auf seinem Rand, Rahmen, Padding oder Inhalt zuschneiden. Die Auswirkungen dieser visuellen Boxwerte können über andere CSS-Eigenschaften erreicht werden, wie z.B. durch das Setzen der {{cssxref("border-color")}} auf transparent und der {{cssxref("background-origin")}} auf die gewünschte visuelle Box. Wir betrachten diese Werte vor allem, weil diese Werte in Verbindung mit den Formfunktionen verwendet werden, die wir später ansehen werden, um den Ursprung des Form-Zuschneidungspfades zu definieren.

[Das Verstehen der Referenzbox](/de/docs/Web/CSS/CSS_shapes/Basic_shapes#the_reference_box), die von CSS-Formen verwendet wird, ist wichtig, wenn `clip-path` verwendet wird, besonders bei [Grundformen](#zuschneiden_auf_grundformen), da die Referenzbox das Koordinatensystem einer Form definiert.

#### Visuelle Boxwerte

Dieses Live-Beispiel demonstriert die unterschiedlichen visuellen Boxwerte der `clip-path`-Eigenschaft an einem Element und vergleicht es mit der CSS- `background-origin`-Eigenschaft. Wir haben ein {{cssxref("border")}}, eine {{cssxref("background-color")}}, ein {{cssxref("background-image")}} und {{cssxref("padding")}} auf das {{htmlelement("blockquote")}} angewendet. Wählen Sie einen Radio-Button, um das `--value` auf einen anderen `<geometry-box>`-Wert zu aktualisieren, der die {{cssxref("background-origin")}} und die aufgelösten Werte von {{cssxref("clip-path")}} aktualisiert.

```css hidden
body {
  display: flex;
  flex-flow: row wrap;
  place-content: center;
}
blockquote {
  float: left;
  font-size: 1.2rem;
}
q {
  color: white;
  font-family: sans-serif;
  display: block;
  margin-bottom: 0.5em;
}
p {
  margin: 0;
  line-height: 1.6;
}

body {
  --value: initial;
}
body:has([value="border-box"]:checked) {
  --value: border-box;
}
body:has([value="padding-box"]:checked) {
  --value: padding-box;
}
body:has([value="content-box"]:checked) {
  --value: content-box;
}
body:has([type="checkbox"]:checked) blockquote {
  border-radius: 70px;
}
```

```css
blockquote {
  width: 210px;
  padding: 20px;
  margin: 20px;
  border: 20px dashed #dedede;
  background-color: #ededed;
  background-image: linear-gradient(rebeccapurple, magenta);
  background-repeat: no-repeat;
}

.clippath {
  background-origin: var(--value);
  clip-path: var(--value);
}

.box-model {
  background-origin: var(--value);
}
```

```html hidden
<blockquote class="clippath">
  <q
    >I've learned that people will forget what you said, people will forget what
    you did, but people will never forget how you made them feel.</q
  >
  <cite>&mdash; Maya Angelou</cite>
</blockquote>
<blockquote class="box-model">
  <q
    >I've learned that people will forget what you said, people will forget what
    you did, but people will never forget how you made them feel.</q
  >
  <cite>&mdash; Maya Angelou</cite>
</blockquote>

<fieldset>
  <legend>Select the geometry box value:</legend>
  <p>
    <label
      ><input type="radio" name="gb" value="border-box" /> border-box</label
    >
  </p>
  <p>
    <label
      ><input type="radio" name="gb" value="padding-box" /> padding-box</label
    >
  </p>
  <p>
    <label
      ><input type="radio" name="gb" value="content-box" /> content-box</label
    >
  </p>
  <p>
    <label
      ><input type="radio" name="gb" value="initial" checked /> initial</label
    >
  </p>
</fieldset>
<p>
  <label><input type="checkbox" /> Change the border radius</label>
</p>
```

{{ EmbedLiveSample('visual box values', 230, 430) }}

Wenn eine `<geometry>`-Box in Kombination mit einer `<basic-shape>` angegeben wird, definiert der Wert die Referenzbox für die Grundform. Wird sie allein spezifiziert, bewirkt sie, dass die Kanten der spezifizierten Box, einschließlich jeder Eckenformung (wie `border-radius`), der Zuschneidungspfad sind.

#### Form-Ursprung

Das vorherige Beispiel könnte den Eindruck erwecken, dass die `<geometry-box>`-Werte nutzlos sind, da Sie `background-origin` anstelle verwenden können. Und das können Sie. Aber beim Zuschneiden mit Grundformen definiert die `<geometry-box>`, wenn sie zusammen mit einer `<basic-shape>` als `clip-path`-Wert verwendet wird, die Referenzbox oder den Ursprung dieser Form. Wir können die beiden vorherigen Beispiele kombinieren, um dies zu demonstrieren.

```html hidden
<blockquote class="clippath">
  <q
    >I've learned that people will forget what you said, people will forget what
    you did, but people will never forget how you made them feel.</q
  >
  <cite>&mdash; Maya Angelou</cite>
</blockquote>
<fieldset>
  <legend>Select the origin of the clip path shape:</legend>
  <p>
    <label
      ><input type="radio" name="gb" value="border-box" checked />
      border-box</label
    >
  </p>
  <p>
    <label
      ><input type="radio" name="gb" value="padding-box" /> padding-box</label
    >
  </p>
  <p>
    <label
      ><input type="radio" name="gb" value="content-box" /> content-box</label
    >
  </p>
</fieldset>
```

```css
blockquote {
  width: 210px;
  padding: 20px;
  margin: 20px;
  border: 20px dashed #dedede;
  background-color: #ededed;
  background-image: linear-gradient(rebeccapurple, magenta);
  background-repeat: no-repeat;
  background-origin: border-box;
  clip-path: var(--value) polygon(0 50%, 50% 100%, 100% 50%, 50% 0);
}
```

```css hidden
blockquote {
  font-size: 1.2rem;
}
q {
  color: white;
  font-family: sans-serif;
  display: block;
  margin-bottom: 0.5em;
}
p {
  margin: 0;
  line-height: 1.6;
}

body {
  --value: "";
}
body:has([value="border-box"]:checked) {
  --value: border-box;
}
body:has([value="padding-box"]:checked) {
  --value: padding-box;
}
body:has([value="content-box"]:checked) {
  --value: content-box;
}
```

{{ EmbedLiveSample('shape origin', 230, 420) }}

Für ein weiteres Beispiel siehe [`clip-path`-Formen und Geometrieboxen](/de/docs/Web/CSS/clip-path#shapes_and_geometry_boxes).

Auch Werte wie `clip-path: margin-box` können nützlich sein. Neben kreativen visuellen Darstellungen, die durch das Platzieren der Kante des clip-path auf der margin-box-Kante geschaffen werden, führt jeder berechnete Wert für `clip-path`, außer `none`, zur Erstellung eines neuen [Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_contexts), genauso wie CSS {{cssxref("opacity")}} für andere Werte als `1`.

## Zuschneiden auf Grundformen

Die Unterstützung der {{cssxref("basic-shape")}}-Werte durch die `clip-path`-Eigenschaft bietet eine leistungsstarke Möglichkeit, Elemente zu formen. Die verschiedenen Formfunktionen ermöglichen die Definition präziser Zuschneidungsbereiche und formen Elemente effektiv zu einzigartigen Formen. Die Grundformfunktionen umfassen:

- {{cssxref("basic-shape/circle","circle()")}}
- {{cssxref("basic-shape/ellipse","ellipse()")}}
- {{cssxref("basic-shape/inset","inset()")}}
- {{cssxref("basic-shape/path","path()")}}
- {{cssxref("basic-shape/polygon","polygon()")}}
- {{cssxref("basic-shape/rect","rect()")}}
- {{cssxref("basic-shape/shape","shape()")}}
- {{cssxref("basic-shape/xywh","xywh()")}}

Die Größe und Position dieser Formen wird durch den `<geometry-box>`-Wert definiert, der standardmäßig mit der border-box als Referenzbox verwendet wird, wenn der `clip-path`-Wert eine Form ohne `<geometry-box>`-Komponentenwert umfasst.

Einige dieser Funktionen scheinen nur grundlegende vordefinierte Zuschneidungsoptionen zu bieten. Sie können ähnliche Effekte erzielen, die Sie mit {{cssxref("border-radius")}} erzeugen können, aber wenn Sie [die `border-radius`-Eigenschaft umgeschaltet haben](#visuelle_boxwerte) im vorherigen Beispiel, haben Sie vielleicht die Stärke des CSS-Zuschneidens bemerkt. Formen bieten noch mehr Kontrolle. Beispielsweise ermöglicht `inset()` das Zuschneiden eines Rechtecks mit präzisen Rändern. Die eigentliche Stärke und Kontrolle zeigt sich mit `path()`, `shape()`, und sogar `polygon()`, was benutzerdefinierte Mehrpunktformen erlaubt.

### Erstellen von Polygonen

Mit `polygon()`, durch das Definieren von Koordinatenpaaren, von denen jedes einen Eckpunkt der Form darstellt, können Sie komplizierte Formen wie Sterne oder abstrakte Figuren erstellen. Die Koordinaten definieren Vektorpunkte, die durch gerade Linien verbunden sind.

Hier verwenden wir die `polygon()`-Funktion, um einen Stern zu erstellen:

```html hidden
<div class="star"></div>
```

```css
.star {
  width: 200px;
  height: 200px;
  background: linear-gradient(rebeccapurple, magenta) blue;
  clip-path: polygon(
    50% 0%,
    61% 35%,
    100% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    0% 35%,
    39% 35%,
    50% 0%
  );
}
```

{{ EmbedLiveSample('Creating polygons', 230, 230) }}

### Animation

Zugeschnittene Formen können animiert und überblendet werden, indem dieselbe Anzahl an Vektorpunkten für die verschiedenen Zustände deklariert wird.

```html hidden
<div class="star"></div>
```

```css hidden
.star {
  width: 200px;
  height: 200px;
  background: linear-gradient(rebeccapurple, magenta) blue;
  clip-path: polygon(
    50% 0%,
    61% 35%,
    100% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    0% 35%,
    39% 35%,
    50% 0%
  );
}
```

```css
@keyframes morphStar {
  from {
    clip-path: polygon(
      50% 0%,
      61% 35%,
      100% 35%,
      68% 57%,
      79% 91%,
      50% 70%,
      21% 91%,
      32% 57%,
      0% 35%,
      39% 35%,
      50% 0%
    );
  }
  to {
    clip-path: polygon(
      50% 10%,
      65% 30%,
      90% 20%,
      75% 60%,
      85% 95%,
      50% 80%,
      15% 95%,
      25% 60%,
      10% 20%,
      35% 30%,
      50% 10%
    );
  }
}

.star {
  animation: morphStar alternate 3s infinite ease-in-out;
}
```

{{ EmbedLiveSample('Animation', 230, 230) }}

### Die `path()`-Funktion

Die `path()`-Funktion ermöglicht das Zeichnen von Formen mithilfe von SVG-Befehlen. Die Funktion akzeptiert das Äquivalent des SVG-{{svgattr("d")}}-Attributs als Parameter der Funktion.

Der Stern aus dem vorherigen Beispiel kann mithilfe von `path()` erstellt werden:

```html hidden
<div class="star"></div>
```

```css
.star {
  width: 200px;
  height: 200px;
  background: linear-gradient(rebeccapurple, magenta) blue;
  clip-path: path(
    "M100,0 L122,70 L200,70 L136,114 L158,182 L100,140 L42,182 L64,114 L0,70 L78,70 L100,0 Z"
  );
}
```

{{ EmbedLiveSample('The path function', 230, 230) }}

### Kurvenlinien

Mit `path()` sind wir nicht auf gerade Linien beschränkt. In diesem Beispiel verwenden wir die `path()`-Funktion, um ein Herz zu erstellen:

```html hidden
<div class="heart"></div>
```

```css
.heart {
  width: 200px;
  height: 200px;
  background: linear-gradient(rebeccapurple, magenta) blue;
  clip-path: path(
    "M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z"
  );
}
```

{{ EmbedLiveSample('Curved lines', 230, 230) }}

### SVG als Quelle

Anstatt einen SVG-{{svgattr("d")}}-Attributstring als `path()`-Funktionsargument zu übergeben, kann der Wert der `clip-path`-Eigenschaft direkt das SVG-{{svgElement("clipPath")}}-Element referenzieren.

```html
<div class="heart"></div>
<svg height="0" width="0">
  <clipPath id="heart">
    <path
      d="M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z" />
  </clipPath>
</svg>
```

Die `id` des `<clipPath>` ist der Parameter der {{cssxref("url_function", "url()")}}-Funktion.

```css
.heart {
  width: 200px;
  height: 200px;
  background: linear-gradient(rebeccapurple, magenta) blue;
  clip-path: url("#heart");
}
```

{{ EmbedLiveSample('svg as source', 230, 230) }}

### Formfunktion

Die SVG-Pfadsyntax ist nicht die intuitivste. Aus diesem Grund bietet CSS auch eine `shape()`-Funktion. Die `shape()`-Funktion nimmt ebenfalls Pfadzeichnenanweisung, jedoch mit einer Syntax, die für Menschen lesbarer ist. Wir können das Herz mit deklarativerem CSS nachbilden:

```css
.heart {
  clip-path: shape(
    from 20px 70px,
    arc to 100px 70px of 1% cw,
    arc to 180px 70px of 1% cw,
    curve to 100px 190px with 180px 130px,
    curve to 20px 70px with 20px 130px
  );
}
```

Die `shape()`-Funktion ist robuster, da sie CSS-Werte und Einheiten akzeptiert (`path()` ist auf Koordinaten beschränkt), einschließlich der Verwendung von CSS-Mathematikfunktionen wie `calc()`. Durch die Verwendung von Variablen können wir Formen (und Boxen) in vielen verschiedenen Größen erstellen:

```css
:root {
  --m: 10;
}
.heart {
  width: calc(20px * var(--m));
  height: calc(20px * var(--m));
  display: inline-block;
  background: linear-gradient(rebeccapurple, magenta) blue;
  clip-path: border-box
    shape(
      from calc(2px * var(--m)) calc(7px * var(--m)),
      arc to calc(10px * var(--m)) calc(7px * var(--m)) of 1% cw,
      arc to calc(18px * var(--m)) calc(7px * var(--m)) of 1% cw,
      curve to calc(10px * var(--m)) calc(19px * var(--m)) with
        calc(18px * var(--m)) calc(13px * var(--m)),
      curve to calc(2px * var(--m)) calc(7px * var(--m)) with
        calc(2px * var(--m)) calc(13px * var(--m))
    );
}
.small {
  --m: 4;
}

.medium {
  --m: 8;
}

.large {
  --m: 12;
}
```

```html
<div class="heart small"></div>
<div class="heart medium"></div>
<div class="heart large"></div>
```

{{ EmbedLiveSample('shape function', 230, 270) }}

### Text um Ihre zugeschnittenen Formen herumfließen lassen

Zugeschnittene Elemente sind immer noch rechteckige Boxen. Zuschneiden bedeutet, dass Ihr Element nicht wie eine Box aussieht; es ist jedoch weiterhin eine Box. Um Inline-Inhalte um die nicht rechteckigen (oder rechteckigen) von Ihnen definierten Formen herumfließen zu lassen, verwenden Sie die {{cssxref("shape-outside")}}-Eigenschaft. Standardmäßig fließt Inline-Inhalt um seine Randbox; `shape-outside` bietet eine Möglichkeit, dieses Umfließen anzupassen, sodass es möglich ist, Text um die von Ihnen zugeschnittenen Elemente herumfließen zu lassen, indem der zuschneidend Pfad repliziert wird, anstelle des rechteckigen Box des Elements.

Der Inhalt umfasst zwei Elemente, die zugeschnitten werden sollen, und den Inhalt, der um sie herum geformt wird.

```html
<div class="leftTriangle"></div>
<div class="rightTriangle"></div>
<blockquote>
  <q>
    I've learned that people will forget what you said, people will forget what
    you did, but people will never forget how you made them feel.</q
  >
  <cite>&mdash; Maya Angelou</cite>
</blockquote>
```

```css hidden
:root {
  --m: 10;
  font-size: calc(3px * var(--m));
}
div {
  width: calc(0.75em * var(--m));
  height: calc(0.75em * var(--m));
  display: inline-block;
  background: linear-gradient(rebeccapurple, magenta) blue;
}
cite {
  display: block;
  text-align: right;
}
```

Zusätzlich zur Anwendung der gleichen Form sowohl für die `clip-shape`- als auch für die `shape-outside`-Eigenschaften muss das zugeschnittene Element flottiert werden, damit sich das zugeschnittene Element in derselben Zeile wie der Inhalt befindet.

```css
.leftTriangle {
  clip-path: polygon(0 0, 0 100%, 100% 0);
  shape-outside: polygon(0 0, 0 100%, 100% 0);
  float: left;
}
.rightTriangle {
  clip-path: polygon(100% 0, 100% 100%, 0 100%);
  shape-outside: polygon(100% 0, 100% 100%, 0 100%);
  float: right;
}
```

{{ EmbedLiveSample('Wrapping text around your clipped shapes', 230, 290) }}

## Siehe auch

- {{cssxref("basic-shape")}}
- {{cssxref("shape-image-threshold")}}
- {{cssxref("shape-margin")}}
- [Überblick über Formen](/de/docs/Web/CSS/CSS_shapes/Overview_of_shapes)
- [Einführung in CSS-Maskierung](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS- `mask`-Eigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties)
- [Deklarieren mehrerer Masken](/de/docs/Web/CSS/CSS_masking/Multiple_masks)
- [CSS-Maskierungsmodul](/de/docs/Web/CSS/CSS_masking)
- [CSS-Formenmodul](/de/docs/Web/CSS/CSS_shapes)
