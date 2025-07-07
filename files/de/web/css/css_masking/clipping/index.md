---
title: Einführung in das Ausschneiden von CSS
slug: Web/CSS/CSS_masking/Clipping
l10n:
  sourceCommit: 2d19a88d0cc560f031a07585bf57f005fec02670
---

{{CSSRef}}

Das Ausschneiden von CSS ermöglicht es Ihnen, sichtbare Teile eines Elements zu definieren, während andere Teile ausgeblendet werden, effektiv wird der Inhalt eines Elements innerhalb einer bestimmten Form oder Fläche „ausgeschnitten“. Mit dem Ausschneiden sind Elemente nicht auf die Darstellung als Rechtecke beschränkt und können auf visuell ansprechende Weise gestaltet werden. Dieser Leitfaden untersucht die {{cssxref("clip-path")}}-Eigenschaft zusammen mit einigen Beispielen.

## Ausschneiden von CSS

Ausschneiden ist eine CSS-Technik, die verwendet wird, um Abschnitte eines Elements auszublenden, wobei nur der Bereich des Elements angezeigt wird, der sich innerhalb eines vom Entwickler definierten Pfads befindet. Die ausgeschnittenen Bereiche werden durch Vektorpfade erstellt; alles innerhalb des Pfades ist sichtbar, während Bereiche außerhalb des Pfades verborgen sind.

### Die `clip-path`-Eigenschaft

