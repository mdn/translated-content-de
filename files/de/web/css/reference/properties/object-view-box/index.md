---
title: "`object-view-box` CSS property"
short-title: object-view-box
slug: Web/CSS/Reference/Properties/object-view-box
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{SeeCompatTable}}

Die **`object-view-box`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert ein Rechteck als sichtbaren Bereich (Viewbox) innerhalb eines {{Glossary("replaced_elements", "ersetzten Elements")}}, wodurch der Inhalt des ersetzten Elements vergrößert oder verschoben werden kann. Sie funktioniert ähnlich wie das SVG-Attribut {{SVGAttr("viewBox")}}.

{{InteractiveExample("CSS Demo: object-view-box")}}

```css interactive-example-choice
object-view-box: inset(0 0);
```

```css interactive-example-choice
object-view-box: inset(20%);
```

```css interactive-example-choice
object-view-box: xywh(95px 20px 60px 60px);
```

```css interactive-example-choice
object-view-box: rect(110px 120px 200px 45px);
```

```css interactive-example-choice
object-view-box: none;
```

```html interactive-example
<section id="default-example">
  <img
    class="transition-all"
    id="example-element"
    src="/shared-assets/images/examples/plumeria-146x200.jpg"
    alt="A close-up of red flowers and buds on a branch." />
</section>
```

```css interactive-example
#example-element {
  height: 100%;
  width: 100%;
  border: 2px dotted #888888;
}

@supports not (object-view-box: none) {
  body::before {
    content: "Your browser does not support the 'object-view-box' property.";
    color: black;
    background-color: #ffcd33;
    display: block;
    width: 100%;
    text-align: center;
  }
}
```

## Syntax

```css
/* keywords */
object-view-box: none;

/* <basic-shape-rect> functions */
object-view-box: inset(20%);
object-view-box: inset(20% 30%);
object-view-box: inset(10px 0 25px 33px);
object-view-box: xywh(95px 20px 60px 60px);
object-view-box: rect(10px 30px 30px 10px);

/* Global values */
object-view-box: inherit;
object-view-box: initial;
object-view-box: revert;
object-view-box: revert-layer;
object-view-box: unset;
```

### Werte

- `none`
  - : Das Element hat keine Viewbox. Dies ist der Standardwert.

