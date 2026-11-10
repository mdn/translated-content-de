---
title: "`clip-path` CSS property"
short-title: clip-path
slug: Web/CSS/Reference/Properties/clip-path
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`clip-path`** erstellt einen Beschneidungsbereich, der festlegt, welcher Teil eines Elements angezeigt wird. Teile innerhalb des Bereichs werden angezeigt, Teile außerhalb werden ausgeblendet.

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

Die Eigenschaft `clip-path` wird durch einen oder eine Kombination der unten aufgeführten Werte angegeben.

### Werte

- `<clip-source>`
  - : Ein {{cssxref("url_value", "&lt;url&gt;")}}, der auf ein [SVG](/de/docs/Web/SVG)-Element {{SVGElement("clipPath")}} verweist.
- {{cssxref("basic-shape")}}
  - : Eine Form, deren Größe und Position durch den Wert `<geometry-box>` festgelegt werden. Wenn keine Geometry-Box angegeben ist, wird `border-box` als Referenzbox verwendet. Einer der folgenden Werte:
    - {{cssxref("basic-shape/inset","inset()")}}
      - : Definiert ein nach innen versetztes Rechteck.
    - {{cssxref("basic-shape/circle","circle()")}}
      - : Definiert einen Kreis anhand eines Radius und einer Position.
    - {{cssxref("basic-shape/ellipse","ellipse()")}}
      - : Definiert eine Ellipse anhand zweier Radien und einer Position.
    - {{cssxref("basic-shape/polygon","polygon()")}}
      - : Definiert ein Polygon anhand einer SVG-Füllregel und einer Reihe von Eckpunkten.
    - {{cssxref("basic-shape/path","path()")}}
      - : Definiert eine Form anhand einer optionalen SVG-Füllregel und einer SVG-Pfaddefinition.
    - {{cssxref("basic-shape/rect","rect()")}}
      - : Definiert ein Rechteck anhand der angegebenen Abstände zu den Rändern der Referenzbox.
    - {{cssxref("basic-shape/shape","shape()")}}
      - : Definiert eine Form anhand einer optionalen SVG-Füllregel und Formbefehlen für Linien, Kurven und Bögen.
    - {{cssxref("basic-shape/xywh","xywh()")}}
      - : Definiert ein Rechteck anhand der angegebenen Abstände zum oberen und linken Rand der Referenzbox sowie der angegebenen Breite und Höhe des Rechtecks.

- `<geometry-box>`
  - : In Kombination mit einem `<basic-shape>` definiert dieser Wert die Referenzbox für die Grundform. Wird er allein angegeben, bilden die Ränder der angegebenen Box einschließlich etwaiger abgerundeter Ecken (etwa durch {{cssxref("border-radius")}}) den Beschneidungspfad. Als Geometry-Box kann einer der folgenden Werte verwendet werden:
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
      - : Verwendet die Begrenzungsbox der Kontur als Referenzbox.
    - `view-box`
      - : Verwendet den nächstgelegenen SVG-Viewport als Referenzbox. Wenn für das Element, das den SVG-Viewport erstellt, ein Attribut {{SVGAttr("viewBox")}} angegeben ist, wird die Referenzbox am Ursprung des durch das Attribut `viewBox` festgelegten Koordinatensystems positioniert. Ihre Breite und Höhe entsprechen den Breiten- und Höhenwerten des Attributs `viewBox`.

- `none`
  - : Es wird kein Beschneidungspfad erstellt.

> [!NOTE]
> Ein berechneter Wert ungleich **`none`** erzeugt einen neuen [Stapelkontext](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context), genauso wie CSS {{cssxref("opacity")}} bei Werten ungleich `1`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Formen und Geometry-Boxen

In diesem Beispiel werden zwei Dreiecke erstellt, indem `polygon()` als Beschneidungspfad für {{htmlelement("div")}}-Elemente definiert wird. Beide haben einen einfarbigen Hintergrund und einen breiten {{cssxref("border")}}. Beim zweiten `<div>`-Element ist `content-box` als Referenzbox festgelegt:

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

#### Ergebnis

{{EmbedLiveSample("shapes1", "", "230")}}

Für das erste Dreieck haben wir keine Referenzbox angegeben. Daher wird standardmäßig `border-box` verwendet, wobei die Positionen 0 % und 100 % am äußeren Rand der Umrandung liegen. Im zweiten Beispiel haben wir `<geometry-box>` auf `content-box` gesetzt. Damit ist der äußere Rand des Inhaltsbereichs die Referenzbox für die Grundform; er liegt innerhalb der Padding-Box. Da in unserem Beispiel kein `padding` festgelegt ist, entspricht dies dem inneren Rand der Umrandung.

### Funktionen `shape()` und `path()` im Vergleich

Aufbauend auf dem vorherigen Beispiel erstellen wir dasselbe Dreieck mit unterschiedlichen `<basic-shape>`-Werten. Damit zeigen wir, dass sich auch die Funktionen {{cssxref("basic-shape/shape", "shape()")}} und {{cssxref("basic-shape/path", "path()")}} zum Erstellen von Beschneidungspfaden verwenden lassen, wobei `shape()` die flexiblere Lösung ist.

