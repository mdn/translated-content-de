---
title: Einführung in CSS-Clipping
slug: Web/CSS/CSS_masking/Clipping
l10n:
  sourceCommit: c99b4f2d0ea81c0e8822a749d218015c75995b5b
---

{{CSSRef}}

CSS-Clipping ermöglicht es Ihnen, sichtbare Bereiche eines Elements zu definieren, während andere Teile verborgen werden. Dies bedeutet, dass der Inhalt eines Elements innerhalb einer bestimmten Form oder eines bestimmten Bereichs "beschnitten" wird. Mit Clipping sind Elemente nicht darauf beschränkt, als Rechtecke dargestellt zu werden, sondern können auf visuell ansprechende Weise gestaltet werden. Dieser Leitfaden untersucht die {{cssxref("clip-path")}}-Eigenschaft zusammen mit einigen Beispielen.

## CSS-Clipping

Clipping ist eine CSS-Technik, die verwendet wird, um Abschnitte eines Elements zu verdecken, wobei nur der Teil des Elements angezeigt wird, der sich innerhalb eines vom Entwickler definierten Pfades befindet. Clip-Bereiche werden durch Vektorpfade erstellt; alles innerhalb des Pfades ist sichtbar, während Bereiche außerhalb des Pfades ausgeblendet werden.

### Die `clip-path`-Eigenschaft

