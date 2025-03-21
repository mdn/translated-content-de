---
title: clip-path
slug: Web/CSS/clip-path
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{CSSRef}}

Die **`clip-path`** [CSS](/de/docs/Web/CSS) Eigenschaft erstellt eine Clip-Region, die festlegt, welcher Teil eines Elements angezeigt werden soll. Teile, die sich innerhalb der Region befinden, werden angezeigt, während diejenigen außerhalb verborgen sind.

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

Die `clip-path` Eigenschaft wird als einer oder eine Kombination der unten aufgeführten Werte angegeben.

### Werte

- `<clip-source>`
  - : Ein {{cssxref("url_value", "&lt;url&gt;")}}, das auf ein [SVG](/de/docs/Web/SVG) {{SVGElement("clipPath")}} Element verweist.
- {{cssxref("&lt;basic-shape&gt;")}}

  - : Eine Form, deren Größe und Position durch den `<geometry-box>` Wert definiert ist. Wenn keine Geometrie-Box angegeben ist, wird die `border-box` als Referenz-Box verwendet. Eine der folgenden:

    - {{cssxref("basic-shape/inset","inset()")}}
      - : Definiert ein eingezogenes Rechteck.
    - {{cssxref("basic-shape/circle","circle()")}}
      - : Definiert einen Kreis unter Verwendung eines Radius und einer Position.
    - {{cssxref("basic-shape/ellipse","ellipse()")}}
      - : Definiert eine Ellipse unter Verwendung von zwei Radien und einer Position.
    - {{cssxref("basic-shape/polygon","polygon()")}}
      - : Definiert ein Polygon unter Verwendung einer SVG-Füllregel und einer Reihe von Eckpunkten.
    - {{cssxref("basic-shape/path","path()")}}
      - : Definiert eine Form unter Verwendung einer optionalen SVG-Füllregel und einer SVG-Pfaddeffinition.
    - {{cssxref("basic-shape/rect","rect()")}}
      - : Definiert ein Rechteck unter Verwendung der angegebenen Abstände von den Rändern der Referenz-Box.
    - {{cssxref("basic-shape/shape","shape()")}}
      - : Definiert eine Form unter Verwendung einer optionalen SVG-Füllregel und Formbefehlen für Linien, Kurven und Bögen.
    - {{cssxref("basic-shape/xywh","xywh()")}}
      - : Definiert ein Rechteck unter Verwendung der angegebenen Abstände von den oberen und linken Rändern der Referenz-Box sowie der angegebenen Breite und Höhe des Rechtecks.

