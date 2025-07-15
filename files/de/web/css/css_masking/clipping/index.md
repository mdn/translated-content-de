---
title: Einführung in das CSS-Clipping
slug: Web/CSS/CSS_masking/Clipping
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

CSS-Clipping ermöglicht es Ihnen, sichtbare Teile eines Elements zu definieren, während andere Teile ausgeblendet werden, indem der Inhalt innerhalb einer bestimmten Form oder eines bestimmten Bereichs effektiv "beschnitten" wird. Mit Clipping sind Elemente nicht auf die Darstellung als Rechtecke beschränkt und können in visuell ansprechende Weisen gestaltet werden. Dieser Leitfaden untersucht die {{cssxref("clip-path")}}-Eigenschaft zusammen mit einigen Beispielen.

## CSS-Clipping

Clipping ist eine CSS-Technik, die verwendet wird, um Abschnitte eines Elements zu clippen (auszublenden), wobei nur der Bereich des Elements angezeigt wird, der sich innerhalb eines vom Entwickler definierten Pfads befindet. Clips-Bereiche werden durch Vektorpfade erstellt; alles im Pfad ist sichtbar, während Bereiche außerhalb des Pfads ausgeblendet werden.

### Die `clip-path`-Eigenschaft

Die `clip-path`-Eigenschaft wendet Clipping an. Der Wert, den sie akzeptiert, ist ein Vektorpfad, der den Bereich des Elements definiert, der sichtbar bleiben soll. Der Pfad kann unter Verwendung von Boxen, einem Verweis auf ein [SVG `<clipPath>`](#svg_als_quelle) oder CSS [Formen und Pfaden](#formfunktion) definiert werden. Im folgenden Beispiel clippen wir ein blaues Quadrat-{{htmlelement("div")}}, indem wir mit der {{cssxref("basic-shape/polygon","polygon()")}}-Funktion einen Diamanten als Clipping-Pfad erstellen:

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

Mit der `clip-path`-Eigenschaft können Sie komplexe Formen erstellen, indem Sie ein Element zu einem `<basic-shape>` oder zu einer [SVG-Quelle](#svg_als_quelle) clippen. Sie können [`clip-path`-Formen animieren und Übergänge erstellen](#animation), wenn die deklarierten Zustände die gleiche Anzahl von Vektor-Punkten haben.

### Werte der `clip-path`-Eigenschaft

Um ein Element visuell zu clippen, wird die `clip-path`-Eigenschaft auf entweder einen [`<geometry-box>`](/de/docs/Web/CSS/clip-path#geometry-box), eine {{cssxref("url_value", "url")}} zu einer {{svgElement("clipPath")}}-Clip-Quelle oder eine mit der [Formfunktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#shape_functions) erstellte {{cssxref("basic-shape")}} gesetzt.

### Geometrie-Boxen

Die `clip-path`-Eigenschaft blendet alles außerhalb des geclippten Bereichs aus. Das einfachste Clipping erfolgt über eine Geometrie-Box. Sie können ein Element basierend auf seinem Rand, seiner Umrandung, seiner Polsterung oder seinem Inhalt clippen. Die Effekte dieser visuellen Box-Werte können über andere CSS-Eigenschaften erreicht werden, wie z.B. das Setzen der {{cssxref("border-color")}} auf transparent und der {{cssxref("background-origin")}} auf die gewünschte visuelle Box. Wir betrachten diese Werte hauptsächlich, weil diese Werte in Verbindung mit den Formfunktionen verwendet werden, auf die wir später eingehen werden, um den Ursprung des Form-Clipping-Pfads zu definieren.

[Das Verständnis der Referenz-Box](/de/docs/Web/CSS/CSS_shapes/Basic_shapes#the_reference_box), die von CSS-Formen verwendet wird, ist wichtig, wenn Sie `clip-path` verwenden, insbesondere mit [Grundformen](#clipping_mit_grundformen), da die Referenz-Box das Koordinatensystem einer Form definiert.

#### Werte der visuellen Box

Dieses Live-Beispiel demonstriert die verschiedenen visuellen Box-Werte der `clip-path`-Eigenschaft auf einem Element, während es mit der CSS-`background-origin`-Eigenschaft verglichen wird. Wir haben einen {{cssxref("border")}}, eine {{cssxref("background-color")}}, ein {{cssxref("background-image")}} und {{cssxref("padding")}} auf das {{htmlelement("blockquote")}} angewendet. Wählen Sie eine Optionsschaltfläche aus, um den `--value` auf einen anderen `<geometry-box>`-Wert zu aktualisieren, der die aufgelösten Werte von {{cssxref("background-origin")}} und {{cssxref("clip-path")}} aktualisiert.

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

Wenn eine `<geometry>`-Box in Kombination mit einer `<basic-shape>` angegeben wird, definiert der Wert die Referenz-Box für die Grundform. Wenn sie alleine angegeben wird, bewirkt sie, dass die Kanten der angegebenen Box, einschließlich jeder Eckenformung (wie z.B. einem `border-radius`), den Clipping-Pfad bilden.

#### Formursprung

Das vorherige Beispiel könnte Sie glauben lassen, dass die `<geometry-box>`-Werte nutzlos sind, da Sie stattdessen `background-origin` verwenden können. Und das können Sie auch. Aber beim Clipping mit Grundformen definiert die `<geometry-box>`, wenn sie zusammen mit einer `<basic-shape>` als `clip-path`-Wert einbezogen wird, die Referenz-Box oder den Ursprung dieser Form. Wir können die beiden vorherigen Beispiele kombinieren, um dies zu demonstrieren.

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

Für ein weiteres Beispiel siehe [`clip-path`-Formen und Geometrie-Boxen](/de/docs/Web/CSS/clip-path#shapes_and_geometry_boxes).

Selbst Werte wie `clip-path: margin-box` können nützlich sein. Zusätzlich zu kreativen visuellen Elementen, die durch das Platzieren der Clip-Pfad-Kante an der Randbox-Kante erstellt werden, führt jeder berechnete Wert für `clip-path`, außer `none`, zur Erstellung eines neuen [Stapelkontexts](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context), genauso wie CSS {{cssxref("opacity")}} für Werte, die nicht `1` sind.

## Clipping mit Grundformen

Die Unterstützung der `clip-path`-Eigenschaft für {{cssxref("basic-shape")}}-Werte bietet eine leistungsstarke Möglichkeit, Elemente zu formen. Die verschiedenen Formfunktionen ermöglichen die Definition präziser Clipping-Bereiche, wobei Elemente effektiv in einzigartige Formen modelliert werden. Die Grundformenfunktionen umfassen:

- {{cssxref("basic-shape/circle","circle()")}}
- {{cssxref("basic-shape/ellipse","ellipse()")}}
- {{cssxref("basic-shape/inset","inset()")}}
- {{cssxref("basic-shape/path","path()")}}
- {{cssxref("basic-shape/polygon","polygon()")}}
- {{cssxref("basic-shape/rect","rect()")}}
- {{cssxref("basic-shape/shape","shape()")}}
- {{cssxref("basic-shape/xywh","xywh()")}}

Die Größe und Position dieser Formen werden durch den `<geometry-box>`-Wert definiert, der standardmäßig die border-box als Referenz-Box verwendet, wenn der `clip-path`-Wert eine Form ohne den `<geometry-box>`-Komponentenwert enthält.

Einige dieser Funktionen scheinen nur grundlegende vordefinierte Clipping-Optionen zu bieten. Sie können den Eindruck erwecken, Effekte zu replizieren, die auch mit {{cssxref("border-radius")}} erstellt werden können, aber wenn Sie die `border-radius`-Eigenschaft im vorherigen Beispiel [umgeschaltet haben](#werte_der_visuellen_box), haben Sie möglicherweise die Kraft des CSS-Clippings bemerkt. Formen bieten noch mehr Kontrolle. Zum Beispiel ermöglicht `inset()` das Clipping eines Rechtecks mit präzisen Rändern. Die wahre Kraft und Kontrolle bietet `path()`, `shape()` und sogar `polygon()`, was die Erstellung benutzerdefinierter mehrpunktförmiger Formen ermöglicht.

### Erstellen von Polygonen

Mit `polygon()`, durch Definition von Koordinatenpaaren, von denen jedes ein Eckpunkt der Form darstellt, können Sie komplexe Formen wie Sterne oder abstrakte Figuren erstellen. Die Koordinaten definieren Vektorpunkte, die durch gerade Linien verbunden sind.

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

Geclipte Formen können animiert und übergangen werden, indem die gleiche Anzahl von Vektor-Punkten für die verschiedenen Zustände deklariert wird.

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

### Gebogene Linien

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

Anstatt eine SVG-{{svgattr("d")}}-Attributzeichenfolge als Argument der `path()`-Funktion zu übergeben, kann der Wert der `clip-path`-Eigenschaft direkt das SVG-{{svgElement("clipPath")}}-Element referenzieren.

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
  clip-path: url(#heart);
}
```

{{ EmbedLiveSample('svg as source', 230, 230) }}

### Formfunktion

Die SVG-Pfadsyntax ist nicht die intuitivste. Aus diesem Grund bietet CSS auch eine `shape()`-Funktion. Die `shape()`-Funktion nimmt ebenfalls Pfadzeichnungsanweisungen an, jedoch mit einer Syntax, die menschenlesbarer ist. Wir können das Herz mit deklarativerem CSS nachbilden:

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

Die `shape()`-Funktion ist robuster, da sie CSS-Werte und -Einheiten akzeptiert (`path()` ist auf Koordinaten beschränkt), einschließlich der Verwendung von CSS-Mathematischen Funktionen wie `calc()`. Durch die Verwendung von Variablen können wir Formen (und Boxen) in vielen verschiedenen Größen erstellen:

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

### Um Text um Ihre geclipten Formen zu wickeln

Geclipte Elemente sind immer noch rechteckige Boxen. Clipping bedeutet, dass Ihr Element nicht wie eine Box aussieht; es ist jedoch weiterhin eine Box. Um Inline-Inhalte um die von Ihnen definierten nicht-rechteckigen (oder rechteckigen) Formen zu wickeln, verwenden Sie die {{cssxref("shape-outside")}}-Eigenschaft. Standardmäßig wickeln sich Inline-Inhalte um ihre Rand-Box; `shape-outside` bietet eine Möglichkeit, dieses Wickeln zu individualisieren, was es möglich macht, Text um die von Ihnen geclipten Elemente herum zu wickeln und dem geclipten Pfad, den Sie repliziert haben, zu folgen, anstatt der rechteckigen Box des Elements.

Der Inhalt umfasst zwei zu clippenstete Elemente und den Inhalt, der um sie herum geformt wird.

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

Zusätzlich zur Anwendung derselben Form sowohl für die `clip-shape`- als auch für die `shape-outside`-Eigenschaften muss das geclipte Element gefloatet werden, damit das geclipte Element auf derselben Linie wie der Inhalt ist.

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
- [Übersicht über Formen](/de/docs/Web/CSS/CSS_shapes/Overview_of_shapes)
- [Einführung in das CSS-Masking](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS `mask`-Eigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties)
- [Deklarieren mehrerer Masken](/de/docs/Web/CSS/CSS_masking/Multiple_masks)
- [CSS-Masking](/de/docs/Web/CSS/CSS_masking) Modul
- [CSS-Formen](/de/docs/Web/CSS/CSS_shapes) Modul
