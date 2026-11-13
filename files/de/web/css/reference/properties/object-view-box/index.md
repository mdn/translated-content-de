---
title: "`object-view-box` CSS property"
short-title: object-view-box
slug: Web/CSS/Reference/Properties/object-view-box
l10n:
  sourceCommit: 25abd448c8a088e9f333360dea0adbe8143e6b86
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`object-view-box`** definiert ein Rechteck als sichtbaren Bereich (Viewbox) innerhalb eines {{Glossary("replaced_elements", "ersetzten Elements")}}. Dadurch lässt sich der Inhalt des ersetzten Elements vergrößern, verkleinern oder verschieben. Die Eigenschaft funktioniert ähnlich wie das SVG-Attribut {{SVGAttr("viewBox")}}.

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
/* Keyword value */
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
  - : Eine Funktion {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/xywh","xywh()")}} oder {{cssxref("basic-shape/rect","rect()")}}, die eine Viewbox für ein Element mit natürlichen Abmessungen (ein ersetztes Element) festlegt. Andernfalls wird der Wert zu `none` aufgelöst.

## Beschreibung

Mit der Eigenschaft `object-view-box` lassen sich {{Glossary("replaced_elements", "ersetzte Elemente")}}, darunter Bilder und Videos, zuschneiden oder in ihrer Darstellung skalieren. Dazu wird ein Ausschnitt des Inhalts des ersetzten Elements in dem für das Element reservierten Platz angezeigt. Welcher Ausschnitt angezeigt wird, bestimmt der Wert der Eigenschaft. Der verfügbare Platz ergibt sich aus der standardmäßigen {{Glossary("extrinsic_size", "extrinsischen Größe")}} des Elements. Der angezeigte Inhaltsausschnitt kann vergrößert, verkleinert oder in seiner ursprünglichen Größe dargestellt werden, wobei das intrinsische {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Inhalts erhalten bleibt. Außerdem lässt sich der Ausschnitt verschieben.

Der Eigenschaftswert ist ein `<basic-shape-rect>`, also eine der {{cssxref("basic-shape")}}-Funktionen, die eine rechteckige Form definieren. Der Wert kann beispielsweise eine {{cssxref("basic-shape/xywh","xywh()")}}-Funktion sein:

```css
img {
  object-view-box: xywh(410px 0 400px 150px);
}
```

In diesem Fall liegt die obere linke Ecke des angezeigten Bildausschnitts `410px` vom linken Rand und `0` vom oberen Rand entfernt, wie durch die Parameter für die x- und y-Koordinaten festgelegt. Der angezeigte Ausschnitt des Originalbilds ist `400px` breit und `150px` hoch; diese Maße werden durch die Komponenten `w` und `h` der Funktion bestimmt. Dieser 400 × 150 große Bildausschnitt wird in dem Platz angezeigt, der beim Layout der Seite für das Bild selbst reserviert wurde. Ob der Ausschnitt in seiner ursprünglichen intrinsischen Größe, vergrößert oder verkleinert erscheint, hängt davon ab, ob die 400px × 150px große Viewbox gleich groß, kleiner oder größer als das Bildelement ist.

![Das mit der Eigenschaft object-view-box zugeschnittene Leopardenbild: Eine 400px × 150px große Viewbox zeigt einen unskalierten Bildausschnitt](https://mdn.github.io/shared-assets/images/diagrams/css/object-view-box/object-view-box_xywh.jpg)

In diesem Fall sind die durch die Eigenschaft `object-view-box` definierte rechteckige Viewbox und der rechteckige Bereich des `<img>`-Elements gleich groß, nämlich 400 × 150 Pixel. Das ersetzte Element wird daher nicht skaliert.

Verringern Sie die Werte für `w` und `h`, um einen Vergrößerungseffekt zu erzielen: Der kleinere Bildausschnitt wird gedehnt und erscheint dadurch vergrößert.

Erhöhen Sie die Argumentwerte für `w` und `h`, um einen Verkleinerungseffekt zu erzielen: Der größere Bildausschnitt wird verkleinert dargestellt.

Durch Animieren der Koordinaten `x` und `y` entsteht ein Schwenkeffekt: Die Viewbox des Elements bewegt sich, während das Element selbst an seiner ursprünglichen Position bleibt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt die grundlegende Verwendung und die Auswirkungen der Eigenschaft `object-view-box` anhand der drei verschiedenen `<basic-shape-rect>`-Funktionen.

#### HTML

Wir verwenden drei nahezu identische {{htmlelement("img")}}-Elemente, die jeweils in ein {{htmlelement("figure")}}-Element eingebettet sind. Sie unterscheiden sich nur durch ihre Klassennamen.

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

Wir geben allen Bildern dieselbe Breite und Höhe und weisen dann jeder Klasse und damit jedem Bild einen anderen Wert für `object-view-box` zu. Die intrinsische Größe des Bilds mit der gemalten Hand beträgt `298px` × `332px`. Mit {{cssxref("height")}} und {{cssxref("width")}} legen wir die extrinsische Größe auf `200px` × `200px` fest.

```css
img {
  width: 200px;
  height: 200px;
  border: 1px solid red;
}
```

Wir legen drei verschiedene Werte für die Eigenschaft `object-view-box` fest und verwenden dafür drei verschiedene Formfunktionen. Der Wert der {{cssxref("basic-shape/xywh","xywh()")}}-Funktion für das Element `intrinsic` zeigt einen quadratischen, `200px` großen Ausschnitt des Bildinhalts, der `70px` vom linken und `90px` vom oberen Rand entfernt beginnt. Die {{cssxref("basic-shape/rect","rect()")}}-Funktion für das Element `zoom-in` zeigt einen quadratischen, `160px` großen Ausschnitt des Originalbilds: Er reicht vom oberen Rand aus von `110px` bis `270px` und vom linken Rand aus von `90px` bis `250px`. Die {{cssxref("basic-shape/inset","inset()")}}-Funktion für das ersetzte Element `zoom-out` zeigt einen quadratischen, `298px` großen Ausschnitt des Originalbilds. Dabei ist die gesamte Breite des Bilds zu sehen, während oben und unten jeweils 17px abgeschnitten werden.

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

Die Variante `intrinsic` zeigt einen unskalierten Bildausschnitt. Die Variante `zoom-in` zeigt einen kleineren, quadratischen Bildausschnitt (`160px` × `160px`), der auf eine quadratische, `200px` große Viewbox hochskaliert wird. Da der Ausschnitt gedehnt wird, erscheint er vergrößert. Die Variante `zoom-out` zeigt einen größeren, quadratischen Bildausschnitt (`298px` × `298px`), der auf eine quadratische, `200px` große Viewbox herunterskaliert wird. Da der Ausschnitt verkleinert dargestellt wird, erscheint er herausgezoomt.

### Interaktives Vergrößern mit der Eigenschaft object-view-box

Dieses Beispiel zeigt, wie sich mit der Eigenschaft `object-view-box` ein Ausschnitt eines ersetzten Elements innerhalb eines HTML-Elements mit fester Größe vergrößern und verkleinern lässt. Der Zoom-Effekt konzentriert sich dabei auf das Auge des Leoparden in einem sehr großen Bild.

#### HTML

Wir fügen ein {{htmlelement("img")}}-Element und ein {{htmlelement("input")}}-Element vom Typ [`range`](/de/docs/Web/HTML/Reference/Elements/input/range) mit einem zugehörigen {{htmlelement("label")}} hinzu. Die natürlichen Abmessungen beziehungsweise die intrinsische Größe des ursprünglichen Leopardenbilds betragen `1244px` in der Breite und `416px` in der Höhe, bei einem {{Glossary("aspect_ratio", "Seitenverhältnis")}} von `3:1`.

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

Wir definieren die benutzerdefinierte Eigenschaft `--box-size`, die in der Funktion {{cssxref("basic-shape/xywh", "xywh()")}} als Höhe und Breite verwendet wird. So entsteht eine quadratische Viewbox mit einem Seitenverhältnis von `1:1`. Der Versatzpunkt der Viewbox – der Fokuspunkt unseres Zoom-Effekts – liegt bei `500px` für die Koordinate `x` und bei `30px` für die Koordinate `y`. Das entspricht der oberen linken Ecke des rechten Auges des Leoparden.

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

Wir fügen dem Schieberegler einen Event-Listener hinzu, der den Wert der benutzerdefinierten Eigenschaft `--boxSize` aktualisiert, wenn die Person den Regler betätigt. Damit der Vergrößerungseffekt zunimmt, wenn der Regler nach rechts bewegt wird, kehren wir seinen Wert um, indem wir ihn von `500px` abziehen. Eine kleinere Viewbox verstärkt den Vergrößerungseffekt.

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

{{ EmbedLiveSample("live_zoom-in_using_object-view-box_property", "", 480) }}

Bewegen Sie den Schieberegler nach rechts, um den Vergrößerungseffekt zu verstärken, und nach links, um ihn zu verringern. Der Schieberegler verändert nur die Abmessungen der Viewbox. Die Werte für x und y, die ihren Ursprungspunkt bestimmen, bleiben unverändert. Auch die Größe des `<img>`-Elements ändert sich nicht.

### Verschieben des Bildausschnitts mit der Eigenschaft object-view-box

Dieses Beispiel zeigt, wie ein Bild durch Animieren des Werts der Eigenschaft `object-view-box` geschwenkt wird.

#### HTML

Das HTML enthält ein einzelnes Bild.

```html
<img
  src="https://mdn.github.io/shared-assets/images/examples/leopard.jpg"
  alt="leopard" />
```

#### CSS

Wir legen die Bildgröße fest und halten die Abmessungen der Viewbox – die Komponenten `w` und `h` der Funktion `xywh()` – konstant. Gleichzeitig animieren wir über fünf Sekunden die Positionen am oberen und linken Rand, indem wir die Parameter `x` und `y` verändern.

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

- [Die CSS-Eigenschaft `object-view-box` verwenden](/de/docs/Web/CSS/Guides/Images/Using_object-view-box)
- {{cssxref("object-fit")}}
- {{cssxref("object-position")}}
- {{cssxref("background-size")}}
- [Seitenverhältnisse verstehen](/de/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
- Modul [CSS-Bilder](/de/docs/Web/CSS/Guides/Images)
