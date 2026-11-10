---
title: Einführung in CSS-Clipping
short-title: Clipping
slug: Web/CSS/Guides/Masking/Clipping
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Mit CSS-Clipping können Sie die sichtbaren Bereiche eines Elements festlegen und andere Teile ausblenden. So wird der Inhalt innerhalb einer bestimmten Form oder Fläche „beschnitten“. Elemente müssen dadurch nicht auf rechteckige Darstellungen beschränkt bleiben, sondern können visuell ansprechend gestaltet werden. Dieser Leitfaden erläutert die Eigenschaft {{cssxref("clip-path")}} anhand einiger Beispiele.

## CSS-Clipping

Clipping ist eine CSS-Technik, mit der Bereiche eines Elements beschnitten (ausgeblendet) werden. Sichtbar bleibt nur der Bereich innerhalb eines von Entwicklern definierten Pfads. Clipping-Bereiche werden durch Vektorpfade erzeugt: Alles innerhalb des Pfads ist sichtbar, während Bereiche außerhalb verborgen bleiben.

### Die Eigenschaft `clip-path`

Die Eigenschaft `clip-path` wendet Clipping an. Als Wert akzeptiert sie einen Vektorpfad, der den sichtbar bleibenden Bereich des Elements definiert. Der Pfad kann durch Boxen, einen Verweis auf einen [SVG-`<clipPath>`](#svg_als_quelle) oder CSS-[Formen und Pfade](<#die_funktion_`shape()`>) definiert werden. Im folgenden Beispiel beschneiden wir ein blaues quadratisches {{htmlelement("div")}} mithilfe der Funktion {{cssxref("basic-shape/polygon","polygon()")}} als Clipping-Pfad zu einer Raute:

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

{{ EmbedLiveSample('the_clip-path_property', 230, 230) }}

Mit der Eigenschaft `clip-path` können Sie komplexe Formen erzeugen, indem Sie ein Element auf eine `<basic-shape>` oder eine [SVG-Quelle](#svg_als_quelle) beschneiden. Sie können `clip-path`-Formen [animieren und zwischen ihnen Übergänge erstellen](#animation), wenn die definierten Zustände dieselbe Anzahl an Vektorpunkten aufweisen.

### Werte der Eigenschaft `clip-path`

Um ein Element visuell zu beschneiden, wird die Eigenschaft `clip-path` auf eine [`<geometry-box>`](/de/docs/Web/CSS/Reference/Properties/clip-path#geometry-box), einen {{cssxref("url_value", "url")}}-Verweis auf eine {{svgElement("clipPath")}}-Clipping-Quelle oder eine mit einer [Formfunktion](/de/docs/Web/CSS/Reference/Values/Functions#shape_functions) erstellte {{cssxref("basic-shape")}} gesetzt.

### Geometrie-Boxen

`clip-path` blendet alles außerhalb des beschnittenen Bereichs aus. Die einfachste Form des Clippings verwendet eine Geometrie-Box. Sie können ein Element anhand seines Außenabstands, Rahmens, Innenabstands oder Inhalts beschneiden. Die visuellen Effekte dieser Box-Werte lassen sich auch mit anderen CSS-Eigenschaften erzielen, etwa indem Sie {{cssxref("border-color")}} auf transparent und {{cssxref("background-origin")}} auf die gewünschte visuelle Box setzen. Wir betrachten diese Werte vor allem, weil sie zusammen mit den später erläuterten Formfunktionen verwendet werden, um den Ursprung des Clipping-Pfads einer Form festzulegen.

Beim Einsatz von `clip-path`, insbesondere mit [Grundformen](#beschneiden_auf_grundformen), ist es wichtig, die von CSS-Formen verwendete [Referenz-Box](/de/docs/Web/CSS/Guides/Shapes/Using_shape-outside#the_reference_box) zu verstehen: Sie definiert das Koordinatensystem einer Form.

#### Werte für visuelle Boxen

Dieses interaktive Beispiel zeigt die verschiedenen Werte für visuelle Boxen der Eigenschaft `clip-path` an einem Element und vergleicht sie mit der CSS-Eigenschaft `background-origin`. Auf das {{htmlelement("blockquote")}} haben wir einen {{cssxref("border")}}, eine {{cssxref("background-color")}}, ein {{cssxref("background-image")}} und {{cssxref("padding")}} angewendet. Wählen Sie eine Optionsschaltfläche, um `--value` auf einen anderen `<geometry-box>`-Wert zu setzen. Dadurch ändern sich die berechneten Werte von {{cssxref("background-origin")}} und {{cssxref("clip-path")}}.

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

Wenn eine `<geometry>`-Box zusammen mit einer `<basic-shape>` angegeben wird, definiert sie die Referenz-Box für die Grundform. Wird sie allein angegeben, bilden die Kanten der angegebenen Box einschließlich der Gestaltung ihrer Ecken (etwa durch `border-radius`) den Clipping-Pfad.

#### Ursprung der Form

Das vorherige Beispiel könnte den Eindruck erwecken, dass `<geometry-box>`-Werte überflüssig sind, weil Sie stattdessen `background-origin` verwenden können. Das ist zwar möglich. Wenn Sie jedoch mit Grundformen beschneiden, definiert eine `<geometry-box>`, die zusammen mit einer `<basic-shape>` als Wert von `clip-path` angegeben wird, die Referenz-Box beziehungsweise den Ursprung dieser Form. Dies lässt sich durch die Kombination der beiden vorherigen Beispiele veranschaulichen.

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

Ein weiteres Beispiel finden Sie unter [Formen und Geometrie-Boxen bei `clip-path`](/de/docs/Web/CSS/Reference/Properties/clip-path#shapes_and_geometry_boxes).

Auch Werte wie `clip-path: margin-box` können nützlich sein. Indem die Kante des Clipping-Pfads an der Kante der Margin-Box platziert wird, lassen sich kreative visuelle Effekte erzielen. Außerdem bewirkt jeder berechnete Wert von `clip-path` außer `none` die Erstellung eines neuen [Stapelkontexts](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context) – ebenso wie CSS {{cssxref("opacity")}} bei Werten ungleich `1`.

## Beschneiden auf Grundformen

Die Unterstützung von {{cssxref("basic-shape")}}-Werten durch die Eigenschaft `clip-path` bietet eine leistungsfähige Möglichkeit, Elemente zu formen. Mit den verschiedenen Formfunktionen lassen sich Clipping-Bereiche präzise definieren und Elemente so in einzigartige Formen bringen. Zu den Grundformfunktionen gehören:

- {{cssxref("basic-shape/circle","circle()")}}
- {{cssxref("basic-shape/ellipse","ellipse()")}}
- {{cssxref("basic-shape/inset","inset()")}}
- {{cssxref("basic-shape/path","path()")}}
- {{cssxref("basic-shape/polygon","polygon()")}}
- {{cssxref("basic-shape/rect","rect()")}}
- {{cssxref("basic-shape/shape","shape()")}}
- {{cssxref("basic-shape/xywh","xywh()")}}

Größe und Position dieser Formen werden durch den `<geometry-box>`-Wert bestimmt. Enthält der Wert von `clip-path` eine Form ohne `<geometry-box>`-Komponente, wird standardmäßig die Border-Box als Referenz-Box verwendet.

Einige dieser Funktionen scheinen nur einfache, vordefinierte Clipping-Optionen zu bieten. Möglicherweise wirken sie wie eine Nachbildung von Effekten, die Sie mit {{cssxref("border-radius")}} erzielen können. Wenn Sie jedoch im vorherigen Beispiel die Eigenschaft [`border-radius` umgeschaltet](#werte_für_visuelle_boxen) haben, ist Ihnen vielleicht das Potenzial von CSS-Clipping aufgefallen. Formen bieten noch mehr Kontrolle. Mit `inset()` können Sie beispielsweise ein Rechteck mit präzisen Abständen beschneiden. Besonders viel Kontrolle bieten `path()`, `shape()` und auch `polygon()`, mit denen sich benutzerdefinierte Formen mit mehreren Punkten erstellen lassen.

### Polygone erstellen

Mit `polygon()` können Sie durch die Angabe von Koordinatenpaaren, die jeweils einen Eckpunkt der Form darstellen, komplexe Formen wie Sterne oder abstrakte Figuren erstellen. Die Koordinaten definieren Vektorpunkte, die durch gerade Linien verbunden werden.

Hier erstellen wir mit der Funktion `polygon()` einen Stern:

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

Beschnittene Formen lassen sich animieren und mit Übergängen versehen, wenn für die verschiedenen Zustände dieselbe Anzahl an Vektorpunkten angegeben wird.

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

### Die Funktion `path()`

Mit der Funktion `path()` lassen sich Formen mithilfe von SVG-Befehlen zeichnen. Als Parameter akzeptiert sie das Äquivalent des SVG-Attributs {{svgattr("d")}}.

Der Stern aus dem vorherigen Beispiel lässt sich auch mit `path()` erstellen:

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

### Gekrümmte Linien

Mit `path()` sind wir nicht auf gerade Linien beschränkt. In diesem Beispiel erstellen wir mit der Funktion `path()` ein Herz:

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

Statt der Funktion `path()` eine Zeichenfolge für das SVG-Attribut {{svgattr("d")}} als Argument zu übergeben, kann der Wert der Eigenschaft `clip-path` direkt auf das SVG-Element {{svgElement("clipPath")}} verweisen.

```html
<div class="heart"></div>
<svg height="0" width="0">
  <clipPath id="heart">
    <path
      d="M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z" />
  </clipPath>
</svg>
```

Die `id` des `<clipPath>` ist der Parameter der Funktion {{cssxref("url_function", "url()")}}.

```css
.heart {
  width: 200px;
  height: 200px;
  background: linear-gradient(rebeccapurple, magenta) blue;
  clip-path: url("#heart");
}
```

{{ EmbedLiveSample('svg as source', 230, 230) }}

### Die Funktion `shape()`

Die SVG-Pfadsyntax ist nicht besonders intuitiv. Deshalb bietet CSS auch die Funktion `shape()`. Sie akzeptiert ebenfalls Anweisungen zum Zeichnen von Pfaden, verwendet aber eine besser lesbare Syntax. So können wir das Herz mit deklarativerem CSS nachbilden:

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

Die Funktion `shape()` ist flexibler, da sie CSS-Werte und -Einheiten akzeptiert (`path()` ist auf Koordinaten beschränkt). Dazu gehört auch die Verwendung mathematischer CSS-Funktionen wie `calc()`. Mithilfe von Variablen können wir Formen (und Boxen) in vielen verschiedenen Größen erstellen:

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

### Text um beschnittene Formen fließen lassen

Beschnittene Elemente haben weiterhin rechteckige Boxen. Durch Clipping sieht Ihr Element zwar nicht mehr wie eine Box aus, es bleibt aber eine. Verwenden Sie die Eigenschaft {{cssxref("shape-outside")}}, um Inline-Inhalte um die von Ihnen definierten nicht rechteckigen (oder rechteckigen) Formen fließen zu lassen. Standardmäßig umfließen Inline-Inhalte die Margin-Box eines Elements. Mit `shape-outside` können Sie diesen Textfluss anpassen, sodass Text der nachgebildeten Clipping-Form statt der rechteckigen Box des Elements folgt.

Der Inhalt umfasst zwei Elemente, die beschnitten werden, sowie den Inhalt, der sie umfließen soll.

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

Zusätzlich dazu, dass für die Eigenschaften `clip-shape` und `shape-outside` dieselbe Form verwendet wird, muss das beschnittene Element als Float gesetzt werden, damit es sich auf derselben Zeile wie der Inhalt befindet.

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
- [CSS-Eigenschaften für `mask`](/de/docs/Web/CSS/Guides/Masking/Mask_properties)
- [Mehrere Masken definieren](/de/docs/Web/CSS/Guides/Masking/Multiple_masks)
- Modul [CSS-Masking](/de/docs/Web/CSS/Guides/Masking)
- Modul [CSS-Formen](/de/docs/Web/CSS/Guides/Shapes)
