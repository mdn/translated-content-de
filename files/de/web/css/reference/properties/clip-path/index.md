---
title: clip-path
slug: Web/CSS/Reference/Properties/clip-path
l10n:
  sourceCommit: 0ab262675372b83fc870accf3dc46d6a367c451c
---

Die **`clip-path`**-Eigenschaft ([CSS](/de/docs/Web/CSS)) erstellt eine Clipping-Region, die festlegt, welcher Teil eines Elements angezeigt werden soll. Teile, die sich innerhalb der Region befinden, werden angezeigt, während diejenigen außerhalb ausgeblendet werden.

{{InteractiveExample("CSS Demo: clip-path")}}

```css interactive-example-choice
clip-path: circle(40%);
```

```css interactive-example-choice
clip-path: ellipse(130px 140px at 10% 20%);
```

```css interactive-example-choice
clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
```

```css interactive-example-choice
clip-path: path("M 0 200 L 0,75 A 5,5 0,0,1 150,75 L 200 200 z");
```

```css interactive-example-choice
clip-path: rect(5px 145px 160px 5px round 20%);
```

```css interactive-example-choice
clip-path: xywh(0 5px 100% 75% round 15% 0);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <img
      class="transition-all"
      id="example-element"
      src="/shared-assets/images/examples/balloon-small.jpg"
      width="150" />
    We had agreed, my companion and I, that I should call for him at his house,
    after dinner, not later than eleven o'clock. This athletic young Frenchman
    belongs to a small set of Parisian sportsmen, who have taken up "ballooning"
    as a pastime. After having exhausted all the sensations that are to be found
    in ordinary sports, even those of "automobiling" at a breakneck speed, the
    members of the "Aéro Club" now seek in the air, where they indulge in all
    kinds of daring feats, the nerve-racking excitement that they have ceased to
    find on earth.
  </div>
</section>
```

```css interactive-example
section {
  align-items: flex-start;
}

.example-container {
  text-align: left;
  padding: 20px;
}

#example-element {
  float: left;
  width: 150px;
  margin: 20px;
}
```

## Syntax

```css
/* Keyword values */
clip-path: none;

/* <clip-source> values */
clip-path: url("resources.svg#c1");

/* <geometry-box> values */
clip-path: margin-box;
clip-path: border-box;
clip-path: padding-box;
clip-path: content-box;
clip-path: fill-box;
clip-path: stroke-box;
clip-path: view-box;

/* <basic-shape> values */
clip-path: inset(100px 50px);
clip-path: circle(50px at 0 100px);
clip-path: ellipse(50px 60px at 10% 20%);
clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
clip-path: path(
  "M0.5,1 C0.5,1,0,0.7,0,0.3 A0.25,0.25,1,1,1,0.5,0.3 A0.25,0.25,1,1,1,1,0.3 C1,0.7,0.5,1,0.5,1 Z"
);
clip-path: rect(5px 5px 160px 145px round 20%);
clip-path: shape(from 0% 0%, line to 100% 0%, line to 50% 100%, close);
clip-path: xywh(0 5px 100% 75% round 15% 0);

/* Box and shape values combined */
clip-path: padding-box circle(50px at 0 100px);

/* Global values */
clip-path: inherit;
clip-path: initial;
clip-path: revert;
clip-path: revert-layer;
clip-path: unset;
```

Die `clip-path`-Eigenschaft wird als eine oder eine Kombination der unten aufgeführten Werte angegeben.

### Werte

- `<clip-source>`
  - : Ein {{cssxref("url_value", "&lt;url&gt;")}}, der auf ein [SVG](/de/docs/Web/SVG) {{SVGElement("clipPath")}}-Element verweist.