Die `clip-path`-Eigenschaft ermöglicht das Clipping. Der Wert, den sie akzeptiert, ist ein Vektorpfad, der den sichtbaren Bereich des Elements definiert. Der Pfad kann durch Boxen, einen Verweis auf ein [SVG `<clipPath>`](#svg_als_quelle) oder CSS [Formen und Pfade](#formfunktion) definiert werden. Im folgenden Beispiel schneiden wir ein blaues Quadrat-{{htmlelement("div")}}, um ein Diamant zu erstellen, indem wir die {{cssxref("basic-shape/polygon","polygon()")}}-Funktion als Clipping-Pfad verwenden:

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

Mit der `clip-path`-Eigenschaft können Sie komplexe Formen erstellen, indem Sie ein Element auf eine `<basic-shape>` oder eine [SVG-Quelle](#svg_als_quelle) zuschneiden. Sie können [animieren und transitionen Sie `clip-path`-Formen](#animation), wenn die deklarierten Zustände die gleiche Anzahl von Vektorpunkten haben.

### Werte der `clip-path`-Eigenschaft

Um ein Element optisch zu schneiden, wird die `clip-path`-Eigenschaft auf entweder eine {{cssxref("geometry-box")}}, eine {{cssxref("url_value", "url")}} zu einer {{svgElement("clipPath")}}-Clip-Quelle oder eine {{cssxref("basic-shape")}} erstellt mit [Formfunktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#shape_functions) gesetzt.

### Geometrie-Boxen

Die `clip-path`-Eigenschaft verbirgt alles außerhalb des geschnittenen Bereichs. Das grundlegendste Clipping erfolgt über eine Geometrie-Box. Sie können ein Element basierend auf seinem Rand, Rahmen, Innenabstand oder Inhalt schneiden. Die Effekte dieser visuellen Boxwerte können durch andere CSS-Eigenschaften erzielt werden, z. B. wenn die {{cssxref("border-color")}} auf transparent gesetzt wird und die {{cssxref("background-origin")}} auf die gewünschte visuelle Box. Wir betrachten diese Werte hauptsächlich, weil diese Werte in Verbindung mit den Formfunktionen verwendet werden, auf die wir später eingehen werden, um den Ursprung des Form-Clippfads zu definieren.

[Verständnis der Referenzbox](/de/docs/Web/CSS/CSS_shapes/Basic_shapes#the_reference_box), die von CSS-Formen verwendet wird, ist wichtig bei der Verwendung von `clip-path`, insbesondere mit [Grundformen](#clipping_auf_grundformen), da die Referenzbox das Koordinatensystem einer Form definiert.

#### Visuelle Boxwerte

Dieses Live-Beispiel zeigt die unterschiedlichen visuellen Boxwerte der `clip-path`-Eigenschaft auf einem Element, während es mit der CSS-`background-origin`-Eigenschaft verglichen wird. Wir haben einen {{cssxref("border")}}, eine {{cssxref("background-color")}}, ein {{cssxref("background-image")}} und einen {{cssxref("padding")}} auf das {{htmlelement("blockquote")}} angewendet. Wählen Sie eine Optionsschaltfläche aus, um den Wert von `--value` auf einen anderen `<geometry-box>`-Wert zu aktualisieren, was die aufgelösten Werte von {{cssxref("background-origin")}} und {{cssxref("clip-path")}} aktualisiert.

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

Wenn eine `<geometry>`-Box in Kombination mit einer `<basic-shape>` angegeben wird, definiert der Wert die Referenzbox für die Grundform. Wenn sie alleine angegeben wird, bewirkt sie, dass die Kanten der angegebenen Box, einschließlich jeder Eckformgebung (wie ein `border-radius`), der Clippfad sind.

#### Form-Ursprung

Das vorherige Beispiel lässt Sie möglicherweise denken, dass die `<geometry-box>`-Werte nutzlos sind, da Sie stattdessen `background-origin` verwenden können. Und das können Sie. Aber beim Clipping mit Grundformen definiert die `<geometry-box>`, wenn sie zusammen mit einer `<basic-shape>` als `clip-path`-Wert einbezogen wird, die Referenzbox für oder den Ursprung dieser Form. Wir können die beiden vorherigen Beispiele kombinieren, um dies zu demonstrieren.

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

Selbst Werte wie `clip-path: margin-box` können nützlich sein. Zusätzlich zu kreativen visuellen Effekten, die durch das Platzieren des Clippfades an der Randkante der Margin-Box erreicht werden, führt jeder berechnete Wert für `clip-path`, der nicht `none` ist, zur Erstellung eines neuen [Stacking-Kontextes](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context), so wie CSS {{cssxref("opacity")}} für andere als den Wert `1` tut.

## Clipping auf Grundformen

Die Unterstützung der {{cssxref("basic-shape")}}-Werte durch die `clip-path`-Eigenschaft bietet eine mächtige Möglichkeit, Elemente zu formen. Die verschiedenen Formfunktionen ermöglichen die Definition präziser Clipping-Bereiche und formen Elemente effektiv in einzigartige Formen. Die Grundformfunktionen beinhalten:

- {{cssxref("basic-shape/circle","circle()")}}
- {{cssxref("basic-shape/ellipse","ellipse()")}}
- {{cssxref("basic-shape/inset","inset()")}}
- {{cssxref("basic-shape/path","path()")}}
- {{cssxref("basic-shape/polygon","polygon()")}}
- {{cssxref("basic-shape/rect","rect()")}}
- {{cssxref("basic-shape/shape","shape()")}}
- {{cssxref("basic-shape/xywh","xywh()")}}

Die Größe und Position dieser Formen werden durch den `<geometry-box>`-Wert definiert, welcher standardmäßig auf border-box gesetzt wird, wenn der `clip-path`-Wert eine Form ohne den `<geometry-box>`-Komponentenwert enthält.

Einige dieser Funktionen scheinen nur grundlegende vordefinierte Clipping-Optionen bereitzustellen. Sie können den Anschein erwecken, als würden sie Effekte replizieren, die Sie mit {{cssxref("border-radius")}} erzielen können, aber wenn Sie die `border-radius`-Eigenschaft im vorhergehenden Beispiel getoggelt haben, könnten Sie die Macht des CSS-Clippings bemerkt haben. Formen bieten noch mehr Kontrolle. Zum Beispiel ermöglicht `inset()` das Clipping eines Rechtecks mit präzisen Rändern. Die wahre Stärke und Kontrolle kommt mit `path()`, `shape()` und sogar `polygon()`, die maßgeschneiderte Mehrpunktformen ermöglichen.

### Erstellen von Polygonen

Mit `polygon()`, durch Definition von Koordinatenpaaren, von denen jedes einen Scheitelpunkt der Form darstellt, können Sie komplexe Formen wie Sterne oder abstrakte Figuren erstellen. Die Koordinaten definieren Vektorpunkte, die durch gerade Linien verbunden sind.

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

Geschnittene Formen können animiert und durch Angabe der gleichen Anzahl von Vektorpunkten für die unterschiedlichen Zustände transformiert werden.

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

Anstatt einen SVG-{{svgattr("d")}}-Attribut-String als Argument der `path()`-Funktion zu übergeben, kann der Wert der `clip-path`-Eigenschaft direkt auf das SVG-{{svgElement("clipPath")}}-Element verweisen.

```html
<div class="heart"></div>
<svg height="0" width="0">
  <clipPath id="heart">
    <path d="M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z">
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

Die SVG-Pfadsyntax ist nicht die intuitivste. Aus diesem Grund bietet CSS auch eine `shape()`-Funktion. Die `shape()`-Funktion akzeptiert ebenfalls Pfadzeichnungsanweisungen, jedoch mit einer Syntax, die lesbarer ist. Wir können das Herz mit deklarativerem CSS nachbilden:

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

Die `shape()`-Funktion ist robuster, da sie CSS-Werte und -Einheiten akzeptiert (`path()` ist auf Koordinaten beschränkt), einschließlich der Verwendung von CSS-Mathematikfunktionen wie `calc()`. Durch die Verwendung von Variablen können wir Formen (und Boxen) in vielen verschiedenen Größen erstellen:

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

### Text um Ihre geschnittenen Formen herum wickeln

Geschnittene Elemente sind immer noch rechteckige Boxen. Clipping bedeutet, dass Ihr Element nicht wie eine Box aussieht; es ist aber immer noch eine Box. Um Inline-Inhalte um die nicht-rechteckigen (oder rechteckigen) Formen zu wickeln, die Sie definieren, verwenden Sie die {{cssxref("shape-outside")}}-Eigenschaft. Standardmäßig wickelt sich der Inline-Inhalt um seine Margin-Box; `shape-outside` bietet eine Möglichkeit, dieses Wickeln anzupassen, sodass es möglich ist, Text um die von Ihnen geschnittenen Elemente zu wickeln, unter Berücksichtigung des Clippfades, den Sie repliziert haben, anstatt der rechteckigen Box des Elements.

Der Inhalt umfasst zwei Elemente, die geschnitten werden sollen und den Inhalt, der um sie herum geformt wird.

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

Zusätzlich zur Anwendung derselben Form sowohl für die `clip-shape`- als auch für die `shape-outside`-Eigenschaften muss das geschnittene Element gefloatet werden, sodass das geschnittene Element in derselben Zeile wie der Inhalt ist.

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
- [Einführung in CSS-Masking](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS-Masking](/de/docs/Web/CSS/CSS_masking) Modul
- [CSS-Formen](/de/docs/Web/CSS/CSS_shapes) Modul