Die `clip-path`-Eigenschaft wendet das Ausschneiden an. Der akzeptierte Wert ist ein Vektorpfad, der den Bereich des Elements definiert, der sichtbar bleiben soll. Der Pfad kann mithilfe von Boxen, einem Verweis auf ein [SVG-`<clipPath>`](#svg_als_quelle) oder CSS-[Formen und Pfade](#formfunktion) definiert werden. Im folgenden Beispiel schneiden wir ein blaues Quadrat-{{htmlelement("div")}} zu, um ein Rautenmuster zu erstellen, indem wir die {{cssxref("basic-shape/polygon", "polygon()")}}-Funktion als Ausschneidepfad verwenden:

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

Mit der `clip-path`-Eigenschaft können Sie komplexe Formen erstellen, indem Sie ein Element auf ein `<basic-shape>` oder eine [SVG-Quelle](#svg_als_quelle) zuschneiden. Sie können [Ausschnittformen animieren und überblenden](#animation), wenn die deklarierten Zustände dieselbe Anzahl von Vektorpunkten haben.

### Werte der `clip-path`-Eigenschaft

Um ein Element visuell auszuschneiden, wird die `clip-path`-Eigenschaft entweder auf ein [`<geometry-box>`](/de/docs/Web/CSS/clip-path#geometry-box), eine {{cssxref("url_value", "url")}} zu einer {{svgElement("clipPath")}}-Ausschnittquelle oder eine mit [Formfunktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#shape_functions) erstellte {{cssxref("basic-shape")}} gesetzt.

### Geometrische Boxen

Die `clip-path`-Eigenschaft blendet alles außerhalb des ausgeschnittenen Bereichs aus. Das einfachste Ausschneiden erfolgt über eine geomtrische Box. Sie können ein Element basierend auf seinem Rand, Rahmen, seiner Auffüllung oder seinem Inhalt zuschneiden. Die Effekte dieser visuellen Boxwerte können über andere CSS-Eigenschaften erreicht werden, z. B. indem die {{cssxref("border-color")}} auf transparent gesetzt wird und {{cssxref("background-origin")}} auf die gewünschte visuelle Box. Wir betrachten diese Werte hauptsächlich, weil diese Werte in Verbindung mit den Formfunktionen verwendet werden, die wir später untersuchen werden, um den Ursprung des Formclip-Pfads zu definieren.

[Das Verständnis der Referenzbox](/de/docs/Web/CSS/CSS_shapes/Basic_shapes#the_reference_box), die von CSS-Formen verwendet wird, ist wichtig, wenn `clip-path` verwendet wird, insbesondere bei [Grundformen](#ausschneiden_zu_basisformen), da die Referenzbox das Koordinatensystem einer Form definiert.

#### Visuelle Boxwerte

Dieses Live-Beispiel zeigt die verschiedenen visuellen Boxwerte der `clip-path`-Eigenschaft auf ein Element, während es mit der CSS-Eigenschaft `background-origin` verglichen wird. Wir haben ein {{cssxref("border")}}, eine {{cssxref("background-color")}}, ein {{cssxref("background-image")}}, und {{cssxref("padding")}} auf das {{htmlelement("blockquote")}} angewandt. Wählen Sie ein Optionsfeld aus, um den `--value` auf einen anderen `<geometry-box>`-Wert zu aktualisieren, der die {{cssxref("background-origin")}} und die gelösten Werte von {{cssxref("clip-path")}} aktualisiert.

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

Wenn eine `<geometry>`-Box in Kombination mit einem `<basic-shape>` angegeben ist, definiert der Wert die Referenzbox für die Grundform. Wenn er allein angegeben wird, führt er dazu, dass die Kanten der angegebenen Box, einschließlich einer eventuellen Eckformung (wie ein `border-radius`), der Ausschneidepfad werden.

#### Ursprungsform

Das vorherige Beispiel mag Sie glauben lassen, dass die `<geometry-box>`-Werte nutzlos sind, da Sie `background-origin` verwenden können. Und das können Sie. Aber wenn man Grundformen ausschneidet, definiert die `<geometry-box>`, wenn sie zusammen mit einem `<basic-shape>` als `clip-path`-Wert enthalten ist, die Referenzbox oder den Ursprung dieser Form. Wir können die beiden vorherigen Beispiele kombinieren, um dies zu demonstrieren.

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

Für ein weiteres Beispiel siehe [„clip-path“-Formen und Geometrie-Boxen](/de/docs/Web/CSS/clip-path#shapes_and_geometry_boxes).

Sogar Werte wie `clip-path: margin-box` können nützlich sein. Neben kreativen visuellen Effekten, die durch das Platzieren des Clip-Pfades an der Randboxkante entstehen, führt jeder berechnete Wert für `clip-path`, der nicht `none` ist, zur Erstellung eines neuen [Stacking Context](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context), auf die gleiche Weise wie CSS {{cssxref("opacity")}} dies für Werte ungleich `1` tut.

## Ausschneiden zu Basisformen

Die Unterstützung der `clip-path`-Eigenschaft von {{cssxref("basic-shape")}}-Werten bietet eine leistungsstarke Möglichkeit, Elemente zu gestalten. Die verschiedenen Formfunktionen ermöglichen die Definition präziser Ausschnittbereiche und formen so Elemente effektiv in einzigartige Formen. Zu den Grundformenfunktionen gehören:

- {{cssxref("basic-shape/circle", "circle()")}}
- {{cssxref("basic-shape/ellipse", "ellipse()")}}
- {{cssxref("basic-shape/inset", "inset()")}}
- {{cssxref("basic-shape/path", "path()")}}
- {{cssxref("basic-shape/polygon", "polygon()")}}
- {{cssxref("basic-shape/rect", "rect()")}}
- {{cssxref("basic-shape/shape", "shape()")}}
- {{cssxref("basic-shape/xywh", "xywh()")}}

Die Größe und Position dieser Formen wird durch den `<geometry-box>`-Wert definiert, der standardmäßig auf border-box eingestellt ist, wenn der `clip-path`-Wert eine Form ohne den `<geometry-box>`-Komponentenwert enthält.

Einige dieser Funktionen scheinen nur grundlegende vordefinierte Ausschneideoptionen bereitzustellen. Sie scheinen Effekte zu replizieren, die Sie mit {{cssxref("border-radius")}} erstellen können, aber wenn Sie die [Eigenschaft `border-radius`](#visuelle_boxwerte) im vorherigen Beispiel umgeschaltet hätten, hätten Sie möglicherweise die Leistungsfähigkeit des CSS-Ausschneidens bemerkt. Formen bieten noch mehr Kontrolle. Zum Beispiel ermöglicht `inset()` das Ausschneiden eines Rechtecks mit präzisen Rändern. Die wahre Stärke und Kontrolle kommt mit `path()`, `shape()` und sogar `polygon()`, die es ermöglichen, benutzerdefinierte Mehrpunktformen zu erstellen.

### Polygone erstellen

Mit `polygon()` können Sie durch die Definition von Koordinatenpaaren, von denen jedes einen Scheitelpunkt der Form darstellt, komplizierte Formen wie Sterne oder abstrakte Figuren erstellen. Die Koordinaten definieren Vektorpunkte, die durch gerade Linien verbunden sind.

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

Ausgeschnittene Formen können animiert und überblendet werden, indem die gleiche Anzahl von Vektorpunkten für die verschiedenen Zustände deklariert wird.

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

Die `path()`-Funktion ermöglicht das Zeichnen von Formen mithilfe von SVG-Befehlen. Die Funktion akzeptiert das Äquivalent des SVG-Attributs {{svgattr("d")}} als Parameter der Funktion.

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

Anstatt einen SVG-{{svgattr("d")}}-Attribut-String als Argument der `path()`-Funktion zu übergeben, kann der Wert der `clip-path`-Eigenschaft direkt auf das SVG-Element {{svgElement("clipPath")}} verweisen.

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
  clip-path: url(#heart);
}
```

{{ EmbedLiveSample('svg as source', 230, 230) }}

### Formfunktion

Die Syntax des SVG-Pfads ist nicht die intuitivste. Aus diesem Grund bietet CSS auch eine `shape()`-Funktion. Die `shape()`-Funktion akzeptiert ebenfalls Wegebefehle, jedoch mit einer syntaktisch benutzerfreundlicheren Ausdrucksweise. Das Herz lässt sich mit deklarativerer CSS neu erstellen:

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

Die `shape()`-Funktion ist robuster, da sie CSS-Werte und -Einheiten akzeptiert (`path()` ist auf Koordinaten beschränkt), einschließlich der Verwendung von CSS-Mathfunktionen wie `calc()`. Durch die Verwendung von Variablen können wir Formen (und Boxen) in vielen verschiedenen Größen erstellen:

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

### Text um Ihre ausgeschnittenen Formen herum laufen lassen

Ausgeschnittene Elemente sind immer noch rechteckige Boxen. Ausschneiden bedeutet, dass Ihr Element nicht wie eine Box aussieht; es ist aber immer noch eine Box. Um Inline-Inhalt um die nicht rechteckigen (oder rechteckigen) Formen, die Sie definieren, zu wickeln, verwenden Sie die {{cssxref("shape-outside")}}-Eigenschaft. Standardmäßig wickelt sich der Inline-Inhalt um seine Randbox; `shape-outside` bietet eine Möglichkeit, dieses Umwickeln anzupassen, sodass es möglich wird, Text um die von Ihnen ausgeschnittenen Elemente herum zu wickeln und dem von Ihnen replizierten Auschnittspfad zu folgen, anstatt der rechteckigen Box des Elements.

Der Inhalt umfasst zwei zu schneidende Elemente und den Inhalt, der um sie herum gestaltet wird.

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

Zusätzlich zur Anwendung der gleichen Form sowohl für die `clip-shape`- als auch für die `shape-outside`-Eigenschaften, muss das abgeschnittene Element gefloatet werden, sodass das abgeschnittene Element auf derselben Zeile wie der Inhalt ist.

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
- [Einführung in das Maskieren von CSS](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS-`mask`-Eigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties)
- [Deklaration mehrerer Masken](/de/docs/Web/CSS/CSS_masking/Multiple_masks)
- [CSS-Maskierung](/de/docs/Web/CSS/CSS_masking)-Modul
- [CSS-Formen](/de/docs/Web/CSS/CSS_shapes)-Modul