- `<geometry-box>`

  - : Falls in Kombination mit einer `<basic-shape>` angegeben, definiert dieser Wert die Referenz-Box für die Grundform. Wenn es alleine angegeben wird, bewirkt es, dass die Kanten der angegebenen Box, einschließlich jeglicher Eckenformen (wie ein {{cssxref("border-radius")}}), der Clip-Pfad sind. Die Geometrie-Box kann einen der folgenden Werte annehmen:

    - `margin-box`
      - : Verwendet die [margin box](/de/docs/Web/CSS/CSS_shapes/From_box_values#margin-box) als Referenz-Box.
    - `border-box`
      - : Verwendet die [border box](/de/docs/Web/CSS/CSS_shapes/From_box_values#border-box) als Referenz-Box.
    - `padding-box`
      - : Verwendet die [padding box](/de/docs/Web/CSS/CSS_shapes/From_box_values#padding-box) als Referenz-Box.
    - `content-box`
      - : Verwendet die [content box](/de/docs/Web/CSS/CSS_shapes/From_box_values#content-box) als Referenz-Box.
    - `fill-box`
      - : Verwendet die Umrandungs-Box des Objekts als Referenz-Box.
    - `stroke-box`
      - : Verwendet die Umrandungs-Box der Linie als Referenz-Box.
    - `view-box`
      - : Verwendet den nächstgelegenen SVG-Viewport als Referenz-Box. Wenn ein {{SVGAttr("viewBox")}} Attribut für das Element, das den SVG-Viewport erstellt, angegeben ist, wird die Referenz-Box am Ursprung des Koordinatensystems positioniert, das durch das `viewBox` Attribut erstellt wird, und die Dimension der Größe der Referenz-Box wird auf die Breiten- und Höhenwerte des `viewBox` Attributs gesetzt.

- `none`
  - : Es wird kein Clip-Pfad erstellt.

> [!NOTE]
> Ein berechneter Wert ungleich **`none`** führt zur Erstellung eines neuen [Stapelkontexts](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context), genauso wie CSS {{cssxref("opacity")}} für Werte ungleich `1`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich von HTML und SVG

```html hidden
<svg class="defs">
  <defs>
    <clipPath id="myPath" clipPathUnits="objectBoundingBox">
      <path
        d="M0.5,1 C0.5,1,0,0.7,0,0.3 A0.25,0.25,1,1,1,0.5,0.3 A0.25,0.25,1,1,1,1,0.3 C1,0.7,0.5,1,0.5,1 Z" />
    </clipPath>
  </defs>
</svg>

<div class="grid">
  <div class="col">
    <div class="note">clip-path: none</div>
    <div class="row">
      <div class="cell">
        <span>HTML</span>
        <div class="container">
          <p class="none">I LOVE<br /><em>clipping</em></p>
        </div>
      </div>
      <div class="cell">
        <span>SVG</span>
        <div class="container view-box">
          <svg viewBox="0 0 192 192">
            <g class="none">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">I LOVE</text>
              <text x="96" y="109" class="em">clipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div class="note">
      clip-path: url(#myPath)<br /><br />
      Assuming the following clipPath definition:
      <pre>
&lt;svg&gt;
  &lt;clipPath id="myPath" clipPathUnits="objectBoundingBox"&gt;
    &lt;path d="M0.5,1
      C 0.5,1,0,0.7,0,0.3
      A 0.25,0.25,1,1,1,0.5,0.3
      A 0.25,0.25,1,1,1,1,0.3
      C 1,0.7,0.5,1,0.5,1 Z" /&gt;
  &lt;/clipPath&gt;
&lt;/svg&gt;</pre
      >
    </div>
    <div class="row">
      <div class="cell">
        <span>HTML</span>
        <div class="container">
          <p class="svg">I LOVE<br /><em>clipping</em></p>
        </div>
      </div>
      <div class="cell">
        <span>SVG</span>
        <div class="container view-box">
          <svg viewBox="0 0 192 192">
            <g class="svg">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">I LOVE</text>
              <text x="96" y="109" class="em">clipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div class="note">
      clip-path: path('M15,45 A30,30,0,0,1,75,45 A30,30,0,0,1,135,45
      Q135,90,75,130 Q15,90,15,45 Z')
    </div>
    <div class="row">
      <div class="cell">
        <span>HTML</span>
        <div class="container">
          <p class="svg2">I LOVE<br /><em>clipping</em></p>
        </div>
      </div>
      <div class="cell">
        <span>SVG</span>
        <div class="container view-box">
          <svg viewBox="0 0 192 192">
            <g class="svg2">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">I LOVE</text>
              <text x="96" y="109" class="em">clipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div class="note">clip-path: circle(25%)</div>
    <div class="row">
      <div class="cell">
        <span>HTML</span>
        <div class="container">
          <p class="shape1">I LOVE<br /><em>clipping</em></p>
        </div>
      </div>
      <div class="cell">
        <span>SVG</span>
        <div class="container view-box">
          <svg viewBox="0 0 192 192">
            <g class="shape1">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">I LOVE</text>
              <text x="96" y="109" class="em">clipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div class="note">clip-path: circle(25% at 25% 25%)</div>
    <div class="row">
      <div class="cell">
        <span>HTML</span>
        <div class="container">
          <p class="shape2">I LOVE<br /><em>clipping</em></p>
        </div>
      </div>
      <div class="cell">
        <span>SVG</span>
        <div class="container view-box">
          <svg viewBox="0 0 192 192">
            <g class="shape2">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">I LOVE</text>
              <text x="96" y="109" class="em">clipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div class="note">clip-path: fill-box circle(25% at 25% 25%)</div>
    <div class="row">
      <div class="cell">
        <span>HTML</span>
        <div class="container">
          <p class="shape3">I LOVE<br /><em>clipping</em></p>
        </div>
      </div>
      <div class="cell">
        <span>SVG</span>
        <div class="container view-box">
          <svg viewBox="0 0 192 192">
            <g class="shape3">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">I LOVE</text>
              <text x="96" y="109" class="em">clipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div class="note">clip-path: stroke-box circle(25% at 25% 25%)</div>
    <div class="row">
      <div class="cell">
        <span>HTML</span>
        <div class="container">
          <p class="shape4">I LOVE<br /><em>clipping</em></p>
        </div>
      </div>
      <div class="cell">
        <span>SVG</span>
        <div class="container view-box">
          <svg viewBox="0 0 192 192">
            <g class="shape4">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">I LOVE</text>
              <text x="96" y="109" class="em">clipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div class="note">clip-path: view-box circle(25% at 25% 25%)</div>
    <div class="row">
      <div class="cell">
        <span>HTML</span>
        <div class="container">
          <p class="shape5">I LOVE<br /><em>clipping</em></p>
        </div>
      </div>
      <div class="cell">
        <span>SVG</span>
        <div class="container view-box">
          <svg viewBox="0 0 192 192">
            <g class="shape5">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">I LOVE</text>
              <text x="96" y="109" class="em">clipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div class="note">clip-path: margin-box circle(25% at 25% 25%)</div>
    <div class="row">
      <div class="cell">
        <span>HTML</span>
        <div class="container">
          <p class="shape6">I LOVE<br /><em>clipping</em></p>
        </div>
      </div>
      <div class="cell">
        <span>SVG</span>
        <div class="container view-box">
          <svg viewBox="0 0 192 192">
            <g class="shape6">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">I LOVE</text>
              <text x="96" y="109" class="em">clipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div class="note">clip-path: border-box circle(25% at 25% 25%)</div>
    <div class="row">
      <div class="cell">
        <span>HTML</span>
        <div class="container">
          <p class="shape7">I LOVE<br /><em>clipping</em></p>
        </div>
      </div>
      <div class="cell">
        <span>SVG</span>
        <div class="container view-box">
          <svg viewBox="0 0 192 192">
            <g class="shape7">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">I LOVE</text>
              <text x="96" y="109" class="em">clipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div class="note">clip-path: padding-box circle(25% at 25% 25%)</div>
    <div class="row">
      <div class="cell">
        <span>HTML</span>
        <div class="container">
          <p class="shape8">I LOVE<br /><em>clipping</em></p>
        </div>
      </div>
      <div class="cell">
        <span>SVG</span>
        <div class="container view-box">
          <svg viewBox="0 0 192 192">
            <g class="shape8">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">I LOVE</text>
              <text x="96" y="109" class="em">clipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div class="note">clip-path: content-box circle(25% at 25% 25%)</div>
    <div class="row">
      <div class="cell">
        <span>HTML</span>
        <div class="container">
          <p class="shape9">I LOVE<br /><em>clipping</em></p>
        </div>
      </div>
      <div class="cell">
        <span>SVG</span>
        <div class="container view-box">
          <svg viewBox="0 0 192 192">
            <g class="shape9">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">I LOVE</text>
              <text x="96" y="109" class="em">clipping</text>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </div>
</div>
```

```css
html,
body {
  height: 100%;
  box-sizing: border-box;
  background: #eee;
}

.grid {
  width: 100%;
  height: 100%;
  display: flex;
  font: 1em monospace;
}

.row {
  display: flex;
  flex: 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
}

.col {
  flex: 1 auto;
}

.cell {
  margin: 0.5em;
  padding: 0.5em;
  background-color: #fff;
  overflow: hidden;
  text-align: center;
  flex: 1;
}

.note {
  background: #fff3d4;
  padding: 1em;
  margin: 0.5em 0.5em 0;
  font: 0.8em sans-serif;
  text-align: left;
  white-space: nowrap;
}

.note + .row .cell {
  margin-top: 0;
}

.container {
  display: inline-block;
  border: 1px dotted grey;
  position: relative;
}

.container::before {
  content: "margin";
  position: absolute;
  top: 2px;
  left: 2px;
  font: italic 0.6em sans-serif;
}

.view-box {
  box-shadow:
    1rem 1rem 0 #efefef inset,
    -1rem -1rem 0 #efefef inset;
}

.container.view-box::after {
  content: "view-box";
  position: absolute;
  left: 1.1rem;
  top: 1.1rem;
  font: italic 0.6em sans-serif;
}

.cell span {
  display: block;
  margin-bottom: 0.5em;
}

p {
  font-family: sans-serif;
  background: #000;
  color: pink;
  margin: 2em;
  padding: 3em 1em;
  border: 1em solid pink;
  width: 6em;
}

.none {
  clip-path: none;
}
.svg {
  clip-path: url(#myPath);
}
.svg2 {
  clip-path: path(
    "M15,45 A30,30,0,0,1,75,45 A30,30,0,0,1,135,45 Q135,90,75,130 Q15,90,15,45 Z"
  );
}
.shape1 {
  clip-path: circle(25%);
}
.shape2 {
  clip-path: circle(25% at 25% 25%);
}
.shape3 {
  clip-path: fill-box circle(25% at 25% 25%);
}
.shape4 {
  clip-path: stroke-box circle(25% at 25% 25%);
}
.shape5 {
  clip-path: view-box circle(25% at 25% 25%);
}
.shape6 {
  clip-path: margin-box circle(25% at 25% 25%);
}
.shape7 {
  clip-path: border-box circle(25% at 25% 25%);
}
.shape8 {
  clip-path: padding-box circle(25% at 25% 25%);
}
.shape9 {
  clip-path: content-box circle(25% at 25% 25%);
}

.defs {
  width: 0;
  height: 0;
  margin: 0;
}

pre {
  margin-bottom: 0;
}

svg {
  margin: 1em;
  font-family: sans-serif;
  width: 192px;
  height: 192px;
}

svg rect {
  stroke: pink;
  stroke-width: 16px;
}

svg text {
  fill: pink;
  text-anchor: middle;
}

svg text.em {
  font-style: italic;
}
```

{{EmbedLiveSample("Comparison_of_HTML_and_SVG", "100%", "800px")}}

### Komplettes Beispiel

#### HTML

```html
<img id="clipped" src="mdn.svg" alt="MDN logo" />
<svg height="0" width="0">
  <defs>
    <clipPath id="cross">
      <rect y="110" x="137" width="90" height="90" />
      <rect x="0" y="110" width="90" height="90" />
      <rect x="137" y="0" width="90" height="90" />
      <rect x="0" y="0" width="90" height="90" />
    </clipPath>
  </defs>
</svg>

<select id="clipPath">
  <option value="none">none</option>
  <option value="circle(100px at 110px 100px)">circle</option>
  <option value="url(#cross)" selected>cross</option>
  <option value="inset(20px round 20px)">inset</option>
  <option value="rect(10px 10px 180px 220px round 20px)">rect</option>
  <option value="xywh(0 20% 90% 67% round 0 0 5% 5px)">xywh</option>
  <option value="path('M 0 200 L 0,110 A 110,90 0,0,1 240,100 L 200 340 z')">
    path
  </option>
</select>
```

#### CSS

```css
#clipped {
  margin-bottom: 20px;
  clip-path: url(#cross);
}
```

```js hidden
const clipPathSelect = document.getElementById("clipPath");
clipPathSelect.addEventListener("change", (evt) => {
  document.getElementById("clipped").style.clipPath = evt.target.value;
});
```

#### Ergebnis

{{EmbedLiveSample("Complete_example", 230, 250)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("clip-rule")}}
- {{CSSxRef("mask")}}
- {{CSSxRef("filter")}}
- SVG {{SVGAttr("clip-path")}} Attribut
- [Formen beim Clipping und Masking – und wie man sie verwendet](https://hacks.mozilla.org/2017/06/css-shapes-clipping-and-masking/)
- [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
