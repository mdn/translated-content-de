---
title: offset-path
slug: Web/CSS/Reference/Properties/offset-path
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`offset-path`** [CSS](/de/docs/Web/CSS) Eigenschaft legt einen Pfad fest, dem ein Element folgen soll, und bestimmt die Positionierung des Elements innerhalb des Pfad-Elterncontainers oder des SVG-Koordinatensystems. Der Pfad ist eine Linie, eine Kurve oder eine geometrische Form, entlang der das Element positioniert wird oder sich bewegt.

Die Eigenschaft `offset-path` wird in Kombination mit den Eigenschaften {{cssxref("offset-distance")}}, {{cssxref("offset-rotate")}} und {{cssxref("offset-anchor")}} verwendet, um die Position und Orientierung des Elements entlang eines Pfades zu steuern.

{{InteractiveExample("CSS Demo: offset-path")}}

```css interactive-example-choice
offset-path: path("M-70,-40 C-70,70 70,70 70,-40");
```

```css interactive-example-choice
offset-path: path("M0,0 L60,70 L-60,30z");
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element"></div>
  <button id="playback" type="button">Play</button>
</section>
```

```css interactive-example
#example-element {
  width: 24px;
  height: 24px;
  background: #2bc4a2;
  animation: distance 8000ms infinite linear;
  animation-play-state: paused;
  clip-path: polygon(0% 0%, 70% 0%, 100% 50%, 70% 100%, 0% 100%, 30% 50%);
}

#example-element.running {
  animation-play-state: running;
}

#playback {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1em;
}

@keyframes distance {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}

#default-example {
  position: relative;
}
```

```js interactive-example
const example = document.getElementById("example-element");
const button = document.getElementById("playback");

button.addEventListener("click", () => {
  if (example.classList.contains("running")) {
    example.classList.remove("running");
    button.textContent = "Play";
  } else {
    example.classList.add("running");
    button.textContent = "Pause";
  }
});
```

## Syntax

```css
/* Default */
offset-path: none;

/* Line segment */
offset-path: ray(45deg closest-side contain);
offset-path: ray(contain 150deg at center center);
offset-path: ray(45deg);

/* URL */
offset-path: url("#my-circle");

/* Basic shape */
offset-path: circle(50% at 25% 25%);
offset-path: ellipse(50% 50% at 25% 25%);
offset-path: inset(50% 50% 50% 50%);
offset-path: polygon(30% 0%, 70% 0%, 100% 50%, 30% 100%, 0% 70%, 0% 30%);
offset-path: path("M 0,200 Q 200,200 260,80 Q 290,20 400,0 Q 300,100 400,200");
offset-path: rect(5px 5px 160px 145px round 20%);
offset-path: xywh(0 5px 100% 75% round 15% 0);

/* Coordinate box */
offset-path: content-box;
offset-path: padding-box;
offset-path: border-box;
offset-path: fill-box;
offset-path: stroke-box;
offset-path: view-box;

/* Global values */
offset-path: inherit;
offset-path: initial;
offset-path: revert;
offset-path: revert-layer;
offset-path: unset;
```

### Werte

