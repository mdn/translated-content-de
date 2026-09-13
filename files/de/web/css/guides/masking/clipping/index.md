---
title: Einführung in CSS Clipping
short-title: Clipping
slug: Web/CSS/Guides/Masking/Clipping
l10n:
  sourceCommit: db443a6062d0e858a62af2f9a3a7558335ffd2dd
---

CSS Clipping ermöglicht es Ihnen, sichtbare Bereiche eines Elements zu definieren und andere Teile zu verbergen, wodurch der Inhalt effektiv innerhalb einer bestimmten Form oder Fläche "beschnitten" wird. Mit Clipping sind Elemente nicht nur auf rechteckige Darstellungen beschränkt und können auf visuell ansprechende Weise gestaltet werden. Dieser Leitfaden untersucht die {{cssxref("clip-path")}} Eigenschaft zusammen mit einigen Beispielen.

## CSS Clipping

Clipping ist eine CSS-Technik, bei der Abschnitte eines Elements ausgeblendet werden, sodass nur der Bereich des Elements angezeigt wird, der sich innerhalb eines vom Entwickler definierten Pfads befindet. Clip-Bereiche werden durch Vektorpfade erstellt; alles im Pfad ist sichtbar, während Bereiche außerhalb des Pfads ausgeblendet sind.

### Die `clip-path` Eigenschaft

