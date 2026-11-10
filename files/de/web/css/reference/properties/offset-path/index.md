---
title: "`offset-path` CSS property"
short-title: offset-path
slug: Web/CSS/Reference/Properties/offset-path
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`offset-path`** legt einen Pfad fest, dem ein Element folgt, und bestimmt die Positionierung des Elements innerhalb des übergeordneten Containers des Pfads oder des SVG-Koordinatensystems. Der Pfad ist eine Linie, eine Kurve oder eine geometrische Form, entlang der das Element positioniert wird oder sich bewegt.

Die Eigenschaft `offset-path` wird zusammen mit den Eigenschaften {{cssxref("offset-distance")}}, {{cssxref("offset-rotate")}} und {{cssxref("offset-anchor")}} verwendet, um die Position und Ausrichtung des Elements entlang eines Pfads zu steuern.

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

Die Eigenschaft `offset-path` akzeptiert als Wert einen `<offset-path>`-Wert, einen [`<coord-box>`](/de/docs/Web/CSS/Reference/Values/box-edge#values)-Wert, beides zusammen oder das Schlüsselwort `none`. Der `<offset-path>`-Wert ist eine {{cssxref("ray","ray()")}}-Funktion, ein {{cssxref("url_value", "&lt;url&gt;")}}-Wert oder ein {{cssxref("basic-shape")}}-Wert.

- `none`
  - : Gibt an, dass das Element keinem Offset-Pfad folgt. Der Wert `none` entspricht einem Element ohne [Offset-Transformation](/de/docs/Web/CSS/Reference/Properties/offset). Die Bewegung des Elements wird in diesem Fall durch seine gewöhnlichen Positionierungseigenschaften wie {{cssxref("top")}} und {{cssxref("left")}} bestimmt, statt durch einen Offset-Pfad. Dies ist der Standardwert.

- `<offset-path>`
  - : Eine `ray()`-Funktion, ein `<url>`-Wert oder ein `<basic-shape>`-Wert, der den geometrischen Offset-Pfad festlegt. Wird dieser Wert weggelassen, lautet die Pfadform für den `<coord-box>`-Wert `inset(0 round X)`, wobei `X` der Wert von {{cssxref("border-radius")}} des Elements ist, das den [umschließenden Block](/de/docs/Web/CSS/Guides/Display/Containing_block) festlegt.
    - {{cssxref("ray","ray()")}}
      - : Definiert eine Linie, die an einer festgelegten Position beginnt, eine festgelegte Länge hat und sich im angegebenen Winkel erstreckt. Die Funktion `ray()` akzeptiert bis zu vier Parameter: einen {{CSSxRef("angle")}}, einen optionalen Größenwert, das optionale Schlüsselwort `contain` und ein optionales `at <position>`.

    - {{cssxref("url_value", "&lt;url&gt;")}}
      - : Gibt die ID eines [SVG-Formelements](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Basic_shapes) an. Der Pfad entspricht der Form des SVG-Elements {{SVGElement("circle")}}, {{SVGElement("ellipse")}}, {{SVGElement("line")}}, {{SVGElement("path")}}, {{SVGElement("polygon")}}, {{SVGElement("polyline")}} oder {{SVGElement("rect")}}, auf das in der Funktion `url()` über seine `id` verwiesen wird. Wenn die URL nicht auf ein Formelement verweist oder aus einem anderen Grund ungültig ist, wird für den Offset-Pfad der Wert `path("M0,0")` aufgelöst (ein gültiger `<basic-shape>`-Wert).

    - {{cssxref("basic-shape")}}
      - : Legt den Offset-Pfad als den entsprechenden Pfad einer [CSS-Funktion für Grundformen](/de/docs/Web/CSS/Reference/Values/basic-shape) fest, beispielsweise {{cssxref("basic-shape/circle","circle()")}}, {{cssxref("basic-shape/ellipse","ellipse()")}}, {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/path","path()")}}, {{cssxref("basic-shape/polygon","polygon()")}}, {{cssxref("basic-shape/rect","rect()")}} oder {{cssxref("basic-shape/xywh","xywh()")}}. Wenn `<basic_shape>` beispielsweise eine `ellipse()`-Funktion ist, entspricht der Pfad dem Umriss der Ellipse. Er beginnt am äußersten rechten Punkt der Ellipse und verläuft im Uhrzeigersinn einmal um sie herum. Bei `ellipse()` und `circle()`, die den Parameter `at <position>` akzeptieren, ist die Position standardmäßig `center`, wenn `<position>` weggelassen wird – es sei denn, für das Element ist {{cssxref("offset-position")}} festgelegt. In diesem Fall wird der Wert von `offset-position` für den Parameter `at <position>` verwendet. Komplexere Formen lassen sich mit der Funktion {{cssxref("basic-shape/shape","shape()")}} definieren.

- [`<coord-box>`](/de/docs/Web/CSS/Reference/Values/box-edge#values)
  - : Gibt die Größeninformationen der [Referenzbox](/de/docs/Web/CSS/Guides/Shapes/Using_shape-outside#the_reference_box) an, die den Pfad enthält. Die Referenzbox wird aus dem Element abgeleitet, das den umschließenden Block für dieses Element festlegt. Dieser Parameter ist optional. Wenn er nicht angegeben wird, ist der Standardwert in CSS-Kontexten `border-box`. In SVG-Kontexten wird der Wert als `view-box` behandelt. Wenn `ray()` oder `<basic-shape>` den Offset-Pfad definiert, stellt der `<coord-box>`-Wert die Referenzbox für den Strahl beziehungsweise die `<basic-shape>` bereit. Wenn `<url>` den Offset-Pfad definiert, stellt der `<coord-box>`-Wert den Viewport und das Benutzerkoordinatensystem für das Formelement bereit. Deren Ursprung (`0 0`) liegt in der oberen linken Ecke, und ihre Größe beträgt `1px`.

## Beschreibung

Die Eigenschaft `offset-path` definiert einen Pfad, dem ein animiertes Element folgen kann. Ein Offset-Pfad ist entweder ein angegebener Pfad mit einem oder mehreren Teilpfaden oder die Geometrie einer Grundform ohne Formatierung. Die genaue Position des Elements auf dem Offset-Pfad wird durch die Eigenschaft {{cssxref("offset-distance")}} bestimmt. Jede Form und jeder Pfad muss eine Anfangsposition für den berechneten Wert `0` von {{cssxref("offset-distance")}} sowie eine Anfangsrichtung definieren, die die Drehung des Objekts an der Anfangsposition festlegt.

In frühen Versionen der Spezifikation hieß diese Eigenschaft `motion-path`. Sie wurde in `offset-path` umbenannt, weil die Eigenschaft statische Positionen beschreibt und keine Bewegung.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einen Offset-Pfad mithilfe von Box-Kanten erstellen

Dieses Beispiel zeigt die Verwendung verschiedener `<coord-box>`-Werte in der Eigenschaft `offset-path`.

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

In diesem Beispiel wurden `margin`, `border` und `padding` bewusst große Werte zugewiesen, um die Platzierung der blauen, grünen und roten Rechtecke an den Kanten ihrer jeweiligen `<coord-box>` zu veranschaulichen: `border-box`, `padding-box` und `content-box`.

![Das blaue Rechteck liegt an der Außenkante der border-box, das grüne Rechteck an der Innenkante des Rahmens, die zugleich die Außenkante der padding-box ist, und das rote Rechteck an der Außenkante der content-box.](offset-path-coord-box.png)

#### Ergebnis

{{EmbedLiveSample('Creating an offset-path using box-edge positioning', '100%', 400)}}

### Einen Offset-Pfad mit path() erstellen

In diesem Beispiel erzeugt das Element {{svgelement("svg")}} ein Haus mit einem Schornstein und definiert außerdem zwei Scherenhälften. Haus und Schornstein bestehen aus Rechtecken und Polygonen; die Scherenhälften werden durch zwei verschiedene `path`-Elemente dargestellt. Im CSS-Code wird die Eigenschaft `offset-path` verwendet, um einen Pfad festzulegen, dem die beiden Scherenhälften folgen. Dieser in CSS definierte Pfad ist mit dem Pfad identisch, den das `<path>`-Element im SVG darstellt: dem Umriss des Hauses einschließlich des Schornsteins.

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

Ohne die Eigenschaft `offset-path` würden die beiden Scherenhälften standardmäßig in der oberen linken Ecke der Zeichenfläche positioniert. Durch die Verwendung von `offset-path` werden sie stattdessen am Anfangspunkt des SVG-Pfads ausgerichtet und können sich entlang dieses Pfads bewegen.

{{EmbedLiveSample('offset_path_path', '100%', '450')}}

### Einen Offset-Pfad mit url() erstellen

Dieses Beispiel zeigt, wie Sie auf eine SVG-Form verweisen, um die Form des Pfads festzulegen, dem ein Element folgen kann. Der grüne Kreis (definiert durch `.target`) folgt dem Pfad eines Rechtecks. Dazu wird die ID der SVG-Form (`svgRect`) mithilfe von `url()` an die Eigenschaft `offset-path` übergeben.

Das SVG-Rechteck, das die Pfadform definiert, ist hier nur zu sehen, um zu veranschaulichen, dass der grüne Kreis tatsächlich dem durch dieses Rechteck definierten Pfad folgt.

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

{{EmbedLiveSample('offset_path_url', '100%', '250')}}

### Verschiedene Formen

Dieses Beispiel verwendet verschiedene {{cssxref("basic-shape")}}-Werte: {{cssxref("basic-shape/circle", "circle()")}}, {{cssxref("basic-shape/ellipse", "ellipse()")}}, {{cssxref("basic-shape/inset", "inset()")}} und {{cssxref("basic-shape/polygon", "polygon()")}}.

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

{{EmbedLiveSample("different shapes", "", "500")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("offset")}}
- {{cssxref("offset-distance")}}
- {{cssxref("offset-rotate")}}
- Tutorial zu SVG-[Pfaden](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Paths)
- {{cssxref("basic-shape/path","path()")}}