Die `offset-path`-Eigenschaft nimmt als Wert einen `<offset-path>` Wert, einen [`<coord-box>`](/de/docs/Web/CSS/Reference/Values/box-edge#values) Wert oder beides, oder das Schlüsselwort `none` an. Der `<offset-path>` Wert ist eine {{cssxref("ray","ray()")}} Funktion, ein {{cssxref("url_value", "&lt;url&gt;")}} Wert oder ein [`<basic-shape>`](/de/docs/Web/CSS/Reference/Values/basic-shape) Wert.

- `none`
  - : Gibt an, dass das Element keinem Offset-Pfad folgt. Der `none` Wert entspricht dem Fall, dass das Element keine [Offset-Transformation](/de/docs/Web/CSS/Reference/Properties/offset) hat. Die Bewegung des Elements wird in diesem Fall durch seine Standardpositions-Eigenschaften, wie {{cssxref("top")}} und {{cssxref("left")}}, statt durch einen Offset-Pfad bestimmt. Dies ist der Standardwert.

- `<offset-path>`
  - : Eine `ray()` Funktion, ein `<url>` Wert oder ein `<basic-shape>` Wert, der den geometrischen Offset-Pfad angibt. Falls nicht angegeben, ist die Pfadform des `<coord-box>` Werts `inset(0 round X)`, wobei `X` der Wert von {{cssxref("border-radius")}} des Elements ist, das den [Enthaltenden Block](/de/docs/Web/CSS/Guides/Display/Containing_block) festlegt.
    - {{cssxref("ray","ray()")}}
      - : Definiert eine Linie, die von einer festgelegten Position aus startet, eine festgelegte Länge hat und in einem bestimmten Winkel verläuft. Die Funktion `ray()` akzeptiert bis zu vier Parameter – einen {{CSSxRef("angle")}}, einen optionalen Größenwert, das optionale Schlüsselwort `contain` und einen optionalen `at <position>`.

    - {{cssxref("url_value", "&lt;url&gt;")}}
      - : Gibt die ID eines [SVG-Formelements](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Basic_shapes) an. Der Pfad ist die Form des SVG-{{SVGElement("circle")}}, {{SVGElement("ellipse")}}, {{SVGElement("line")}}, {{SVGElement("path")}}, {{SVGElement("polygon")}}, {{SVGElement("polyline")}} oder {{SVGElement("rect")}} Elements, auf das mit seiner `id` in der `url()` Funktion verwiesen wird. Wenn die URL kein Formelement referenziert oder ungültig ist, wird der aufgelöste Wert für den Offset-Pfad `path("M0,0")` (was ein gültiger `<basic-shape>` Wert ist).

    - {{cssxref("basic-shape")}}
      - : Gibt den Offset-Pfad als den äquivalenten Pfad einer [CSS-Basisform-Funktion](/de/docs/Web/CSS/Reference/Values/basic-shape) an, wie z. B. {{cssxref("basic-shape/circle","circle()")}}, {{cssxref("basic-shape/ellipse","ellipse()")}}, {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/path","path()")}}, {{cssxref("basic-shape/polygon","polygon()")}}, {{cssxref("basic-shape/rect","rect()")}}, oder {{cssxref("basic-shape/xywh","xywh()")}}. Zum Beispiel, wenn die `<basic_shape>` eine `ellipse()` Funktion ist, dann ist der Pfad die Kontur der Ellipse, beginnend am rechten Punkt der Ellipse, im Uhrzeigersinn durch eine vollständige Drehung. Bei `ellipse()` und `circle()`, die den `at <position>` Parameter akzeptieren, gilt, wenn die `<position>` weggelassen wird, dass die Position standardmäßig auf `center` gesetzt ist, es sei denn, das Element hat einen {{cssxref("offset-position")}} angegeben. In diesem Fall wird der `offset-position` Wert als `at <position>` Parameter verwendet. Komplexere Formen können mit der {{cssxref("basic-shape/shape","shape()")}} Funktion definiert werden.

- [`<coord-box>`](/de/docs/Web/CSS/Reference/Values/box-edge#values)
  - : Gibt die Größeninformationen des [Referenzrechts](/de/docs/Web/CSS/Guides/Shapes/Using_shape-outside#the_reference_box) an, das den Pfad enthält. Das Referenzrechteck leitet sich von dem Element ab, das den Enthaltenden Block für dieses Element festlegt. Dieser Parameter ist optional. Wenn nicht angegeben, ist der Standardwert in CSS-Kontexten `border-box`. In SVG-Kontexten wird der Wert als `view-box` behandelt. Wenn `ray()` oder `<basic-shape>` verwendet wird, um den Offset-Pfad zu definieren, stellt der `<coord-box>` Wert das Referenzrechteck für den Strahl oder die `<basic-shape>` dar. Wenn `<url>` verwendet wird, um den Offset-Pfad zu definieren, stellt der `<coord-box>` Wert das Ansichtsfenster und das Benutzerkoordinatensystem für das Formelement bereit, wobei der Ursprung (`0 0`) in der oberen linken Ecke liegt und die Größe `1px` beträgt.

## Beschreibung

Die `offset-path`-Eigenschaft definiert einen Pfad, dem ein animiertes Element folgen kann. Ein Offset-Pfad ist entweder ein spezifizierter Pfad mit einem oder mehreren Teilpfaden oder die Geometrie einer nicht-stilierten Basisform. Die genaue Position des Elements auf dem Offset-Pfad wird durch die Eigenschaft {{cssxref("offset-distance")}} bestimmt. Jede Form oder jeder Pfad muss eine Ausgangsposition für den berechneten Wert von `0` für {{cssxref("offset-distance")}} festlegen und eine Anfangsrichtung, die die Rotation des Objekts zur Ausgangsposition angibt.

In frühen Versionen der Spezifikation wurde diese Eigenschaft `motion-path` genannt. Sie wurde in `offset-path` umbenannt, da die Eigenschaft statische Positionen und keine Bewegung beschreibt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellung eines Offset-Pfads unter Verwendung von Box-Edge-Positionierung

Dieses Beispiel zeigt die Verwendung verschiedener `<coord-box>` Werte in der `offset-path`-Eigenschaft.

```html hidden
<div class="box blueBox"></div>
<div class="box redBox"></div>
<div class="box greenBox"></div>
```

```css hidden
body {
  width: 300px;
  height: 200px;
  border-radius: 50px;
  border: dashed aqua;
  border-width: 25px;
  padding: 25px;
  margin: 50px;
}
```

```css
.box {
  width: 40px;
  height: 20px;
  animation: move 8000ms infinite ease-in-out;
}

.blueBox {
  background-color: blue;
  offset-path: border-box;
  offset-distance: 5%;
}

.greenBox {
  background-color: green;
  offset-path: padding-box;
  offset-distance: 8%;
}

.redBox {
  background-color: red;
  offset-path: content-box;
  offset-distance: 12%;
}

@keyframes move {
  0%,
  20% {
    offset-distance: 0%;
  }
  80%,
  100% {
    offset-distance: 100%;
  }
}
```

In diesem Beispiel wurden der Rand, die Grenze und die Polsterung absichtlich auf große Werte gesetzt, um die Platzierung der blauen, grünen und roten Rechtecke auf ihren jeweiligen `<coord-box>` Kanten zu demonstrieren: border-box, padding-box und content-box.

![Das blaue Rechteck sitzt am äußeren Rand der border-box, das grüne Rechteck befindet sich an der inneren Grenze, die der äußere Rand der padding-box ist, und das rote Rechteck befindet sich am äußeren Rand der content-box.](offset-path-coord-box.png)

#### Ergebnis

{{EmbedLiveSample('Erstellung eines Offset-Pfads unter Verwendung von Box-Edge-Positionierung', '100%', 400)}}

### Erstellung eines Offset-Pfads unter Verwendung von path()

Im folgenden Beispiel erstellt das {{svgelement("svg")}} Element ein Haus mit einem Schornstein und definiert auch zwei Hälften einer Schere. Das Haus und der Schornstein bestehen aus Rechtecken und Polygonen, und die Scherenhälften werden durch zwei verschiedene Pfadelemente dargestellt. Im CSS-Code wird die `offset-path`-Eigenschaft verwendet, um einen Pfad zu spezifizieren, dem die beiden Scherenhälften folgen sollen. Dieser CSS-definierte Pfad ist identisch mit dem durch das `<path>` Element im SVG dargestellten, welches die Umrisse des Hauses einschließlich des Schornsteins ist.

```html live-sample___offset_path_path
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="700"
  height="450"
  viewBox="350 0 1400 900">
  <title>House and Scissors</title>
  <rect x="595" y="423" width="610" height="377" fill="blue" />
  <polygon points="506,423 900,190 1294,423" fill="yellow" />
  <polygon points="993,245 993,190 1086,190 1086,300" fill="red" />
  <path
    id="house"
    d="M900,190 L993,245 V201 A11,11 0 0,1 1004,190 H1075 A11,11 0 0,1 1086,201 V300 L1294,423 H1216 A11,11 0 0,0 1205,434 V789 A11,11 0 0,1 1194,800 H606 A11,11 0 0,1 595,789 V434 A11,11 0 0,0 584,423 H506 L900,190"
    fill="none"
    stroke="black"
    stroke-width="13"
    stroke-linejoin="round"
    stroke-linecap="round" />
  <path
    id="first-scissor-half"
    class="scissor-half"
    d="M30,0 H-10 A10,10 0 0,0 -20,10 A20,20 0 1,1 -40,-10 H20 A10,10 0 0,1 30,0 M-40,20 A10,10 1 0,0 -40,0 A10,10 1 0,0 -40,20 M0,0" />
  <path
    id="second-scissor-half"
    class="scissor-half"
    d="M30,0 H-10 A10,10 0 0,1 -20,-10 A20,20 0 1,0 -40,10 H20 A10,10 0 0,0 30,0 M-40,-20 A10,10 1 0,0 -40,0 A10,10 1 0,0 -40,-20 M0,0" />
</svg>
```

```css live-sample___offset_path_path
.scissor-half {
  offset-path: path(
    "M900,190 L993,245 V201 A11,11 0 0,1 1004,190 H1075 A11,11 0 0,1 1086,201 V300 L1294,423 H1216 A11,11 0 0,0 1205,434 V789 A11,11 0 0,1 1194,800 H606 A11,11 0 0,1 595,789 V434 A11,11 0 0,0 584,423 H506 L900,190"
  );
  transform: translate(0px, 0px);
  fill: green;
  stroke: black;
  stroke-width: 5px;
  stroke-linejoin: round;
  stroke-linecap: round;
  fill-rule: evenodd;
  offset-anchor: 0 0;
}

#first-scissor-half {
  animation:
    move 12s linear infinite,
    rotate-left 1s infinite;
}
#second-scissor-half {
  animation:
    move 12s linear infinite,
    rotate-right 1s infinite;
}

@keyframes move {
  from {
    offset-distance: 0%;
  }
  to {
    offset-distance: 100%;
  }
}

@keyframes rotate-left {
  0% {
    offset-rotate: auto 0deg;
  }
  50% {
    offset-rotate: auto -45deg;
  }
  100% {
    offset-rotate: auto 0deg;
  }
}

@keyframes rotate-right {
  0% {
    offset-rotate: auto 0deg;
  }
  50% {
    offset-rotate: auto 45deg;
  }
  100% {
    offset-rotate: auto 0deg;
  }
}
```

#### Ergebnis

Ohne die `offset-path`-Eigenschaft würden die beiden Hälften der Scheren standardmäßig in der oberen linken Ecke der Leinwand angezeigt werden. Durch die Verwendung von `offset-path` sind die beiden Scherenhälften jedoch mit dem Startpunkt des SVG-Pfads ausgerichtet, sodass sie sich entlang dieses bewegen können.

{{EmbedLiveSample('offset_path_path', '100%', '450')}}

### Erstellung eines Offset-Pfads unter Verwendung von url()

Dieses Beispiel veranschaulicht, wie auf eine SVG-Form verwiesen werden kann, um die Form des Pfads zu definieren, dem ein Element folgen kann. Der grüne Kreis (definiert durch `.target`) folgt dem Pfad eines Rechtecks, das durch die Übergabe der ID der SVG-Form (`svgRect`) an die `offset-path`-Eigenschaft mithilfe von `url()` definiert wird.

Das SVG-Rechteck, das die Pfadform definiert, wird hier nur gezeigt, um visuell zu demonstrieren, dass der grüne Kreis tatsächlich dem Pfad folgt, der durch dieses Rechteck definiert ist.

```html live-sample___offset_path_url
<div class="outer">
  <div class="target"></div>
</div>
<svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect id="svgRect" x="50" y="50" width="200" height="100" />
</svg>
```

```css hidden live-sample___offset_path_url
.outer {
  position: absolute;
}
```

```css live-sample___offset_path_url
.target {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: green;
  offset-path: url("#svgRect");
  offset-anchor: auto;
  animation: move 5s linear infinite;
}

#svgRect {
  fill: antiquewhite;
  stroke: black;
  stroke-width: 2;
}

@keyframes move {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}
```

{{EmbedLiveSample('live-sample___offset_path_url', '100%', '250')}}

### Verschiedene Formen

Dieses Beispiel beinhaltet verschiedene {{cssxref("&lt;basic-shape&gt;")}} Werte: {{cssxref("basic-shape/circle", "circle()")}}, {{cssxref("basic-shape/ellipse", "ellipse()")}}, {{cssxref("basic-shape/inset", "inset()")}}, {{cssxref("basic-shape/polygon", "polygon()")}}.

```html
<div class="container">
  <div class="mover mover-path">path()</div>
  <div class="mover mover-circle">circle()</div>
  <div class="mover mover-ellipse">ellipse()</div>
  <div class="mover mover-inset">inset()</div>
  <div class="mover mover-polygon">polygon()</div>
</div>
```

```css
.container {
  border: 1px solid black;
  width: 80vw;
  height: 80vh;
  position: relative;
  left: 10vw;
  top: 10vh;
}

.mover {
  width: 100px;
  height: 80px;
  border-radius: 50%;
  line-height: 80px;
  text-indent: 10px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' id='e644da42-a34e-4ceb-a89a-89a4eb6dcc51' data-name='Layer 1' viewBox='0 0 71.08 54.62'%3E%3Ctitle%3Epointer-hand%3C/title%3E%3Cpath d='M43.56,49.35a5.24,5.24,0,0,0-1.27-3.43,5.26,5.26,0,0,0,1.86-9,5.26,5.26,0,0,0-.5-9.53L66.12,27c2.28-.07,5-1.57,5-4.58a5.06,5.06,0,0,0-4.58-4.83L34.08,17c3.48-2.89,6.26-6.55,6.73-11.08C41.45-.14,36.07-1.15,35,1.09,32,7.11,23,12.75,17.42,15.52,8.64,19.08,0,19.77,0,34.56,0,42.7,2.7,47.94,9.42,51c5.51,2.52,13.71,3.59,25.36,3.59H38.3A5.27,5.27,0,0,0,43.56,49.35Z'/%3E%3C/svg%3E")
    no-repeat;
  background-size: cover;
  color: white;
  animation: move 10s linear infinite;
  font-family: monospace;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  transform-origin: center center;
}
.mover-path {
  top: 50px;
  motion-path: path(
    "M18.45,58.46s52.87-70.07,101.25-.75,101.75-6.23,101.75-6.23S246.38,5.59,165.33,9.08s-15,71.57-94.51,74.56S18.45,58.46,18.45,58.46Z"
  );
  offset-path: path(
    "M18.45,58.46s52.87-70.07,101.25-.75,101.75-6.23,101.75-6.23S246.38,5.59,165.33,9.08s-15,71.57-94.51,74.56S18.45,58.46,18.45,58.46Z"
  );
}
.mover-circle {
  top: 150px;
  offset-path: circle(100px at 50px 50px);
  motion-path: circle(100px at 50px 50px);
}
.mover-ellipse {
  top: 250px;
  offset-path: ellipse(25% 40% at 50% 50%);
  motion-path: ellipse(25% 40% at 50% 50%);
}
.mover-inset {
  top: 350px;
  offset-path: inset(5% 20% 15% 10%);
  motion-path: inset(5% 20% 15% 10%);
}
.mover-polygon {
  top: 450px;
  offset-path: polygon(
    30% 0%,
    70% 0%,
    100% 30%,
    100% 70%,
    70% 100%,
    30% 100%,
    0% 70%,
    0% 30%
  );
  motion-path: polygon(
    30% 0%,
    70% 0%,
    100% 30%,
    100% 70%,
    70% 100%,
    30% 100%,
    0% 70%,
    0% 30%
  );
}

@keyframes move {
  100% {
    motion-offset: 100%;
    offset-distance: 100%;
  }
}
```

{{EmbedLiveSample("verschiedene Formen", "", "500")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("offset")}}
- {{cssxref("offset-distance")}}
- {{cssxref("offset-rotate")}}
- SVG [Pfade](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Paths) Tutorial
- {{cssxref("basic-shape/path","path()")}}