- {{cssxref("basic-shape")}}
  - : Eine Form, deren Größe und Position durch den `<geometry-box>`-Wert definiert ist. Wenn keine Geometrie-Box angegeben ist, wird die `border-box` als Referenzbox verwendet. Eine der folgenden:
    - {{cssxref("basic-shape/inset","inset()")}}
      - : Definiert ein eingestelltes Rechteck.
    - {{cssxref("basic-shape/circle","circle()")}}
      - : Definiert einen Kreis mit einem Radius und einer Position.
    - {{cssxref("basic-shape/ellipse","ellipse()")}}
      - : Definiert eine Ellipse mit zwei Radien und einer Position.
    - {{cssxref("basic-shape/polygon","polygon()")}}
      - : Definiert ein Polygon mit einer SVG-Ausfüllregel und einem Satz von Eckpunkten.
    - {{cssxref("basic-shape/path","path()")}}
      - : Definiert eine Form mit einer optionalen SVG-Ausfüllregel und einer SVG-Pfaddefinition.
    - {{cssxref("basic-shape/rect","rect()")}}
      - : Definiert ein Rechteck mit den angegebenen Abständen von den Rändern der Referenzbox.
    - {{cssxref("basic-shape/shape","shape()")}}
      - : Definiert eine Form mit einer optionalen SVG-Ausfüllregel und Formbefehlen für Linien, Kurven und Bögen.
    - {{cssxref("basic-shape/xywh","xywh()")}}
      - : Definiert ein Rechteck mit den angegebenen Abständen von den oberen und linken Rändern der Referenzbox sowie der angegebenen Breite und Höhe des Rechtecks.

