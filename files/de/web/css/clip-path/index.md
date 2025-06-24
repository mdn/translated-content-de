---
title: clip-path
slug: Web/CSS/clip-path
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`clip-path`** [CSS](/de/docs/Web/CSS) Eigenschaft erstellt eine Clipping-Region, die festlegt, welcher Teil eines Elements angezeigt werden soll. Teile, die innerhalb der Region liegen, werden angezeigt, während diejenigen außerhalb verborgen bleiben.

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
    after dinner, not later than eleven o’clock. This athletic young Frenchman
    belongs to a small set of Parisian sportsmen, who have taken up “ballooning”
    as a pastime. After having exhausted all the sensations that are to be found
    in ordinary sports, even those of “automobiling” at a breakneck speed, the
    members of the “Aéro Club” now seek in the air, where they indulge in all
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
clip-path: url(resources.svg#c1);

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

Die `clip-path` Eigenschaft wird als eine oder eine Kombination der unten aufgeführten Werte angegeben.

### Werte

- `<clip-source>`
  - : Ein {{cssxref("url_value", "&lt;url&gt;")}}, das auf ein [SVG](/de/docs/Web/SVG) {{SVGElement("clipPath")}} Element verweist.
- {{cssxref("&lt;basic-shape&gt;")}}

  - : Eine Form, deren Größe und Position durch den `<geometry-box>` Wert definiert wird. Wird keine Geometrie-Box angegeben, wird die `border-box` als Referenzkasten verwendet. Eine der folgenden:
    - {{cssxref("basic-shape/inset","inset()")}}
      - : Definiert ein eingestelltes Rechteck.
    - {{cssxref("basic-shape/circle","circle()")}}
      - : Definiert einen Kreis unter Verwendung eines Radius und einer Position.
    - {{cssxref("basic-shape/ellipse","ellipse()")}}
      - : Definiert eine Ellipse unter Verwendung von zwei Radien und einer Position.
    - {{cssxref("basic-shape/polygon","polygon()")}}
      - : Definiert ein Polygon unter Verwendung einer SVG-Füllregel und einer Reihe von Eckpunkten.
    - {{cssxref("basic-shape/path","path()")}}
      - : Definiert eine Form unter Verwendung einer optionalen SVG-Füllregel und einer SVG-Pfaddarstellung.
    - {{cssxref("basic-shape/rect","rect()")}}
      - : Definiert ein Rechteck unter Verwendung der angegebenen Abstände von den Rändern des Referenzkastens.
    - {{cssxref("basic-shape/shape","shape()")}}
      - : Definiert eine Form unter Verwendung einer optionalen SVG-Füllregel und Formenbefehlen für Linien, Kurven und Bögen.
    - {{cssxref("basic-shape/xywh","xywh()")}}
      - : Definiert ein Rechteck unter Verwendung der angegebenen Abstände von den oberen und linken Rändern des Referenzkastens sowie der angegebenen Breite und Höhe des Rechtecks.

- `<geometry-box>`

  - : Wenn in Kombination mit einer `<basic-shape>` angegeben, definiert dieser Wert den Referenzkasten für die Grundform. Wenn es alleine spezifiziert wird, führt es dazu, dass die Ränder des angegebenen Kastens einschließlich einer Eckformaussparung (wie ein {{cssxref("border-radius")}}) den Clipping-Pfad bilden. Der Geometrie-Kasten kann einen der folgenden Werte haben:
    - `margin-box`
      - : Verwendet den [Margin-Kasten](/de/docs/Web/CSS/CSS_shapes/From_box_values#margin-box) als Referenzkasten.
    - `border-box`
      - : Verwendet den [Border-Kasten](/de/docs/Web/CSS/CSS_shapes/From_box_values#border-box) als Referenzkasten.
    - `padding-box`
      - : Verwendet den [Padding-Kasten](/de/docs/Web/CSS/CSS_shapes/From_box_values#padding-box) als Referenzkasten.
    - `content-box`
      - : Verwendet den [Content-Kasten](/de/docs/Web/CSS/CSS_shapes/From_box_values#content-box) als Referenzkasten.
    - `fill-box`
      - : Verwendet den Objekt-Begrenzungskasten als Referenzkasten.
    - `stroke-box`
      - : Verwendet den Linien-Begrenzungskasten als Referenzkasten.
    - `view-box`
      - : Verwendet den nächstgelegenen SVG-Viewport als Referenzkasten. Wenn ein {{SVGAttr("viewBox")}} Attribut für das Element, das den SVG-Viewport erstellt, angegeben ist, wird der Referenzkasten am Ursprung des Koordinatensystems positioniert, das durch das `viewBox` Attribut festgelegt wird, und die Dimension der Größe des Referenzkastens wird auf die Breite und Höhe des `viewBox` Attributs gesetzt.

- `none`
  - : Es wird kein Clipping-Pfad erstellt.

> [!NOTE]
> Ein berechneter Wert, der nicht **`none`** ist, führt zur Erstellung eines neuen [Steuerungskontexts](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context), ähnlich wie CSS {{cssxref("opacity")}} für Werte, die nicht `1` sind.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Formen und Geometriekästen

In diesem Beispiel werden zwei Dreiecke erstellt, indem ein `polygon()` als Clip-Pfad auf {{htmlelement("div")}} Elementen definiert wird. Jedes hat einen einfarbigen Hintergrund und einen dicken {{cssxref("border")}}. Das zweite `<div>` Element hat seinen Referenzkasten auf `content-box` eingestellt:

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

Für das erste Dreieck haben wir keinen Referenzkasten angegeben; daher wird standardmäßig `border-box` verwendet, wobei die 0% und 100% Positionen am Außenrand des Rahmens liegt. Im zweiten Beispiel setzen wir den `<geometry-box>` auf `content-box`, was bedeutet, dass der Referenzkasten für die Grundform der äußere Rand des Inhaltsbereichs ist, der sich innerhalb des Padding-Kastens befindet. Da unser Beispiel kein `padding` hat, ist dies der innere Rand des Rahmens.

### `shape()` gegen `path()` Funktionen

Erweitern wir das vorherige Beispiel und erstellen dasselbe Dreieck mit unterschiedlichen `<basic-shape>` Werten, um zu demonstrieren, wie die {{cssxref("basic-shape/shape", "shape()")}} und {{cssxref("basic-shape/path", "path()")}} Funktionen ebenfalls verwendet werden können, um Clipping-Pfade zu erstellen, wobei `shape()` eine flexiblere Lösung darstellt.

Wir verwenden `path()`, um den Clipping-Pfad des ersten Elements zu definieren, und `shape()` für das zweite, wobei beide den Standard `border-box` als ihren Referenzkasten verwenden:

```css live-sample___shapes2 live-sample___shapes3
div {
  clip-path: path("M100 0 L200 200 L0 200 Z");
}

div:last-of-type {
  clip-path: shape(from 50% 0, line to 100% 100%, line to 0 100%, close);
}
```

Durch die Definition der Form mit der Funktion `shape()` wächst diese mit dem Element, während die `path()` Version dies nicht tut:

{{EmbedLiveSample("shapes2", "", "230")}}

Da die `shape()` Funktion die Verwendung von {{cssxref("percentage")}} Werten (und [benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/--*) ebenfalls) ermöglicht, ist sie robuster.

Wir demonstrieren dies, indem wir die Größe des darunterliegenden Elements erhöhen:

```css live-sample___shapes3
div {
  width: 250px;
  height: 250px;
}
```

{{EmbedLiveSample("shapes3", "", "280")}}

Die Sichtbarkeit oder zumindest die teilweise Sichtbarkeit der vier Rahmenseiten im Clip-Pfad-Beispiel, das durch die `shape()` Funktion definiert wird, liegt darin, dass die Prozentwerte es dem Pfad ermöglichen, mit dem Element zu wachsen. In der `path()` Version wuchs das Element, aber nicht die Form. Das Ergebnis ist, dass die oberen und linken Ränder teilweise sichtbar sind, während die rechten und unteren Ränder herausgeschnitten werden.

### SVG als Clip-Quelle

In diesem Beispiel definieren wir SVG {{svgElement("clipPath")}} Elemente, um sie als `clip-path` Quelle zu verwenden.

#### HTML

Wir inkludieren zwei {{htmlElement("div")}} Elemente und ein `<svg>` Element, das zwei `<clipPath>` Elemente enthält. Ein `<clipPath>` enthält vier {{svgElement("rect")}} Elemente, die zusammen Fensterscheiben definieren, sodass ein Kreuz in der Mitte frei bleibt, und das andere enthält zwei sich kreuzende `<rect>` Elemente.

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

Wir verwenden [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), damit unsere Elemente bei verfügbarem Platz nebeneinander mit einem Abstand dazwischen sitzen. Wir definieren ein {{cssxref("gradient/conic-gradient", "conic-gradient()")}} Hintergrundbild auf beiden `<div>` Elementen, das ein interessantes visuelles Element zum Ausclippen bietet, zusammen mit einem {{cssxref("border")}}.

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

Wir setzen dann die `id` des `<clipPath>` als `<clip-source>`. Wir zentrieren den Text im Beispiel 'cross' vertikal mit {{cssxref("align-content")}}, da andernfalls der Text abgeschnitten würde, wie es im 'window'-Beispiel geschieht.

```css
.window {
  clip-path: url(#window);
}

.cross {
  clip-path: url(#cross);
  align-content: center;
}
```

#### Ergebnisse

{{EmbedLiveSample("SVG as clip source", "", "230")}}

Die Elemente, einschließlich ihres Rahmens und Textes, werden ausgeschnitten, wobei nur die Teile, die die `<clipPath>` Elemente überlappen, auf der Seite gezeichnet werden.

### Die verschiedenen Werttypen

Dieses Beispiel demonstriert die verschiedenen Werte der `clip-path` Eigenschaft, die einen HTML {{htmlelement("img")}} ausschneiden.

#### HTML

Das HTML enthält ein `<img>`, das ausgeschnitten wird, ein sternförmiges `<clipPath>`, und ein {{htmlelement("select")}} Element, um einen Wert der `clip-path` Eigenschaft auszuwählen.

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

Die anfängliche Darstellung enthält den Stern als `clip-path` Quelle.

```css
#clipped {
  margin-bottom: 20px;
  clip-path: url(#star);
}
```

#### JavaScript

Wenn Sie eine neue Option aus dem `<select>` Menü auswählen, aktualisiert ein Ereignishandler den Wert des `clip-path`, der auf das `<img>` gesetzt ist.

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

Wählen Sie verschiedene Optionen, um den `clip-path` Wert zu ändern.

> [!NOTE]
> Obwohl es möglich ist, einen Weg des Textes zu definieren, sehen Sie die {{cssxref("background-clip")}} Eigenschaft, wenn Sie ein Hintergrundbild auf Text und nicht auf eine Form beschränken möchten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("clip-rule")}}
- {{CSSxRef("mask")}}
- {{CSSxRef("filter")}}
- {{cssxref("background-clip")}}
- [Einführung in das CSS Clipping](/de/docs/Web/CSS/CSS_masking/Clipping)
- [CSS Masking](/de/docs/Web/CSS/CSS_masking) Modul
- SVG {{SVGAttr("clip-path")}} Attribut
- [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