Die `clip-path` Eigenschaft wendet Clipping an. Der akzeptierte Wert ist ein Vektorpfad, der den sichtbaren Bereich des Elements definiert. Der Pfad kann durch Boxen, einen Verweis auf ein [SVG `<clipPath>`](#svg_als_quelle) oder CSS [Formen und Pfade](#form-funktion) definiert werden. Im folgenden Beispiel beschneiden wir ein blaues Quadrat in einem {{htmlelement("div")}}, das mit der Funktion {{cssxref("basic-shape/polygon","polygon()")}} zu einem Diamanten gestaltet wird:

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

Mit der `clip-path` Eigenschaft können Sie komplexe Formen erstellen, indem Sie ein Element auf eine `<basic-shape>` oder eine [SVG-Quelle](#svg_als_quelle) beschneiden. Sie können [animieren und Übergänge von `clip-path` Formen](#animation) erstellen, wenn die deklarierten Zustände die gleiche Anzahl von Vektorpunkten haben.

### Werte der `clip-path` Eigenschaft

Um ein Element visuell zu beschneiden, wird die `clip-path` Eigenschaft entweder auf eine [`<geometry-box>`](/de/docs/Web/CSS/Reference/Properties/clip-path#geometry-box), eine {{cssxref("url_value", "url")}} zu einer {{svgElement("clipPath")}} Clip-Quelle oder auf eine mit [shape function](/de/docs/Web/CSS/Reference/Values/Functions#shape_functions) erstellte {{cssxref("basic-shape")}} gesetzt.

### Geometrie-Boxen

Die `clip-path` versteckt alles, was außerhalb des beschnittenen Bereichs liegt. Das grundlegendste Clipping erfolgt über eine Geometrie-Box. Sie können ein Element basierend auf seinem Rand, Rahmen, Abstand oder Inhalt beschneiden. Die Effekte dieser visuellen Box-Werte können durch andere CSS-Eigenschaften erreicht werden, wie das Setzen der {{cssxref("border-color")}} auf transparent und der {{cssxref("background-origin")}} auf die gewünschte visuelle Box. Wir betrachten diese Werte hauptsächlich, weil diese Werte in Verbindung mit den Formfunktionen verwendet werden, auf die wir später eingehen werden, um den Ursprung des Form-Clippfads zu definieren.

[Das Verständnis der Referenzbox](/de/docs/Web/CSS/Guides/Shapes/Using_shape-outside#the_reference_box), die von CSS-Formen verwendet wird, ist wichtig, wenn `clip-path` verwendet wird, insbesondere bei [Grundformen](#clipping_zu_grundformen), da die Referenzbox das Koordinatensystem einer Form definiert.

#### Visuelle Box-Werte

Dieses Live-Beispiel demonstriert die verschiedenen visuellen Box-Werte der `clip-path` Eigenschaft an einem Element, während es mit der CSS `background-origin` Eigenschaft verglichen wird. Wir haben einen {{cssxref("border")}}, eine {{cssxref("background-color")}}, ein {{cssxref("background-image")}} und {{cssxref("padding")}} auf dem {{htmlelement("blockquote")}} angewendet. Wählen Sie eine Optionsschaltfläche, um den `--value` zu einem anderen `<geometry-box>` Wert zu aktualisieren, der die {{cssxref("background-origin")}} und die {{cssxref("clip-path")}} aufgelösten Werte aktualisiert.

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

Wenn eine `<geometry>` Box in Kombination mit einer `<basic-shape>` angegeben wird, definiert der Wert die Referenzbox für die Grundform. Wird sie alleine angegeben, verursacht sie, dass die Kanten der angegebenen Box, einschließlich jeder Eckgestaltung (wie `border-radius`), der Clipping-Pfad sind.

#### Form-Ursprung

Das vorherige Beispiel lässt Sie vielleicht glauben, dass die `<geometry-box>` Werte nutzlos sind, da Sie stattdessen `background-origin` verwenden können. Und das können Sie. Aber wenn Sie mit Grundformen beschneiden, definiert die `<geometry-box>`, wenn sie zusammen mit einer `<basic-shape>` als `clip-path` Wert enthalten ist, die Referenzbox für oder den Ursprung dieser Form. Wir können die beiden vorherigen Beispiele kombinieren, um dies zu demonstrieren.

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

Ein weiteres Beispiel finden Sie unter [`clip-path` Formen und Geometrie-Boxen](/de/docs/Web/CSS/Reference/Properties/clip-path#shapes_and_geometry_boxes).

Sogar Werte wie `clip-path: margin-box` können nützlich sein. Neben kreativen visuellen Designs, die durch das Setzen des Clippfadrandes an der Randbox-Kante entstehen, führt jeder berechnete Wert für `clip-path` anders als `none` zu der Erstellung eines neuen [Stacking-Kontexts](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context), ebenso wie CSS {{cssxref("opacity")}} es für Werte anders als `1` tut.

## Clipping zu Grundformen

Die Unterstützung der `clip-path` Eigenschaft für {{cssxref("basic-shape")}} Werte bietet eine mächtige Möglichkeit, Elemente zu gestalten. Die verschiedenen Formfunktionen ermöglichen es, präzise Clipping-Bereiche zu definieren und Elemente in einzigartige Formen zu skulpturieren. Die Grundformfunktionen umfassen:

- {{cssxref("basic-shape/circle","circle()")}}
- {{cssxref("basic-shape/ellipse","ellipse()")}}
- {{cssxref("basic-shape/inset","inset()")}}
- {{cssxref("basic-shape/path","path()")}}
- {{cssxref("basic-shape/polygon","polygon()")}}
- {{cssxref("basic-shape/rect","rect()")}}
- {{cssxref("basic-shape/shape","shape()")}}
- {{cssxref("basic-shape/xywh","xywh()")}}

Die Größe und Position dieser Formen wird durch den `<geometry-box>` Wert definiert, welcher standardmäßig auf `border-box` als Referenzbox zurückgreift, wenn der `clip-path` Wert eine Form ohne `<geometry-box>`-Komponentenwert enthält.

Einige dieser Funktionen scheinen nur grundlegende vordefinierte Clipping-Optionen zu bieten. Sie können Effekte nachahmen, die Sie mit {{cssxref("border-radius")}} erstellen können, aber wenn Sie die `border-radius` Eigenschaft im vorherigen Beispiel [umgeschaltet haben](#visuelle_box-werte), haben Sie möglicherweise die Macht des CSS-Clippings bemerkt. Formen bieten noch mehr Kontrolle. Zum Beispiel ermöglicht `inset()`, ein Rechteck mit präzisen Rändern zuzuschneiden. Die wahre Kraft und Kontrolle kommt mit `path()`, `shape()` und sogar `polygon()`, die benutzerdefinierte Mehrpunktformen ermöglichen.

### Erstellen von Polygonen

Mit `polygon()`, indem Paare von Koordinaten definiert werden, von denen jedes einen Eckpunkt der Form darstellt, können Sie komplexe Formen wie Sterne oder abstrakte Figuren erstellen. Die Koordinaten definieren Vektorpunkte, die durch gerade Linien verbunden sind.

Hier verwenden wir die `polygon()` Funktion, um einen Stern zu erstellen:

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

Beschnittene Formen können animiert und übergegangen werden, indem für die verschiedenen Zustände die gleiche Anzahl von Vektorpunkten deklariert wird.

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

### Die `path()` Funktion

Die `path()` Funktion ermöglicht das Zeichnen von Formen mit SVG-Befehlen. Die Funktion akzeptiert das Äquivalent des SVG {{svgattr("d")}} Attributs als Parameter der Funktion.

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

Mit `path()` sind wir nicht nur auf gerade Linien beschränkt. In diesem Beispiel verwenden wir die `path()` Funktion, um ein Herz zu erstellen:

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

Anstatt ein SVG {{svgattr("d")}} Attribut als Argument der `path()` Funktion zu übergeben, kann der Wert der `clip-path` Eigenschaft direkt auf das SVG {{svgElement("clipPath")}} Element verweisen.

```html
<div class="heart"></div>
<svg height="0" width="0">
  <clipPath id="heart">
    <path
      d="M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z" />
  </clipPath>
</svg>
```

Die `id` des `<clipPath>` ist der Parameter der {{cssxref("url_function", "url()")}} Funktion.

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

Die SVG-Pfadsyntax ist nicht die intuitivste. Aus diesem Grund bietet CSS auch eine `shape()` Funktion. Die `shape()` Funktion nimmt ebenfalls Pfadzeichenrichtlinien entgegen, jedoch mit einer lesbareren Syntax. Wir können das Herz mit deklarativerem CSS neu erstellen:

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

Die `shape()` Funktion ist robuster, da sie CSS-Werte und Einheiten akzeptiert (`path()` ist auf Koordinaten beschränkt), einschließlich der Verwendung von CSS-Mathematischen Funktionen wie `calc()`. Durch die Verwendung von Variablen können wir Formen (und Boxen) in vielen verschiedenen Größen erstellen:

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

### Text um Ihre beschnittenen Formen fließen lassen

Beschnittene Elemente sind immer noch rechteckige Boxen. Clipping bedeutet, dass Ihr Element nicht wie eine Box aussieht; es ist aber immer noch eine Box. Um Inline-Inhalt um die nicht rechteckigen (oder rechteckigen) Formen, die Sie definieren, herumfließen zu lassen, verwenden Sie die {{cssxref("shape-outside")}} Eigenschaft. Standardmäßig fließt Inline-Inhalt um seine Rand-Box; `shape-outside` bietet eine Möglichkeit, diesen Fluss anzupassen und es möglich zu machen, Text um die Elemente, die Sie beschnitten haben, gemäß dem Clip-Pfad, den Sie repliziert haben, und nicht der rechteckigen Box des Elements zu drapieren.

Der Inhalt enthält zwei Elemente, die beschnitten werden sollen, und den Inhalt, der darum geformt wird.

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

Zusätzlich zur Anwendung derselben Form für sowohl die `clip-shape` als auch die `shape-outside` Eigenschaften muss das beschnittene Element schwebend gemacht werden, damit sich das beschnittene Element in derselben Zeile wie der Inhalt befindet.

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
- [Überblick über Formen](/de/docs/Web/CSS/Guides/Shapes/Overview)
- [Einführung in CSS-Masking](/de/docs/Web/CSS/Guides/Masking/Introduction)
- [CSS `mask` Eigenschaften](/de/docs/Web/CSS/Guides/Masking/Mask_properties)
- [Deklaration mehrerer Masken](/de/docs/Web/CSS/Guides/Masking/Multiple_masks)
- [CSS-Masking](/de/docs/Web/CSS/Guides/Masking) Modul
- [CSS-Formen](/de/docs/Web/CSS/Guides/Shapes) Modul