- `<geometry-box>`
  - : Wenn in Kombination mit einer `<basic-shape>` angegeben, definiert dieser Wert die Referenzbox für die Basisform. Wenn er alleine angegeben wird, führt dies dazu, dass die Kanten der angegebenen Box, einschließlich jeglicher Eckgestaltung (wie ein {{cssxref("border-radius")}}), der Clipping-Pfad sind. Die Geometrie-Box kann einer der folgenden Werte sein:
    - `margin-box`
      - : Verwendet die [Margin-Box](/de/docs/Web/CSS/Guides/Shapes/From_box_values#margin-box) als Referenzbox.
    - `border-box`
      - : Verwendet die [Border-Box](/de/docs/Web/CSS/Guides/Shapes/From_box_values#border-box) als Referenzbox.
    - `padding-box`
      - : Verwendet die [Padding-Box](/de/docs/Web/CSS/Guides/Shapes/From_box_values#padding-box) als Referenzbox.
    - `content-box`
      - : Verwendet die [Content-Box](/de/docs/Web/CSS/Guides/Shapes/From_box_values#content-box) als Referenzbox.
    - `fill-box`
      - : Verwendet die Begrenzungsbox des Objekts als Referenzbox.
    - `stroke-box`
      - : Verwendet die Begrenzungsbox des Strokes als Referenzbox.
    - `view-box`
      - : Verwendet das nächstgelegene SVG-Viewport als Referenzbox. Wenn ein {{SVGAttr("viewBox")}}-Attribut für das Element angegeben ist, das den SVG-Viewport erstellt, wird die Referenzbox an die Ursprungskoordinaten verschoben, die durch das `viewBox`-Attribut festgelegt werden, und die Dimension der Größe der Referenzbox wird auf die Breite und Höhe des `viewBox`-Attributs eingestellt.

- `none`
  - : Es wird kein Clipping-Pfad erstellt.

> [!NOTE]
> Ein berechneter Wert, der nicht **`none`** ist, führt zur Erstellung eines neuen [Stacking-Contexts](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context) auf die gleiche Weise wie CSS {{cssxref("opacity")}} bei Werten ungleich `1`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Formen und Geometrie-Boxen

In diesem Beispiel werden zwei Dreiecke erstellt, indem ein `polygon()` als Clip-Pfad auf {{htmlelement("div")}}-Elementen definiert wird. Jedes hat einen einfarbigen Hintergrund und einen dicken {{cssxref("border")}}. Das zweite `<div>`-Element hat seine Referenzbox auf `content-box` gesetzt:

#### HTML

```html live-sample___shapes1 live-sample___shapes2 live-sample___shapes3
<div></div>
<div></div>
```

#### CSS

```css hidden live-sample___shapes1 live-sample___shapes2 live-sample___shapes3
body {
  display: flex;
  gap: 20px;
  flex-flow: row wrap;
}
```

```css live-sample___shapes1 live-sample___shapes2 live-sample___shapes3
div {
  height: 200px;
  width: 200px;
  box-sizing: border-box;
  background-color: rebeccapurple;
  border: 20px solid magenta;

  clip-path: polygon(50% 0, 100% 100%, 0 100%);
}

div:last-of-type {
  clip-path: content-box polygon(50% 0, 100% 100%, 0 100%);
}
```

#### Ergebnisse

{{EmbedLiveSample("shapes1", "", "230")}}

Für das erste Dreieck haben wir keine Referenzbox angegeben; daher wird standardmäßig `border-box` verwendet, wobei sich die Positionen 0% und 100% am äußeren Rand des Borders befinden. Im zweiten Beispiel haben wir die `<geometry-box>` auf `content-box` gesetzt, was bedeutet, dass die Referenzbox für die Basisform der äußere Rand des Inhaltsbereichs ist, der sich innerhalb der Padding-Box befindet. Da unser Beispiel kein `padding` hat, ist dies der innere Rand des Borders.

### `shape()`- versus `path()`-Funktionen

Basierend auf dem vorherigen Beispiel erstellen wir das gleiche Dreieck mit unterschiedlichen `<basic-shape>`-Werten, um zu demonstrieren, wie die {{cssxref("basic-shape/shape", "shape()")}}- und {{cssxref("basic-shape/path", "path()")}}-Funktionen auch verwendet werden können, um Clipping-Pfade zu erstellen, wobei `shape()` eine flexiblere Lösung darstellt.

Wir verwenden `path()`, um den Clipping-Pfad des ersten Elements zu definieren, und `shape()` für das zweite, beide mit der Standard-Referenzbox `border-box`:

```css live-sample___shapes2 live-sample___shapes3
div {
  clip-path: path("M100 0 L200 200 L0 200 Z");
}

div:last-of-type {
  clip-path: shape(from 50% 0, line to 100% 100%, line to 0 100%, close);
}
```

Daher wächst der mit der shape() Funktion definierte Pfad mit dem Element, während die path() Version dies nicht tut:

{{EmbedLiveSample("shapes2", "", "230")}}

Da die `shape()`-Funktion die Verwendung von {{cssxref("percentage")}}-Werten (und [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) ebenfalls) erlaubt, ist sie robuster.

Wir demonstrieren dies, indem wir die Größe des zugrunde liegenden Elements erhöhen:

```css live-sample___shapes3
div {
  width: 250px;
  height: 250px;
}
```

{{EmbedLiveSample("shapes3", "", "280")}}

Die Sichtbarkeit oder zumindest teilweise Sichtbarkeit der vier Borderseiten im Clipping-Pfad-Beispiel, das durch die `shape()`-Funktion definiert ist, liegt daran, dass die Prozentwerte es dem Pfad ermöglichen, mit dem Element zu wachsen. In der `path()`-Version des Beispiels wuchs das Element, aber nicht die Form. Dadurch sind die oberen und linken Border teilweise sichtbar, während die rechten und unteren Border ausgeblendet sind.

### SVG als Clipping-Quelle

In diesem Beispiel definieren wir SVG {{svgElement("clipPath")}}-Elemente zur Verwendung als `clip-path`-Quelle.

#### HTML

Wir fügen zwei {{htmlElement("div")}}-Elemente und ein `<svg>`-Element hinzu, das zwei `<clipPath>`-Elemente enthält. Ein `<clipPath>` enthält vier {{svgElement("rect")}}-Elemente, die zusammen Fensterscheiben definieren und einen Kreuz aus freiem Raum in der Mitte lassen, und das andere enthält zwei sich kreuzende `<rect>`-Elemente.

```html
<svg height="0" width="0">
  <defs>
    <clipPath id="window">
      <rect y="0" x="0" width="80" height="80" />
      <rect y="0" x="120" width="80" height="80" />
      <rect y="120" x="0" width="80" height="80" />
      <rect y="120" x="120" width="80" height="80" />
    </clipPath>
    <clipPath id="cross">
      <rect y="0" x="80" width="40" height="200" />
      <rect y="80" x="0" width="200" height="40" />
    </clipPath>
  </defs>
</svg>

<div class="window">Window</div>
<div class="cross">Cross</div>
```

#### CSS

Wir verwenden [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout), um unsere Elemente nebeneinander zu platzieren, wenn Platz vorhanden ist. Wir definieren ein {{cssxref("gradient/conic-gradient", "conic-gradient()")}} Hintergrundbild auf beiden `<div>`-Elementen, um einen interessanten visuellen Effekt zum Clipping bereitzustellen, zusammen mit einem {{cssxref("border")}}.

```css
body {
  display: flex;
  gap: 20px;
  flex-flow: row wrap;
  font: 2em sans-serif;
}

div {
  width: 200px;
  height: 200px;
  background-image: conic-gradient(
    at center,
    rebeccapurple,
    green,
    lightblue,
    rebeccapurple
  );

  border: 5px solid;
  box-sizing: border-box;
}
```

Dann setzen wir die `id` des `<clipPath>` als `<clip-source>`. Wir zentrieren den Text im `cross`-Beispiel vertikal mit {{cssxref("align-content")}}, da sonst der Text abgeschnitten würde, wie es im `window`-Beispiel geschieht.

```css
.window {
  clip-path: url("#window");
}

.cross {
  clip-path: url("#cross");
  align-content: center;
}
```

#### Ergebnisse

{{EmbedLiveSample("SVG as clip source", "", "230")}}

Die Elemente, einschließlich ihrer Border und Texte, werden abgeschnitten, wobei nur die Teile, die die `<clipPath>`-Elemente überlappen, auf der Seite dargestellt werden.

### Die verschiedenen Werttypen

Dieses Beispiel zeigt die verschiedenen Werte der `clip-path`-Eigenschaft, die ein HTML-{{htmlelement("img")}}-Element clippen.

#### HTML

Der HTML-Teil enthält ein `<img>`, das geclippt wird, ein sternförmiges `<clipPath>` und ein {{htmlelement("select")}}-Element, um einen `clip-path`-Eigenschaftswert auszuwählen.

```html
<img
  id="clipped"
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<svg height="0" width="0">
  <defs>
    <clipPath id="star">
      <path d="M100,0 42,180 196,70 4,70 158,180z" />
    </clipPath>
  </defs>
</svg>

<select id="clipPath">
  <option value="none">none</option>
  <option value="circle(100px at 110px 100px)">circle</option>
  <option value="url(#star)" selected>star</option>
  <option value="inset(20px round 20px)">inset</option>
  <option value="rect(20px 150px 200px 20px round 10%)">rect</option>
  <option value="xywh(0 20% 90% 67% round 0 0 5% 5px)">xywh</option>
  <option value="path('M 0 200 L 0,110 A 110,90 0,0,1 240,100 L 200 340 z')">
    path
  </option>
</select>
```

```html hidden
<pre id="log"></pre>
```

#### CSS

Die Anfangsdarstellung umfasst den Stern als `clip-path`-Quelle.

```css
#clipped {
  margin-bottom: 20px;
  clip-path: url("#star");
}
```

#### JavaScript

Wenn Sie eine neue Option aus dem `<select>`-Menü auswählen, aktualisiert ein Ereignishandler den Wert des `clip-path`, der auf das `<img>`-Element gesetzt ist.

```js
const clipPathSelect = document.getElementById("clipPath");
clipPathSelect.addEventListener("change", (evt) => {
  const path = evt.target.value;
  document.getElementById("clipped").style.clipPath = path;
  log(`clip-path: ${path};`);
});
```

```js hidden
function log(text) {
  const logElement = document.querySelector("#log");
  logElement.innerText = `${text}`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

#### Ergebnis

{{EmbedLiveSample("Complete_example", 230, 300)}}

Wählen Sie verschiedene Optionen aus, um den `clip-path`-Wert zu ändern.

> [!NOTE]
> Auch wenn es möglich ist, einen Pfad aus Text zu definieren, sollten Sie, wenn Sie ein Hintergrundbild zu einem Text statt zu einer Form clippen möchten, die {{cssxref("background-clip")}}-Eigenschaft verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("clip-rule")}}
- {{CSSxRef("mask")}}
- {{CSSxRef("filter")}}
- {{cssxref("background-clip")}}
- [Einführung in CSS-Clipping](/de/docs/Web/CSS/Guides/Masking/Clipping)
- [CSS-Masking](/de/docs/Web/CSS/Guides/Masking)-Modul
- SVG {{SVGAttr("clip-path")}}-Attribut
- [Anwendung von SVG-Effekten auf HTML-Inhalt](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