Für den Beschneidungspfad des ersten Elements verwenden wir `path()`, für den des zweiten `shape()`. Beide verwenden die standardmäßige `border-box` als Referenzbox:

```css live-sample___shapes2 live-sample___shapes3
div {
  clip-path: path("M100 0 L200 200 L0 200 Z");
}

div:last-of-type {
  clip-path: shape(from 50% 0, line to 100% 100%, line to 0 100%, close);
}
```

Dadurch wächst der mit der Funktion `shape()` definierte Pfad mit dem Element mit, während der mit `path()` definierte Pfad dies nicht tut:

{{EmbedLiveSample("shapes2", "", "230")}}

Da die Funktion `shape()` {{cssxref("percentage")}}-Werte (und auch [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*)) unterstützt, ist sie robuster.

Wir veranschaulichen dies, indem wir das zugrunde liegende Element vergrößern:

```css live-sample___shapes3
div {
  width: 250px;
  height: 250px;
}
```

{{EmbedLiveSample("shapes3", "", "280")}}

Dass im mit der Funktion `shape()` definierten Beschneidungspfad alle vier Seiten der Umrandung zumindest teilweise sichtbar sind, liegt an den Prozentwerten: Sie ermöglichen es dem Pfad, mit dem Element mitzuwachsen. In der `path()`-Variante ist das Element gewachsen, die Form jedoch nicht. Deshalb sind die obere und die linke Umrandung teilweise sichtbar, während die rechte und die untere abgeschnitten werden.

### SVG als Quelle für den Beschneidungspfad

In diesem Beispiel definieren wir SVG-Elemente {{svgElement("clipPath")}}, die als Quelle für `clip-path` dienen.

#### HTML

Wir verwenden zwei {{htmlElement("div")}}-Elemente und ein `<svg>`-Element, das zwei `<clipPath>`-Elemente enthält. Ein `<clipPath>` enthält vier {{svgElement("rect")}}-Elemente, die zusammen Fensterscheiben bilden und in der Mitte eine kreuzförmige freie Fläche lassen. Der andere enthält zwei sich kreuzende `<rect>`-Elemente.

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

Wir verwenden [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout), damit unsere Elemente bei ausreichend Platz mit einem Abstand nebeneinander stehen. Für beide `<div>`-Elemente definieren wir ein {{cssxref("gradient/conic-gradient", "conic-gradient()")}}-Hintergrundbild, das einen interessanten visuellen Effekt für die Beschneidung bietet, sowie einen {{cssxref("border")}}.

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

Anschließend verwenden wir die `id` des jeweiligen `<clipPath>` als `<clip-source>`. Im `cross`-Beispiel zentrieren wir den Text mit {{cssxref("align-content")}} vertikal, da er sonst wie im `window`-Beispiel abgeschnitten würde.

```css
.window {
  clip-path: url("#window");
}

.cross {
  clip-path: url("#cross");
  align-content: center;
}
```

#### Ergebnis

{{EmbedLiveSample("SVG as clip source", "", "230")}}

Die Elemente werden einschließlich ihrer Umrandung und ihres Textes beschnitten. Auf der Seite werden nur die Teile dargestellt, die sich mit den `<clipPath>`-Elementen überschneiden.

### Die verschiedenen Werttypen

Dieses Beispiel zeigt, wie die verschiedenen Werte der Eigenschaft `clip-path` ein HTML-Element {{htmlelement("img")}} beschneiden.

#### HTML

Der HTML-Code enthält ein `<img>`, das beschnitten wird, einen sternförmigen `<clipPath>` und ein {{htmlelement("select")}}-Element, mit dem Sie einen Wert für die Eigenschaft `clip-path` auswählen können.

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

Bei der anfänglichen Darstellung dient der Stern als Quelle für `clip-path`.

```css
#clipped {
  margin-bottom: 20px;
  clip-path: url("#star");
}
```

#### JavaScript

Wenn Sie im `<select>`-Menü eine neue Option auswählen, aktualisiert ein Event-Handler den für das `<img>` festgelegten Wert von `clip-path`.

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

{{EmbedLiveSample("the_various_value_types", 230, 300)}}

Wählen Sie verschiedene Optionen aus, um den Wert von `clip-path` zu ändern.

> [!NOTE]
> Es ist zwar möglich, einen Pfad aus Text zu definieren. Wenn Sie jedoch ein Hintergrundbild auf Text statt auf eine Form beschneiden möchten, verwenden Sie die Eigenschaft {{cssxref("background-clip")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("clip-rule")}}
- {{CSSxRef("mask")}}
- {{CSSxRef("filter")}}
- {{cssxref("background-clip")}}
- [Einführung in die CSS-Beschneidung](/de/docs/Web/CSS/Guides/Masking/Clipping)
- Modul [CSS-Maskierung](/de/docs/Web/CSS/Guides/Masking)
- SVG-Attribut {{SVGAttr("clip-path")}}
- [SVG-Effekte auf HTML-Inhalte anwenden](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
