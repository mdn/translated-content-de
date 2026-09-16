---
title: "`clip-path` CSS property"
short-title: clip-path
slug: Web/CSS/Reference/Properties/clip-path
l10n:
  sourceCommit: 880c2c4b113c6fe127ca3ae3603a56ef7a2eb9a6
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`clip-path`** erstellt einen Beschneidungsbereich, der festlegt, welcher Teil eines Elements angezeigt werden soll. Teile innerhalb des Bereichs werden angezeigt, während Teile außerhalb ausgeblendet werden.

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
/* Keyword value */
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

Die Eigenschaft `clip-path` wird als einer oder als Kombination der unten aufgeführten Werte angegeben.

### Werte

- `<clip-source>`
  - : Ein {{cssxref("url_value", "&lt;url&gt;")}}, das auf ein [SVG](/de/docs/Web/SVG)-{{SVGElement("clipPath")}}-Element verweist.
- {{cssxref("basic-shape")}}
  - : Eine Form, deren Größe und Position durch den Wert `<geometry-box>` definiert wird. Wenn keine Geometry Box angegeben ist, wird `border-box` als Referenzbox verwendet. Eine der folgenden:
    - {{cssxref("basic-shape/inset","inset()")}}
      - : Definiert ein eingerücktes Rechteck.
    - {{cssxref("basic-shape/circle","circle()")}}
      - : Definiert einen Kreis anhand eines Radius und einer Position.
    - {{cssxref("basic-shape/ellipse","ellipse()")}}
      - : Definiert eine Ellipse anhand von zwei Radien und einer Position.
    - {{cssxref("basic-shape/polygon","polygon()")}}
      - : Definiert ein Polygon anhand einer SVG-Füllregel und einer Menge von Eckpunkten.
    - {{cssxref("basic-shape/path","path()")}}
      - : Definiert eine Form anhand einer optionalen SVG-Füllregel und einer SVG-Pfaddefinition.
    - {{cssxref("basic-shape/rect","rect()")}}
      - : Definiert ein Rechteck anhand der angegebenen Abstände von den Kanten der Referenzbox.
    - {{cssxref("basic-shape/shape","shape()")}}
      - : Definiert eine Form anhand einer optionalen SVG-Füllregel und Formbefehlen für Linien, Kurven und Bögen.
    - {{cssxref("basic-shape/xywh","xywh()")}}
      - : Definiert ein Rechteck anhand der angegebenen Abstände von der oberen und linken Kante der Referenzbox sowie der angegebenen Breite und Höhe des Rechtecks.

