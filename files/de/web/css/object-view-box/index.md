---
title: object-view-box
slug: Web/CSS/object-view-box
l10n:
  sourceCommit: b5a6d8bc5fd751032f70b88e7ec1ec61339937de
---

{{CSSRef}}{{SeeCompatTable}}

Die **`object-view-box`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert ein Rechteck als sichtbaren Bereich (Viewbox) innerhalb eines {{Glossary("replaced_elements", "ersetzten Elements")}} und ermöglicht es, den Inhalt des ersetzten Elements zu zoomen oder zu schwenken. Sie funktioniert ähnlich wie das SVG-Attribut {{SVGAttr("viewBox")}}.

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
  - : Eine {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/xywh","xywh()")}}, oder {{cssxref("basic-shape/rect","rect()")}} Funktion, die eine Viewbox für ein Element mit natürlichen Abmessungen (ersetzte Elemente) festlegt. Andernfalls wird es auf `none` aufgelöst.

## Beschreibung

Die `object-view-box`-Eigenschaft kann verwendet werden, um {{Glossary("replaced_elements", "ersetzte Elemente")}} wie Bilder und Videos zu zuschneiden oder zu skalieren. Sie funktioniert, indem sie einen Abschnitt des Inhalts des ersetzten Elements im verfügbaren Raum zeigt, der für dieses Element reserviert ist. Der angezeigte Abschnitt des ersetzten Elements wird durch den Wert der Eigenschaft definiert. Der verfügbare reservierte Raum wird durch die Standard-{{Glossary("extrinsic_size", "externe Größe")}} des Elements bestimmt. Der angezeigte Unterabschnitt des Inhalts kann vergrößert, verkleinert oder in seiner ursprünglichen Größe angezeigt werden, während das intrinsische {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Inhalts beibehalten wird.

Der Eigenschaftswert ist ein `<basic-shape-rect>`, eine der {{cssxref("basic-shape")}}-Funktionen, die darauf beschränkt sind, eine rechteckige Form zu definieren. Der Wert kann zum Beispiel eine {{cssxref("basic-shape/xywh","xywh()")}} Funktion sein:

```css
img {
  object-view-box: xywh(410px 0 400px 150px);
}
```

In diesem Fall befindet sich die obere linke Ecke des angezeigten Bildabschnitts `410px` von der linken Kante und `0` von oben entfernt, wie durch die x- und y-Koordinatenparameter definiert. Die Größe des Abschnitts des ursprünglichen Bildes, der angezeigt wird, ist `400px` breit und `150px` hoch; die `w`- und `h`-Komponenten der Funktion. Dieser 400x150 Abschnitt des Bildes wird in dem Raum angezeigt, der für das Bild selbst reserviert war, als die Seite gestaltet wurde. Ob der angezeigte Inhaltsabschnitt in seiner ursprünglichen Größe, vergrößert oder verkleinert dargestellt wird, hängt davon ab, ob die Viewbox 400px x 150px, kleiner oder größer ist als die Größe des Bildelements.

![Das Leopard-Bild zugeschnitten mit der object-view-box Eigenschaft, mit einer 400px mal 150px Viewbox, die einen nicht skalierten Abschnitt des Bildes darstellt.](https://mdn.github.io/shared-assets/images/diagrams/css/object-view-box/object-view-box_xywh.jpg)

In diesem Fall, da die durch die `object-view-box`-Eigenschaft definierte rechteckige Viewbox und der rechteckige Bereich des `<img>`-Elements die gleiche Größe haben, nämlich 400 x 150 Pixel, wird das ersetzte Element nicht skaliert.

Reduzieren Sie die `w`- und `h`-Werte, um einen vergrößerten Effekt zu erzeugen; da der kleinere Bildabschnitt gestreckt wird, hat er einen vergrößerten Effekt.

Erhöhen Sie die `w`- und `h`-Argumentwerte, um einen verkleinerten Effekt zu erzeugen; da der größere Bildabschnitt verkleinert wird, hat er einen verkleinerten Effekt.

Die Animation der `x`- und `y`-Koordinaten erzeugt einen Schwenkeffekt, indem die Viewbox des Elements bewegt wird, während das Element selbst an seiner ursprünglichen Position bleibt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel demonstriert die grundlegende Nutzung und die Effekte der `object-view-box`-Eigenschaft mit Beispielen, die die drei verschiedenen `<basic-shape-rect>`-Funktionen verwenden.

#### HTML

Wir haben drei fast identische {{htmlelement("img")}}-Elemente, die in {{htmlelement("figure")}}-Elemente eingepackt sind; der einzige Unterschied sind ihre Klassennamen.

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

Wir gestalten alle Bilder so, dass sie die gleiche Breite und Höhe haben, und setzen dann jede Klasse und damit jedes Bild so, dass sie einen anderen `object-view-box`-Wert haben. Die intrinsische Größe des gemalten Handbildes ist `298px` x `332px`. Wir setzen die {{cssxref("height")}} und {{cssxref("width")}}, um die äußere Größe auf `200px` x `200px` festzulegen.

```css
img {
  width: 200px;
  height: 200px;
  border: 1px solid red;
}
```

Wir setzen drei verschiedene `object-view-box`-Eigenschaftswerte mit drei verschiedenen Formfunktionen. Der `intrinsic` Element's {{cssxref("basic-shape/xywh","xywh()")}} Funktionswert zeigt einen `200px` quadratischen Abschnitt des Bildinhalts, beginnend `70px` von der linken und `90px` von der oberen Kante. Der `zoom-in` Element's {{cssxref("basic-shape/rect","rect()")}} Funktionswert zeigt einen `160px` quadratischen Abschnitt des ursprünglichen Elements, der von `110px` bis `270px` von der oberen Kante und `90px` bis `250px` von der linken Kante reicht. Der `zoom-out` ersetzte Element's {{cssxref("basic-shape/inset","inset()")}} Funktionswert zeigt einen `298px` quadratischen Abschnitt des ursprünglichen Elements, wobei die gesamte Breite des Bildes angezeigt wird, während 17px von oben und unten abgeschnitten werden.

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

Die `intrinsic` Version zeigt einen nicht skalierten Abschnitt des Bildes. Die `zoom-in` Version zeigt einen kleineren Abschnitt (`160px` quadratisch) des Bildes, der auf `200px` quadratischen Viewbox skaliert ist. Da der Abschnitt gestreckt wird, sieht er vergrößert aus. Die `zoom-out` Version zeigt einen größeren (`298px` quadratischen) Abschnitt des Bildes, der auf `200px` quadratischen Viewbox verkleinert ist. Da der Abschnitt verkleinert wird, sieht er verkleinert aus.

### Live-Zoom mit der object-view-box Eigenschaft

Dieses Beispiel demonstriert die Verwendung der `object-view-box`-Eigenschaft, um einen Abschnitt eines ersetzten Elements innerhalb eines statisch dimensionierten HTML-Elements ein- und auszuzoomen. In diesem Fall dient das Auge des Leopards innerhalb eines sehr großen Bildes als Brennpunkt des Zoom-Effekts.

#### HTML

Wir fügen ein {{htmlelement("img")}} Element und ein [`range`](/de/docs/Web/HTML/Reference/Elements/input/range) {{htmlelement("input")}} Element mit einem zugehörigen {{htmlelement("label")}} ein. Die natürlichen Dimensionen oder die intrinsische Größe des ursprünglichen Leopardenbildes sind `1244px` breit und `416px` hoch, mit einem {{Glossary("aspect_ratio", "Seitenverhältnis")}} von `3:1`.

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

Wir definieren eine `--box-size`-benutzerdefinierte Eigenschaft, die als Höhe und Breite in der {{cssxref("basic-shape/xywh", "xywh()")}}-Funktion verwendet wird, um eine quadratische Viewbox mit einem Seitenverhältnis von `1:1` zu erstellen. Der Offsetpunkt der Viewbox, der Brennpunkt in unserem Zoom-Effekt, ist auf `500px` für die `x`-Koordinate und `30px` für die `y`-Koordinate festgelegt, was der oberen linken Ecke des rechten Auges des Leoparden entspricht.

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

Wir fügen einen Event-Listener zum Slider hinzu, der den Wert der benutzerdefinierten Eigenschaft `--boxSize` aktualisiert, wenn der Benutzer mit ihm interagiert. Um den Zoom-Effekt zu erhöhen, wenn der Slider nach rechts bewegt wird, wird der Wert des Sliders invertiert, indem er von `500px` abgezogen wird, da das Reduzieren der Viewbox-Größe den Zoom-Effekt erhöht.

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

Bewegen Sie den Slider nach rechts, um den Zoom-Effekt zu verstärken, und nach links, um ihn zu verringern. Der Slider beeinflusst nur die Dimensionen der Viewbox, während die x- und y-Werte, der Ursprungspunkt der Viewbox, konstant bleiben. Auch die Größe des `<img>`-Elements ändert sich nicht.

### Schwenken mit der object-view-box Eigenschaft

Dieses Beispiel demonstriert das Schwenken eines Bildes durch die Animation des `object-view-box`-Eigenschaftswerts.

#### HTML

Das HTML enthält ein einzelnes Bild.

```html
<img
  src="https://mdn.github.io/shared-assets/images/examples/leopard.jpg"
  alt="leopard" />
```

#### CSS

Wir definieren eine Bildgröße und halten die Dimensionen der Viewbox, die `w`- und `h`-Komponenten der `xywh()`-Funktion, konstant, während wir die oberen und linken Positionen animieren, um die Position der `x`- und `y`-Parameter über fünf Sekunden zu ändern.

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
- [CSS-Bilder](/de/docs/Web/CSS/CSS_images)-Modul