- [`<basic-shape-rect>`](/de/docs/Web/CSS/Reference/Values/basic-shape#syntax_for_rectangles_basic-shape-rect)
  - : Eine {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/xywh","xywh()")}}, oder {{cssxref("basic-shape/rect","rect()")}} Funktion, die eine Viewbox für ein Element mit natürlichen Dimensionen (ersetzte Elemente) angibt. Löst sich ansonsten zu `none` auf.

## Beschreibung

Die `object-view-box` Eigenschaft kann verwendet werden, um {{Glossary("replaced_elements", "ersetzte Elemente")}} zu beschneiden oder zu skalieren, einschließlich Bilder und Videos. Sie funktioniert, indem ein Abschnitt des Inhalts des ersetzten Elements im für dieses Element reservierten Platz angezeigt wird. Der Abschnitt des ersetzten Elements, der angezeigt wird, wird durch den Wert der Eigenschaft definiert. Der verfügbare reservierte Platz wird durch die Standard-{{Glossary("extrinsic_size", "extrinsische Größe")}} des Elements bestimmt. Der angezeigte Inhaltsabschnitt kann vergrößert, verkleinert oder in seiner Originalgröße dargestellt werden, wobei das intrinsische {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Inhalts erhalten bleibt.

Der Eigenschaftswert ist ein `<basic-shape-rect>`, eine der {{cssxref("basic-shape")}} Funktionen, die auf die Definition einer rechteckigen Form beschränkt ist. Beispielsweise kann der Wert eine {{cssxref("basic-shape/xywh","xywh()")}} Funktion sein:

```css
img {
  object-view-box: xywh(410px 0 400px 150px);
}
```

In diesem Fall befindet sich die obere linke Ecke des Bildabschnitts, der angezeigt wird, `410px` vom linken Rand entfernt und `0` von oben, wie durch die x- und y-Koordinatenparameter definiert. Die Größe des originalen Bildabschnitts, der angezeigt wird, beträgt `400px` in der Breite und `150px` in der Höhe; die `w`- und `h`-Komponenten der Funktion. Dieser 400x150-Bildabschnitt wird in dem Platz angezeigt, der ursprünglich für das Bild selbst reserviert war, als die Seite layoutet wurde. Ob der angezeigte Inhaltsabschnitt in seiner ursprünglichen Größe, vergrößert oder verkleinert dargestellt wird, hängt davon ab, ob die Viewbox 400px x 150px, kleiner oder größer als die Bildgröße des Elements ist.

![Das Leopardenbild, beschnitten mit der object-view-box Eigenschaft, wobei eine 400px x 150px große Viewbox einen unskalierten Abschnitt des Bildes zeigt](https://mdn.github.io/shared-assets/images/diagrams/css/object-view-box/object-view-box_xywh.jpg)

In diesem Fall, da die durch die `object-view-box` Eigenschaft definierte rechteckige Viewbox und der rechteckige Bereich des `<img>` Elements die gleiche Größe haben, d.h. 400 x 150 Pixel, wird das ersetzte Element nicht skaliert.

Verringern Sie die `w`- und `h`-Werte, um einen vergrößerten Effekt zu erzeugen; da der kleinere Bildabschnitt gedehnt wird, hat er einen vergrößerten Effekt.

Erhöhen Sie die `w`- und `h`-Argumentwerte, um einen verkleinerten Effekt zu erzeugen; da der größere Bildabschnitt verkleinert wird, hat er einen verkleinerten Effekt.

Das Animieren der `x`- und `y`-Koordinaten erzeugt einen Schwenkeffekt, indem die Viewbox des Elements verschoben wird, während das Element selbst an seinem ursprünglichen Ort bleibt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel demonstriert die grundlegende Verwendung und die Effekte der `object-view-box` Eigenschaft, mit Beispielen, die die drei verschiedenen `<basic-shape-rect>` Funktionen verwenden.

#### HTML

Wir haben drei fast identische {{htmlelement("img")}} Elemente, umschlossen von {{htmlelement("figure")}} Elementen; der einzige Unterschied sind ihre Klassenamen.

```html
<figure>
  <img
    class="intrinsic"
    src="https://mdn.github.io/shared-assets/images/examples/painted-hand.jpg"
    alt="Original scale section of a painted hand" />
  <figcaption>intrinsic</figcaption>
</figure>
<figure>
  <img
    class="zoom-in"
    src="https://mdn.github.io/shared-assets/images/examples/painted-hand.jpg"
    alt="Zoomed in section of a painted hand" />
  <figcaption>zoomed in</figcaption>
</figure>
<figure>
  <img
    class="zoom-out"
    src="https://mdn.github.io/shared-assets/images/examples/painted-hand.jpg"
    alt="Zoomed out section of a painted hand" />
  <figcaption>zoomed out</figcaption>
</figure>
```

#### CSS

Wir gestalten alle Bilder so, dass sie die gleiche Breite und Höhe haben, und setzen dann jede Klasse, und somit jedes Bild, mit einem anderen `object-view-box` Wert. Die intrinsische Größe des gemalten Handbildes beträgt `298px` mal `332px`. Wir setzen die {{cssxref("height")}} und {{cssxref("width")}}, um die extrinsische Größe auf `200px` mal `200px` festzulegen.

```css
img {
  width: 200px;
  height: 200px;
  border: 1px solid red;
}
```

Wir setzen drei verschiedene `object-view-box` Eigenschaftswerte unter Verwendung von drei verschiedenen Form-Funktionen. Der Wert der {{cssxref("basic-shape/xywh","xywh()")}} Funktion des `intrinsic` Elements zeigt einen `200px` quadratischen Abschnitt des Bildinhalts, der bei `70px` vom linken und `90px` vom oberen Rand beginnt. Die {{cssxref("basic-shape/rect","rect()")}} Funktion des `zoom-in` Elements zeigt einen `160px` quadratischen Abschnitt des ursprünglichen Elements, der von `110px` bis `270px` vom oberen Rand und `90px` bis `250px` vom linken Rand reicht. Die {{cssxref("basic-shape/inset","inset()")}} Funktion des `zoom-out` ersetzten Elements zeigt einen `298px` quadratischen Abschnitt des ursprünglichen Elements; die gesamte Breite des Bildes wird gezeigt, während 17px von oben und unten abgeschnitten werden.

```css
.intrinsic {
  object-view-box: xywh(70px 90px 200px 200px);
}

.zoom-in {
  object-view-box: rect(110px 250px 270px 90px);
}

.zoom-out {
  object-view-box: inset(17px 0 17px 0);
}
```

```css hidden
@supports not (object-view-box: none) {
  body::before {
    content: "Your browser does not support the 'object-view-box' property.";
    color: black;
    background-color: #ffcd33;
    display: block;
    width: 100%;
    text-align: center;
  }
}

figure {
  display: inline-block;
  margin: 0;
}

figcaption {
  text-align: center;
}
```

#### Ergebnisse

{{ EmbedLiveSample("Basic usage", "", "300") }}

Die `intrinsic` Version zeigt einen unskalierten Abschnitt des Bildes. Die `zoom-in` Version zeigt einen kleineren Abschnitt (`160px` quadratisch) des Bildes, der auf `200px` quadratische Viewbox hochskaliert wird. Da der Abschnitt gedehnt wird, wirkt er vergrößert. Die `zoom-out` Version zeigt einen größeren (`298px` quadratischen) Abschnitt des Bildes, der auf `200px` quadratische Viewbox herunterskaliert wird. Da der Abschnitt verkleinert wird, wirkt er verkleinert.

### Live Zoom-In mit der object-view-box Eigenschaft

Dieses Beispiel demonstriert die Verwendung der `object-view-box` Eigenschaft, um einen Abschnitt eines ersetzten Elements innerhalb eines statischen HTML-Elements zu vergrößern oder zu verkleinern. In diesem Fall dient das Auge des Leoparden innerhalb eines sehr großen Bildes als Mittelpunkt des Zoomeffekts.

#### HTML

Wir fügen ein {{htmlelement("img")}} Element und ein [`range`](/de/docs/Web/HTML/Reference/Elements/input/range) {{htmlelement("input")}} Element mit einem zugehörigen {{htmlelement("label")}} ein. Die natürlichen Dimensionen oder die intrinsische Größe des originalen Leopardenbildes sind `1244px` breit und `416px` hoch, mit einem {{Glossary("aspect_ratio", "Seitenverhältnis")}} von `3:1`.

```html
<img
  src="https://mdn.github.io/shared-assets/images/examples/leopard.jpg"
  alt="leopard" />
<p>
  <label for="box-size">Zoom-in: </label>
  <input type="range" id="box-size" min="115" max="380" value="150" />
</p>
<output></output>
```

#### CSS

Wir definieren eine `--box-size` benutzerdefinierte Eigenschaft, die als Höhe und Breite in der {{cssxref("basic-shape/xywh", "xywh()")}} Funktion verwendet wird, um eine quadratische Viewbox mit einem Seitenverhältnis von `1:1` zu erzeugen. Der Offset-Punkt der Viewbox, der Mittelpunkt unseres Zoomeffekts, wird auf `500px` für die `x`-Koordinate und `30px` für die `y`-Koordinate gesetzt, was der oberen linken Ecke des rechten Auges des Leoparden entspricht.

```css hidden
input {
  width: 350px;
}

output {
  text-align: center;
  background-color: #dedede;
  font-family: monospace;
  padding: 5px;
  display: block;
}

@supports not (object-view-box: none) {
  body::before {
    content: "Your browser does not support the 'object-view-box' property.";
    color: black;
    background-color: #ffcd33;
    display: block;
    width: 100%;
    text-align: center;
  }
}
```

```css
img {
  width: 350px;
  height: 350px;
  border: 2px solid red;

  --box-size: 150px;
  object-view-box: xywh(500px 30px var(--box-size) var(--box-size));
}
```

#### JavaScript

Wir fügen dem Slider einen Event-Listener hinzu, der den Wert der benutzerdefinierten Eigenschaft `--boxSize` aktualisiert, wenn der Benutzer damit interagiert. Um den Zoomeffekt zu verstärken, wenn der Slider nach rechts bewegt wird, wird der Wert des Sliders umgekehrt, indem er von `500px` subtrahiert wird, da eine Reduzierung der Viewbox-Größe den Zoomeffekt verstärkt.

```js
const img = document.querySelector("img");
const zoom = document.getElementById("box-size");
const output = document.querySelector("output");

function update() {
  const size = 500 - zoom.value;
  img.style.setProperty("--box-size", `${size}px`);
  output.innerText = `object-view-box: xywh(500px 30px ${size}px ${size}px);`;
}

zoom.addEventListener("input", update);
update();
```

#### Ergebnis

{{ EmbedLiveSample("Live zoom in using object-view-box property", "", 480) }}

Bewegen Sie den Slider nach rechts, um den Zoomeffekt zu verstärken, und nach links, um ihn zu reduzieren. Der Slider beeinflusst nur die Dimensionen der Viewbox, während die x- und y-Werte, der Ursprungspunkt der Viewbox, konstant bleiben. Die Größe des `<img>` Elements ändert sich ebenfalls nicht.

### Schwenken mit der object-view-box Eigenschaft

Dieses Beispiel zeigt, wie man ein Bild schwenkt, indem der Wert der `object-view-box` Eigenschaft animiert wird.

#### HTML

Das HTML enthält ein einzelnes Bild.

```html
<img
  src="https://mdn.github.io/shared-assets/images/examples/leopard.jpg"
  alt="leopard" />
```

#### CSS

Wir definieren eine Bildgröße und halten die Viewbox-Funktionen, die `w`- und `h`-Komponenten der `xywh()` Funktion, konstant, während wir die Top- und Left-Positionen animieren und die Position der `x`- und `y`-Parameter in fünf Sekunden ändern.

```css
img {
  width: 350px;
  height: 350px;

  object-view-box: xywh(0 30px 400px 400px);

  animation: panning 5s linear infinite alternate;
}

@keyframes panning {
  from {
    object-view-box: xywh(0 -50px 400px 400px);
  }
  to {
    object-view-box: xywh(800px 68px 400px 400px);
  }
}
```

```css hidden
@supports not (object-view-box: none) {
  body::before {
    content: "Your browser does not support the 'object-view-box' property.";
    color: black;
    background-color: #ffcd33;
    display: block;
    width: 100%;
    text-align: center;
  }
}
```

#### Ergebnis

{{ EmbedLiveSample("Panning using the object-view-box property", "", 400) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der CSS-Eigenschaft `object-view-box`](/de/docs/Web/CSS/Guides/Images/Using_object-view-box)
- {{cssxref("object-fit")}}
- {{cssxref("object-position")}}
- {{cssxref("background-size")}}
- [Verständnis des Seitenverhältnisses](/de/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
- [CSS-Bilder](/de/docs/Web/CSS/Guides/Images) Modul