- `<geometry-box>`
  - : Wenn dieser Wert in Kombination mit einer `<basic-shape>` angegeben wird, definiert er die Referenzbox für die Grundform. Wenn er allein angegeben wird, bewirkt er, dass die Kanten der angegebenen Box, einschließlich einer etwaigen Formgebung der Ecken (etwa eines {{cssxref("border-radius")}}), den Beschneidungspfad bilden. Die Geometry Box kann einer der folgenden Werte sein:
    - `margin-box`
      - : Verwendet die [Margin Box](/de/docs/Web/CSS/Guides/Shapes/From_box_values#margin-box) als Referenzbox.
    - `border-box`
      - : Verwendet die [Border Box](/de/docs/Web/CSS/Guides/Shapes/From_box_values#border-box) als Referenzbox.
    - `padding-box`
      - : Verwendet die [Padding Box](/de/docs/Web/CSS/Guides/Shapes/From_box_values#padding-box) als Referenzbox.
    - `content-box`
      - : Verwendet die [Content Box](/de/docs/Web/CSS/Guides/Shapes/From_box_values#content-box) als Referenzbox.
    - `fill-box`
      - : Verwendet die Objektbegrenzungsbox als Referenzbox.
    - `stroke-box`
      - : Verwendet die Begrenzungsbox der Kontur als Referenzbox.
    - `view-box`
      - : Verwendet den nächstgelegenen SVG-Viewport als Referenzbox. Wenn für das Element, das den SVG-Viewport erstellt, ein Attribut {{SVGAttr("viewBox")}} angegeben ist, wird die Referenzbox am Ursprung des durch das Attribut `viewBox` eingerichteten Koordinatensystems positioniert, und die Größe der Referenzbox wird auf die Breiten- und Höhenwerte des Attributs `viewBox` gesetzt.

- `none`
  - : Es wird kein Beschneidungspfad erstellt.

> [!NOTE]
> Ein berechneter Wert ungleich **`none`** führt zur Erstellung eines neuen [Stacking Context](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context), genauso wie CSS {{cssxref("opacity")}} dies bei Werten ungleich `1` tut.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Formen und Geometry Boxes

In diesem Beispiel werden zwei Dreiecke erstellt, indem ein `polygon()` als Beschneidungspfad für {{htmlelement("div")}}-Elemente definiert wird. Jedes hat einen einfarbigen Hintergrund und einen dicken {{cssxref("border")}}. Für das zweite `<div>`-Element ist die Referenzbox auf `content-box` gesetzt:

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

Für das erste Dreieck wurde keine Referenzbox angegeben; daher ist standardmäßig `border-box` festgelegt, wobei sich die Positionen 0 % und 100 % an der Außenkante des Rahmens befinden. Im zweiten Beispiel setzen wir `<geometry-box>` auf `content-box`. Das bedeutet, dass die Referenzbox für die Grundform die Außenkante des Inhaltsbereichs ist, die innerhalb der Padding Box liegt. Da unser Beispiel kein `padding` hat, entspricht dies der Innenkante des Rahmens.

### Funktionen `shape()` gegenüber `path()`

Aufbauend auf dem vorherigen Beispiel erstellen wir dasselbe Dreieck mit unterschiedlichen `<basic-shape>`-Werten. Dies zeigt, wie die Funktionen {{cssxref("basic-shape/shape", "shape()")}} und {{cssxref("basic-shape/path", "path()")}} ebenfalls zur Erstellung von Beschneidungspfaden verwendet werden können, wobei `shape()` die flexiblere Lösung ist.

Wir verwenden `path()`, um den Beschneidungspfad des ersten Elements zu definieren, und `shape()` für das zweite. Beide verwenden die standardmäßige `border-box` als Referenzbox:

```css live-sample___shapes2 live-sample___shapes3
div {
  clip-path: path("M100 0 L200 200 L0 200 Z");
}

div:last-of-type {
  clip-path: shape(from 50% 0, line to 100% 100%, line to 0 100%, close);
}
```

Dadurch wächst der mit der Funktion shape() definierte Pfad mit dem Element, während dies bei der path()-Variante nicht der Fall ist:

{{EmbedLiveSample("shapes2", "", "230")}}

Da die Funktion `shape()` die Verwendung von {{cssxref("percentage")}}-Werten (und auch [benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*)) ermöglicht, ist sie robuster.

Dies wird demonstriert, indem die Größe des zugrunde liegenden Elements vergrößert wird:

```css live-sample___shapes3
div {
  width: 250px;
  height: 250px;
}
```

{{EmbedLiveSample("shapes3", "", "280")}}

Die Sichtbarkeit, oder zumindest teilweise Sichtbarkeit, der vier Rahmenseiten im durch die Funktion `shape()` definierten Beschneidungspfadbeispiel ist darauf zurückzuführen, dass die Prozentwerte es dem Pfad ermöglichen, mit dem Element zu wachsen. In der `path()`-Variante wuchs das Element, nicht jedoch die Form. Daher sind die oberen und linken Rahmen teilweise sichtbar, während die rechten und unteren Rahmen abgeschnitten werden.

### SVG als Beschneidungsquelle

In diesem Beispiel definieren wir SVG-{{svgElement("clipPath")}}-Elemente zur Verwendung als `clip-path`-Quelle.

#### HTML

Wir fügen zwei {{htmlElement("div")}}-Elemente und ein `<svg>`-Element ein, das zwei `<clipPath>`-Elemente enthält. Ein `<clipPath>` enthält vier {{svgElement("rect")}}-Elemente, die zusammen Fensterscheiben definieren und in der Mitte ein leeres Kreuz lassen; das andere enthält zwei sich kreuzende `<rect>`-Elemente.

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

Wir verwenden [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout), damit unsere Elemente nebeneinander mit einem Abstand zwischen ihnen angeordnet werden können, sofern ausreichend Platz verfügbar ist. Wir definieren für beide `<div>`-Elemente ein {{cssxref("gradient/conic-gradient", "conic-gradient()")}}-Hintergrundbild, das zusammen mit einem {{cssxref("border")}} ein interessantes zu beschneidendes Bild liefert.

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

Anschließend setzen wir die `id` des `<clipPath>` als `<clip-source>`. Wir zentrieren den Text im Beispiel `cross` mithilfe von {{cssxref("align-content")}} vertikal, da der Text andernfalls abgeschnitten würde, wie es im Beispiel `window` geschieht.

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

Die Elemente, einschließlich ihres Rahmens und Texts, werden beschnitten; nur die Teile, die die `<clipPath>`-Elemente überlappen, werden auf der Seite gezeichnet.

### Die verschiedenen Werttypen

Dieses Beispiel veranschaulicht die verschiedenen Werte der Eigenschaft `clip-path`, die ein HTML-{{htmlelement("img")}} beschneiden.

#### HTML

Das HTML enthält ein `<img>`, das beschnitten wird, ein sternförmiges `<clipPath>` und ein {{htmlelement("select")}}-Element zur Auswahl eines Eigenschaftswerts für `clip-path`.

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

Das anfängliche Rendering verwendet den Stern als `clip-path`-Quelle.

```css
#clipped {
  margin-bottom: 20px;
  clip-path: url("#star");
}
```

#### JavaScript

Wenn Sie im Menü `<select>` eine neue Option auswählen, aktualisiert ein Event-Handler den Wert von `clip-path`, der für das `<img>` festgelegt ist.

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

Wählen Sie verschiedene Optionen aus, um den Wert von `clip-path` zu ändern.

> [!NOTE]
> Obwohl es möglich ist, einen Pfad aus Text zu definieren, lesen Sie die Eigenschaft {{cssxref("background-clip")}}, wenn Sie ein Hintergrundbild statt auf eine Form auf Text beschneiden möchten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("clip-rule")}}
- {{CSSxRef("mask")}}
- {{CSSxRef("filter")}}
- {{cssxref("background-clip")}}
- [Einführung in das CSS-Beschneiden](/de/docs/Web/CSS/Guides/Masking/Clipping)
- [CSS-Masking](/de/docs/Web/CSS/Guides/Masking)-Modul
- SVG-Attribut {{SVGAttr("clip-path")}}
- [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
