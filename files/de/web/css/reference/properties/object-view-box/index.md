---
title: object-view-box
slug: Web/CSS/Reference/Properties/object-view-box
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{CSSRef}}{{SeeCompatTable}}

Die **`object-view-box`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert ein Rechteck als sichtbaren Bereich (viewbox) innerhalb eines {{Glossary("replaced_elements", "ersetzten Elements")}}, was es ermöglicht, den Inhalt des ersetzten Elements zu zoomen oder zu verschieben. Sie funktioniert ähnlich wie das SVG-Attribut {{SVGAttr("viewBox")}}.

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

- [`<basic-shape-rect>`](/de/docs/Web/CSS/basic-shape#syntax_for_rectangles_basic-shape-rect)
  - : Eine {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/xywh","xywh()")}}, oder {{cssxref("basic-shape/rect","rect()")}} Funktion, die eine Viewbox für ein Element mit natürlichen Dimensionen (ersetzte Elemente) angibt. Andernfalls wird `none` aufgelöst.

## Beschreibung

Die `object-view-box`-Eigenschaft kann verwendet werden, um {{Glossary("replaced_elements", "ersetzte Elemente")}} wie Bilder und Videos zu beschneiden oder zu skalieren. Sie funktioniert, indem sie einen Abschnitt des Inhalts des ersetzten Elements im verfügbaren Raum anzeigt, der für dieses Element reserviert ist. Der angezeigte Abschnitt des ersetzten Elements wird durch den Wert der Eigenschaft bestimmt. Der verfügbare reservierte Raum wird durch die Standard-{{Glossary("extrinsic_size", "extrinsische Größe")}} des Elements festgelegt. Der angezeigte Inhaltsabschnitt kann vergrößert, verkleinert oder in seiner ursprünglichen Größe präsentiert werden, während das intrinsische {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Inhalts beibehalten wird.

Der Eigenschaftswert ist ein `<basic-shape-rect>`, eine der {{cssxref("basic-shape")}} Funktionen, die auf die Definition einer rechteckigen Form beschränkt ist. Zum Beispiel kann der Wert eine {{cssxref("basic-shape/xywh","xywh()")}} Funktion sein:

```css
img {
  object-view-box: xywh(410px 0 400px 150px);
}
```

In diesem Fall befindet sich die obere linke Ecke des angezeigten Bildabschnitts `410px` von der linken Kante und `0` von oben, wie durch die x- und y-Koordinatenparameter definiert. Die Größe des angezeigten Bildabschnitts beträgt `400px` Breite und `150px` Höhe; die `w` und `h` Komponenten der Funktion. Dieser 400x150-Abschnitt des Bildes wird in dem Raum angezeigt, der ursprünglich für das Bild reserviert wurde, als die Seite aufgebaut wurde. Ob der angezeigte Inhaltsabschnitt in seiner ursprünglichen intrinsischen Größe, vergrößert oder verkleinert angezeigt wird, hängt davon ab, ob die Viewbox 400px x 150px, kleiner oder größer als die Größe des Bildelements ist.

![Das Leopardenbild beschnitten mit der object-view-box Eigenschaft, mit einer 400px mal 150px Viewbox, die einen unskalierten Abschnitt des Bildes anzeigt](https://mdn.github.io/shared-assets/images/diagrams/css/object-view-box/object-view-box_xywh.jpg)

In diesem Fall wird das ersetzte Element nicht skaliert, da die rechteckige Viewbox, die durch die `object-view-box`-Eigenschaft definiert wird, und der rechteckige Bereich des `<img>` Elements die gleiche Größe haben, nämlich 400 x 150 Pixel.

Verringern Sie die `w`- und `h`-Werte, um einen Vergrößerungseffekt zu erzeugen; da der kleinere Bildabschnitt gedehnt wird, entsteht ein Vergrößerungseffekt.

Erhöhen Sie die Werte der `w`- und `h`-Argumente, um einen Verkleinerungseffekt zu erzeugen; da der größere Bildabschnitt verkleinert wird, entsteht ein Verkleinerungseffekt.

Durch die Animation der `x`- und `y`-Koordinaten wird ein Schwenkeffekt erzeugt, indem die Viewbox des Elements bewegt wird, während das Element selbst an seiner ursprünglichen Position bleibt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Anwendung

Dieses Beispiel demonstriert die grundlegende Anwendung und die Effekte der `object-view-box`-Eigenschaft mit Beispielen, die die drei verschiedenen `<basic-shape-rect>` Funktionen verwenden.

#### HTML

Wir haben drei fast identische {{htmlelement("img")}} Elemente, die in {{htmlelement("figure")}} Elemente eingebettet sind; der einzige Unterschied sind ihre Klassennamen.

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

Wir gestalten alle Bilder mit der gleichen Breite und Höhe und setzen dann jede Klasse und daher jedes Bild, um einen unterschiedlichen `object-view-box` Wert zu haben. Die intrinsische Größe des bemalten Handbildes beträgt `298px` mal `332px`. Wir setzen die {{cssxref("height")}} und {{cssxref("width")}}, um die extrinsische Größe auf `200px` mal `200px` zu setzen.

```css
img {
  width: 200px;
  height: 200px;
  border: 1px solid red;
}
```

Wir setzen drei unterschiedliche `object-view-box` Eigenschaftswerte, die drei verschiedene Formfunktionen verwenden. Der {{cssxref("basic-shape/xywh","xywh()")}} Funktionswert des `intrinsic` Elements zeigt einen `200px` quadratischen Abschnitt des Bildinhalts an, beginnend bei `70px` von links und `90px` von oben. Die {{cssxref("basic-shape/rect","rect()")}} Funktion des `zoom-in` Elements zeigt einen `160px` quadratischen Abschnitt des ursprünglichen Elements an, der von `110px` bis `270px` von der oberen Kante und `90px` bis `250px` von der linken Kante reicht. Die {{cssxref("basic-shape/inset","inset()")}} Funktion des `zoom-out` ersetzten Elements zeigt einen `298px` quadratischen Abschnitt des ursprünglichen Elements an und zeigt die gesamte Breite des Bildes, während 17px von oben und unten abgeschnitten werden.

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

Die `intrinsic` Version zeigt einen unskalierten Abschnitt des Bildes. Die `zoom-in` Version zeigt einen kleineren Abschnitt (`160px` Quadrat) des Bildes, hochskaliert, um in den `200px` quadratischen Viewbox zu passen. Da der Abschnitt gedehnt wird, sieht es vergrößert aus. Die `zoom-out` Version zeigt einen größeren (`298px` Quadrat) Abschnitt des Bildes, verkleinert, um in den `200px` quadratischen Viewbox zu passen. Da der Abschnitt verkleinert wird, sieht es verkleinert aus.

### Live-Zoom-in mit der object-view-box Eigenschaft

Dieses Beispiel demonstriert die Verwendung der `object-view-box` Eigenschaft, um einen Abschnitt eines ersetzten Elements ein- und auszuzoomen, innerhalb eines statisch dimensionierten HTML-Elements. In diesem Fall dient das Auge des Leoparden, innerhalb eines sehr großen Bildes, als Brennpunkt des Zoomeffekts.

#### HTML

Wir fügen ein {{htmlelement("img")}} Element und ein [`range`](/de/docs/Web/HTML/Reference/Elements/input/range) {{htmlelement("input")}} Element, zusammen mit einem zugehörigen {{htmlelement("label")}}, ein. Die natürlichen Abmessungen oder die intrinsische Größe des ursprünglichen Leopardenbildes betragen `1244px` Breite und `416px` Höhe, mit einem {{Glossary("aspect_ratio", "Seitenverhältnis")}} von `3:1`.

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

Wir definieren eine benutzerdefinierte Eigenschaft `--box-size`, die als Höhe und Breite in der {{cssxref("basic-shape/xywh", "xywh()")}} Funktion verwendet wird, um eine quadratische Viewbox mit einem Seitenverhältnis von `1:1` zu erstellen. Der Offsetpunkt der Viewbox, der Brennpunkt unseres Zoomeffekts, ist auf `500px` für die `x`-Koordinate und `30px` für die `y`-Koordinate gesetzt, was der oberen linken Ecke des rechten Auges des Leoparden entspricht.

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

Wir fügen einen Event-Listener zum Schieberegler hinzu, der den Wert der benutzerdefinierten Eigenschaft `--boxSize` aktualisiert, wenn der Benutzer damit interagiert. Um den Zoomeffekt zu verstärken, wenn der Schieber nach rechts bewegt wird, wird der Wert des Schiebers invertiert, indem er von `500px` subtrahiert wird, da das Verkleinern der Viewbox-Größe den Zoomeffekt verstärkt.

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

Bewegen Sie den Schieber nach rechts, um den Zoom-Effekt zu verstärken, und nach links, um ihn zu verringern. Der Schieber beeinflusst nur die Maße der Viewbox, während die x- und y-Werte, der Ursprungspunkt der Viewbox, konstant bleiben. Auch die Größe des `<img>` Elements ändert sich nicht.

### Schwenken mittels der object-view-box Eigenschaft

Dieses Beispiel zeigt, wie man ein Bild durch Animation des `object-view-box`-Eigenschaftswertes verschieben kann.

#### HTML

Das HTML enthält ein einzelnes Bild.

```html
<img
  src="https://mdn.github.io/shared-assets/images/examples/leopard.jpg"
  alt="leopard" />
```

#### CSS

Wir definieren eine Bildgröße und behalten die Viewbox-Maße, die `w` und `h` Komponenten der `xywh()` Funktion, konstant, während wir die oberen und linken Positionen animieren und die Position der `x` und `y` Parameter über fünf Sekunden ändern.

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

- [Verwendung der CSS `object-view-box` Eigenschaft](/de/docs/Web/CSS/CSS_images/Using_object-view-box)
- {{cssxref("object-fit")}}
- {{cssxref("object-position")}}
- {{cssxref("background-size")}}
- [Verständnis des Seitenverhältnisses](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- [CSS Bilder](/de/docs/Web/CSS/CSS_images) Modul
