---
title: Einführung in das CSS-Clipping
slug: Web/CSS/CSS_masking/Clipping
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

CSS-Clipping ermöglicht es Ihnen, sichtbare Teile eines Elements zu definieren, während andere Teile verborgen werden, indem der Inhalt effektiv innerhalb einer bestimmten Form oder eines bestimmten Bereichs "geclippt" wird. Mit Clipping sind Elemente nicht darauf beschränkt, als Rechtecke gerendert zu werden, und können auf visuell ansprechende Weise gestaltet werden. Dieser Leitfaden erkundet die {{cssxref("clip-path")}}-Eigenschaft zusammen mit einigen Beispielen.

## CSS-Clipping

Clipping ist eine CSS-Technik, um Abschnitte eines Elements zu clippen (verbergen) und nur den Bereich des Elements anzuzeigen, der innerhalb eines vom Entwickler definierten Pfads liegt. Clips-Bereiche werden durch Vektorpfade erstellt; alles innerhalb des Pfads ist sichtbar, während Bereiche außerhalb des Pfads verborgen sind.

### Die `clip-path`-Eigenschaft

Die `clip-path`-Eigenschaft wendet das Clipping an. Der Wert, den es akzeptiert, ist ein Vektorpfad, der den sichtbaren Bereich des Elements definiert. Der Pfad kann mithilfe von Boxen, einem Verweis auf ein [SVG `<clipPath>`](#svg_als_quelle) oder CSS [Formen und Pfade](#form-funktion) definiert werden. Im folgenden Beispiel clippen wir ein blaues Quadrat-{{htmlelement("div")}}, um ein Rhombus zu erstellen, wobei wir die {{cssxref("basic-shape/polygon","polygon()")}}-Funktion als Clippingpfad verwenden:

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

Mit der `clip-path`-Eigenschaft können Sie komplexe Formen erzeugen, indem Sie ein Element auf eine `<basic-shape>` oder auf eine [SVG-Quelle](#svg_als_quelle) clippen. Sie können [`clip-path`-Formen animieren und überblenden](#animation), wenn die deklarierten Zustände die gleiche Anzahl von Vektorpunkten haben.

### Werte der `clip-path`-Eigenschaft

Um ein Element visuell zu clippen, wird die `clip-path`-Eigenschaft entweder auf eine [`<geometry-box>`](/de/docs/Web/CSS/Reference/Properties/clip-path#geometry-box), eine {{cssxref("url_value", "url")}} zu einer {{svgElement("clipPath")}}-Clipquelle oder eine {{cssxref("basic-shape")}}, die mit [Formenfunktion](/de/docs/Web/CSS/Reference/Values/Functions#shape_functions) erstellt wurde, gesetzt.

### Geometrie-Boxen

Die `clip-path`-Eigenschaft verbirgt alles außerhalb des geclippten Bereichs. Das einfachste Clipping erfolgt über eine Geometrie-Box. Sie können ein Element basierend auf seinem Rand, seiner Grenze, seinem Polster oder Inhalt clippen. Die Effekte dieser visuellen Boxenwerte können über andere CSS-Eigenschaften erzielt werden, wie das Setzen der {{cssxref("border-color")}} auf transparent und des {{cssxref("background-origin")}} auf die gewünschte visuelle Box. Wir betrachten diese Werte vor allem, weil diese Werte in Verbindung mit den Form-Funktionen verwendet werden, die wir später betrachten werden, um den Ursprung des Form-Clippingpfads zu definieren.

[Das Verständnis der Referenz-Box](/de/docs/Web/CSS/CSS_shapes/Basic_shapes#the_reference_box), die von CSS-Formen verwendet wird, ist wichtig bei der Verwendung von `clip-path`, insbesondere mit [einfachen Formen](#clipping_auf_einfache_formen), da die Referenz-Box das Koordinatensystem einer Form definiert.

#### Visuelle Box-Werte

Dieses Live-Beispiel demonstriert die verschiedenen visuellen Box-Werte der `clip-path`-Eigenschaft auf einem Element und vergleicht es mit der CSS-`background-origin`-Eigenschaft. Wir haben {{cssxref("border")}}, {{cssxref("background-color")}}, ein {{cssxref("background-image")}} und {{cssxref("padding")}} auf das {{htmlelement("blockquote")}} angewendet. Wählen Sie einen Radio-Button, um das `--value` zu einem anderen `<geometry-box>`-Wert zu aktualisieren, wodurch die aufgelösten Werte von {{cssxref("background-origin")}} und {{cssxref("clip-path")}} aktualisiert werden.

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

Wenn eine `<geometry>`-Box in Kombination mit einer `<basic-shape>` angegeben wird, definiert der Wert die Referenz-Box für die einfache Form. Wenn allein angegeben, verursachen die Kanten der angegebenen Box, einschließlich jeglicher Eckformung (wie eine `border-radius`), den Clippingpfad.

#### Form-Ursprung

Das vorherige Beispiel mag den Anschein erwecken, dass die `<geometry-box>`-Werte nutzlos sind, da Sie stattdessen `background-origin` verwenden können. Und das können Sie. Aber beim Clipping mit einfachen Formen definiert die `<geometry-box>`, wenn sie zusammen mit einer `<basic-shape>` als `clip-path`-Wert enthalten ist, die Referenz-Box für oder den Ursprung dieser Form. Wir können die beiden vorherigen Beispiele kombinieren, um dies zu demonstrieren.

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

Ein weiteres Beispiel finden Sie bei [`clip-path`-Formen und Geometrie-Boxen](/de/docs/Web/CSS/Reference/Properties/clip-path#shapes_and_geometry_boxes).

Selbst Werte wie `clip-path: margin-box` können nützlich sein. Zusätzlich zu kreativen visuellen Effekten, die durch das Platzieren des Clip-Path-Rands an der Margin-Box-Kante erzeugt werden, führt jeder berechnete Wert für `clip-path`, außer `none`, zur Erstellung eines neuen [Stacking-Kontexts](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context) auf die gleiche Weise wie CSS {{cssxref("opacity")}} für Werte außer `1`.

## Clipping auf einfache Formen

Die Unterstützung der `clip-path`-Eigenschaft für {{cssxref("basic-shape")}}-Werte bietet eine leistungsstarke Möglichkeit, Elemente zu formen. Die verschiedenen Formenfunktionen ermöglichen das Definieren präziser Clipping-Bereiche und formen Elemente effektiv in einzigartige Formen. Die grundlegenden Formenfunktionen umfassen:

- {{cssxref("basic-shape/circle","circle()")}}
- {{cssxref("basic-shape/ellipse","ellipse()")}}
- {{cssxref("basic-shape/inset","inset()")}}
- {{cssxref("basic-shape/path","path()")}}
- {{cssxref("basic-shape/polygon","polygon()")}}
- {{cssxref("basic-shape/rect","rect()")}}
- {{cssxref("basic-shape/shape","shape()")}}
- {{cssxref("basic-shape/xywh","xywh()")}}

Die Größe und Position dieser Formen wird durch den `<geometry-box>`-Wert definiert, wobei standardmäßig die border-box als Referenz-Box verwendet wird, wenn der `clip-path`-Wert eine Form ohne `<geometry-box>`-Komponentenwert einschließt.

Einige dieser Funktionen scheinen nur grundlegende vordefinierte Clipping-Optionen bereitzustellen. Sie mögen den Anschein erwecken, Effekte zu replizieren, die Sie mit {{cssxref("border-radius")}} erstellen können, aber wenn Sie die [toggled der `border-radius`](#visuelle_box-werte) Eigenschaft im vorhergehenden Beispiel, haben Sie möglicherweise die Leistungsfähigkeit des CSS-Clippings bemerkt. Formen bieten noch mehr Kontrolle. Zum Beispiel ermöglicht `inset()`, ein Rechteck mit präzisen Rändern zu clippen. Die eigentliche Kraft und Kontrolle kommt mit `path()`, `shape()` und sogar `polygon()`, die benutzerdefinierte Mehrpunktformen ermöglichen.

### Erstellen von Polygonen

Mit `polygon()`, indem Sie Koordinatenpaare definieren, von denen jedes einen Scheitelpunkt der Form darstellt. können Sie komplexe Formen wie Sterne oder abstrakte Figuren erstellen. Die Koordinaten definieren Vektorpunkte, die durch gerade Linien verbunden sind.

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

Geclipte Formen können animiert und überblendet werden, indem für die verschiedenen Zustände die gleiche Anzahl von Vektorpunkten erklärt wird.

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

Der Stern aus dem vorherigen Beispiel kann mit `path()` erstellt werden:

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

Anstatt einen SVG-{{svgattr("d")}}-Attributstring als Argument der `path()`-Funktion zu übergeben, kann der Wert der `clip-path`-Eigenschaft direkt auf das SVG-{{svgElement("clipPath")}}-Element verweisen.

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

### Form-Funktion

Die SVG-Pfadsyntax ist nicht die intuitivste. Aus diesem Grund bietet CSS auch eine `shape()`-Funktion. Die `shape()`-Funktion übernimmt ebenfalls Pfad-Zeichnungsanweisungen, jedoch mit einer Syntax, die lesbarer ist. Wir können das Herz mit deklarativerem CSS nachbilden:

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

Die `shape()`-Funktion ist robuster, da sie CSS-Werte und -Einheiten (im Gegensatz zu `path()`, das auf Koordinaten beschränkt ist) akzeptiert, einschließlich der Verwendung von CSS-Mathematikfunktionen wie `calc()`. Durch die Verwendung von Variablen können wir Formen (und Boxen) in vielen verschiedenen Größen erstellen:

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

### Text um Ihre geclippten Formen fließen lassen

Geclipte Elemente sind immer noch rechteckige Boxen. Clipping bedeutet, dass Ihr Element nicht wie eine Box aussieht, aber es ist immer noch eine Box. Um Inline-Inhalte um die von Ihnen definierten nicht-rechteckigen (oder rechteckigen) Formen zu fließen, verwenden Sie die {{cssxref("shape-outside")}}-Eigenschaft. Standardmäßig fließen Inline-Inhalte um ihre Rand-Box; `shape-outside` bietet eine Möglichkeit, dieses Umfließen anzupassen, sodass der Text um die von Ihnen geclippten Elemente fließt, dem von Ihnen replizierten Clip-Pfad folgend, anstatt der rechteckigen Box des Elements.

Der Inhalt umfasst zwei zu clipende Elemente und den Inhalt, der um sie herum geformt wird.

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

Zusätzlich zur Anwendung der gleichen Form sowohl für die `clip-shape`- als auch die `shape-outside`-Eigenschaften muss das geclipte Element gefloatet werden, damit das geclipte Element auf derselben Linie wie der Inhalt ist.

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
- [Einführung in CSS-Masking](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS-`mask`-Eigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties)
- [Deklarieren mehrerer Masken](/de/docs/Web/CSS/CSS_masking/Multiple_masks)
- [CSS-Masking](/de/docs/Web/CSS/CSS_masking) Modul
- [CSS-Formen](/de/docs/Web/CSS/CSS_shapes) Modul
